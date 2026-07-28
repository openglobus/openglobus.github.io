---
title: Camera
kind: class
longname: Camera
description: //@param {Renderer} [renderer] - Renderer uses the camera instance.
---

# Camera

<SourceLink href="/source/camera/camera-ts/#L123" label="Camera.ts:123" />

//@param {Renderer} \[renderer] - Renderer uses the camera instance.

**Fires**

- `event:viewchange`
- `event:moveend`

---

## Constructor

<Signature code="new Camera(options?: Object): Camera" />

**Parameters**

- `options` (Object, optional) — Camera options:
  - `options.name` (Object, optional) — Camera name.
  - `options.viewAngle` (number, optional, default: 47) — Camera angle of view. Default is 47.0
  - `options.near` (number, optional, default: 1) — Camera near plane distance. Default is 1.0
  - `options.far` (number, optional, default: "og.math.MAX") — Camera far plane distance. Default is og.math.MAX
  - `options.eye` ([Vec3](/vec3), optional, default: "\[0,0,0]") — Camera eye position. Default (0,0,0)
  - `options.look` ([Vec3](/vec3), optional, default: "\[0,0,0]") — Camera look position. Default (0,0,0)
  - `options.up` ([Vec3](/vec3), optional, default: "\[0,1,0]") — Camera eye position. Default (0,1,0)

---

## Instance Methods

<MemberHeading id="setdepthzerotoone" depth="3" name="setDepthZeroToOne" sig="setDepthZeroToOne(enabled: boolean)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L390" sourceLabel="Camera.ts:390" />

Enables or disables ZERO\_TO\_ONE depth range mode.

**Parameters**

- `enabled` (boolean) — Depth range mode flag.

<MemberHeading id="flycartesian" depth="3" name="flyCartesian" sig="flyCartesian(cartesian?: Vec3, params?: IFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L453" sourceLabel="Camera.ts:453" />

Flies to the cartesian coordinates.

**Parameters**

