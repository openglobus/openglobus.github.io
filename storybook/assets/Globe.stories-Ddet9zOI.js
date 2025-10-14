import{G as a}from"./Globe-CFMRfbHW.js";import"./iframe-DXtCy9N6.js";import"./preload-helper-PPVm8Dsz.js";const l={component:a,title:"Components/Scenes/Globe",argTypes:{atmosphereEnabled:{description:"Enable or disable atmosphere rendering",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},sunActive:{description:"Enable or disable sun lighting",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},viewExtent:{description:"Set initial view extent as [west, south, east, north] in degrees",control:{type:"object"},table:{type:{summary:"NumberArray4 | Extent"},defaultValue:{summary:"undefined"}}}}},e={args:{atmosphereEnabled:!1}},r={args:{atmosphereEnabled:!0}},t={args:{atmosphereEnabled:!0,viewExtent:[-10,35,40,70]}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: false
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true,
    viewExtent: [-10, 35, 40, 70] // Europe
  }
}`,...t.parameters?.docs?.source}}};const p=["Default","AtmosphereEnabled","ViewExtentEurope"];export{r as AtmosphereEnabled,e as Default,t as ViewExtentEurope,p as __namedExportsOrder,l as default};
