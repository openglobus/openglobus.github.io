import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{O as r,_ as i,t as a,y as o}from"./Globe-B_Cm2Sl2.js";import{t as s}from"./Globe-hmg5axHn.js";import{C as c,w as l}from"./entity-BG8WpvvN.js";function u(e,t,n){for(var r=``,i=n;i>0;i--){var a=0,o=1<<i-1;(e&o)!==0&&a++,(t&o)!==0&&(a+=2),r+=a.toString()}return r}var d,f,p,m,h;function g(){return(g=t((()=>{s(),d=e(n(),1),l(),o(),f={title:`Components/Layer/XYZ`,component:c},p={args:{name:`osm`,opacity:1,url:`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`},render:e=>d.createElement(r,null,d.createElement(a,null,d.createElement(c,e)))},m={args:{name:`sat`,opacity:1,url:`https://ecn.{s}.tiles.virtualearth.net/tiles/a{quad}.jpeg?n=z&g=7146`,subdomains:[`t0`,`t1`,`t2`,`t3`],urlRewrite:function(e,t){return console.log(e),i.stringTemplate(t,{s:[`t0`,`t1`,`t2`,`t3`][Math.round(Math.random()*3)],quad:u(e.tileX,e.tileY,e.tileZoom)})}},render:e=>d.createElement(r,null,d.createElement(a,null,d.createElement(c,e)))},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h=[`OpenStreetMap`,`Satellites`]})))()}g();export{p as OpenStreetMap,m as Satellites,h as __namedExportsOrder,f as default};