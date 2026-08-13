---
title: GeoImage
kind: class
longname: GeoImage
description: Used to load and display a single image over specific corner coordinates on the globe.
---

# GeoImage

**Extends:&#x20;**[`BaseGeoImage`](/basegeoimage)

<SourceLink href="/source/layer/geoimage-ts/#L17" label="GeoImage.ts:17" />

Used to load and display a single image over specific corner coordinates on the globe.

---

## Constructor

<Signature code="new GeoImage(name, options): GeoImage" />

---

## Instance Methods

<MemberHeading id="setsrc" depth="3" name="setSrc" sig="setSrc(src: string)" />

<MemberMeta sourceHref="/source/layer/geoimage-ts/#L56" sourceLabel="GeoImage.ts:56" />

Sets image source url path.

**Parameters**

- `src` (string) — Image url path.

<MemberHeading id="setimage" depth="3" name="setImage" sig="setImage(image: Image)" />

<MemberMeta sourceHref="/source/layer/geoimage-ts/#L73" sourceLabel="GeoImage.ts:73" />

Sets image object.

**Parameters**

- `image` (Image) — Image object.

<MemberHeading id="createsourcetexture" depth="3" name="_createSourceTexture" sig="_createSourceTexture()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/geoimage-ts/#L93" sourceLabel="GeoImage.ts:93" />

**Overrides:&#x20;**`BaseGeoImage#_createSourceTexture`

Creates source gl texture.

<MemberHeading id="loadmaterial" depth="3" name="loadMaterial" sig="loadMaterial(material: Material)" />

<MemberMeta sourceHref="/source/layer/geoimage-ts/#L125" sourceLabel="GeoImage.ts:125" />

Loads planet segment material. In this case - GeoImage source image.

**Parameters**

- `material` ([Material](/material)) — GeoImage planet material.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/geoimage-ts/#L154" sourceLabel="GeoImage.ts:154" />

**Overrides:&#x20;**`BaseGeoImage#abortMaterialLoading`

**Parameters**

- `material` ([Material](/material)) — GeoImage material.

<MemberHeading id="getcornerslonlat" depth="3" name="getCornersLonLat" sig="getCornersLonLat(): Array.<LonLat>" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L174" sourceLabel="BaseGeoImage.ts:174" />

_Inherited from `BaseGeoImage#getCornersLonLat`_

**Overrides:&#x20;**`BaseGeoImage#getCornersLonLat`

Gets corners coordinates.

**Returns**

- `Array.<`[`LonLat`](/lonlat)`>`

<MemberHeading id="getcorners" depth="3" name="getCorners" sig="getCorners(): Array.<Array.<number>>" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L189" sourceLabel="BaseGeoImage.ts:189" />

_Inherited from `BaseGeoImage#getCorners`_

**Overrides:&#x20;**`BaseGeoImage#getCorners`

Gets corners coordinates.

**Returns**

- `Array.<Array.<number>>`

<MemberHeading id="setcorners" depth="3" name="setCorners" sig="setCorners(corners: Array.<Array.<number>>)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L205" sourceLabel="BaseGeoImage.ts:205" />

_Inherited from `BaseGeoImage#setCorners`_

**Overrides:&#x20;**`BaseGeoImage#setCorners`

Sets geoImage geographical corners coordinates.

**Parameters**

- `corners` (Array.\<Array.\<number>>) — GeoImage corner coordinates. Each coordinate has exactly 2 entries. The first corner is top-left, the second is top-right, the third is bottom-right, and the fourth is bottom-left.

<MemberHeading id="setcornerslonlat" depth="3" name="setCornersLonLat" sig="setCornersLonLat(corners: Array.<LonLat>)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L216" sourceLabel="BaseGeoImage.ts:216" />

_Inherited from `BaseGeoImage#setCornersLonLat`_

**Overrides:&#x20;**`BaseGeoImage#setCornersLonLat`

Sets geoImage geographical corners coordinates.

**Parameters**

