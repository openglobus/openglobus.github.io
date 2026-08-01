---
title: PlanetCamera
kind: class
longname: PlanetCamera
description: Planet camera.
---

# PlanetCamera

**Extends:&#x20;**[`Camera`](/camera)

<SourceLink href="/source/camera/planetcamera-ts/#L69" label="PlanetCamera.ts:69" />

Planet camera.

**Fires**

- `event:viewchange`
- `event:moveend`
- `event:flystart`
- `event:flyend`
- `event:flystop`

---

## Constructor

<Signature
  code="new PlanetCamera(
	planet: Planet,
	options?: IPlanetCameraParams,
): PlanetCamera"
/>

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.
- `options` (IPlanetCameraParams, optional) — Planet camera options:
  - `options.name` (string, optional) — Camera name.
  - `options.viewAngle` (number, optional) — Camera angle of view.
  - `options.near` (number, optional) — Camera near plane distance. Default is 1.0
  - `options.far` (number, optional) — Camera far plane distance. Default is og.math.MAX
  - `options.minAltitude` (number, optional) — Minimal altitude for the camera. Default is 5
  - `options.maxAltitude` (number, optional) — Maximal altitude for the camera. Default is 20000000
  - `options.reverseDepth` (boolean, optional, default: true) — Enables reverse-Z depth in perspective mode.
  - `options.eye` ([Vec3](/vec3), optional) — Camera eye position. Default (0,0,0)
  - `options.look` ([Vec3](/vec3), optional) — Camera look position. Default (0,0,0)
  - `options.up` ([Vec3](/vec3), optional) — Camera eye position. Default (0,1,0)

---

## Instance Methods

<MemberHeading id="setterraincollisionactivity" depth="3" name="setTerrainCollisionActivity" sig="setTerrainCollisionActivity(isActive: boolean)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L189" sourceLabel="PlanetCamera.ts:189" />

Enables or disables terrain collision checks.

**Parameters**

- `isActive` (boolean) — Terrain collision flag.

<MemberHeading id="update" depth="3" name="update" sig="update()" />

<MemberMeta badges="abstract" sourceHref="/source/camera/planetcamera-ts/#L198" sourceLabel="PlanetCamera.ts:198" />

**Overrides:&#x20;**`Camera#update`

Updates camera view space.

<MemberHeading id="updatecameraslope" depth="3" name="updateCameraSlope" sig="updateCameraSlope()" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L214" sourceLabel="PlanetCamera.ts:214" />

**Overrides:&#x20;**`Camera#updateCameraSlope`

Updates camera slope against the planet surface normal.

<MemberHeading id="updategeodeticposition" depth="3" name="updateGeodeticPosition" sig="updateGeodeticPosition()" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L223" sourceLabel="PlanetCamera.ts:223" />

Updates camera geographic coordinates from current cartesian position.

<MemberHeading id="setaltitude" depth="3" name="setAltitude" sig="setAltitude(alt: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L235" sourceLabel="PlanetCamera.ts:235" />

Sets altitude over the terrain.

**Parameters**

- `alt` (number) — Altitude over the terrain.

<MemberHeading id="getaltitude" depth="3" name="getAltitude" sig="getAltitude()" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L250" sourceLabel="PlanetCamera.ts:250" />

**Overrides:&#x20;**`Camera#getAltitude`

Gets altitude over the terrain.

<MemberHeading id="setlonlat" depth="3" name="setLonLat" sig="setLonLat(lonlat: LonLat, lookLonLat?: LonLat, up?: Vec3)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L261" sourceLabel="PlanetCamera.ts:261" />

Places camera to view to the geographical point.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — New camera and camera view position.
- `lookLonLat` ([LonLat](/lonlat), optional) — Look up coordinates.
- `up` ([Vec3](/vec3), optional) — Camera UP vector. Defaults to the local surface normal for an explicit look point.

<MemberHeading id="getlonlat" depth="3" name="getLonLat" sig="getLonLat(): LonLat" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L278" sourceLabel="PlanetCamera.ts:278" />

Returns camera geographical position.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L287" sourceLabel="PlanetCamera.ts:287" />

Returns camera height.

**Returns**

- `number`

<MemberHeading id="getextentposition" depth="3" name="getExtentPosition" sig="getExtentPosition(extent: Extent, height: Number): Vec3" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L298" sourceLabel="PlanetCamera.ts:298" />

