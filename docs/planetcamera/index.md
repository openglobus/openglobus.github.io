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

<MemberHeading id="viewextentheight" depth="3" name="_viewExtentHeight" sig="_viewExtentHeight(extent: Extent, height: number)" />

<MemberMeta badges="protected" sourceHref="/source/camera/planetcamera-ts/#L459" sourceLabel="PlanetCamera.ts:459" />

Places the camera over the extent center at the given ground height.

**Parameters**

- `extent` ([Extent](/extent)) — Extent to fit.
- `height` (number) — Ground height under the extent center.

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

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L472" sourceLabel="PlanetCamera.ts:472" />

Flies to the current extent.

**Parameters**

- `extent` ([Extent](/extent)) — Current extent.
- `height` (number, optional) — Destination height.
- `params` (IPlanetFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="viewdistance" depth="3" name="viewDistance" sig="viewDistance(cartesian: Vec3, distance?: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L510" sourceLabel="PlanetCamera.ts:510" />

**Overrides:&#x20;**`Camera#viewDistance`

Places camera at a fixed distance from a target point and looks at it.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.

<MemberHeading id="flylonlat" depth="3" name="flyLonLat" sig="flyLonLat(lonlat: LonLat, params?: IPlanetFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L531" sourceLabel="PlanetCamera.ts:531" />

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

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L543" sourceLabel="PlanetCamera.ts:543" />

Flies camera to a position at a fixed distance from the target point.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Target cartesian point.
- `distance` (number, optional, default: "10000.0") — Distance from the target.
- `params` (IPlanetFlyCartesianParams, optional) — Flight parameters.

<MemberHeading id="rotateleft" depth="3" name="rotateLeft" sig="rotateLeft(angle: number, spin?: boolean)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L706" sourceLabel="PlanetCamera.ts:706" />

Rotates around planet to the left.

**Parameters**

- `angle` (number) — Rotation angle.
- `spin` (boolean, optional) — If its true rotates around globe spin.

<MemberHeading id="rotateright" depth="3" name="rotateRight" sig="rotateRight(angle: number, spin?: boolean)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L717" sourceLabel="PlanetCamera.ts:717" />

Rotates around planet to the right.

**Parameters**

- `angle` (number) — Rotation angle.
- `spin` (boolean, optional) — If its true rotates around globe spin.

<MemberHeading id="rotateup" depth="3" name="rotateUp" sig="rotateUp(angle: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L727" sourceLabel="PlanetCamera.ts:727" />

Rotates around planet to the North Pole.

**Parameters**

- `angle` (number) — Rotation angle.

<MemberHeading id="rotatedown" depth="3" name="rotateDown" sig="rotateDown(angle: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L737" sourceLabel="PlanetCamera.ts:737" />

Rotates around planet to the South Pole.

**Parameters**

- `angle` (number) — Rotation angle.

<MemberHeading id="rotatevertical" depth="3" name="rotateVertical" sig="rotateVertical(angle: number, center: Vec3, minSlope?: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L749" sourceLabel="PlanetCamera.ts:749" />

**Overrides:&#x20;**`Camera#rotateVertical`

Rotates camera vertically around the given center.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `center` ([Vec3](/vec3)) — Rotation center.
- `minSlope` (number, optional, default: 0) — Minimum allowed slope limit.

<MemberHeading id="checkterraincollision" depth="3" name="checkTerrainCollision" sig="checkTerrainCollision(): Vec3 | undefined" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L788" sourceLabel="PlanetCamera.ts:788" />

Updates terrain altitude and keeps camera above minimum altitude.

**Returns**

- [`Vec3`](/vec3)` | undefined` — Terrain point under camera when available.

<MemberHeading id="getsurfacevisibledistance" depth="3" name="getSurfaceVisibleDistance" sig="getSurfaceVisibleDistance(d: number): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L833" sourceLabel="PlanetCamera.ts:833" />

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

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L846" sourceLabel="PlanetCamera.ts:846" />

Returns the ellipsoid intersection point for a screen-space ray. If the ray doesn't hit ellipsoid, it returns 'undefined'.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Vec3`](/vec3)` | undefined` — Cartesian intersection point.

<MemberHeading id="getheading" depth="3" name="getHeading" sig="getHeading(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L857" sourceLabel="PlanetCamera.ts:857" />

Returns heading angle in degrees. Should match `getYaw()` in most cases.

**Returns**

- `number` — Heading in `[0, 360)` degrees.

<MemberHeading id="isvisible" depth="3" name="isVisible" sig="isVisible(poi: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L874" sourceLabel="PlanetCamera.ts:874" />

Checks whether a cartesian point is visible above the horizon.

**Parameters**

- `poi` ([Vec3](/vec3)) — Point in cartesian coordinates.

**Returns**

- `boolean` — `true` when the point is visible.

<MemberHeading id="getpitch" depth="3" name="getPitch" sig="getPitch(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L884" sourceLabel="PlanetCamera.ts:884" />

**Overrides:&#x20;**`Camera#getPitch`

Returns pitch angle in local planet frame.

**Returns**

- `number` — Pitch angle in radians.

<MemberHeading id="getyaw" depth="3" name="getYaw" sig="getYaw(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L895" sourceLabel="PlanetCamera.ts:895" />

**Overrides:&#x20;**`Camera#getYaw`

Returns yaw angle in local planet frame. Should match `getHeading()` in most cases.

**Returns**

- `number` — Yaw angle in radians.

<MemberHeading id="getroll" depth="3" name="getRoll" sig="getRoll(): number" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L905" sourceLabel="PlanetCamera.ts:905" />

**Overrides:&#x20;**`Camera#getRoll`

Returns roll angle in local planet frame.

**Returns**

- `number` — Roll angle in radians.

<MemberHeading id="setpitch" depth="3" name="setPitch" sig="setPitch(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L915" sourceLabel="PlanetCamera.ts:915" />

**Overrides:&#x20;**`Camera#setPitch`

Sets pitch angle in local planet frame.

**Parameters**

- `a` (number) — Pitch angle in radians.

<MemberHeading id="setyaw" depth="3" name="setYaw" sig="setYaw(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L927" sourceLabel="PlanetCamera.ts:927" />

**Overrides:&#x20;**`Camera#setYaw`

Sets yaw angle in local planet frame.

**Parameters**

- `a` (number) — Yaw angle in radians.

<MemberHeading id="setroll" depth="3" name="setRoll" sig="setRoll(a: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L939" sourceLabel="PlanetCamera.ts:939" />

**Overrides:&#x20;**`Camera#setRoll`

Sets roll angle in local planet frame.

**Parameters**

- `a` (number) — Roll angle in radians.

<MemberHeading id="setpitchyawroll" depth="3" name="setPitchYawRoll" sig="setPitchYawRoll(pitch: number, yaw: number, roll: number)" />

<MemberMeta sourceHref="/source/camera/planetcamera-ts/#L953" sourceLabel="PlanetCamera.ts:953" />

**Overrides:&#x20;**`Camera#setPitchYawRoll`

Sets orientation from pitch, yaw and roll in local planet frame.

**Parameters**

- `pitch` (number) — Pitch angle in radians.
- `yaw` (number) — Yaw angle in radians.
- `roll` (number) — Roll angle in radians.

<MemberHeading id="setdepthzerotoone" depth="3" name="setDepthZeroToOne" sig="setDepthZeroToOne(enabled: boolean)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L399" sourceLabel="Camera.ts:399" />

_Inherited from `Camera#setDepthZeroToOne`_

**Overrides:&#x20;**`Camera#setDepthZeroToOne`

Enables or disables ZERO\_TO\_ONE depth range mode.

**Parameters**

- `enabled` (boolean) — Depth range mode flag.

<MemberHeading id="setorthofocus" depth="3" name="_setOrthoFocus" sig="_setOrthoFocus(distance?: number)" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L452" sourceLabel="Camera.ts:452" />

_Inherited from `Camera#_setOrthoFocus`_

**Overrides:&#x20;**`Camera#_setOrthoFocus`

Keeps the orthographic scale on whatever the camera has just been aimed at.

**Parameters**

- `distance` (number, optional) — Distance from the eye to the point in view.

<MemberHeading id="flycartesian" depth="3" name="flyCartesian" sig="flyCartesian(cartesian?: Vec3, params?: IFlyCartesianParams)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L472" sourceLabel="Camera.ts:472" />

_Inherited from `Camera#flyCartesian`_

**Overrides:&#x20;**`Camera#flyCartesian`

Flies to the cartesian coordinates.

**Parameters**

- `cartesian` ([Vec3](/vec3), optional) — Finish cartesian coordinates.
- `params` (IFlyCartesianParams, optional) — Flight parameters

<MemberHeading id="stopflying" depth="3" name="stopFlying" sig="stopFlying()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L541" sourceLabel="Camera.ts:541" />

_Inherited from `Camera#stopFlying`_

**Overrides:&#x20;**`Camera#stopFlying`

Breaks the flight.

<MemberHeading id="checkfly" depth="3" name="checkFly" sig="checkFly()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L555" sourceLabel="Camera.ts:555" />

_Inherited from `Camera#checkFly`_

**Overrides:&#x20;**`Camera#checkFly`

Prepare camera to the frame. Used in render node frame function.

<MemberHeading id="isflying" depth="3" name="isFlying" sig="isFlying(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L590" sourceLabel="Camera.ts:590" />

_Inherited from `Camera#isFlying`_

**Overrides:&#x20;**`Camera#isFlying`

Returns camera is flying.

**Returns**

- `boolean`

<MemberHeading id="checkviewchanges" depth="3" name="checkViewChanges" sig="checkViewChanges()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L598" sourceLabel="Camera.ts:598" />

_Inherited from `Camera#checkViewChanges`_

**Overrides:&#x20;**`Camera#checkViewChanges`

Checks camera movement and projection changes.

<MemberHeading id="checkmoveend" depth="3" name="checkMoveEnd" sig="checkMoveEnd(): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L608" sourceLabel="Camera.ts:608" />

_Inherited from `Camera#checkMoveEnd`_

**Overrides:&#x20;**`Camera#checkMoveEnd`

Checks whether the camera stopped moving and dispatches `moveend`.

**Returns**

- `boolean` — `true` when the camera is moving after the check.

<MemberHeading id="checkviewchange" depth="3" name="_checkViewChange" sig="_checkViewChange()" />

<MemberMeta badges="protected" sourceHref="/source/camera/camera-ts/#L636" sourceLabel="Camera.ts:636" />

_Inherited from `Camera#_checkViewChange`_

**Overrides:&#x20;**`Camera#_checkViewChange`

Checks whether the camera view or projection changed and dispatches `viewchange`.

<MemberHeading id="bindfrustumspickingcolors" depth="3" name="bindFrustumsPickingColors" sig="bindFrustumsPickingColors(renderer: Renderer)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L665" sourceLabel="Camera.ts:665" />

_Inherited from `Camera#bindFrustumsPickingColors`_

**Overrides:&#x20;**`Camera#bindFrustumsPickingColors`

Binds picking colors for all frustums.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Renderer instance.

<MemberHeading id="init" depth="3" name="_init" sig="_init(options?: Object)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L683" sourceLabel="Camera.ts:683" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L698" sourceLabel="Camera.ts:698" />

_Inherited from `Camera#getUp`_

**Overrides:&#x20;**`Camera#getUp`

Returns up direction vector.

**Returns**

- [`Vec3`](/vec3) — Up direction.

<MemberHeading id="getdown" depth="3" name="getDown" sig="getDown(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L707" sourceLabel="Camera.ts:707" />

_Inherited from `Camera#getDown`_

**Overrides:&#x20;**`Camera#getDown`

Returns down direction vector.

**Returns**

- [`Vec3`](/vec3) — Down direction.

<MemberHeading id="getright" depth="3" name="getRight" sig="getRight(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L716" sourceLabel="Camera.ts:716" />

_Inherited from `Camera#getRight`_

**Overrides:&#x20;**`Camera#getRight`

Returns right direction vector.

**Returns**

- [`Vec3`](/vec3) — Right direction.

<MemberHeading id="getleft" depth="3" name="getLeft" sig="getLeft(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L725" sourceLabel="Camera.ts:725" />

_Inherited from `Camera#getLeft`_

**Overrides:&#x20;**`Camera#getLeft`

Returns left direction vector.

**Returns**

- [`Vec3`](/vec3) — Left direction.

<MemberHeading id="getforward" depth="3" name="getForward" sig="getForward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L734" sourceLabel="Camera.ts:734" />

_Inherited from `Camera#getForward`_

**Overrides:&#x20;**`Camera#getForward`

Returns forward direction vector.

**Returns**

- [`Vec3`](/vec3) — Forward direction.

<MemberHeading id="getbackward" depth="3" name="getBackward" sig="getBackward(): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L743" sourceLabel="Camera.ts:743" />

_Inherited from `Camera#getBackward`_

**Overrides:&#x20;**`Camera#getBackward`

Returns backward direction vector.

**Returns**

- [`Vec3`](/vec3) — Backward direction.

<MemberHeading id="refresh" depth="3" name="refresh" sig="refresh()" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L803" sourceLabel="Camera.ts:803" />

_Inherited from `Camera#refresh`_

**Overrides:&#x20;**`Camera#refresh`

Refresh camera matrices

<MemberHeading id="setviewportsize" depth="3" name="setViewportSize" sig="setViewportSize(width: number, height: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L833" sourceLabel="Camera.ts:833" />

_Inherited from `Camera#setViewportSize`_

**Overrides:&#x20;**`Camera#setViewportSize`

Sets viewport size and updates projection.

**Parameters**

- `width` (number) — Viewport width in pixels.
- `height` (number) — Viewport height in pixels.

<MemberHeading id="getaspectratio" depth="3" name="getAspectRatio" sig="getAspectRatio(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L844" sourceLabel="Camera.ts:844" />

_Inherited from `Camera#getAspectRatio`_

**Overrides:&#x20;**`Camera#getAspectRatio`

Returns aspect ratio.

**Returns**

- `number` — Aspect ratio.

<MemberHeading id="setproj" depth="3" name="_setProj" sig="_setProj(viewAngle: number, aspect: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L854" sourceLabel="Camera.ts:854" />

_Inherited from `Camera#_setProj`_

**Overrides:&#x20;**`Camera#_setProj`

Sets camera projection.

**Parameters**

- `viewAngle` (number) — Camera view angle.
- `aspect` (number) — Screen aspect ratio.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number, frustumIndex?: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L880" sourceLabel="Camera.ts:880" />

_Inherited from `Camera#setNearFar`_

**Overrides:&#x20;**`Camera#setNearFar`

Updates near/far planes for one frustum.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional) — Far clipping plane distance.
- `frustumIndex` (number, optional, default: 0) — Frustum index.

