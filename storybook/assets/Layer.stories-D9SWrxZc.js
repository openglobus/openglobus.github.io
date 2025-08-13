import{B as x}from"./Billboard-BLkHa9w_.js";import{R as d}from"./index-D4lIrffr.js";import{a as D,G as k}from"./Globe-CuTqturo.js";import{L as A,V as S,E as w}from"./Entity-CajmSGvE.js";import{v as C}from"./v4-CtRu48qb.js";const{addons:P}=__STORYBOOK_MODULE_PREVIEW_API__,{ImplicitActionsDuringRendering:B}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__,{global:O}=__STORYBOOK_MODULE_GLOBAL__;var V=Object.defineProperty,I=(e,t)=>{for(var o in t)V(e,o,{get:t[o],enumerable:!0})},K="storybook/actions",j=`${K}/action-event`,W={depth:10,clearOnStoryChange:!0,limit:50},y=(e,t)=>{let o=Object.getPrototypeOf(e);return!o||t(o)?o:y(o,t)},Y=e=>!!(typeof e=="object"&&e&&y(e,t=>/^Synthetic(?:Base)?Event$/.test(t.constructor.name))&&typeof e.persist=="function"),G=e=>{if(Y(e)){let t=Object.create(e.constructor.prototype,Object.getOwnPropertyDescriptors(e));t.persist();let o=Object.getOwnPropertyDescriptor(t,"view"),a=o==null?void 0:o.value;return typeof a=="object"&&(a==null?void 0:a.constructor.name)==="Window"&&Object.defineProperty(t,"view",{...o,value:Object.create(a.constructor.prototype)}),t}return e},N=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?C():Date.now().toString(36)+Math.random().toString(36).substring(2);function i(e,t={}){let o={...W,...t},a=function(...n){var h,_;if(t.implicit){let m=(h="__STORYBOOK_PREVIEW__"in O?O.__STORYBOOK_PREVIEW__:void 0)==null?void 0:h.storyRenders.find(b=>b.phase==="playing"||b.phase==="rendering");if(m){let b=!((_=globalThis==null?void 0:globalThis.FEATURES)!=null&&_.disallowImplicitActionsInRenderV8),g=new B({phase:m.phase,name:e,deprecated:b});if(b)console.warn(g);else throw g}}let r=P.getChannel(),l=N(),s=5,u=n.map(G),v=n.length>1?u:u[0],T={id:l,count:0,data:{name:e,args:v},options:{...o,maxDepth:s+(o.depth||3),allowFunction:o.allowFunction||!1}};r.emit(j,T)};return a.isAction=!0,a.implicit=t.implicit,a}const{definePreview:te}=__STORYBOOK_MODULE_PREVIEW_API__,{global:p}=__STORYBOOK_MODULE_GLOBAL__;var U={};I(U,{argsEnhancers:()=>$,loaders:()=>H});var L=(e,t)=>typeof t[e]>"u"&&!(e in t),z=e=>{let{initialArgs:t,argTypes:o,id:a,parameters:{actions:n}}=e;if(!n||n.disable||!n.argTypesRegex||!o)return{};let r=new RegExp(n.argTypesRegex);return Object.entries(o).filter(([l])=>!!r.test(l)).reduce((l,[s,u])=>(L(s,t)&&(l[s]=i(s,{implicit:!0,id:a})),l),{})},F=e=>{let{initialArgs:t,argTypes:o,parameters:{actions:a}}=e;return a!=null&&a.disable||!o?{}:Object.entries(o).filter(([n,r])=>!!r.action).reduce((n,[r,l])=>(L(r,t)&&(n[r]=i(typeof l.action=="string"?l.action:r)),n),{})},$=[F,z],E=!1,q=e=>{let{parameters:{actions:t}}=e;if(!(t!=null&&t.disable)&&!E&&"__STORYBOOK_TEST_ON_MOCK_CALL__"in p&&typeof p.__STORYBOOK_TEST_ON_MOCK_CALL__=="function"){let o=p.__STORYBOOK_TEST_ON_MOCK_CALL__;o((a,n)=>{let r=a.getMockName();r!=="spy"&&(!/^next\/.*::/.test(r)||["next/router::useRouter()","next/navigation::useRouter()","next/navigation::redirect","next/cache::","next/headers::cookies().set","next/headers::cookies().delete","next/headers::headers().set","next/headers::headers().delete"].some(l=>r.startsWith(l)))&&i(r)(n)}),E=!0}},H=[q];const oe={title:"Components/Layer/Layer",component:A},c={parameters:{actions:{depth:1,maxDepth:1}},argTypes:{onVisibilityChange:{table:{disable:!0}},onAdd:{table:{disable:!0}},onRemove:{table:{disable:!0}},onMouseMove:{table:{disable:!0}},onMouseEnter:{table:{disable:!0}},onMouseLeave:{table:{disable:!0}},onLclick:{table:{disable:!0}},onRclick:{table:{disable:!0}},onMclick:{table:{disable:!0}},onLdblclick:{table:{disable:!0}},onRdblclick:{table:{disable:!0}},onMdblclick:{table:{disable:!0}},onLup:{table:{disable:!0}},onRup:{table:{disable:!0}},onMup:{table:{disable:!0}},onLdown:{table:{disable:!0}},onRdown:{table:{disable:!0}},onMdown:{table:{disable:!0}},onLhold:{table:{disable:!0}},onRhold:{table:{disable:!0}},onMhold:{table:{disable:!0}},onMouseWheel:{table:{disable:!0}},onTouchMove:{table:{disable:!0}},onTouchStart:{table:{disable:!0}},onTouchEnd:{table:{disable:!0}},onDoubleTouch:{table:{disable:!0}},onTouchLeave:{table:{disable:!0}},onTouchEnter:{table:{disable:!0}}},args:{name:"test",onMouseEnter:i("onMouseEnter",{depth:1,maxDepth:1}),onLclick:i("onLclick",{depth:1,maxDepth:1}),onMouseLeave:i("onMouseLeave",{depth:1,maxDepth:1}),onMouseMove:i("onMouseMove",{depth:1,maxDepth:1}),onLdblclick:i("onLdblclick",{depth:1,maxDepth:1})},render:e=>d.createElement(D,null,d.createElement(k,null,d.createElement(S,{...e},d.createElement(w,{name:"Custom Entity",lon:0,lat:0,alt:0},d.createElement(x,{size:[96,96],color:"#ff5959",src:"https://sandbox.openglobus.org/examples/billboards/carrot.png"})))))};var M,R,f;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(f=(R=c.parameters)==null?void 0:R.docs)==null?void 0:f.source}}};const ae=["Default"];export{c as Default,ae as __namedExportsOrder,oe as default};
