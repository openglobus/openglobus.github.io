import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,a as i,t as a,y as o}from"./Globe-B_Cm2Sl2.js";import{t as s}from"./Globe-hmg5axHn.js";import{n as c,t as l}from"./PlanetCamera-DHy_BIbE.js";import{i as u,j as d,t as f,v as p,y as m}from"./entity-BG8WpvvN.js";var h,g,_,v,y;function b(){return(b=t((()=>{h=e(n(),1),o(),c(),f(),s(),p(),g=`./story-assets/fonts`,_={component:d,title:`Components/Entity/Label`,argTypes:{face:{options:[`Roboto-Regular`],control:{type:`select`}}}},v={args:{color:`#053df3`,outlineColor:`#33fa07`,rotation:0,face:`Roboto-Regular`,align:`center`,opacity:1,size:32,outline:.2,text:`Hello, World!`,offset:[0,0],visibility:!0,isRTL:!1},render:e=>h.createElement(r,null,h.createElement(a,{fontsSrc:g},h.createElement(l,{lonLat:new i(1,1,1e5),lookLonLat:new i(0,0,0)}),h.createElement(m,{name:`test`},h.createElement(u,{name:`Custom Entity`,lonLat:[0,0]},h.createElement(d,e)))))},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    color: "#053df3",
    outlineColor: "#33fa07",
    rotation: 0,
    face: 'Roboto-Regular',
    align: 'center',
    opacity: 1,
    size: 32,
    outline: 0.2,
    text: "Hello, World!",
    offset: [0, 0],
    visibility: true,
    isRTL: false
  },
  render: (args: LabelParams) => {
    return <GlobeContextProvider>
            <Globe fontsSrc={FONTS_SRC}>
                <PlanetCamera lonLat={new LonLat(1, 1, 100000)} lookLonLat={new LonLat(0, 0, 0)} />
                <Vector name={'test'}>
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Label {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`]})))()}b();export{v as Default,y as __namedExportsOrder,_ as default};