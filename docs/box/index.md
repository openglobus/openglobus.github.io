---
title: Box
kind: class
longname: Box
description: Bounding box class.
---

# Box

<SourceLink href="/source/bv/box-ts/#L13" label="Box.ts:13" />

Bounding box class.

---

## Constructor

<Signature code="new Box(boundsArr?: NumberArray6): Box" />

**Parameters**

- `boundsArr` (NumberArray6, optional)

---

## Instance Methods

<MemberHeading id="setfromboundsarr" depth="3" name="setFromBoundsArr" sig="setFromBoundsArr(bounds: NumberArray6)" />

<MemberMeta sourceHref="/source/bv/box-ts/#L48" sourceLabel="Box.ts:48" />

Sets bounding box coordinates by the bounds array.

**Parameters**

- `bounds` (NumberArray6) — Bounds is an array where \[minX, minY, minZ, maxX, maxY, maxZ]

<MemberHeading id="setfromextent" depth="3" name="setFromExtent" sig="setFromExtent(ellipsoid: Ellipsoid, extent: Extent)" />

<MemberMeta sourceHref="/source/bv/box-ts/#L73" sourceLabel="Box.ts:73" />

Sets bounding box coordinates by ellipsoid geodetic extend.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Ellipsoid.
- `extent` ([Extent](/extent)) — Geodetic extent.
