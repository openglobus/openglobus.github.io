---
title: ShadowCameraFit
kind: class
longname: ShadowCameraFit
description: Places and sizes an orthographic depth camera over a camera footprint, so that the shadow map covers the ground the main camera sees, and everything that casts onto it, at the tightest texel the footprint allows. The fit holds state between frames - the texel grid step and the camera displacement - so one instance belongs to one depth camera.
---

# ShadowCameraFit

<SourceLink href="/source/utils/shadowcamerafit-ts/#L309" label="shadowCameraFit.ts:309" />

Places and sizes an orthographic depth camera over a camera footprint, so that the shadow map covers the ground the main camera sees, and everything that casts onto it, at the tightest texel the footprint allows.

The fit holds state between frames - the texel grid step and the camera displacement - so one instance belongs to one depth camera.

---

## Constructor

<Signature code="new ShadowCameraFit(params): ShadowCameraFit" />

---

## Instance Methods

<MemberHeading id="reset" depth="3" name="reset" sig="reset()" />

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L228" sourceLabel="shadowCameraFit.ts:228" />

Drops the state carried between frames, for a camera that has been teleported.

<MemberHeading
  id="fit"
  depth="3"
  name="fit"
  sig="fit(
	depthCamera: DepthCamera,
	footprint: CameraFootprint,
	sunPos: Vec3,
): boolean"
/>

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L386" sourceLabel="shadowCameraFit.ts:386" />

Places the depth camera over the footprint and sets its orthographic projection and depth biases.

**Parameters**

- `depthCamera` (DepthCamera) — Orthographic depth camera to fit.
- `footprint` ([CameraFootprint](/camerafootprint)) — Ground area to cover, taken of the main camera this frame.
- `sunPos` ([Vec3](/vec3)) — Sun position.

**Returns**

- `boolean`

<MemberHeading id="getterrainrelief" depth="3" name="_getTerrainRelief" sig="_getTerrainRelief()" />

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L312" sourceLabel="shadowCameraFit.ts:312" />

Returns how much higher and how much lower the terrain goes than the four footprint corners.

<MemberHeading id="getreceiverboundspoints" depth="3" name="_getReceiverBoundsPoints" sig="_getReceiverBoundsPoints()" />

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L509" sourceLabel="shadowCameraFit.ts:509" />

Returns the points the bounds are fitted to: the four footprint corners, plus the relief they hide, reached by walking each corner along its own view ray. Along the ray, because that is where the hidden terrain lies - pushing the corners sideways instead would widen the bounds for relief that is only ever an estimate.

<MemberHeading id="getcasterheight" depth="3" name="_getCasterHeight" sig="_getCasterHeight()" />

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L550" sourceLabel="shadowCameraFit.ts:550" />

Returns the caster height, rounded to a coarse step. It decides where the shadow camera stands, and a camera that jumps every time the terrain range is revised makes the whole map blink.

<MemberHeading id="quantizeorthotexelsize" depth="3" name="_quantizeOrthoTexelSize" sig="_quantizeOrthoTexelSize()" />

<MemberMeta sourceHref="/source/utils/shadowcamerafit-ts/#L588" sourceLabel="shadowCameraFit.ts:588" />

Returns the texel size to fit the extent onto, keeping the previous one while it is still large enough.
