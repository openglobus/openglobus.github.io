import{r as p,R as s}from"./index-D4lIrffr.js";import{u as C,A as u,a as G,G as P}from"./Globe-CkJRolcj.js";const b=({lon:a,lat:o,alt:r,lookLon:l,lookLat:m,lookAlt:c,viewAngle:n,...g})=>{const{globe:e}=C();return p.useEffect(()=>{e&&typeof a=="number"&&typeof o=="number"&&typeof r=="number"&&e.planet.flyLonLat(new u(a,o,r),new u(l,m,c))},[a,o,r,l,m,c,e]),p.useEffect(()=>{e&&typeof n=="number"&&e.planet.camera.setViewAngle(n)},[n,e]),null},E={component:b,title:"Components/Camera/PlanetCamera",parameters:{docs:{description:{component:"This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera."}}}},t={args:{lon:0,lat:0,alt:1e5,lookLon:10,lookLat:10,lookAlt:1e5,viewAngle:47},render:a=>s.createElement(G,null,s.createElement(P,null,s.createElement(b,{...a})))};var i,d,f;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(f=(d=t.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};const w=["Default"];export{t as Default,w as __namedExportsOrder,E as default};
