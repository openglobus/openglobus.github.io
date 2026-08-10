import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,b as i,c as a,t as o,v as s}from"./Globe-B2Ta13j5.js";import{t as c}from"./Globe-DIf2fNKi.js";import{T as l,i as u,t as d,v as f,y as p}from"./entity-CVYCrRLG.js";function m(e,t,n=2e6,r=10){let i=[];for(let o=0;o<=r;o++){let c=s.getIntermediatePointOnGreatCircle(e,t,o/r),l=Math.sin(o/r*Math.PI)*n,u=new a(c.lon,c.lat,l);i.push([c,u])}return i}var h,g,_,v;function y(){return(y=t((()=>{h=e(n(),1),d(),c(),f(),i(),g={component:l,title:`Components/Entity/Strip`},_={argTypes:{opacity:{control:{type:`range`,min:0,max:1,step:.1}}},args:{color:`#053df3`,visibility:!0,opacity:1,path:m(new a(0,90),new a(90,0)).map(e=>e.map(e=>[e.lon,e.lat,e.height]))},render:e=>h.createElement(r,null,h.createElement(o,{fontsSrc:`https://sandbox.openglobus.org/examples/fonts/fonts`},h.createElement(p,{name:`test`},h.createElement(u,{name:`Custom Entity`,lonLat:[0,0]},h.createElement(l,e)))))},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
                    <Entity name="Custom Entity" lonLat={[0, 0]}>
                        <Strip {...args} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`]})))()}y();export{_ as Default,v as __namedExportsOrder,g as default};