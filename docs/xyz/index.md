---
title: XYZ
kind: class
longname: XYZ
description: Represents an imagery tiles source provider.
---

# XYZ

**Extends:&#x20;**[`Layer`](/layer)

<SourceLink href="/source/layer/xyz-ts/#L55" label="XYZ.ts:55" />

Represents an imagery tiles source provider.

**Fires**

- `event:load`
- `event:loadend`

**Example**

Creates OpenStreetMap base tile layer

```js
new og.layer.XYZ("OpenStreetMap", {
    isBaseLayer: true,
    url: "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png",
    visibility: true,
    attribution: 'Data @ <a href="http://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="http://www.openstreetmap.org/copyright">ODbL</a>'
});
```

---

## Constructor

<Signature code="new XYZ(name: string, options:: IXYZParams): XYZ" />

**Parameters**

- `name` (string) — Layer name.
- `options:` (IXYZParams)
- `options.opacity` (number, optional, default: "1.0") — Layer opacity.
- `options.subdomains` (Array.\<string>, optional, default: "\['a','b','c']") — Subdomains of the tile service.
- `options.minZoom` (number, optional, default: 0) — Minimal visibility zoom level.
- `options.maxZoom` (number, optional, default: 0) — Maximal visibility zoom level.
- `options.minNativeZoom` (number, optional, default: 0) — Minimal available zoom level.
- `options.maxNativeZoom` (number, optional, default: 19) — Maximal available zoom level.
- `options.attribution` (string, optional) — Layer attribution shown in the attribution area.
- `options.isBaseLayer` (boolean, optional, default: false) — Base layer flag.
- `options.visibility` (boolean, optional, default: true) — Layer visibility.
- `options.crossOrigin` (string, optional, default: true) — If true, all tiles will have their crossOrigin attribute set to ''.
- `options.url` (string) — Tile url source template(see example below).
- `options.textureFilter` (string) — Texture WebGL filter: NEAREST, LINEAR, MIPMAP, ANISOTROPIC.
- `options.urlRewrite` (function) — URL rewrite function.

---

## Instance Methods

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/layer/xyz-ts/#L118" sourceLabel="XYZ.ts:118" />

Abort loading tiles.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/xyz-ts/#L129" sourceLabel="XYZ.ts:129" />

**Overrides:&#x20;**`Layer#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="seturl" depth="3" name="setUrl" sig="setUrl(url: string)" />

<MemberMeta sourceHref="/source/layer/xyz-ts/#L152" sourceLabel="XYZ.ts:152" />

Sets imagery tiles url source template.

**Parameters**

- `url` (string) — Url template.

**Example**

```js
http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
where {z}, {x} and {y} - replaces by current tile values, {s} - random domain.
```

<MemberHeading id="loadmaterial" depth="3" name="loadMaterial" sig="loadMaterial(material: Material, forceLoading?: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/xyz-ts/#L167" sourceLabel="XYZ.ts:167" />

Start to load tile material.

**Parameters**

- `material` ([Material](/material)) — Loads current material.
- `forceLoading` (boolean, optional, default: false)

<MemberHeading id="createurl" depth="3" name="_createUrl" sig="_createUrl(segment: Segment): string" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/xyz-ts/#L226" sourceLabel="XYZ.ts:226" />

Creates query url.

**Parameters**

- `segment` ([Segment](/segment)) — Creates specific url for current segment.

**Returns**

- `string` — URL string.

<MemberHeading id="gethttprequeststring" depth="3" name="_getHTTPRequestString" sig="_getHTTPRequestString(segment: Segment): string" />

<MemberMeta badges="protected" sourceHref="/source/layer/xyz-ts/#L251" sourceLabel="XYZ.ts:251" />

Returns actual url query string.

**Parameters**

- `segment` ([Segment](/segment)) — Segment that loads image data.

**Returns**

- `string` — URL string.

<MemberHeading id="seturlrewritecallback" depth="3" name="setUrlRewriteCallback" sig="setUrlRewriteCallback(ur: function)" />

<MemberMeta sourceHref="/source/layer/xyz-ts/#L260" sourceLabel="XYZ.ts:260" />

Sets url rewrite callback, used for custom url rewriting for every tile loading.

**Parameters**

- `ur` (function) — The callback that returns tile custom created url.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/xyz-ts/#L413" sourceLabel="XYZ.ts:413" />

**Overrides:&#x20;**`Layer#_correctFullExtent`

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L484" sourceLabel="Layer.ts:484" />

