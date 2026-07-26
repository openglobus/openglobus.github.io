---
title: Ellipsoid
kind: class
longname: Ellipsoid
description: Class represents a plant ellipsoid.
---

# Ellipsoid

<SourceLink href="/source/ellipsoid/ellipsoid-ts/#L23" label="Ellipsoid.ts:23" />

Class represents a plant ellipsoid.

---

## Constructor

<Signature
  code="new Ellipsoid(
	equatorialSize: number,
	polarSize: number,
): Ellipsoid"
/>

**Parameters**

- `equatorialSize` (number) — Equatorial ellipsoid size.
- `polarSize` (number) — Polar ellipsoid size.

---

## Instance Methods

<MemberHeading id="rhumbdistanceto" depth="3" name="rhumbDistanceTo" sig="rhumbDistanceTo(startLonLat: LonLat, endLonLat: LonLat): number" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L81" sourceLabel="Ellipsoid.ts:81" />

Returns the distance travelling from ‘this’ point to destination point along a rhumb line.

**Parameters**

- `startLonLat` ([LonLat](/lonlat)) — coordinates.
- `endLonLat` ([LonLat](/lonlat)) — coordinates

**Returns**

- `number` — Distance in m between this point and destination point (same units as radius).

<MemberHeading
  id="getintermediatepointongreatcircle"
  depth="3"
  name="getIntermediatePointOnGreatCircle"
  sig="getIntermediatePointOnGreatCircle(
	lonLat1: LonLat,
	lonLat2: LonLat,
	fraction: number,
): LonLat"
/>

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L601" sourceLabel="Ellipsoid.ts:601" />

Returns the point at given fraction between two points on the great circle.

**Parameters**

- `lonLat1` ([LonLat](/lonlat)) — Longitude/Latitude of source point.
- `lonLat2` ([LonLat](/lonlat)) — Longitude/Latitude of destination point.
- `fraction` (number) — Fraction between the two points (0 = source point, 1 = destination point).

**Returns**

- [`LonLat`](/lonlat) — Intermediate point between points.

<MemberHeading id="getequatorialsize" depth="3" name="getEquatorialSize" sig="getEquatorialSize(): number" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L134" sourceLabel="Ellipsoid.ts:134" />

Gets ellipsoid equatorial size.

**Returns**

- `number`

<MemberHeading id="getpolarsize" depth="3" name="getPolarSize" sig="getPolarSize(): number" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L151" sourceLabel="Ellipsoid.ts:151" />

Gets ellipsoid polar size.

**Returns**

- `number`

<MemberHeading id="lonlattocartesian" depth="3" name="lonLatToCartesian" sig="lonLatToCartesian(lonlat: LonLat): Vec3" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L169" sourceLabel="Ellipsoid.ts:169" />

Calculate cartesian coordinates by its ECEF geodetic coordinates.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="lonlattocartesianres" depth="3" name="lonLatToCartesianRes" sig="lonLatToCartesianRes(lonlat: LonLat, res: Vec3): Vec3" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L180" sourceLabel="Ellipsoid.ts:180" />

Calculate cartesian coordinates by its ECEF geodetic coordinates.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Geodetic coordinates.
- `res` ([Vec3](/vec3)) — Output variable reference.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading
  id="geodetictocartesian"
  depth="3"
  name="geodeticToCartesian"
  sig="geodeticToCartesian(
	lon: Number,
	lat: Number,
	height: Number,
	res: Vec3,
): Vec3"
/>

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L193" sourceLabel="Ellipsoid.ts:193" />

Gets cartesian ECEF 3d coordinates from geodetic coordinates.

**Parameters**

- `lon` (Number) — Longitude.
- `lat` (Number) — Latitude.
- `height` (Number, default: 0) — Height.
- `res` ([Vec3](/vec3)) — Output result variable.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="projtosurface" depth="3" name="projToSurface" sig="projToSurface(p: Vec3): LonLat" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L215" sourceLabel="Ellipsoid.ts:215" />

Gets Wgs84 geodetic coordinates from cartesian ECEF.

**Parameters**

- `p` ([Vec3](/vec3)) — Cartesian coordinates.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="cartesiantolonlat" depth="3" name="cartesianToLonLat" sig="cartesianToLonLat(cart: Vec3): LonLat" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L278" sourceLabel="Ellipsoid.ts:278" />

Converts 3d cartesian coordinates to geodetic

**Parameters**

- `cart` ([Vec3](/vec3)) — Cartesian coordinates

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="cartesiantolonlatres" depth="3" name="cartesianToLonLatRes" sig="cartesianToLonLatRes(cart: Vec3, res: LonLat): LonLat" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L288" sourceLabel="Ellipsoid.ts:288" />

Converts 3d cartesian coordinates to geodetic

**Parameters**