Gets position by viewable extent.

**Parameters**

- `extent` ([Extent](/extent)) — Viewable extent.
- `height` (Number) — Camera height

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent(extent: Extent, height?: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L421" sourceLabel="PlanetCamera.ts:421" />

View current extent.

**Parameters**

- `extent` ([Extent](/extent)) — Current extent.
- `height` (number, optional)

<MemberHeading
  id="flyextent"
  depth="3"
  name="flyExtent"
  sig="flyExtent(
	extent: Extent,
	height?: number,
	params?: IPlanetFlyCartesianParams,
)"
/>

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L464" sourceLabel="PlanetCamera.ts:464" />

Flies to the current extent.

**Parameters**

- `extent` ([Extent](/extent)) — Current extent.
- `height` (number, optional) — Destination height.
- `params` (IPlanetFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="viewdistance" depth="3" name="viewDistance" sig="viewDistance(cartesian: Vec3, distance?: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L502" sourceLabel="PlanetCamera.ts:502" />

**Overrides:&#x20;**`Camera#viewDistance`

Places camera at a fixed distance from a target point and looks at it.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.

<MemberHeading id="flylonlat" depth="3" name="flyLonLat" sig="flyLonLat(lonlat: LonLat, params?: IPlanetFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L522" sourceLabel="PlanetCamera.ts:522" />

Flies to the geo coordinates.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Finish coordinates.
- `params` (IPlanetFlyCartesianParams, optional) — Flight parameters

<MemberHeading
  id="flydistance"
  depth="3"
  name="flyDistance"
  sig="flyDistance(
	cartesian: Vec3,
	distance?: number,
	params?: IPlanetFlyCartesianParams,
)"
/>

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L534" sourceLabel="PlanetCamera.ts:534" />

Flies camera to a position at a fixed distance from the target point.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.
- `params` (IPlanetFlyCartesianParams, optional) — Flight parameters.

<MemberHeading id="rotateleft" depth="3" name="rotateLeft" sig="rotateLeft(angle: number, spin?: boolean)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L704" sourceLabel="PlanetCamera.ts:704" />

Rotates around planet to the left.

**Parameters**

- `angle` (number) — Rotation angle.
- `spin` (boolean, optional) — If its true rotates around globe spin.

<MemberHeading id="rotateright" depth="3" name="rotateRight" sig="rotateRight(angle: number, spin?: boolean)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L715" sourceLabel="PlanetCamera.ts:715" />

Rotates around planet to the right.

**Parameters**

- `angle` (number) — Rotation angle.
- `spin` (boolean, optional) — If its true rotates around globe spin.

<MemberHeading id="rotateup" depth="3" name="rotateUp" sig="rotateUp(angle: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L725" sourceLabel="PlanetCamera.ts:725" />

Rotates around planet to the North Pole.

**Parameters**

- `angle` (number) — Rotation angle.

<MemberHeading id="rotatedown" depth="3" name="rotateDown" sig="rotateDown(angle: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L735" sourceLabel="PlanetCamera.ts:735" />

Rotates around planet to the South Pole.

**Parameters**

- `angle` (number) — Rotation angle.

<MemberHeading id="rotatevertical" depth="3" name="rotateVertical" sig="rotateVertical(angle: number, center: Vec3, minSlope?: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L747" sourceLabel="PlanetCamera.ts:747" />

**Overrides:&#x20;**`Camera#rotateVertical`

Rotates camera vertically around the given center.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `center` ([Vec3](/vec3)) — Rotation center.
- `minSlope` (number, optional, default: 0) — Minimum allowed slope limit.

<MemberHeading id="checkterraincollision" depth="3" name="checkTerrainCollision" sig="checkTerrainCollision(): Vec3 | undefined" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L786" sourceLabel="PlanetCamera.ts:786" />

Updates terrain altitude and keeps camera above minimum altitude.

**Returns**

- [`Vec3`](/vec3)` | undefined` — Terrain point under camera when available.

<MemberHeading id="getsurfacevisibledistance" depth="3" name="getSurfaceVisibleDistance" sig="getSurfaceVisibleDistance(d: number): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L831" sourceLabel="PlanetCamera.ts:831" />

Returns visible surface arc distance from current altitude.

**Parameters**

- `d` (number) — Additional height offset.

