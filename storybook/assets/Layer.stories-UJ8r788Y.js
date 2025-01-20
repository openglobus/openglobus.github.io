import{B as f}from"./Billboard-DvJcynwR.js";import{R as n}from"./index-B-SYruCi.js";import{a as D,G as v}from"./Globe-BnqXSAgn.js";import{L as x,V as T,E as k}from"./Entity-B2e2ke--.js";import{v as w}from"./v4-CtRu48qb.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:V}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:h}=__STORYBOOK_MODULE_GLOBAL__;var P="storybook/actions",A=`${P}/action-event`,C={depth:10,clearOnStoryChange:!0,limit:50},_=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:_(o,t)},I=e=>!!(typeof e=="object"&&e&&_(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),B=e=>{if(I(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),a=o==null?void 0:o.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(a.constructor.prototype)}),t}return e},j=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function r(e,t={}){let o={...C,...t},a=function(...s){var d,c;if(t.implicit){let u=(d="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:d.storyRenders.find(l=>l.phase==="playing"||l.phase==="rendering");if(u){let l=!((c=window==null?void 0:window.FEATURES)!=null&&c.disallowImplicitActionsInRenderV8),p=new V({phase:u.phase,name:e,deprecated:l});if(l)console.warn(p);else throw p}}let g=S.getChannel(),L=j(),O=5,b=s.map(B),R=s.length>1?b:b[0],y={id:L,count:0,data:{name:e,args:R},options:{...o,maxDepth:O+(o.depth||3),allowFunction:o.allowFunction||!1}};g.emit(A,y)};return a.isAction=!0,a.implicit=t.implicit,a}const U={title:"Components/Layer/Layer",component:x},i={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{onVisibilityChange:{table:{disable:!0}},onAdd:{table:{disable:!0}},onRemove:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onLclick:{table:{disable:!0}},onRclick:{table:{disable:!0}},onMclick:{table:{disable:!0}},onLdblclick:{table:{disable:!0}},onRdblclick:{table:{disable:!0}},onMdblclick:{table:{disable:!0}},onLup:{table:{disable:!0}},onRup:{table:{disable:!0}},onMup:{table:{disable:!0}},onLdown:{table:{disable:!0}},onRdown:{table:{disable:!0}},onMdown:{table:{disable:!0}},onLhold:{table:{disable:!0}},onRhold:{table:{disable:!0}},onMhold:{table:{disable:!0}},onMouseWheel:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onDoubleTouch:{table:{disable:!0}},onTouchLeave:{table:{disable:!0}},onTouchEnter:{table:{disable:!0}}},args:{name:"test",onMouseEnter:r("onMouseEnter",{depth:1,maxDepth:1}),onLclick:r("onLclick",{depth:1,maxDepth:1}),onMouseLeave:r("onMouseLeave",{depth:1,maxDepth:1}),onMouseMove:r("onMouseMove",{depth:1,maxDepth:1}),onLdblclick:r("onLdblclick",{depth:1,maxDepth:1})},render:e=>n.createElement(D,null,n.createElement(v,null,n.createElement(T,{...e},n.createElement(k,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(f,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};var m,E,M;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
  render: (args: VectorProps) => <GlobeContextProvider>
        <Globe>
            <Vector {...args}>
                <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://sandbox.openglobus.org/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,U as default};
