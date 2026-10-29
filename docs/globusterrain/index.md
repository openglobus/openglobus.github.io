---
title: GlobusTerrain
kind: class
longname: GlobusTerrain
description: Class that loads segment elevation data, converts it to the array and passes it to the planet segment.
---

# GlobusTerrain

**Extends:&#x20;**[`EmptyTerrain`](/emptyterrain)

<SourceLink href="/source/terrain/globusterrain-ts/#L57" label="GlobusTerrain.ts:57" />

Class that loads segment elevation data, converts it to the array and passes it to the planet segment.

**Fires**

- `event:load`
- `event:loadend`

---

## Constructor

<Signature
  code="new GlobusTerrain(
	name?: string,
	options?: IGlobusTerrainParams,
): GlobusTerrain"
/>

**Parameters**

- `name` (string, optional, default: "\\"\\"") — Terrain provider name.
- `options` (IGlobusTerrainParams, optional) — Provider options:
  - `options.minZoom` (number, optional, default: 3) — Minimal visible zoom index when terrain handler works.
  - `options.maxZoom` (number, optional, default: 14) — Maximal visible zoom index when terrain handler works.
  - `options.maxNativeZoom` (number, optional, default: 14) — Maximal available terrain zoom level.
  - `options.url` (string, optional, default: "\\"https\://{s}.srtm3.openglobus.org/{z}/{y}/{x}.ddm\\"") — Terrain source URL template.
  - `options.gridSizeByZoom` (Array.\<number>, optional) — Segment triangulation grid sizes where array index matches segment zoom index.
  - `options.plainGridSize` (number, optional, default: 32) — Elevation grid size. Default is 32x32. Must be power of two.
  - `options.heightFactor` (number, optional, default: 1) — Elevation height multiplier.
  - `options.cache` (FetchCache, optional, default: "\\"default\\"") — Fetch cache mode.

---

## Instance Methods

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L279" sourceLabel="GlobusTerrain.ts:279" />

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L290" sourceLabel="GlobusTerrain.ts:290" />

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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L299" sourceLabel="GlobusTerrain.ts:299" />

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L313" sourceLabel="GlobusTerrain.ts:313" />

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="onterrainloaded" depth="3" name="_onTerrainLoaded" sig="_onTerrainLoaded(segment: Segment, data: any)" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L363" sourceLabel="GlobusTerrain.ts:363" />

Converts loaded segment data to elevations and applies them.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requested terrain data.
- `data` (any) — Loaded data.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L407" sourceLabel="GlobusTerrain.ts:407" />

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L417" sourceLabel="GlobusTerrain.ts:417" />

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L433" sourceLabel="GlobusTerrain.ts:433" />

**Overrides:&#x20;**`EmptyTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom-created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L442" sourceLabel="GlobusTerrain.ts:442" />

Converts loaded data to segment elevation data type (column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L465" sourceLabel="GlobusTerrain.ts:465" />

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L227" sourceLabel="EmptyTerrain.ts:227" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`EmptyTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L239" sourceLabel="EmptyTerrain.ts:239" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`EmptyTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L297" sourceLabel="EmptyTerrain.ts:297" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`EmptyTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L316" sourceLabel="EmptyTerrain.ts:316" />

_Inherited from `EmptyTerrain#getCacheInfo`_

**Overrides:&#x20;**`EmptyTerrain#getCacheInfo`

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L248" sourceLabel="EmptyTerrain.ts:248" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`EmptyTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
