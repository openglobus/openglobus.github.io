import{u as p,w as i,a as c,G as g}from"./Globe-BbxSvTi6.js";import{r as l,R as r}from"./iframe-D3cuFNRr.js";import"./preload-helper-PPVm8Dsz.js";const m=({name:a,...n})=>{const{globe:o}=p(),e=l.useRef(null);return l.useEffect(()=>{typeof n.src=="string"&&e.current&&e.current?.setSrc(n.src)},[n.src]),l.useEffect(()=>{if(o)return e.current=new i(a,n),o.planet.addLayer(e.current),()=>{e.current&&o.planet.removeLayer(e.current)}},[o]),null},x={title:"Components/Layer/GeoImage",component:m},t={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"Kilimanjaro",src:"https://sandbox.openglobus.org/examples/geoImage/SPOT%207%20Satellite%20Image%20Kilimanjaro.jpg",corners:[[37.286664453664194,-3.0473247187887442],[37.38444113753977,-3.0468478037959073],[37.384014813048736,-3.0904441121085506],[37.29373990291454,-3.09380219219323]]},render:a=>r.createElement(c,null,r.createElement(g,null,r.createElement(m,{...a})))},s={args:{name:"Italy",src:"https://sandbox.openglobus.org/examples/geoImageDragging/001m--l32.jpg",corners:[[5.635392096391909,48.12285230763866],[12.40298532820745,48.11462482358326],[12.214647470795295,43.81172338809331],[5.805669171925254,43.97030327540555]]},render:a=>r.createElement(c,null,r.createElement(g,null,r.createElement(m,{...a})))};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  args: {
    name: 'Kilimanjaro',
    src: 'https://sandbox.openglobus.org/examples/geoImage/SPOT%207%20Satellite%20Image%20Kilimanjaro.jpg',
    corners: [[37.286664453664194, -3.0473247187887442], [37.38444113753977, -3.0468478037959073], [37.384014813048736, -3.0904441121085506], [37.29373990291454, -3.09380219219323]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoImageProps) => <GlobeContextProvider>
        <Globe>
            <GeoImage {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Italy',
    src: 'https://sandbox.openglobus.org/examples/geoImageDragging/001m--l32.jpg',
    corners: [[5.635392096391909, 48.12285230763866], [12.40298532820745, 48.11462482358326], [12.214647470795295, 43.81172338809331], [5.805669171925254, 43.97030327540555]]
  },
  render: (args: GeoImageProps) => <GlobeContextProvider>
        <Globe>
            <GeoImage {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...s.parameters?.docs?.source}}};const G=["Kilimanjaro","Italy"];export{s as Italy,t as Kilimanjaro,G as __namedExportsOrder,x as default};
