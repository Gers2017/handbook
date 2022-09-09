  query NextArgs($publicKey: String!, $viewId: String) {
    nextArgs(publicKey: $publicKey, viewId: $viewId) {
      logId
      seqNum
      backlink
      skiplink
    }
  }
`,Ng=UQ.gql`
  mutation Publish($entry: String!, $operation: String!) {
    publish(entry: $entry, operation: $operation) {
      logId
      seqNum
      backlink
      skiplink
    }
  }
`;async function hg(A,B,Q,g,I,C){const E=await async function(A,B,Q){return(await A.request(kg,{publicKey:B,viewId:Q})).nextArgs}(A,B.publicKey(),g),D=function(A){ig({operation:A},{operation:{type:"object"}});const{action:B="create",schemaId:Q,fields:g}=A;let I,C;if("string"==typeof A.previous?I=A.previous.split("_"):"object"==typeof A.previous&&(I=A.previous),ig({action:B,schemaId:Q},{action:{type:"string"},schemaId:{type:"string"}}),!["create","update","delete"].includes(B))throw new Error(`Unknown operation action "${B}"`);void 0!==g&&(C=g instanceof Mg?g.__internal:new Mg(g).__internal);try{return wg.encodeOperation(BigInt(ag[B]),Q,I,C)}catch(E){throw new Error(`Could not encode operation: ${E.message}`)}}({action:"update",previous:g,schemaId:Q,fields:{[`game_field_${I}`]:C}}),w=function(A,B){ig({entry:A,keyPair:B},{entry:{type:"object"},keyPair:{type:"object"}});const{skiplink:Q,backlink:g,operation:I}=A,C=Gg(A.logId,BigInt(0)),E=Gg(A.seqNum,BigInt(1));ig({logId:C,seqNum:E,skiplink:Q,backlink:g,operation:I},{logId:{type:"bigint",min:0},seqNum:{type:"bigint",min:1},skiplink:{length:68,optional:!0,validHex:!0},backlink:{length:68,optional:!0,validHex:!0},operation:{validHex:!0}});try{return wg.signAndEncodeEntry(C,E,Q,g,I,B.__internal)}catch(D){throw new Error(`Could not sign and encode entry: ${D.message}`)}}({...E,operation:D},B);return await async function(A,B,Q){return(await A.request(Ng,{entry:B,operation:Q})).publish}(A,w,D),ig({value:i=w},{value:{validHex:!0}}),wg.generateHash(i);var i}const cg="privateKey",sg="lastMove";const Rg=({config:A})=>{const B=(0,g.useMemo)((()=>function(){const A=window.localStorage.getItem(cg);if(A)return new og(A);const B=new og;return window.localStorage.setItem(cg,B.privateKey()),B}()),[]),Q=(0,g.useMemo)((()=>function(A){const B=parseInt(A.slice(0,8),16);return yQ[B%yQ.length]}(B.publicKey())),[B]),I=(0,g.useMemo)((()=>new UQ.GraphQLClient(A.endpoint)),[A.endpoint]),[C,E]=(0,g.useState)(),[D,w]=(0,g.useState)(),[i,o]=(0,g.useState)(),[G,M]=(0,g.useState)((()=>window.localStorage.getItem(sg))),[a,F]=(0,g.useState)(),[k,N]=(0,g.useState)(!0),h=(0,g.useMemo)((()=>function(A,B){let Q=[];for(let g=0;g<A;g+=1)for(let I=0;I<A;I+=1)Q=Q.concat([...HQ(g,I,A,B),...LQ(g,I,A,B),...eQ(g,I,A,B),...SQ(g,I,A,B)]);return Q}(A.boardSize,A.winSize)),[A.boardSize,A.winSize]),c=(0,g.useMemo)((()=>i?function(A,B){const Q=[],g=A.reduce(((A,B,Q)=>KQ(B)?(B in A||(A[B]=[]),A[B].push(Q),A):A),{}),I=Object.keys(g);for(let C=0;C<I.length;C+=1)for(let A=0;A<B.length;A+=1){const E=I[C],D=g[E],w=B[A];!w.some((A=>!D.includes(A)))&&Q.push({player:E,combination:w})}return Q}(i,h):[]),[i,h]),s=(0,g.useCallback)((async()=>{const B=await async function(A,B,Q,g){const I=new Array(g*g).fill(0).map(((A,B)=>`game_field_${B+1}`)),C=UQ.gql`
    query FetchBoard($documentId: String!) {
      board: ${B}(id: $documentId) {
        meta {
          viewId
        }
        fields {
          ${I.join(" ")}
        }
      }
    }
  `,E=await A.request(C,{documentId:Q});return{viewId:E.board.meta.viewId,fields:I.map((A=>E.board.fields[A]))}}(I,A.schemaId,A.documentId,A.boardSize);a!==B.viewId&&(w(B.viewId),o(B.fields),F(B.viewId),N(!0))}),[I,A.boardSize,A.documentId,A.schemaId,a]),R=(0,g.useCallback)((async g=>{if(!D||!k||G===D)return void E("Wait until another player made a move first");N(!1),o((A=>{if(A)return A[g-1]=Q,[...A]}));const C=await hg(I,B,A.schemaId,D,g,Q);M(C),function(A){window.localStorage.setItem(sg,A)}(C)}),[D,I,G,B,A,Q,k]);return(0,g.useEffect)((()=>{const B=window.setInterval((()=>{s()}),A.updateIntervalMs);return s(),()=>{window.clearInterval(B)}}),[I,s,A.updateIntervalMs]),g.createElement(g.Fragment,null,i&&g.createElement(Jg,null,g.createElement(Yg,null,C&&g.createElement(Lg,{message:C,onClose:()=>{E("")}}),g.createElement(Ug,{onSetField:R,animal:Q,fields:i,winners:c})),Q&&g.createElement(ng,{animal:Q,winSize:A.winSize})))},Yg=bA.div`
  display: inline-block;
  position: relative;
