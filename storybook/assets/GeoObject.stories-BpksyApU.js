import{r as n,R as t}from"./index-D4lIrffr.js";import{J as S,p as w,a as g,G as f}from"./Globe-CkJRolcj.js";import{V as p,E as d}from"./Entity-D3KjIY4_.js";const i=({color:r,objSrc:o,scale:c,visibility:l,_addGeoObject:b,_removeGeoObject:E,...O})=>{const e=n.useRef(null);return n.useEffect(()=>{var a;c&&e.current&&((a=e.current)==null||a.setScale(c))},[c]),n.useEffect(()=>{var a,y,G;e.current&&(typeof r=="string"?(a=e.current)==null||a.setColorHTML(r):r instanceof S?(y=e.current)==null||y.setColor4v(r):Array.isArray(r)&&((G=e.current)==null||G.setColor(...r)))},[r]),n.useEffect(()=>{var a;o&&e.current&&((a=e.current)==null||a.setObjectSrc(o))},[o]),n.useEffect(()=>{var a;typeof l=="boolean"&&e.current&&((a=e.current)==null||a.setVisibility(l))},[l]),n.useEffect(()=>(e.current=new w({color:r,objSrc:o,scale:c,visibility:l,...O}),e.current&&b&&b(e.current),()=>{e.current&&E&&E(e.current)}),[b,E]),null},U={component:i,title:"Components/Entity/GeoObject"},s={args:{visibility:!0,scale:10,tag:"none",color:"red",objSrc:"https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.obj"},render:r=>t.createElement(g,null,t.createElement(f,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(d,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(i,{...r})))))},u={args:{...s.args},render:r=>t.createElement(g,null,t.createElement(f,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(d,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(i,{...r})))))},m={args:{...s.args,objSrc:"https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.obj"},render:r=>t.createElement(g,null,t.createElement(f,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(d,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(i,{...r})))))};var C,j,x;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    visibility: true,
    scale: 10,
    tag: 'none',
    color: 'red',
    objSrc: 'https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.obj'
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
}`,...(x=(j=s.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var P,D,V;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    ...Default.args
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
}`,...(V=(D=u.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var h,B,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Default.args,
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
}`,...(v=(B=m.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};const _=["Default","Untextured","Barrel"];export{m as Barrel,s as Default,u as Untextured,_ as __namedExportsOrder,U as default};
