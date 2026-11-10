---
title: CubeQuadTreeStrategy
kind: class
longname: CubeQuadTreeStrategy
description: "Quad trees on the six faces of a cube inflated to the ellipsoid: the tiles are close to squares all over the planet and there are no poles in the tree."
---

# CubeQuadTreeStrategy

**Extends:&#x20;**`QuadTreeStrategy`

<SourceLink href="/source/quadtree/cube/cubequadtreestrategy-ts/#L20" label="CubeQuadTreeStrategy.ts:20" />

Quad trees on the six faces of a cube inflated to the ellipsoid: the tiles are close to squares all over the planet and there are no poles in the tree.

---

## Constructor

<Signature code="new CubeQuadTreeStrategy(params): CubeQuadTreeStrategy" />

---

## Instance Methods

<MemberHeading id="clearlayermaterial" depth="3" name="clearLayerMaterial" sig="clearLayerMaterial(layer, keepRendered)" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L258" sourceLabel="QuadTreeStrategy.ts:258" />

_Inherited from `QuadTreeStrategy#clearLayerMaterial`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#clearLayerMaterial`

clears layer material from the quad tree list.

**Parameters**

- `layer`
- `keepRendered` (default: false) — if true, keeps materials that are currently rendered.

<MemberHeading id="getviewcamerarenderednodes" depth="3" name="getViewCameraRenderedNodes" sig="getViewCameraRenderedNodes(slot: number, frustumIndex?: number)" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L365" sourceLabel="QuadTreeStrategy.ts:365" />

_Inherited from `QuadTreeStrategy#getViewCameraRenderedNodes`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#getViewCameraRenderedNodes`

Nodes of a renderer depth camera: where it sees the main camera nodes it gets the same ones, elsewhere nodes chosen with the main camera LOD.

**Parameters**

- `slot` (number) — Depth camera index in the renderer depth camera handler.
- `frustumIndex` (number, optional, default: 0) — Depth camera frustum index.

<MemberHeading id="getviewcameraopenfrustums" depth="3" name="_getViewCameraOpenFrustums" sig="_getViewCameraOpenFrustums()" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L394" sourceLabel="QuadTreeStrategy.ts:394" />

_Inherited from `QuadTreeStrategy#_getViewCameraOpenFrustums`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#_getViewCameraOpenFrustums`

Mask of the view camera frustums whose node lists are not full yet.

<MemberHeading id="collectviewcamerasrendernodes" depth="3" name="_collectViewCamerasRenderNodes" sig="_collectViewCamerasRenderNodes()" />

<MemberMeta badges="protected" sourceHref="/source/quadtree/quadtreestrategy-ts/#L417" sourceLabel="QuadTreeStrategy.ts:417" />

_Inherited from `QuadTreeStrategy#_collectViewCamerasRenderNodes`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#_collectViewCamerasRenderNodes`

Runs after the main collection is complete. Takes the opaque main nodes the view camera sees, then walks the tree for the parts the main camera has not rendered, never going under a main rendered node.

<MemberHeading id="collectrendernodes" depth="3" name="collectRenderNodes" sig="collectRenderNodes()" />

<MemberMeta badges="protected" sourceHref="/source/quadtree/quadtreestrategy-ts/#L543" sourceLabel="QuadTreeStrategy.ts:543" />

_Inherited from `QuadTreeStrategy#collectRenderNodes`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#collectRenderNodes`

Collects visible quad nodes.

<MemberHeading id="addopaquenode" depth="3" name="_addOpaqueNode" sig="_addOpaqueNode()" />

<MemberMeta badges="protected" sourceHref="/source/quadtree/quadtreestrategy-ts/#L623" sourceLabel="QuadTreeStrategy.ts:623" />

_Inherited from `QuadTreeStrategy#_addOpaqueNode`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#_addOpaqueNode`

Takes the node into the opaque nodes of the frame, the neighbors are searched among them. A parent fading under its children comes here from each of them, it is taken once.

<MemberHeading id="updatehorizondist" depth="3" name="_updateHorizonDist" sig="_updateHorizonDist()" />

<MemberMeta badges="protected" sourceHref="/source/quadtree/quadtreestrategy-ts/#L694" sourceLabel="QuadTreeStrategy.ts:694" />

_Inherited from `QuadTreeStrategy#_updateHorizonDist`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#_updateHorizonDist`

Calculates the distance from the camera to the horizon of the highest terrain point: a point farther than it is under the horizon. Used in renderTree to skip rendering of segments that are under the horizon.

<MemberHeading id="collectviewrendernodes" depth="3" name="_collectViewRenderNodes" sig="_collectViewRenderNodes()" />

<MemberMeta badges="protected" sourceHref="/source/quadtree/quadtreestrategy-ts/#L722" sourceLabel="QuadTreeStrategy.ts:722" />

_Inherited from `QuadTreeStrategy#_collectViewRenderNodes`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#_collectViewRenderNodes`

The tree traversal of a view camera, it runs after the main camera one.

<MemberHeading id="clear" depth="3" name="clear" sig="clear(keepViewCameraBranches?: boolean)" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L750" sourceLabel="QuadTreeStrategy.ts:750" />

_Inherited from `QuadTreeStrategy#clear`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#clear`

Destroys the branches the main camera does not render.

**Parameters**

- `keepViewCameraBranches` (boolean, optional, default: false) — Keeps the branches leading to the nodes the depth cameras render now. They are under the nodes the main camera has not gone into, and would be made and loaded again.

<MemberHeading id="getnodebylonlat" depth="3" name="getNodeByLonLat" sig="getNodeByLonLat(lonLat: LonLat, zoom?: number): Node | null" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L767" sourceLabel="QuadTreeStrategy.ts:767" />

_Inherited from `QuadTreeStrategy#getNodeByLonLat`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#getNodeByLonLat`

Returns the most detailed node made under the point, not deeper than the zoom.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Point.
- `zoom` (number, optional) — Maximal node zoom.

**Returns**

- [`Node`](/node)` | null`

## Instance Fields

<MemberHeading id="renderready" depth="3" name="renderReady" sig="renderReady" />

<MemberMeta sourceHref="/source/quadtree/quadtreestrategy-ts/#L286" sourceLabel="QuadTreeStrategy.ts:286" />

_Inherited from `QuadTreeStrategy#renderReady`_

**Overrides:&#x20;**`CubeQuadTreeStrategy#renderReady`

Returns true when every rendered segment has got its materials applied and the completion has already been announced.

**Returns**

- `boolean`
