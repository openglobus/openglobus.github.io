---
title: Polyline
kind: class
longname: Polyline
description: Polyline object.
---

# Polyline

<SourceLink href="/source/entity/polyline/polyline-ts/#L61" label="Polyline.ts:61" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L380" sourceLabel="Polyline.ts:380" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L458" sourceLabel="Polyline.ts:458" />

Changes cartesian point coordinates of the path

**Parameters**

- `coordinates` ([Vec3](/vec3)) — New coordinates
- `index` (number, optional, default: 0) — Path segment index
- `segmentIndex` (number, optional, default: 0) — Index of the point in the path segment
- `skipLonLat` (boolean, optional, default: false) — Do not update geodetic coordinates

<MemberHeading id="removepoint" depth="3" name="removePoint" sig="removePoint(index: number, segmentIndex?: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L476" sourceLabel="Polyline.ts:476" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L509" sourceLabel="Polyline.ts:509" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L536" sourceLabel="Polyline.ts:536" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L563" sourceLabel="Polyline.ts:563" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L594" sourceLabel="Polyline.ts:594" />

Change path point color

**Parameters**

- `color` (NumberArray4) — New color
- `index` (number, optional, default: 0) — Point index
- `segmentIndex` (number, optional, default: 0) — Path segment index

<MemberHeading id="removepath" depth="3" name="removePath" sig="removePath(index: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L607" sourceLabel="Polyline.ts:607" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L694" sourceLabel="Polyline.ts:694" />

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

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L761" sourceLabel="Polyline.ts:761" />

Sets polyline geodetic coordinates.

**Parameters**

- `pathLonLat` (Array.\<SegmentPathLonLat>) — Polyline path cartesian coordinates.
- `pathColors` (Array.\<SegmentPathColor>) — Polyline path points colors.
- `forceEqual` (Boolean, optional, default: false) — OPTIMIZATION FLAG: Makes assigning faster for size equal coordinates array.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L828" sourceLabel="Polyline.ts:828" />

Sets polyline opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L859" sourceLabel="Polyline.ts:859" />

Gets polyline opacity.

<MemberHeading id="setaltitude" depth="3" name="setAltitude" sig="setAltitude(altitude: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L868" sourceLabel="Polyline.ts:868" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `altitude` (number) — ALtitude value.

<MemberHeading id="setthickness" depth="3" name="setThickness" sig="setThickness(thickness: number)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L881" sourceLabel="Polyline.ts:881" />

Sets Polyline thickness in screen pixels.

**Parameters**

- `thickness` (number) — Thickness.

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L895" sourceLabel="Polyline.ts:895" />

Sets polyline segment color.

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L933" sourceLabel="Polyline.ts:933" />

Sets visibility.

**Parameters**

- `visibility` (boolean) — Polyline visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L942" sourceLabel="Polyline.ts:942" />

Gets Polyline visibility.

**Returns**

- `boolean` — Polyline visibility.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(htmlColor: string)" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L985" sourceLabel="Polyline.ts:985" />

Sets polyline color

**Parameters**

- `htmlColor` (string) — HTML color.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1000" sourceLabel="Polyline.ts:1000" />

Clear polyline data.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L1012" sourceLabel="Polyline.ts:1012" />

Removes from an entity.

## Instance Fields

<MemberHeading id="isclosed" depth="3" name="isClosed" sig="isClosed" />

<MemberMeta sourceHref="/source/entity/polyline/polyline-ts/#L416" sourceLabel="Polyline.ts:416" />

Sets closed/open state for one path segment.
