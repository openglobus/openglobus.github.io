---
title: CascadeShadowDepthCamera
kind: class
longname: CascadeShadowDepthCamera
description: "Depth camera of a cascade shadow map: one orthographic camera, a frustum per cascade. The planet collects the nodes for all the cascades in one traversal, and every cascade is drawn into its own layer of the cascade shadow map depth texture array."
---

# CascadeShadowDepthCamera

<SourceLink href="/source/renderer/cascadeshadows/cascadeshadowdepthcamera-ts/#L14" label="CascadeShadowDepthCamera.ts:14" />

Depth camera of a cascade shadow map: one orthographic camera, a frustum per cascade. The planet collects the nodes for all the cascades in one traversal, and every cascade is drawn into its own layer of the cascade shadow map depth texture array.

---

## Constructor

<Signature
  code="new CascadeShadowDepthCamera(
	cascadeShadowMap,
): CascadeShadowDepthCamera"
/>

---

## Instance Methods

<MemberHeading id="prepareframe" depth="3" name="prepareFrame" sig="prepareFrame()" />

<MemberMeta sourceHref="/source/renderer/cascadeshadows/cascadeshadowdepthcamera-ts/#L35" sourceLabel="CascadeShadowDepthCamera.ts:35" />

Fits the cascades to the main camera and the light, before the planets collect the nodes.