- `corners` (Array.\<[LonLat](/lonlat)>) — GeoImage corner coordinates. The first corner is top-left, the second is top-right, the third is bottom-right, and the fourth is bottom-left. (exactly 4 entries)

<MemberHeading id="createframe" depth="3" name="_createFrame" sig="_createFrame()" />

<MemberMeta badges="protected" sourceHref="/source/layer/basegeoimage-ts/#L311" sourceLabel="BaseGeoImage.ts:311" />

_Inherited from `BaseGeoImage#_createFrame`_

**Overrides:&#x20;**`BaseGeoImage#_createFrame`

Creates geoImage frame.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L390" sourceLabel="BaseGeoImage.ts:390" />

_Inherited from `BaseGeoImage#clear`_

Clear layer material.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L425" sourceLabel="BaseGeoImage.ts:425" />

_Inherited from `BaseGeoImage#setVisibility`_

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — GeoImage visibility.

<MemberHeading id="clearmaterial" depth="3" name="clearMaterial" sig="clearMaterial(material: Material)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L444" sourceLabel="BaseGeoImage.ts:444" />

_Inherited from `BaseGeoImage#clearMaterial`_

**Overrides:&#x20;**`BaseGeoImage#clearMaterial`

**Parameters**

- `material` ([Material](/material)) — GeoImage material.

<MemberHeading id="applymaterial" depth="3" name="applyMaterial" sig="applyMaterial(): NumberArray4" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L485" sourceLabel="BaseGeoImage.ts:485" />

_Inherited from `BaseGeoImage#applyMaterial`_

**Returns**

- `NumberArray4`

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L471" sourceLabel="Layer.ts:471" />

_Inherited from `Layer#hasImageryTiles`_

**Overrides:&#x20;**`BaseGeoImage#hasImageryTiles`

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L480" sourceLabel="Layer.ts:480" />

_Inherited from `Layer#getID`_

**Overrides:&#x20;**`BaseGeoImage#getID`

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L501" sourceLabel="Layer.ts:501" />

_Inherited from `Layer#isEqual`_

**Overrides:&#x20;**`BaseGeoImage#isEqual`

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L511" sourceLabel="Layer.ts:511" />

_Inherited from `Layer#_assignPlanet`_

**Overrides:&#x20;**`BaseGeoImage#_assignPlanet`

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L551" sourceLabel="Layer.ts:551" />

_Inherited from `Layer#_bindPicking`_

**Overrides:&#x20;**`BaseGeoImage#_bindPicking`

Assign picking color to the layer.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L560" sourceLabel="Layer.ts:560" />

_Inherited from `Layer#addTo`_

**Overrides:&#x20;**`BaseGeoImage#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Adds layer to the planet.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L571" sourceLabel="Layer.ts:571" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`BaseGeoImage#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L616" sourceLabel="Layer.ts:616" />

_Inherited from `Layer#setAttribution`_

**Overrides:&#x20;**`BaseGeoImage#setAttribution`

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L628" sourceLabel="Layer.ts:628" />

_Inherited from `Layer#getAttribution`_

**Overrides:&#x20;**`BaseGeoImage#getAttribution`

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L637" sourceLabel="Layer.ts:637" />

_Inherited from `Layer#setHeight`_

**Overrides:&#x20;**`BaseGeoImage#setHeight`

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L647" sourceLabel="Layer.ts:647" />

_Inherited from `Layer#getHeight`_

**Overrides:&#x20;**`BaseGeoImage#getHeight`

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L656" sourceLabel="Layer.ts:656" />

_Inherited from `Layer#setZIndex`_

**Overrides:&#x20;**`BaseGeoImage#setZIndex`

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L666" sourceLabel="Layer.ts:666" />

_Inherited from `Layer#getZIndex`_

**Overrides:&#x20;**`BaseGeoImage#getZIndex`

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L674" sourceLabel="Layer.ts:674" />

_Inherited from `Layer#bringToFront`_

**Overrides:&#x20;**`BaseGeoImage#bringToFront`

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L689" sourceLabel="Layer.ts:689" />

