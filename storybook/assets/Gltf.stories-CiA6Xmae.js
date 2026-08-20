import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{A as r,O as i,a,t as o,x as s,y as c}from"./Globe-B_Cm2Sl2.js";import{t as l}from"./Globe-hmg5axHn.js";import{n as u,t as d}from"./PlanetCamera-DHy_BIbE.js";import{i as f,n as p,t as m,v as h,y as g}from"./entity-BG8WpvvN.js";var _,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{_=e(n(),1),c(),m(),l(),h(),u(),v=e=>`/story-assets/${e}.glb`,y=1e-4,b={lon:-112.107946,lat:36.06165},x={lon:-112.108026,lat:36.0616},S=2150,C=({children:e})=>{let{globe:t}=r(),[n,i]=(0,_.useState)({rover:S,camera:S}),o=(0,_.useMemo)(()=>new a(x.lon,x.lat,n.camera+5.5),[n.camera]),s=(0,_.useMemo)(()=>new a(b.lon,b.lat,n.rover+1.7),[n.rover]);return(0,_.useEffect)(()=>{if(!t)return;let e=!0;return Promise.all([t.planet.getHeightAboveELL(new a(b.lon,b.lat)),t.planet.getHeightAboveELL(new a(x.lon,x.lat))]).then(([t,n])=>{e&&i({rover:Number.isFinite(t)&&t>500?t:S,camera:Number.isFinite(n)&&n>500?n:S})}),()=>{e=!1}},[t]),_.createElement(_.Fragment,null,_.createElement(d,{lonLat:o,lookLonLat:s,viewAngle:32}),_.createElement(g,{name:`rover`,scaleByDistance:[100,4e6,1]},_.createElement(f,{name:`rover_position`,lonLat:[b.lon,b.lat,n.rover+1],updateRelativeCenter:!0},e)))},w={component:p,title:`Components/Entity/Gltf`,argTypes:{wheelSpeed:{control:{type:`range`,min:0,max:200,step:1},description:`Wheel rotation speed (°/s)`,defaultValue:20},cam0BaseYaw:{control:{type:`range`,min:-180,max:180,step:1},defaultValue:145},cam0JointYaw:{control:{type:`range`,min:-180,max:180,step:1},defaultValue:0},cam0HeadPitch:{control:{type:`range`,min:-90,max:90,step:1},defaultValue:0},scanerBaseYaw:{control:{type:`range`,min:-180,max:180,step:1},defaultValue:90},scanerLink1Pitch:{control:{type:`range`,min:-180,max:180,step:1},defaultValue:90},scanerJointPitch:{control:{type:`range`,min:-180,max:180,step:1},defaultValue:90}}},T={args:{src:v(`maxwell_the_cat`)},render:({src:e})=>_.createElement(i,null,_.createElement(o,null,_.createElement(d,{lonLat:new a(0,0,10),lookLonLat:new a(y,0,0),viewAngle:47}),_.createElement(g,{name:`gltf-model`,scaleByDistance:[100,4e6,1]},_.createElement(f,{name:`maxwell`,lonLat:[y,0]},_.createElement(p,{src:e})))))},E={args:{src:v(`rover_base`),wheelSpeed:20,cam0BaseYaw:145,cam0JointYaw:0,cam0HeadPitch:0,scanerBaseYaw:90,scanerLink1Pitch:90,scanerJointPitch:90},render:e=>{let{src:t,wheelSpeed:n,cam0BaseYaw:r,cam0JointYaw:a,cam0HeadPitch:c,scanerBaseYaw:l,scanerLink1Pitch:u,scanerJointPitch:d}=e,m=_.useRef(null),h=_.useRef(null),g=_.useRef(null),y=_.useRef(null),b=_.useRef(null),x=_.useRef(null),S=_.useRef(n??0),w=_.useRef(0);return(0,_.useEffect)(()=>{S.current=n??0},[n]),(0,_.useEffect)(()=>{let e,t,n=r=>{if(t!==void 0){let e=(r-t)/1e3;w.current=(w.current+S.current*e*s.RADIANS)%(2*Math.PI),m.current?.setRoll(-w.current),h.current?.setRoll(-w.current),g.current?.setRoll(-w.current),y.current?.setRoll(w.current),b.current?.setRoll(w.current),x.current?.setRoll(w.current)}t=r,e=requestAnimationFrame(n)};return e=requestAnimationFrame(n),()=>cancelAnimationFrame(e)},[]),_.createElement(i,null,_.createElement(o,null,_.createElement(C,null,_.createElement(f,{name:`rover_base`,cartesian:[0,0,0],yaw:110,relativePosition:!0},_.createElement(p,{src:t}),_.createElement(f,{name:`cam0_base`,cartesian:[.751,.349,.521],yaw:r,relativePosition:!0},_.createElement(p,{src:v(`cam0_base`)}),_.createElement(f,{name:`cam0_joint`,cartesian:[0,.515,0],yaw:a,relativePosition:!0},_.createElement(p,{src:v(`cam0_joint`)}),_.createElement(f,{name:`cam0_head`,cartesian:[-.035,.16,0],pitch:c,relativePosition:!0},_.createElement(p,{src:v(`cam0_head`)})))),_.createElement(f,{name:`scaner_base`,cartesian:[1.213,.022,-.485],yaw:l,relativePosition:!0},_.createElement(p,{src:v(`scaner_base`)}),_.createElement(f,{name:`scaner_link0`,cartesian:[.17,-.09,-.18],relativePosition:!0},_.createElement(p,{src:v(`scaner_link0`)}),_.createElement(f,{name:`scaner_link1`,cartesian:[0,0,-.838],pitch:u,relativePosition:!0},_.createElement(p,{src:v(`scaner_link1`)}),_.createElement(f,{name:`scaner_joint`,cartesian:[-.035,-.005,-.755],pitch:d,relativePosition:!0},_.createElement(p,{src:v(`scaner_joint`)}),_.createElement(f,{name:`scaner_head`,cartesian:[.042,-.15,-.175],pitch:180,relativePosition:!0},_.createElement(p,{src:v(`scaner_head`)})))))),_.createElement(f,{name:`susp_left_front`,cartesian:[.26,-0,-.78],pitch:13,relativePosition:!0},_.createElement(p,{src:v(`susp_left_front`)}),_.createElement(f,{name:`amort_left_front`,cartesian:[.876,-.3,-.26],pitch:-103,relativePosition:!0},_.createElement(p,{src:v(`amort_left_front`)}),_.createElement(f,{ref:m,name:`wheel_front_left`,cartesian:[0,-.05,-.395],pitch:90,relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)}))),_.createElement(f,{name:`susp_left_back`,cartesian:[-.757,-.222,-.008],pitch:-13,relativePosition:!0},_.createElement(p,{src:v(`susp_left_back`)}),_.createElement(f,{name:`amort_left_back`,cartesian:[-.625,-.01,-.263],relativePosition:!0},_.createElement(p,{src:v(`amort_left_back`)}),_.createElement(f,{ref:h,name:`wheel_back_left`,cartesian:[0,-.392,.065],relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)}))),_.createElement(f,{ref:g,name:`wheel_middle_left`,cartesian:[.45,-.4,-.3],relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)})))),_.createElement(f,{name:`susp_right_front`,cartesian:[.253,.01,.711],pitch:-13,relativePosition:!0},_.createElement(p,{src:v(`susp_right_front`)}),_.createElement(f,{name:`amort_right_front`,cartesian:[.876,-.3,.26],pitch:-77,relativePosition:!0},_.createElement(p,{src:v(`amort_right_front`)}),_.createElement(f,{ref:y,name:`wheel_front_right`,cartesian:[.003,.065,-.391],pitch:-90,yaw:180,relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)}))),_.createElement(f,{name:`susp_right_back`,cartesian:[-.756,-.243,.008],pitch:13,relativePosition:!0},_.createElement(p,{src:v(`susp_right_back`)}),_.createElement(f,{name:`amort_right_back`,cartesian:[-.622,-0,.263],relativePosition:!0},_.createElement(p,{src:v(`amort_right_back`)}),_.createElement(f,{ref:b,name:`wheel_back_right`,cartesian:[0,-.392,-.065],yaw:180,relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)}))),_.createElement(f,{ref:x,name:`wheel_middle_right`,cartesian:[.45,-.4,.319],yaw:180,relativePosition:!0},_.createElement(p,{src:v(`wheel_left`)}))))))))}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    src: asset('maxwell_the_cat')
  },
  render: ({
    src
  }: GltfProps) => <GlobeContextProvider>
            <Globe>
                <PlanetCamera lonLat={new LonLat(0, 0, 10)} lookLonLat={new LonLat(defaultModelLongitude, 0, 0)} viewAngle={47} />
                <Vector name="gltf-model" scaleByDistance={[100, 4000000, 1]}>
                    <Entity name="maxwell" lonLat={[defaultModelLongitude, 0]}>
                        <Gltf src={src} />
                    </Entity>
                </Vector>
            </Globe>
        </GlobeContextProvider>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    src: asset('rover_base'),
    wheelSpeed: 20,
    cam0BaseYaw: 145,
    cam0JointYaw: 0,
    cam0HeadPitch: 0,
    scanerBaseYaw: 90,
    scanerLink1Pitch: 90,
    scanerJointPitch: 90
  },
  render: args => {
    const {
      src,
      wheelSpeed,
      cam0BaseYaw,
      cam0JointYaw,
      cam0HeadPitch,
      scanerBaseYaw,
      scanerLink1Pitch,
      scanerJointPitch
    } = args;
    const wheelFrontLeftRef = React.useRef<GlobusEntity | null>(null);
    const wheelBackLeftRef = React.useRef<GlobusEntity | null>(null);
    const wheelMiddleLeftRef = React.useRef<GlobusEntity | null>(null);
    const wheelFrontRightRef = React.useRef<GlobusEntity | null>(null);
    const wheelBackRightRef = React.useRef<GlobusEntity | null>(null);
    const wheelMiddleRightRef = React.useRef<GlobusEntity | null>(null);
    const wheelSpeedRef = React.useRef(wheelSpeed ?? 0);
    const wheelRollRef = React.useRef(0);
    useEffect(() => {
      wheelSpeedRef.current = wheelSpeed ?? 0;
    }, [wheelSpeed]);
    useEffect(() => {
      let animId: number;
      let previousTime: number | undefined;
      const animate = (time: number) => {
        if (previousTime !== undefined) {
          const elapsedSeconds = (time - previousTime) / 1000;
          wheelRollRef.current = (wheelRollRef.current + wheelSpeedRef.current * elapsedSeconds * math.RADIANS) % (2 * Math.PI);
          wheelFrontLeftRef.current?.setRoll(-wheelRollRef.current);
          wheelBackLeftRef.current?.setRoll(-wheelRollRef.current);
          wheelMiddleLeftRef.current?.setRoll(-wheelRollRef.current);
          wheelFrontRightRef.current?.setRoll(wheelRollRef.current);
          wheelBackRightRef.current?.setRoll(wheelRollRef.current);
          wheelMiddleRightRef.current?.setRoll(wheelRollRef.current);
        }
        previousTime = time;
        animId = requestAnimationFrame(animate);
      };
      animId = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animId);
    }, []);
    return <GlobeContextProvider>
                <Globe>
                    <GrandCanyonRoverPlacement>
                        <Entity name="rover_base" cartesian={[0, 0, 0]} yaw={110} relativePosition>
                            <Gltf src={src} />

                            {/* Camera arm */}
                            <Entity name="cam0_base" cartesian={[0.751, 0.349, 0.521]} yaw={cam0BaseYaw} relativePosition>
                                <Gltf src={asset('cam0_base')} />

                                <Entity name="cam0_joint" cartesian={[0, 0.515, 0]} yaw={cam0JointYaw} relativePosition>
                                    <Gltf src={asset('cam0_joint')} />

                                    <Entity name="cam0_head" cartesian={[-0.035, 0.16, 0]} pitch={cam0HeadPitch} relativePosition>
                                        <Gltf src={asset('cam0_head')} />
                                    </Entity>
                                </Entity>
                            </Entity>

                            {/* Scaner */}
                            <Entity name="scaner_base" cartesian={[1.213, 0.022, -0.485]} yaw={scanerBaseYaw} relativePosition>
                                <Gltf src={asset('scaner_base')} />

                                <Entity name="scaner_link0" cartesian={[0.17, -0.09, -0.18]} relativePosition>
                                    <Gltf src={asset('scaner_link0')} />

                                    <Entity name="scaner_link1" cartesian={[0, 0.0, -0.838]} pitch={scanerLink1Pitch} relativePosition>
                                        <Gltf src={asset('scaner_link1')} />

                                        <Entity name="scaner_joint" cartesian={[-0.035, -0.005, -0.755]} pitch={scanerJointPitch} relativePosition>
                                            <Gltf src={asset('scaner_joint')} />

                                            <Entity name="scaner_head" cartesian={[0.042, -0.15, -0.175]} pitch={180} relativePosition>
                                                <Gltf src={asset('scaner_head')} />
                                            </Entity>
                                        </Entity>
                                    </Entity>
                                </Entity>
                            </Entity>

                            {/* Left suspension */}
                            <Entity name="susp_left_front" cartesian={[0.26, -0.0, -0.78]} pitch={13} relativePosition>
                                <Gltf src={asset('susp_left_front')} />

                                <Entity name="amort_left_front" cartesian={[0.876, -0.3, -0.26]} pitch={-103} relativePosition>
                                    <Gltf src={asset('amort_left_front')} />

                                    <Entity ref={wheelFrontLeftRef} name="wheel_front_left" cartesian={[0, -0.05, -0.395]} pitch={90} relativePosition>
                                        <Gltf src={asset('wheel_left')} />
                                    </Entity>
                                </Entity>

                                <Entity name="susp_left_back" cartesian={[-0.757, -0.222, -0.008]} pitch={-13} relativePosition>
                                    <Gltf src={asset('susp_left_back')} />

                                    <Entity name="amort_left_back" cartesian={[-0.625, -0.01, -0.263]} relativePosition>
                                        <Gltf src={asset('amort_left_back')} />

                                        <Entity ref={wheelBackLeftRef} name="wheel_back_left" cartesian={[0, -0.392, 0.065]} relativePosition>
                                            <Gltf src={asset('wheel_left')} />
                                        </Entity>
                                    </Entity>

                                    <Entity ref={wheelMiddleLeftRef} name="wheel_middle_left" cartesian={[0.45, -0.4, -0.3]} relativePosition>
                                        <Gltf src={asset('wheel_left')} />
                                    </Entity>
                                </Entity>
                            </Entity>

                            {/* Right suspension */}
                            <Entity name="susp_right_front" cartesian={[0.253, 0.01, 0.711]} pitch={-13} relativePosition>
                                <Gltf src={asset('susp_right_front')} />

                                <Entity name="amort_right_front" cartesian={[0.876, -0.3, 0.26]} pitch={-77} relativePosition>
                                    <Gltf src={asset('amort_right_front')} />

                                    <Entity ref={wheelFrontRightRef} name="wheel_front_right" cartesian={[0.003, 0.065, -0.391]} pitch={-90} yaw={180} relativePosition>
                                        <Gltf src={asset('wheel_left')} />
                                    </Entity>
                                </Entity>

                                <Entity name="susp_right_back" cartesian={[-0.756, -0.243, 0.008]} pitch={13} relativePosition>
                                    <Gltf src={asset('susp_right_back')} />

                                    <Entity name="amort_right_back" cartesian={[-0.622, -0.0, 0.263]} relativePosition>
                                        <Gltf src={asset('amort_right_back')} />

                                        <Entity ref={wheelBackRightRef} name="wheel_back_right" cartesian={[0, -0.392, -0.065]} yaw={180} relativePosition>
                                            <Gltf src={asset('wheel_left')} />
                                        </Entity>
                                    </Entity>

                                    <Entity ref={wheelMiddleRightRef} name="wheel_middle_right" cartesian={[0.45, -0.4, 0.319]} yaw={180} relativePosition>
                                        <Gltf src={asset('wheel_left')} />
                                    </Entity>
                                </Entity>
                            </Entity>
                        </Entity>
                    </GrandCanyonRoverPlacement>
                </Globe>
            </GlobeContextProvider>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Rover`]})))()}O();export{T as Default,E as Rover,D as __namedExportsOrder,w as default};