---
title: MapterhornTerrain
kind: class
longname: MapterhornTerrain
description: Mapterhorn Web Mercator RGB terrain (512px WebP tiles, Terrarium encoding).
---

# MapterhornTerrain

**Extends:&#x20;**[`RgbTerrain`](/rgbterrain)

<SourceLink href="/source/terrain/mapterhornterrain-ts/#L11" label="MapterhornTerrain.ts:11" />

Mapterhorn Web Mercator RGB terrain (512px WebP tiles, Terrarium encoding).

---

## Constructor

<Signature code="new MapterhornTerrain(name, options): MapterhornTerrain" />

---

## Instance Methods

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L326" sourceLabel="GlobusTerrain.ts:326" />

_Inherited from `GlobusTerrain#abortLoading`_

**Overrides:&#x20;**`RgbTerrain#abortLoading`

Stop loading.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L337" sourceLabel="GlobusTerrain.ts:337" />

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

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L346" sourceLabel="GlobusTerrain.ts:346" />

_Inherited from `GlobusTerrain#setName`_

**Overrides:&#x20;**`RgbTerrain#setName`

Sets provider name.

**Parameters**

- `name` (string) — Name.

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(segment: Segment, forceLoading?: boolean)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L360" sourceLabel="GlobusTerrain.ts:360" />

_Inherited from `GlobusTerrain#loadTerrain`_

**Overrides:&#x20;**`RgbTerrain#loadTerrain`

Starts to load segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that requests terrain data.
- `forceLoading` (boolean, optional, default: false) — Forces loading even if default filter would skip it.

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L444" sourceLabel="GlobusTerrain.ts:444" />

_Inherited from `GlobusTerrain#_createUrl`_

**Overrides:&#x20;**`RgbTerrain#_createUrl`

Creates default query url string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create URL for.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L454" sourceLabel="GlobusTerrain.ts:454" />

_Inherited from `GlobusTerrain#_getHTTPRequestString`_

**Overrides:&#x20;**`RgbTerrain#_getHTTPRequestString`

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads terrain data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: UrlRewriteFunc)" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L470" sourceLabel="GlobusTerrain.ts:470" />

_Inherited from `GlobusTerrain#setUrlRewriteCallback`_

**Overrides:&#x20;**`RgbTerrain#setUrlRewriteCallback`

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (UrlRewriteFunc) — The callback that returns tile custom created url.

<MemberHeading id="createheights" depth="3" name="_createHeights" sig="_createHeights(): Array.<number> | TypedArray" />

<MemberMeta sourceHref="/source/terrain/globusterrain-ts/#L479" sourceLabel="GlobusTerrain.ts:479" />

_Inherited from `GlobusTerrain#_createHeights`_

**Overrides:&#x20;**`RgbTerrain#_createHeights`

Converts loaded data to segment elevation data type(column major elevation data array in meters)

**Returns**

- `Array.<number> | TypedArray` — Column-major elevation data array in meters.

<MemberHeading id="applyelevationsdata" depth="3" name="_applyElevationsData" sig="_applyElevationsData()" />

<MemberMeta badges="protected" sourceHref="/source/terrain/globusterrain-ts/#L502" sourceLabel="GlobusTerrain.ts:502" />

_Inherited from `GlobusTerrain#_applyElevationsData`_

**Overrides:&#x20;**`RgbTerrain#_applyElevationsData`

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L216" sourceLabel="EmptyTerrain.ts:216" />

_Inherited from `EmptyTerrain#setAttribution`_

**Overrides:&#x20;**`RgbTerrain#setAttribution`

Sets terrain provider attribution text.

**Parameters**

- `html` (string) — HTML string that represents terrain provider attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L228" sourceLabel="EmptyTerrain.ts:228" />

_Inherited from `EmptyTerrain#getAttribution`_

**Overrides:&#x20;**`RgbTerrain#getAttribution`

Gets terrain provider attribution.

**Returns**

- `string` — Terrain provider attribution.

<MemberHeading id="handlesegmentterrain" depth="3" name="handleSegmentTerrain" sig="handleSegmentTerrain(segment: Segment)" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L286" sourceLabel="EmptyTerrain.ts:286" />

_Inherited from `EmptyTerrain#handleSegmentTerrain`_

**Overrides:&#x20;**`RgbTerrain#handleSegmentTerrain`

Loads or creates segment elevation data.

**Parameters**

- `segment` ([Segment](/segment)) — Segment to create elevation data.

## Instance Fields

<MemberHeading id="iconsrc" depth="3" name="iconSrc" sig="iconSrc" />

<MemberMeta sourceHref="/source/terrain/emptyterrain-ts/#L237" sourceLabel="EmptyTerrain.ts:237" />

_Inherited from `EmptyTerrain#iconSrc`_

**Overrides:&#x20;**`RgbTerrain#iconSrc`

Gets terrain provider icon.

**Returns**

- `string | null` — Icon source.
