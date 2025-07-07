import{r as i,R as f}from"./index-D4lIrffr.js";import{u as x,g as L,A as m,m as C,a as P,G as h,F as G}from"./Globe-BTEgr3Q3.js";import{V as A,E as w}from"./Entity-CPmwAWuA.js";const T=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof C,V=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof m,g=(e,t)=>t?T(t)?t:V(t)?t.map(a=>a.map(n=>e.lonLatToCartesian(n))):t.map(a=>a.map(n=>e.lonLatToCartesian(m.createFromArray(n)))):[],b=({visibility:e,color:t,opacity:a,path:n,_addStrip:c,_removeStrip:s,...u})=>{const r=i.useRef(null),{globe:l}=x();return i.useEffect(()=>{var o;typeof e=="boolean"&&r.current&&((o=r.current)==null||o.setVisibility(e))},[e]),i.useEffect(()=>{var o;typeof a=="number"&&r.current&&((o=r.current)==null||o.setOpacity(a))},[a]),i.useEffect(()=>{var o;l&&n!==void 0&&r.current&&((o=r.current)==null||o.setPath(g(l.planet.ellipsoid,n)))},[n]),i.useEffect(()=>{var o;typeof t=="string"&&r.current&&((o=r.current)==null||o.setColorHTML(t))},[t]),i.useEffect(()=>(l&&(r.current=new L({...u,color:t,visibility:e,path:g(l.planet.ellipsoid,n),opacity:a}),r.current&&c&&c(r.current)),()=>{r.current&&s&&s(r.current)}),[c,s,l]),null},O={component:b,title:"Components/Entity/Strip"};function R(e,t,a=2e6,n=10){let c=[];for(let s=0;s<=n;s++){let u=G.getIntermediatePointOnGreatCircle(e,t,s/n),r=Math.sin(s/n*Math.PI)*a,l=new m(u.lon,u.lat,r);c.push([u,l])}return c}const p={argTypes:{opacity:{control:{type:"range",min:0,max:1,step:.1}}},args:{color:"#053df3",visibility:!0,opacity:1,path:R(new m(0,90),new m(90,0)).map(e=>e.map(t=>[t.lon,t.lat,t.height]))},render:e=>f.createElement(P,null,f.createElement(h,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},f.createElement(A,{name:"test"},f.createElement(w,{name:"Custom Entity",lon:0,lat:0,alt:0},f.createElement(b,{...e})))))};var y,E,d;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(d=(E=p.parameters)==null?void 0:E.docs)==null?void 0:d.source}}};const S=["Default"];export{p as Default,S as __namedExportsOrder,O as default};
