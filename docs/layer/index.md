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

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L484" sourceLabel="Layer.ts:484" />

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L493" sourceLabel="Layer.ts:493" />

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L514" sourceLabel="Layer.ts:514" />

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L524" sourceLabel="Layer.ts:524" />

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L564" sourceLabel="Layer.ts:564" />

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L573" sourceLabel="Layer.ts:573" />

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L584" sourceLabel="Layer.ts:584" />

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L610" sourceLabel="Layer.ts:610" />

Clears layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L629" sourceLabel="Layer.ts:629" />

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L641" sourceLabel="Layer.ts:641" />

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L650" sourceLabel="Layer.ts:650" />

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L660" sourceLabel="Layer.ts:660" />

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L669" sourceLabel="Layer.ts:669" />

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L679" sourceLabel="Layer.ts:679" />

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L687" sourceLabel="Layer.ts:687" />

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L702" sourceLabel="Layer.ts:702" />

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L711" sourceLabel="Layer.ts:711" />

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L731" sourceLabel="Layer.ts:731" />

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L807" sourceLabel="Layer.ts:807" />

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L816" sourceLabel="Layer.ts:816" />

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L841" sourceLabel="Layer.ts:841" />

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L850" sourceLabel="Layer.ts:850" />

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L858" sourceLabel="Layer.ts:858" />

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L866" sourceLabel="Layer.ts:866" />

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L874" sourceLabel="Layer.ts:874" />

Special correction of the whole globe extent.

## Instance Fields

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L458" sourceLabel="Layer.ts:458" />

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L504" sourceLabel="Layer.ts:504" />

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L620" sourceLabel="Layer.ts:620" />

Returns planet instance.