**Returns**

- `number` — Visible surface distance.

<MemberHeading
  id="getrayintersectionellipsoid"
  depth="3"
  name="getRayIntersectionEllipsoid"
  sig="getRayIntersectionEllipsoid(
	x: number,
	y: number,
): Vec3 | undefined"
/>

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L844" sourceLabel="PlanetCamera.ts:844" />

Returns the ellipsoid intersection point for a screen-space ray. If the ray doesn't hit ellipsoid, it returns 'undefined'.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Vec3`](/vec3)` | undefined` — Cartesian intersection point.

<MemberHeading id="getheading" depth="3" name="getHeading" sig="getHeading(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L855" sourceLabel="PlanetCamera.ts:855" />

Returns heading angle in degrees. Should match `getYaw()` in most cases.

**Returns**

- `number` — Heading in `[0, 360)` degrees.

<MemberHeading id="isvisible" depth="3" name="isVisible" sig="isVisible(poi: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L872" sourceLabel="PlanetCamera.ts:872" />

Checks whether a cartesian point is visible above the horizon.

**Parameters**

- `poi` ([Vec3](/vec3)) — Point in cartesian coordinates.

**Returns**

- `boolean` — `true` when the point is visible.

<MemberHeading id="getpitch" depth="3" name="getPitch" sig="getPitch(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L882" sourceLabel="PlanetCamera.ts:882" />

**Overrides:&#x20;**`Camera#getPitch`

Returns pitch angle in local planet frame.

**Returns**

- `number` — Pitch angle in radians.

<MemberHeading id="getyaw" depth="3" name="getYaw" sig="getYaw(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L893" sourceLabel="PlanetCamera.ts:893" />

**Overrides:&#x20;**`Camera#getYaw`

Returns yaw angle in local planet frame. Should match `getHeading()` in most cases.

**Returns**

- `number` — Yaw angle in radians.

<MemberHeading id="getroll" depth="3" name="getRoll" sig="getRoll(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L903" sourceLabel="PlanetCamera.ts:903" />

**Overrides:&#x20;**`Camera#getRoll`

Returns roll angle in local planet frame.

**Returns**

- `number` — Roll angle in radians.

<MemberHeading id="setpitch" depth="3" name="setPitch" sig="setPitch(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L913" sourceLabel="PlanetCamera.ts:913" />

**Overrides:&#x20;**`Camera#setPitch`

Sets pitch angle in local planet frame.

**Parameters**

- `a` (number) — Pitch angle in radians.

<MemberHeading id="setyaw" depth="3" name="setYaw" sig="setYaw(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L925" sourceLabel="PlanetCamera.ts:925" />

**Overrides:&#x20;**`Camera#setYaw`

Sets yaw angle in local planet frame.

**Parameters**

- `a` (number) — Yaw angle in radians.

<MemberHeading id="setroll" depth="3" name="setRoll" sig="setRoll(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L937" sourceLabel="PlanetCamera.ts:937" />

**Overrides:&#x20;**`Camera#setRoll`

Sets roll angle in local planet frame.

**Parameters**

- `a` (number) — Roll angle in radians.

<MemberHeading id="setpitchyawroll" depth="3" name="setPitchYawRoll" sig="setPitchYawRoll(pitch: number, yaw: number, roll: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L951" sourceLabel="PlanetCamera.ts:951" />

**Overrides:&#x20;**`Camera#setPitchYawRoll`

Sets orientation from pitch, yaw and roll in local planet frame.

**Parameters**

- `pitch` (number) — Pitch angle in radians.
- `yaw` (number) — Yaw angle in radians.
- `roll` (number) — Roll angle in radians.

<MemberHeading id="setdepthzerotoone" depth="3" name="setDepthZeroToOne" sig="setDepthZeroToOne(enabled: boolean)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L390" sourceLabel="Camera.ts:390" />

_Inherited from `Camera#setDepthZeroToOne`_

**Overrides:&#x20;**`Camera#setDepthZeroToOne`

Enables or disables ZERO\_TO\_ONE depth range mode.

**Parameters**

- `enabled` (boolean) — Depth range mode flag.

<MemberHeading id="flycartesian" depth="3" name="flyCartesian" sig="flyCartesian(cartesian?: Vec3, params?: IFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L453" sourceLabel="Camera.ts:453" />

