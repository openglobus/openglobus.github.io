import{r as l,R as n}from"./index-B-SYruCi.js";import{f as E,h as g,i as T,a as G,G as A}from"./Globe-BnqXSAgn.js";import{V as v,E as h}from"./Entity-B2e2ke--.js";function R(r){switch(r.type){case"POINT":return Array.isArray(r.coordinates)&&r.coordinates.length>=2&&typeof r.coordinates[0]=="number";case"LINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.length>=2&&typeof o[0]=="number");case"POLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));case"MULTIPOLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.every(s=>Array.isArray(s)&&s.length>=2&&typeof s[0]=="number")));case"MULTILINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));default:return!1}}const d=r=>{const{visibility:o,fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:f,type:b,coordinates:x,_addGeometry:p,_removeGeometry:C,...w}=r,e=l.useRef(null);if(!R({type:b,coordinates:x}))throw new Error(`Invalid coordinates for type ${b}`);return l.useEffect(()=>{typeof o=="boolean"&&e.current&&e.current.setVisibility(o)},[o]),l.useEffect(()=>{if(t!==void 0&&e.current){if(t instanceof E)e.current.setFillColor4v(t);else if(Array.isArray(t))e.current.setFillColor(...t);else if(typeof t=="string"&&e.current){const a=g(t);e.current.setFillColor4v(a)}}},[t]),l.useEffect(()=>{if(s!==void 0&&e.current){if(s instanceof E)e.current.setLineColor4v(s);else if(Array.isArray(s))e.current.setLineColor(...s);else if(typeof s=="string"&&e.current){const a=g(s);e.current.setLineColor4v(a)}}},[s]),l.useEffect(()=>{if(i!==void 0&&e.current){if(i instanceof E)e.current.setStrokeColor4v(i);else if(Array.isArray(i))e.current.setStrokeColor(...i);else if(typeof i=="string"&&e.current){const a=g(i);e.current.setStrokeColor4v(a)}}},[i]),l.useEffect(()=>{typeof c=="number"&&e.current&&e.current.setLineWidth(c)},[c]),l.useEffect(()=>{typeof f=="number"&&e.current&&e.current.setStrokeWidth(f)},[f]),l.useEffect(()=>(e.current=new T({...r,type:b,coordinates:x,style:{fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:f},visibility:o}),e.current&&p&&p(e.current),()=>{e.current&&C&&C(e.current)}),[p,C]),null},M={component:d,title:"Components/Entity/Geometry"},y={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#f205be",lineWidth:2,strokeWidth:2,type:"POLYGON",coordinates:[[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]],visibility:!0},render:r=>n.createElement(G,null,n.createElement(A,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(v,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))},u={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#053df3",lineWidth:20,type:"POINT",coordinates:[0,0],visibility:!0},render:r=>n.createElement(G,null,n.createElement(A,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(v,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))},m={args:{lineColor:"#053df3",lineWidth:2,type:"LINESTRING",coordinates:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],visibility:!0},render:r=>n.createElement(G,null,n.createElement(A,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(v,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))};var P,L,S;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(S=(L=y.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var N,I,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
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
            <Globe fontsSrc={"https://sandbox.openglobus.org/examples/fonts/fonts"}>
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lon={0} lat={0} alt={0}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...(W=(O=m.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};const U=["Polygon","Point","Line"];export{m as Line,u as Point,y as Polygon,U as __namedExportsOrder,M as default};
