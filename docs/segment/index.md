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

<MemberMeta sourceHref="/source/segment/segment-ts/#L654" sourceLabel="Segment.ts:654" />

Returns entity terrain point.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.
- `res` ([Vec3](/vec3)) — Point coordinates.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="islonlatinside" depth="3" name="isLonLatInside" sig="isLonLatInside(lonLat: LonLat): boolean" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L672" sourceLabel="Segment.ts:672" />

Returns true when the segment covers the point.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- `boolean`

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

<MemberMeta sourceHref="/source/segment/segment-ts/#L685" sourceLabel="Segment.ts:685" />

Returns distance from object to terrain coordinates and terrain point that calculates out in the res parameter.

**Parameters**

- `xyz` ([Vec3](/vec3)) — Cartesian object position.
- `insideSegmentPosition` ([LonLat](/lonlat)) — Geodetic object position.
- `res` ([Vec3](/vec3), optional) — Result cartesian coordinates on the terrain, on the ellipsoid when the segment has no vertices yet.

**Returns**

- `number`

<MemberHeading id="hitcelltriangle" depth="3" name="_hitCellTriangle" sig="_hitCellTriangle()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L790" sourceLabel="Segment.ts:790" />

Ray test of the cell triangle at tri\[i]: 1 when the point is above it, -1 when below it, 0 when missed.

<MemberHeading id="projectnative" depth="3" name="projectNative" sig="projectNative(lonlat: LonLat): LonLat" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L831" sourceLabel="Segment.ts:831" />

Project wgs86 to segment native projection.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Coordinates to project.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="elevationsexists" depth="3" name="elevationsExists" sig="elevationsExists(elevations: Float32Array)" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L860" sourceLabel="Segment.ts:860" />

Terrain obtained from server.

**Parameters**

- `elevations` (Float32Array) — Elevation data.

<MemberHeading id="elevationsnotexists" depth="3" name="elevationsNotExists" sig="elevationsNotExists()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L886" sourceLabel="Segment.ts:886" />

Keep plain elevation segment for rendering

'this.tileZoom \<= this.planet.terrain.maxZoom' it means, that the segment is plain

<MemberHeading id="equalizecorner" depth="3" name="_equalizeCorner" sig="_equalizeCorner(corner: number)" />

<MemberMeta badges="protected" sourceHref="/source/segment/segment-ts/#L1053" sourceLabel="Segment.ts:1053" />

Takes the corner vertex from the owner of the point: the segment of the lowest zoom among the ones that have a corner there. The owner keeps its vertex, so the result doesn't depend on the order the segments go, and the comparison makes the vertex follow the owner without any labels.

**Parameters**

- `corner` (number) — Corner index, NW, NE, SW or SE.

<MemberHeading id="equalizecorneronside" depth="3" name="_equalizeCornerOnSide" sig="_equalizeCornerOnSide()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1128" sourceLabel="Segment.ts:1128" />

Puts the corner on the side of a neighbor of a lower zoom, when the point lies inside that side.

<MemberHeading id="getnormalmapsource" depth="3" name="_getNormalMapSource" sig="_getNormalMapSource()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1439" sourceLabel="Segment.ts:1439" />

The segment the normal map of this one comes from: itself, or the parent whose normal map.

<MemberHeading id="normalmapdrawn" depth="3" name="_normalMapDrawn" sig="_normalMapDrawn()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1581" sourceLabel="Segment.ts:1581" />

Called when the normal map is drawn. New normals change all the sides for the finer normal maps that took them.

<MemberHeading id="setextentlonlat" depth="3" name="_setExtentLonLat" sig="_setExtentLonLat()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1771" sourceLabel="Segment.ts:1771" />

<MemberHeading id="getextentcorners" depth="3" name="_getExtentCorners" sig="_getExtentCorners()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1778" sourceLabel="Segment.ts:1778" />

Returns the SW, NW, NE and SE corners of the segment on the ellipsoid.

<MemberHeading id="setterrainboundingvolume" depth="3" name="setTerrainBoundingVolume" sig="setTerrainBoundingVolume(bounds: NumberArray6)" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1968" sourceLabel="Segment.ts:1968" />

Sets the bounding volume of the terrain vertices, the plain segment volume when there are no finite vertices.

**Parameters**

- `bounds` (NumberArray6) — \[xmin, ymin, zmin, xmax, ymax, zmax].

<MemberHeading id="createplainbounds" depth="3" name="_createPlainBounds" sig="_createPlainBounds()" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L1979" sourceLabel="Segment.ts:1979" />

Creates the plain segment box center and half diagonal, the LOD volume without terrain.

<MemberHeading id="setlodradius" depth="3" name="setLodRadius" sig="setLodRadius(radius: number)" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L2004" sourceLabel="Segment.ts:2004" />

Raises the LOD center over the plain segment center by the height of the median vertex radius over the surface.

**Parameters**

- `radius` (number) — Median geocentric radius of the segment vertices.

<MemberHeading id="getlonlat" depth="3" name="getLonLat" sig="getLonLat(lon: number, lat: number): LonLat" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L2151" sourceLabel="Segment.ts:2151" />

Returns the geodetic coordinates of the native point.

**Parameters**

- `lon` (number) — Native longitude.
- `lat` (number) — Native latitude.

**Returns**

- [`LonLat`](/lonlat)

<MemberHeading id="getmaterialbylayer" depth="3" name="getMaterialByLayer" sig="getMaterialByLayer(layer: Layer): Material | undefined" />

<MemberMeta sourceHref="/source/segment/segment-ts/#L2253" sourceLabel="Segment.ts:2253" />

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

<MemberMeta badges="protected" sourceHref="/source/segment/segment-ts/#L2266" sourceLabel="Segment.ts:2266" />

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

<MemberMeta sourceHref="/source/segment/segment-ts/#L502" sourceLabel="Segment.ts:502" />
