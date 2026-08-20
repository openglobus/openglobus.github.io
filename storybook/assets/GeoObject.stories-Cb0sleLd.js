import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{A as r,C as i,D as a,O as o,a as s,t as c,u as l,y as u}from"./Globe-B_Cm2Sl2.js";import{t as d}from"./Globe-hmg5axHn.js";import{i as f,t as p,v as m,y as h}from"./entity-BG8WpvvN.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=t((()=>{g=e(n(),1),u(),p(),d(),m(),_=i.createCube(.4,2,.4).translate(new l(0,1,0)).setColor(`#ff5252`).setMaterialProperties({ambientOcclusion:1,roughness:.15,metallic:.85}),v=i.createFrustum(3,2,1).setColor(`#1cdd23`).setMaterialProperties({ambientOcclusion:1,roughness:.2,metallic:.8}),y=i.createFrustum(3,2,1).setColor(`#ef00ff`).setMaterialProperties({ambientOcclusion:1,roughness:.1,metallic:.9}),b=new s(-105.6173319876,39.615583413,4057.9466),x=()=>{let{globe:e}=r();return(0,g.useEffect)(()=>{if(!e)return;let t=[new a.EntityEditor,new a.OrthoSwitcher,new a.LayerSwitcher];return e.planet.addControls(t),e.planet.camera.setLonLat(new s(-105.61717175714179,39.61567256262465,4064.033358156039),b),e.planet.camera.viewDistance(e.planet.ellipsoid.lonLatToCartesian(b),12e3),()=>t.forEach(e=>e.remove())},[e]),null},S={component:f,title:`Components/Entity/GeoObject`},C={render:()=>g.createElement(o,null,g.createElement(c,null,g.createElement(x,null),g.createElement(h,{name:`Object hierarchy`,scaleByDistance:[50,5e4,1]},g.createElement(f,{name:`Base object`,lonLat:b,independentPicking:!0,geoObject:{tag:`baseObject`,object3d:_}},g.createElement(f,{name:`View object`,cartesian:[0,1,0],relativePosition:!0,independentPicking:!0,geoObject:{tag:`viewObject`,object3d:v}},g.createElement(f,{name:`Nested view object`,cartesian:[0,3,-1],relativePosition:!0,independentPicking:!0,geoObject:{tag:`nestedViewObject`,object3d:y}}))))))},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <GlobeContextProvider>
            <Globe>
                <ExampleSetup />
                <Vector name="Object hierarchy" scaleByDistance={[50, 50000, 1]}>
                    <Entity name="Base object" lonLat={position} independentPicking geoObject={{
          tag: 'baseObject',
          object3d: baseObject
        }}>
                        <Entity name="View object" cartesian={[0, 1, 0]} relativePosition independentPicking geoObject={{
            tag: 'viewObject',
            object3d: viewObject
          }}>
                            <Entity name="Nested view object" cartesian={[0, 3, -1]} relativePosition independentPicking geoObject={{
              tag: 'nestedViewObject',
              object3d: nestedViewObject
            }} />
                        </Entity>
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>
}`,...C.parameters?.docs?.source}}},w=[`Default`]})))()}T();export{C as Default,w as __namedExportsOrder,S as default};