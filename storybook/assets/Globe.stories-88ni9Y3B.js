import{G as d}from"./Globe-yIoc-5wQ.js";import"./index-D4lIrffr.js";const E={component:d,title:"Components/Scenes/Globe",argTypes:{atmosphereEnabled:{description:"Enable or disable atmosphere rendering",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},sunActive:{description:"Enable or disable sun lighting",control:{type:"boolean"},table:{defaultValue:{summary:"true"}}},viewExtent:{description:"Set initial view extent as [west, south, east, north] in degrees",control:{type:"object"},table:{type:{summary:"NumberArray4 | Extent"},defaultValue:{summary:"undefined"}}}}},e={args:{atmosphereEnabled:!1}},r={args:{atmosphereEnabled:!0}},t={args:{atmosphereEnabled:!0,viewExtent:[-10,35,40,70]}};var a,s,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: false
  }
}`,...(o=(s=e.parameters)==null?void 0:s.docs)==null?void 0:o.source}}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,u,c;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    atmosphereEnabled: true,
    viewExtent: [-10, 35, 40, 70] // Europe
  }
}`,...(c=(u=t.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};const g=["Default","AtmosphereEnabled","ViewExtentEurope"];export{r as AtmosphereEnabled,e as Default,t as ViewExtentEurope,g as __namedExportsOrder,E as default};
