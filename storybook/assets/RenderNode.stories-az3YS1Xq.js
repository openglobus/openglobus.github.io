import{r as c,R as n}from"./iframe-D3cuFNRr.js";import{u as m,R as u,a as f,b as i,E}from"./Entity-BPm0uofG.js";import{m as l,c as p}from"./Globe-BbxSvTi6.js";import{G as R}from"./Gltf-C9xe9xbI.js";import"./preload-helper-PPVm8Dsz.js";const x=({position:t=[10,10,10],target:a=[0,0,0],active:r=!0})=>{const e=m();return c.useEffect(()=>{if(!e||!r)return;const o=new l(...t),d=new l(...a);e.activeCamera.set(o,d)},[e,t,a,r]),null},g=({visible:t=!0,size:a})=>{const r=m(),e=c.useRef(null);return c.useEffect(()=>{if(r){if(t&&!e.current){const o=new p.Axes(a);r.addNode(o),e.current=o}else!t&&e.current&&(r.removeNode(e.current),e.current=null);return()=>{e.current&&(r.removeNode(e.current),e.current=null)}}},[r,t,a]),null},A={title:"Components/Scene/RenderNode",component:u},s={render:t=>n.createElement(f,{onDraw:()=>console.log("draw frame")},n.createElement(x,{position:[30,30,30],target:[0,0,0]}),n.createElement(g,null),n.createElement(u,null,n.createElement(i,null,n.createElement(E,{name:"maxwell"},n.createElement(R,{src:"/story-assets/glb/maxwell_the_cat.glb"})))))};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const D=["Default"];export{s as Default,D as __namedExportsOrder,A as default};
