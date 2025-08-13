import{B as l}from"./Billboard-BLkHa9w_.js";import{R as e}from"./index-D4lIrffr.js";import{a as m,G as c}from"./Globe-CuTqturo.js";import{E as s,V as i}from"./Entity-CajmSGvE.js";const u={component:s,title:"Components/Entity/Entity"},t={args:{lon:10,lat:10,alt:1e5},render:n=>e.createElement(m,null,e.createElement(c,null,e.createElement(i,{name:"test",scaleByDistance:[6e6,24e6,1e10]},e.createElement(s,{name:"Custom Entity",...n},e.createElement(l,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,u as default};