- `cartesian` ([Vec3](/vec3), optional) — Finish cartesian coordinates.
- `params` (IFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="stopflying" depth="3" name="stopFlying" sig="stopFlying()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L515" sourceLabel="Camera.ts:515" />

Breaks the flight.

<MemberHeading id="checkfly" depth="3" name="checkFly" sig="checkFly()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L529" sourceLabel="Camera.ts:529" />

Prepare camera to the frame. Used in render node frame function.

<MemberHeading id="isflying" depth="3" name="isFlying" sig="isFlying(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L562" sourceLabel="Camera.ts:562" />

Returns camera is flying.

**Returns**

- `boolean`

<MemberHeading id="checkviewchanges" depth="3" name="checkViewChanges" sig="checkViewChanges()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L570" sourceLabel="Camera.ts:570" />

Checks camera movement and projection changes.

<MemberHeading id="checkmoveend" depth="3" name="checkMoveEnd" sig="checkMoveEnd(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L580" sourceLabel="Camera.ts:580" />

Checks whether the camera stopped moving and dispatches `moveend`.

**Returns**

- `boolean` — `true` when the camera is moving after the check.

<MemberHeading id="checkviewchange" depth="3" name="_checkViewChange" sig="_checkViewChange()" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L608" sourceLabel="Camera.ts:608" />

Checks whether the camera view or projection changed and dispatches `viewchange`.

<MemberHeading id="bindfrustumspickingcolors" depth="3" name="bindFrustumsPickingColors" sig="bindFrustumsPickingColors(renderer: Renderer)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L636" sourceLabel="Camera.ts:636" />

Binds picking colors for all frustums.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Renderer instance.

<MemberHeading id="init" depth="3" name="_init" sig="_init(options?: Object)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L654" sourceLabel="Camera.ts:654" />

Camera initialization.

**Parameters**

- `options` (Object, optional) — Camera options:
  - `options.viewAngle` (number, optional) — Camera angle of view.
  - `options.near` (number, optional) — Camera near plane distance. Default is 1.0
  - `options.far` (number, optional) — Camera far plane distance. Default is math.MAX
  - `options.eye` ([Vec3](/vec3), optional) — Camera eye position. Default (0,0,0)
  - `options.look` ([Vec3](/vec3), optional) — Camera look position. Default (0,0,0)
  - `options.up` ([Vec3](/vec3), optional) — Camera eye position. Default (0,1,0)

<MemberHeading id="getup" depth="3" name="getUp" sig="getUp(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L669" sourceLabel="Camera.ts:669" />

Returns up direction vector.

**Returns**

- [`Vec3`](/vec3) — Up direction.

<MemberHeading id="getdown" depth="3" name="getDown" sig="getDown(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L678" sourceLabel="Camera.ts:678" />

Returns down direction vector.

**Returns**

- [`Vec3`](/vec3) — Down direction.

<MemberHeading id="getright" depth="3" name="getRight" sig="getRight(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L687" sourceLabel="Camera.ts:687" />

Returns right direction vector.

**Returns**

- [`Vec3`](/vec3) — Right direction.

<MemberHeading id="getleft" depth="3" name="getLeft" sig="getLeft(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L696" sourceLabel="Camera.ts:696" />

Returns left direction vector.

**Returns**

- [`Vec3`](/vec3) — Left direction.

<MemberHeading id="getforward" depth="3" name="getForward" sig="getForward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L705" sourceLabel="Camera.ts:705" />

Returns forward direction vector.

**Returns**

- [`Vec3`](/vec3) — Forward direction.

<MemberHeading id="getbackward" depth="3" name="getBackward" sig="getBackward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L714" sourceLabel="Camera.ts:714" />

Returns backward direction vector.

**Returns**

- [`Vec3`](/vec3) — Backward direction.

<MemberHeading id="updatecameraslope" depth="3" name="updateCameraSlope" sig="updateCameraSlope()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L722" sourceLabel="Camera.ts:722" />

Updates camera slope against the horizontal XZ plane.

<MemberHeading id="update" depth="3" name="update" sig="update()" />

<MemberMeta badges="abstract" sourceHref="/source/camera/camera-ts/#L731" sourceLabel="Camera.ts:731" />

Updates camera view space

<MemberHeading id="refresh" depth="3" name="refresh" sig="refresh()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L774" sourceLabel="Camera.ts:774" />

Refresh camera matrices

<MemberHeading id="setviewportsize" depth="3" name="setViewportSize" sig="setViewportSize(width: number, height: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L803" sourceLabel="Camera.ts:803" />

Sets viewport size and updates projection.

**Parameters**

- `width` (number) — Viewport width in pixels.
- `height` (number) — Viewport height in pixels.

<MemberHeading id="getaspectratio" depth="3" name="getAspectRatio" sig="getAspectRatio(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L814" sourceLabel="Camera.ts:814" />

Returns aspect ratio.

**Returns**

- `number` — Aspect ratio.

<MemberHeading id="setproj" depth="3" name="_setProj" sig="_setProj(viewAngle: number, aspect: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L824" sourceLabel="Camera.ts:824" />

Sets camera projection.

**Parameters**

- `viewAngle` (number) — Camera view angle.
- `aspect` (number) — Screen aspect ratio.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number, frustumIndex?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L850" sourceLabel="Camera.ts:850" />

Updates near/far planes for one frustum.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional) — Far clipping plane distance.
- `frustumIndex` (number, optional, default: 0) — Frustum index.

<MemberHeading id="setfrustums" depth="3" name="setFrustums" sig="setFrustums(frustums: Array.<NumberArray2>)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L859" sourceLabel="Camera.ts:859" />

Replaces camera frustum ranges.

**Parameters**

- `frustums` (Array.\<NumberArray2>) — Array of `[near, far]` ranges.

<MemberHeading id="setviewangle" depth="3" name="setViewAngle" sig="setViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L922" sourceLabel="Camera.ts:922" />

Sets camera view angle in degrees

**Parameters**

- `angle` (number) — View angle

<MemberHeading id="sethorizontalviewangle" depth="3" name="setHorizontalViewAngle" sig="setHorizontalViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L932" sourceLabel="Camera.ts:932" />

Sets camera horizontal view angle in degrees.

**Parameters**

- `angle` (number) — Horizontal view angle.

<MemberHeading id="getviewangle" depth="3" name="getViewAngle" sig="getViewAngle(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L942" sourceLabel="Camera.ts:942" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — View angle in degrees.

<MemberHeading id="set" depth="3" name="set" sig="set(eye: Vec3, look: Vec3, up: Vec3): Camera" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L981" sourceLabel="Camera.ts:981" />

Sets camera to eye position

**Parameters**

- `eye` ([Vec3](/vec3)) — Camera position
- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3)) — Camera up vector

**Returns**

- [`Camera`](/camera)

