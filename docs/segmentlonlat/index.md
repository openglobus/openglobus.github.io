---
title: SegmentLonLat
kind: class
longname: SegmentLonLat
description: Planet segment Web Mercator tile class that stored and rendered with quad tree.
---

# SegmentLonLat

**Extends:&#x20;**[`Segment`](/segment)

<SourceLink href="/source/segment/segmentlonlat-ts/#L21" label="SegmentLonLat.ts:21" />

Planet segment Web Mercator tile class that stored and rendered with quad tree.

---

## Constructor

<Signature
  code="new SegmentLonLat(
	node,
	quadTreeStrategy,
	tileZoom,
	extent,
): SegmentLonLat"
/>

---

## Instance Methods

<MemberHeading id="layeroverlap" depth="3" name="layerOverlap" sig="layerOverlap(layer)" />

<MemberMeta badges="protected" sourceHref="/source/segment/segmentlonlat-ts/#L111" sourceLabel="SegmentLonLat.ts:111" />

**Parameters**

- `layer`

* **TODO:**
  - simplify layer.\_extentMerc in layer.getNativeExtent(this)

<MemberHeading id="acceptforrendering" depth="3" name="acceptForRendering" sig="acceptForRendering(camera: Camera): boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L259" sourceLabel="Segment.js:259" />

_Inherited from `Segment#acceptForRendering`_

**Overrides:&#x20;**`Segment#acceptForRendering`

Returns that segment good for rendering with camera by current lod ratio.

**Parameters**

- `camera` ([Camera](/camera)) — Camera object.

**Returns**

- `boolean`

<MemberHeading
  id="getentityterrainpoint"
  depth="3"
  name="getEntityTerrainPoint"
  sig="getEntityTerrainPoint(
	entity: Entity,
	res: Vec3,
	normal?: Vec3,
): Vec3"
/>

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L271" sourceLabel="Segment.js:271" />

_Inherited from `Segment#getEntityTerrainPoint`_

**Overrides:&#x20;**`Segment#getEntityTerrainPoint`

Returns entity terrain point.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.
- `res` ([Vec3](/vec3)) — Point coordinates.
- `normal` ([Vec3](/vec3), optional) — Terrain point normal.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading
  id="getterrainpoint"
  depth="3"
  name="getTerrainPoint"
  sig="getTerrainPoint(
	xyz: Vec3,
	insideSegmentPosition: LonLat,
	res?: Vec3,
	normal?: Vec3,
): number"
/>

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L288" sourceLabel="Segment.js:288" />

_Inherited from `Segment#getTerrainPoint`_

**Overrides:&#x20;**`Segment#getTerrainPoint`

Returns distance from object to terrain coordinates and terrain point that calculates out in the res parameter.

**Parameters**

- `xyz` ([Vec3](/vec3)) — Cartesian object position.
- `insideSegmentPosition` ([LonLat](/lonlat)) — Geodetic object position.
- `res` ([Vec3](/vec3), optional) — Result cartesian coordinates on the terrain.
- `normal` ([Vec3](/vec3), optional) — Terrain point normal.

**Returns**

- `number`

<MemberHeading id="projectnative" depth="3" name="projectNative" sig="projectNative(lonlat: LonLat): LonLat" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L366" sourceLabel="Segment.js:366" />

_Inherited from `Segment#projectNative`_

**Overrides:&#x20;**`Segment#projectNative`

Project wgs86 to segment native projection.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Coordinates to project.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(forceLoading: boolean)" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L374" sourceLabel="Segment.js:374" />

_Inherited from `Segment#loadTerrain`_

**Overrides:&#x20;**`Segment#loadTerrain`

**Parameters**

- `forceLoading` (boolean)

<MemberHeading id="elevationsexists" depth="3" name="elevationsExists" sig="elevationsExists(elevations: Float32Array)" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L396" sourceLabel="Segment.js:396" />

_Inherited from `Segment#elevationsExists`_

**Overrides:&#x20;**`Segment#elevationsExists`

Terrain obtained from server.

**Parameters**

- `elevations` (Float32Array) — Elevation data.

<MemberHeading id="elevationsnotexists" depth="3" name="elevationsNotExists" sig="elevationsNotExists()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L714" sourceLabel="Segment.js:714" />

_Inherited from `Segment#elevationsNotExists`_

**Overrides:&#x20;**`Segment#elevationsNotExists`

Terrain is not obtained or not exists on the server.

