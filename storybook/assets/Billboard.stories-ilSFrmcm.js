import{R as t}from"./iframe-D3cuFNRr.js";import{a as i,G as l}from"./Globe-BbxSvTi6.js";import{B as a}from"./Billboard-ttb5UdNd.js";import{V as s,E as n}from"./Entity-BPm0uofG.js";import"./preload-helper-PPVm8Dsz.js";const b={component:a,title:"Components/Entity/Billboard",parameters:{docs:{description:{component:"This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera."}}}},e={argTypes:{src:{description:"URL of the image",required:!0,control:{type:"text"}},size:{description:"Size of the billboard in pixels",defaultValue:[30,30]},color:{description:"Color of the billboard",table:{defaultValue:{summary:"white"}}},rotation:{description:"Rotation of the billboard in radians",table:{defaultValue:{summary:"0"}},control:{type:"range",min:0,max:360}},offset:{description:"Offset of the billboard in pixels",defaultValue:[0,0,0],table:{type:{summary:"[number, number, number]"},defaultValue:{summary:"[0, 0, 0]"}}},visibility:{description:"Visibility of the billboard",defaultValue:!0,control:{type:"boolean"}}},args:{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png",rotation:0,offset:[0,0,0],visibility:!0},render:o=>t.createElement(i,null,t.createElement(l,null,t.createElement(s,{name:"test",scaleByDistance:[6e6,24e6,1e10]},t.createElement(n,{name:"Custom Entity",lon:0,lat:0,alt:0},t.createElement(a,{...o})))))},r={args:{...e.args,src:"https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png"},argTypes:{...e.argTypes},render:e.render};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
    src: 'https://sandbox.openglobus.org/examples/billboards/carrot.png',
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
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png'
  },
  argTypes: {
    ...Default.argTypes
  },
  render: Default.render
}`,...r.parameters?.docs?.source}}};const f=["Default","DifferentSrc"];export{e as Default,r as DifferentSrc,f as __namedExportsOrder,b as default};
