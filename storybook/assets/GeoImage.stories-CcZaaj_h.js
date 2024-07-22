import{l,n as h,u as x,a as I,G as L}from"./Globe-LHHj7Ux8.js";import{r as n,R as r}from"./index-uubelm5h.js";import{B as b}from"./BaseGeoImage-CFIEC5ts.js";let G=class extends b{constructor(e,a={}){super(e,a),this._image=a.image||null,this._src=a.src||null,this._onLoad_=null}get instanceName(){return"GeoImage"}abortLoading(){this._image instanceof HTMLImageElement&&(this._image.src="")}setSrc(e){this._planet&&this._planet._geoImageCreator.remove(this),this._src=e,this._sourceReady=!1,this._sourceCreated=!1,this._image=new Image,this._image.crossOrigin="Anonymous",this._onLoad_=this._onLoad.bind(this),this._image.addEventListener("load",this._onLoad_),this._image.src=e}setImage(e){this._planet&&this._planet._geoImageCreator.remove(this),this._sourceCreated=!1,this._sourceReady=!1,this._image=e,this._image.crossOrigin="Anonymous",this._src=e.src,l(this._image)?this._applyImage(this._image):(this._onLoad_=this._onLoad.bind(this),this._image.addEventListener("load",this._onLoad_))}_createSourceTexture(){!this._sourceCreated&&this._image&&(this._sourceTexture=this._planet.renderer.handler.createTexture_l(this._image),this._sourceCreated=!0)}_onLoad(e){this._applyImage(this._image),this._image instanceof HTMLImageElement&&this._image.removeEventListener("load",this._onLoad_),this._onLoad_=null}_applyImage(e){e&&(this._frameWidth=h(e.width*2,4096),this._frameHeight=h(e.height*3,4096),this._sourceReady=!0,this._planet&&this._planet._geoImageCreator.add(this))}loadMaterial(e){e.isLoading=!0,this._creationProceeding=!0,!this._sourceReady&&this._src?this._image?this._image instanceof HTMLImageElement&&(l(this._image)?this._applyImage(this._image):(this._onLoad_=this._onLoad.bind(this),this._image.addEventListener("load",this._onLoad_))):(this._image=new Image,this._image.crossOrigin="Anonymous",this._onLoad_=this._onLoad.bind(this),this._image.addEventListener("load",this._onLoad_),this._image.src=this._src):this._planet&&this._planet._geoImageCreator.add(this)}abortMaterialLoading(e){this._image&&this._image instanceof HTMLImageElement&&(this._image.src=""),this._creationProceeding=!1,e.isLoading=!1,e.isReady=!1}};const m=({name:t,...e})=>{const{globe:a}=x(),s=n.useRef(null);return n.useEffect(()=>{var g;typeof e.src=="string"&&s.current&&((g=s.current)==null||g.setSrc(e.src))},[e.src]),n.useEffect(()=>{if(a)return s.current=new G(t,e),a.planet.addLayer(s.current),()=>{s.current&&a.planet.removeLayer(s.current)}},[a]),null},P={title:"Components/Layer/GeoImage",component:m},i={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"Kilimanjaro",src:"https://openglobus.org/examples/examples/geoImage/SPOT%207%20Satellite%20Image%20Kilimanjaro.jpg",corners:[[37.286664453664194,-3.0473247187887442],[37.38444113753977,-3.0468478037959073],[37.384014813048736,-3.0904441121085506],[37.29373990291454,-3.09380219219323]]},render:t=>r.createElement(I,null,r.createElement(L,null,r.createElement(m,{...t})))},o={args:{name:"Italy",src:"https://openglobus.org/examples/examples/geoImageDragging/001m--l32.jpg",corners:[[5.635392096391909,48.12285230763866],[12.40298532820745,48.11462482358326],[12.214647470795295,43.81172338809331],[5.805669171925254,43.97030327540555]]},render:t=>r.createElement(I,null,r.createElement(L,null,r.createElement(m,{...t})))};var _,c,d;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  args: {
    name: 'Kilimanjaro',
    src: 'https://openglobus.org/examples/examples/geoImage/SPOT%207%20Satellite%20Image%20Kilimanjaro.jpg',
    corners: [[37.286664453664194, -3.0473247187887442], [37.38444113753977, -3.0468478037959073], [37.384014813048736, -3.0904441121085506], [37.29373990291454, -3.09380219219323]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoImageProps) => <GlobeContextProvider>
        <Globe>
            <GeoImage {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,f;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Italy',
    src: 'https://openglobus.org/examples/examples/geoImageDragging/001m--l32.jpg',
    corners: [[5.635392096391909, 48.12285230763866], [12.40298532820745, 48.11462482358326], [12.214647470795295, 43.81172338809331], [5.805669171925254, 43.97030327540555]]
  },
  render: (args: GeoImageProps) => <GlobeContextProvider>
        <Globe>
            <GeoImage {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const j=["Kilimanjaro","Italy"];export{o as Italy,i as Kilimanjaro,j as __namedExportsOrder,P as default};
