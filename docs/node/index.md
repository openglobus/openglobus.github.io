---
title: Node
kind: class
longname: Node
description: Quad tree planet segment node.
---

# Node

<SourceLink href="/source/quadtree/node-ts/#L72" label="Node.ts:72" />

Quad tree planet segment node.

---

## Constructor

<Signature
  code="new Node(
	segmentPrototype: Segment,
	quadTreeStrategy: QuadTreeStrategy,
	partId: number,
	parent: Node,
	id: number,
	tileZoom: number,
	extent: Extent,
): Node"
/>

**Parameters**

- `segmentPrototype` ([Segment](/segment)) — Planet segment node constructor.
- `quadTreeStrategy` (QuadTreeStrategy) — Quad tree strategy handler.
- `partId` (number) — NorthEast, SouthWest etc.
- `parent` ([Node](/node)) — Parent of this node.
- `id` (number) — Tree node identifier (id \* 4 + 1);
- `tileZoom` (number) — Deep index of the quad tree.
- `extent` ([Extent](/extent)) — Segment extent.

---

## Instance Methods

<MemberHeading id="getequalneighbor" depth="3" name="getEqualNeighbor" sig="getEqualNeighbor(side: number): Node" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L203" sourceLabel="Node.ts:203" />

Returns the same deep existent neighbour node.

**Parameters**

- `side` (number) — Neighbour side index e.g. og.quadTree.N, og.quadTree.W etc.

**Returns**

- [`Node`](/node)

<MemberHeading id="addtorender" depth="3" name="addToRender" sig="addToRender()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L557" sourceLabel="Node.ts:557" />

Picking up current node to render processing.

<MemberHeading id="getrenderednodesneighbors" depth="3" name="getRenderedNodesNeighbors" sig="getRenderedNodesNeighbors()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L622" sourceLabel="Node.ts:622" />

Searching current node for its neighbours.

<MemberHeading id="getcommonside" depth="3" name="getCommonSide" sig="getCommonSide(node: Node): number" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L638" sourceLabel="Node.ts:638" />

Checking if current node has a common side with input node and return side index N, E, S or W. Otherwise returns -1.

**Parameters**

- `node` ([Node](/node)) — Input node

**Returns**

- `number`