_Inherited from `Camera#flyCartesian`_

**Overrides:&#x20;**`Camera#flyCartesian`

Flies to the cartesian coordinates.

**Parameters**

- `cartesian` ([Vec3](/vec3), optional) — Finish cartesian coordinates.
- `params` (IFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="stopflying" depth="3" name="stopFlying" sig="stopFlying()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L515" sourceLabel="Camera.ts:515" />

_Inherited from `Camera#stopFlying`_

**Overrides:&#x20;**`Camera#stopFlying`

Breaks the flight.

<MemberHeading id="checkfly" depth="3" name="checkFly" sig="checkFly()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L529" sourceLabel="Camera.ts:529" />

_Inherited from `Camera#checkFly`_

**Overrides:&#x20;**`Camera#checkFly`

Prepare camera to the frame. Used in render node frame function.

<MemberHeading id="isflying" depth="3" name="isFlying" sig="isFlying(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L562" sourceLabel="Camera.ts:562" />

_Inherited from `Camera#isFlying`_

**Overrides:&#x20;**`Camera#isFlying`

Returns camera is flying.

**Returns**

- `boolean`

<MemberHeading id="checkviewchanges" depth="3" name="checkViewChanges" sig="checkViewChanges()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L570" sourceLabel="Camera.ts:570" />

_Inherited from `Camera#checkViewChanges`_

**Overrides:&#x20;**`Camera#checkViewChanges`

Checks camera movement and projection changes.

<MemberHeading id="checkmoveend" depth="3" name="checkMoveEnd" sig="checkMoveEnd(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L580" sourceLabel="Camera.ts:580" />

_Inherited from `Camera#checkMoveEnd`_

**Overrides:&#x20;**`Camera#checkMoveEnd`

Checks whether the camera stopped moving and dispatches `moveend`.

**Returns**

- `boolean` — `true` when the camera is moving after the check.

<MemberHeading id="checkviewchange" depth="3" name="_checkViewChange" sig="_checkViewChange()" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L608" sourceLabel="Camera.ts:608" />

_Inherited from `Camera#_checkViewChange`_

**Overrides:&#x20;**`Camera#_checkViewChange`

Checks whether the camera view or projection changed and dispatches `viewchange`.

<MemberHeading id="bindfrustumspickingcolors" depth="3" name="bindFrustumsPickingColors" sig="bindFrustumsPickingColors(renderer: Renderer)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L636" sourceLabel="Camera.ts:636" />

_Inherited from `Camera#bindFrustumsPickingColors`_

**Overrides:&#x20;**`Camera#bindFrustumsPickingColors`

Binds picking colors for all frustums.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Renderer instance.

<MemberHeading id="init" depth="3" name="_init" sig="_init(options?: Object)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L654" sourceLabel="Camera.ts:654" />

_Inherited from `Camera#_init`_

**Overrides:&#x20;**`Camera#_init`

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

_Inherited from `Camera#getUp`_

**Overrides:&#x20;**`Camera#getUp`

Returns up direction vector.

**Returns**

- [`Vec3`](/vec3) — Up direction.

<MemberHeading id="getdown" depth="3" name="getDown" sig="getDown(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L678" sourceLabel="Camera.ts:678" />

_Inherited from `Camera#getDown`_

**Overrides:&#x20;**`Camera#getDown`

Returns down direction vector.

**Returns**

- [`Vec3`](/vec3) — Down direction.

<MemberHeading id="getright" depth="3" name="getRight" sig="getRight(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L687" sourceLabel="Camera.ts:687" />

_Inherited from `Camera#getRight`_

**Overrides:&#x20;**`Camera#getRight`

Returns right direction vector.

**Returns**

- [`Vec3`](/vec3) — Right direction.

<MemberHeading id="getleft" depth="3" name="getLeft" sig="getLeft(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L696" sourceLabel="Camera.ts:696" />

_Inherited from `Camera#getLeft`_

**Overrides:&#x20;**`Camera#getLeft`

Returns left direction vector.

**Returns**

- [`Vec3`](/vec3) — Left direction.

<MemberHeading id="getforward" depth="3" name="getForward" sig="getForward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L705" sourceLabel="Camera.ts:705" />

_Inherited from `Camera#getForward`_

**Overrides:&#x20;**`Camera#getForward`

Returns forward direction vector.

**Returns**

- [`Vec3`](/vec3) — Forward direction.

<MemberHeading id="getbackward" depth="3" name="getBackward" sig="getBackward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L714" sourceLabel="Camera.ts:714" />

_Inherited from `Camera#getBackward`_

**Overrides:&#x20;**`Camera#getBackward`

Returns backward direction vector.

**Returns**

- [`Vec3`](/vec3) — Backward direction.

<MemberHeading id="refresh" depth="3" name="refresh" sig="refresh()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L774" sourceLabel="Camera.ts:774" />

_Inherited from `Camera#refresh`_

**Overrides:&#x20;**`Camera#refresh`

Refresh camera matrices

<MemberHeading id="setviewportsize" depth="3" name="setViewportSize" sig="setViewportSize(width: number, height: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L803" sourceLabel="Camera.ts:803" />

_Inherited from `Camera#setViewportSize`_

**Overrides:&#x20;**`Camera#setViewportSize`

Sets viewport size and updates projection.

**Parameters**

- `width` (number) — Viewport width in pixels.
- `height` (number) — Viewport height in pixels.

<MemberHeading id="getaspectratio" depth="3" name="getAspectRatio" sig="getAspectRatio(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L814" sourceLabel="Camera.ts:814" />

_Inherited from `Camera#getAspectRatio`_

**Overrides:&#x20;**`Camera#getAspectRatio`

Returns aspect ratio.

**Returns**

- `number` — Aspect ratio.

<MemberHeading id="setproj" depth="3" name="_setProj" sig="_setProj(viewAngle: number, aspect: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L824" sourceLabel="Camera.ts:824" />

_Inherited from `Camera#_setProj`_

**Overrides:&#x20;**`Camera#_setProj`

Sets camera projection.

**Parameters**

- `viewAngle` (number) — Camera view angle.
- `aspect` (number) — Screen aspect ratio.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number, frustumIndex?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L850" sourceLabel="Camera.ts:850" />

_Inherited from `Camera#setNearFar`_

**Overrides:&#x20;**`Camera#setNearFar`

Updates near/far planes for one frustum.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional) — Far clipping plane distance.
- `frustumIndex` (number, optional, default: 0) — Frustum index.

