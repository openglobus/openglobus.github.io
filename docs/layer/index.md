---
title: Layer
kind: class
longname: Layer
description: Base class; normally only used for creating subclasses and not instantiated in apps. A visual representation of raster or vector map data well known as a layer.
---

# Layer

<SourceLink href="/source/layer/layer-ts/#L109" label="Layer.ts:109" />

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

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L485" sourceLabel="Layer.ts:485" />

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L494" sourceLabel="Layer.ts:494" />

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L515" sourceLabel="Layer.ts:515" />

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L525" sourceLabel="Layer.ts:525" />

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L565" sourceLabel="Layer.ts:565" />

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L574" sourceLabel="Layer.ts:574" />

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L585" sourceLabel="Layer.ts:585" />

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L611" sourceLabel="Layer.ts:611" />

Clears layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L630" sourceLabel="Layer.ts:630" />

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L642" sourceLabel="Layer.ts:642" />

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L651" sourceLabel="Layer.ts:651" />

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L661" sourceLabel="Layer.ts:661" />

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L670" sourceLabel="Layer.ts:670" />

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L680" sourceLabel="Layer.ts:680" />

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L688" sourceLabel="Layer.ts:688" />

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L703" sourceLabel="Layer.ts:703" />

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L712" sourceLabel="Layer.ts:712" />

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L732" sourceLabel="Layer.ts:732" />

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L808" sourceLabel="Layer.ts:808" />

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L817" sourceLabel="Layer.ts:817" />

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L842" sourceLabel="Layer.ts:842" />

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L851" sourceLabel="Layer.ts:851" />

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L859" sourceLabel="Layer.ts:859" />

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L867" sourceLabel="Layer.ts:867" />

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L875" sourceLabel="Layer.ts:875" />

Special correction of the whole globe extent.

## Instance Fields

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L323" sourceLabel="Layer.ts:323" />

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L459" sourceLabel="Layer.ts:459" />

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L505" sourceLabel="Layer.ts:505" />

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L621" sourceLabel="Layer.ts:621" />

Returns planet instance.