<MemberHeading id="look" depth="3" name="look" sig="look(look: Vec3, up?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1004" sourceLabel="Camera.ts:1004" />

Sets camera look point

**Parameters**

- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3), optional) — Camera up vector otherwise camera current up vector(this.\_u)

<MemberHeading id="slide" depth="3" name="slide" sig="slide(du: number, dv: number, dn: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1020" sourceLabel="Camera.ts:1020" />

Slides camera to vector d - (du, dv, dn)

**Parameters**

- `du` (number) — delta X
- `dv` (number) — delta Y
- `dn` (number) — delta Z

<MemberHeading id="setroll" depth="3" name="setRoll" sig="setRoll(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1031" sourceLabel="Camera.ts:1031" />

Roll the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta roll angle in radians

<MemberHeading id="setpitch" depth="3" name="setPitch" sig="setPitch(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1044" sourceLabel="Camera.ts:1044" />

Pitch the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta pitch angle in radians

<MemberHeading id="setyaw" depth="3" name="setYaw" sig="setYaw(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1057" sourceLabel="Camera.ts:1057" />

Yaw the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta yaw angle in radians

<MemberHeading id="setpitchyawroll" depth="3" name="setPitchYawRoll" sig="setPitchYawRoll(pitch: number, yaw: number, roll: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1072" sourceLabel="Camera.ts:1072" />

Sets camera orientation from Euler angles.

**Parameters**

- `pitch` (number) — Pitch angle in radians.
- `yaw` (number) — Yaw angle in radians.
- `roll` (number) — Roll angle in radians.

<MemberHeading id="getpitch" depth="3" name="getPitch" sig="getPitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1083" sourceLabel="Camera.ts:1083" />

Returns pitch angle.

**Returns**

- `number` — Pitch angle in radians.

<MemberHeading id="getyaw" depth="3" name="getYaw" sig="getYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1092" sourceLabel="Camera.ts:1092" />

Returns yaw angle.

**Returns**

- `number` — Yaw angle in radians.

<MemberHeading id="getroll" depth="3" name="getRoll" sig="getRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1101" sourceLabel="Camera.ts:1101" />

Returns roll angle.

**Returns**

- `number` — Roll angle in radians.

<MemberHeading id="getabsolutepitch" depth="3" name="getAbsolutePitch" sig="getAbsolutePitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1110" sourceLabel="Camera.ts:1110" />

Returns absolute pitch angle.

**Returns**

- `number` — Absolute pitch angle in radians.

<MemberHeading id="getabsoluteyaw" depth="3" name="getAbsoluteYaw" sig="getAbsoluteYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1119" sourceLabel="Camera.ts:1119" />

Returns absolute yaw angle.

**Returns**

- `number` — Absolute yaw angle in radians.

<MemberHeading id="getabsoluteroll" depth="3" name="getAbsoluteRoll" sig="getAbsoluteRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1128" sourceLabel="Camera.ts:1128" />

Returns absolute roll angle.

**Returns**

- `number` — Absolute roll angle in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1137" sourceLabel="Camera.ts:1137" />

Returns camera rotation quaternion.

**Returns**

- [`Quat`](/quat) — Camera rotation quaternion.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rot: Quat, up?: Vec3, right?: Vec3, back?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1149" sourceLabel="Camera.ts:1149" />

Sets camera orientation from a quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.
- `up` ([Vec3](/vec3), optional) — Base up vector.
- `right` ([Vec3](/vec3), optional) — Base right vector.
- `back` ([Vec3](/vec3), optional) — Base backward vector.

<MemberHeading id="rotate" depth="3" name="rotate" sig="rotate(rot: Quat)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1161" sourceLabel="Camera.ts:1161" />

Rotates current camera basis by quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.

<MemberHeading id="unproject2v" depth="3" name="unproject2v" sig="unproject2v(pos: Vec2, dist?: number, outPos?: Vec3): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1176" sourceLabel="Camera.ts:1176" />

Returns normal vector direction to the unprojected screen point from camera eye

**Parameters**

- `pos` ([Vec2](/vec2)) — Screen coordinates in pixels.
- `dist` (number, optional) — Optional projection distance for orthographic mode.
- `outPos` ([Vec3](/vec3), optional) — Optional output world position for orthographic mode.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading
  id="unproject"
  depth="3"
  name="unproject"
  sig="unproject(
	x: number,
	y: number,
	dist?: number,
	outPos?: Vec3,
): Vec3"
/>