<MemberHeading id="setfrustums" depth="3" name="setFrustums" sig="setFrustums(frustums: Array.<NumberArray2>)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L859" sourceLabel="Camera.ts:859" />

_Inherited from `Camera#setFrustums`_

**Overrides:&#x20;**`Camera#setFrustums`

Replaces camera frustum ranges.

**Parameters**

- `frustums` (Array.\<NumberArray2>) — Array of `[near, far]` ranges.

<MemberHeading id="setviewangle" depth="3" name="setViewAngle" sig="setViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L922" sourceLabel="Camera.ts:922" />

_Inherited from `Camera#setViewAngle`_

**Overrides:&#x20;**`Camera#setViewAngle`

Sets camera view angle in degrees

**Parameters**

- `angle` (number) — View angle

<MemberHeading id="sethorizontalviewangle" depth="3" name="setHorizontalViewAngle" sig="setHorizontalViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L932" sourceLabel="Camera.ts:932" />

_Inherited from `Camera#setHorizontalViewAngle`_

**Overrides:&#x20;**`Camera#setHorizontalViewAngle`

Sets camera horizontal view angle in degrees.

**Parameters**

- `angle` (number) — Horizontal view angle.

<MemberHeading id="getviewangle" depth="3" name="getViewAngle" sig="getViewAngle(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L942" sourceLabel="Camera.ts:942" />

_Inherited from `Camera#getViewAngle`_

**Overrides:&#x20;**`Camera#getViewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — View angle in degrees.

<MemberHeading id="set" depth="3" name="set" sig="set(eye: Vec3, look: Vec3, up: Vec3): Camera" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L981" sourceLabel="Camera.ts:981" />

_Inherited from `Camera#set`_

**Overrides:&#x20;**`Camera#set`

Sets camera to eye position

**Parameters**

- `eye` ([Vec3](/vec3)) — Camera position
- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3)) — Camera up vector

**Returns**

- [`Camera`](/camera)

<MemberHeading id="look" depth="3" name="look" sig="look(look: Vec3, up?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1004" sourceLabel="Camera.ts:1004" />

_Inherited from `Camera#look`_

