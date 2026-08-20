import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./Globe-B_Cm2Sl2.js";var r,i,a,o,s;function c(){return(c=e((()=>{t(),r={component:n,title:`Components/Scenes/Globe`,argTypes:{atmosphereEnabled:{description:`Enable or disable atmosphere rendering`,control:{type:`boolean`},table:{defaultValue:{summary:`true`}}},sunActive:{description:`Enable or disable sun lighting`,control:{type:`boolean`},table:{defaultValue:{summary:`true`}}},viewExtent:{description:`Set initial view extent as [west, south, east, north] in degrees`,control:{type:`object`},table:{type:{summary:`NumberArray4 | Extent`},defaultValue:{summary:`undefined`}}}}},i={args:{atmosphereEnabled:!1}},a={args:{atmosphereEnabled:!0}},o={args:{atmosphereEnabled:!0,viewExtent:[-10,35,40,70]}},i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: false
  }
}`,...i.parameters?.docs?.source}}},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true
  }
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true,
    viewExtent: [-10, 35, 40, 70] // Europe
  }
}`,...o.parameters?.docs?.source}}},s=[`Default`,`AtmosphereEnabled`,`ViewExtentEurope`]})))()}c();export{a as AtmosphereEnabled,i as Default,o as ViewExtentEurope,s as __namedExportsOrder,r as default};