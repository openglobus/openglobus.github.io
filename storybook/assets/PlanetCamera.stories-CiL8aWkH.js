import{r as p,R as s}from"./index-uubelm5h.js";import{u as C,b as u,a as G,G as P}from"./Globe-LHHj7Ux8.js";const f=({lon:a,lat:o,alt:n,lookLon:l,lookLat:m,lookAlt:c,viewAngle:r,...g})=>{const{globe:e}=C();return p.useEffect(()=>{e&&typeof a=="number"&&typeof o=="number"&&typeof n=="number"&&e.planet.flyLonLat(new u(a,o,n),new u(l,m,c))},[a,o,n,l,m,c,e]),p.useEffect(()=>{e&&typeof r=="number"&&e.planet.camera.setViewAngle(r)},[r,e]),null},E={component:f,title:"Components/Camera/PlanetCamera",parameters:{docs:{description:{component:"This story about Billboard component. Billboard is a component that represents a 2d object which always faced to camera."}}}},t={args:{lon:0,lat:0,alt:1e5,lookLon:10,lookLat:10,lookAlt:1e5,viewAngle:47},render:a=>s.createElement(G,null,s.createElement(P,null,s.createElement(f,{...a})))};var i,b,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(d=(b=t.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};const L=["Default"];export{t as Default,L as __namedExportsOrder,E as default};
