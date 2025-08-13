import{V as s,E as n}from"./Entity-Buz1nDM9.js";import{Default as m}from"./Layer.stories-BW7yhx08.js";import{B as p}from"./Billboard-q4rd1csU.js";import{R as e}from"./index-D4lIrffr.js";import{a as c,G as i}from"./Globe-yIoc-5wQ.js";import"./v4-CtRu48qb.js";const E={title:"Components/Layer/Vector",component:s},t={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{...m.argTypes},args:{name:"test",opacity:1},render:l=>e.createElement(c,null,e.createElement(i,null,e.createElement(s,{...l},e.createElement(n,{name:"Custom Entity",lon:0,lat:0,alt:0},e.createElement(p,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};var r,o,a;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
