import{B as a}from"./Billboard-B031DAPE.js";import{R as e}from"./iframe-70HlA1Im.js";import{a as s,G as n}from"./Globe-D6-iuDvO.js";import{E as o,V as l}from"./Entity-CRLv42Cw.js";import"./preload-helper-PPVm8Dsz.js";const b={component:o,title:"Components/Entity/Entity"},t={args:{lon:10,lat:10,alt:1e5},render:r=>e.createElement(s,null,e.createElement(n,null,e.createElement(l,{name:"test",scaleByDistance:[6e6,24e6,1e10]},e.createElement(o,{name:"Custom Entity",...r},e.createElement(a,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    lon: 10,
    lat: 10,
    alt: 100000
  },
  render: (args: EntityParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[6000000, 24000000, 10000000000]}>
                <Entity name="Custom Entity" {...args}>
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://sandbox.openglobus.org/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...t.parameters?.docs?.source}}};const E=["Default"];export{t as Default,E as __namedExportsOrder,b as default};
