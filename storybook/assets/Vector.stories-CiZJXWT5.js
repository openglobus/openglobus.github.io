import{V as r,E as a}from"./Entity-Nc0Y9FWc.js";import{Default as s}from"./Layer.stories-Bbp7qLY_.js";import{B as l}from"./Billboard-d18i02BY.js";import{R as e}from"./iframe-DXtCy9N6.js";import{a as n,G as m}from"./Globe-CFMRfbHW.js";import"./preload-helper-PPVm8Dsz.js";const g={title:"Components/Layer/Vector",component:r},t={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{...s.argTypes},args:{name:"test",opacity:1},render:o=>e.createElement(n,null,e.createElement(m,null,e.createElement(r,{...o},e.createElement(a,{name:"Custom Entity",lon:0,lat:0,alt:0},e.createElement(l,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const u=["Default"];export{t as Default,u as __namedExportsOrder,g as default};
