import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,t as i}from"./Globe-B_Cm2Sl2.js";import{t as a}from"./Globe-hmg5axHn.js";import{i as o,k as s,t as c,v as l,y as u}from"./entity-BG8WpvvN.js";var d,f,p,m,h,g;function _(){return(_=t((()=>{d=e(n(),1),c(),a(),l(),f={component:s,title:`Components/Entity/Geometry`},p={args:{fillColor:`#053df3`,strokeColor:`#33fa07`,lineColor:`#f205be`,lineWidth:2,strokeWidth:2,type:`POLYGON`,coordinates:[[[0,0,0],[0,1,0],[1,1,0],[1,0,0]]],visibility:!0},render:e=>d.createElement(r,null,d.createElement(i,{fontsSrc:`https://sandbox.openglobus.org/examples/fonts/fonts`},d.createElement(u,{name:`test`},d.createElement(o,{name:`Custom Entity`,lonLat:[0,0]},d.createElement(s,e)))))},m={args:{fillColor:`#053df3`,strokeColor:`#33fa07`,lineColor:`#053df3`,lineWidth:20,type:`POINT`,coordinates:[0,0],visibility:!0},render:e=>d.createElement(r,null,d.createElement(i,{fontsSrc:`https://sandbox.openglobus.org/examples/fonts/fonts`},d.createElement(u,{name:`test`},d.createElement(o,{name:`Custom Entity`,lonLat:[0,0]},d.createElement(s,e)))))},h={args:{lineColor:`#053df3`,lineWidth:2,type:`LINESTRING`,coordinates:[[0,0,0],[0,1,0],[1,1,0],[1,0,0]],visibility:!0},render:e=>d.createElement(r,null,d.createElement(i,{fontsSrc:`https://sandbox.openglobus.org/examples/fonts/fonts`},d.createElement(u,{name:`test`},d.createElement(o,{name:`Custom Entity`,lonLat:[0,0]},d.createElement(s,e)))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Geometry {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...h.parameters?.docs?.source}}},g=[`Polygon`,`Point`,`Line`]})))()}_();export{h as Line,m as Point,p as Polygon,g as __namedExportsOrder,f as default};