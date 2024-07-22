import{V as n,E as l}from"./Entity-DiBwTGp7.js";import{Default as m}from"./Layer.stories-esJysQFK.js";import{B as p}from"./Billboard-DMUwH7qy.js";import{R as e}from"./index-uubelm5h.js";import{a as c,G as i}from"./Globe-LHHj7Ux8.js";import"./v4-CQkTLCs1.js";const E={title:"Components/Layer/Vector",component:n},t={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{...m.argTypes},args:{name:"test",opacity:1},render:s=>e.createElement(c,null,e.createElement(i,null,e.createElement(n,{...s},e.createElement(l,{name:"Custom Entity",lon:0,lat:0,alt:0},e.createElement(p,{size:[96,96],color:"#ff5959",src:"https://openglobus.org/examples/examples/billboards/carrot.png"})))))};var r,a,o;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://openglobus.org/examples/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(o=(a=t.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const x=["Default"];export{t as Default,x as __namedExportsOrder,E as default};
