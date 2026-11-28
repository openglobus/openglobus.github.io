---
title: CubeRgbTerrain
kind: class
longname: CubeRgbTerrain
description: RGB encoded height tiles of the six cube faces, for CubeQuadTreeStrategy and EquiangularCubeQuadTreeStrategy.
---

# CubeRgbTerrain

**Extends:&#x20;**[`RgbTerrain`](/rgbterrain)

<SourceLink href="/source/terrain/cubergbterrain-ts/#L22" label="CubeRgbTerrain.ts:22" />

RGB encoded height tiles of the six cube faces, for CubeQuadTreeStrategy and EquiangularCubeQuadTreeStrategy.

**Example**

```js
new CubeRgbTerrain("Moon", {
    url: "./dem/{f}/{z}/{x}/{y}.webp",
    maxNativeZoom: 8,
    maxZoom: 10,
    maxHeight: 10800
});
```

---

## Constructor

<Signature
  code="new CubeRgbTerrain(
	name?: string,
	options: IRgbTerrainParams,
): CubeRgbTerrain"
/>

**Parameters**

- `name` (string, optional, default: "\\"CubeRgbTerrain\\"") — Terrain provider name.
- `options` (IRgbTerrainParams) — RgbTerrain options, no geoid by default. The url template has the face index {f}, it is segment.tileGroup, x counts from the west of the face and y from the north, as segment.tileX and segment.tileY.

---

## Instance Methods

<MemberHeading id="isbuiltindecoding" depth="3" name="_isBuiltInDecoding" sig="_isBuiltInDecoding(): boolean" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L181" sourceLabel="RgbTerrain.ts:181" />

_Inherited from `RgbTerrain#_isBuiltInDecoding`_

**Overrides:&#x20;**`RgbTerrain#_isBuiltInDecoding`

Returns true when "rgb" or "terrarium" heights are decoded without rgb2Height calls.

**Returns**

- `boolean`

<MemberHeading id="isworkerdecoding" depth="3" name="_isWorkerDecoding" sig="_isWorkerDecoding(data: HTMLImageElement | ImageBitmap): boolean" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L191" sourceLabel="RgbTerrain.ts:191" />

_Inherited from `RgbTerrain#_isWorkerDecoding`_

**Overrides:&#x20;**`RgbTerrain#_isWorkerDecoding`

Returns true when the loaded image heights are created in the worker.

**Parameters**

- `data` (HTMLImageElement | ImageBitmap) — Loaded image.

**Returns**

- `boolean`

<MemberHeading id="cacheheightslevels" depth="3" name="_cacheHeightsLevels" sig="_cacheHeightsLevels(): Float32Array" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L280" sourceLabel="RgbTerrain.ts:280" />

_Inherited from `RgbTerrain#_cacheHeightsLevels`_

**Overrides:&#x20;**`RgbTerrain#_cacheHeightsLevels`

Saves the tile and its subdivision levels heights to cache.

**Returns**

- `Float32Array`

<MemberHeading id="gettilelevels" depth="3" name="_getTileLevels" sig="_getTileLevels()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L450" sourceLabel="RgbTerrain.ts:450" />

_Inherited from `RgbTerrain#_getTileLevels`_

**Overrides:&#x20;**`RgbTerrain#_getTileLevels`

Levels of the tile of the zoom, they go down to the vertex grid, to maxZoom. When not every zoom is loaded the native tiles make one level of their pixels, it stands for the tile under them, every other native zoom is loaded. The tile that stands for the missing ones under it goes down to the vertex grid, nativeZoom is 0 there.

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L303" sourceLabel="GlobusTerrain.ts:303" />

_Inherited from `GlobusTerrain#abortLoading`_

**Overrides:&#x20;**`RgbTerrain#abortLoading`

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L314" sourceLabel="GlobusTerrain.ts:314" />

_Inherited from `GlobusTerrain#setUrl`_

**Overrides:&#x20;**`RgbTerrain#setUrl`

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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L323" sourceLabel="GlobusTerrain.ts:323" />

_Inherited from `GlobusTerrain#setName`_

**Overrides:&#x20;**`RgbTerrain#setName`

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L337" sourceLabel="GlobusTerrain.ts:337" />

_Inherited from `GlobusTerrain#loadTerrain`_

**Overrides:&#x20;**`RgbTerrain#loadTerrain`

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="onterrainloaded" depth="3" name="_onTerrainLoaded" sig="_onTerrainLoaded(segment: Segment, data: any)" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L412" sourceLabel="GlobusTerrain.ts:412" />

_Inherited from `GlobusTerrain#_onTerrainLoaded`_

**Overrides:&#x20;**`RgbTerrain#_onTerrainLoaded`

Converts loaded segment data to elevations and applies them.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requested terrain data.
- `data` (any) — Loaded data.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L461" sourceLabel="GlobusTerrain.ts:461" />

_Inherited from `GlobusTerrain#_createUrl`_

**Overrides:&#x20;**`RgbTerrain#_createUrl`

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L471" sourceLabel="GlobusTerrain.ts:471" />

_Inherited from `GlobusTerrain#_getHTTPRequestString`_

**Overrides:&#x20;**`RgbTerrain#_getHTTPRequestString`

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L487" sourceLabel="GlobusTerrain.ts:487" />

_Inherited from `GlobusTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`RgbTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom-created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L496" sourceLabel="GlobusTerrain.ts:496" />

_Inherited from `GlobusTerrain#_createHeights`_

**Overrides:&#x20;**`RgbTerrain#_createHeights`

Converts loaded data to segment elevation data type (column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L519" sourceLabel="GlobusTerrain.ts:519" />

_Inherited from `GlobusTerrain#_applyElevationsData`_

**Overrides:&#x20;**`RgbTerrain#_applyElevationsData`

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L264" sourceLabel="EmptyTerrain.ts:264" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`RgbTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L276" sourceLabel="EmptyTerrain.ts:276" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`RgbTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L334" sourceLabel="EmptyTerrain.ts:334" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`RgbTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L349" sourceLabel="EmptyTerrain.ts:349" />

_Inherited from `EmptyTerrain#getExtent`_

**Overrides:&#x20;**`RgbTerrain#getExtent`

Returns the terrain extent, the whole globe by default.

**Returns**

- [`Extent`](/extent)

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L357" sourceLabel="EmptyTerrain.ts:357" />

_Inherited from `EmptyTerrain#flyExtent`_

**Overrides:&#x20;**`RgbTerrain#flyExtent`

Flies the camera of the planet the terrain is active on to the terrain extent.

<MemberHeading id="getmaxheight" depth="3" name="getMaxHeight" sig="getMaxHeight(): number" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L366" sourceLabel="EmptyTerrain.ts:366" />

_Inherited from `EmptyTerrain#getMaxHeight`_

**Overrides:&#x20;**`RgbTerrain#getMaxHeight`

Returns the highest terrain point over the ellipsoid with the terrain height factor, in meters.

**Returns**

- `number`

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L379" sourceLabel="EmptyTerrain.ts:379" />

_Inherited from `EmptyTerrain#getCacheInfo`_

**Overrides:&#x20;**`RgbTerrain#getCacheInfo`

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L285" sourceLabel="EmptyTerrain.ts:285" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`RgbTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
