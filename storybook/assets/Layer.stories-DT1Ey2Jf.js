import{B as l}from"./Billboard-nV4CFogR.js";import{R as e}from"./iframe-DfnBMM8x.js";import{a as n,G as b}from"./Globe-EqVKypFw.js";import{L as r,V as s,E as i}from"./Entity-CWOe3zNE.js";import"./preload-helper-PPVm8Dsz.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,m={title:"Components/Layer/Layer",component:r},o={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{onVisibilityChange:{table:{disable:!0}},onAdd:{table:{disable:!0}},onRemove:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onLclick:{table:{disable:!0}},onRclick:{table:{disable:!0}},onMclick:{table:{disable:!0}},onLdblclick:{table:{disable:!0}},onRdblclick:{table:{disable:!0}},onMdblclick:{table:{disable:!0}},onLup:{table:{disable:!0}},onRup:{table:{disable:!0}},onMup:{table:{disable:!0}},onLdown:{table:{disable:!0}},onRdown:{table:{disable:!0}},onMdown:{table:{disable:!0}},onLhold:{table:{disable:!0}},onRhold:{table:{disable:!0}},onMhold:{table:{disable:!0}},onMouseWheel:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onDoubleTouch:{table:{disable:!0}},onTouchLeave:{table:{disable:!0}},onTouchEnter:{table:{disable:!0}}},args:{name:"test",onMouseEnter:t("onMouseEnter",{depth:1,maxDepth:1}),onLclick:t("onLclick",{depth:1,maxDepth:1}),onMouseLeave:t("onMouseLeave",{depth:1,maxDepth:1}),onMouseMove:t("onMouseMove",{depth:1,maxDepth:1}),onLdblclick:t("onLdblclick",{depth:1,maxDepth:1})},render:a=>e.createElement(n,null,e.createElement(b,null,e.createElement(s,{...a},e.createElement(i,{name:"Custom Entity",lon:0,lat:0,alt:0},e.createElement(l,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  argTypes: {
    onVisibilityChange: {
      table: {
        disable: true
      }
    },
    onAdd: {
      table: {
        disable: true
      }
    },
    onRemove: {
      table: {
        disable: true
      }
    },
    onMouseMove: {
      table: {
        disable: true
      }
    },
    onMouseEnter: {
      table: {
        disable: true
      }
    },
    onMouseLeave: {
      table: {
        disable: true
      }
    },
    onLclick: {
      table: {
        disable: true
      }
    },
    onRclick: {
      table: {
        disable: true
      }
    },
    onMclick: {
      table: {
        disable: true
      }
    },
    onLdblclick: {
      table: {
        disable: true
      }
    },
    onRdblclick: {
      table: {
        disable: true
      }
    },
    onMdblclick: {
      table: {
        disable: true
      }
    },
    onLup: {
      table: {
        disable: true
      }
    },
    onRup: {
      table: {
        disable: true
      }
    },
    onMup: {
      table: {
        disable: true
      }
    },
    onLdown: {
      table: {
        disable: true
      }
    },
    onRdown: {
      table: {
        disable: true
      }
    },
    onMdown: {
      table: {
        disable: true
      }
    },
    onLhold: {
      table: {
        disable: true
      }
    },
    onRhold: {
      table: {
        disable: true
      }
    },
    onMhold: {
      table: {
        disable: true
      }
    },
    onMouseWheel: {
      table: {
        disable: true
      }
    },
    onTouchMove: {
      table: {
        disable: true
      }
    },
    onTouchStart: {
      table: {
        disable: true
      }
    },
    onTouchEnd: {
      table: {
        disable: true
      }
    },
    onDoubleTouch: {
      table: {
        disable: true
      }
    },
    onTouchLeave: {
      table: {
        disable: true
      }
    },
    onTouchEnter: {
      table: {
        disable: true
      }
    }
  },
  args: {
    name: 'test',
    onMouseEnter: action('onMouseEnter', {
      depth: 1,
      maxDepth: 1
    }),
    onLclick: action('onLclick', {
      depth: 1,
      maxDepth: 1
    }),
    onMouseLeave: action('onMouseLeave', {
      depth: 1,
      maxDepth: 1
    }),
    onMouseMove: action('onMouseMove', {
      depth: 1,
      maxDepth: 1
    }),
    onLdblclick: action('onLdblclick', {
      depth: 1,
      maxDepth: 1
    })
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  //@ts-ignore
  render: (args: VectorProps) => <GlobeContextProvider>
        <Globe>
            <Vector {...args}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://sandbox.openglobus.org/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...o.parameters?.docs?.source}}};const M=["Default"];export{o as Default,M as __namedExportsOrder,m as default};
