---
title: Vector
kind: class
longname: Vector
description: Vector layer is an alternative entity storage. Used for geospatial data rendering like points, lines, polygons, geometry objects, etc.
---

# Vector

**Extends:&#x20;**[`Layer`](/layer)

<SourceLink href="/source/layer/vector-ts/#L111" label="Vector.ts:111" />

Vector layer is an alternative entity storage. Used for geospatial data rendering like points, lines, polygons, geometry objects, etc.

**Fires**

- `event:draw`
- `event:add`
- `event:remove`
- `event:entityadd`
- `event:entityremove`
- `event:visibilitychange`

---

## Constructor

<Signature code="new Vector(name?: string, options?: IVectorParams): Vector" />

**Parameters**

- `name` (string, optional, default: "\\"noname\\"") — Layer name.
- `options` (IVectorParams, optional) — Layer options:
  - `options.minZoom` (number, optional, default: 0) — Minimal visible zoom.
  - `options.maxZoom` (number, optional, default: 50) — Maximal visible zoom.
  - `options.attribution` (string, optional) — Layer attribution.
  - `options.zIndex` (number, optional, default: 0) — Layer Z-order index.
  - `options.visibility` (boolean, optional, default: true) — Layer visibility.
  - `options.isBaseLayer` (boolean, optional, default: false) — Layer base layer.
  - `options.opacity` (number, optional, default: "1.0") — Layer opacity.
  - `options.pickingEnabled` (boolean, optional, default: true) — Enables/disables picking.
  - `options.fading` (boolean, optional, default: false) — Enables layer fade-in/fade-out transition logic.
  - `options.height` (number, optional, default: 0) — Layer height level used for rendering order.
  - `options.entities` (Array.\<([Entity](/entity)|IEntityParams)>, optional) — Entities array or entity init params.
  - `options.scaleByDistance` (Array.\<number>, optional) — Scale by distance parameters. (exactly 3 entries) First index - near distance to the entity, after entity becomes full scale. Second index - far distance to the entity, when entity becomes zero scale. Third index - far distance to the entity, when entity becomes invisible. Default is `[MAX32, MAX32, MAX32]` (no distance scaling).
  - `options.pickingScale` (number | Array.\<number>, optional, default: "\[1,1,1]") — Picking scale value or xyz scale array.
  - `options.nodeCapacity` (number, optional, default: 60) — Maximum entities quantity in a quadtree node.
  - `options.async` (boolean, optional, default: true) — Asynchronous vector data handling before rendering.
  - `options.clampToGround` (boolean, optional, default: false) — Clamp vector data to the ground.
  - `options.relativeToGround` (boolean, optional, default: false) — Place vector data relative to the ground relief.
  - `options.labelMaxLetters` (number, optional, default: 24) — Maximum label letters per line for label entities.
  - `options.depthOffset` (Number, optional, default: "0.0") — Signed world-space depth offset along the camera ray. Negative values move geometry closer to the camera, positive values move it farther.
  - `options.shadeMode` (number | string, optional, default: 1) — Geo object shading: 0/none unlit, 0.5/phong, 1/pbr.
  - `options.depthOrder` (number, optional, default: 0) — Rendering order group for vector collections.
  - `options.disableCullFace` (boolean, optional, default: false) — Disables back-face culling for geo object rendering.
  - `options.receiveProjectors` (boolean, optional, default: true) — Enables/disables projector effect reception for this layer entities.
  - `options.receiveFrameTransparency` (boolean, optional, default: false) — Enables/disables frame transparency reception for this layer entities.
  - `options.receiveShadows` (boolean, optional, default: true) — Enables/disables shadow map reception for this layer entities.//@fires entitymove

---

## Instance Methods

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(planet: Planet)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L393" sourceLabel="Vector.ts:393" />

**Overrides:&#x20;**`Layer#addTo`

Adds layer to the planet.

**Parameters**

- `planet` ([Planet](/planet)) — Planet scene object.

<MemberHeading id="getentities" depth="3" name="getEntities" sig="getEntities(): Array.<Entity>" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L427" sourceLabel="Vector.ts:427" />

Returns stored entities.

**Returns**

- `Array.<`[`Entity`](/entity)`>` — Stored entities.

<MemberHeading id="add" depth="3" name="add" sig="add(entity: Entity): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L437" sourceLabel="Vector.ts:437" />

Adds entity to the layer.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="insert" depth="3" name="insert" sig="insert(entity: Entity, index: Number): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L455" sourceLabel="Vector.ts:455" />

Adds entity to the layer in the index position.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.
- `index` (Number) — Index position.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="addentities" depth="3" name="addEntities" sig="addEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L528" sourceLabel="Vector.ts:528" />

Adds entity array to the layer.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entities array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="removeentity" depth="3" name="removeEntity" sig="removeEntity(entity: Entity): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L543" sourceLabel="Vector.ts:543" />

