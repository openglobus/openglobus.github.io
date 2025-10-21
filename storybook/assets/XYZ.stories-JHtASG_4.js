import{a as p,G as u,k as d}from"./Globe-EqVKypFw.js";import{R as t}from"./iframe-DfnBMM8x.js";import{X as l}from"./Entity-CWOe3zNE.js";import"./preload-helper-PPVm8Dsz.js";const h={title:"Components/Layer/XYZ",component:l};function g(e,a,c){for(var i="",o=c;o>0;o--){var s=0,m=1<<o-1;(e&m)!==0&&s++,(a&m)!==0&&(s+=2),i+=s.toString()}return i}const r={args:{name:"osm",opacity:1,url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"},render:e=>t.createElement(p,null,t.createElement(u,null,t.createElement(l,{...e})))},n={args:{name:"sat",opacity:1,url:"https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146",subdomains:["t0","t1","t2","t3"],urlRewrite:function(e,a){return console.log(e),d.stringTemplate(a,{s:["t0","t1","t2","t3"][Math.round(Math.random()*3)],quad:g(e.tileX,e.tileY,e.tileZoom)})}},render:e=>t.createElement(p,null,t.createElement(u,null,t.createElement(l,{...e})))};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};const x=["OpenStreetMap","Satellites"];export{r as OpenStreetMap,n as Satellites,x as __namedExportsOrder,h as default};
