import{r as a,R as r}from"./index-B-SYruCi.js";import{R as y,f as A,g as U,a as G,G as j}from"./Globe-BnqXSAgn.js";import{V as C,E as h}from"./Entity-B2e2ke--.js";const p=({yaw:n,roll:c,pitch:u,color:s,objSrc:l,textureSrc:i,scale:m,visibility:b,_addGeoObject:E,_removeGeoObject:d,..._})=>{const e=a.useRef(null);return a.useEffect(()=>{var t;typeof n=="number"&&e.current&&((t=e.current)==null||t.setYaw(n*y))},[n]),a.useEffect(()=>{var t;typeof c=="number"&&e.current&&((t=e.current)==null||t.setRoll(c*y))},[c]),a.useEffect(()=>{var t;typeof u=="number"&&e.current&&((t=e.current)==null||t.setPitch(u*y))},[u]),a.useEffect(()=>{var t;m&&e.current&&((t=e.current)==null||t.setScale(m))},[m]),a.useEffect(()=>{var t,x,P;e.current&&(typeof s=="string"?(t=e.current)==null||t.setColorHTML(s):s instanceof A?(x=e.current)==null||x.setColor4v(s):Array.isArray(s)&&((P=e.current)==null||P.setColor(...s)))},[s]),a.useEffect(()=>{var t;l&&e.current&&((t=e.current)==null||t.setObjectSrc(l))},[l]),a.useEffect(()=>{var t;i&&e.current&&((t=e.current)==null||t.setTextureSrc(i))},[i]),a.useEffect(()=>{var t;typeof b=="boolean"&&e.current&&((t=e.current)==null||t.setVisibility(b))},[b]),a.useEffect(()=>(e.current=new U({yaw:n,roll:c,pitch:u,color:s,objSrc:l,textureSrc:i,scale:m,visibility:b,..._}),e.current&&E&&E(e.current),()=>{e.current&&d&&d(e.current)}),[E,d]),null},M={component:p,title:"Components/Entity/GeoObject"},o={args:{visibility:!0,yaw:0,roll:0,pitch:0,scale:10,tag:"none",color:"red",objSrc:"https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.obj",textureSrc:"https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.png"},render:n=>r.createElement(G,null,r.createElement(j,null,r.createElement(C,{name:"test",scaleByDistance:[100,4e6,1]},r.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},r.createElement(p,{...n})))))},f={args:{...o.args,textureSrc:void 0},render:n=>r.createElement(G,null,r.createElement(j,null,r.createElement(C,{name:"test",scaleByDistance:[100,4e6,1]},r.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},r.createElement(p,{...n})))))},g={args:{...o.args,textureSrc:"https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.png",objSrc:"https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.obj"},render:n=>r.createElement(G,null,r.createElement(j,null,r.createElement(C,{name:"test",scaleByDistance:[100,4e6,1]},r.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},r.createElement(p,{...n})))))};var D,S,V;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    visibility: true,
    yaw: 0,
    roll: 0,
    pitch: 0,
    scale: 10,
    tag: 'none',
    color: 'red',
    objSrc: 'https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.obj',
    textureSrc: 'https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.png'
  },
  render: (args: GeoObjectParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[100, 4000000, 1]}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <GeoObject {...args} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(V=(S=o.parameters)==null?void 0:S.docs)==null?void 0:V.source}}};var v,w,B;f.parameters={...f.parameters,docs:{...(v=f.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    textureSrc: undefined
  },
  render: (args: GeoObjectParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[100, 4000000, 1]}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <GeoObject {...args} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(B=(w=f.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var O,R,T;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    textureSrc: 'https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.png',
    objSrc: 'https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.obj'
  },
  render: (args: GeoObjectParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[100, 4000000, 1]}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <GeoObject {...args} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(T=(R=g.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};const N=["Default","Untextured","Barrel"];export{g as Barrel,o as Default,f as Untextured,N as __namedExportsOrder,M as default};
