import{u as V,d as h,a as b,G}from"./Globe-DRh-hfkc.js";import{r as c,R as r}from"./index-D4lIrffr.js";const p=({name:o,...n})=>{const{globe:a}=V(),e=c.useRef(null);return c.useEffect(()=>{var l;typeof n.src=="string"&&e.current&&((l=e.current)==null||l.setSrc(n.src))},[n.src]),c.useEffect(()=>{if(a)return e.current=new h(o,n),a.planet.addLayer(e.current),()=>{e.current&&a.planet.removeLayer(e.current)}},[a]),null},S={title:"Components/Layer/GeoVideo",component:p},t={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"test",src:"https://sandbox.openglobus.org/examples/geoVideo/imergac_20160508_NASA.mp4",corners:[[-134.7904382939764,55.07955352950936],[-54.984314759410594,54.98843914299802],[-55.041854075913825,19.820153025849297],[-134.89882012831265,19.631495126944017]]},render:o=>r.createElement(b,null,r.createElement(G,null,r.createElement(p,{...o})))},s={args:{name:"vegas",src:"https://sandbox.openglobus.org/examples/geoVideo/SkyBox-LasVegas.mp4",corners:[[-115.18254616355969,36.110055739189924],[-115.16604079376724,36.10771264333345],[-115.16801916927308,36.10038576099672],[-115.18457379699841,36.102812078782755]]},render:o=>r.createElement(b,null,r.createElement(G,null,r.createElement(p,{...o})))};var m,d,g;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  args: {
    name: 'test',
    src: 'https://sandbox.openglobus.org/examples/geoVideo/imergac_20160508_NASA.mp4',
    corners: [[-134.7904382939764, 55.07955352950936], [-54.984314759410594, 54.98843914299802], [-55.041854075913825, 19.820153025849297], [-134.89882012831265, 19.631495126944017]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoVideoProps) => <GlobeContextProvider>
        <Globe>
            <GeoVideo {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(g=(d=t.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var i,u,x;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: 'vegas',
    src: 'https://sandbox.openglobus.org/examples/geoVideo/SkyBox-LasVegas.mp4',
    corners: [[-115.18254616355969, 36.110055739189924], [-115.16604079376724, 36.10771264333345], [-115.16801916927308, 36.10038576099672], [-115.18457379699841, 36.102812078782755]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoVideoProps) => <GlobeContextProvider>
        <Globe>
            <GeoVideo {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(x=(u=s.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const v=["USAWeather","Vegas"];export{t as USAWeather,s as Vegas,v as __namedExportsOrder,S as default};
