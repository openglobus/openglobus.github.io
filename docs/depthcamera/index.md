---
title: DepthCamera
kind: class
longname: DepthCamera
description: Camera that renders a depth frame of the renderer scenes for projectors and shadow maps. The planets give it their terrain nodes, the scenes their 3D objects.
---

# DepthCamera

<SourceLink href="/source/renderer/depthcamera/depthcamera-ts/#L143" label="DepthCamera.ts:143" />

Camera that renders a depth frame of the renderer scenes for projectors and shadow maps. The planets give it their terrain nodes, the scenes their 3D objects.

---

## Constructor

<Signature code="new DepthCamera(options?: Object): DepthCamera" />

**Parameters**

- `options` (Object, optional) — Depth camera options:
  - `options.enabled` (boolean, optional, default: true) — Renders the depth frame. A disabled camera gets no planet nodes either.
  - `options.width` (number, optional, default: 512) — Depth frame width in pixels. Projectors and shadow maps need a square frame.
  - `options.height` (number, optional, default: 512) — Depth frame height in pixels.
  - `options.near` (number, optional, default: 100) — Near plane distance in meters.
  - `options.far` (number, optional, default: 100000) — Far plane distance in meters.
  - `options.verticalViewAngle` (number, optional, default: 45) — Vertical view angle in degrees.
  - `options.horizontalViewAngle` (number, optional) — Horizontal view angle in degrees. When set, the vertical one is taken from it and the frame aspect.
  - `options.isOrthographic` (boolean, optional, default: false) — Orthographic projection.
  - `options.focusDistance` (number, optional) — Distance at which the orthographic frame size is taken from the view angle. Default is the far distance.
  - `options.showFrustum` (boolean, optional, default: false) — Shows the camera frustum. Without a planet it is shown too.
  - `options.frustumLength` (number, optional, default: 2.5) — Size of the shown frustum, it is scaled with the distance.
  - `options.frustumColor` ([Vec4](/vec4) | Array.\<number> | string, optional, default: "\\"rgb(155, 255, 155, 0.2)\\"") — Shown frustum color.
  - `options.showFootprint` (boolean, optional, default: false) — Shows the frame border on the ground, only with a planet. The depth frame is read back every frame for it.
  - `options.enableSegmentFaceCulling` (boolean, optional, default: true) — Culls the back faces of the terrain segments.
  - `options.enableSegmentSkirts` (boolean, optional, default: false) — Not used for now: the terrain segments are drawn without skirts.
  - `options.excludeLayers` (Array.\<[Vector](/vector)>, optional) — Vector layers whose 3D objects are not drawn into the frame.
  - `options.excludeEntityCollections` (Array.\<[EntityCollection](/entitycollection)>, optional) — Entity collections whose 3D objects are not drawn into the frame.
  - `options.planet` ([Planet](/planet), optional) — Planet the camera is bound to: PlanetCamera, lon/lat coordinates, footprint. Default is the first planet of the renderer at its start, a planet added after the start has to be given here. The terrain nodes come from all the planets anyway.
  - `options.depthBiasWorld` (number, optional, default: 1) — Occlusion bias of the receivers in meters.
  - `options.normalBias` (number, optional, default: 0.45) — Offset of the receiver point along its normal in meters.
  - `options.lonLat` ([LonLat](/lonlat) | Array.\<number>, optional) — Start position with a planet, `[lon, lat, height]`. Without lonLat and eye the camera looks down at lon 0, lat 0 from the focus distance.
  - `options.lookLonLat` ([LonLat](/lonlat) | Array.\<number>, optional) — Point to look at with a planet, `[lon, lat, height]`.
  - `options.eye` ([Vec3](/vec3) | Array.\<number>, optional) — Start position in cartesian coordinates, also without a planet.
  - `options.look` ([Vec3](/vec3) | Array.\<number>, optional) — Point to look at in cartesian coordinates.
  - `options.up` ([Vec3](/vec3) | Array.\<number>, optional) — Up direction.
  - `options.pitch` (number, optional) — Start pitch in radians, applied after the position. With a planet the angles are in the planet local frame at the eye.
  - `options.yaw` (number, optional) — Start yaw in radians.
  - `options.roll` (number, optional) — Start roll in radians.

---

## Instance Methods

<MemberHeading id="init" depth="3" name="init" sig="init(planet: Planet | null, renderer: Renderer)" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamera-ts/#L392" sourceLabel="DepthCamera.ts:392" />

**Parameters**

- `planet` ([Planet](/planet) | null) — Default planet to bind the camera to when it has none.
- `renderer` ([Renderer](/renderer)) — Renderer.

<MemberHeading id="frame" depth="3" name="frame" sig="frame()" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamera-ts/#L426" sourceLabel="DepthCamera.ts:426" />

Renders the depth frame of all renderer scenes. Planets give the nodes they have collected for this camera, so it runs after the planet collection, and prepareFrame before it.

<MemberHeading id="quantizeorthotexelsize" depth="3" name="_quantizeOrthoTexelSize" sig="_quantizeOrthoTexelSize()" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamera-ts/#L633" sourceLabel="DepthCamera.ts:633" />

Quantizes the orthographic extent and keeps the previous size while it still fits to prevent jitter.

## Instance Fields

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamera-ts/#L269" sourceLabel="DepthCamera.ts:269" />

Planet the camera is geographically bound to (PlanetCamera, footprint, lon/lat), null without a planet.
