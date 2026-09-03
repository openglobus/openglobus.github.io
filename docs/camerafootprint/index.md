---
title: CameraFootprint
kind: class
longname: CameraFootprint
description: "The ground area a camera sees: the four screen corners cast onto a reference surface and dropped onto the rendered terrain, plus the center, surface normals and radius derived from them. The reference surface is the planet ellipsoid raised to the terrain right under the camera, so that a camera on a mountain does not measure its footprint against sea level. Only the height under the camera is used, which keeps the footprint independent of how far the surrounding tiles have loaded."
---

# CameraFootprint

<SourceLink href="/source/utils/camerafootprint-ts/#L169" label="cameraFootprint.ts:169" />

The ground area a camera sees: the four screen corners cast onto a reference surface and dropped onto the rendered terrain, plus the center, surface normals and radius derived from them.

The reference surface is the planet ellipsoid raised to the terrain right under the camera, so that a camera on a mountain does not measure its footprint against sea level. Only the height under the camera is used, which keeps the footprint independent of how far the surrounding tiles have loaded.

---

## Constructor

<Signature code="new CameraFootprint(params): CameraFootprint" />

---

## Instance Methods

<MemberHeading id="update" depth="3" name="update" sig="update(camera: PlanetCamera): boolean" />

<MemberMeta sourceHref="/source/utils/camerafootprint-ts/#L235" sourceLabel="cameraFootprint.ts:235" />

Takes the footprint of the camera.

**Parameters**

- `camera` ([PlanetCamera](/planetcamera)) — Camera to take the footprint of.

**Returns**

- `boolean`

<MemberHeading id="getterrainheight" depth="3" name="_getTerrainHeight" sig="_getTerrainHeight()" />

<MemberMeta sourceHref="/source/utils/camerafootprint-ts/#L282" sourceLabel="cameraFootprint.ts:282" />

Level the reference ellipsoid is raised to: the terrain right under the camera, and nothing else.
