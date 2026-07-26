---
title: BaseGeoImage
kind: class
longname: BaseGeoImage
description: BaseGeoImage represents a square imagery layer displayed on the globe. It can use a static image, animated video, or WebGL buffer as a source.
---

# BaseGeoImage

**Extends:&#x20;**[`Layer`](/layer)

<SourceLink href="/source/layer/basegeoimage-ts/#L43" label="BaseGeoImage.ts:43" />

BaseGeoImage represents a square imagery layer displayed on the globe. It can use a static image, animated video, or WebGL buffer as a source.

---

## Constructor

<Signature code="new BaseGeoImage(name, options): BaseGeoImage" />

---

## Instance Methods

<MemberHeading id="getcornerslonlat" depth="3" name="getCornersLonLat" sig="getCornersLonLat(): Array.<LonLat>" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L174" sourceLabel="BaseGeoImage.ts:174" />

Gets corners coordinates.

**Returns**

- `Array.<`[`LonLat`](/lonlat)`>`

<MemberHeading id="getcorners" depth="3" name="getCorners" sig="getCorners(): Array.<Array.<number>>" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L189" sourceLabel="BaseGeoImage.ts:189" />

Gets corners coordinates.

**Returns**

- `Array.<Array.<number>>`

<MemberHeading id="setcorners" depth="3" name="setCorners" sig="setCorners(corners: Array.<Array.<number>>)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L205" sourceLabel="BaseGeoImage.ts:205" />

Sets geoImage geographical corners coordinates.

**Parameters**

- `corners` (Array.\<Array.\<number>>) — GeoImage corner coordinates. Each coordinate has exactly 2 entries. The first corner is top-left, the second is top-right, the third is bottom-right, and the fourth is bottom-left.

<MemberHeading id="setcornerslonlat" depth="3" name="setCornersLonLat" sig="setCornersLonLat(corners: Array.<LonLat>)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L216" sourceLabel="BaseGeoImage.ts:216" />

Sets geoImage geographical corners coordinates.

**Parameters**

- `corners` (Array.\<[LonLat](/lonlat)>) — GeoImage corner coordinates. The first corner is top-left, the second is top-right, the third is bottom-right, and the fourth is bottom-left. (exactly 4 entries)

<MemberHeading id="createframe" depth="3" name="_createFrame" sig="_createFrame()" />

<MemberMeta badges="protected" sourceHref="/source/layer/basegeoimage-ts/#L311" sourceLabel="BaseGeoImage.ts:311" />

Creates geoImage frame.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L379" sourceLabel="BaseGeoImage.ts:379" />

**Parameters**

- `material` ([Material](/material)) — GeoImage material.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L390" sourceLabel="BaseGeoImage.ts:390" />

Clear layer material.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L425" sourceLabel="BaseGeoImage.ts:425" />

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — GeoImage visibility.

<MemberHeading id="clearmaterial" depth="3" name="clearMaterial" sig="clearMaterial(material: Material)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L444" sourceLabel="BaseGeoImage.ts:444" />

**Parameters**

- `material` ([Material](/material)) — GeoImage material.

<MemberHeading id="applymaterial" depth="3" name="applyMaterial" sig="applyMaterial(): NumberArray4" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L485" sourceLabel="BaseGeoImage.ts:485" />

**Returns**

- `NumberArray4`

<MemberHeading id="createsourcetexture" depth="3" name="_createSourceTexture" sig="_createSourceTexture()" />

<MemberMeta badges="protected" sourceHref="/source/layer/basegeoimage-ts/#L542" sourceLabel="BaseGeoImage.ts:542" />

Method depends on GeoImage instance

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L454" sourceLabel="Layer.ts:454" />

_Inherited from `Layer#hasImageryTiles`_

**Overrides:&#x20;**`Layer#hasImageryTiles`

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L463" sourceLabel="Layer.ts:463" />

_Inherited from `Layer#getID`_

**Overrides:&#x20;**`Layer#getID`

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L484" sourceLabel="Layer.ts:484" />

_Inherited from `Layer#isEqual`_

**Overrides:&#x20;**`Layer#isEqual`

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L494" sourceLabel="Layer.ts:494" />

_Inherited from `Layer#_assignPlanet`_

**Overrides:&#x20;**`Layer#_assignPlanet`

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L534" sourceLabel="Layer.ts:534" />

_Inherited from `Layer#_bindPicking`_

**Overrides:&#x20;**`Layer#_bindPicking`

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L543" sourceLabel="Layer.ts:543" />

_Inherited from `Layer#addTo`_

