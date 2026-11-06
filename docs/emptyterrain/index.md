---
title: EmptyTerrain
kind: class
longname: EmptyTerrain
description: Class represents a terrain provider without elevation data.
---

# EmptyTerrain

<SourceLink href="/source/terrain/emptyterrain-ts/#L58" label="EmptyTerrain.ts:58" />

Class represents a terrain provider without elevation data.

---

## Constructor

<Signature code="new EmptyTerrain(options?: IEmptyTerrainParams): EmptyTerrain" />

**Parameters**

- `options` (IEmptyTerrainParams, optional) — Provider options:
  - `options.name` (string, optional, default: "\\"empty\\"") — Provider name.
  - `options.attribution` (string, optional, default: "\\"\\"") — Terrain attribution shown in the attribution area.
  - `options.iconSrc` (string | null, optional) — Icon for LayerSwitcher.
  - `options.equalizeVertices` (boolean, optional, default: false) — Enables vertex equalization on tile borders.
  - `options.minZoom` (number, optional, default: 2) — Minimal visible zoom index when terrain handler works.
  - `options.maxZoom` (number, optional, default: 19) — Maximal visible zoom index when terrain handler works.
  - `options.maxNativeZoom` (number, optional, default: 19) — Maximal available terrain zoom level.
  - `options.gridSizeByZoom` (Array.\<number>, optional) — Segment triangulation grid sizes by zoom index.
  - `options.geoid` (Geoid, optional) — Geoid model instance.
  - `options.geoidSrc` (string, optional) — URL to geoid model source.
  - `options.maxHeight` (number, optional, default: 8848) — The highest terrain point over the ellipsoid, in meters. Segments behind the horizon of a point this high are not rendered.

---

## Instance Methods

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L225" sourceLabel="EmptyTerrain.ts:225" />

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L240" sourceLabel="EmptyTerrain.ts:240" />

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L252" sourceLabel="EmptyTerrain.ts:252" />

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L310" sourceLabel="EmptyTerrain.ts:310" />

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L325" sourceLabel="EmptyTerrain.ts:325" />

Returns the terrain extent, the whole globe by default.

**Returns**

- [`Extent`](/extent)

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L333" sourceLabel="EmptyTerrain.ts:333" />

Flies the camera of the planet the terrain is active on to the terrain extent.

<MemberHeading id="getmaxheight" depth="3" name="getMaxHeight" sig="getMaxHeight(): number" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L342" sourceLabel="EmptyTerrain.ts:342" />

Returns the highest terrain point over the ellipsoid with the terrain height factor, in meters.

**Returns**

- `number`

<MemberHeading id="getcacheinfo" depth="3" name="getCacheInfo" sig="getCacheInfo(): ITerrainCacheInfo | null" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L355" sourceLabel="EmptyTerrain.ts:355" />

Returns the cache state, null when the terrain has no cache.

**Returns**

- `ITerrainCacheInfo | null`

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L261" sourceLabel="EmptyTerrain.ts:261" />

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L270" sourceLabel="EmptyTerrain.ts:270" />

Sets terrain provider icon.

**Parameters**

- `src` (string | null) — Icon source.
