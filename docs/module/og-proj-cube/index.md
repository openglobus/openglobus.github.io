---
title: og/proj/cube
kind: module
longname: module:og/proj/cube
---

# og/proj/cube

<SourceLink href="/source/proj/cube-ts/#L5" label="cube.ts:5" />

---

## Instance Methods

<MemberHeading id="iscubeproj" depth="3" name="isCubeProj" sig="isCubeProj(proj: Proj): boolean" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L218" sourceLabel="cube.ts:218" />

Returns true for the cube projections.

**Parameters**

- `proj` (Proj) — Projection.

**Returns**

- `boolean`

## Static Fields

<MemberHeading id="cubeproj" depth="3" name="CubeProj" sig="CubeProj: CubeProj" />

<MemberMeta badges="static" sourceHref="/source/proj/cube-ts/#L205" sourceLabel="cube.ts:205" />

The cube of a common cube map: the planes of the faces are split evenly.

## Other

<MemberHeading id="cubefaces" depth="3" name="CUBE_FACES" sig="CUBE_FACES" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L21" sourceLabel="cube.ts:21" />

Center, east and north directions of the cube faces. The faces from CUBE\_FRONT to CUBE\_LEFT lie on the equator at longitudes 0, 90, 180 and -90.

<MemberHeading id="cubefacelinks" depth="3" name="CUBE_FACE_LINKS" sig="CUBE_FACE_LINKS" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L33" sourceLabel="cube.ts:33" />

The face and its side behind the N, E, S and W sides of each face.

<MemberHeading id="cubeopside" depth="3" name="CUBE_OPSIDE" sig="CUBE_OPSIDE" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L82" sourceLabel="cube.ts:82" />

Sides of the neighbors of a tile, see Segment.opside. First index is the face, second is the mask of the tile sides that lie on the edges of the face, a bit for each of {N,E,S,W}.

<MemberHeading id="cubenodeidoffset" depth="3" name="CUBE_NODE_ID_OFFSET" sig="CUBE_NODE_ID_OFFSET" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L92" sourceLabel="cube.ts:92" />

The root of a face has the node id of the offset plus the face. So the faces have no common ids.

<MemberHeading id="cubeproj" depth="3" name="CubeProj" sig="CubeProj" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L111" sourceLabel="cube.ts:111" />

**Extends:&#x20;**`Proj`

Projection of a cube inflated to the ellipsoid. Native coordinates of a point: lon is the face index plus the position from west to east, lat is the position from south to north, both positions are from 0 to 1.

**Parameters**

- `code` (string) — Projection code.
- `equiangular` (boolean) — True when equal steps on a face are equal angles, false when they are equal distances on the plane of the face, as in a common cube map.

<MemberHeading id="cubeequiangular" depth="3" name="cubeEquiangular" sig="cubeEquiangular: CubeProj" />

<MemberMeta sourceHref="/source/proj/cube-ts/#L211" sourceLabel="cube.ts:211" />

The cube with tiles of about the same size all over the planet.
