---
title: EmptyTerrain
kind: class
longname: EmptyTerrain
description: Class represents terrain provider without elevation data.
---

# EmptyTerrain

<SourceLink href="/source/terrain/emptyterrain-ts/#L45" label="EmptyTerrain.ts:45" />

Class represents terrain provider without elevation data.

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

---

## Instance Methods

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L202" sourceLabel="EmptyTerrain.ts:202" />

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L217" sourceLabel="EmptyTerrain.ts:217" />

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L229" sourceLabel="EmptyTerrain.ts:229" />

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L287" sourceLabel="EmptyTerrain.ts:287" />

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L238" sourceLabel="EmptyTerrain.ts:238" />

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L247" sourceLabel="EmptyTerrain.ts:247" />

Sets terrain provider icon.

**Parameters**

- `src` (string | null) — Icon source.