**Overrides:&#x20;**`Camera#look`

Sets camera look point

**Parameters**

- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3), optional) — Camera up vector otherwise camera current up vector(this.\_u)

<MemberHeading id="slide" depth="3" name="slide" sig="slide(du: number, dv: number, dn: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1020" sourceLabel="Camera.ts:1020" />

_Inherited from `Camera#slide`_

**Overrides:&#x20;**`Camera#slide`

Slides camera to vector d - (du, dv, dn)

**Parameters**

- `du` (number) — delta X
- `dv` (number) — delta Y
- `dn` (number) — delta Z

<MemberHeading id="getabsolutepitch" depth="3" name="getAbsolutePitch" sig="getAbsolutePitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1110" sourceLabel="Camera.ts:1110" />

_Inherited from `Camera#getAbsolutePitch`_

**Overrides:&#x20;**`Camera#getAbsolutePitch`

Returns absolute pitch angle.

**Returns**

- `number` — Absolute pitch angle in radians.

<MemberHeading id="getabsoluteyaw" depth="3" name="getAbsoluteYaw" sig="getAbsoluteYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1119" sourceLabel="Camera.ts:1119" />

_Inherited from `Camera#getAbsoluteYaw`_

**Overrides:&#x20;**`Camera#getAbsoluteYaw`

Returns absolute yaw angle.

**Returns**

- `number` — Absolute yaw angle in radians.

<MemberHeading id="getabsoluteroll" depth="3" name="getAbsoluteRoll" sig="getAbsoluteRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1128" sourceLabel="Camera.ts:1128" />

_Inherited from `Camera#getAbsoluteRoll`_

**Overrides:&#x20;**`Camera#getAbsoluteRoll`

Returns absolute roll angle.

**Returns**

- `number` — Absolute roll angle in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1137" sourceLabel="Camera.ts:1137" />

_Inherited from `Camera#getRotation`_

**Overrides:&#x20;**`Camera#getRotation`

Returns camera rotation quaternion.

**Returns**

- [`Quat`](/quat) — Camera rotation quaternion.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rot: Quat, up?: Vec3, right?: Vec3, back?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1149" sourceLabel="Camera.ts:1149" />

_Inherited from `Camera#setRotation`_

**Overrides:&#x20;**`Camera#setRotation`

Sets camera orientation from a quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.
- `up` ([Vec3](/vec3), optional) — Base up vector.
- `right` ([Vec3](/vec3), optional) — Base right vector.
- `back` ([Vec3](/vec3), optional) — Base backward vector.

<MemberHeading id="rotate" depth="3" name="rotate" sig="rotate(rot: Quat)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1161" sourceLabel="Camera.ts:1161" />

_Inherited from `Camera#rotate`_

**Overrides:&#x20;**`Camera#rotate`

Rotates current camera basis by quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.

<MemberHeading id="unproject2v" depth="3" name="unproject2v" sig="unproject2v(pos: Vec2, dist?: number, outPos?: Vec3): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1176" sourceLabel="Camera.ts:1176" />

_Inherited from `Camera#unproject2v`_

**Overrides:&#x20;**`Camera#unproject2v`

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

_Inherited from `Camera#unproject`_

**Overrides:&#x20;**`Camera#unproject`

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

_Inherited from `Camera#getRay`_

**Overrides:&#x20;**`Camera#getRay`

Returns a world-space ray corresponding to the given screen point. For perspective camera the ray shares camera eye as origin. For orthographic camera the origin is offset across the view plane, and the direction equals the camera forward vector.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="getray2v" depth="3" name="getRay2v" sig="getRay2v(pos: Vec2): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1265" sourceLabel="Camera.ts:1265" />

_Inherited from `Camera#getRay2v`_

**Overrides:&#x20;**`Camera#getRay2v`

Returns a world-space ray corresponding to the given screen point.

**Parameters**

- `pos` ([Vec2](/vec2)) — Screen coordinates in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="project3v" depth="3" name="project3v" sig="project3v(v: Vec3): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1275" sourceLabel="Camera.ts:1275" />

_Inherited from `Camera#project3v`_

**Overrides:&#x20;**`Camera#project3v`

Gets projected 3d point to the 2d screen coordinates

**Parameters**

