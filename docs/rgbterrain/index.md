---
title: RgbTerrain
kind: class
longname: RgbTerrain
---

# RgbTerrain

**Extends:&#x20;**[`GlobusTerrain`](/globusterrain)

<SourceLink href="/source/terrain/rgbterrain-ts/#L97" label="RgbTerrain.ts:97" />

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
  - `options.imageDataCacheSize` (number, optional, default: 50) — Number of images which pixels are kept for getHeightAsync, the least recently used are loaded again.
  - `options.minHeight` (number, optional, default: -10000) — Minimal height for RGB-to-height conversion.
  - `options.resolution` (number, optional, default: 0.1) — RGB-to-height conversion resolution.
  - `options.encoding` (RgbTerrainEncoding, optional, default: "\\"rgb\\"") — RGB elevation encoding: `"rgb"` (default) or `"terrarium"`. Ignored when `options.rgbToHeightFunc` is set.
  - `options.rgbToHeightFunc` (RgbToHeightFunc, optional) — Custom RGB-to-height decoder with signature `(r, g, b, minHeight, resolution) => number`. Defaults to `rgbToHeightByEncoding[options.encoding]`.

---

## Instance Methods

<MemberHeading id="isbuiltindecoding" depth="3" name="_isBuiltInDecoding" sig="_isBuiltInDecoding(): boolean" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L180" sourceLabel="RgbTerrain.ts:180" />

Returns true when "rgb" or "terrarium" heights are decoded without rgb2Height calls.

**Returns**

- `boolean`

<MemberHeading id="isworkerdecoding" depth="3" name="_isWorkerDecoding" sig="_isWorkerDecoding(data: HTMLImageElement | ImageBitmap): boolean" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L190" sourceLabel="RgbTerrain.ts:190" />

Returns true when the loaded image heights are created in the worker.

**Parameters**

- `data` (HTMLImageElement | ImageBitmap) — Loaded image.

**Returns**

- `boolean`

<MemberHeading id="cacheheightslevels" depth="3" name="_cacheHeightsLevels" sig="_cacheHeightsLevels(): Float32Array" />

<MemberMeta badges="protected" sourceHref="/source/terrain/rgbterrain-ts/#L289" sourceLabel="RgbTerrain.ts:289" />

Saves the tile and its subdivision levels heights to cache.

**Returns**

- `Float32Array`

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L279" sourceLabel="GlobusTerrain.ts:279" />

_Inherited from `GlobusTerrain#abortLoading`_

**Overrides:&#x20;**`GlobusTerrain#abortLoading`

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L290" sourceLabel="GlobusTerrain.ts:290" />

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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L299" sourceLabel="GlobusTerrain.ts:299" />

_Inherited from `GlobusTerrain#setName`_

**Overrides:&#x20;**`GlobusTerrain#setName`

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L313" sourceLabel="GlobusTerrain.ts:313" />

_Inherited from `GlobusTerrain#loadTerrain`_

**Overrides:&#x20;**`GlobusTerrain#loadTerrain`

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="onterrainloaded" depth="3" name="_onTerrainLoaded" sig="_onTerrainLoaded(segment: Segment, data: any)" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L363" sourceLabel="GlobusTerrain.ts:363" />

_Inherited from `GlobusTerrain#_onTerrainLoaded`_

**Overrides:&#x20;**`GlobusTerrain#_onTerrainLoaded`

Converts loaded segment data to elevations and applies them.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requested terrain data.
- `data` (any) — Loaded data.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L407" sourceLabel="GlobusTerrain.ts:407" />

_Inherited from `GlobusTerrain#_createUrl`_

**Overrides:&#x20;**`GlobusTerrain#_createUrl`

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L417" sourceLabel="GlobusTerrain.ts:417" />

_Inherited from `GlobusTerrain#_getHTTPRequestString`_

**Overrides:&#x20;**`GlobusTerrain#_getHTTPRequestString`

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L433" sourceLabel="GlobusTerrain.ts:433" />

_Inherited from `GlobusTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`GlobusTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom-created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L442" sourceLabel="GlobusTerrain.ts:442" />

_Inherited from `GlobusTerrain#_createHeights`_

**Overrides:&#x20;**`GlobusTerrain#_createHeights`

Converts loaded data to segment elevation data type (column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L465" sourceLabel="GlobusTerrain.ts:465" />

_Inherited from `GlobusTerrain#_applyElevationsData`_

**Overrides:&#x20;**`GlobusTerrain#_applyElevationsData`

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L227" sourceLabel="EmptyTerrain.ts:227" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`GlobusTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L239" sourceLabel="EmptyTerrain.ts:239" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`GlobusTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L297" sourceLabel="EmptyTerrain.ts:297" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`GlobusTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L316" sourceLabel="EmptyTerrain.ts:316" />

_Inherited from `EmptyTerrain#getCacheInfo`_

**Overrides:&#x20;**`GlobusTerrain#getCacheInfo`

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L248" sourceLabel="EmptyTerrain.ts:248" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`GlobusTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
