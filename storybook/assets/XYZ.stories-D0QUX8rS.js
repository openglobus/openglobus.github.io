import{u as h,X as y,a as v,G,s as E}from"./Globe-CyzGI6Fn.js";import{r as i,R as o}from"./index-uubelm5h.js";const c=({name:e,...r})=>{const{globe:n}=h(),t=i.useRef(null);return i.useEffect(()=>{var a;typeof r.url=="string"&&t.current&&((a=t.current)==null||a.setUrl(r.url))},[r.url]),i.useEffect(()=>{if(n)return t.current=new y(e,{...r}),n.planet.addLayer(t.current),()=>{t.current&&n.planet.removeLayer(t.current)}},[n]),null},C={title:"Components/Layer/XYZ",component:c};function X(e,r,n){for(var t="",a=n;a>0;a--){var u=0,m=1<<a-1;e&m&&u++,r&m&&(u+=2),t+=u.toString()}return t}const s={args:{name:"osm",url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},render:e=>o.createElement(v,null,o.createElement(G,null,o.createElement(c,{...e})))},l={args:{name:"sat",url:"https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",subdomains:["t0","t1","t2","t3"],urlRewrite:function(e,r){return console.log(e),E(r,{s:["t0","t1","t2","t3"][Math.round(Math.random()*3)],quad:X(e.tileX,e.tileY,e.tileZoom)})}},render:e=>o.createElement(v,null,o.createElement(G,null,o.createElement(c,{...e})))};var p,d,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'osm',
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  render: (args: XYZProps) => <GlobeContextProvider>
        <Globe>
            <XYZ {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(g=(d=s.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var f,x,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'sat',
    url: 'https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146',
    subdomains: ['t0', 't1', 't2', 't3'],
    urlRewrite: function (s: any, u: string) {
      console.log(s);
      return utils.stringTemplate(u, {
        s: ['t0', 't1', 't2', 't3'][Math.round(Math.random() * 3)],
        quad: toQuadKey(s.tileX, s.tileY, s.tileZoom)
      });
    }
  },
  render: (args: XYZProps) => <GlobeContextProvider>
            <Globe>
                <XYZ {...args} />
            </Globe>
        </GlobeContextProvider>
}`,...(b=(x=l.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};const P=["OpenStreetMap","Satellites"];export{s as OpenStreetMap,l as Satellites,P as __namedExportsOrder,C as default};