<MemberHeading id="setfrustums" depth="3" name="setFrustums" sig="setFrustums(frustums: Array.<NumberArray2>)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L889" sourceLabel="Camera.ts:889" />

_Inherited from `Camera#setFrustums`_

**Overrides:&#x20;**`Camera#setFrustums`

Replaces camera frustum ranges.

**Parameters**

- `frustums` (Array.\<NumberArray2>) — Array of `[near, far]` ranges.

<MemberHeading id="setviewangle" depth="3" name="setViewAngle" sig="setViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L952" sourceLabel="Camera.ts:952" />

_Inherited from `Camera#setViewAngle`_

**Overrides:&#x20;**`Camera#setViewAngle`

Sets camera view angle in degrees

**Parameters**

- `angle` (number) — View angle

<MemberHeading id="sethorizontalviewangle" depth="3" name="setHorizontalViewAngle" sig="setHorizontalViewAngle(angle: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L962" sourceLabel="Camera.ts:962" />

_Inherited from `Camera#setHorizontalViewAngle`_

**Overrides:&#x20;**`Camera#setHorizontalViewAngle`

Sets camera horizontal view angle in degrees.

**Parameters**

- `angle` (number) — Horizontal view angle.

<MemberHeading id="getviewangle" depth="3" name="getViewAngle" sig="getViewAngle(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L972" sourceLabel="Camera.ts:972" />

