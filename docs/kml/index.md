---
title: KML
kind: class
longname: KML
description: Layer to render KML files.
---

# KML

**Extends:&#x20;**[`Vector`](/vector)

<SourceLink href="/source/layer/kml-ts/#L22" label="KML.ts:22" />

Layer to render KML files.

---

## Constructor

<Signature code="new KML(name: string, options?: IKMLParams): KML" />

**Parameters**

- `name` (string) — Layer name.
- `options` (IKMLParams, optional) — KML layer options.

---

## Instance Methods

<MemberHeading id="parsekmlcoordinates" depth="3" name="_parseKMLcoordinates" sig="_parseKMLcoordinates(): Array.<Array.<number>>" />

<MemberMeta badges="protected" sourceHref="/source/layer/kml-ts/#L67" sourceLabel="KML.ts:67" />

**Returns**

- `Array.<Array.<number>>` — Array of `[longitude, latitude, altitude?]`.

<MemberHeading
  id="convertcoordonatesintoentities"
  depth="3"
  name="_convertCoordonatesIntoEntities"
  sig="_convertCoordonatesIntoEntities(
	coordinates: Array.<Array.<Array.<Array.<number>>>>,
	color: string,
	billboard?: IBillboardParams,
): Object"
/>

<MemberMeta badges="protected" sourceHref="/source/layer/kml-ts/#L211" sourceLabel="KML.ts:211" />

Creates billboards or polylines from array of lonlat.

**Parameters**

- `coordinates` (Array.\<Array.\<Array.\<Array.\<number>>>>) — Coordinates grouped by files and paths.
- `color` (string) — Polyline color.
- `billboard` (IBillboardParams, optional) — Billboard options.

**Returns**

- `Object`

<MemberHeading id="getxmlcontent" depth="3" name="_getXmlContent" sig="_getXmlContent(): Promise.<XMLDocument>" />

<MemberMeta badges="protected" sourceHref="/source/layer/kml-ts/#L253" sourceLabel="KML.ts:253" />

**Returns**

- `Promise.<XMLDocument>`

<MemberHeading
  id="addkmlfromfiles"
  depth="3"
  name="addKmlFromFiles"
  sig="addKmlFromFiles(
	kmls: Array.<Blob>,
	color?: string,
	billboard?: IBillboardParams,
): Promise.<{entities: Array.<Entity>, extent: Extent}>"
/>

<MemberMeta badges="async" sourceHref="/source/layer/kml-ts/#L278" sourceLabel="KML.ts:278" />

**Parameters**

- `kmls` (Array.\<Blob>) — KML files.
- `color` (string, optional) — Polyline color.
- `billboard` (IBillboardParams, optional) — Billboard options.

**Returns**

- `Promise.<{entities: Array.<`[`Entity`](/entity)`>, extent: `[`Extent`](/extent)`}>`

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(color: string)" />

<MemberMeta sourceHref="/source/layer/kml-ts/#L296" sourceLabel="KML.ts:296" />

**Parameters**

- `color` (string) — Layer color.

<MemberHeading
  id="addkmlfromurl"
  depth="3"
  name="addKmlFromUrl"
  sig="addKmlFromUrl(
	url: string,
	color?: string,
	billboard?: Billboard | IBillboardParams,
): Promise.<{entities: Array.<Entity>, extent: Extent}>"
/>

<MemberMeta badges="async" sourceHref="/source/layer/kml-ts/#L325" sourceLabel="KML.ts:325" />

**Parameters**

- `url` (string) — URL of the KML to display. For example: './myFile.kml' or 'http\://mySite/myFile.kml'.
- `color` (string, optional) — Polyline color.
- `billboard` ([Billboard](/billboard) | IBillboardParams, optional) — Billboard options.

**Returns**

- `Promise.<{entities: Array.<`[`Entity`](/entity)`>, extent: `[`Extent`](/extent)`}>`

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L397" sourceLabel="Vector.ts:397" />

_Inherited from `Vector#addTo`_

**Overrides:&#x20;**`Vector#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet scene object.

<MemberHeading id="getentities" depth="3" name="getEntities" sig="getEntities(): Array.<Entity>" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L431" sourceLabel="Vector.ts:431" />

_Inherited from `Vector#getEntities`_

**Overrides:&#x20;**`Vector#getEntities`

Returns stored entities.

**Returns**

