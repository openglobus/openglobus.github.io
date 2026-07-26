---
title: Sphere
kind: class
longname: Sphere
description: Bounding sphere class.
---

# Sphere

<SourceLink href="/source/bv/sphere-ts/#L13" label="Sphere.ts:13" />

Bounding sphere class.

---

## Constructor

<Signature code="new Sphere(radius?: Number, center?: Vec3): Sphere" />

**Parameters**

- `radius` (Number, optional) — Bounding sphere radius.
- `center` ([Vec3](/vec3), optional) — Bounding sphere coordinates.

---

## Instance Methods

<MemberHeading id="setfrombounds" depth="3" name="setFromBounds" sig="setFromBounds(bounds: Array.<number>)" />

<MemberMeta sourceHref="/source/bv/sphere-ts/#L38" sourceLabel="Sphere.ts:38" />

Sets bounding sphere coordinates by the bounds array.

**Parameters**

- `bounds` (Array.\<number>) — Bounds is an array where \[minX, minY, minZ, maxX, maxY, maxZ]

<MemberHeading id="setfromextent" depth="3" name="setFromExtent" sig="setFromExtent(ellipsoid: Ellipsoid, extent: Extent)" />

<MemberMeta sourceHref="/source/bv/sphere-ts/#L49" sourceLabel="Sphere.ts:49" />

Sets bounding sphere coordinates by ellipsoid geodetic extend.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Ellipsoid.
- `extent` ([Extent](/extent)) — Geodetic extent.