_Inherited from `Camera#getViewAngle`_

**Overrides:&#x20;**`Camera#getViewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — View angle in degrees.

<MemberHeading id="set" depth="3" name="set" sig="set(eye: Vec3, look: Vec3, up: Vec3): Camera" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1011" sourceLabel="Camera.ts:1011" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1034" sourceLabel="Camera.ts:1034" />

_Inherited from `Camera#look`_

**Overrides:&#x20;**`Camera#look`

Sets camera look point

**Parameters**

- `look` ([Vec3](/vec3)) — Look point
- `up` ([Vec3](/vec3), optional) — Camera up vector otherwise camera current up vector(this.\_u)

<MemberHeading id="slide" depth="3" name="slide" sig="slide(du: number, dv: number, dn: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1050" sourceLabel="Camera.ts:1050" />

_Inherited from `Camera#slide`_

**Overrides:&#x20;**`Camera#slide`

Slides camera to vector d - (du, dv, dn)

**Parameters**

- `du` (number) — delta X
- `dv` (number) — delta Y
- `dn` (number) — delta Z

<MemberHeading id="getabsolutepitch" depth="3" name="getAbsolutePitch" sig="getAbsolutePitch(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1140" sourceLabel="Camera.ts:1140" />

_Inherited from `Camera#getAbsolutePitch`_

