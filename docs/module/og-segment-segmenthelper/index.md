---
title: og/segment/SegmentHelper
kind: module
longname: module:og/segment/SegmentHelper
---

# og/segment/SegmentHelper

<SourceLink href="/source/segment/segmenthelper-ts/#L5" label="segmentHelper.ts:5" />

---

## Instance Methods

<MemberHeading id="createcelltriangles" depth="3" name="createCellTriangles" sig="createCellTriangles(strip, size)" />

<MemberMeta sourceHref="/source/segment/segmenthelper-ts/#L191" sourceLabel="segmentHelper.ts:191" />

Lists the triangles of a triangle strip over a grid of (size + 1) x (size + 1) vertices per cell they cover. A triangle is listed in every cell of its bounding box.

**Parameters**

- `strip` — Vertex indexes of the triangle strip.
- `size` — Grid size, cells per side.

<MemberHeading id="createcelltrianglestable" depth="3" name="createCellTrianglesTable" sig="createCellTrianglesTable()" />

<MemberMeta sourceHref="/source/segment/segmenthelper-ts/#L244" sourceLabel="segmentHelper.ts:244" />

One slot per grid size and neighbour sizes, filled on first use by getCellTriangles.