- `Array.<`[`Entity`](/entity)`>` — Stored entities.

<MemberHeading id="add" depth="3" name="add" sig="add(entity: Entity): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L441" sourceLabel="Vector.ts:441" />

_Inherited from `Vector#add`_

**Overrides:&#x20;**`Vector#add`

Adds entity to the layer.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="insert" depth="3" name="insert" sig="insert(entity: Entity, index: Number): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L459" sourceLabel="Vector.ts:459" />

_Inherited from `Vector#insert`_

**Overrides:&#x20;**`Vector#insert`

Adds entity to the layer in the index position.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.
- `index` (Number) — Index position.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="addentities" depth="3" name="addEntities" sig="addEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L532" sourceLabel="Vector.ts:532" />

_Inherited from `Vector#addEntities`_

**Overrides:&#x20;**`Vector#addEntities`

Adds entity array to the layer.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entities array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="removeentity" depth="3" name="removeEntity" sig="removeEntity(entity: Entity): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L546" sourceLabel="Vector.ts:546" />

_Inherited from `Vector#removeEntity`_

**Overrides:&#x20;**`Vector#removeEntity`

Remove entity from layer. TODO: memory leaks.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to remove.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="reindexentitiesarray" depth="3" name="_reindexEntitiesArray" sig="_reindexEntitiesArray(startIndex: number)" />

<MemberMeta badges="protected" sourceHref="/source/layer/vector-ts/#L619" sourceLabel="Vector.ts:619" />

_Inherited from `Vector#_reindexEntitiesArray`_

**Overrides:&#x20;**`Vector#_reindexEntitiesArray`

Refresh collected entities indexes from startIndex entities collection array position.

**Parameters**

- `startIndex` (number) — Entity array index.

<MemberHeading id="removeentities" depth="3" name="removeEntities" sig="removeEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L632" sourceLabel="Vector.ts:632" />

_Inherited from `Vector#removeEntities`_

**Overrides:&#x20;**`Vector#removeEntities`

Removes entities from layer.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entity array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L644" sourceLabel="Vector.ts:644" />

_Inherited from `Vector#clear`_

**Overrides:&#x20;**`Vector#clear`

Clear the layer.

<MemberHeading id="each" depth="3" name="each" sig="each(callback: function)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L673" sourceLabel="Vector.ts:673" />

_Inherited from `Vector#each`_

**Overrides:&#x20;**`Vector#each`

Safety entities loop.

**Parameters**

- `callback` (function) — Entity callback.

<MemberHeading id="setentities" depth="3" name="setEntities" sig="setEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L687" sourceLabel="Vector.ts:687" />

_Inherited from `Vector#setEntities`_

**Overrides:&#x20;**`Vector#setEntities`

Removes current entities from layer and adds new entities.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — New entity array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="bindeventsdefault" depth="3" name="_bindEventsDefault" sig="_bindEventsDefault(entityCollection)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L748" sourceLabel="Vector.ts:748" />

_Inherited from `Vector#_bindEventsDefault`_

**Overrides:&#x20;**`Vector#_bindEventsDefault`

**Parameters**

- `entityCollection`

* **TODO:**
  - (refactoring) could be used in something like bindEntityCollectionQuad(...)

<MemberHeading id="loadmaterial" depth="3" name="loadMaterial" sig="loadMaterial(material: Material)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/vector-ts/#L939" sourceLabel="Vector.ts:939" />

_Inherited from `Vector#loadMaterial`_

**Overrides:&#x20;**`Vector#loadMaterial`

Start to load tile material.

**Parameters**

- `material` ([Material](/material)) — Current material.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L961" sourceLabel="Vector.ts:961" />

_Inherited from `Vector#abortMaterialLoading`_

Abort exact material loading.

**Parameters**

- `material` ([Material](/material)) — Segment material.

<MemberHeading id="hasimagerytiles" depth="3" name="hasImageryTiles" sig="hasImageryTiles(): boolean" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L471" sourceLabel="Layer.ts:471" />

_Inherited from `Layer#hasImageryTiles`_

**Overrides:&#x20;**`Vector#hasImageryTiles`

Returns true if a layer has imagery tiles.

**Returns**

- `boolean` — Imagery tiles flag.

<MemberHeading id="getid" depth="3" name="getID" sig="getID(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L480" sourceLabel="Layer.ts:480" />

_Inherited from `Layer#getID`_

**Overrides:&#x20;**`Vector#getID`

