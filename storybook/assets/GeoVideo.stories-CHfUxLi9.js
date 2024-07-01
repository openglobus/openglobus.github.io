import{u as f,a as g,G as v}from"./Globe-CBobrSqd.js";import{r as n,R as o}from"./index-uubelm5h.js";import{B as x}from"./BaseGeoImage-DPkd_oZg.js";let b=class extends x{constructor(e,t={}){super(e,t),this._animate=!0,this._video=t.videoElement||null,this._src=t.src||null}get instanceName(){return"GeoVideo"}setSrc(e){this._planet&&this._planet._geoImageCreator.remove(this),this._src=e,this._sourceReady=!1}setVideoElement(e){this._planet&&this._planet._geoImageCreator.remove(this),this._video=e,this._src=e.src,this._sourceReady=!1}setVisibility(e){e!=this._visibility&&(super.setVisibility(e),this._planet&&(e?(this._sourceReady&&this._planet._geoImageCreator.add(this),this._video&&this._video.play()):(this._sourceReady&&this._planet._geoImageCreator.remove(this),this._video&&this._video.pause())))}_createSourceTexture(){let e=this._planet.renderer.handler.gl;this._sourceCreated?(e.bindTexture(e.TEXTURE_2D,this._sourceTexture),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,this._video)):(this._sourceTexture=this._planet.renderer.handler.createTexture_n_webgl1(this._video),this._sourceCreated=!0)}_onCanPlay(e){this._frameWidth=e.videoWidth,this._frameHeight=e.videoHeight,e.width=e.videoWidth,e.height=e.videoHeight,e.play(),this._sourceReady=!0,this._planet._geoImageCreator.add(this)}_onError(e){let t="unknown error";switch(e.error.code){case 1:t="video loading aborted";break;case 2:t="network loading error";break;case 3:t="video decoding failed / corrupted data or unsupported codec";break;case 4:t="video not supported";break}console.warn(`Error: ${t} error-code=${e.error.code})`)}loadMaterial(e){if(e.isLoading=!0,this._creationProceeding=!0,!this._sourceReady&&this._src){if(this._video){if(this._video.readyState===this._video.HAVE_ENOUGH_DATA)this._onCanPlay(this._video);else if(this._video.src){let t=this;this._video.addEventListener("canplay",function(r){t._onCanPlay(this)})}}else{this._video=document.createElement("video"),this._video.crossOrigin="Anonymous";let t=this;this._video.addEventListener("canplay",function(){t._onCanPlay(this)}),this._video.addEventListener("error",function(){t._onError(this)})}this._video.autoplay=!0,this._video.loop=!0,this._video.src=this._src,this._video.muted=!0,this._video.setAttribute("playsinline","true"),this._video.setAttribute("webkit-playsinline","true")}else this._planet._geoImageCreator.add(this)}abortMaterialLoading(e){this._video&&(this._video.src=""),this._creationProceeding=!1,e.isLoading=!1,e.isReady=!1}};const d=({name:s,...e})=>{const{globe:t}=f(),r=n.useRef(null);return n.useEffect(()=>{var l;typeof e.src=="string"&&r.current&&((l=r.current)==null||l.setSrc(e.src))},[e.src]),n.useEffect(()=>{if(t)return r.current=new b(s,e),t.planet.addLayer(r.current),()=>{r.current&&t.planet.removeLayer(r.current)}},[t]),null},C={title:"Components/Layer/GeoVideo",component:d},a={parameters:{actions:{depth:1,maxDepth:1}},args:{name:"test",src:"https://openglobus.org/examples/examples/geoVideo/imergac_20160508_NASA.mp4",corners:[[-134.7904382939764,55.07955352950936],[-54.984314759410594,54.98843914299802],[-55.041854075913825,19.820153025849297],[-134.89882012831265,19.631495126944017]]},render:s=>o.createElement(g,null,o.createElement(v,null,o.createElement(d,{...s})))},i={args:{name:"vegas",src:"https://openglobus.org/examples/examples/geoVideo/SkyBox-LasVegas.mp4",corners:[[-115.18254616355969,36.110055739189924],[-115.16604079376724,36.10771264333345],[-115.16801916927308,36.10038576099672],[-115.18457379699841,36.102812078782755]]},render:s=>o.createElement(g,null,o.createElement(v,null,o.createElement(d,{...s})))};var c,h,_;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  parameters: {
    actions: {
      depth: 1,
      maxDepth: 1
    }
  },
  args: {
    name: 'test',
    src: 'https://openglobus.org/examples/examples/geoVideo/imergac_20160508_NASA.mp4',
    corners: [[-134.7904382939764, 55.07955352950936], [-54.984314759410594, 54.98843914299802], [-55.041854075913825, 19.820153025849297], [-134.89882012831265, 19.631495126944017]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoVideoProps) => <GlobeContextProvider>
        <Globe>
            <GeoVideo {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(_=(h=a.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var u,p,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    name: 'vegas',
    src: 'https://openglobus.org/examples/examples/geoVideo/SkyBox-LasVegas.mp4',
    corners: [[-115.18254616355969, 36.110055739189924], [-115.16604079376724, 36.10771264333345], [-115.16801916927308, 36.10038576099672], [-115.18457379699841, 36.102812078782755]]
    // onDraw: action('onDraw', {depth: 1, maxDepth: 1}),
  },
  render: (args: GeoVideoProps) => <GlobeContextProvider>
        <Globe>
            <GeoVideo {...args} />
        </Globe>
    </GlobeContextProvider>
}`,...(m=(p=i.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const R=["USAWeather","Vegas"];export{a as USAWeather,i as Vegas,R as __namedExportsOrder,C as default};
