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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L283" sourceLabel="GlobusTerrain.ts:283" />

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L294" sourceLabel="GlobusTerrain.ts:294" />

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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L303" sourceLabel="GlobusTerrain.ts:303" />

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L317" sourceLabel="GlobusTerrain.ts:317" />

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="onterrainloaded" depth="3" name="_onTerrainLoaded" sig="_onTerrainLoaded(segment: Segment, data: any)" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L367" sourceLabel="GlobusTerrain.ts:367" />

Converts loaded segment data to elevations and applies them.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requested terrain data.
- `data` (any) — Loaded data.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L411" sourceLabel="GlobusTerrain.ts:411" />

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L421" sourceLabel="GlobusTerrain.ts:421" />

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L437" sourceLabel="GlobusTerrain.ts:437" />

**Overrides:&#x20;**`EmptyTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom-created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L446" sourceLabel="GlobusTerrain.ts:446" />

Converts loaded data to segment elevation data type (column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L469" sourceLabel="GlobusTerrain.ts:469" />

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L239" sourceLabel="EmptyTerrain.ts:239" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`EmptyTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L251" sourceLabel="EmptyTerrain.ts:251" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`EmptyTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L309" sourceLabel="EmptyTerrain.ts:309" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`EmptyTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getmaxheight" depth="3" name="getMaxHeight" sig="getMaxHeight(): number" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L324" sourceLabel="EmptyTerrain.ts:324" />

_Inherited from `EmptyTerrain#getMaxHeight`_

**Overrides:&#x20;**`EmptyTerrain#getMaxHeight`

Returns the highest terrain point over the ellipsoid with the terrain height factor, in meters.

**Returns**

- `number`

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L337" sourceLabel="EmptyTerrain.ts:337" />

_Inherited from `EmptyTerrain#getCacheInfo`_

**Overrides:&#x20;**`EmptyTerrain#getCacheInfo`

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L260" sourceLabel="EmptyTerrain.ts:260" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`EmptyTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
