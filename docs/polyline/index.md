---
title: Polyline
kind: class
longname: Polyline
description: Polyline object.
---

# Polyline

<SourceLink href="/source/entity/polyline/polyline-ts/#L62" label="Polyline.ts:62" />

Polyline object.

---

## Constructor

<Signature code="new Polyline(options?: Object): Polyline" />

**Parameters**

- `options` (Object, optional) — Polyline options:
  - `options.thickness` (number, optional) — Thickness in screen pixels 1.5 is default.
  - `options.altitude` (Number, optional) — Relative to ground layers altitude value.
  - `options.color` (string | Array.\<string>, optional) — Default line color or per-segment HTML colors.
  - `options.opacity` (Boolean, optional) — Line opacity.
  - `options.visibility` (Boolean, optional) — Polyline visibility. True default.
  - `options.isClosed` (Array.\<Boolean>, optional) — Closed geometry type identification, per-segment.
  - `options.pathLonLat` (Array.\<SegmentPathLonLatExt>, optional) — Polyline geodetic coordinates array. \[\[\[0,0,0], \[1,1,1],...]]
  - `options.path3v` (Array.\<SegmentPath3vExt>, optional) — LinesString cartesian coordinates array. \[\[\[0,0,0], \[1,1,1],...]]
  - `options.pathColors` (Array.\<SegmentPathColor>, optional) — Coordinates color. \[\[\[1,0,0,1], \[0,1,0,1],...]] for right and green colors.
  - `options.texParams` (TexParam, optional) — Texture params for all segments: texOffset, strokeSize and texOffsetSpeed.

---

## Instance Methods

<MemberHeading id="setsrc" depth="3" name="setSrc" sig="setSrc()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L381" sourceLabel="Polyline.ts:381" />

Sets stroke source per segment (null = color-only).

<MemberHeading
  id="setpoint3v"
  depth="3"
  name="setPoint3v"
  sig="setPoint3v(
	coordinates: Vec3,
	index?: number,
	segmentIndex?: number,
	skipLonLat?: boolean,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L459" sourceLabel="Polyline.ts:459" />

Changes cartesian point coordinates of the path

**Parameters**

- `coordinates` ([Vec3](/vec3)) — New coordinates
- `index` (number, optional, default: 0) — Path segment index
- `segmentIndex` (number, optional, default: 0) — Index of the point in the path segment
- `skipLonLat` (boolean, optional, default: false) — Do not update geodetic coordinates

<MemberHeading id="removepoint" depth="3" name="removePoint" sig="removePoint(index: number, segmentIndex?: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L477" sourceLabel="Polyline.ts:477" />

Remove point from the path

**Parameters**

- `index` (number) — Point index in a path segment
- `segmentIndex` (number, optional, default: 0) — Segment path index

<MemberHeading
  id="insertpoint3v"
  depth="3"
  name="insertPoint3v"
  sig="insertPoint3v(
	point3v: Vec3,
	index?: number,
	color?: NumberArray4,
	segmentIndex?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L510" sourceLabel="Polyline.ts:510" />

Insert point coordinates in a path segment

**Parameters**

- `point3v` ([Vec3](/vec3)) — Point coordinates
- `index` (number, optional, default: 0) — Index in the path
- `color` (NumberArray4, optional) — Point color
- `segmentIndex` (number, optional, default: 0) — Path segment index

<MemberHeading
  id="addpoint3v"
  depth="3"
  name="addPoint3v"
  sig="addPoint3v(
	point3v: Vec3,
	segmentIndex?: number,
	color?: NumberArray4,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L537" sourceLabel="Polyline.ts:537" />

Append new point in the end of the path.

**Parameters**

- `point3v` ([Vec3](/vec3)) — New point coordinates.
- `segmentIndex` (number, optional, default: 0) — Path segment index, first by default.
- `color` (NumberArray4, optional) — Point color

<MemberHeading
  id="addpointlonlat"
  depth="3"
  name="addPointLonLat"
  sig="addPointLonLat(
	lonLat: LonLat,
	segmentIndex?: number,
	color?: NumberArray4,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L564" sourceLabel="Polyline.ts:564" />

Append new geodetic point in the end of the path.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — New coordinate.
- `segmentIndex` (number, optional, default: 0) — Path segment index, first by default.
- `color` (NumberArray4, optional) — Point color.

