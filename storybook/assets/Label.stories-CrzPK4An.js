import{r,R as s}from"./index-B-SYruCi.js";import{R as C,V as v,e as M,j as W,a as h,G as w}from"./Globe-BnqXSAgn.js";import{V as D,E as H}from"./Entity-B2e2ke--.js";const R=({visibility:a,size:u,color:l,rotation:o,offset:n,text:f,face:i,isRTL:m,align:p,outline:E,outlineColor:b,opacity:g,_addLabel:y,_removeLabel:x,...N})=>{const t=r.useRef(null);return r.useEffect(()=>{var e;typeof a=="boolean"&&t.current&&((e=t.current)==null||e.setVisibility(a))},[a]),r.useEffect(()=>{var e;typeof o=="number"&&t.current&&((e=t.current)==null||e.setRotation(o*C))},[o]),r.useEffect(()=>{var e;typeof u=="number"&&t.current&&((e=t.current)==null||e.setSize(u))},[u]),r.useEffect(()=>{var e;typeof E=="number"&&t.current&&((e=t.current)==null||e.setOutline(E))},[E]),r.useEffect(()=>{var e;typeof g=="number"&&t.current&&((e=t.current)==null||e.setOpacity(g))},[g]),r.useEffect(()=>{var e;typeof m=="boolean"&&t.current&&((e=t.current)==null||e.setRtl(m))},[m]),r.useEffect(()=>{var e,S,A;n&&t.current&&(n instanceof v?(e=t.current)==null||e.setOffset(n.x,n.y,n.z):n instanceof M?(S=t.current)==null||S.setOffset(n.x,n.y):(A=t.current)==null||A.setOffset(n[0],n[1],n[2]))},[n]),r.useEffect(()=>{var e;typeof f=="string"&&t.current&&((e=t.current)==null||e.setText(f))},[f]),r.useEffect(()=>{var e;typeof i=="string"&&t.current&&((e=t.current)==null||e.setFace(i))},[i]),r.useEffect(()=>{var e;typeof p=="string"&&t.current&&((e=t.current)==null||e.setAlign(p))},[p]),r.useEffect(()=>{var e;typeof l=="string"&&t.current&&((e=t.current)==null||e.setColorHTML(l))},[l]),r.useEffect(()=>{var e;typeof b=="string"&&t.current&&((e=t.current)==null||e.setOutlineColorHTML(b))},[b]),r.useEffect(()=>(t.current=new W({...N,color:l,size:u,text:f,face:i,isRTL:m,align:p,outline:E,outlineColor:b,opacity:g,offset:n,visibility:a,rotation:o?o*C:0}),t.current&&y&&y(t.current),()=>{t.current&&x&&x(t.current)}),[y,x]),null},I={component:R,title:"Components/Entity/Label",argTypes:{face:{options:["Sacramento-Regular","NotoSansArabic-Regular","Audiowide-Regular"],control:{type:"select"}}}},c={args:{color:"#053df3",outlineColor:"#33fa07",rotation:0,face:"Audiowide-Regular",align:"center",opacity:1,size:32,outline:.2,text:"Hello, World!",offset:[0,0,0],visibility:!0,isRTL:!1},render:a=>s.createElement(h,null,s.createElement(w,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},s.createElement(D,{name:"test"},s.createElement(H,{name:"Custom Entity",lon:0,lat:0,alt:0},s.createElement(R,{...a})))))},d={args:{...c.args,text:"حبيبي",face:"NotoSansArabic-Regular",isRTL:!0},render:a=>s.createElement(h,null,s.createElement(w,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},s.createElement(D,{name:"test"},s.createElement(H,{name:"Custom Entity",lon:0,lat:0,alt:0},s.createElement(R,{...a})))))};var G,V,O;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var P,L,T;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const $=["Default","Arabic"];export{d as Arabic,c as Default,$ as __namedExportsOrder,I as default};