<MemberMeta sourceHref="/source/camera/camera-ts/#L1189" sourceLabel="Camera.ts:1189" />

Returns normal vector direction to the unprojected screen point from camera eye

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.
- `dist` (number, optional) — Optional projection distance for orthographic mode.
- `outPos` ([Vec3](/vec3), optional) — Optional output world position for orthographic mode.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getray" depth="3" name="getRay" sig="getRay(x: number, y: number): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1244" sourceLabel="Camera.ts:1244" />

Returns a world-space ray corresponding to the given screen point. For perspective camera the ray shares camera eye as origin. For orthographic camera the origin is offset across the view plane, and the direction equals the camera forward vector.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="getray2v" depth="3" name="getRay2v" sig="getRay2v(pos: Vec2): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1265" sourceLabel="Camera.ts:1265" />

Returns a world-space ray corresponding to the given screen point.

**Parameters**

- `pos` ([Vec2](/vec2)) — Screen coordinates in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="project3v" depth="3" name="project3v" sig="project3v(v: Vec3): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1275" sourceLabel="Camera.ts:1275" />

Gets projected 3d point to the 2d screen coordinates

**Parameters**

- `v` ([Vec3](/vec3)) — Cartesian 3d coordinates

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="project" depth="3" name="project" sig="project(x: number, y: number, z: number): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1287" sourceLabel="Camera.ts:1287" />

Gets projected 3d point to the 2d screen coordinates

**Parameters**

- `x` (number) — X coordinate
- `y` (number) — Y coordinate
- `z` (number) — Z coordinate

**Returns**

- [`Vec2`](/vec2)

<MemberHeading
  id="rotatearound"
  depth="3"
  name="rotateAround"
  sig="rotateAround(
	angle: number,
	isArc?: boolean,
	center?: Vec3,
	up?: Vec3,
)"
/>

<MemberMeta sourceHref="/source/camera/camera-ts/#L1301" sourceLabel="Camera.ts:1301" />

Rotates camera around center point

**Parameters**

- `angle` (number) — Rotation angle in radians
- `isArc` (boolean, optional, default: false) — If true camera up vector gets from current up vector every frame, otherwise up is always input parameter.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around
- `up` ([Vec3](/vec3), optional) — Camera up vector

<MemberHeading
  id="rotatehorizontal"
  depth="3"
  name="rotateHorizontal"
  sig="rotateHorizontal(
	angle: number,
	isArc?: boolean,
	center?: Vec3,
	up?: Vec3,
)"
/>

<MemberMeta sourceHref="/source/camera/camera-ts/#L1321" sourceLabel="Camera.ts:1321" />

Rotates camera around the center point by horizontal.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `isArc` (boolean, optional) — If true camera up vector gets from current up vector every frame, otherwise up is always input parameter.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.
- `up` ([Vec3](/vec3), optional) — Camera up vector.

<MemberHeading id="rotatevertical" depth="3" name="rotateVertical" sig="rotateVertical(angle: number, center?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1330" sourceLabel="Camera.ts:1330" />

Rotates camera around the center point by vertical.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.

<MemberHeading id="projectedsize" depth="3" name="projectedSize" sig="projectedSize(p: Vec3, r: Vec3): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1342" sourceLabel="Camera.ts:1342" />

Gets 3d size factor. Uses in LOD distance calculation. It is a very important function used in Node.ts

**Parameters**

- `p` ([Vec3](/vec3)) — Point in 3d.
- `r` ([Vec3](/vec3)) — size.

**Returns**

- `number`

<MemberHeading id="getviewmatrix" depth="3" name="getViewMatrix" sig="getViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1358" sourceLabel="Camera.ts:1358" />

Returns model matrix.

**Returns**

- `NumberArray16`

<MemberHeading id="getnormalmatrix" depth="3" name="getNormalMatrix" sig="getNormalMatrix(): NumberArray9" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1367" sourceLabel="Camera.ts:1367" />

Returns camera normal matrix.

**Returns**

- `NumberArray9`

<MemberHeading id="setcurrentfrustum" depth="3" name="setCurrentFrustum" sig="setCurrentFrustum(k: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1376" sourceLabel="Camera.ts:1376" />

Sets current active frustum index.

**Parameters**

- `k` (number) — Frustum index.

<MemberHeading id="getcurrentfrustum" depth="3" name="getCurrentFrustum" sig="getCurrentFrustum(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1387" sourceLabel="Camera.ts:1387" />

Returns current active frustum index.

