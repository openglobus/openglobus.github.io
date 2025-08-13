import{u as I,w as f,a as x,G}from"./Globe-CkJRolcj.js";import{r as l,R as r}from"./index-D4lIrffr.js";const m=({name:a,...n})=>{const{globe:o}=I(),e=l.useRef(null);return l.useEffect(()=>{var c;typeof n.src=="string"&&e.current&&((c=e.current)==null||c.setSrc(n.src))},[n.src]),l.useEffect(()=>{if(o)return e.current=new f(a,n),o.planet.addLayer(e.current),()=>{e.current&&o.planet.removeLayer(e.current)}},[o]),null},E={title:"Components/Layer/GeoImage",component:m},t={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"Kilimanjaro",src:"https://sandbox.openglobus.org/examples/geoImage/SPOT%207%20Satellite%20Image%20Kilimanjaro.jpg",corners:[[37.286664453664194,-3.0473247187887442],[37.38444113753977,-3.0468478037959073],[37.384014813048736,-3.0904441121085506],[37.29373990291454,-3.09380219219323]]},render:a=>r.createElement(x,null,r.createElement(G,null,r.createElement(m,{...a})))},s={args:{name:"Italy",src:"https://sandbox.openglobus.org/examples/geoImageDragging/001m--l32.jpg",corners:[[5.635392096391909,48.12285230763866],[12.40298532820745,48.11462482358326],[12.214647470795295,43.81172338809331],[5.805669171925254,43.97030327540555]]},render:a=>r.createElement(x,null,r.createElement(G,null,r.createElement(m,{...a})))};var g,p,i;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(i=(p=t.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var u,d,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(b=(d=s.parameters)==null?void 0:d.docs)==null?void 0:b.source}}};const P=["Kilimanjaro","Italy"];export{s as Italy,t as Kilimanjaro,P as __namedExportsOrder,E as default};
