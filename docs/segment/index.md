---
title: Segment
kind: class
longname: Segment
description: Planet segment Web Mercator tile class that stored and rendered with quad tree.
---

# Segment

<SourceLink href="/source/control/visibleextent/segment-js/#L67" label="Segment.js:67" />

Planet segment Web Mercator tile class that stored and rendered with quad tree.

---

## Constructor

<Signature
  code="new Segment(
	node: quadTree.Node,
	planet: Planet,
	tileZoom: Number,
	extent: Extent,
): Segment"
/>

**Parameters**

- `node` (quadTree.Node) — Segment node.
- `planet` ([Planet](/planet)) — Current planet scene.
- `tileZoom` (Number) — Zoom index.
- `extent` ([Extent](/extent)) — Segment extent.

---

## Instance Methods

<MemberHeading id="acceptforrendering" depth="3" name="acceptForRendering" sig="acceptForRendering(camera: Camera): boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L259" sourceLabel="Segment.js:259" />

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

Project wgs86 to segment native projection.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Coordinates to project.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="loadterrain" depth="3" name="loadTerrain" sig="loadTerrain(forceLoading: boolean)" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L374" sourceLabel="Segment.js:374" />

**Parameters**

- `forceLoading` (boolean)

<MemberHeading id="elevationsexists" depth="3" name="elevationsExists" sig="elevationsExists(elevations: Float32Array)" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L396" sourceLabel="Segment.js:396" />

Terrain obtained from server.

**Parameters**

- `elevations` (Float32Array) — Elevation data.

<MemberHeading id="elevationsnotexists" depth="3" name="elevationsNotExists" sig="elevationsNotExists()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L714" sourceLabel="Segment.js:714" />

Terrain is not obtained or not exists on the server.

<MemberHeading id="deletebuffers" depth="3" name="deleteBuffers" sig="deleteBuffers()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L842" sourceLabel="Segment.js:842" />

Delete segment gl buffers.

<MemberHeading id="deletematerials" depth="3" name="deleteMaterials" sig="deleteMaterials()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L859" sourceLabel="Segment.js:859" />

Delete materials.

<MemberHeading id="deleteelevations" depth="3" name="deleteElevations" sig="deleteElevations()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L873" sourceLabel="Segment.js:873" />

Delete elevation data.

<MemberHeading id="clearsegment" depth="3" name="clearSegment" sig="clearSegment()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L914" sourceLabel="Segment.js:914" />

Clear but not destroy segment data.

<MemberHeading id="freecache" depth="3" name="_freeCache" sig="_freeCache()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L925" sourceLabel="Segment.js:925" />

Removes cache records.

<MemberHeading id="destroysegment" depth="3" name="destroySegment" sig="destroySegment()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L933" sourceLabel="Segment.js:933" />

Clear and destroy all segment data.

<MemberHeading id="createboundsbyextent" depth="3" name="createBoundsByExtent" sig="createBoundsByExtent()" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L995" sourceLabel="Segment.js:995" />

Creates bound volumes by segment geographical extent.

<MemberHeading id="getmaterialbylayer" depth="3" name="getMaterialByLayer" sig="getMaterialByLayer(layer: Layer): planetSegment.Material" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L1387" sourceLabel="Segment.js:1387" />

Gets specific layer material.

**Parameters**

- `layer` ([Layer](/layer)) — Layer object.

**Returns**

- `planetSegment.Material`

<MemberHeading id="getentityterrainpoint" depth="3" name="getEntityTerrainPoint" sig="getEntityTerrainPoint(entity: Entity, res: Vec3): Vec3" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L516" sourceLabel="Segment.ts:516" />

Returns entity terrain point.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.
- `res` ([Vec3](/vec3)) — Point coordinates.

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
): number"
/>

<MemberMeta sourceHref="/source/segment/segment-ts/#L536" sourceLabel="Segment.ts:536" />

Returns distance from object to terrain coordinates and terrain point that calculates out in the res parameter.

**Parameters**

- `xyz` ([Vec3](/vec3)) — Cartesian object position.
- `insideSegmentPosition` ([LonLat](/lonlat)) — Geodetic object position.
- `res` ([Vec3](/vec3), optional) — Result cartesian coordinates on the terrain.

**Returns**

- `number`

<MemberHeading id="projectnative" depth="3" name="projectNative" sig="projectNative(lonlat: LonLat): LonLat" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L638" sourceLabel="Segment.ts:638" />