Gets layer identifier.

**Returns**

- `number` — Layer object id.

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(layer: Layer): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L501" sourceLabel="Layer.ts:501" />

_Inherited from `Layer#isEqual`_

**Overrides:&#x20;**`Vector#isEqual`

Compares layers instances.

**Parameters**

- `layer` ([Layer](/layer)) — Layer instance to compare.

**Returns**

- `boolean` — Returns true if the layer is the same instance as the input.

<MemberHeading id="assignplanet" depth="3" name="_assignPlanet" sig="_assignPlanet(planet: Planet)" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L511" sourceLabel="Layer.ts:511" />

_Inherited from `Layer#_assignPlanet`_

**Overrides:&#x20;**`Vector#_assignPlanet`

Assign the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet render node.

<MemberHeading id="bindpicking" depth="3" name="_bindPicking" sig="_bindPicking()" />

<MemberMeta badges="abstract,protected" sourceHref="/source/layer/layer-ts/#L551" sourceLabel="Layer.ts:551" />

_Inherited from `Layer#_bindPicking`_

**Overrides:&#x20;**`Vector#_bindPicking`

Assign picking color to the layer.

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L571" sourceLabel="Layer.ts:571" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`Vector#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

<MemberHeading id="setattribution" depth="3" name="setAttribution" sig="setAttribution(html: string)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L616" sourceLabel="Layer.ts:616" />

_Inherited from `Layer#setAttribution`_

**Overrides:&#x20;**`Vector#setAttribution`

Sets layer attribution text.

**Parameters**

- `html` (string) — HTML string that represents layer attribution.

<MemberHeading id="getattribution" depth="3" name="getAttribution" sig="getAttribution(): string" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L628" sourceLabel="Layer.ts:628" />

_Inherited from `Layer#getAttribution`_

**Overrides:&#x20;**`Vector#getAttribution`

Gets layer attribution.

**Returns**

- `string` — Layer attribution.

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L637" sourceLabel="Layer.ts:637" />

_Inherited from `Layer#setHeight`_

**Overrides:&#x20;**`Vector#setHeight`

Sets height over the ground.

**Parameters**

- `height` (number) — Layer height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L647" sourceLabel="Layer.ts:647" />

_Inherited from `Layer#getHeight`_

**Overrides:&#x20;**`Vector#getHeight`

Gets layer height.

**Returns**

- `number`

<MemberHeading id="setzindex" depth="3" name="setZIndex" sig="setZIndex(zIndex: number)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L656" sourceLabel="Layer.ts:656" />

_Inherited from `Layer#setZIndex`_

**Overrides:&#x20;**`Vector#setZIndex`

Sets z-index.

**Parameters**

- `zIndex` (number) — Layer z-index.

<MemberHeading id="getzindex" depth="3" name="getZIndex" sig="getZIndex(): number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L666" sourceLabel="Layer.ts:666" />

_Inherited from `Layer#getZIndex`_

**Overrides:&#x20;**`Vector#getZIndex`

Gets z-index.

**Returns**

- `number`

<MemberHeading id="bringtofront" depth="3" name="bringToFront" sig="bringToFront()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L674" sourceLabel="Layer.ts:674" />

_Inherited from `Layer#bringToFront`_

**Overrides:&#x20;**`Vector#bringToFront`

Sets z-index to the maximum value relative to other layers on the planet.

<MemberHeading id="isbaselayer" depth="3" name="isBaseLayer" sig="isBaseLayer(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L689" sourceLabel="Layer.ts:689" />

_Inherited from `Layer#isBaseLayer`_

**Overrides:&#x20;**`Vector#isBaseLayer`

Returns true if the layer is a base.

**Returns**

- `boolean` — Base layer flag.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(isBaseLayer: boolean)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L698" sourceLabel="Layer.ts:698" />

_Inherited from `Layer#setBaseLayer`_

**Overrides:&#x20;**`Vector#setBaseLayer`

Sets base layer type flag.

**Parameters**

- `isBaseLayer` (boolean)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L718" sourceLabel="Layer.ts:718" />

_Inherited from `Layer#setVisibility`_

**Overrides:&#x20;**`Vector#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L794" sourceLabel="Layer.ts:794" />

_Inherited from `Layer#getVisibility`_

**Overrides:&#x20;**`Vector#getVisibility`

Gets layer visibility.

**Returns**