**Overrides:&#x20;**`Camera#getAbsolutePitch`

Returns absolute pitch angle.

**Returns**

- `number` — Absolute pitch angle in radians.

<MemberHeading id="getabsoluteyaw" depth="3" name="getAbsoluteYaw" sig="getAbsoluteYaw(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1149" sourceLabel="Camera.ts:1149" />

_Inherited from `Camera#getAbsoluteYaw`_

**Overrides:&#x20;**`Camera#getAbsoluteYaw`

Returns absolute yaw angle.

**Returns**

- `number` — Absolute yaw angle in radians.

<MemberHeading id="getabsoluteroll" depth="3" name="getAbsoluteRoll" sig="getAbsoluteRoll(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1158" sourceLabel="Camera.ts:1158" />

_Inherited from `Camera#getAbsoluteRoll`_

**Overrides:&#x20;**`Camera#getAbsoluteRoll`

Returns absolute roll angle.

**Returns**

- `number` — Absolute roll angle in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1167" sourceLabel="Camera.ts:1167" />

_Inherited from `Camera#getRotation`_

**Overrides:&#x20;**`Camera#getRotation`

Returns camera rotation quaternion.

**Returns**

- [`Quat`](/quat) — Camera rotation quaternion.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rot: Quat, up?: Vec3, right?: Vec3, back?: Vec3)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1179" sourceLabel="Camera.ts:1179" />