<MemberHeading id="deletebuffers" depth="3" name="deleteBuffers" sig="deleteBuffers()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L842" sourceLabel="Segment.js:842" />

_Inherited from `Segment#deleteBuffers`_

**Overrides:&#x20;**`Segment#deleteBuffers`

Delete segment gl buffers.

<MemberHeading id="deletematerials" depth="3" name="deleteMaterials" sig="deleteMaterials()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L859" sourceLabel="Segment.js:859" />

_Inherited from `Segment#deleteMaterials`_

**Overrides:&#x20;**`Segment#deleteMaterials`

Delete materials.

<MemberHeading id="deleteelevations" depth="3" name="deleteElevations" sig="deleteElevations()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L873" sourceLabel="Segment.js:873" />

_Inherited from `Segment#deleteElevations`_

**Overrides:&#x20;**`Segment#deleteElevations`

Delete elevation data.

<MemberHeading id="clearsegment" depth="3" name="clearSegment" sig="clearSegment()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L914" sourceLabel="Segment.js:914" />

_Inherited from `Segment#clearSegment`_

**Overrides:&#x20;**`Segment#clearSegment`

Clear but not destroy segment data.

<MemberHeading id="freecache" depth="3" name="_freeCache" sig="_freeCache()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L925" sourceLabel="Segment.js:925" />

_Inherited from `Segment#_freeCache`_

**Overrides:&#x20;**`Segment#_freeCache`

Removes cache records.

<MemberHeading id="destroysegment" depth="3" name="destroySegment" sig="destroySegment()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L933" sourceLabel="Segment.js:933" />

_Inherited from `Segment#destroySegment`_

**Overrides:&#x20;**`Segment#destroySegment`

Clear and destroy all segment data.

<MemberHeading id="createboundsbyextent" depth="3" name="createBoundsByExtent" sig="createBoundsByExtent()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L995" sourceLabel="Segment.js:995" />

_Inherited from `Segment#createBoundsByExtent`_

**Overrides:&#x20;**`Segment#createBoundsByExtent`

Creates bound volumes by segment geographical extent.

<MemberHeading id="getmaterialbylayer" depth="3" name="getMaterialByLayer" sig="getMaterialByLayer(layer: Layer): planetSegment.Material" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L1387" sourceLabel="Segment.js:1387" />

_Inherited from `Segment#getMaterialByLayer`_

**Overrides:&#x20;**`Segment#getMaterialByLayer`

Gets specific layer material.

**Parameters**

- `layer` ([Layer](/layer)) — Layer object.

**Returns**

- `planetSegment.Material`

<MemberHeading id="setextentlonlat" depth="3" name="_setExtentLonLat" sig="_setExtentLonLat()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1387" sourceLabel="Segment.ts:1387" />

_Inherited from `Segment#_setExtentLonLat`_

**Overrides:&#x20;**`Segment#_setExtentLonLat`

<MemberHeading
  id="getcycliclonshift"
  depth="3"
  name="_getCyclicLonShift"
  sig="_getCyclicLonShift(
	sourceExtent: Extent,
	targetExtent: Extent,
	worldWidth: number,
): number"
/>

<MemberMeta badges="protected" sourceHref="/source/segment/segment-ts/#L1824" sourceLabel="Segment.ts:1824" />

_Inherited from `Segment#_getCyclicLonShift`_

**Overrides:&#x20;**`Segment#_getCyclicLonShift`

Computes cyclic longitude shift for `sourceExtent` to align it with `targetExtent` in wrapped horizontal coordinate space (for example, Web Mercator world copies).

**Parameters**

- `sourceExtent` ([Extent](/extent)) — Source extent to shift along longitude.
- `targetExtent` ([Extent](/extent)) — Target extent used as alignment reference.
- `worldWidth` (number) — Full world width in projection units.

**Returns**

- `number` — Longitude shift to apply to `sourceExtent`.

## Instance Fields

<MemberHeading id="node" depth="3" name="node" sig="node: quadTree.Node" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L85" sourceLabel="Segment.js:85" />

_Inherited from `Segment#node`_

**Overrides:&#x20;**`Segment#node`

Quad tree node of the segment.

<MemberHeading id="planet" depth="3" name="planet" sig="planet: Planet" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L91" sourceLabel="Segment.js:91" />

_Inherited from `Segment#planet`_

**Overrides:&#x20;**`Segment#planet`

Planet pointer.

