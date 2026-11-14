---
title: og/segment/SegmentHelper
kind: module
longname: module:og/segment/SegmentHelper
---

# og/segment/SegmentHelper

<SourceLink href="/source/segment/segmenthelper-ts/#L5" label="segmentHelper.ts:5" />

---

## Instance Methods

<MemberHeading id="createindexesarray" depth="3" name="createIndexesArray" sig="createIndexesArray(length, vertexCount)" />

<MemberMeta sourceHref="/source/segment/segmenthelper-ts/#L20" sourceLabel="segmentHelper.ts:20" />

Index array of the GPU buffer: 16 bit when the indexes fit, 32 bit otherwise. Index 0xFFFF restarts a primitive in WebGL2, so the 16 bit indexes stay below it.

**Parameters**

- `length` — Index count.
- `vertexCount` — Vertex count, the indexes are less than it.

<MemberHeading id="createcelltriangles" depth="3" name="createCellTriangles" sig="createCellTriangles(strip, size)" />

<MemberMeta sourceHref="/source/segment/segmenthelper-ts/#L197" sourceLabel="segmentHelper.ts:197" />

Lists the triangles of a triangle strip over a grid of (size + 1) x (size + 1) vertices per cell they cover. A triangle is listed in every cell of its bounding box.

**Parameters**

- `strip` — Vertex indexes of the triangle strip.
- `size` — Grid size, cells per side.

<MemberHeading id="createcelltrianglestable" depth="3" name="createCellTrianglesTable" sig="createCellTrianglesTable()" />

<MemberMeta sourceHref="/source/segment/segmenthelper-ts/#L250" sourceLabel="segmentHelper.ts:250" />

One slot per grid size and neighbour sizes, filled on first use by getCellTriangles.