- `v` ([Vec3](/vec3)) — Cartesian 3d coordinates

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="project" depth="3" name="project" sig="project(x: number, y: number, z: number): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1287" sourceLabel="Camera.ts:1287" />

_Inherited from `Camera#project`_

**Overrides:&#x20;**`Camera#project`

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

_Inherited from `Camera#rotateAround`_

**Overrides:&#x20;**`Camera#rotateAround`

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

_Inherited from `Camera#rotateHorizontal`_

**Overrides:&#x20;**`Camera#rotateHorizontal`

Rotates camera around the center point by horizontal.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `isArc` (boolean, optional) — If true camera up vector gets from current up vector every frame, otherwise up is always input parameter.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.
- `up` ([Vec3](/vec3), optional) — Camera up vector.

<MemberHeading id="projectedsize" depth="3" name="projectedSize" sig="projectedSize(p: Vec3, r: Vec3): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1342" sourceLabel="Camera.ts:1342" />

_Inherited from `Camera#projectedSize`_

**Overrides:&#x20;**`Camera#projectedSize`

Gets 3d size factor. Uses in LOD distance calculation. It is a very important function used in Node.ts

**Parameters**

- `p` ([Vec3](/vec3)) — Point in 3d.
- `r` ([Vec3](/vec3)) — size.

**Returns**

- `number`

<MemberHeading id="getviewmatrix" depth="3" name="getViewMatrix" sig="getViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1358" sourceLabel="Camera.ts:1358" />

_Inherited from `Camera#getViewMatrix`_

**Overrides:&#x20;**`Camera#getViewMatrix`

Returns model matrix.

**Returns**

- `NumberArray16`

<MemberHeading id="getnormalmatrix" depth="3" name="getNormalMatrix" sig="getNormalMatrix(): NumberArray9" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1367" sourceLabel="Camera.ts:1367" />

_Inherited from `Camera#getNormalMatrix`_

**Overrides:&#x20;**`Camera#getNormalMatrix`

Returns camera normal matrix.

**Returns**

- `NumberArray9`

<MemberHeading id="setcurrentfrustum" depth="3" name="setCurrentFrustum" sig="setCurrentFrustum(k: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1376" sourceLabel="Camera.ts:1376" />

_Inherited from `Camera#setCurrentFrustum`_

**Overrides:&#x20;**`Camera#setCurrentFrustum`

Sets current active frustum index.

**Parameters**

- `k` (number) — Frustum index.

<MemberHeading id="getcurrentfrustum" depth="3" name="getCurrentFrustum" sig="getCurrentFrustum(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1387" sourceLabel="Camera.ts:1387" />

_Inherited from `Camera#getCurrentFrustum`_

**Overrides:&#x20;**`Camera#getCurrentFrustum`

Returns current active frustum index.

**Returns**

- `number` — Current frustum index.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1397" sourceLabel="Camera.ts:1397" />

_Inherited from `Camera#containsSphere`_

**Overrides:&#x20;**`Camera#containsSphere`

Checks whether the sphere intersects any camera frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1412" sourceLabel="Camera.ts:1412" />

_Inherited from `Camera#containsPoint`_

**Overrides:&#x20;**`Camera#containsPoint`

Checks whether a point is inside any camera frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1435" sourceLabel="Camera.ts:1435" />

_Inherited from `Camera#getProjectionMatrix`_

**Overrides:&#x20;**`Camera#getProjectionMatrix`

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1444" sourceLabel="Camera.ts:1444" />

_Inherited from `Camera#getProjectionViewMatrix`_

**Overrides:&#x20;**`Camera#getProjectionViewMatrix`

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1453" sourceLabel="Camera.ts:1453" />

_Inherited from `Camera#getProjectionViewRTEMatrix`_

**Overrides:&#x20;**`Camera#getProjectionViewRTEMatrix`

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix.

<MemberHeading id="getinverseprojectionviewmatrix" depth="3" name="getInverseProjectionViewMatrix" sig="getInverseProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1462" sourceLabel="Camera.ts:1462" />

_Inherited from `Camera#getInverseProjectionViewMatrix`_

**Overrides:&#x20;**`Camera#getInverseProjectionViewMatrix`

Returns inverse projection-view matrix.

**Returns**

- `NumberArray16` — Inverse projection-view matrix.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1471" sourceLabel="Camera.ts:1471" />

