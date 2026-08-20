import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,t as i}from"./Globe-B_Cm2Sl2.js";import{t as a}from"./Globe-hmg5axHn.js";import{N as o,i as s,t as c,v as l,y as u}from"./entity-BG8WpvvN.js";var d,f,p,m,h;function g(){return(g=t((()=>{d=e(n(),1),a(),c(),l(),f={component:o,title:`Components/Entity/Billboard`,parameters:{docs:{description:{component:`This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera.`}}}},p={argTypes:{src:{description:`URL of the image`,required:!0,control:{type:`text`}},size:{description:`Size of the billboard in pixels`,defaultValue:[30,30]},color:{description:`Color of the billboard`,table:{defaultValue:{summary:`white`}}},rotation:{description:`Rotation of the billboard in radians`,table:{defaultValue:{summary:`0`}},control:{type:`range`,min:0,max:360}},offset:{description:`Offset of the billboard in pixels`,defaultValue:[0,0],table:{type:{summary:`[number, number]`},defaultValue:{summary:`[0, 0]`}}},visibility:{description:`Visibility of the billboard`,defaultValue:!0,control:{type:`boolean`}}},args:{size:[96,96],color:`#ff5959`,src:`https://sandbox.openglobus.org/examples/billboards/carrot.png`,rotation:0,offset:[0,0],visibility:!0},render:e=>d.createElement(r,null,d.createElement(i,null,d.createElement(u,{name:`test`,scaleByDistance:[6e6,24e6,1e10]},d.createElement(s,{name:`Custom Entity`,lonLat:[0,0]},d.createElement(o,e)))))},m={args:{...p.args,src:`https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png`},argTypes:{...p.argTypes},render:p.render},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
      defaultValue: [0, 0],
      table: {
        type: {
          summary: '[number, number]'
        },
        defaultValue: {
          summary: '[0, 0]'
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
    offset: [0, 0],
    visibility: true
  },
  render: (args: BillboardParams) => <GlobeContextProvider>
        <Globe>
            <Vector name={'test'} scaleByDistance={[6000000, 24000000, 10000000000]}>
                <Entity name="Custom Entity" lonLat={[0, 0]}>
                    <Billboard {...args} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    src: 'https://png.pngtree.com/png-clipart/20230414/ourmid/pngtree-star-clipart-png-image_6705223.png'
  },
  argTypes: {
    ...Default.argTypes
  },
  render: Default.render
}`,...m.parameters?.docs?.source}}},h=[`Default`,`DifferentSrc`]})))()}g();export{p as Default,m as DifferentSrc,h as __namedExportsOrder,f as default};