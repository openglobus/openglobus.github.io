import{R as t}from"./index-RYns6xqu.js";import{a as m,G as d}from"./Globe-CrL9GLUm.js";import{B as p}from"./Billboard-DJuMufB2.js";import{V as u,E as b}from"./Entity-Bp6SkOZz.js";const V={component:p,title:"Components/Entity/Billboard",parameters:{docs:{description:{component:"This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera."}}}},e={argTypes:{src:{description:"URL of the image",required:!0,control:{type:"text"}},size:{description:"Size of the billboard in pixels",defaultValue:[30,30]},color:{description:"Color of the billboard",table:{defaultValue:{summary:"white"}}},rotation:{description:"Rotation of the billboard in radians",table:{defaultValue:{summary:"0"}},control:{type:"range",min:0,max:360}},offset:{description:"Offset of the billboard in pixels",defaultValue:[0,0,0],table:{type:{summary:"[number, number, number]"},defaultValue:{summary:"[0, 0, 0]"}}},visibility:{description:"Visibility of the billboard",defaultValue:!0,control:{type:"boolean"}}},args:{size:[96,96],color:"#ff5959",src:"https://openglobus.org/examples/examples/billboards/carrot.png",rotation:0,offset:[0,0,0],visibility:!0},render:c=>t.createElement(m,null,t.createElement(d,null,t.createElement(u,{name:"test",scaleByDistance:[6e6,24e6,1e10]},t.createElement(b,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(p,{...c})))))},r={args:{...e.args,src:"https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png"},argTypes:{...e.argTypes},render:e.render};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  argTypes: {
    src: {
      description: 'URL of the image',
      required: true,
      control: {
        type: 'text'
      }
    },
    size: {
      description: 'Size of the billboard in pixels',
      defaultValue: [30, 30]
    },
    color: {
      description: 'Color of the billboard',
      table: {
        defaultValue: {
          summary: 'white'
        }
      }
    },
    rotation: {
      description: 'Rotation of the billboard in radians',
      table: {
        defaultValue: {
          summary: '0'
        }
      },
      control: {
        type: 'range',
        min: 0,
        max: 360
      }
    },
    offset: {
      description: 'Offset of the billboard in pixels',
      defaultValue: [0, 0, 0],
      table: {
        type: {
          summary: '[number, number, number]'
        },
        defaultValue: {
          summary: '[0, 0, 0]'
        }
      }
    },
    visibility: {
      description: 'Visibility of the billboard',
      defaultValue: true,
      control: {
        type: 'boolean'
      }
    }
  },
  args: {
    size: [96, 96],
    color: "#ff5959",
    src: 'https://openglobus.org/examples/examples/billboards/carrot.png',
    rotation: 0,
    offset: [0, 0, 0],
    visibility: true
  },
  render: (args: BillboardParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[6000000, 24000000, 10000000000]}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <Billboard {...args} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var l,s,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png'
  },
  argTypes: {
    ...Default.argTypes
  },
  render: Default.render
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const x=["Default","DifferentSrc"];export{e as Default,r as DifferentSrc,x as __namedExportsOrder,V as default};