- `boolean` — Layer visibility.

<MemberHeading id="setextent" depth="3" name="setExtent" sig="setExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L803" sourceLabel="Layer.ts:803" />

_Inherited from `Layer#setExtent`_

**Overrides:&#x20;**`Vector#setExtent`

Sets visible geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Layer visible geographical extent.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L828" sourceLabel="Layer.ts:828" />

_Inherited from `Layer#getExtent`_

**Overrides:&#x20;**`Vector#getExtent`

Gets layer extent.

**Returns**

- [`Extent`](/extent) — Layer geodetic extent.

<MemberHeading id="getextentmerc" depth="3" name="getExtentMerc" sig="getExtentMerc(): Extent" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L837" sourceLabel="Layer.ts:837" />

_Inherited from `Layer#getExtentMerc`_

**Overrides:&#x20;**`Vector#getExtentMerc`

Gets layer web-mercator extent.

**Returns**

- [`Extent`](/extent) — Layer extent.

<MemberHeading id="flyextent" depth="3" name="flyExtent" sig="flyExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L845" sourceLabel="Layer.ts:845" />

_Inherited from `Layer#flyExtent`_

**Overrides:&#x20;**`Vector#flyExtent`

Fly extent.

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent()" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L853" sourceLabel="Layer.ts:853" />

_Inherited from `Layer#viewExtent`_

**Overrides:&#x20;**`Vector#viewExtent`

View extent.

<MemberHeading id="correctfullextent" depth="3" name="_correctFullExtent" sig="_correctFullExtent()" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L861" sourceLabel="Layer.ts:861" />

_Inherited from `Layer#_correctFullExtent`_

**Overrides:&#x20;**`Vector#_correctFullExtent`

Special correction of the whole globe extent.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L961" sourceLabel="Vector.ts:961" />

_Inherited from `Vector#abortMaterialLoading`_

Abort exact material loading.

**Parameters**

- `material` ([Material](/material)) — Segment material.

## Instance Fields

<MemberHeading id="receiveprojectors" depth="3" name="receiveProjectors" sig="receiveProjectors" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L318" sourceLabel="Vector.ts:318" />

_Inherited from `Vector#receiveProjectors`_

**Overrides:&#x20;**`Vector#receiveProjectors`

Gets projector effect reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="receiveframetransparency" depth="3" name="receiveFrameTransparency" sig="receiveFrameTransparency" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L340" sourceLabel="Vector.ts:340" />

_Inherited from `Vector#receiveFrameTransparency`_

**Overrides:&#x20;**`Vector#receiveFrameTransparency`

Gets frame transparency reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="receiveshadows" depth="3" name="receiveShadows" sig="receiveShadows" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L362" sourceLabel="Vector.ts:362" />

_Inherited from `Vector#receiveShadows`_

**Overrides:&#x20;**`Vector#receiveShadows`

Gets shadow map reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="pickingenabled" depth="3" name="pickingEnabled" sig="pickingEnabled" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L606" sourceLabel="Vector.ts:606" />

_Inherited from `Vector#pickingEnabled`_

**Overrides:&#x20;**`Vector#pickingEnabled`

Sets layer picking events active.

**Parameters**

- `picking` (boolean) — Picking enable flag.

<MemberHeading id="pickingcolor" depth="3" name="_pickingColor" sig="_pickingColor: Vec3" />

<MemberMeta badges="protected" sourceHref="/source/layer/layer-ts/#L322" sourceLabel="Layer.ts:322" />

_Inherited from `Layer#_pickingColor`_

**Overrides:&#x20;**`Vector#_pickingColor`

Layer picking color. Assign when added to the planet.

<MemberHeading id="nighttexturecoefficient" depth="3" name="nightTextureCoefficient" sig="nightTextureCoefficient: number" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L446" sourceLabel="Layer.ts:446" />

_Inherited from `Layer#nightTextureCoefficient`_

**Overrides:&#x20;**`Vector#nightTextureCoefficient`

Night texture blending coefficient.

<MemberHeading id="id" depth="3" name="_id" sig="_id" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L491" sourceLabel="Layer.ts:491" />

_Inherited from `Layer#_id`_

**Overrides:&#x20;**`Vector#_id`

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L607" sourceLabel="Layer.ts:607" />

_Inherited from `Layer#planet`_

**Overrides:&#x20;**`Vector#planet`

Returns planet instance.
