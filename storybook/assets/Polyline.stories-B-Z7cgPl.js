import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,t as i}from"./Globe-B_Cm2Sl2.js";import{t as a}from"./Globe-hmg5axHn.js";import{D as o,i as s,t as c,v as l,y as u}from"./entity-BG8WpvvN.js";var d,f,p,m;function h(){return(h=t((()=>{d=e(n(),1),c(),a(),l(),f={component:o,title:`Components/Entity/Polyline`},p={args:{color:`#053df3`,visibility:!0,altitude:0,thickness:1.5,opacity:1,pathColors:[[`#ff0000`,`#ff7f00`,`#ffff00`,`#00ff00`,`#0000ff`,`#4b0082`,`#9400d3`]],path:[[[0,0,1e4],[.2,.2,15e3],[.4,.4,2e4],[.6,.6,25e3],[.8,.8,2e4],[1,1,15e3],[1.2,1.2,1e4]]]},render:e=>d.createElement(r,null,d.createElement(i,{fontsSrc:`https://sandbox.openglobus.org/examples/fonts/fonts`},d.createElement(u,{name:`test`},d.createElement(s,{name:`Custom Entity`,lonLat:[0,0]},d.createElement(o,e)))))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Polyline {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]})))()}h();export{p as Default,m as __namedExportsOrder,f as default};