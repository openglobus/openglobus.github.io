---
title: Camera
kind: class
longname: Camera
description: //@param {Renderer} [renderer] - Renderer uses the camera instance.
---

# Camera

<SourceLink href="/source/camera/camera-ts/#L124" label="Camera.ts:124" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L399" sourceLabel="Camera.ts:399" />

Enables or disables ZERO\_TO\_ONE depth range mode.

**Parameters**

- `enabled` (boolean) — Depth range mode flag.

<MemberHeading id="setorthofocus" depth="3" name="_setOrthoFocus" sig="_setOrthoFocus(distance?: number)" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L452" sourceLabel="Camera.ts:452" />

Keeps the orthographic scale on whatever the camera has just been aimed at.

**Parameters**

- `distance` (number, optional) — Distance from the eye to the point in view.

<MemberHeading id="flycartesian" depth="3" name="flyCartesian" sig="flyCartesian(cartesian?: Vec3, params?: IFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L472" sourceLabel="Camera.ts:472" />

Flies to the cartesian coordinates.

**Parameters**

- `cartesian` ([Vec3](/vec3), optional) — Finish cartesian coordinates.
- `params` (IFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="stopflying" depth="3" name="stopFlying" sig="stopFlying()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L541" sourceLabel="Camera.ts:541" />

Breaks the flight.

<MemberHeading id="checkfly" depth="3" name="checkFly" sig="checkFly()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L555" sourceLabel="Camera.ts:555" />

Prepare camera to the frame. Used in render node frame function.

<MemberHeading id="isflying" depth="3" name="isFlying" sig="isFlying(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L590" sourceLabel="Camera.ts:590" />

Returns camera is flying.

**Returns**

- `boolean`

<MemberHeading id="checkviewchanges" depth="3" name="checkViewChanges" sig="checkViewChanges()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L598" sourceLabel="Camera.ts:598" />

Checks camera movement and projection changes.

<MemberHeading id="checkmoveend" depth="3" name="checkMoveEnd" sig="checkMoveEnd(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L608" sourceLabel="Camera.ts:608" />

Checks whether the camera stopped moving and dispatches `moveend`.

**Returns**

- `boolean` — `true` when the camera is moving after the check.

<MemberHeading id="checkviewchange" depth="3" name="_checkViewChange" sig="_checkViewChange()" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L636" sourceLabel="Camera.ts:636" />

Checks whether the camera view or projection changed and dispatches `viewchange`.

<MemberHeading id="bindfrustumspickingcolors" depth="3" name="bindFrustumsPickingColors" sig="bindFrustumsPickingColors(renderer: Renderer)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L665" sourceLabel="Camera.ts:665" />

Binds picking colors for all frustums.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Renderer instance.

<MemberHeading id="init" depth="3" name="_init" sig="_init(options?: Object)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L683" sourceLabel="Camera.ts:683" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L698" sourceLabel="Camera.ts:698" />

Returns up direction vector.

**Returns**

- [`Vec3`](/vec3) — Up direction.

<MemberHeading id="getdown" depth="3" name="getDown" sig="getDown(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L707" sourceLabel="Camera.ts:707" />

Returns down direction vector.

**Returns**

- [`Vec3`](/vec3) — Down direction.

<MemberHeading id="getright" depth="3" name="getRight" sig="getRight(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L716" sourceLabel="Camera.ts:716" />

Returns right direction vector.

**Returns**

- [`Vec3`](/vec3) — Right direction.

<MemberHeading id="getleft" depth="3" name="getLeft" sig="getLeft(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L725" sourceLabel="Camera.ts:725" />

Returns left direction vector.

**Returns**

- [`Vec3`](/vec3) — Left direction.

<MemberHeading id="getforward" depth="3" name="getForward" sig="getForward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L734" sourceLabel="Camera.ts:734" />

Returns forward direction vector.

**Returns**

- [`Vec3`](/vec3) — Forward direction.

<MemberHeading id="getbackward" depth="3" name="getBackward" sig="getBackward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L743" sourceLabel="Camera.ts:743" />

Returns backward direction vector.

**Returns**

- [`Vec3`](/vec3) — Backward direction.

<MemberHeading id="updatecameraslope" depth="3" name="updateCameraSlope" sig="updateCameraSlope()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L751" sourceLabel="Camera.ts:751" />

Updates camera slope against the horizontal XZ plane.

<MemberHeading id="update" depth="3" name="update" sig="update()" />

<MemberMeta badges="abstract" sourceHref="/source/camera/camera-ts/#L760" sourceLabel="Camera.ts:760" />

Updates camera view space

<MemberHeading id="refresh" depth="3" name="refresh" sig="refresh()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L803" sourceLabel="Camera.ts:803" />

Refresh camera matrices

<MemberHeading id="setviewportsize" depth="3" name="setViewportSize" sig="setViewportSize(width: number, height: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L833" sourceLabel="Camera.ts:833" />

Sets viewport size and updates projection.

**Parameters**

- `width` (number) — Viewport width in pixels.
- `height` (number) — Viewport height in pixels.

<MemberHeading id="getaspectratio" depth="3" name="getAspectRatio" sig="getAspectRatio(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L844" sourceLabel="Camera.ts:844" />

Returns aspect ratio.

**Returns**

- `number` — Aspect ratio.

<MemberHeading id="setproj" depth="3" name="_setProj" sig="_setProj(viewAngle: number, aspect: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L854" sourceLabel="Camera.ts:854" />

Sets camera projection.

**Parameters**

- `viewAngle` (number) — Camera view angle.
- `aspect` (number) — Screen aspect ratio.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number, frustumIndex?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L880" sourceLabel="Camera.ts:880" />

Updates near/far planes for one frustum.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional) — Far clipping plane distance.
- `frustumIndex` (number, optional, default: 0) — Frustum index.