- `cart` ([Vec3](/vec3)) — Cartesian coordinates
- `res` ([LonLat](/lonlat)) — Link geodetic coordinates variable

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="getsurfacenormal3v" depth="3" name="getSurfaceNormal3v" sig="getSurfaceNormal3v(coord: Vec3): Vec3" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L306" sourceLabel="Ellipsoid.ts:306" />

Gets ellipsoid surface normal.

**Parameters**

- `coord` ([Vec3](/vec3)) — Spatial coordinates.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading
  id="getgreatcircledestination"
  depth="3"
  name="getGreatCircleDestination"
  sig="getGreatCircleDestination(
	lonLat: LonLat,
	azimuth: number,
	dist: number,
): LonLat"
/>

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L328" sourceLabel="Ellipsoid.ts:328" />

Calculates the destination point given start point lat / lon, azimuth(deg) and distance (m). Source: http\://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens [http://mathiasbynens.be/](http:%5C/%5C/mathiasbynens.be/) Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 [http://www.ngs.noaa.gov/PUBS\_LIB/inverse.pdf](http:%5C/%5C/www.ngs.noaa.gov/PUBS_LIB/inverse.pdf)

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Origin coordinates
- `azimuth` (number) — View azimuth in degrees
- `dist` (number) — Distance to the destination point coordinates in meters

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="inverse" depth="3" name="inverse" sig="inverse(lonLat1: LonLat, lonLat2: LonLat): IInverseResult" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L338" sourceLabel="Ellipsoid.ts:338" />

Returns inverse Geodesic solution for two points

**Parameters**

- `lonLat1` ([LonLat](/lonlat)) — start coordinates point
- `lonLat2` ([LonLat](/lonlat)) — end coordinates point

**Returns**

- `IInverseResult`

<MemberHeading id="direct" depth="3" name="direct" sig="direct(lonLat: LonLat, azimuth: number, dist: number): Object" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L426" sourceLabel="Ellipsoid.ts:426" />

Calculates the destination point given start point lat / lon, azimuth(deg) and distance (m). Source: http\://movable-type.co.uk/scripts/latlong-vincenty-direct.html and optimized / cleaned up by Mathias Bynens [http://mathiasbynens.be/](http:%5C/%5C/mathiasbynens.be/) Based on the Vincenty direct formula by T. Vincenty, “Direct and Inverse Solutions of Geodesics on the Ellipsoid with application of nested equations”, Survey Review, vol XXII no 176, 1975 [http://www.ngs.noaa.gov/PUBS\_LIB/inverse.pdf](http:%5C/%5C/www.ngs.noaa.gov/PUBS_LIB/inverse.pdf)

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Origin coordinates
- `azimuth` (number) — View azimuth in degrees
- `dist` (number) — Distance to the destination point coordinates in meters

**Returns**

- `Object`

<MemberHeading id="hitray" depth="3" name="hitRay" sig="hitRay(origin: Vec3, direction: Vec3): Vec3" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L501" sourceLabel="Ellipsoid.ts:501" />

Returns cartesian coordinates of the intersection of a ray and an ellipsoid. If the ray doesn't hit ellipsoid returns null.

**Parameters**

- `origin` ([Vec3](/vec3)) — Ray origin point.
- `direction` ([Vec3](/vec3)) — Ray direction.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getbearingdestination" depth="3" name="getBearingDestination" sig="getBearingDestination(lonLat1, bearing, distance): LonLat" />

<MemberMeta sourceHref="/source/ellipsoid/ellipsoid-ts/#L576" sourceLabel="Ellipsoid.ts:576" />

**Parameters**

- `lonLat1`
- `bearing` (default: 0)
- `distance` (default: 0)

**Returns**

- [`LonLat`](/lonlat)

* **TODO:**
  - this is not precise function, needs to be replaced or removed

## Static Methods

<MemberHeading id="getbearing" depth="3" name="getBearing" sig="getBearing(lonLat1, lonLat2): number" />

<MemberMeta badges="static" sourceHref="/source/ellipsoid/ellipsoid-ts/#L115" sourceLabel="Ellipsoid.ts:115" />

REMOVE ASAP after

**Parameters**

- `lonLat1`
- `lonLat2`

**Returns**

- `number`

<MemberHeading
  id="getintermediatepointongreatcircle"
  depth="3"
  name="getIntermediatePointOnGreatCircle"
  sig="getIntermediatePointOnGreatCircle(
	lonLat1: LonLat,
	lonLat2: LonLat,
	fraction: number,
): LonLat"
/>

<MemberMeta badges="static" sourceHref="/source/ellipsoid/ellipsoid-ts/#L601" sourceLabel="Ellipsoid.ts:601" />

Returns the point at given fraction between two points on the great circle.

**Parameters**

- `lonLat1` ([LonLat](/lonlat)) — Longitude/Latitude of source point.
- `lonLat2` ([LonLat](/lonlat)) — Longitude/Latitude of destination point.
- `fraction` (number) — Fraction between the two points (0 = source point, 1 = destination point).

**Returns**

- [`LonLat`](/lonlat) — Intermediate point between points.
