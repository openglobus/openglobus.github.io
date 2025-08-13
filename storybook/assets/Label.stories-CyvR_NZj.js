import{r,R as s}from"./index-D4lIrffr.js";import{m as D,O as N,b as v,a as L,G as T}from"./Globe-WF22otG3.js";import{V as w,E as H}from"./Entity-CPP4grXy.js";const R=({visibility:a,size:u,color:l,rotation:o,offset:n,text:f,face:i,isRTL:m,align:p,outline:E,outlineColor:b,opacity:g,_addLabel:y,_removeLabel:x,...M})=>{const t=r.useRef(null);return r.useEffect(()=>{var e;typeof a=="boolean"&&t.current&&((e=t.current)==null||e.setVisibility(a))},[a]),r.useEffect(()=>{var e;typeof o=="number"&&t.current&&((e=t.current)==null||e.setRotation(o*Math.PI/180))},[o]),r.useEffect(()=>{var e;typeof u=="number"&&t.current&&((e=t.current)==null||e.setSize(u))},[u]),r.useEffect(()=>{var e;typeof E=="number"&&t.current&&((e=t.current)==null||e.setOutline(E))},[E]),r.useEffect(()=>{var e;typeof g=="number"&&t.current&&((e=t.current)==null||e.setOpacity(g))},[g]),r.useEffect(()=>{var e;typeof m=="boolean"&&t.current&&((e=t.current)==null||e.setRtl(m))},[m]),r.useEffect(()=>{var e,C,G;n&&t.current&&(n instanceof D?(e=t.current)==null||e.setOffset(n.x,n.y,n.z):n instanceof N?(C=t.current)==null||C.setOffset(n.x,n.y):(G=t.current)==null||G.setOffset(n[0],n[1],n[2]))},[n]),r.useEffect(()=>{var e;typeof f=="string"&&t.current&&((e=t.current)==null||e.setText(f))},[f]),r.useEffect(()=>{var e;typeof i=="string"&&t.current&&((e=t.current)==null||e.setFace(i))},[i]),r.useEffect(()=>{var e;typeof p=="string"&&t.current&&((e=t.current)==null||e.setAlign(p))},[p]),r.useEffect(()=>{var e;typeof l=="string"&&t.current&&((e=t.current)==null||e.setColorHTML(l))},[l]),r.useEffect(()=>{var e;typeof b=="string"&&t.current&&((e=t.current)==null||e.setOutlineColorHTML(b))},[b]),r.useEffect(()=>(t.current=new v({...M,color:l,size:u,text:f,face:i,isRTL:m,align:p,outline:E,outlineColor:b,opacity:g,offset:n,visibility:a,rotation:o?o*Math.PI/180:0}),t.current&&y&&y(t.current),()=>{t.current&&x&&x(t.current)}),[y,x]),null},F={component:R,title:"Components/Entity/Label",argTypes:{face:{options:["Sacramento-Regular","NotoSansArabic-Regular","Audiowide-Regular"],control:{type:"select"}}}},c={args:{color:"#053df3",outlineColor:"#33fa07",rotation:0,face:"Audiowide-Regular",align:"center",opacity:1,size:32,outline:.2,text:"Hello, World!",offset:[0,0,0],visibility:!0,isRTL:!1},render:a=>s.createElement(L,null,s.createElement(T,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},s.createElement(w,{name:"test"},s.createElement(H,{name:"Custom Entity",lon:0,lat:0,alt:0},s.createElement(R,{...a})))))},d={args:{...c.args,text:"حبيبي",face:"NotoSansArabic-Regular",isRTL:!0},render:a=>s.createElement(L,null,s.createElement(T,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},s.createElement(w,{name:"test"},s.createElement(H,{name:"Custom Entity",lon:0,lat:0,alt:0},s.createElement(R,{...a})))))};var S,A,P;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(A=c.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var O,V,h;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(h=(V=d.parameters)==null?void 0:V.docs)==null?void 0:h.source}}};const J=["Default","Arabic"];export{d as Arabic,c as Default,J as __namedExportsOrder,F as default};
