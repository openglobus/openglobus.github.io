import{B as v}from"./Billboard-DMUwH7qy.js";import{R as l}from"./index-uubelm5h.js";import{a as D,G as f}from"./Globe-LHHj7Ux8.js";import{L as x,V as T,E as k}from"./Entity-DiBwTGp7.js";import{v as w}from"./v4-CQkTLCs1.js";const{addons:S}=__STORYBOOK_MODULE_PREVIEW_API__,{global:h}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:V}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var P="storybook/actions",A=`${P}/action-event`,C={depth:10,clearOnStoryChange:!0,limit:50},_=(e,n)=>{let t=Object.getPrototypeOf(e);return!t||n(t)?t:_(t,n)},I=e=>!!(typeof e=="object"&&e&&_(e,n=>/^Synthetic(?:Base)?Event$/.test(n.constructor.name))&&typeof e.persist=="function"),B=e=>{if(I(e)){let n=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));n.persist();let t=Object.getOwnPropertyDescriptor(n,"view"),o=t==null?void 0:t.value;return typeof o=="object"&&(o==null?void 0:o.constructor.name)==="Window"&&Object.defineProperty(n,"view",{...t,value:Object.create(o.constructor.prototype)}),n}return e},j=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?w():Date.now().toString(36)+Math.random().toString(36).substring(2);function r(e,n={}){let t={...C,...n},o=function(...s){var c,d;if(n.implicit){let u=(c="__STORYBOOK_PREVIEW__"in h?h.__STORYBOOK_PREVIEW__:void 0)==null?void 0:c.storyRenders.find(a=>a.phase==="playing"||a.phase==="rendering");if(u){let a=!((d=window==null?void 0:window.FEATURES)!=null&&d.disallowImplicitActionsInRenderV8),p=new V({phase:u.phase,name:e,deprecated:a});if(a)console.warn(p);else throw p}}let g=S.getChannel(),L=j(),O=5,b=s.map(B),R=s.length>1?b:b[0],y={id:L,count:0,data:{name:e,args:R},options:{...t,maxDepth:O+(t.depth||3),allowFunction:t.allowFunction||!1}};g.emit(A,y)};return o.isAction=!0,o.implicit=n.implicit,o}const U={title:"Components/Layer/Layer",component:x},i={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{onVisibilityChange:{table:{disable:!0}},onAdd:{table:{disable:!0}},onRemove:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onLclick:{table:{disable:!0}},onRclick:{table:{disable:!0}},onMclick:{table:{disable:!0}},onLdblclick:{table:{disable:!0}},onRdblclick:{table:{disable:!0}},onMdblclick:{table:{disable:!0}},onLup:{table:{disable:!0}},onRup:{table:{disable:!0}},onMup:{table:{disable:!0}},onLdown:{table:{disable:!0}},onRdown:{table:{disable:!0}},onMdown:{table:{disable:!0}},onLhold:{table:{disable:!0}},onRhold:{table:{disable:!0}},onMhold:{table:{disable:!0}},onMouseWheel:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onDoubleTouch:{table:{disable:!0}},onTouchLeave:{table:{disable:!0}},onTouchEnter:{table:{disable:!0}}},args:{name:"test",onMouseEnter:r("onMouseEnter",{depth:1,maxDepth:1}),onLclick:r("onLclick",{depth:1,maxDepth:1}),onMouseLeave:r("onMouseLeave",{depth:1,maxDepth:1}),onMouseMove:r("onMouseMove",{depth:1,maxDepth:1}),onLdblclick:r("onLdblclick",{depth:1,maxDepth:1})},render:e=>l.createElement(D,null,l.createElement(f,null,l.createElement(T,{...e},l.createElement(k,{name:"Custom Entity",lon:0,lat:0,alt:0},l.createElement(v,{size:[96,96],color:"#ff5959",src:"https://openglobus.org/examples/examples/billboards/carrot.png"})))))};var m,E,M;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
                    <Billboard size={[96, 96]} color={"#ff5959"} src={'https://openglobus.org/examples/examples/billboards/carrot.png'} />
                </Entity>
            </Vector>
        </Globe>
    </GlobeContextProvider>
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const F=["Default"];export{i as Default,F as __namedExportsOrder,U as default};