_Inherited from `Camera#setRotation`_

**Overrides:&#x20;**`Camera#setRotation`

Sets camera orientation from a quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.
- `up` ([Vec3](/vec3), optional) — Base up vector.
- `right` ([Vec3](/vec3), optional) — Base right vector.
- `back` ([Vec3](/vec3), optional) — Base backward vector.

<MemberHeading id="rotate" depth="3" name="rotate" sig="rotate(rot: Quat)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1191" sourceLabel="Camera.ts:1191" />

_Inherited from `Camera#rotate`_

**Overrides:&#x20;**`Camera#rotate`

Rotates current camera basis by quaternion.

**Parameters**

- `rot` ([Quat](/quat)) — Rotation quaternion.

<MemberHeading id="unproject2v" depth="3" name="unproject2v" sig="unproject2v(pos: Vec2, dist?: number, outPos?: Vec3): Vec3" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1206" sourceLabel="Camera.ts:1206" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1219" sourceLabel="Camera.ts:1219" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1274" sourceLabel="Camera.ts:1274" />

_Inherited from `Camera#getRay`_

**Overrides:&#x20;**`Camera#getRay`

Returns a world-space ray corresponding to the given screen point. For perspective camera the ray shares camera eye as origin. For orthographic camera the origin is offset across the view plane, and the direction equals the camera forward vector.

**Parameters**

- `x` (number) — Screen X coordinate in pixels.
- `y` (number) — Screen Y coordinate in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="getray2v" depth="3" name="getRay2v" sig="getRay2v(pos: Vec2): Ray" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1295" sourceLabel="Camera.ts:1295" />

_Inherited from `Camera#getRay2v`_

**Overrides:&#x20;**`Camera#getRay2v`

Returns a world-space ray corresponding to the given screen point.

**Parameters**

- `pos` ([Vec2](/vec2)) — Screen coordinates in pixels.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="project3v" depth="3" name="project3v" sig="project3v(v: Vec3): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1305" sourceLabel="Camera.ts:1305" />

_Inherited from `Camera#project3v`_

**Overrides:&#x20;**`Camera#project3v`

Gets projected 3d point to the 2d screen coordinates

**Parameters**

- `v` ([Vec3](/vec3)) — Cartesian 3d coordinates

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="project" depth="3" name="project" sig="project(x: number, y: number, z: number): Vec2" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1317" sourceLabel="Camera.ts:1317" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1331" sourceLabel="Camera.ts:1331" />

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

<MemberMeta sourceHref="/source/camera/camera-ts/#L1351" sourceLabel="Camera.ts:1351" />

_Inherited from `Camera#rotateHorizontal`_

