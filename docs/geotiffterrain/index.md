---
title: GeoTiffTerrain
kind: class
longname: GeoTiffTerrain
description: Terrain with the heights of a GeoTIFF or COG elevation band.
---

# GeoTiffTerrain

**Extends:&#x20;**[`ProceduralTerrain`](/proceduralterrain)

<SourceLink href="/source/terrain/geotiffterrain-ts/#L35" label="GeoTiffTerrain.ts:35" />

Terrain with the heights of a GeoTIFF or COG elevation band.

---

## Constructor

<Signature
  code="new GeoTiffTerrain(
	name?: string,
	options: IGeoTiffTerrainParams,
): GeoTiffTerrain"
/>

**Parameters**

- `name` (string, optional, default: "\\"GeoTiffTerrain\\"") — Terrain provider name.
- `options` (IGeoTiffTerrainParams) — Provider options:
  - `options.src` (string | Blob | File | ArrayBuffer) — GeoTIFF url or binary.
  - `options.sampleSize` (number, optional, default: 256) — Pixels by the segment side read from the GeoTIFF, power of two, not less than plainGridSize. The GeoTIFF overview is taken by them.
  - `options.band` (number, optional, default: 1) — Elevation band.
  - `options.attribution` (string, optional, default: "\\"\\"") — Elevation source attribution shown in the attribution area.
  - `options.plainGridSize` (number, optional, default: 128) — Elevation grid size.
  - `options.maxZoom` (number, optional, default: 21) — Last zoom of the segment heights, the last zoom of the default grid sizes.
  - `options.maxNativeZoom` (number, optional) — Last zoom of the GeoTIFF reads, by default, the first zoom which sampleSize pixels are not larger than the GeoTIFF ones. Deeper segments are its subdivision levels.
  - `options.geoidSrc` (string, optional, default: "\\"https\://openglobus.org/geoid/egm84-30.pgm\\"") — Geoid of the heights.
  - `options.noDataValues` (Array.\<number>, optional, default: "\[-10000]") — Heights of no data, GeoTIFF nodata pixels become the first one.
  - `options.nodata` (number | null, optional) — GeoTIFF nodata value, from the GeoTIFF by default.
  - `options.crs` (number | string, optional) — GeoTIFF CRS code, when the GeoTIFF has another one or none.

---

## Instance Methods

<MemberHeading id="getheightasync" depth="3" name="getHeightAsync" sig="getHeightAsync()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L184" sourceLabel="ProceduralTerrain.ts:184" />

_Inherited from `ProceduralTerrain#getHeightAsync`_

**Overrides:&#x20;**`ProceduralTerrain#getHeightAsync`

Returns the height under the point from the zoom tile heights, they are made for the request if there are none. Calls back right away and returns true when the heights are ready.

<MemberHeading id="getsegmentheights" depth="3" name="_getSegmentHeights" sig="_getSegmentHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L265" sourceLabel="ProceduralTerrain.ts:265" />

_Inherited from `ProceduralTerrain#_getSegmentHeights`_

**Overrides:&#x20;**`ProceduralTerrain#_getSegmentHeights`

Returns the segment heights, or the promise of them while they are made. Every tile heights are requested once, failed requests are made again next time.

<MemberHeading id="getlevelheights" depth="3" name="_getLevelHeights" sig="_getLevelHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L307" sourceLabel="ProceduralTerrain.ts:307" />

_Inherited from `ProceduralTerrain#_getLevelHeights`_

**Overrides:&#x20;**`ProceduralTerrain#_getLevelHeights`

Returns the subdivision level heights of the maxNativeZoom segment, made of its pixels when they are needed. Levels end at the vertex grid, deeper segments have no heights and take the terrain of the level above.

<MemberHeading id="getnativesegment" depth="3" name="_getNativeSegment" sig="_getNativeSegment()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L343" sourceLabel="ProceduralTerrain.ts:343" />

_Inherited from `ProceduralTerrain#_getNativeSegment`_

**Overrides:&#x20;**`ProceduralTerrain#_getNativeSegment`

Returns the maxNativeZoom segment of the deeper segment, out of the quad tree for the height requests.

<MemberHeading id="togridheights" depth="3" name="_toGridHeights" sig="_toGridHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L383" sourceLabel="ProceduralTerrain.ts:383" />

_Inherited from `ProceduralTerrain#_toGridHeights`_

**Overrides:&#x20;**`ProceduralTerrain#_toGridHeights`

Returns the grid heights of the segment, or the promise of them the worker makes. The maxNativeZoom segment with subdivision levels keeps its pixels to make them.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L212" sourceLabel="EmptyTerrain.ts:212" />

_Inherited from `EmptyTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`ProceduralTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L227" sourceLabel="EmptyTerrain.ts:227" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`ProceduralTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L239" sourceLabel="EmptyTerrain.ts:239" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`ProceduralTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L297" sourceLabel="EmptyTerrain.ts:297" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`ProceduralTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L316" sourceLabel="EmptyTerrain.ts:316" />

_Inherited from `EmptyTerrain#getCacheInfo`_

**Overrides:&#x20;**`ProceduralTerrain#getCacheInfo`

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L248" sourceLabel="EmptyTerrain.ts:248" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`ProceduralTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
