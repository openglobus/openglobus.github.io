import{r as a,R as u}from"./iframe-D3cuFNRr.js";import{v as L,A as v,m as p,k as C,a as x,G as S}from"./Globe-BbxSvTi6.js";import{V as G,E as R}from"./Entity-BPm0uofG.js";import"./preload-helper-PPVm8Dsz.js";const A=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof p,E=e=>Array.isArray(e)&&e.length>0&&(e[0][0]instanceof v||e[0][0]instanceof Array),V=e=>e.map(t=>t.map(o=>v.createFromArray(o))),T=e=>typeof e=="string"||Array.isArray(e),g=e=>Array.isArray(e)&&e.every(t=>Array.isArray(t)&&t.every(T)),k=e=>Array.isArray(e)&&e.every(t=>Array.isArray(t)&&t.every(o=>Array.isArray(o)&&o.length===4&&o.every(s=>typeof s=="number"))),d=e=>g(e)?e.map(t=>t.map(o=>{const s=C.htmlColorToRgba(o);return[s.x,s.y,s.z,s.w]})):e,b=({visibility:e,color:t,altitude:o,thickness:s,opacity:i,isClosed:w,pathColors:f,path:n,_addPolyline:y,_removePolyline:m,...P})=>{const r=a.useRef(null);return a.useEffect(()=>{typeof e=="boolean"&&r.current&&r.current?.setVisibility(e)},[e]),a.useEffect(()=>{typeof t=="string"&&r.current&&r.current?.setColorHTML(t)},[t]),a.useEffect(()=>{typeof o=="number"&&r.current&&r.current?.setAltitude(o)},[o]),a.useEffect(()=>{typeof s=="number"&&r.current&&r.current?.setThickness(s)},[s]),a.useEffect(()=>{typeof i=="number"&&r.current&&r.current?.setOpacity(i)},[i]),a.useEffect(()=>{if(r.current&&n!==void 0)if(E(n))r.current?.setPathLonLat(n);else if(A(n))r.current?.setPath3v(n);else{const c=V(n);c&&r.current?.setPathLonLat(c)}},[n]),a.useEffect(()=>{if(f&&Array.isArray(f)&&f.length>0)if(g(f)){const c=d(f);c&&r.current?.setPathColors(c)}else k(f)&&r.current?.setPathColors(f)},[f]),a.useEffect(()=>(r.current=new L({...P,color:t,visibility:e,opacity:i,thickness:s,pathLonLat:n&&E(n)?n:void 0,path3v:n&&A(n)?n:void 0,pathColors:d(f),altitude:o}),r.current&&y&&y(r.current),()=>{r.current&&m&&m(r.current)}),[y,m]),null},H={component:b,title:"Components/Entity/Polyline"},l={args:{color:"#053df3",visibility:!0,altitude:0,thickness:1.5,opacity:1,pathColors:[["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#9400d3"]],path:[[[0,0,1e4],[.2,.2,15e3],[.4,.4,2e4],[.6,.6,25e3],[.8,.8,2e4],[1,1,15e3],[1.2,1.2,1e4]]]},render:e=>u.createElement(x,null,u.createElement(S,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},u.createElement(G,{name:"test"},u.createElement(R,{name:"Custom Entity",lon:0,lat:0,alt:0},u.createElement(b,{...e})))))};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#053df3",
    visibility: true,
    altitude: 0,
    thickness: 1.5,
    opacity: 1,
    pathColors: [["#ff0000", "#ff7f00", "#ffff00", "#00ff00", "#0000ff", "#4b0082", "#9400d3"]],
    path: [[[0, 0, 10000], [0.2, 0.2, 15000], [0.4, 0.4, 20000], [0.6, 0.6, 25000], [0.8, 0.8, 20000], [1, 1, 15000], [1.2, 1.2, 10000]]]
  },
  render: (args: PolylineParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Polyline {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...l.parameters?.docs?.source}}};const M=["Default"];export{l as Default,M as __namedExportsOrder,H as default};
