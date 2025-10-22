import{r as t,R as n}from"./iframe-CeoX7Dbo.js";import{m as P,O,b as V,a as R,G as C}from"./Globe-CTua9O0E.js";import{V as G,E as S}from"./Entity-Czf7NYHW.js";import"./preload-helper-PPVm8Dsz.js";const x=({visibility:s,size:c,color:u,rotation:a,offset:r,text:l,face:f,isRTL:i,align:m,outline:p,outlineColor:E,opacity:b,_addLabel:d,_removeLabel:y,...A})=>{const e=t.useRef(null);return t.useEffect(()=>{typeof s=="boolean"&&e.current&&e.current?.setVisibility(s)},[s]),t.useEffect(()=>{typeof a=="number"&&e.current&&e.current?.setRotation(a*Math.PI/180)},[a]),t.useEffect(()=>{typeof c=="number"&&e.current&&e.current?.setSize(c)},[c]),t.useEffect(()=>{typeof p=="number"&&e.current&&e.current?.setOutline(p)},[p]),t.useEffect(()=>{typeof b=="number"&&e.current&&e.current?.setOpacity(b)},[b]),t.useEffect(()=>{typeof i=="boolean"&&e.current&&e.current?.setRtl(i)},[i]),t.useEffect(()=>{r&&e.current&&(r instanceof P?e.current?.setOffset(r.x,r.y,r.z):r instanceof O?e.current?.setOffset(r.x,r.y):e.current?.setOffset(r[0],r[1],r[2]))},[r]),t.useEffect(()=>{typeof l=="string"&&e.current&&e.current?.setText(l)},[l]),t.useEffect(()=>{typeof f=="string"&&e.current&&e.current?.setFace(f)},[f]),t.useEffect(()=>{typeof m=="string"&&e.current&&e.current?.setAlign(m)},[m]),t.useEffect(()=>{typeof u=="string"&&e.current&&e.current?.setColorHTML(u)},[u]),t.useEffect(()=>{typeof E=="string"&&e.current&&e.current?.setOutlineColorHTML(E)},[E]),t.useEffect(()=>(e.current=new V({...A,color:u,size:c,text:l,face:f,isRTL:i,align:m,outline:p,outlineColor:E,opacity:b,offset:r,visibility:s,rotation:a?a*Math.PI/180:0}),e.current&&d&&d(e.current),()=>{e.current&&y&&y(e.current)}),[d,y]),null},H={component:x,title:"Components/Entity/Label",argTypes:{face:{options:["Sacramento-Regular","NotoSansArabic-Regular","Audiowide-Regular"],control:{type:"select"}}}},o={args:{color:"#053df3",outlineColor:"#33fa07",rotation:0,face:"Audiowide-Regular",align:"center",opacity:1,size:32,outline:.2,text:"Hello, World!",offset:[0,0,0],visibility:!0,isRTL:!1},render:s=>n.createElement(R,null,n.createElement(C,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(G,{name:"test"},n.createElement(S,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(x,{...s})))))},g={args:{...o.args,text:"حبيبي",face:"NotoSansArabic-Regular",isRTL:!0},render:s=>n.createElement(R,null,n.createElement(C,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(G,{name:"test"},n.createElement(S,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(x,{...s})))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#053df3",
    outlineColor: "#33fa07",
    rotation: 0,
    face: 'Audiowide-Regular',
    align: 'center',
    opacity: 1,
    size: 32,
    outline: 0.2,
    text: "Hello, World!",
    offset: [0, 0, 0],
    visibility: true,
    isRTL: false
  },
  render: (args: LabelParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Label {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...o.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    text: 'حبيبي',
    face: 'NotoSansArabic-Regular',
    isRTL: true
  },
  render: (args: LabelParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Label {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...g.parameters?.docs?.source}}};const M=["Default","Arabic"];export{g as Arabic,o as Default,M as __namedExportsOrder,H as default};