<MemberHeading id="setfrustums" depth="3" name="setFrustums" sig="setFrustums(frustums: Array.<NumberArray2>)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L889" sourceLabel="Camera.ts:889" />

Replaces camera frustum ranges.

**Parameters**

- `frustums` (Array.\<NumberArray2>) — Array of `[near, far]` ranges.

<MemberHeading id="setviewangle" depth="3" name="setViewAngle" sig="setViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L952" sourceLabel="Camera.ts:952" />

Sets camera view angle in degrees

**Parameters**

- `angle` (number) — View angle

<MemberHeading id="sethorizontalviewangle" depth="3" name="setHorizontalViewAngle" sig="setHorizontalViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L962" sourceLabel="Camera.ts:962" />

Sets camera horizontal view angle in degrees.

**Parameters**

- `angle` (number) — Horizontal view angle.

<MemberHeading id="getviewangle" depth="3" name="getViewAngle" sig="getViewAngle(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L972" sourceLabel="Camera.ts:972" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — View angle in degrees.

<MemberHeading id="set" depth="3" name="set" sig="set(eye: Vec3, look: Vec3, up: Vec3): Camera" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1011" sourceLabel="Camera.ts:1011" />

Sets camera to eye position

**Parameters**

- `eye` ([Vec3](/vec3)) — Camera position
- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3)) — Camera up vector

**Returns**

- [`Camera`](/camera)

<MemberHeading id="look" depth="3" name="look" sig="look(look: Vec3, up?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1034" sourceLabel="Camera.ts:1034" />

Sets camera look point

**Parameters**

- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3), optional) — Camera up vector otherwise camera current up vector(this.\_u)

<MemberHeading id="slide" depth="3" name="slide" sig="slide(du: number, dv: number, dn: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1050" sourceLabel="Camera.ts:1050" />

Slides camera to vector d - (du, dv, dn)

**Parameters**

- `du` (number) — delta X
- `dv` (number) — delta Y
- `dn` (number) — delta Z

<MemberHeading id="setroll" depth="3" name="setRoll" sig="setRoll(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1061" sourceLabel="Camera.ts:1061" />

Roll the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta roll angle in radians

<MemberHeading id="setpitch" depth="3" name="setPitch" sig="setPitch(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1074" sourceLabel="Camera.ts:1074" />

Pitch the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta pitch angle in radians

<MemberHeading id="setyaw" depth="3" name="setYaw" sig="setYaw(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1087" sourceLabel="Camera.ts:1087" />

Yaw the camera to the angle in radians

**Parameters**

- `angle` (number) — Delta yaw angle in radians

<MemberHeading id="setpitchyawroll" depth="3" name="setPitchYawRoll" sig="setPitchYawRoll(pitch: number, yaw: number, roll: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1102" sourceLabel="Camera.ts:1102" />

Sets camera orientation from Euler angles.

**Parameters**

- `pitch` (number) — Pitch angle in radians.
- `yaw` (number) — Yaw angle in radians.
- `roll` (number) — Roll angle in radians.

<MemberHeading id="getpitch" depth="3" name="getPitch" sig="getPitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1113" sourceLabel="Camera.ts:1113" />

Returns pitch angle.

**Returns**

- `number` — Pitch angle in radians.

<MemberHeading id="getyaw" depth="3" name="getYaw" sig="getYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1122" sourceLabel="Camera.ts:1122" />

Returns yaw angle.

**Returns**

- `number` — Yaw angle in radians.

<MemberHeading id="getroll" depth="3" name="getRoll" sig="getRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1131" sourceLabel="Camera.ts:1131" />

Returns roll angle.

**Returns**

