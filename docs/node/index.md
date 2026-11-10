---
title: Node
kind: class
longname: Node
description: Quad tree planet segment node.
---

# Node

<SourceLink href="/source/quadtree/node-ts/#L92" label="Node.ts:92" />

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

<MemberMeta sourceHref="/source/quadtree/node-ts/#L243" sourceLabel="Node.ts:243" />

Returns the same deep existent neighbour node.

**Parameters**

- `side` (number) — Neighbour side index e.g. og.quadTree.N, og.quadTree.W etc.

**Returns**

- [`Node`](/node)

<MemberHeading id="getfrustummask" depth="3" name="getFrustumMask" sig="getFrustumMask(cam: Camera): number" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L418" sourceLabel="Node.ts:418" />

Bit mask of the camera frustums the node is in, the same test renderTree makes.

**Parameters**

- `cam` ([Camera](/camera)) — Camera.

**Returns**

- `number`

<MemberHeading id="renderviewcameratree" depth="3" name="renderViewCameraTree" sig="renderViewCameraTree()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L440" sourceLabel="Node.ts:440" />

Tree traversal of a view (depth) camera, after the main camera one. While mainState is true the node state was set by the main traversal in this frame: it stops at the main rendered nodes (the strategy takes them) and goes down where the main camera went down. Elsewhere the nodes are chosen by the main camera LOD and the node state is not read anymore. It never changes the node state.

<MemberHeading id="isrenderedorfading" depth="3" name="isRenderedOrFading" sig="isRenderedOrFading(): boolean" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L591" sourceLabel="Node.ts:591" />

Returns true if the node is rendered, or fades in or out after a level of detail change.

**Returns**

- `boolean`

<MemberHeading id="isinfadingtransition" depth="3" name="isInFadingTransition" sig="isInFadingTransition(): boolean" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L602" sourceLabel="Node.ts:602" />

Returns true if the node is drawn this frame as a fading node of a level of detail change: a parent fading out after zooming in, or a child fading out after zooming out. Unlike isFading(), it also covers the fading children, whose state is NOTRENDERING.

**Returns**

- `boolean`

<MemberHeading id="addtorender" depth="3" name="addToRender" sig="addToRender()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L719" sourceLabel="Node.ts:719" />

Picking up current node to render processing.

<MemberHeading id="getrenderednodesneighbors" depth="3" name="getRenderedNodesNeighbors" sig="getRenderedNodesNeighbors(frame: number)" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L797" sourceLabel="Node.ts:797" />

Links the node with its neighbors of the same or lower zoom among the nodes marked with the frame. The deeper ones find this node themselves, as both sides of a pair are set by applyNeighbor.

**Parameters**

- `frame` (number) — Neighbor search counter of the strategy.

<MemberHeading id="linksideneighbors" depth="3" name="_linkSideNeighbors" sig="_linkSideNeighbors()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L807" sourceLabel="Node.ts:807" />

Climbs to the node that holds both this node and the tile next to it, or to the neighbor tree when the side lies on the edge of the tree, and goes down to the tile by the mirrored path.

<MemberHeading id="cleartree" depth="3" name="clearTree" sig="clearTree(keepViewCameraBranches?: boolean)" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L1122" sourceLabel="Node.ts:1122" />

Destroys the branches the main camera does not render.

**Parameters**

- `keepViewCameraBranches` (boolean, optional, default: false) — Keeps the branches the last view camera collection has gone through, they lead to the nodes the depth cameras render.

<MemberHeading
  id="getcornerneighbor"
  depth="3"
  name="getCornerNeighbor"
  sig="getCornerNeighbor(
	side: number,
	corner: number,
): Node | null | undefined"
/>

<MemberMeta sourceHref="/source/quadtree/node-ts/#L1184" sourceLabel="Node.ts:1184" />

Returns the neighbor behind the side that has a corner in the same point as the corner of this node.

**Parameters**

- `side` (number) — The side that the corner belongs to.
- `corner` (number) — Corner index, NW, NE, SW or SE.

**Returns**

- [`Node`](/node)` | null | undefined`

<MemberHeading id="getneighborcorner" depth="3" name="getNeighborCorner" sig="getNeighborCorner(side: number, corner: number): number" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L1219" sourceLabel="Node.ts:1219" />

Returns the corner of the neighbors behind the side that lies in the same point as the corner of this node.

**Parameters**

- `side` (number) — The side that the corner belongs to.
- `corner` (number) — Corner index, NW, NE, SW or SE.

**Returns**

- `number`
