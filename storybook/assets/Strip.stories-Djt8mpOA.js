import{r as c,R as u}from"./iframe-CxB7CSSt.js";import{u as y,T as E,L as f,b,a as d,G as L,q as x}from"./Globe-BpU5Tz87.js";import{V as C,E as P}from"./Entity-B3_gu4pK.js";import"./preload-helper-PPVm8Dsz.js";const h=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof b,G=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof f,p=(e,t)=>t?h(t)?t:G(t)?t.map(o=>o.map(n=>e.lonLatToCartesian(n))):t.map(o=>o.map(n=>e.lonLatToCartesian(f.createFromArray(n)))):[],g=({visibility:e,color:t,opacity:o,path:n,_addStrip:l,_removeStrip:a,...i})=>{const r=c.useRef(null),{globe:s}=y();return c.useEffect(()=>{typeof e=="boolean"&&r.current&&r.current?.setVisibility(e)},[e]),c.useEffect(()=>{typeof o=="number"&&r.current&&r.current?.setOpacity(o)},[o]),c.useEffect(()=>{s&&n!==void 0&&r.current&&r.current?.setPath(p(s.planet.ellipsoid,n))},[n]),c.useEffect(()=>{typeof t=="string"&&r.current&&r.current?.setColorHTML(t)},[t]),c.useEffect(()=>(s&&(r.current=new E({...i,color:t,visibility:e,path:p(s.planet.ellipsoid,n),opacity:o}),r.current&&l&&l(r.current)),()=>{r.current&&a&&a(r.current)}),[l,a,s]),null},R={component:g,title:"Components/Entity/Strip"};function T(e,t,o=2e6,n=10){let l=[];for(let a=0;a<=n;a++){let i=x.getIntermediatePointOnGreatCircle(e,t,a/n),r=Math.sin(a/n*Math.PI)*o,s=new f(i.lon,i.lat,r);l.push([i,s])}return l}const m={argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}}},args:{color:"#053df3",visibility:!0,opacity:1,path:T(new f(0,90),new f(90,0)).map(e=>e.map(t=>[t.lon,t.lat,t.height]))},render:e=>u.createElement(d,null,u.createElement(L,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},u.createElement(C,{name:"test"},u.createElement(P,{name:"Custom Entity",lon:0,lat:0,alt:0},u.createElement(g,{...e})))))};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  argTypes: {
    opacity: {
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1
      }
    }
  },
  args: {
    color: "#053df3",
    visibility: true,
    opacity: 1,
    path: getLeaf(new LonLat(0, 90), new LonLat(90, 0)).map(arr => arr.map(ll => [ll.lon, ll.lat, ll.height])) as []
  },
  render: (args: StripParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Strip {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...m.parameters?.docs?.source}}};const M=["Default"];export{m as Default,M as __namedExportsOrder,R as default};
