---
title: CubeProj
kind: class
longname: module:og/proj/cube~CubeProj
description: "Projection of a cube inflated to the ellipsoid. Native coordinates of a point: lon is the face index plus the position from west to east, lat is the position from south to north, both positions are from 0 to 1."
---

# CubeProj

**Extends:&#x20;**`Proj`

<SourceLink href="/source/proj/cube-ts/#L111" label="cube.ts:111" />

Projection of a cube inflated to the ellipsoid. Native coordinates of a point: lon is the face index plus the position from west to east, lat is the position from south to north, both positions are from 0 to 1.

---

## Constructor

<Signature code="new CubeProj(code: string, equiangular: boolean): CubeProj" />

**Parameters**

- `code` (string) — Projection code.
- `equiangular` (boolean) — True when equal steps on a face are equal angles, false when they are equal distances on the plane of the face, as in a common cube map.

---

## Instance Methods

<MemberHeading id="toplane" depth="3" name="toPlane" sig="toPlane(position: number): number" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L130" sourceLabel="cube.ts:130" />

Returns the coordinate on the plane of a face, from -1 to 1, of the position on it, from 0 to 1.

**Parameters**

- `position` (number) — Position on the face.

**Returns**

- `number`

<MemberHeading id="fromplane" depth="3" name="fromPlane" sig="fromPlane(coordinate: number): number" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L141" sourceLabel="cube.ts:141" />

Returns the position on a face, from 0 to 1, of the coordinate on its plane, from -1 to 1. It goes on beyond the face for a coordinate beyond it.

**Parameters**

- `coordinate` (number) — Coordinate on the face plane.

**Returns**

- `number`

<MemberHeading id="tolonlat" depth="3" name="toLonLat" sig="toLonLat(lon: number, lat: number, face?: number): LonLat" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L155" sourceLabel="cube.ts:155" />

Returns the geodetic coordinates of the point on the cube. The direction of the cube point is the surface normal of the ellipsoid in it.

**Parameters**

- `lon` (number) — Native longitude.
- `lat` (number) — Native latitude.
- `face` (number, optional) — Face index, it is needed on the east edge of a face: the longitude is the next face there.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="fromlonlat" depth="3" name="fromLonLat" sig="fromLonLat(lonLat: LonLat): LonLat" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L172" sourceLabel="cube.ts:172" />

Returns the native coordinates of the geodetic point.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="equal" depth="3" name="equal" sig="equal(proj: Proj): boolean" />

<MemberMeta sourceHref="/source/proj/proj-ts/#L57" sourceLabel="Proj.ts:57" />

_Inherited from `Proj#equal`_

**Overrides:&#x20;**`Proj#equal`

Compare projections.

**Parameters**

- `proj` (Proj) — Projection object.

**Returns**

- `boolean`
