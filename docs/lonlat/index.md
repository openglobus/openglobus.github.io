---
title: LonLat
kind: class
longname: LonLat
description: Represents a geographical point with a certain latitude, longitude and height.
---

# LonLat

<SourceLink href="/source/lonlat-ts/#L18" label="LonLat.ts:18" />

Represents a geographical point with a certain latitude, longitude and height.

---

## Constructor

<Signature code="new LonLat(lon?: number, lat?: number, height?: number): LonLat" />

**Parameters**

- `lon` (number, optional) — Longitude.
- `lat` (number, optional) — Latitude.
- `height` (number, optional) — Height over the surface.

---

## Instance Methods

<MemberHeading id="iszero" depth="3" name="isZero" sig="isZero(): boolean" />

<MemberMeta sourceHref="/source/lonlat-ts/#L50" sourceLabel="LonLat.ts:50" />

Check zero coordinates

**Returns**

- `boolean`

<MemberHeading id="toarray" depth="3" name="toArray" sig="toArray(): Array.<number>" />

<MemberMeta sourceHref="/source/lonlat-ts/#L92" sourceLabel="LonLat.ts:92" />

Create array from lonLat

**Returns**

- `Array.<number>`

<MemberHeading id="set" depth="3" name="set" sig="set(lon?: number, lat?: number, height?: number): LonLat" />

<MemberMeta sourceHref="/source/lonlat-ts/#L150" sourceLabel="LonLat.ts:150" />

Sets coordinates.

**Parameters**

- `lon` (number, optional, default: 0) — Longitude.
- `lat` (number, optional, default: 0) — Latitude.
- `height` (number, optional, default: 0) — Height.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="copy" depth="3" name="copy" sig="copy(lonLat?: LonLat): LonLat" />

<MemberMeta sourceHref="/source/lonlat-ts/#L163" sourceLabel="LonLat.ts:163" />

Copy coordinates.

**Parameters**

- `lonLat` ([LonLat](/lonlat), optional) — Coordinates to copy.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): LonLat" />

<MemberMeta sourceHref="/source/lonlat-ts/#L175" sourceLabel="LonLat.ts:175" />

Clone the coordinates.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="forwardmercator" depth="3" name="forwardMercator" sig="forwardMercator(): LonLat" />

<MemberMeta sourceHref="/source/lonlat-ts/#L184" sourceLabel="LonLat.ts:184" />

Converts to mercator coordinates.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="inversemercator" depth="3" name="inverseMercator" sig="inverseMercator(): LonLat" />

<MemberMeta sourceHref="/source/lonlat-ts/#L206" sourceLabel="LonLat.ts:206" />

Converts from mercator coordinates.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="equal" depth="3" name="equal" sig="equal(b: LonLat): boolean" />

<MemberMeta sourceHref="/source/lonlat-ts/#L216" sourceLabel="LonLat.ts:216" />

Compares coordinates.

**Parameters**

- `b` ([LonLat](/lonlat)) — Coordinate to compare with.

**Returns**

- `boolean`

## Static Methods

<MemberHeading id="join" depth="3" name="join" sig="join()" />

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L60" sourceLabel="LonLat.ts:60" />

Creates coordinates array.

<MemberHeading id="createfromarray" depth="3" name="createFromArray" sig="createFromArray(arr: Array.<number>): LonLat" />

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L75" sourceLabel="LonLat.ts:75" />

Creates an object by coordinate array.

**Parameters**

- `arr` (Array.\<number>) — Coordinates array, where first is longitude, second is latitude and third is a height. (exactly 3 entries)

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="toarray" depth="3" name="toArray" sig="toArray(lonLat): Array.<number>" />

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L84" sourceLabel="LonLat.ts:84" />

Create array from lonLat

**Parameters**

- `lonLat`

**Returns**

- `Array.<number>`

<MemberHeading
  id="forwardmercator"
  depth="3"
  name="forwardMercator"
  sig="forwardMercator(
	lon: number,
	lat: number,
	height?: number,
): LonLat"
/>

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L104" sourceLabel="LonLat.ts:104" />

Converts degrees to mercator coordinates.

**Parameters**

- `lon` (number) — Degrees longitude.
- `lat` (number) — Degrees latitude.
- `height` (number, optional) — Height.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="forwardmercatorres" depth="3" name="forwardMercatorRes" sig="forwardMercatorRes(lonLat: LonLat, res: LonLat): LonLat" />

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L119" sourceLabel="LonLat.ts:119" />

Converts degrees to mercator coordinates.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Input geodetic degree coordinates
- `res` ([LonLat](/lonlat)) — Output mercator coordinates

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="inversemercator" depth="3" name="inverseMercator" sig="inverseMercator(x: number, y: number, height?: number): LonLat" />

<MemberMeta badges="static" sourceHref="/source/lonlat-ts/#L134" sourceLabel="LonLat.ts:134" />

Converts mercator to degrees coordinates.

**Parameters**

- `x` (number) — Mercator longitude.
- `y` (number) — Mercator latitude.
- `height` (number, optional, default: 0) — Height.

**Returns**

- [`LonLat`](/lonlat)
