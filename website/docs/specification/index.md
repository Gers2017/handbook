---
title: Introduction
---

p2panda is a peer-to-peer protocol and event-driven data store for secure, energy-efficient local-first applications. It can be used in both fully distributed and federated network topologies, offers encryption (via MLS), multi-writer editing, permissions and data schemas.

The specification is compatible with being implemented in both native and web applications. The protocol is based on the [Bamboo][bamboo] append-only log that supports transitive partial replication and local deletion.

## Status

This specification document is a proposal for version 1 of the p2panda protocol, it is currently under review, with some sections still in draft state, so please be aware that breaking changes may occur.

## Terminology

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED", "NOT RECOMMENDED", "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC2119][rfc2119] when, and only when, they appear in all capitals, as shown here.

:::info Definition: Requirement Codes

In this document we assign a code to each specification requirement, this is to make it easier for implementers to track the requirements they need to meet.

:::

[bamboo]: https://github.com/AljoschaMeyer/bamboo
[rfc2119]: https://datatracker.ietf.org/doc/rfc2119/