<MemberHeading
  id="setpointcolor"
  depth="3"
  name="setPointColor"
  sig="setPointColor(
	color: NumberArray4,
	index?: number,
	segmentIndex?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L595" sourceLabel="Polyline.ts:595" />

Change path point color

**Parameters**

- `color` (NumberArray4) — New color
- `index` (number, optional, default: 0) — Point index
- `segmentIndex` (number, optional, default: 0) — Path segment index

<MemberHeading id="removepath" depth="3" name="removePath" sig="removePath(index: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L608" sourceLabel="Polyline.ts:608" />

Remove multiline path segment

**Parameters**

- `index` (number) — Segment index in multiline

<MemberHeading
  id="setpath3v"
  depth="3"
  name="setPath3v"
  sig="setPath3v(
	path3v: Array.<SegmentPath3vExt>,
	pathColors?: Array.<SegmentPathColor>,
	forceEqual?: Boolean,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L695" sourceLabel="Polyline.ts:695" />

Sets Polyline cartesian coordinates.

**Parameters**

- `path3v` (Array.\<SegmentPath3vExt>) — Polyline path cartesian coordinates. (exactly 3 entries)
- `pathColors` (Array.\<SegmentPathColor>, optional) — Polyline path cartesian coordinates. (exactly 3 entries)
- `forceEqual` (Boolean, optional, default: false) — Makes assigning faster for size equal coordinates array.

<MemberHeading
  id="setpathlonlat"
  depth="3"
  name="setPathLonLat"
  sig="setPathLonLat(
	pathLonLat: Array.<SegmentPathLonLat>,
	pathColors: Array.<SegmentPathColor>,
	forceEqual?: Boolean,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L762" sourceLabel="Polyline.ts:762" />

Sets polyline geodetic coordinates.

**Parameters**

- `pathLonLat` (Array.\<SegmentPathLonLat>) — Polyline path cartesian coordinates.
- `pathColors` (Array.\<SegmentPathColor>) — Polyline path points colors.
- `forceEqual` (Boolean, optional, default: false) — OPTIMIZATION FLAG: Makes assigning faster for size equal coordinates array.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L829" sourceLabel="Polyline.ts:829" />

Sets polyline opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L860" sourceLabel="Polyline.ts:860" />

Gets polyline opacity.

<MemberHeading id="setaltitude" depth="3" name="setAltitude" sig="setAltitude(altitude: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L869" sourceLabel="Polyline.ts:869" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `altitude` (number) — ALtitude value.

<MemberHeading id="setthickness" depth="3" name="setThickness" sig="setThickness(thickness: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L882" sourceLabel="Polyline.ts:882" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `thickness` (number) — Thickness.

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L896" sourceLabel="Polyline.ts:896" />

Sets polyline segment color.

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L934" sourceLabel="Polyline.ts:934" />

Sets visibility.

**Parameters**

- `visibility` (boolean) — Polyline visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L943" sourceLabel="Polyline.ts:943" />

Gets Polyline visibility.

**Returns**

- `boolean` — Polyline visibility.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L986" sourceLabel="Polyline.ts:986" />

Sets polyline color

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="getcolorhtml" depth="3" name="getColorHTML" sig="getColorHTML(index?: number): string | undefined" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1001" sourceLabel="Polyline.ts:1001" />

Gets polyline HTML color.

**Parameters**

- `index` (number, optional, default: 0) — Segment index.

**Returns**

- `string | undefined` — HTML color, or undefined when no color is set.

<MemberHeading id="getcolor4v" depth="3" name="getColor4v" sig="getColor4v(index?: number): Vec4 | undefined" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1011" sourceLabel="Polyline.ts:1011" />

Gets polyline color as a normalized RGBA vector.

**Parameters**

- `index` (number, optional, default: 0) — Segment index.

**Returns**

- [`Vec4`](/vec4)` | undefined` — Normalized RGBA color, or undefined when no color is set.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1023" sourceLabel="Polyline.ts:1023" />

Clear polyline data.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1035" sourceLabel="Polyline.ts:1035" />

Removes from an entity.

## Instance Fields

<MemberHeading id="isclosed" depth="3" name="isClosed" sig="isClosed" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L417" sourceLabel="Polyline.ts:417" />

Sets closed/open state for one path segment.
