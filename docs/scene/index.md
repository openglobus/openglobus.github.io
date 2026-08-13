---
title: Scene
kind: class
longname: Scene
description: Render node is a logical part of a render mechanism. Represents scene rendering. For example, one scene node for rendering the Earth, another one for rendering the Moon, another node for rendering stars etc. Each render node has its own model view space defined with matrices(scale, rotation, translation, transformation). There are collections of light sources, entities, and so on in the node. Access to the node is renderer.scenes[ &quot;Earth&quot;]
---

# Scene

<SourceLink href="/source/scene/scene-ts/#L17" label="Scene.ts:17" />

Render node is a logical part of a render mechanism. Represents scene rendering. For example, one scene node for rendering the Earth, another one for rendering the Moon, another node for rendering stars etc. Each render node has its own model view space defined with matrices(scale, rotation, translation, transformation). There are collections of light sources, entities, and so on in the node. Access to the node is renderer.scenes\[ "Earth"]

---

## Constructor

<Signature code="new Scene(name: string): Scene" />

**Parameters**

- `name` (string) — Node name.

---

## Instance Methods

<MemberHeading id="addnode" depth="3" name="addNode" sig="addNode()" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L116" sourceLabel="Scene.ts:116" />

Adds node to the current hierarchy.

<MemberHeading id="assign" depth="3" name="assign" sig="assign(renderer: Renderer)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L132" sourceLabel="Scene.ts:132" />

Assign render node with renderer.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Render node's renderer.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L185" sourceLabel="Scene.ts:185" />

Destroy node.

<MemberHeading id="clear" depth="3" name="_clear" sig="_clear()" />

<MemberMeta badges="protected" sourceHref="/source/scene/scene-ts/#L196" sourceLabel="Scene.ts:196" />

Clear current node.

<MemberHeading
  id="addentitycollection"
  depth="3"
  name="addEntityCollection"
  sig="addEntityCollection(
	entityCollection: EntityCollection,
	isHidden?: boolean,
): Scene"
/>

<MemberMeta sourceHref="/source/scene/scene-ts/#L209" sourceLabel="Scene.ts:209" />

Adds an entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection.
- `isHidden` (boolean, optional) — If it's true that this collection has specific rendering.

**Returns**

- [`Scene`](/scene)

<MemberHeading id="removeentitycollection" depth="3" name="removeEntityCollection" sig="removeEntityCollection(entityCollection: EntityCollection)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L232" sourceLabel="Scene.ts:232" />

Removes entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection for remove.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): Boolean" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L265" sourceLabel="Scene.ts:265" />

Gets render node activity.

**Returns**

- `Boolean`

<MemberHeading id="setactive" depth="3" name="setActive" sig="setActive(isActive: boolean)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L274" sourceLabel="Scene.ts:274" />

Rendering activation.

**Parameters**

- `isActive` (boolean) — Activation flag.

<MemberHeading id="setdrawmode" depth="3" name="setDrawMode" sig="setDrawMode(mode: Number)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L298" sourceLabel="Scene.ts:298" />

Sets draw mode

**Parameters**

- `mode` (Number) — Draw mode, such as gl.TRIANGLES, gl.TRIANGLE\_STRIP, gl.LINES etc.

<MemberHeading id="drawpickingentitycollections" depth="3" name="drawPickingEntityCollections" sig="drawPickingEntityCollections(ec: Array.<EntityCollection>)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L334" sourceLabel="Scene.ts:334" />

Draw entity collections picking frame.

**Parameters**

- `ec` (Array.\<[EntityCollection](/entitycollection)>) — Entity collection array.