_Inherited from `Camera#getInverseProjectionMatrix`_

**Overrides:&#x20;**`Camera#getInverseProjectionMatrix`

Returns inverse projection matrix.

**Returns**

- `NumberArray16` — Inverse projection matrix.

<MemberHeading id="copy" depth="3" name="copy" sig="copy(cam: Camera)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1492" sourceLabel="Camera.ts:1492" />

_Inherited from `Camera#copy`_

**Overrides:&#x20;**`Camera#copy`

Copies camera pose and projection settings from another camera.

**Parameters**

- `cam` ([Camera](/camera)) — Source camera.

## Instance Fields

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L354" sourceLabel="Camera.ts:354" />

_Inherited from `Camera#isOrthographic`_

**Overrides:&#x20;**`Camera#isOrthographic`

Returns current projection mode.

**Returns**

- `boolean` — `true` when orthographic projection is enabled.

<MemberHeading id="reversedepth" depth="3" name="reverseDepth" sig="reverseDepth" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L363" sourceLabel="Camera.ts:363" />

_Inherited from `Camera#reverseDepth`_

**Overrides:&#x20;**`Camera#reverseDepth`

Returns reverse depth flag.

**Returns**

- `boolean` — `true` when reverse depth mode is enabled.

<MemberHeading id="reversedepthactive" depth="3" name="reverseDepthActive" sig="reverseDepthActive" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L372" sourceLabel="Camera.ts:372" />

_Inherited from `Camera#reverseDepthActive`_

**Overrides:&#x20;**`Camera#reverseDepthActive`

Returns active reverse depth state.

**Returns**

- `boolean` — `true` for perspective reverse-Z mode.

<MemberHeading id="depthzerotoone" depth="3" name="depthZeroToOne" sig="depthZeroToOne" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L381" sourceLabel="Camera.ts:381" />

_Inherited from `Camera#depthZeroToOne`_

**Overrides:&#x20;**`Camera#depthZeroToOne`

Returns active depth range mode.

**Returns**

- `boolean` — `true` when ZERO\_TO\_ONE depth range is active.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L414" sourceLabel="Camera.ts:414" />

_Inherited from `Camera#focusDistance`_

**Overrides:&#x20;**`Camera#focusDistance`

Returns focus distance used for orthographic projection size.

**Returns**

- `number` — Focus distance.

<MemberHeading id="id" depth="3" name="id" sig="id" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L443" sourceLabel="Camera.ts:443" />

_Inherited from `Camera#id`_

**Overrides:&#x20;**`Camera#id`

Returns camera identifier.

**Returns**

- `number` — Camera id.

<MemberHeading id="width" depth="3" name="width" sig="width" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L784" sourceLabel="Camera.ts:784" />

_Inherited from `Camera#width`_

**Overrides:&#x20;**`Camera#width`

Returns viewport width.

**Returns**

- `number` — Viewport width in pixels.

<MemberHeading id="height" depth="3" name="height" sig="height" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L793" sourceLabel="Camera.ts:793" />

_Inherited from `Camera#height`_

**Overrides:&#x20;**`Camera#height`

Returns viewport height.

**Returns**

- `number` — Viewport height in pixels.

<MemberHeading id="viewangle" depth="3" name="viewAngle" sig="viewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L960" sourceLabel="Camera.ts:960" />

_Inherited from `Camera#viewAngle`_

**Overrides:&#x20;**`Camera#viewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="verticalviewangle" depth="3" name="verticalViewAngle" sig="verticalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L960" sourceLabel="Camera.ts:960" />

_Inherited from `Camera#verticalViewAngle`_

**Overrides:&#x20;**`Camera#verticalViewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="horizontalviewangle" depth="3" name="horizontalViewAngle" sig="horizontalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L969" sourceLabel="Camera.ts:969" />

_Inherited from `Camera#horizontalViewAngle`_

**Overrides:&#x20;**`Camera#horizontalViewAngle`

Returns camera horizontal view angle in degrees.

**Returns**

- `number` — Horizontal view angle.

<MemberHeading id="frustum" depth="3" name="frustum" sig="frustum" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1426" sourceLabel="Camera.ts:1426" />

_Inherited from `Camera#frustum`_

**Overrides:&#x20;**`Camera#frustum`

Returns current active frustum.

**Returns**

- [`Frustum`](/frustum) — Active frustum instance.
