---
title: ProceduralTerrain
kind: class
longname: ProceduralTerrain
description: Terrain with the heights made by a function, without a server.
---

# ProceduralTerrain

**Extends:&#x20;**[`EmptyTerrain`](/emptyterrain)

<SourceLink href="/source/terrain/proceduralterrain-ts/#L49" label="ProceduralTerrain.ts:49" />

Terrain with the heights made by a function, without a server.

**Fires**

- `event:load`
- `event:loadend`

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
  - `options.getHeights` (GetHeightsFunc) — Returns the segment heights, or a promise of them, rows from north to south, vertices evenly spaced in segment.getExtent(), or null when the segment has no terrain. (plainGridSize + 1)² heights are taken as they are. Larger (2^n + 1)² vertices, or 2^n x 2^n pixels, are reduced to them keeping peaks and pits. Segments of the height requests are not in the quad tree, their node is null.
  - `options.plainGridSize` (number, optional, default: 32) — Elevation grid size.
  - `options.gridSizeByZoom` (Array.\<number>, optional) — Segment grid sizes by zoom, the same as RgbTerrain ones by default.
  - `options.noDataValues` (Array.\<number>, optional) — Heights of no data.

---

## Instance Methods

<MemberHeading id="getheightasync" depth="3" name="getHeightAsync" sig="getHeightAsync()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L144" sourceLabel="ProceduralTerrain.ts:144" />

Returns the height under the point from the zoom tile heights, they are made for the request if there are none. Calls back right away and returns true when the heights are ready.

<MemberHeading id="getsegmentheights" depth="3" name="_getSegmentHeights" sig="_getSegmentHeights()" />

<MemberMeta sourceHref="/source/terrain/proceduralterrain-ts/#L214" sourceLabel="ProceduralTerrain.ts:214" />

Returns the segment heights, or the promise of them while they are made. Every tile heights are requested once, failed requests are made again next time.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L202" sourceLabel="EmptyTerrain.ts:202" />

_Inherited from `EmptyTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`EmptyTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L217" sourceLabel="EmptyTerrain.ts:217" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`EmptyTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L229" sourceLabel="EmptyTerrain.ts:229" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`EmptyTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L287" sourceLabel="EmptyTerrain.ts:287" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`EmptyTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L238" sourceLabel="EmptyTerrain.ts:238" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`EmptyTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
