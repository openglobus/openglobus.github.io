---
title: Node
kind: class
longname: Node
description: Quad tree planet segment node.
---

# Node

<SourceLink href="/source/quadtree/node-ts/#L89" label="Node.ts:89" />

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

<MemberMeta sourceHref="/source/quadtree/node-ts/#L228" sourceLabel="Node.ts:228" />

Returns the same deep existent neighbour node.

**Parameters**

- `side` (number) — Neighbour side index e.g. og.quadTree.N, og.quadTree.W etc.

**Returns**

- [`Node`](/node)

<MemberHeading id="getfrustummask" depth="3" name="getFrustumMask" sig="getFrustumMask(cam: Camera): number" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L410" sourceLabel="Node.ts:410" />

Bit mask of the camera frustums the node is in, the same test renderTree makes.

**Parameters**

- `cam` ([Camera](/camera)) — Camera.

**Returns**

- `number`

<MemberHeading id="renderviewcameratree" depth="3" name="renderViewCameraTree" sig="renderViewCameraTree()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L432" sourceLabel="Node.ts:432" />

Tree traversal of a view (depth) camera, after the main camera one. While mainState is true the node state was set by the main traversal in this frame: it stops at the main rendered nodes (the strategy takes them) and goes down where the main camera went down. Elsewhere the nodes are chosen by the main camera LOD and the node state is not read anymore. It never changes the node state.

<MemberHeading id="isrenderedorfading" depth="3" name="isRenderedOrFading" sig="isRenderedOrFading(): boolean" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L583" sourceLabel="Node.ts:583" />

Returns true if the node is rendered, or fades in or out after a level of detail change.

**Returns**

- `boolean`

<MemberHeading id="isinfadingtransition" depth="3" name="isInFadingTransition" sig="isInFadingTransition(): boolean" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L594" sourceLabel="Node.ts:594" />

Returns true if the node is drawn this frame as a fading node of a level of detail change: a parent fading out after zooming in, or a child fading out after zooming out. Unlike isFading(), it also covers the fading children, whose state is NOTRENDERING.

**Returns**

- `boolean`

<MemberHeading id="addtorender" depth="3" name="addToRender" sig="addToRender()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L711" sourceLabel="Node.ts:711" />

Picking up current node to render processing.

<MemberHeading id="getrenderednodesneighbors" depth="3" name="getRenderedNodesNeighbors" sig="getRenderedNodesNeighbors()" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L788" sourceLabel="Node.ts:788" />

Searching current node for its neighbours.

<MemberHeading id="getcommonside" depth="3" name="getCommonSide" sig="getCommonSide(node: Node): number" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L806" sourceLabel="Node.ts:806" />

Checking if current node has a common side with input node and return side index N, E, S or W. Otherwise returns -1.

**Parameters**

- `node` ([Node](/node)) — Input node

**Returns**

- `number`

<MemberHeading id="cleartree" depth="3" name="clearTree" sig="clearTree(keepViewCameraBranches?: boolean)" />

<MemberMeta sourceHref="/source/quadtree/node-ts/#L1183" sourceLabel="Node.ts:1183" />

Destroys the branches the main camera does not render.

**Parameters**

- `keepViewCameraBranches` (boolean, optional, default: false) — Keeps the branches the last view camera collection has gone through, they lead to the nodes the depth cameras render.
