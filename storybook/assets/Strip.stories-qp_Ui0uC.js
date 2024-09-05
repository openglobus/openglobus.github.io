import{r as i,R as f}from"./index-RYns6xqu.js";import{u as b,S as x,b as m,V as C,a as P,G as h,k as G}from"./Globe-CrL9GLUm.js";import{V,E as w}from"./Entity-Bp6SkOZz.js";const A=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof C,T=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof m,g=(e,t)=>t?A(t)?t:T(t)?t.map(o=>o.map(n=>e.lonLatToCartesian(n))):t.map(o=>o.map(n=>e.lonLatToCartesian(m.createFromArray(n)))):[],d=({visibility:e,color:t,opacity:o,path:n,_addStrip:c,_removeStrip:s,...u})=>{const r=i.useRef(null),{globe:l}=b();return i.useEffect(()=>{var a;typeof e=="boolean"&&r.current&&((a=r.current)==null||a.setVisibility(e))},[e]),i.useEffect(()=>{var a;typeof o=="number"&&r.current&&((a=r.current)==null||a.setOpacity(o))},[o]),i.useEffect(()=>{var a;l&&n!==void 0&&r.current&&((a=r.current)==null||a.setPath(g(l.planet.ellipsoid,n)))},[n]),i.useEffect(()=>{var a;typeof t=="string"&&r.current&&((a=r.current)==null||a.setColorHTML(t))},[t]),i.useEffect(()=>(l&&(r.current=new x({...u,color:t,visibility:e,path:g(l.planet.ellipsoid,n),opacity:o}),r.current&&c&&c(r.current)),()=>{r.current&&s&&s(r.current)}),[c,s,l]),null},O={component:d,title:"Components/Entity/Strip"};function S(e,t,o=2e6,n=10){let c=[];for(let s=0;s<=n;s++){let u=G.getIntermediatePointOnGreatCircle(e,t,s/n),r=Math.sin(s/n*Math.PI)*o,l=new m(u.lon,u.lat,r);c.push([u,l])}return c}const p={argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}}},args:{color:"#053df3",visibility:!0,opacity:1,path:S(new m(0,90),new m(90,0)).map(e=>e.map(t=>[t.lon,t.lat,t.height]))},render:e=>f.createElement(P,null,f.createElement(h,{fontsSrc:"https://openglobus.org/examples/examples/fonts/fonts"},f.createElement(V,{name:"test"},f.createElement(w,{name:"Custom Entity",lon:0,lat:0,alt:0},f.createElement(d,{...e})))))};var y,E,L;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
    path: (getLeaf(new LonLat(0, 90), new LonLat(90, 0)).map(arr => arr.map(ll => [ll.lon, ll.lat, ll.height])) as [])
  },
  render: (args: StripParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://openglobus.org/examples/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Strip {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(L=(E=p.parameters)==null?void 0:E.docs)==null?void 0:L.source}}};const D=["Default"];export{p as Default,D as __namedExportsOrder,O as default};