- `number` — Roll angle in radians.

<MemberHeading id="getabsolutepitch" depth="3" name="getAbsolutePitch" sig="getAbsolutePitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1140" sourceLabel="Camera.ts:1140" />

Returns absolute pitch angle.

**Returns**

- `number` — Absolute pitch angle in radians.

<MemberHeading id="getabsoluteyaw" depth="3" name="getAbsoluteYaw" sig="getAbsoluteYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1149" sourceLabel="Camera.ts:1149" />

Returns absolute yaw angle.

**Returns**

- `number` — Absolute yaw angle in radians.

<MemberHeading id="getabsoluteroll" depth="3" name="getAbsoluteRoll" sig="getAbsoluteRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1158" sourceLabel="Camera.ts:1158" />

Returns absolute roll angle.

**Returns**

- `number` — Absolute roll angle in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1167" sourceLabel="Camera.ts:1167" />

Returns camera rotation quaternion.

**Returns**

- [`Quat`](/quat) — Camera rotation quaternion.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rot: Quat, up?: Vec3, right?: Vec3, back?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1179" sourceLabel="Camera.ts:1179" />

Sets camera orientation from a quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.
- `up` ([Vec3](/vec3), optional) — Base up vector.
- `right` ([Vec3](/vec3), optional) — Base right vector.
- `back` ([Vec3](/vec3), optional) — Base backward vector.

<MemberHeading id="rotate" depth="3" name="rotate" sig="rotate(rot: Quat)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1191" sourceLabel="Camera.ts:1191" />

Rotates current camera basis by quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.

<MemberHeading id="unproject2v" depth="3" name="unproject2v" sig="unproject2v(pos: Vec2, dist?: number, outPos?: Vec3): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1206" sourceLabel="Camera.ts:1206" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1219" sourceLabel="Camera.ts:1219" />

Returns normal vector direction to the unprojected screen point from camera eye

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.
- `dist` (number, optional) — Optional projection distance for orthographic mode.
- `outPos` ([Vec3](/vec3), optional) — Optional output world position for orthographic mode.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getray" depth="3" name="getRay" sig="getRay(x: number, y: number): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1274" sourceLabel="Camera.ts:1274" />

Returns a world-space ray corresponding to the given screen point. For perspective camera the ray shares camera eye as origin. For orthographic camera the origin is offset across the view plane, and the direction equals the camera forward vector.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="getray2v" depth="3" name="getRay2v" sig="getRay2v(pos: Vec2): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1295" sourceLabel="Camera.ts:1295" />

Returns a world-space ray corresponding to the given screen point.

**Parameters**

- `pos` ([Vec2](/vec2)) — Screen coordinates in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="project3v" depth="3" name="project3v" sig="project3v(v: Vec3): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1305" sourceLabel="Camera.ts:1305" />

Gets projected 3d point to the 2d screen coordinates

**Parameters**

- `v` ([Vec3](/vec3)) — Cartesian 3d coordinates

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="project" depth="3" name="project" sig="project(x: number, y: number, z: number): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1317" sourceLabel="Camera.ts:1317" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1331" sourceLabel="Camera.ts:1331" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1351" sourceLabel="Camera.ts:1351" />

Rotates camera around the center point by horizontal.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `isArc` (boolean, optional) — If true camera up vector gets from current up vector every frame, otherwise up is always input parameter.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.
- `up` ([Vec3](/vec3), optional) — Camera up vector.

<MemberHeading id="rotatevertical" depth="3" name="rotateVertical" sig="rotateVertical(angle: number, center?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1360" sourceLabel="Camera.ts:1360" />

Rotates camera around the center point by vertical.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.

<MemberHeading id="projectedsize" depth="3" name="projectedSize" sig="projectedSize(p: Vec3, r: Vec3): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1372" sourceLabel="Camera.ts:1372" />

Gets 3d size factor. Uses in LOD distance calculation. It is a very important function used in Node.ts

**Parameters**

- `p` ([Vec3](/vec3)) — Point in 3d.
- `r` ([Vec3](/vec3)) — size.

**Returns**

- `number`

<MemberHeading id="getviewmatrix" depth="3" name="getViewMatrix" sig="getViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1388" sourceLabel="Camera.ts:1388" />

Returns model matrix.

**Returns**

- `NumberArray16`

<MemberHeading id="getnormalmatrix" depth="3" name="getNormalMatrix" sig="getNormalMatrix(): NumberArray9" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1397" sourceLabel="Camera.ts:1397" />

Returns camera normal matrix.

**Returns**

- `NumberArray9`

<MemberHeading id="setcurrentfrustum" depth="3" name="setCurrentFrustum" sig="setCurrentFrustum(k: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1406" sourceLabel="Camera.ts:1406" />

