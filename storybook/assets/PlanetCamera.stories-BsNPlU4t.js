import{R as o}from"./iframe-DfnBMM8x.js";import{a as r,G as n}from"./Globe-EqVKypFw.js";import{P as a}from"./PlanetCamera-BkMNSJfV.js";import"./preload-helper-PPVm8Dsz.js";const i={component:a,title:"Components/Camera/PlanetCamera",parameters:{docs:{description:{component:"This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera."}}}},e={args:{lon:0,lat:0,alt:1e5,lookLon:10,lookLat:10,lookAlt:1e5,viewAngle:47},render:t=>o.createElement(r,null,o.createElement(n,null,o.createElement(a,{...t})))};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    lon: 0,
    lat: 0,
    alt: 100000,
    lookLon: 10,
    lookLat: 10,
    lookAlt: 100000,
    viewAngle: 47
  },
  render: (args: PlanetCameraParams) => <GlobeContextProvider>
        <Globe>
            <PlanetCamera {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,i as default};