**Overrides:&#x20;**`Camera#rotateHorizontal`

Rotates camera around the center point by horizontal.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `isArc` (boolean, optional) — If true camera up vector gets from current up vector every frame, otherwise up is always input parameter.
- `center` ([Vec3](/vec3), optional) — Point that the camera rotates around.
- `up` ([Vec3](/vec3), optional) — Camera up vector.

<MemberHeading id="projectedsize" depth="3" name="projectedSize" sig="projectedSize(p: Vec3, r: Vec3): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1372" sourceLabel="Camera.ts:1372" />

_Inherited from `Camera#projectedSize`_

**Overrides:&#x20;**`Camera#projectedSize`

Gets 3d size factor. Uses in LOD distance calculation. It is a very important function used in Node.ts

**Parameters**

- `p` ([Vec3](/vec3)) — Point in 3d.
- `r` ([Vec3](/vec3)) — size.

**Returns**

- `number`

<MemberHeading id="getviewmatrix" depth="3" name="getViewMatrix" sig="getViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1388" sourceLabel="Camera.ts:1388" />

_Inherited from `Camera#getViewMatrix`_

**Overrides:&#x20;**`Camera#getViewMatrix`

Returns model matrix.

**Returns**

- `NumberArray16`

<MemberHeading id="getnormalmatrix" depth="3" name="getNormalMatrix" sig="getNormalMatrix(): NumberArray9" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1397" sourceLabel="Camera.ts:1397" />

_Inherited from `Camera#getNormalMatrix`_

**Overrides:&#x20;**`Camera#getNormalMatrix`

Returns camera normal matrix.

**Returns**

- `NumberArray9`

<MemberHeading id="setcurrentfrustum" depth="3" name="setCurrentFrustum" sig="setCurrentFrustum(k: number)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1406" sourceLabel="Camera.ts:1406" />

_Inherited from `Camera#setCurrentFrustum`_

**Overrides:&#x20;**`Camera#setCurrentFrustum`

Sets current active frustum index.

**Parameters**

- `k` (number) — Frustum index.

<MemberHeading id="getcurrentfrustum" depth="3" name="getCurrentFrustum" sig="getCurrentFrustum(): number" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1417" sourceLabel="Camera.ts:1417" />

_Inherited from `Camera#getCurrentFrustum`_

**Overrides:&#x20;**`Camera#getCurrentFrustum`

Returns current active frustum index.

**Returns**

- `number` — Current frustum index.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1427" sourceLabel="Camera.ts:1427" />

_Inherited from `Camera#containsSphere`_

**Overrides:&#x20;**`Camera#containsSphere`

Checks whether the sphere intersects any camera frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1442" sourceLabel="Camera.ts:1442" />

_Inherited from `Camera#containsPoint`_

**Overrides:&#x20;**`Camera#containsPoint`

Checks whether a point is inside any camera frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when visible in at least one frustum.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1465" sourceLabel="Camera.ts:1465" />

_Inherited from `Camera#getProjectionMatrix`_

**Overrides:&#x20;**`Camera#getProjectionMatrix`

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1474" sourceLabel="Camera.ts:1474" />

_Inherited from `Camera#getProjectionViewMatrix`_

**Overrides:&#x20;**`Camera#getProjectionViewMatrix`

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1483" sourceLabel="Camera.ts:1483" />

_Inherited from `Camera#getProjectionViewRTEMatrix`_

**Overrides:&#x20;**`Camera#getProjectionViewRTEMatrix`

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix.

<MemberHeading id="getinverseprojectionviewmatrix" depth="3" name="getInverseProjectionViewMatrix" sig="getInverseProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1492" sourceLabel="Camera.ts:1492" />

_Inherited from `Camera#getInverseProjectionViewMatrix`_

**Overrides:&#x20;**`Camera#getInverseProjectionViewMatrix`

Returns inverse projection-view matrix.

**Returns**

- `NumberArray16` — Inverse projection-view matrix.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1501" sourceLabel="Camera.ts:1501" />

_Inherited from `Camera#getInverseProjectionMatrix`_

**Overrides:&#x20;**`Camera#getInverseProjectionMatrix`

Returns inverse projection matrix.

**Returns**

- `NumberArray16` — Inverse projection matrix.

<MemberHeading id="copy" depth="3" name="copy" sig="copy(cam: Camera)" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1523" sourceLabel="Camera.ts:1523" />

