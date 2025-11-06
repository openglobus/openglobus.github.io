import{r as a,R as t}from"./iframe-D3cuFNRr.js";import{J as y,p as G,a as E,G as g}from"./Globe-BbxSvTi6.js";import{V as p,E as f}from"./Entity-BPm0uofG.js";import"./preload-helper-PPVm8Dsz.js";const m=({color:r,objSrc:o,scale:s,visibility:c,_addGeoObject:i,_removeGeoObject:b,...d})=>{const e=a.useRef(null);return a.useEffect(()=>{s&&e.current&&e.current?.setScale(s)},[s]),a.useEffect(()=>{e.current&&(typeof r=="string"?e.current?.setColorHTML(r):r instanceof y?e.current?.setColor4v(r):Array.isArray(r)&&e.current?.setColor(...r))},[r]),a.useEffect(()=>{o&&e.current&&e.current?.setObjectSrc(o)},[o]),a.useEffect(()=>{typeof c=="boolean"&&e.current&&e.current?.setVisibility(c)},[c]),a.useEffect(()=>(e.current=new G({color:r,objSrc:o,scale:s,visibility:c,...d}),e.current&&i&&i(e.current),()=>{e.current&&b&&b(e.current)}),[i,b]),null},D={component:m,title:"Components/Entity/GeoObject"},n={args:{visibility:!0,scale:10,tag:"none",color:"red",objSrc:"https://raw.githubusercontent.com/pavletto/og_resources/main/geo_object/penguin.obj"},render:r=>t.createElement(E,null,t.createElement(g,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(f,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(m,{...r})))))},l={args:{...n.args},render:r=>t.createElement(E,null,t.createElement(g,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(f,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(m,{...r})))))},u={args:{...n.args,objSrc:"https://raw.githubusercontent.com/PrincessGod/objTo3d-tiles/master/bin/barrel/barrel.obj"},render:r=>t.createElement(E,null,t.createElement(g,null,t.createElement(p,{name:"test",scaleByDistance:[100,4e6,1]},t.createElement(f,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(m,{...r})))))};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const V=["Default","Untextured","Barrel"];export{u as Barrel,n as Default,l as Untextured,V as __namedExportsOrder,D as default};
