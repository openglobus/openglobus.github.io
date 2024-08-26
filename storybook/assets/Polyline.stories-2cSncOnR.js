import{r as c,R as l}from"./index-RYns6xqu.js";import{P as V,V as R,b as C,h as T,a as w,G as D}from"./Globe-N5qjbn6A.js";import{V as O,E as z}from"./Entity-B9qLGOWr.js";const g=e=>Array.isArray(e)&&e.length>0&&e[0][0]instanceof R,P=e=>Array.isArray(e)&&e.length>0&&(e[0][0]instanceof C||e[0][0]instanceof Array),F=e=>e.map(n=>n.map(s=>C.createFromArray(s))),H=e=>typeof e=="string"||Array.isArray(e),x=e=>Array.isArray(e)&&e.every(n=>Array.isArray(n)&&n.every(H)),M=e=>Array.isArray(e)&&e.every(n=>Array.isArray(n)&&n.every(s=>Array.isArray(s)&&s.length===4&&s.every(f=>typeof f=="number"))),v=e=>x(e)?e.map(n=>n.map(s=>{const f=T(s);return[f.x,f.y,f.z,f.w]})):e,S=({visibility:e,color:n,altitude:s,thickness:f,opacity:y,isClosed:$,pathColors:a,path:o,_addPolyline:A,_removePolyline:E,...G})=>{const r=c.useRef(null);return c.useEffect(()=>{var t;typeof e=="boolean"&&r.current&&((t=r.current)==null||t.setVisibility(e))},[e]),c.useEffect(()=>{var t;typeof n=="string"&&r.current&&((t=r.current)==null||t.setColorHTML(n))},[n]),c.useEffect(()=>{var t;typeof s=="number"&&r.current&&((t=r.current)==null||t.setAltitude(s))},[s]),c.useEffect(()=>{var t;typeof f=="number"&&r.current&&((t=r.current)==null||t.setThickness(f))},[f]),c.useEffect(()=>{var t;typeof y=="number"&&r.current&&((t=r.current)==null||t.setOpacity(y))},[y]),c.useEffect(()=>{var t,u,i;if(r.current&&o!==void 0)if(P(o))(t=r.current)==null||t.setPathLonLat(o);else if(g(o))(u=r.current)==null||u.setPath3v(o);else{const d=F(o);d&&((i=r.current)==null||i.setPathLonLat(d))}},[o]),c.useEffect(()=>{var t,u;if(a&&Array.isArray(a)&&a.length>0)if(x(a)){const i=v(a);i&&((t=r.current)==null||t.setPathColors(i))}else M(a)&&((u=r.current)==null||u.setPathColors(a))},[a]),c.useEffect(()=>(r.current=new V({...G,color:n,visibility:e,opacity:y,thickness:f,pathLonLat:o&&P(o)?o:void 0,path3v:o&&g(o)?o:void 0,pathColors:v(a),altitude:s}),r.current&&A&&A(r.current),()=>{r.current&&E&&E(r.current)}),[A,E]),null},q={component:S,title:"Components/Entity/Polyline"},m={args:{color:"#053df3",visibility:!0,altitude:0,thickness:1.5,opacity:1,pathColors:[["#ff0000","#ff7f00","#ffff00","#00ff00","#0000ff","#4b0082","#9400d3"]],path:[[[0,0,1e4],[.2,.2,15e3],[.4,.4,2e4],[.6,.6,25e3],[.8,.8,2e4],[1,1,15e3],[1.2,1.2,1e4]]]},render:e=>l.createElement(w,null,l.createElement(D,{fontsSrc:"https://openglobus.org/examples/examples/fonts/fonts"},l.createElement(O,{name:"test"},l.createElement(z,{name:"Custom Entity",lon:0,lat:0,alt:0},l.createElement(S,{...e})))))};var b,L,p;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
            <Globe fontsSrc={"https://openglobus.org/examples/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Polyline {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(p=(L=m.parameters)==null?void 0:L.docs)==null?void 0:p.source}}};const B=["Default"];export{m as Default,B as __namedExportsOrder,q as default};
