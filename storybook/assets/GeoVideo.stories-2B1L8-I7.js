import{u as d,h as g,a as l,G as m}from"./Globe-BPueCMos.js";import{r as c,R as r}from"./iframe-r_DZfu7M.js";import"./preload-helper-PPVm8Dsz.js";const p=({name:o,...n})=>{const{globe:t}=d(),e=c.useRef(null);return c.useEffect(()=>{typeof n.src=="string"&&e.current&&e.current?.setSrc(n.src)},[n.src]),c.useEffect(()=>{if(t)return e.current=new g(o,n),t.planet.addLayer(e.current),()=>{e.current&&t.planet.removeLayer(e.current)}},[t]),null},b={title:"Components/Layer/GeoVideo",component:p},a={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"test",src:"https://sandbox.openglobus.org/examples/geoVideo/imergac_20160508_NASA.mp4",corners:[[-134.7904382939764,55.07955352950936],[-54.984314759410594,54.98843914299802],[-55.041854075913825,19.820153025849297],[-134.89882012831265,19.631495126944017]]},render:o=>r.createElement(l,null,r.createElement(m,null,r.createElement(p,{...o})))},s={args:{name:"vegas",src:"https://sandbox.openglobus.org/examples/geoVideo/SkyBox-LasVegas.mp4",corners:[[-115.18254616355969,36.110055739189924],[-115.16604079376724,36.10771264333345],[-115.16801916927308,36.10038576099672],[-115.18457379699841,36.102812078782755]]},render:o=>r.createElement(l,null,r.createElement(m,null,r.createElement(p,{...o})))};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const G=["USAWeather","Vegas"];export{a as USAWeather,s as Vegas,G as __namedExportsOrder,b as default};
