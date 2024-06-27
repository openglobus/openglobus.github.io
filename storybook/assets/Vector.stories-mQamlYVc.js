import{V as g,E as x}from"./Entity-CJCZhpzc.js";import{B as v}from"./Billboard-D71lJuHs.js";import{R as a}from"./index-uubelm5h.js";import{a as w,G as P}from"./Globe-CyzGI6Fn.js";import{v as S}from"./v4-CQkTLCs1.js";const{addons:V}=__STORYBOOK_MODULE_PREVIEW_API__,{global:E}=__STORYBOOK_MODULE_GLOBAL__,{ImplicitActionsDuringRendering:I}=__STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS__;var A="storybook/actions",B=`${A}/action-event`,j={depth:10,clearOnStoryChange:!0,limit:50},f=(t,e)=>{let o=Object.getPrototypeOf(t);return!o||e(o)?o:f(o,e)},C=t=>!!(typeof t=="object"&&t&&f(t,e=>/^Synthetic(?:Base)?Event$/.test(e.constructor.name))&&typeof t.persist=="function"),T=t=>{if(C(t)){let e=Object.create(t.constructor.prototype,Object.getOwnPropertyDescriptors(t));e.persist();let o=Object.getOwnPropertyDescriptor(e,"view"),n=o==null?void 0:o.value;return typeof n=="object"&&(n==null?void 0:n.constructor.name)==="Window"&&Object.defineProperty(e,"view",{...o,value:Object.create(n.constructor.prototype)}),e}return t},G=()=>typeof crypto=="object"&&typeof crypto.getRandomValues=="function"?S():Date.now().toString(36)+Math.random().toString(36).substring(2);function M(t,e={}){let o={...j,...e},n=function(...i){var l,p;if(e.implicit){let m=(l="__STORYBOOK_PREVIEW__"in E?E.__STORYBOOK_PREVIEW__:void 0)==null?void 0:l.storyRenders.find(r=>r.phase==="playing"||r.phase==="rendering");if(m){let r=!((p=window==null?void 0:window.FEATURES)!=null&&p.disallowImplicitActionsInRenderV8),d=new I({phase:m.phase,name:t,deprecated:r});if(r)console.warn(d);else throw d}}let h=V.getChannel(),y=G(),b=5,c=i.map(T),D=i.length>1?c:c[0],R={id:y,count:0,data:{name:t,args:D},options:{...o,maxDepth:b+(o.depth||3),allowFunction:o.allowFunction||!1}};h.emit(B,R)};return n.isAction=!0,n.implicit=e.implicit,n}const U={title:"Components/Layer/Vector",component:g},s={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"test",onMouseEnter:M("onMouseEnter",{depth:1,maxDepth:1})},render:t=>a.createElement(w,null,a.createElement(P,null,a.createElement(g,{...t},a.createElement(x,{name:"Custom Entity",lon:0,lat:0,alt:0},a.createElement(v,{size:[96,96],color:"#ff5959",src:"https://openglobus.org/examples/examples/billboards/carrot.png"})))))};var u,_,O;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  args: {
    name: 'test',
    onMouseEnter: action('onMouseEnter', {
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
}`,...(O=(_=s.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};const F=["Default"];export{s as Default,F as __namedExportsOrder,U as default};
