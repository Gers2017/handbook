---
working group: Panda Working Group
status: draft
created: 2020-05-21
rfc: 0001-schema
version: 1
authors:
  -
    name: Vincent Ahrend
    email: mail@vincentahrend.com
---

# Schema

## Summary

p2panda is a protocol for publishing structured data in a semi-federated network of peers. Messages are published by p2panda *clients* using the [bamboo protocol](https://github.com/AljoschaMeyer/bamboo) and relayed to other peers either through *servers* or via direct connections. While messages are encoded by clients as *entries* on *bamboo logs*, the payload of these entries is encoded using the p2panda message schemas described in this document.

This schema specification describes a meta-schema, that is used to publish specifications for application data schemas. Each schema definition describes both the format of messages used for data exchange as well as the database schema used to retain the message content. The latter aspect can also be seen as creating materialized view from bamboo logs (inspired by the Kappa Database Architecture). 

Server administrators explicitly decide which schemas to materialize on their infrastructure based on the needs of their users. Application developers can effortlessly update and extend their schemata by publishing *migrations*, which are then applied on servers that materialize these schematas.

Being able to publish custom data schemas in a p2p network allows application developers to quickly create and distribute clients in a distributed architecture. Building on the bamboo protocol allows for high-performance synchronisation and data validation. By leveraging materialized views, clients can run on ressource-restricted hardware such as mobile devices and still benefit from the advantages of a distributed networking architecture.

# Usage

Implementations of the p2panda schema should allow for easy and fun usage. This section outlines a couple of essential user flows using a (fictional) command line interface `panda`.

All of the examples presume an already existing bamboo keypair on the local computer.

## Creating a new schema

The `panda` command line application is used to register a new schema for the fictional *slothmail* application.

```bash
$ panda schema slothmail init --description "Send slothmail to your friends!"
🐼 Registered slothmail schema at log 12
```

The *slothmail* schema's bamboo log was initialized in the local user's log number 12.

A couple of fields are added to the schema by reading from a migration definition:

```bash
$ panda schema slothmail migrate slothmail-001.yaml
Created fields 
- subject<text>
- body<text>
- created<datetime>
- recipient<panda-profile>

🐼 Published slothmail version 2
```

The *slothmail* application can now start publishing slothmail messages.

## Inspecting a schema

The panda cli can also be used to inspect a schema.

```bash
$ panda schema slothmail
name: slothmail
spec: 1
description: Send slothmail to your friends!
source: 
  - 88e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
  - 12
  - 4
fields:
  - subject:
    type: text
  - body:
    type: text
  - recipient:
    type: relation
    schema: 
      - d4a1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
      - 10
  - created:
    type: timestamp
```

## Materializing a new schema on a server

All p2panda servers make available their user's log entries to each other. In addition to that, they can offer materialized views of some of the data contained in those logs. For this, server administrators instruct the server to index messages of a certain schema.

Here, the *slothmail* schema is indexed. It is referred to by the public key of the schema's author and the log id in which that author published the schema. 

```bash
$ beep-beep-server index 88e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb 12
🎍 Now indexing slothmail messages
```

# Message Specification

This section describes the data format for *schema messages* and *instance messages*. Schema messages contain instructions for forming both a database schema and message format. Instance messages are the instantiations of this message format. Instance messages are used to create materialized views of their contents. An entity of a materialized view is called an *intance*. 

As an example, the *slothmail* schema is described in a sequence of *schema messages*, which are published by the slothmail authors on the slothmail log. A slothmail client is then implementing this schema and allows end users to create *instance messages*, which contain the slothmail *instances* they send each other. A server reads users' slothmail *instance messages* and creates a materialized view of slothmail *instances*.

## Initial Schema instantiation

When indexing a schema, a server executes all migrations in the schema’s log in order to create a database table capable of holding instances of the schema at its latest known version. Now, all known *instance messages* can be inserted into the database, which results in the database contents representing a view of all known instances at their latest versions.

Migrations can also be applied to messages in order to make them compatible with the current schema version. When an incoming message specifies a schema version older than the latest known schema version, all intermittent migrations are applied to this message so that it can be applied to the database. When a message specifies a schema version that is not known, the server tries to request that schema version’s entry using bamboo.

## Schema migration messages

A schema describes a database schema and a message specification through a series of schema migrations. A schema is represented by a bamboo log. Every message on the log is a schema migration. Thereby, the version number of a schema migration is the *sequence number* of the migration's log entry.

Each schema migration is one of:

- `schema-meta`: sets schema metadata
- `schema-migration`: Used by server to create or alter database tables and to migrate *instance messages*.
- `schema-revert`: Used by server to revert to an earlier version, recreating instance data, which may have been deleted or corrupted by intermittent migrations.

Schema migrations are encoded using a subset of [CDDL](https://tools.ietf.org/html/rfc8610#page-5). Examples in this draft are encoded in YAML.

### Meta schema message

A meta schema message describes the schema itself. It contains following fields. Only those marked with an X in the "Required" column are required.

| Field name | Description | Required |
| --- | --- | --- |
| name | Name of the schema | X |
| spec | Which verison of this schema meta-spec is implemented | X |
| description | Description of the schema's purpose | |
| homepage | URL pointing at a web site for the schema | |
| license | A comma-separated list of licenses that apply for the schema definition | |
| contact | An email-address for contacting the schema's authors | |

#### Examples

Minimal meta schema message for a fictional messaging format *slothmail*.

```yaml
kind: schema-meta
name: slothmail
spec: 1
```

Example using all available fields

```yaml
kind: schema-meta
name: slothmail
spec: 1
description: Send slothmail to your friends!
homepage: https://liebechaos.org/activity/slothmail
license: CC-BY-SA 2.0 <https://creativecommons.org/licenses/by-sa/2.0/>
contact: info@liebechaos.org
```

### Migrate schema message

A migrate schema message creates or alters the schema’s table and updates its rows. A migration describes changes to one or more fields. If no database table exists for the schema, a new database table is created when applying the message. Server implementations should consider that schema names are non-unique when constructing table names.

Fields may be created, updated or removed. For each created or updated field, a new data type is specified. For updated fields, a default value must be specified that is stored if conversion to the new data type fails. Each field is described by its

- action (`create`, `update`, or `remove`)
- name (unicode string)
- type (see below)
- validation (optional regex pattern)

Type must be one of:

- `varchar` (max 255 chars)
- `text`
- `integer`
- `float`
- `boolean`
- `timestamp` (ISO-8601 timestamp)
- `relation`

Every type may also be specified as an array by adding `[]` behind the type name.

A `relation` type also specifies the `versioned-schema` of its foreign key. A `relation` type may specify `cascade: true` in which case schema instances are deleted once the foreign key is deleted.

The field `validation` may contain a regular expression used to validate messages of this schema.

If a `schema-migration` message removes the last of a schema’s fields, the schema’s database table may be dropped.

#### Examples

Example to create the *slothmail* schema

```yaml
kind: schema-migration
fields:
  - subject:
    action: create
    type: text
  - body:
    action: create
    type: text
  - recipient:
    action: create
    type: relation
    schema: 
      # author for the schema of the recipient field
      - d4a1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
      # schema's log id
      - 10
      # relation is schema-version agnostic
  - created:
    action: create
    type: timestamp
```

Example to add an attachments field to the slothmail schema:

```yaml
kind: schema-migration
fields:
  - attachments:
    action: create
    type: relation[]
    schema: 
      - ac1b08420ceaac230839b755845a9ffbd4a1cb88a66f02f8db635ce26441cc5d
      - 78434
```

Example to remove the attachments field and change the subject to not contain line breaks

```yaml
kind: schema-migration
fields:
  - attachments
    action: remove
  - subject
    action: update
    validation: ^[^#\r\n].*$
    default: <Subject>
```

### Revert schema message

A revert schema message reverts previous migrations and resets the database to a previous schema version (`target`). This is desirable instead of reverting by altering fields in order to restore data deleted by previous migrations.

The database is recreated by dropping the database and reapplying all known instance messages and all migrations up to the target migration. `create` and `update` instance messages, which specify a schema version later than the target version are ignored. `delete` instance messages are applied regardless of the version mismatch in order to prevent schema authors from restoring user data against their will.

#### Examples

The previous example removed the `attachments` field. During migration all slothmail attachments were deleted from slothmail instances. Simply adding the field back would not recover the deleted attachments. Here, the schema is reverted to a previous version that still had the `attachments` field, which recreates all the attachments by re-indexing all slothmail instances.

```yaml
kind: schema-revert
target: 2
```

## Instance messages

Just like the schema itself, instances of the schema are described by messages. However, these instance messages are encoded in bamboo entries of users’ logs - not the schema log. Every instance message specifies a *versioned schema*.

Possible instance message kinds are:

- `create`: creates a database row
- `update`: updates a row
- `delete`: drops a row

Every *instance message* affects exactly one row of the schema’s table. 

Every instance has an author and can only be altered by *instance messages* from this author.

All *instance messages* for one author and schema are contained in the same log.

Instance messages are encoded using [CBOR](https://cbor.io/). 

### Create instance message

Applying a `create` instance message inserts one new row into the schema’s table. The message contains:

- `versioned-schema`
- a sequence of `field` contents indexed by the field's name

Instances are identified by the `sequence number` of the create instance message. This is called the instance's `instance-id`.

Applying a migration to a create instance message transforms the contents to conform to the a new schema version.

#### Examples

Example to create a slothmail message. Here, the message is created using an older version of the schema than that of the last example.

```yaml
kind: create
schema: 
  - 88e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
  - 12
  # schema's version (sequence number)
  - 1
fields:
  - subject: |
    Hello!
    ...friend
  # fields may be empty
  - body: 
  - created: 2020-05-22T11:58:50+0000
```

Note that the subject field contains a multi-line string and is specified using schema version `1`. A server that already applied the last example migration from the *schema-migrate* section, which changed the subject field to only allow single-line content, may migrate this message in order to be compatible. As the subject line would fail the validation check, it would be replaced with the default value `<Subject>`.

### Update instance message

An update instance message updates the row specified by the instance id. For one or more of the fields of the schema, the row is updated with new contents.

Applying a migration to an update instance message transforms the content that is written when applying the message.

#### Examples

Example to update the previous slothmail message, fixing the subject line to be one line only.

```yaml
kind: update
schema:
  - 88e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
  - 12
  - 4
instance: 98e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
fields:
  - subject: Hello! ...friend
```

### Delete instance message

A delete instance message drops a table row referred to by an instance id.

Applying a migration to a delete instance message may make it obsolete if the affected row is deleted by a migration.

#### Examples

Example to delete the slothmail message.

```yaml
kind: delete
instance: 98e1cb88a66f02f8db635ce26441cc5dac1b08420ceaac230839b755845a9ffb
```


## Copyright

This document is published under the [CC-BY-SA 2.0 license](https://creativecommons.org/licenses/by-sa/2.0/).

Copyright 2020 Vincent Ahrend