---
title: RgbTerrain
kind: class
longname: RgbTerrain
---

# RgbTerrain

**Extends:&#x20;**[`GlobusTerrain`](/globusterrain)

<SourceLink href="/source/terrain/rgbterrain-ts/#L71" label="RgbTerrain.ts:71" />

---

## Constructor

<Signature
  code="new RgbTerrain(
	name?: string,
	options?: IRgbTerrainParams,
): RgbTerrain"
/>

**Parameters**

- `name` (string, optional, default: "\\"RgbTerrain\\"") — Terrain provider name.
- `options` (IRgbTerrainParams, optional) — Provider options:
  - `options.equalizeNormals` (boolean, optional, default: true) — Enables normal equalization on tile edges.
  - `options.key` (string, optional, default: "\\"\\"") — API key.
  - `options.imageSize` (number, optional, default: 256) — Source image size.
  - `options.minHeight` (number, optional, default: -10000) — Minimal height for RGB-to-height conversion.
  - `options.resolution` (number, optional, default: 0.1) — RGB-to-height conversion resolution.
  - `options.encoding` (RgbTerrainEncoding, optional, default: "\\"rgb\\"") — RGB elevation encoding: `"rgb"` (default) or `"terrarium"`. Ignored when `options.rgbToHeightFunc` is set.
  - `options.rgbToHeightFunc` (RgbToHeightFunc, optional) — Custom RGB-to-height decoder with signature `(r, g, b, minHeight, resolution) => number`. Defaults to `rgbToHeightByEncoding[options.encoding]`.

---

## Instance Methods

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L326" sourceLabel="GlobusTerrain.ts:326" />

_Inherited from `GlobusTerrain#abortLoading`_

**Overrides:&#x20;**`GlobusTerrain#abortLoading`

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L337" sourceLabel="GlobusTerrain.ts:337" />

_Inherited from `GlobusTerrain#setUrl`_

**Overrides:&#x20;**`GlobusTerrain#setUrl`

Sets terrain data url template.

**Parameters**

- `url` (string) — Url template.

**Example**

Default openglobus url template:

```js
:
"https://{s}.srtm3.openglobus.org/{z}/{y}/{x}.ddm"
```

<MemberHeading id="setname" depth="3" name="setName" sig="setName(name: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L346" sourceLabel="GlobusTerrain.ts:346" />

_Inherited from `GlobusTerrain#setName`_

**Overrides:&#x20;**`GlobusTerrain#setName`

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L360" sourceLabel="GlobusTerrain.ts:360" />

_Inherited from `GlobusTerrain#loadTerrain`_

**Overrides:&#x20;**`GlobusTerrain#loadTerrain`

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L444" sourceLabel="GlobusTerrain.ts:444" />

_Inherited from `GlobusTerrain#_createUrl`_

**Overrides:&#x20;**`GlobusTerrain#_createUrl`

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L454" sourceLabel="GlobusTerrain.ts:454" />

_Inherited from `GlobusTerrain#_getHTTPRequestString`_

**Overrides:&#x20;**`GlobusTerrain#_getHTTPRequestString`

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L470" sourceLabel="GlobusTerrain.ts:470" />

_Inherited from `GlobusTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`GlobusTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L479" sourceLabel="GlobusTerrain.ts:479" />

_Inherited from `GlobusTerrain#_createHeights`_

**Overrides:&#x20;**`GlobusTerrain#_createHeights`

Converts loaded data to segment elevation data type(column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L502" sourceLabel="GlobusTerrain.ts:502" />

_Inherited from `GlobusTerrain#_applyElevationsData`_

**Overrides:&#x20;**`GlobusTerrain#_applyElevationsData`

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L218" sourceLabel="EmptyTerrain.ts:218" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`GlobusTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.
