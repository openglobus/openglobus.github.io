import{V as s,E as n}from"./Entity-BvyuSBjY.js";import{Default as m}from"./Layer.stories-CVYxYf2D.js";import{B as p}from"./Billboard-DDMT-twU.js";import{R as e}from"./index-CqrSl2Gl.js";import{a as c,G as i}from"./Globe-D349CdrM.js";import"./v4-CQkTLCs1.js";const E={title:"Components/Layer/Vector",component:s},t={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{...m.argTypes},args:{name:"test",opacity:1},render:l=>e.createElement(c,null,e.createElement(i,null,e.createElement(s,{...l},e.createElement(n,{name:"Custom Entity",lon:0,lat:0,alt:0},e.createElement(p,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  argTypes: {
    ...LayerDefault.argTypes
  },
  args: {
    name: 'test',
    opacity: 1
  },
  render: (args: VectorProps) => <GlobeContextProvider>
        <Globe>
            <Vector {...args}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://sandbox.openglobus.org/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(a=(o=t.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,E as default};