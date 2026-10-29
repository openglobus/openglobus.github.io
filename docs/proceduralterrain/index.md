---
title: ProceduralTerrain
kind: class
longname: ProceduralTerrain
description: Terrain with the heights made by a function, without a server.
---

# ProceduralTerrain

**Extends:&#x20;**[`EmptyTerrain`](/emptyterrain)

<SourceLink href="/source/terrain/proceduralterrain-ts/#L81" label="ProceduralTerrain.ts:81" />

Terrain with the heights made by a function, without a server.

**Fires**

- `event:load`
- `event:loadend`

**Example**

```js
// Heights made right away are reduced in the main thread
new ProceduralTerrain("Flat", {
    getHeights: (segment) => new Float32Array(129 * 129).fill(100)
});

// Promised heights are reduced in a worker
new ProceduralTerrain("Loaded", {
    getHeights: (segment) => loadTilePixels(segment) // Promise<Float32Array>
});
```

---

## Constructor

<Signature
  code="new ProceduralTerrain(
	name?: string,
	options: IProceduralTerrainParams,
): ProceduralTerrain"
/>

**Parameters**

- `name` (string, optional, default: "\\"ProceduralTerrain\\"") — Terrain provider name.
- `options` (IProceduralTerrainParams) — Provider options:
  - `options.getHeights` (GetHeightsFunc) — Returns the segment heights, or a promise of them, rows from north to south, vertices evenly spaced in segment.getExtent(), or null when the segment has no terrain. (plainGridSize + 1)² heights are taken as they are. Larger (2^n + 1)² vertices, or 2^n x 2^n pixels, are reduced to them keeping peaks and pits. Segments of the height requests are not in the quad tree, their node is null. The function runs in the main thread. Returned heights are reduced in the main thread too and applied right away, promised heights are reduced in a worker when the promise is resolved.
  - `options.plainGridSize` (number, optional, default: 32) — Elevation grid size.
  - `options.maxNativeZoom` (number, optional, default: "maxZoom") — Last zoom of the height requests. Deeper segments are the subdivision levels of the maxNativeZoom segment heights, as RgbTerrain ones, its pixels keep their heights there.
  - `options.nativeCacheSize` (number, optional, default: 50) — Number of maxNativeZoom segments which pixels are kept to make their levels when they are needed. The least recently used are dropped and requested again.
  - `options.gridSizeByZoom` (Array.\<number>, optional) — Segment grid sizes by zoom, the same as RgbTerrain ones by default.
  - `options.noDataValues` (Array.\<number>, optional) — Heights of no data.

---

## Instance Methods

<MemberHeading id="getheightasync" depth="3" name="getHeightAsync" sig="getHeightAsync()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L184" sourceLabel="ProceduralTerrain.ts:184" />

Returns the height under the point from the zoom tile heights, they are made for the request if there are none. Calls back right away and returns true when the heights are ready.

<MemberHeading id="getsegmentheights" depth="3" name="_getSegmentHeights" sig="_getSegmentHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L265" sourceLabel="ProceduralTerrain.ts:265" />

Returns the segment heights, or the promise of them while they are made. Every tile heights are requested once, failed requests are made again next time.

<MemberHeading id="getlevelheights" depth="3" name="_getLevelHeights" sig="_getLevelHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L307" sourceLabel="ProceduralTerrain.ts:307" />

Returns the subdivision level heights of the maxNativeZoom segment, made of its pixels when they are needed. Levels end at the vertex grid, deeper segments have no heights and take the terrain of the level above.

<MemberHeading id="getnativesegment" depth="3" name="_getNativeSegment" sig="_getNativeSegment()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L343" sourceLabel="ProceduralTerrain.ts:343" />

Returns the maxNativeZoom segment of the deeper segment, out of the quad tree for the height requests.

<MemberHeading id="togridheights" depth="3" name="_toGridHeights" sig="_toGridHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L383" sourceLabel="ProceduralTerrain.ts:383" />

Returns the grid heights of the segment, or the promise of them the worker makes. The maxNativeZoom segment with subdivision levels keeps its pixels to make them.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L212" sourceLabel="EmptyTerrain.ts:212" />

_Inherited from `EmptyTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`EmptyTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

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
