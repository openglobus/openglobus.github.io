---
title: Polyline
kind: class
longname: Polyline
description: Polyline object.
---

# Polyline

<SourceLink href="/source/entity/polyline/polyline-ts/#L65" label="Polyline.ts:65" />

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
  - `options.pathTimes` (Array.\<Array.\<number>>, optional) — Time of every point, per segment. Makes the line follow the entity collection time, see [EntityCollection#setTime](/entitycollection#settime) and [EntityCollection#setTimeOpacity](/entitycollection#settimeopacity).
  - `options.texParams` (TexParam, optional) — Texture params for all segments: texOffset, strokeSize and texOffsetSpeed.

---

## Instance Methods

<MemberHeading id="setsrc" depth="3" name="setSrc" sig="setSrc()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L425" sourceLabel="Polyline.ts:425" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L502" sourceLabel="Polyline.ts:502" />

Changes cartesian point coordinates of the path

**Parameters**

- `coordinates` ([Vec3](/vec3)) — New coordinates
- `index` (number, optional, default: 0) — Path segment index
- `segmentIndex` (number, optional, default: 0) — Index of the point in the path segment
- `skipLonLat` (boolean, optional, default: false) — Do not update geodetic coordinates

<MemberHeading id="removepoint" depth="3" name="removePoint" sig="removePoint(index: number, segmentIndex?: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L521" sourceLabel="Polyline.ts:521" />

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
	time?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L567" sourceLabel="Polyline.ts:567" />

Insert point coordinates in a path segment

**Parameters**

- `point3v` ([Vec3](/vec3)) — Point coordinates
- `index` (number, optional, default: 0) — Index in the path
- `color` (NumberArray4, optional) — Point color
- `segmentIndex` (number, optional, default: 0) — Path segment index
- `time` (number, optional) — Point time

<MemberHeading
  id="addpoint3v"
  depth="3"
  name="addPoint3v"
  sig="addPoint3v(
	point3v: Vec3,
	segmentIndex?: number,
	color?: NumberArray4,
	time?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L617" sourceLabel="Polyline.ts:617" />

Append new point in the end of the path.

**Parameters**

- `point3v` ([Vec3](/vec3)) — New point coordinates.
- `segmentIndex` (number, optional, default: 0) — Path segment index, first by default.
- `color` (NumberArray4, optional) — Point color
- `time` (number, optional) — Point time

<MemberHeading
  id="addpointlonlat"
  depth="3"
  name="addPointLonLat"
  sig="addPointLonLat(
	lonLat: LonLat,
	segmentIndex?: number,
	color?: NumberArray4,
	time?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L649" sourceLabel="Polyline.ts:649" />

Append new geodetic point in the end of the path.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — New coordinate.
- `segmentIndex` (number, optional, default: 0) — Path segment index, first by default.
- `color` (NumberArray4, optional) — Point color.
- `time` (number, optional) — Point time.

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L678" sourceLabel="Polyline.ts:678" />

Change path point color

**Parameters**

- `color` (NumberArray4) — New color
- `index` (number, optional, default: 0) — Point index
- `segmentIndex` (number, optional, default: 0) — Path segment index

<MemberHeading id="removepath" depth="3" name="removePath" sig="removePath(index: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L692" sourceLabel="Polyline.ts:692" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L789" sourceLabel="Polyline.ts:789" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L862" sourceLabel="Polyline.ts:862" />

Sets polyline geodetic coordinates.

**Parameters**

- `pathLonLat` (Array.\<SegmentPathLonLat>) — Polyline path cartesian coordinates.
- `pathColors` (Array.\<SegmentPathColor>) — Polyline path points colors.
- `forceEqual` (Boolean, optional, default: false) — OPTIMIZATION FLAG: Makes assigning faster for size equal coordinates array.

<MemberHeading id="istimed" depth="3" name="isTimed" sig="isTimed(): boolean" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L943" sourceLabel="Polyline.ts:943" />

Returns true when the polyline has point times and follows the entity collection time.

**Returns**

- `boolean`

<MemberHeading
  id="setpathtimes"
  depth="3"
  name="setPathTimes"
  sig="setPathTimes(
	times: Array.<Array.<number>> | Array.<number> | null,
	segmentIndex?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L957" sourceLabel="Polyline.ts:957" />

Sets point times. Null removes them and the line stops following the entity collection time.

**Parameters**

- `times` (Array.\<Array.\<number>> | Array.\<number> | null) — Times per segment, or times of one segment.
- `segmentIndex` (number, optional) — Segment index when times of one segment are given.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L999" sourceLabel="Polyline.ts:999" />

Sets polyline opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1030" sourceLabel="Polyline.ts:1030" />

Gets polyline opacity.

<MemberHeading id="setaltitude" depth="3" name="setAltitude" sig="setAltitude(altitude: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1039" sourceLabel="Polyline.ts:1039" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `altitude` (number) — ALtitude value.

<MemberHeading id="setthickness" depth="3" name="setThickness" sig="setThickness(thickness: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1052" sourceLabel="Polyline.ts:1052" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `thickness` (number) — Thickness.

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1064" sourceLabel="Polyline.ts:1064" />

Sets polyline segment color.

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1103" sourceLabel="Polyline.ts:1103" />

Sets visibility.

**Parameters**

- `visibility` (boolean) — Polyline visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1127" sourceLabel="Polyline.ts:1127" />

Gets Polyline visibility.

**Returns**

- `boolean` — Polyline visibility.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1163" sourceLabel="Polyline.ts:1163" />

Sets polyline color

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="getcolorhtml" depth="3" name="getColorHTML" sig="getColorHTML(index?: number): string | undefined" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1176" sourceLabel="Polyline.ts:1176" />

Gets polyline HTML color.

**Parameters**

- `index` (number, optional, default: 0) — Segment index.

**Returns**

- `string | undefined` — HTML color, or undefined when no color is set.

<MemberHeading id="getcolor4v" depth="3" name="getColor4v" sig="getColor4v(index?: number): Vec4 | undefined" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1186" sourceLabel="Polyline.ts:1186" />

Gets polyline color as a normalized RGBA vector.

**Parameters**

- `index` (number, optional, default: 0) — Segment index.

**Returns**

- [`Vec4`](/vec4)` | undefined` — Normalized RGBA color, or undefined when no color is set.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1198" sourceLabel="Polyline.ts:1198" />

Clear polyline data.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1211" sourceLabel="Polyline.ts:1211" />

Removes from an entity.

## Instance Fields

<MemberHeading id="isclosed" depth="3" name="isClosed" sig="isClosed" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L461" sourceLabel="Polyline.ts:461" />

Sets closed/open state for one path segment.