**Overrides:&#x20;**`Layer#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L554" sourceLabel="Layer.ts:554" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`Layer#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L390" sourceLabel="BaseGeoImage.ts:390" />

_Inherited from `BaseGeoImage#clear`_

**Overrides:&#x20;**`Layer#clear`

Clear layer material.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L598" sourceLabel="Layer.ts:598" />

_Inherited from `Layer#setAttribution`_

**Overrides:&#x20;**`Layer#setAttribution`

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L610" sourceLabel="Layer.ts:610" />

_Inherited from `Layer#getAttribution`_

**Overrides:&#x20;**`Layer#getAttribution`

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L619" sourceLabel="Layer.ts:619" />

_Inherited from `Layer#setHeight`_

**Overrides:&#x20;**`Layer#setHeight`

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L629" sourceLabel="Layer.ts:629" />

_Inherited from `Layer#getHeight`_

**Overrides:&#x20;**`Layer#getHeight`

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L638" sourceLabel="Layer.ts:638" />

_Inherited from `Layer#setZIndex`_

**Overrides:&#x20;**`Layer#setZIndex`

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L648" sourceLabel="Layer.ts:648" />

_Inherited from `Layer#getZIndex`_

**Overrides:&#x20;**`Layer#getZIndex`

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L656" sourceLabel="Layer.ts:656" />

_Inherited from `Layer#bringToFront`_

**Overrides:&#x20;**`Layer#bringToFront`

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L671" sourceLabel="Layer.ts:671" />

_Inherited from `Layer#isBaseLayer`_

**Overrides:&#x20;**`Layer#isBaseLayer`

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L680" sourceLabel="Layer.ts:680" />

_Inherited from `Layer#setBaseLayer`_

**Overrides:&#x20;**`Layer#setBaseLayer`

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L425" sourceLabel="BaseGeoImage.ts:425" />

_Inherited from `BaseGeoImage#setVisibility`_

**Overrides:&#x20;**`Layer#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — GeoImage visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L776" sourceLabel="Layer.ts:776" />

_Inherited from `Layer#getVisibility`_

**Overrides:&#x20;**`Layer#getVisibility`

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L785" sourceLabel="Layer.ts:785" />

_Inherited from `Layer#setExtent`_

**Overrides:&#x20;**`Layer#setExtent`

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L808" sourceLabel="Layer.ts:808" />

_Inherited from `Layer#getExtent`_

**Overrides:&#x20;**`Layer#getExtent`

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L817" sourceLabel="Layer.ts:817" />

_Inherited from `Layer#getExtentMerc`_

**Overrides:&#x20;**`Layer#getExtentMerc`

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L825" sourceLabel="Layer.ts:825" />

_Inherited from `Layer#flyExtent`_

**Overrides:&#x20;**`Layer#flyExtent`

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L833" sourceLabel="Layer.ts:833" />

_Inherited from `Layer#viewExtent`_

**Overrides:&#x20;**`Layer#viewExtent`

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L841" sourceLabel="Layer.ts:841" />

_Inherited from `Layer#_correctFullExtent`_

**Overrides:&#x20;**`Layer#_correctFullExtent`

Special correction of the whole globe extent.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L390" sourceLabel="BaseGeoImage.ts:390" />

_Inherited from `BaseGeoImage#clear`_

**Overrides:&#x20;**`Layer#clear`

Clear layer material.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L425" sourceLabel="BaseGeoImage.ts:425" />

_Inherited from `BaseGeoImage#setVisibility`_

**Overrides:&#x20;**`Layer#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — GeoImage visibility.

## Instance Fields

<MemberHeading id="rendering" depth="3" name="rendering" sig="rendering" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L132" sourceLabel="BaseGeoImage.ts:132" />

rendering function pointer

<MemberHeading id="getframewidth" depth="3" name="getFrameWidth" sig="getFrameWidth" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L525" sourceLabel="BaseGeoImage.ts:525" />

Gets frame width size in pixels.

**Returns**

- `number` — Frame width.

<MemberHeading id="getframeheight" depth="3" name="getFrameHeight" sig="getFrameHeight" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L534" sourceLabel="BaseGeoImage.ts:534" />

Gets frame height size in pixels.

**Returns**

- `number` — Frame height.

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

_Inherited from `Layer#_pickingColor`_

**Overrides:&#x20;**`Layer#_pickingColor`

Layer picking color. Assign when added to the planet.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L474" sourceLabel="Layer.ts:474" />

_Inherited from `Layer#_id`_

**Overrides:&#x20;**`Layer#_id`

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L589" sourceLabel="Layer.ts:589" />

_Inherited from `Layer#planet`_

**Overrides:&#x20;**`Layer#planet`

Returns planet instance.
