import{a as G,G as b,s as h}from"./Globe-BnqXSAgn.js";import{R as t}from"./index-B-SYruCi.js";import{X as l}from"./Entity-B2e2ke--.js";const Z={title:"Components/Layer/XYZ",component:l};function x(e,a,f){for(var i="",o=f;o>0;o--){var s=0,m=1<<o-1;e&m&&s++,a&m&&(s+=2),i+=s.toString()}return i}const r={args:{name:"osm",opacity:1,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},render:e=>t.createElement(G,null,t.createElement(b,null,t.createElement(l,{...e})))},n={args:{name:"sat",opacity:1,url:"https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",subdomains:["t0","t1","t2","t3"],urlRewrite:function(e,a){return console.log(e),h(a,{s:["t0","t1","t2","t3"][Math.round(Math.random()*3)],quad:x(e.tileX,e.tileY,e.tileZoom)})}},render:e=>t.createElement(G,null,t.createElement(b,null,t.createElement(l,{...e})))};var p,u,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'osm',
    opacity: 1,
    url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
  },
  render: (args: XYZProps) => <GlobeContextProvider>
        <Globe>
            <XYZ {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(c=(u=r.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var d,g,v;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'sat',
    opacity: 1,
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
}`,...(v=(g=n.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["OpenStreetMap","Satellites"];export{r as OpenStreetMap,n as Satellites,E as __namedExportsOrder,Z as default};