Project wgs86 to segment native projection.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Coordinates to project.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="elevationsexists" depth="3" name="elevationsExists" sig="elevationsExists(elevations: Float32Array)" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L667" sourceLabel="Segment.ts:667" />

Terrain obtained from server.

**Parameters**

- `elevations` (Float32Array) — Elevation data.

<MemberHeading id="elevationsnotexists" depth="3" name="elevationsNotExists" sig="elevationsNotExists()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L693" sourceLabel="Segment.ts:693" />

Keep plain elevation segment for rendering

'this.tileZoom \<= this.planet.terrain.maxZoom' it means, that the segment is plain

<MemberHeading id="setextentlonlat" depth="3" name="_setExtentLonLat" sig="_setExtentLonLat()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1375" sourceLabel="Segment.ts:1375" />

<MemberHeading id="getmaterialbylayer" depth="3" name="getMaterialByLayer" sig="getMaterialByLayer(layer: Layer): Material | undefined" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1788" sourceLabel="Segment.ts:1788" />

Gets specific layer material.

**Parameters**

- `layer` ([Layer](/layer)) — Layer object.

**Returns**

- [`Material`](/material)` | undefined`

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

<MemberMeta badges="protected" sourceHref="/source/segment/segment-ts/#L1801" sourceLabel="Segment.ts:1801" />

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

Quad tree node of the segment.

<MemberHeading id="planet" depth="3" name="planet" sig="planet: Planet" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L91" sourceLabel="Segment.js:91" />

Planet pointer.

<MemberHeading id="handler" depth="3" name="handler" sig="handler: Handler" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L97" sourceLabel="Segment.js:97" />

WebGl handler pointer.

<MemberHeading id="bsphere" depth="3" name="bsphere" sig="bsphere: Sphere" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L103" sourceLabel="Segment.js:103" />

Segment bounding sphere

<MemberHeading id="bbox" depth="3" name="bbox" sig="bbox: Box" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L111" sourceLabel="Segment.js:111" />

Segment bounding box.

<MemberHeading id="extent" depth="3" name="_extent" sig="_extent: Extent" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L122" sourceLabel="Segment.js:122" />

Geographical extent.

<MemberHeading id="gridsize" depth="3" name="gridSize" sig="gridSize: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L130" sourceLabel="Segment.js:130" />

Vertices grid size.

<MemberHeading id="tilezoom" depth="3" name="tileZoom" sig="tileZoom: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L138" sourceLabel="Segment.js:138" />

Tile zoom index.

<MemberHeading id="tilex" depth="3" name="tileX" sig="tileX: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L144" sourceLabel="Segment.js:144" />

Horizontal tile index.

<MemberHeading id="tiley" depth="3" name="tileY" sig="tileY: number" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L158" sourceLabel="Segment.js:158" />

Vertical tile index.

<MemberHeading id="materials" depth="3" name="materials" sig="materials: Array.<planetSegment.Material>" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L168" sourceLabel="Segment.js:168" />

Texture materials array.

<MemberHeading id="plainready" depth="3" name="plainReady" sig="plainReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L174" sourceLabel="Segment.js:174" />

Plain segment vertices was created.

<MemberHeading id="initialized" depth="3" name="initialized" sig="initialized: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L180" sourceLabel="Segment.js:180" />

Segment is ready to create plain vertices.

<MemberHeading id="normalmapready" depth="3" name="normalMapReady" sig="normalMapReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L186" sourceLabel="Segment.js:186" />

Normal map is allready made.

<MemberHeading id="parentnormalmapready" depth="3" name="parentNormalMapReady" sig="parentNormalMapReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L192" sourceLabel="Segment.js:192" />

Parent normal map is made allready(optimization parameter).

<MemberHeading id="terrainready" depth="3" name="terrainReady" sig="terrainReady: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L198" sourceLabel="Segment.js:198" />

Terrain is allready applied flag.

<MemberHeading id="terrainisloading" depth="3" name="terrainIsLoading" sig="terrainIsLoading: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L204" sourceLabel="Segment.js:204" />

Terrain is loading now flag.

<MemberHeading id="terrainexists" depth="3" name="terrainExists" sig="terrainExists: boolean" />

<MemberMeta sourceHref="/source/control/visibleextent/segment-js/#L210" sourceLabel="Segment.js:210" />

Terrain existing flag.

<MemberHeading id="materials" depth="3" name="materials" sig="materials" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L370" sourceLabel="Segment.ts:370" />