<MemberHeading id="handler" depth="3" name="handler" sig="handler: Handler" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L97" sourceLabel="Segment.js:97" />

_Inherited from `Segment#handler`_

**Overrides:&#x20;**`Segment#handler`

WebGl handler pointer.

<MemberHeading id="bsphere" depth="3" name="bsphere" sig="bsphere: Sphere" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L103" sourceLabel="Segment.js:103" />

_Inherited from `Segment#bsphere`_

**Overrides:&#x20;**`Segment#bsphere`

Segment bounding sphere

<MemberHeading id="bbox" depth="3" name="bbox" sig="bbox: Box" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L111" sourceLabel="Segment.js:111" />

_Inherited from `Segment#bbox`_

**Overrides:&#x20;**`Segment#bbox`

Segment bounding box.

<MemberHeading id="extent" depth="3" name="_extent" sig="_extent: Extent" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L122" sourceLabel="Segment.js:122" />

_Inherited from `Segment#_extent`_

**Overrides:&#x20;**`Segment#_extent`

Geographical extent.

<MemberHeading id="gridsize" depth="3" name="gridSize" sig="gridSize: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L130" sourceLabel="Segment.js:130" />

_Inherited from `Segment#gridSize`_

**Overrides:&#x20;**`Segment#gridSize`

Vertices grid size.

<MemberHeading id="tilezoom" depth="3" name="tileZoom" sig="tileZoom: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L138" sourceLabel="Segment.js:138" />

_Inherited from `Segment#tileZoom`_

**Overrides:&#x20;**`Segment#tileZoom`

Tile zoom index.

<MemberHeading id="tilex" depth="3" name="tileX" sig="tileX: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L144" sourceLabel="Segment.js:144" />

_Inherited from `Segment#tileX`_

**Overrides:&#x20;**`Segment#tileX`

Horizontal tile index.

<MemberHeading id="tiley" depth="3" name="tileY" sig="tileY: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L158" sourceLabel="Segment.js:158" />

_Inherited from `Segment#tileY`_

**Overrides:&#x20;**`Segment#tileY`

Vertical tile index.

<MemberHeading id="materials" depth="3" name="materials" sig="materials: Array.<planetSegment.Material>" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L168" sourceLabel="Segment.js:168" />

_Inherited from `Segment#materials`_

**Overrides:&#x20;**`Segment#materials`

Texture materials array.

<MemberHeading id="plainready" depth="3" name="plainReady" sig="plainReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L174" sourceLabel="Segment.js:174" />

_Inherited from `Segment#plainReady`_

**Overrides:&#x20;**`Segment#plainReady`

Plain segment vertices was created.

<MemberHeading id="initialized" depth="3" name="initialized" sig="initialized: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L180" sourceLabel="Segment.js:180" />

_Inherited from `Segment#initialized`_

**Overrides:&#x20;**`Segment#initialized`

Segment is ready to create plain vertices.

<MemberHeading id="normalmapready" depth="3" name="normalMapReady" sig="normalMapReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L186" sourceLabel="Segment.js:186" />

_Inherited from `Segment#normalMapReady`_

**Overrides:&#x20;**`Segment#normalMapReady`

Normal map is allready made.

<MemberHeading id="parentnormalmapready" depth="3" name="parentNormalMapReady" sig="parentNormalMapReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L192" sourceLabel="Segment.js:192" />

_Inherited from `Segment#parentNormalMapReady`_

**Overrides:&#x20;**`Segment#parentNormalMapReady`

Parent normal map is made allready(optimization parameter).

<MemberHeading id="terrainready" depth="3" name="terrainReady" sig="terrainReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L198" sourceLabel="Segment.js:198" />

_Inherited from `Segment#terrainReady`_

**Overrides:&#x20;**`Segment#terrainReady`

Terrain is allready applied flag.

<MemberHeading id="terrainisloading" depth="3" name="terrainIsLoading" sig="terrainIsLoading: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L204" sourceLabel="Segment.js:204" />

_Inherited from `Segment#terrainIsLoading`_

**Overrides:&#x20;**`Segment#terrainIsLoading`

Terrain is loading now flag.

<MemberHeading id="terrainexists" depth="3" name="terrainExists" sig="terrainExists: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L210" sourceLabel="Segment.js:210" />

_Inherited from `Segment#terrainExists`_

**Overrides:&#x20;**`Segment#terrainExists`

Terrain existing flag.