**Returns**

- `number` — Current frustum index.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1397" sourceLabel="Camera.ts:1397" />

Checks whether the sphere intersects any camera frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1412" sourceLabel="Camera.ts:1412" />

Checks whether a point is inside any camera frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1435" sourceLabel="Camera.ts:1435" />

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1444" sourceLabel="Camera.ts:1444" />

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1453" sourceLabel="Camera.ts:1453" />

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix.

<MemberHeading id="getinverseprojectionviewmatrix" depth="3" name="getInverseProjectionViewMatrix" sig="getInverseProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1462" sourceLabel="Camera.ts:1462" />

Returns inverse projection-view matrix.

**Returns**

- `NumberArray16` — Inverse projection-view matrix.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1471" sourceLabel="Camera.ts:1471" />

Returns inverse projection matrix.

**Returns**

- `NumberArray16` — Inverse projection matrix.

<MemberHeading id="viewdistance" depth="3" name="viewDistance" sig="viewDistance(cartesian: Vec3, distance?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1481" sourceLabel="Camera.ts:1481" />

Places camera at a fixed distance from a point and looks at it.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.

<MemberHeading id="copy" depth="3" name="copy" sig="copy(cam: Camera)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1492" sourceLabel="Camera.ts:1492" />

Copies camera pose and projection settings from another camera.

**Parameters**

- `cam` ([Camera](/camera)) — Source camera.

<MemberHeading id="getaltitude" depth="3" name="getAltitude" sig="getAltitude(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1509" sourceLabel="Camera.ts:1509" />

Returns camera altitude value for base camera.

**Returns**

- `number` — Camera `y` coordinate.

## Instance Fields

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L354" sourceLabel="Camera.ts:354" />

Returns current projection mode.

**Returns**

- `boolean` — `true` when orthographic projection is enabled.

<MemberHeading id="reversedepth" depth="3" name="reverseDepth" sig="reverseDepth" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L363" sourceLabel="Camera.ts:363" />

Returns reverse depth flag.

**Returns**

- `boolean` — `true` when reverse depth mode is enabled.

<MemberHeading id="reversedepthactive" depth="3" name="reverseDepthActive" sig="reverseDepthActive" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L372" sourceLabel="Camera.ts:372" />

Returns active reverse depth state.

**Returns**

- `boolean` — `true` for perspective reverse-Z mode.

<MemberHeading id="depthzerotoone" depth="3" name="depthZeroToOne" sig="depthZeroToOne" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L381" sourceLabel="Camera.ts:381" />

Returns active depth range mode.

**Returns**

- `boolean` — `true` when ZERO\_TO\_ONE depth range is active.

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L402" sourceLabel="Camera.ts:402" />

Enables or disables orthographic projection mode.

**Parameters**

- `isOrthographic` (boolean) — Orthographic mode flag.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L414" sourceLabel="Camera.ts:414" />

Returns focus distance used for orthographic projection size.

**Returns**

- `number` — Focus distance.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L423" sourceLabel="Camera.ts:423" />

Sets focus distance used for orthographic projection size.

**Parameters**

- `dist` (number) — Focus distance.

<MemberHeading id="id" depth="3" name="id" sig="id" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L443" sourceLabel="Camera.ts:443" />

Returns camera identifier.

**Returns**

- `number` — Camera id.

<MemberHeading id="width" depth="3" name="width" sig="width" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L784" sourceLabel="Camera.ts:784" />

Returns viewport width.

**Returns**

- `number` — Viewport width in pixels.

<MemberHeading id="height" depth="3" name="height" sig="height" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L793" sourceLabel="Camera.ts:793" />

Returns viewport height.

**Returns**

- `number` — Viewport height in pixels.

<MemberHeading id="viewangle" depth="3" name="viewAngle" sig="viewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L960" sourceLabel="Camera.ts:960" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="verticalviewangle" depth="3" name="verticalViewAngle" sig="verticalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L960" sourceLabel="Camera.ts:960" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="horizontalviewangle" depth="3" name="horizontalViewAngle" sig="horizontalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L969" sourceLabel="Camera.ts:969" />

Returns camera horizontal view angle in degrees.

**Returns**

- `number` — Horizontal view angle.

<MemberHeading id="frustum" depth="3" name="frustum" sig="frustum" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1426" sourceLabel="Camera.ts:1426" />

Returns current active frustum.

**Returns**

- [`Frustum`](/frustum) — Active frustum instance.