_Inherited from `Layer#hasImageryTiles`_

**Overrides:&#x20;**`Layer#hasImageryTiles`

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L493" sourceLabel="Layer.ts:493" />

_Inherited from `Layer#getID`_

**Overrides:&#x20;**`Layer#getID`

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L514" sourceLabel="Layer.ts:514" />

_Inherited from `Layer#isEqual`_

**Overrides:&#x20;**`Layer#isEqual`

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L524" sourceLabel="Layer.ts:524" />

_Inherited from `Layer#_assignPlanet`_

**Overrides:&#x20;**`Layer#_assignPlanet`

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L564" sourceLabel="Layer.ts:564" />

_Inherited from `Layer#_bindPicking`_

**Overrides:&#x20;**`Layer#_bindPicking`

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L573" sourceLabel="Layer.ts:573" />

_Inherited from `Layer#addTo`_

**Overrides:&#x20;**`Layer#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L584" sourceLabel="Layer.ts:584" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`Layer#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L610" sourceLabel="Layer.ts:610" />

_Inherited from `Layer#clear`_

**Overrides:&#x20;**`Layer#clear`

Clears layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L629" sourceLabel="Layer.ts:629" />

_Inherited from `Layer#setAttribution`_

**Overrides:&#x20;**`Layer#setAttribution`

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L641" sourceLabel="Layer.ts:641" />

_Inherited from `Layer#getAttribution`_

**Overrides:&#x20;**`Layer#getAttribution`

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L650" sourceLabel="Layer.ts:650" />

_Inherited from `Layer#setHeight`_

**Overrides:&#x20;**`Layer#setHeight`

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L660" sourceLabel="Layer.ts:660" />

_Inherited from `Layer#getHeight`_

**Overrides:&#x20;**`Layer#getHeight`

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L669" sourceLabel="Layer.ts:669" />

_Inherited from `Layer#setZIndex`_

**Overrides:&#x20;**`Layer#setZIndex`

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L679" sourceLabel="Layer.ts:679" />

_Inherited from `Layer#getZIndex`_

**Overrides:&#x20;**`Layer#getZIndex`

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L687" sourceLabel="Layer.ts:687" />

_Inherited from `Layer#bringToFront`_

**Overrides:&#x20;**`Layer#bringToFront`

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L702" sourceLabel="Layer.ts:702" />

_Inherited from `Layer#isBaseLayer`_

**Overrides:&#x20;**`Layer#isBaseLayer`

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L711" sourceLabel="Layer.ts:711" />

_Inherited from `Layer#setBaseLayer`_

**Overrides:&#x20;**`Layer#setBaseLayer`

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L807" sourceLabel="Layer.ts:807" />

_Inherited from `Layer#getVisibility`_

**Overrides:&#x20;**`Layer#getVisibility`

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L816" sourceLabel="Layer.ts:816" />

_Inherited from `Layer#setExtent`_

**Overrides:&#x20;**`Layer#setExtent`

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L841" sourceLabel="Layer.ts:841" />

_Inherited from `Layer#getExtent`_

**Overrides:&#x20;**`Layer#getExtent`

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L850" sourceLabel="Layer.ts:850" />

_Inherited from `Layer#getExtentMerc`_

**Overrides:&#x20;**`Layer#getExtentMerc`

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L858" sourceLabel="Layer.ts:858" />

_Inherited from `Layer#flyExtent`_

**Overrides:&#x20;**`Layer#flyExtent`

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L866" sourceLabel="Layer.ts:866" />

_Inherited from `Layer#viewExtent`_

**Overrides:&#x20;**`Layer#viewExtent`

View extent.

## Instance Fields

<MemberHeading id="isidle" depth="3" name="isIdle" sig="isIdle" />

<MemberMeta sourceHref="/source/layer/xyz-ts/#L106" sourceLabel="XYZ.ts:106" />

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

_Inherited from `Layer#_pickingColor`_

**Overrides:&#x20;**`Layer#_pickingColor`

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L458" sourceLabel="Layer.ts:458" />

_Inherited from `Layer#nightTextureCoefficient`_

**Overrides:&#x20;**`Layer#nightTextureCoefficient`

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L504" sourceLabel="Layer.ts:504" />

_Inherited from `Layer#_id`_

**Overrides:&#x20;**`Layer#_id`

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L620" sourceLabel="Layer.ts:620" />

_Inherited from `Layer#planet`_

**Overrides:&#x20;**`Layer#planet`

Returns planet instance.