`,Jg=bA.div`
  text-align: center;
`,Ug=({onSetField:A,animal:B,fields:Q,winners:I})=>g.createElement(yg,{boardSize:Math.sqrt(Q.length)},Q.map(((Q,C)=>{const E=C+1,D=Q===B,w=I.some((({player:A,combination:B})=>Q===A&&B.includes(C)));return g.createElement(Kg,{onClick:()=>{D||A(E)},alreadySet:D,key:`field-${E}`,winner:w},KQ(Q)&&Q)}))),yg=bA.div`
  display: inline-grid;
  font-size: ${28}px;
  gap: ${17}px;
  grid-auto-rows: ${60}px;
  grid-template-columns: ${A=>`repeat(${A.boardSize}, 60px)`};
`,Kg=bA.div`
  align-content: center;
  background-color: ${A=>A.winner?"#ffdb9a":"#efefef"};
  border-radius: 50%;
  cursor: ${A=>A.alreadySet?"normal":"pointer"};
  display: inline-grid;
  text-align: center;
  transition: background-color linear 20ms;
  user-select: none;

  ${A=>{if(!A.alreadySet)return`\n      &:hover {\n        background-color: ${A.winner?"#ffc04d":"#ddd"};\n      }\n    `}}
`,Hg=({children:A})=>{const[B,Q]=(0,g.useState)(!1);return(0,g.useEffect)((()=>{(async()=>{await Fg(),Q(!0)})()}),[]),B?A:null},Lg=({message:A,onClose:B})=>g.createElement(eg,null,g.createElement(Sg,null,g.createElement(qg,null,A),g.createElement(tg,{onClick:B},"Okay"))),eg=bA.div`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`,Sg=bA.div`
  align-items: center;
  background-color: #8ac18a;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 75px 25px;
  padding: 10px;
`,qg=bA.p`
  font-size: 20px;
  margin-left: 10px;
  margin-right: 10px;
  text-align: center;
`,tg=bA.button`
  background-color: #a68ac1;
  border-radius: 15px;
  border: 0;
  color: #f2eef6;
  cursor: pointer;
  font-size: 15px;
  margin-bottom: 10px;
  outline: 0;
  padding: 10px;

  &:hover {
    background-color: #b199c9;
  }
`,ng=({animal:A,winSize:B})=>g.createElement(rg,null,"Put ",B,"x ",A," in a row to win"),rg=bA.div`
  font-size: 15px;
  margin: 20px;
  text-align: center;
`,pg={boardSize:4,winSize:3,documentId:"00206e635f39093c4a78942cfb9ee07dc148daac373efd9882e2b651a39153eea75d",endpoint:"https://welle.liebechaos.org/graphql",schemaId:"zoo_adventures_0020d0ab014720c6849d99ab17f694bcedbc267614021acfb9559f2ee7f64bce396f",updateIntervalMs:2e3},xg=A=>{const B={...pg,...A};if(B.boardSize<3)throw new Error("boardSize can not be smaller than 2");if(B.winSize<2)throw new Error("winSize can not be smaller than 1");if(B.boardSize<B.winSize)throw new Error("winSize can not be larger than boardSize");return g.createElement(Hg,null,g.createElement(Rg,{config:B}))}}}]);