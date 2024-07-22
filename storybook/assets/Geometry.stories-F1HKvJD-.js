import{r as l,R as o}from"./index-uubelm5h.js";import{f as b,h as g,i as T,a as G,G as v}from"./Globe-LHHj7Ux8.js";import{V as A,E as h}from"./Entity-DiBwTGp7.js";function R(r){switch(r.type){case"POINT":return Array.isArray(r.coordinates)&&r.coordinates.length>=2&&typeof r.coordinates[0]=="number";case"LINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(n=>Array.isArray(n)&&n.length>=2&&typeof n[0]=="number");case"POLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(n=>Array.isArray(n)&&n.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));case"MULTIPOLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(n=>Array.isArray(n)&&n.every(t=>Array.isArray(t)&&t.every(s=>Array.isArray(s)&&s.length>=2&&typeof s[0]=="number")));case"MULTILINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(n=>Array.isArray(n)&&n.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));default:return!1}}const d=r=>{const{visibility:n,fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:y,type:p,coordinates:x,_addGeometry:C,_removeGeometry:E,...w}=r,e=l.useRef(null);if(!R({type:p,coordinates:x}))throw new Error(`Invalid coordinates for type ${p}`);return l.useEffect(()=>{typeof n=="boolean"&&e.current&&e.current.setVisibility(n)},[n]),l.useEffect(()=>{if(t!==void 0&&e.current){if(t instanceof b)e.current.setFillColor4v(t);else if(Array.isArray(t))e.current.setFillColor(...t);else if(typeof t=="string"&&e.current){const a=g(t);e.current.setFillColor4v(a)}}},[t]),l.useEffect(()=>{if(s!==void 0&&e.current){if(s instanceof b)e.current.setLineColor4v(s);else if(Array.isArray(s))e.current.setLineColor(...s);else if(typeof s=="string"&&e.current){const a=g(s);e.current.setLineColor4v(a)}}},[s]),l.useEffect(()=>{if(i!==void 0&&e.current){if(i instanceof b)e.current.setStrokeColor4v(i);else if(Array.isArray(i))e.current.setStrokeColor(...i);else if(typeof i=="string"&&e.current){const a=g(i);e.current.setStrokeColor4v(a)}}},[i]),l.useEffect(()=>{typeof c=="number"&&e.current&&e.current.setLineWidth(c)},[c]),l.useEffect(()=>{typeof y=="number"&&e.current&&e.current.setStrokeWidth(y)},[y]),l.useEffect(()=>(e.current=new T({...r,type:p,coordinates:x,style:{fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:y},visibility:n}),e.current&&C&&C(e.current),()=>{e.current&&E&&E(e.current)}),[C,E]),null},M={component:d,title:"Components/Entity/Geometry"},f={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#f205be",lineWidth:2,strokeWidth:2,type:"POLYGON",coordinates:[[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]],visibility:!0},render:r=>o.createElement(G,null,o.createElement(v,{fontsSrc:"https://openglobus.org/examples/examples/fonts/fonts"},o.createElement(A,{name:"test"},o.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},o.createElement(d,{...r})))))},u={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#053df3",lineWidth:20,type:"POINT",coordinates:[0,0],visibility:!0},render:r=>o.createElement(G,null,o.createElement(v,{fontsSrc:"https://openglobus.org/examples/examples/fonts/fonts"},o.createElement(A,{name:"test"},o.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},o.createElement(d,{...r})))))},m={args:{lineColor:"#053df3",lineWidth:2,type:"LINESTRING",coordinates:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],visibility:!0},render:r=>o.createElement(G,null,o.createElement(v,{fontsSrc:"https://openglobus.org/examples/examples/fonts/fonts"},o.createElement(A,{name:"test"},o.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},o.createElement(d,{...r})))))};var P,L,S;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    fillColor: "#053df3",
    strokeColor: "#33fa07",
    lineColor: "#f205be",
    lineWidth: 2,
    strokeWidth: 2,
    type: 'POLYGON',
    coordinates: [[[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]]],
    visibility: true
  },
  render: (args: GeometryParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://openglobus.org/examples/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(S=(L=f.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var N,I,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    fillColor: "#053df3",
    strokeColor: "#33fa07",
    lineColor: "#053df3",
    lineWidth: 20,
    type: 'POINT',
    coordinates: [0.0, 0.0],
    visibility: true
  },
  render: (args: GeometryParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://openglobus.org/examples/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(V=(I=u.parameters)==null?void 0:I.docs)==null?void 0:V.source}}};var k,O,W;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    lineColor: "#053df3",
    lineWidth: 2,
    type: 'LINESTRING',
    coordinates: [[0, 0, 0], [0, 1, 0], [1, 1, 0], [1, 0, 0]],
    visibility: true
  },
  render: (args: GeometryParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={"https://openglobus.org/examples/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const U=["Polygon","Point","Line"];export{m as Line,u as Point,f as Polygon,U as __namedExportsOrder,M as default};
