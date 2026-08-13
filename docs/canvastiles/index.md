---
title: CanvasTiles
kind: class
longname: CanvasTiles
description: Layer that renders each tile as a separate canvas object.
---

# CanvasTiles

**Extends:&#x20;**[`Layer`](/layer)

<SourceLink href="/source/layer/canvastiles-ts/#L56" label="CanvasTiles.ts:56" />

Layer that renders each tile as a separate canvas object.

**Fires**

- `event:load`
- `event:loadend`

---

## Constructor

<Signature
  code="new CanvasTiles(
	name?: string,
	options: ICanvasTilesParams,
): CanvasTiles"
/>

**Parameters**

- `name` (string, optional, default: "\\"noname\\"") — Layer name.
- `options` (ICanvasTilesParams) — Layer options.
  - `options.opacity` (number, optional, default: "1.0") — Layer opacity.
  - `options.minZoom` (number, optional, default: 0) — Minimal visibility zoom level.
  - `options.maxZoom` (number, optional, default: 50) — Maximal visibility zoom level.
  - `options.attribution` (string, optional) — Layer attribution shown in the attribution area.
  - `options.isBaseLayer` (boolean, optional, default: false) — Base layer flag.
  - `options.visibility` (boolean, optional, default: true) — Layer visibility.
  - `options.animated` (boolean, optional, default: false) — Re-draw ready tiles every frame.
  - `options.minNativeZoom` (number, optional, default: 0) — Minimal zoom level where native tile drawing is allowed.
  - `options.maxNativeZoom` (number, optional, default: 100) — Maximal zoom level where native tile drawing is allowed.
  - `options.drawTile` (DrawTileCallback) — Draw tile callback.

---

## Instance Methods

<MemberHeading id="abortloading" depth="3" name="abortLoading" sig="abortLoading()" />

<MemberMeta sourceHref="/source/layer/canvastiles-ts/#L137" sourceLabel="CanvasTiles.ts:137" />

Abort loading tiles.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/canvastiles-ts/#L149" sourceLabel="CanvasTiles.ts:149" />

**Overrides:&#x20;**`Layer#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="loadmaterial" depth="3" name="loadMaterial" sig="loadMaterial(material: Material)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/canvastiles-ts/#L165" sourceLabel="CanvasTiles.ts:165" />

Start to load tile material.

**Parameters**

- `material` ([Material](/material))

<MemberHeading id="exec" depth="3" name="_exec" sig="_exec(material: Material)" />

<MemberMeta badges="protected" sourceHref="/source/layer/canvastiles-ts/#L190" sourceLabel="CanvasTiles.ts:190" />

Loads material image and apply it to the planet segment.

**Parameters**

- `material` ([Material](/material)) — Loads material image.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/canvastiles-ts/#L220" sourceLabel="CanvasTiles.ts:220" />

Abort exact material loading.

**Parameters**

- `material` ([Material](/material)) — Segment material.

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L471" sourceLabel="Layer.ts:471" />

_Inherited from `Layer#hasImageryTiles`_

**Overrides:&#x20;**`Layer#hasImageryTiles`

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L480" sourceLabel="Layer.ts:480" />

_Inherited from `Layer#getID`_

**Overrides:&#x20;**`Layer#getID`

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L501" sourceLabel="Layer.ts:501" />

_Inherited from `Layer#isEqual`_

**Overrides:&#x20;**`Layer#isEqual`

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L511" sourceLabel="Layer.ts:511" />

_Inherited from `Layer#_assignPlanet`_

**Overrides:&#x20;**`Layer#_assignPlanet`

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L551" sourceLabel="Layer.ts:551" />

_Inherited from `Layer#_bindPicking`_

**Overrides:&#x20;**`Layer#_bindPicking`

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L560" sourceLabel="Layer.ts:560" />

_Inherited from `Layer#addTo`_

**Overrides:&#x20;**`Layer#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L571" sourceLabel="Layer.ts:571" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`Layer#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L597" sourceLabel="Layer.ts:597" />

_Inherited from `Layer#clear`_

**Overrides:&#x20;**`Layer#clear`

Clears layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L616" sourceLabel="Layer.ts:616" />

_Inherited from `Layer#setAttribution`_

**Overrides:&#x20;**`Layer#setAttribution`

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L628" sourceLabel="Layer.ts:628" />

_Inherited from `Layer#getAttribution`_

**Overrides:&#x20;**`Layer#getAttribution`

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L637" sourceLabel="Layer.ts:637" />

_Inherited from `Layer#setHeight`_

**Overrides:&#x20;**`Layer#setHeight`

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L647" sourceLabel="Layer.ts:647" />

_Inherited from `Layer#getHeight`_

**Overrides:&#x20;**`Layer#getHeight`

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L656" sourceLabel="Layer.ts:656" />

_Inherited from `Layer#setZIndex`_

**Overrides:&#x20;**`Layer#setZIndex`

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L666" sourceLabel="Layer.ts:666" />

_Inherited from `Layer#getZIndex`_

**Overrides:&#x20;**`Layer#getZIndex`

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L674" sourceLabel="Layer.ts:674" />

_Inherited from `Layer#bringToFront`_

**Overrides:&#x20;**`Layer#bringToFront`

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L689" sourceLabel="Layer.ts:689" />

_Inherited from `Layer#isBaseLayer`_

**Overrides:&#x20;**`Layer#isBaseLayer`

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L698" sourceLabel="Layer.ts:698" />

_Inherited from `Layer#setBaseLayer`_

**Overrides:&#x20;**`Layer#setBaseLayer`

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L794" sourceLabel="Layer.ts:794" />

_Inherited from `Layer#getVisibility`_

**Overrides:&#x20;**`Layer#getVisibility`

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L803" sourceLabel="Layer.ts:803" />

_Inherited from `Layer#setExtent`_

**Overrides:&#x20;**`Layer#setExtent`

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L828" sourceLabel="Layer.ts:828" />

_Inherited from `Layer#getExtent`_

**Overrides:&#x20;**`Layer#getExtent`

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L837" sourceLabel="Layer.ts:837" />

_Inherited from `Layer#getExtentMerc`_

**Overrides:&#x20;**`Layer#getExtentMerc`

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L845" sourceLabel="Layer.ts:845" />

_Inherited from `Layer#flyExtent`_

**Overrides:&#x20;**`Layer#flyExtent`

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L853" sourceLabel="Layer.ts:853" />

_Inherited from `Layer#viewExtent`_

**Overrides:&#x20;**`Layer#viewExtent`

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L861" sourceLabel="Layer.ts:861" />

_Inherited from `Layer#_correctFullExtent`_

**Overrides:&#x20;**`Layer#_correctFullExtent`

Special correction of the whole globe extent.

## Instance Fields

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

_Inherited from `Layer#_pickingColor`_

**Overrides:&#x20;**`Layer#_pickingColor`

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L446" sourceLabel="Layer.ts:446" />

_Inherited from `Layer#nightTextureCoefficient`_

**Overrides:&#x20;**`Layer#nightTextureCoefficient`

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L491" sourceLabel="Layer.ts:491" />

_Inherited from `Layer#_id`_

**Overrides:&#x20;**`Layer#_id`

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L607" sourceLabel="Layer.ts:607" />

_Inherited from `Layer#planet`_

**Overrides:&#x20;**`Layer#planet`

Returns planet instance.