Sets current active frustum index.

**Parameters**

- `k` (number) — Frustum index.

<MemberHeading id="getcurrentfrustum" depth="3" name="getCurrentFrustum" sig="getCurrentFrustum(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1417" sourceLabel="Camera.ts:1417" />

Returns current active frustum index.

**Returns**

- `number` — Current frustum index.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1427" sourceLabel="Camera.ts:1427" />

Checks whether the sphere intersects any camera frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1442" sourceLabel="Camera.ts:1442" />

Checks whether a point is inside any camera frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1465" sourceLabel="Camera.ts:1465" />

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1474" sourceLabel="Camera.ts:1474" />

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1483" sourceLabel="Camera.ts:1483" />

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix.

<MemberHeading id="getinverseprojectionviewmatrix" depth="3" name="getInverseProjectionViewMatrix" sig="getInverseProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1492" sourceLabel="Camera.ts:1492" />

Returns inverse projection-view matrix.

**Returns**

- `NumberArray16` — Inverse projection-view matrix.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1501" sourceLabel="Camera.ts:1501" />

Returns inverse projection matrix.

**Returns**

- `NumberArray16` — Inverse projection matrix.

<MemberHeading id="viewdistance" depth="3" name="viewDistance" sig="viewDistance(cartesian: Vec3, distance?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1511" sourceLabel="Camera.ts:1511" />

Places camera at a fixed distance from a point and looks at it.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.

<MemberHeading id="copy" depth="3" name="copy" sig="copy(cam: Camera)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1523" sourceLabel="Camera.ts:1523" />

Copies camera pose and projection settings from another camera.

**Parameters**

- `cam` ([Camera](/camera)) — Source camera.

<MemberHeading id="getaltitude" depth="3" name="getAltitude" sig="getAltitude(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1540" sourceLabel="Camera.ts:1540" />

Returns camera altitude value for base camera.

**Returns**

- `number` — Camera `y` coordinate.

## Instance Fields

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L363" sourceLabel="Camera.ts:363" />

Returns current projection mode.

**Returns**

- `boolean` — `true` when orthographic projection is enabled.

<MemberHeading id="reversedepth" depth="3" name="reverseDepth" sig="reverseDepth" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L372" sourceLabel="Camera.ts:372" />

Returns reverse depth flag.

**Returns**

- `boolean` — `true` when reverse depth mode is enabled.

<MemberHeading id="reversedepthactive" depth="3" name="reverseDepthActive" sig="reverseDepthActive" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L381" sourceLabel="Camera.ts:381" />

Returns active reverse depth state.

**Returns**

- `boolean` — `true` for perspective reverse-Z mode.

<MemberHeading id="depthzerotoone" depth="3" name="depthZeroToOne" sig="depthZeroToOne" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L390" sourceLabel="Camera.ts:390" />

Returns active depth range mode.

**Returns**

- `boolean` — `true` when ZERO\_TO\_ONE depth range is active.

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L411" sourceLabel="Camera.ts:411" />

Enables or disables orthographic projection mode.

**Parameters**

- `isOrthographic` (boolean) — Orthographic mode flag.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L423" sourceLabel="Camera.ts:423" />

Returns focus distance used for orthographic projection size.

**Returns**

- `number` — Focus distance.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L432" sourceLabel="Camera.ts:432" />

Sets focus distance used for orthographic projection size.

**Parameters**

- `dist` (number) — Focus distance.

<MemberHeading id="id" depth="3" name="id" sig="id" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L462" sourceLabel="Camera.ts:462" />

Returns camera identifier.

**Returns**

- `number` — Camera id.

<MemberHeading id="width" depth="3" name="width" sig="width" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L814" sourceLabel="Camera.ts:814" />

Returns viewport width.

**Returns**

- `number` — Viewport width in pixels.

<MemberHeading id="height" depth="3" name="height" sig="height" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L823" sourceLabel="Camera.ts:823" />

Returns viewport height.

**Returns**

- `number` — Viewport height in pixels.

<MemberHeading id="viewangle" depth="3" name="viewAngle" sig="viewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L990" sourceLabel="Camera.ts:990" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="verticalviewangle" depth="3" name="verticalViewAngle" sig="verticalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L990" sourceLabel="Camera.ts:990" />

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="horizontalviewangle" depth="3" name="horizontalViewAngle" sig="horizontalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L999" sourceLabel="Camera.ts:999" />

Returns camera horizontal view angle in degrees.

**Returns**

- `number` — Horizontal view angle.

<MemberHeading id="frustum" depth="3" name="frustum" sig="frustum" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1456" sourceLabel="Camera.ts:1456" />

Returns current active frustum.

**Returns**

- [`Frustum`](/frustum) — Active frustum instance.
