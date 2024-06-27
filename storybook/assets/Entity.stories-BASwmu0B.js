import{B as l}from"./Billboard-D71lJuHs.js";import{R as e}from"./index-uubelm5h.js";import{a as m,G as c}from"./Globe-CyzGI6Fn.js";import{E as n,V as i}from"./Entity-CJCZhpzc.js";const u={component:n,title:"Components/Entity/Entity"},t={args:{lon:10,lat:10,alt:1e5},render:s=>e.createElement(m,null,e.createElement(c,null,e.createElement(i,{name:"test",scaleByDistance:[6e6,24e6,1e10]},e.createElement(n,{name:"Custom Entity",...s},e.createElement(l,{size:[96,96],color:"#ff5959",src:"https://openglobus.org/examples/examples/billboards/carrot.png"})))))};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    lon: 10,
    lat: 10,
    alt: 100000
  },
  render: (args: EntityParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[6000000, 24000000, 10000000000]}>
                <Entity name="Custom Entity" {...args}>
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://openglobus.org/examples/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const f=["Default"];export{t as Default,f as __namedExportsOrder,u as default};