Remove entity from layer. TODO: memory leaks.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to remove.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="reindexentitiesarray" depth="3" name="_reindexEntitiesArray" sig="_reindexEntitiesArray(startIndex: number)" />

<MemberMeta badges="protected" sourceHref="/source/layer/vector-ts/#L616" sourceLabel="Vector.ts:616" />

Refresh collected entities indexes from startIndex entities collection array position.

**Parameters**

- `startIndex` (number) — Entity array index.

<MemberHeading id="removeentities" depth="3" name="removeEntities" sig="removeEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L629" sourceLabel="Vector.ts:629" />

Removes entities from layer.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entity array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L641" sourceLabel="Vector.ts:641" />

**Overrides:&#x20;**`Layer#clear`

Clear the layer.

<MemberHeading id="each" depth="3" name="each" sig="each(callback: function)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L670" sourceLabel="Vector.ts:670" />

Safety entities loop.

**Parameters**

- `callback` (function) — Entity callback.

<MemberHeading id="setentities" depth="3" name="setEntities" sig="setEntities(entities: Array.<Entity>): Vector" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L684" sourceLabel="Vector.ts:684" />

Removes current entities from layer and adds new entities.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — New entity array.

**Returns**

- [`Vector`](/vector)

<MemberHeading id="bindeventsdefault" depth="3" name="_bindEventsDefault" sig="_bindEventsDefault(entityCollection)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L745" sourceLabel="Vector.ts:745" />

**Parameters**

- `entityCollection`

* **TODO:**
  - (refactoring) could be used in something like bindEntityCollectionQuad(...)

<MemberHeading id="loadmaterial" depth="3" name="loadMaterial" sig="loadMaterial(material: Material)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/vector-ts/#L936" sourceLabel="Vector.ts:936" />

Start to load tile material.

**Parameters**

- `material` ([Material](/material)) — Current material.

<MemberHeading id="abortmaterialloading" depth="3" name="abortMaterialLoading" sig="abortMaterialLoading(material: Material)" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L958" sourceLabel="Vector.ts:958" />

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

<MemberHeading id="remove" depth="3" name="remove" sig="remove(): Layer" />

<MemberMeta sourceHref="/source/layer/layer-ts/#L571" sourceLabel="Layer.ts:571" />

_Inherited from `Layer#remove`_

**Overrides:&#x20;**`Layer#remove`

Removes from a planet.

**Returns**

- [`Layer`](/layer) — This layer.

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

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta badges="abstract" sourceHref="/source/layer/layer-ts/#L718" sourceLabel="Layer.ts:718" />

_Inherited from `Layer#setVisibility`_

**Overrides:&#x20;**`Layer#setVisibility`

Sets layer visibility.

**Parameters**

- `visibility` (boolean) — Layer visibility.

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

<MemberHeading id="receiveprojectors" depth="3" name="receiveProjectors" sig="receiveProjectors" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L314" sourceLabel="Vector.ts:314" />

Gets projector effect reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="receiveprojectors" depth="3" name="receiveProjectors" sig="receiveProjectors" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L323" sourceLabel="Vector.ts:323" />

Enables/disables projector effect reception for this vector layer entities.

**Parameters**

- `v` (boolean) — `true` to receive projector effects, `false` to ignore them.

<MemberHeading id="receiveframetransparency" depth="3" name="receiveFrameTransparency" sig="receiveFrameTransparency" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L336" sourceLabel="Vector.ts:336" />

Gets frame transparency reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="receiveframetransparency" depth="3" name="receiveFrameTransparency" sig="receiveFrameTransparency" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L345" sourceLabel="Vector.ts:345" />

Enables/disables frame transparency reception for this vector layer entities.

**Parameters**

- `v` (boolean) — `true` to receive frame transparency, `false` to ignore it.

<MemberHeading id="receiveshadows" depth="3" name="receiveShadows" sig="receiveShadows" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L358" sourceLabel="Vector.ts:358" />

Gets shadow map reception state for this vector layer entities.

**Returns**

- `boolean`

<MemberHeading id="receiveshadows" depth="3" name="receiveShadows" sig="receiveShadows" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L368" sourceLabel="Vector.ts:368" />

Enables/disables shadow map reception for this vector layer entities. Stored in the same material flags channel as projectors and frame transparency.

**Parameters**

- `v` (boolean) — `true` to receive shadow map effects, `false` to ignore them.

<MemberHeading id="pickingenabled" depth="3" name="pickingEnabled" sig="pickingEnabled" />

<MemberMeta sourceHref="/source/layer/vector-ts/#L603" sourceLabel="Vector.ts:603" />

Sets layer picking events active.

**Parameters**

- `picking` (boolean) — Picking enable flag.

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
