import{r as l,R as n}from"./iframe-CxB7CSSt.js";import{u as m,R as u,a as f,b as i,E}from"./Entity-B3_gu4pK.js";import{b as c,g as p}from"./Globe-BpU5Tz87.js";import{G as R}from"./Gltf-9Mdg-VTJ.js";import"./preload-helper-PPVm8Dsz.js";const g=({position:t=[10,10,10],target:a=[0,0,0],active:r=!0})=>{const e=m();return l.useEffect(()=>{if(!e||!r)return;const o=new c(...t),d=new c(...a);e.activeCamera.set(o,d)},[e,t,a,r]),null},x=({visible:t=!0,size:a})=>{const r=m(),e=l.useRef(null);return l.useEffect(()=>{if(r){if(t&&!e.current){const o=new p.Axes(a);r.addNode(o),e.current=o}else!t&&e.current&&(r.removeNode(e.current),e.current=null);return()=>{e.current&&(r.removeNode(e.current),e.current=null)}}},[r,t,a]),null},A={title:"Components/Scene/RenderNode",component:u},s={render:t=>n.createElement(f,{onDraw:()=>console.log("draw frame")},n.createElement(g,{position:[30,30,30],target:[0,0,0]}),n.createElement(x,null),n.createElement(u,null,n.createElement(i,null,n.createElement(E,{name:"maxwell"},n.createElement(R,{src:"/story-assets/glb/maxwell_the_cat.glb"})))))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <Renderer onDraw={() => console.log('draw frame')}>
        <ActiveCamera position={[30, 30, 30]} target={[0, 0, 0]} />
        <Axes />
        <RenderNode>
            <EntityCollection>
                <Entity name="maxwell">
                    <Gltf src='/story-assets/glb/maxwell_the_cat.glb' />
                </Entity>
            </EntityCollection>
        </RenderNode>
    </Renderer>
}`,...s.parameters?.docs?.source}}};const b=["Default"];export{s as Default,b as __namedExportsOrder,A as default};