_Inherited from `Camera#copy`_

**Overrides:&#x20;**`Camera#copy`

Copies camera pose and projection settings from another camera.

**Parameters**

- `cam` ([Camera](/camera)) — Source camera.

## Instance Fields

<MemberHeading id="isorthographic" depth="3" name="isOrthographic" sig="isOrthographic" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L363" sourceLabel="Camera.ts:363" />

_Inherited from `Camera#isOrthographic`_

**Overrides:&#x20;**`Camera#isOrthographic`

Returns current projection mode.

**Returns**

- `boolean` — `true` when orthographic projection is enabled.

<MemberHeading id="reversedepth" depth="3" name="reverseDepth" sig="reverseDepth" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L372" sourceLabel="Camera.ts:372" />

_Inherited from `Camera#reverseDepth`_

**Overrides:&#x20;**`Camera#reverseDepth`

Returns reverse depth flag.

**Returns**

- `boolean` — `true` when reverse depth mode is enabled.

<MemberHeading id="reversedepthactive" depth="3" name="reverseDepthActive" sig="reverseDepthActive" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L381" sourceLabel="Camera.ts:381" />

_Inherited from `Camera#reverseDepthActive`_

**Overrides:&#x20;**`Camera#reverseDepthActive`

Returns active reverse depth state.

**Returns**

- `boolean` — `true` for perspective reverse-Z mode.

<MemberHeading id="depthzerotoone" depth="3" name="depthZeroToOne" sig="depthZeroToOne" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L390" sourceLabel="Camera.ts:390" />

_Inherited from `Camera#depthZeroToOne`_

**Overrides:&#x20;**`Camera#depthZeroToOne`

Returns active depth range mode.

**Returns**

- `boolean` — `true` when ZERO\_TO\_ONE depth range is active.

<MemberHeading id="focusdistance" depth="3" name="focusDistance" sig="focusDistance" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L423" sourceLabel="Camera.ts:423" />

_Inherited from `Camera#focusDistance`_

**Overrides:&#x20;**`Camera#focusDistance`

Returns focus distance used for orthographic projection size.

**Returns**

- `number` — Focus distance.

<MemberHeading id="id" depth="3" name="id" sig="id" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L462" sourceLabel="Camera.ts:462" />

_Inherited from `Camera#id`_

**Overrides:&#x20;**`Camera#id`

Returns camera identifier.

**Returns**

- `number` — Camera id.

<MemberHeading id="width" depth="3" name="width" sig="width" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L814" sourceLabel="Camera.ts:814" />

_Inherited from `Camera#width`_

**Overrides:&#x20;**`Camera#width`

Returns viewport width.

**Returns**

- `number` — Viewport width in pixels.

<MemberHeading id="height" depth="3" name="height" sig="height" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L823" sourceLabel="Camera.ts:823" />

_Inherited from `Camera#height`_

**Overrides:&#x20;**`Camera#height`

Returns viewport height.

**Returns**

- `number` — Viewport height in pixels.

<MemberHeading id="viewangle" depth="3" name="viewAngle" sig="viewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L990" sourceLabel="Camera.ts:990" />

_Inherited from `Camera#viewAngle`_

**Overrides:&#x20;**`Camera#viewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="verticalviewangle" depth="3" name="verticalViewAngle" sig="verticalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L990" sourceLabel="Camera.ts:990" />

_Inherited from `Camera#verticalViewAngle`_

**Overrides:&#x20;**`Camera#verticalViewAngle`

Returns camera vertical view angle in degrees.

**Returns**

- `number` — Vertical view angle.

<MemberHeading id="horizontalviewangle" depth="3" name="horizontalViewAngle" sig="horizontalViewAngle" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L999" sourceLabel="Camera.ts:999" />

_Inherited from `Camera#horizontalViewAngle`_

**Overrides:&#x20;**`Camera#horizontalViewAngle`

Returns camera horizontal view angle in degrees.

**Returns**

- `number` — Horizontal view angle.

<MemberHeading id="frustum" depth="3" name="frustum" sig="frustum" />

<MemberMeta sourceHref="/source/camera/camera-ts/#L1456" sourceLabel="Camera.ts:1456" />

_Inherited from `Camera#frustum`_

**Overrides:&#x20;**`Camera#frustum`

Returns current active frustum.

**Returns**

- [`Frustum`](/frustum) — Active frustum instance.
