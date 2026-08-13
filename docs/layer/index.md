---
title: Layer
kind: class
longname: Layer
description: Base class; normally only used for creating subclasses and not instantiated in apps. A visual representation of raster or vector map data well known as a layer.
---

# Layer

<SourceLink href="/source/layer/layer-ts/#L108" label="Layer.ts:108" />

Base class; normally only used for creating subclasses and not instantiated in apps. A visual representation of raster or vector map data well known as a layer.

**Fires**

- `event:visibilitychange`
- `event:baselayerchange`
- `event:add`
- `event:remove`
- `event:mousemove`
- `event:mouseenter`
- `event:mouseleave`
- `event:lclick`
- `event:rclick`
- `event:mclick`
- `event:ldblclick`
- `event:rdblclick`
- `event:mdblclick`
- `event:lup`
- `event:rup`
- `event:mup`
- `event:ldown`
- `event:rdown`
- `event:mdown`
- `event:lhold`
- `event:rhold`
- `event:mhold`
- `event:mousewheel`
- `event:touchmove`
- `event:touchstart`
- `event:touchend`
- `event:doubletouch`

---

## Constructor

<Signature code="new Layer(name?: string | null, options?: ILayerParams): Layer" />

**Parameters**

- `name` (string | null, optional, default: "\\"noname\\"") — Layer name.
- `options` (ILayerParams, optional, default: "{}") — Layer options.
  - `options.properties` (\*, optional, default: "{}") — Custom user properties.
  - `options.labelMaxLetters` (number, optional) — Label max letters (reserved for specific layer implementations).
  - `options.hideInLayerSwitcher` (boolean, optional, default: false) — Presence in LayerSwitcher control.
  - `options.opacity` (number, optional, default: "1.0") — Layer opacity.
  - `options.minZoom` (number, optional, default: 0) — Minimal visibility zoom level.
  - `options.maxZoom` (number, optional, default: 50) — Maximal visibility zoom level.
  - `options.attribution` (string, optional, default: "\\"\\"") — Layer attribution shown in the attribution area.
  - `options.zIndex` (number, optional, default: 0) — Layer z-index.
  - `options.isBaseLayer` (boolean, optional, default: false) — Base layer flag.
  - `options.defaultTextures` (Array.\<IDefaultTextureParams>, optional, default: "\[null, null]") — Default textures.
  - `options.visibility` (boolean, optional, default: true) — Layer visibility.
  - `options.fading` (boolean, optional, default: false) — Enables fade-in/fade-out opacity transitions.
  - `options.height` (number, optional, default: 0) — Height over the ground.
  - `options.textureFilter` (string, optional, default: "\\"mipmap\\"") — Image texture filter. Available values: "nearest", "linear", "mipmap" and "anisotropic".
  - `options.colorSpace` (string | number, optional, default: "\\"srgb\\"") — Layer color space. Available values: "linear", "srgb", 0, 1.
  - `options.pickingEnabled` (boolean, optional, default: true) — Enables layer picking.
  - `options.preLoadZoomLevels` (Array.\<number>, optional, default: "\[0, 1]") — Zoom levels to preload when layer becomes visible.
  - `options.extent` ([Extent](/extent) | Array.\<Array.\<number>>, optional, default: "\[\[-180.0, -90.0], \[180.0, 90.0]]") — Visible extent.
  - `options.ambient` (string | NumberArray3 | [Vec3](/vec3), optional) — Ambient color.
  - `options.diffuse` (string | NumberArray3 | [Vec3](/vec3), optional) — Diffuse color.
  - `options.specular` (string | NumberArray3 | [Vec3](/vec3), optional) — Specular color.
  - `options.shininess` (number, optional, default: "20.0") — Specular shininess coefficient.
  - `options.nightTextureCoefficient` (number, optional, default: "1.0") — Night texture blending coefficient.
  - `options.iconSrc` (string | null, optional, default: null) — Icon for LayerSwitcher.
  - `options.waitForParentMaterial` (boolean, optional, default: true) — Wait for parent material while loading current tile material.

---

## Instance Methods

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L471" sourceLabel="Layer.ts:471" />

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L480" sourceLabel="Layer.ts:480" />

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L501" sourceLabel="Layer.ts:501" />

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L511" sourceLabel="Layer.ts:511" />

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L551" sourceLabel="Layer.ts:551" />

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L560" sourceLabel="Layer.ts:560" />

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L571" sourceLabel="Layer.ts:571" />

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L597" sourceLabel="Layer.ts:597" />

Clears layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L616" sourceLabel="Layer.ts:616" />

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L628" sourceLabel="Layer.ts:628" />

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L637" sourceLabel="Layer.ts:637" />

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L647" sourceLabel="Layer.ts:647" />

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L656" sourceLabel="Layer.ts:656" />

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L666" sourceLabel="Layer.ts:666" />

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L674" sourceLabel="Layer.ts:674" />

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L689" sourceLabel="Layer.ts:689" />

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L698" sourceLabel="Layer.ts:698" />

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L718" sourceLabel="Layer.ts:718" />

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L794" sourceLabel="Layer.ts:794" />

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L803" sourceLabel="Layer.ts:803" />

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L828" sourceLabel="Layer.ts:828" />

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L837" sourceLabel="Layer.ts:837" />

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L845" sourceLabel="Layer.ts:845" />

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L853" sourceLabel="Layer.ts:853" />

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L861" sourceLabel="Layer.ts:861" />

Special correction of the whole globe extent.

## Instance Fields

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L446" sourceLabel="Layer.ts:446" />

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L491" sourceLabel="Layer.ts:491" />

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L607" sourceLabel="Layer.ts:607" />

Returns planet instance.