_Inherited from `Layer#isBaseLayer`_

**Overrides:&#x20;**`BaseGeoImage#isBaseLayer`

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L698" sourceLabel="Layer.ts:698" />

_Inherited from `Layer#setBaseLayer`_

**Overrides:&#x20;**`BaseGeoImage#setBaseLayer`

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L794" sourceLabel="Layer.ts:794" />

_Inherited from `Layer#getVisibility`_

**Overrides:&#x20;**`BaseGeoImage#getVisibility`

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L803" sourceLabel="Layer.ts:803" />

_Inherited from `Layer#setExtent`_

**Overrides:&#x20;**`BaseGeoImage#setExtent`

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L828" sourceLabel="Layer.ts:828" />

_Inherited from `Layer#getExtent`_

**Overrides:&#x20;**`BaseGeoImage#getExtent`

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L837" sourceLabel="Layer.ts:837" />

_Inherited from `Layer#getExtentMerc`_

**Overrides:&#x20;**`BaseGeoImage#getExtentMerc`

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L845" sourceLabel="Layer.ts:845" />

_Inherited from `Layer#flyExtent`_

**Overrides:&#x20;**`BaseGeoImage#flyExtent`

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L853" sourceLabel="Layer.ts:853" />

_Inherited from `Layer#viewExtent`_

**Overrides:&#x20;**`BaseGeoImage#viewExtent`

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L861" sourceLabel="Layer.ts:861" />

_Inherited from `Layer#_correctFullExtent`_

**Overrides:&#x20;**`BaseGeoImage#_correctFullExtent`

Special correction of the whole globe extent.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L390" sourceLabel="BaseGeoImage.ts:390" />

_Inherited from `BaseGeoImage#clear`_

Clear layer material.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L425" sourceLabel="BaseGeoImage.ts:425" />

_Inherited from `BaseGeoImage#setVisibility`_

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — GeoImage visibility.

<MemberHeading id="applymaterial" depth="3" name="applyMaterial" sig="applyMaterial(): NumberArray4" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L485" sourceLabel="BaseGeoImage.ts:485" />

_Inherited from `BaseGeoImage#applyMaterial`_

**Returns**

- `NumberArray4`

## Instance Fields

<MemberHeading id="rendering" depth="3" name="rendering" sig="rendering" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L132" sourceLabel="BaseGeoImage.ts:132" />

_Inherited from `BaseGeoImage#rendering`_

**Overrides:&#x20;**`BaseGeoImage#rendering`

rendering function pointer

<MemberHeading id="getframewidth" depth="3" name="getFrameWidth" sig="getFrameWidth" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L527" sourceLabel="BaseGeoImage.ts:527" />

_Inherited from `BaseGeoImage#getFrameWidth`_

**Overrides:&#x20;**`BaseGeoImage#getFrameWidth`

Gets frame width size in pixels.

**Returns**

- `number` — Frame width.

<MemberHeading id="getframeheight" depth="3" name="getFrameHeight" sig="getFrameHeight" />

<MemberMeta sourceHref="/source/layer/basegeoimage-ts/#L536" sourceLabel="BaseGeoImage.ts:536" />

_Inherited from `BaseGeoImage#getFrameHeight`_

**Overrides:&#x20;**`BaseGeoImage#getFrameHeight`

Gets frame height size in pixels.

**Returns**

- `number` — Frame height.

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

_Inherited from `Layer#_pickingColor`_

**Overrides:&#x20;**`BaseGeoImage#_pickingColor`

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L446" sourceLabel="Layer.ts:446" />

_Inherited from `Layer#nightTextureCoefficient`_

**Overrides:&#x20;**`BaseGeoImage#nightTextureCoefficient`

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L491" sourceLabel="Layer.ts:491" />

_Inherited from `Layer#_id`_

**Overrides:&#x20;**`BaseGeoImage#_id`

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L607" sourceLabel="Layer.ts:607" />

_Inherited from `Layer#planet`_

**Overrides:&#x20;**`BaseGeoImage#planet`

Returns planet instance.
