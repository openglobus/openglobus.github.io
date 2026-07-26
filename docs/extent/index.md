---
title: Extent
kind: class
longname: Extent
description: Represents geographical coordinates extent.
---

# Extent

<SourceLink href="/source/extent-ts/#L12" label="Extent.ts:12" />

Represents geographical coordinates extent.

---

## Constructor

<Signature code="new Extent(sw?: LonLat, ne?: LonLat): Extent" />

**Parameters**

- `sw` ([LonLat](/lonlat), optional) — South West extent corner coordinates.
- `ne` ([LonLat](/lonlat), optional) — North East extent corner coordinates.

---

## Instance Methods

<MemberHeading id="setbycoordinates" depth="3" name="setByCoordinates" sig="setByCoordinates(arr: Array.<LonLat>): Extent" />

<MemberMeta sourceHref="/source/extent-ts/#L109" sourceLabel="Extent.ts:109" />

Sets current bounding extent object by coordinate array.

**Parameters**

- `arr` (Array.\<[LonLat](/lonlat)>) — Coordinate array.

**Returns**

- [`Extent`](/extent) — Current extent.

<MemberHeading id="isinside" depth="3" name="isInside" sig="isInside(lonlat: LonLat): boolean" />

<MemberMeta sourceHref="/source/extent-ts/#L134" sourceLabel="Extent.ts:134" />

Determines if point inside extent.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Coordinate point.

**Returns**

- `boolean` — Returns true if point inside extent.

<MemberHeading id="overlaps" depth="3" name="overlaps" sig="overlaps(e: Extent): boolean" />

<MemberMeta sourceHref="/source/extent-ts/#L146" sourceLabel="Extent.ts:146" />

Returns true if two extent overlap each other.

**Parameters**

- `e` ([Extent](/extent)) — Another extent.

**Returns**

- `boolean`

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/extent-ts/#L162" sourceLabel="Extent.ts:162" />

Gets extent width.

**Returns**

- `number` — Extent width.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/extent-ts/#L171" sourceLabel="Extent.ts:171" />

Gets extent height.

**Returns**

- `number` — Extent height.

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Extent" />

<MemberMeta sourceHref="/source/extent-ts/#L180" sourceLabel="Extent.ts:180" />

Creates clone instance of the current extent.

**Returns**

- [`Extent`](/extent) — Extent clone.

<MemberHeading id="getcenter" depth="3" name="getCenter" sig="getCenter(): number" />

<MemberMeta sourceHref="/source/extent-ts/#L189" sourceLabel="Extent.ts:189" />

Gets the center coordinate of the extent.

**Returns**

- `number` — Center coordinate.

<MemberHeading id="getnorthwest" depth="3" name="getNorthWest" sig="getNorthWest()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getnortheast" depth="3" name="getNorthEast" sig="getNorthEast()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getsouthwest" depth="3" name="getSouthWest" sig="getSouthWest()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getsoutheast" depth="3" name="getSouthEast" sig="getSouthEast()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getnorth" depth="3" name="getNorth" sig="getNorth()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getwest" depth="3" name="getWest" sig="getWest()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="getsouth" depth="3" name="getSouth" sig="getSouth()" />

<MemberMeta sourceHref="/source/extent-ts/#L244" sourceLabel="Extent.ts:244" />

<MemberHeading id="equals" depth="3" name="equals" sig="equals(extent: Extent): boolean" />

<MemberMeta sourceHref="/source/extent-ts/#L253" sourceLabel="Extent.ts:253" />

Returns extents are equals.

**Parameters**

- `extent` ([Extent](/extent)) — Extent.

**Returns**

- `boolean`

<MemberHeading id="forwardmercator" depth="3" name="forwardMercator" sig="forwardMercator(): Extent" />

<MemberMeta sourceHref="/source/extent-ts/#L267" sourceLabel="Extent.ts:267" />

Converts extent coordinates to mercator projection coordinates.

**Returns**

- [`Extent`](/extent) — New instance of the current extent.

<MemberHeading id="inversemercator" depth="3" name="inverseMercator" sig="inverseMercator(): Extent" />

<MemberMeta sourceHref="/source/extent-ts/#L276" sourceLabel="Extent.ts:276" />

Converts extent coordinates from mercator projection to degrees.

**Returns**

- [`Extent`](/extent) — New instance of the current extent.

<MemberHeading id="getcartesianbounds" depth="3" name="getCartesianBounds" sig="getCartesianBounds(ellipsoid: Ellipsoid): Array.<number>" />

<MemberMeta sourceHref="/source/extent-ts/#L286" sourceLabel="Extent.ts:286" />

Gets cartesian bounding bounds of the current ellipsoid.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Ellipsoid.

**Returns**

- `Array.<number>` — Cartesian 3d coordinate array. (exactly 6 entries)

## Static Methods

<MemberHeading id="createfromarray" depth="3" name="createFromArray" sig="createFromArray(arr: Array.<number>): Extent" />

<MemberMeta badges="static" sourceHref="/source/extent-ts/#L27" sourceLabel="Extent.ts:27" />

Creates extent instance from values in array.

**Parameters**

- `arr` (Array.\<number>) — South west and north-east longitude and latitudes packed in array. (exactly 4 entries)

**Returns**

- [`Extent`](/extent) — Extent object.

<MemberHeading id="createbycoordinates" depth="3" name="createByCoordinates" sig="createByCoordinates(arr: Array.<LonLat>): Extent" />

<MemberMeta badges="static" sourceHref="/source/extent-ts/#L37" sourceLabel="Extent.ts:37" />

Creates bound extent instance by coordinate array.

**Parameters**

- `arr` (Array.\<[LonLat](/lonlat)>) — Coordinate array.

**Returns**

- [`Extent`](/extent) — Extent object.

<MemberHeading id="createbycoordinatesarr" depth="3" name="createByCoordinatesArr" sig="createByCoordinatesArr(arr: Array.<Array.<number>>): Extent" />

<MemberMeta badges="static" sourceHref="/source/extent-ts/#L58" sourceLabel="Extent.ts:58" />

Creates bound extent instance by coordinates array.

**Parameters**

- `arr` (Array.\<Array.\<number>>) — Coordinate array. (exactly 2 entries)

**Returns**

- [`Extent`](/extent) — Extent object.

<MemberHeading
  id="fromtile"
  depth="3"
  name="fromTile"
  sig="fromTile(
	x: number,
	y: number,
	z: number,
	width: number,
	height: number,
): Extent"
/>

<MemberMeta badges="static" sourceHref="/source/extent-ts/#L83" sourceLabel="Extent.ts:83" />

Creates extent by merсator grid tile coordinates.

**Parameters**

- `x` (number)
- `y` (number)
- `z` (number)
- `width` (number)
- `height` (number)

**Returns**

- [`Extent`](/extent)
