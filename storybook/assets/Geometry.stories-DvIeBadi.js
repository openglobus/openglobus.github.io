import{r as l,R as n}from"./iframe-D3cuFNRr.js";import{J as E,k as g,g as P,a as G,G as v}from"./Globe-BbxSvTi6.js";import{V as A,E as h}from"./Entity-BPm0uofG.js";import"./preload-helper-PPVm8Dsz.js";function L(r){switch(r.type){case"POINT":return Array.isArray(r.coordinates)&&r.coordinates.length>=2&&typeof r.coordinates[0]=="number";case"LINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.length>=2&&typeof o[0]=="number");case"POLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));case"MULTIPOLYGON":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.every(s=>Array.isArray(s)&&s.length>=2&&typeof s[0]=="number")));case"MULTILINESTRING":return Array.isArray(r.coordinates)&&r.coordinates.every(o=>Array.isArray(o)&&o.every(t=>Array.isArray(t)&&t.length>=2&&typeof t[0]=="number"));default:return!1}}const d=r=>{const{visibility:o,fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:y,type:b,coordinates:x,_addGeometry:p,_removeGeometry:C}=r,e=l.useRef(null);if(!L({type:b,coordinates:x}))throw new Error(`Invalid coordinates for type ${b}`);return l.useEffect(()=>{typeof o=="boolean"&&e.current&&e.current.setVisibility(o)},[o]),l.useEffect(()=>{if(t!==void 0&&e.current){if(t instanceof E)e.current.setFillColor4v(t);else if(Array.isArray(t))e.current.setFillColor(...t);else if(typeof t=="string"&&e.current){const a=g.htmlColorToRgba(t);e.current.setFillColor4v(a)}}},[t]),l.useEffect(()=>{if(s!==void 0&&e.current){if(s instanceof E)e.current.setLineColor4v(s);else if(Array.isArray(s))e.current.setLineColor(...s);else if(typeof s=="string"&&e.current){const a=g.htmlColorToRgba(s);e.current.setLineColor4v(a)}}},[s]),l.useEffect(()=>{if(i!==void 0&&e.current){if(i instanceof E)e.current.setStrokeColor4v(i);else if(Array.isArray(i))e.current.setStrokeColor(...i);else if(typeof i=="string"&&e.current){const a=g.htmlColorToRgba(i);e.current.setStrokeColor4v(a)}}},[i]),l.useEffect(()=>{typeof c=="number"&&e.current&&e.current.setLineWidth(c)},[c]),l.useEffect(()=>{typeof y=="number"&&e.current&&e.current.setStrokeWidth(y)},[y]),l.useEffect(()=>(e.current=new P({...r,type:b,coordinates:x,style:{fillColor:t,lineColor:s,strokeColor:i,lineWidth:c,strokeWidth:y},visibility:o}),e.current&&p&&p(e.current),()=>{e.current&&C&&C(e.current)}),[p,C]),null},V={component:d,title:"Components/Entity/Geometry"},f={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#f205be",lineWidth:2,strokeWidth:2,type:"POLYGON",coordinates:[[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]],visibility:!0},render:r=>n.createElement(G,null,n.createElement(v,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(A,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))},u={args:{fillColor:"#053df3",strokeColor:"#33fa07",lineColor:"#053df3",lineWidth:20,type:"POINT",coordinates:[0,0],visibility:!0},render:r=>n.createElement(G,null,n.createElement(v,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(A,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))},m={args:{lineColor:"#053df3",lineWidth:2,type:"LINESTRING",coordinates:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],visibility:!0},render:r=>n.createElement(G,null,n.createElement(v,{fontsSrc:"https://sandbox.openglobus.org/examples/fonts/fonts"},n.createElement(A,{name:"test"},n.createElement(h,{name:"Custom Entity",lon:0,lat:0,alt:0},n.createElement(d,{...r})))))};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const O=["Polygon","Point","Line"];export{m as Line,u as Point,f as Polygon,O as __namedExportsOrder,V as default};
