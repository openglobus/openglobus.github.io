---
title: EntityGizmoScene
kind: class
longname: EntityGizmoScene
description: Scene for translating and rotating entities with a gizmo.
---

# EntityGizmoScene

**Extends:&#x20;**[`Scene`](/scene)

<SourceLink href="/source/control/entitygizmo/entitygizmoscene-ts/#L162" label="EntityGizmoScene.ts:162" />

Scene for translating and rotating entities with a gizmo.

---

## Constructor

<Signature
  code="new EntityGizmoScene(
	options?: IEntityGizmoSceneParams,
): EntityGizmoScene"
/>

**Parameters**

- `options` (IEntityGizmoSceneParams, optional) — Gizmo scene options.

---

## Instance Methods

<MemberHeading id="navsuspend" depth="3" name="_navSuspend" sig="_navSuspend()" />

<MemberMeta badges="protected" sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L395" sourceLabel="EntityGizmoScene.ts:395" />

Suspends the navigation controls that are active right now, so that a drag gesture does not fight with the camera. The suspended set is remembered and restored by `EntityGizmoScene._navRestore`, which keeps controls that were already deactivated beforehand deactivated.

<MemberHeading id="isgizmoentity" depth="3" name="_isGizmoEntity" sig="_isGizmoEntity()" />

<MemberMeta badges="protected" sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L607" sourceLabel="EntityGizmoScene.ts:607" />

Returns `true` when the entity is one of the gizmo handles.

<MemberHeading id="istransforming" depth="3" name="isTransforming" sig="isTransforming()" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L663" sourceLabel="EntityGizmoScene.ts:663" />

Returns `true` when a drag gesture is running right now.

<MemberHeading id="getactivetransform" depth="3" name="getActiveTransform" sig="getActiveTransform()" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L671" sourceLabel="EntityGizmoScene.ts:671" />

Returns the running gesture description or `null`.

<MemberHeading id="canceltransform" depth="3" name="cancelTransform" sig="cancelTransform(): boolean" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L680" sourceLabel="EntityGizmoScene.ts:680" />

Cancels the current gesture and restores the entity transform when possible.

**Returns**

- `boolean` — Whether a gesture was cancelled.

<MemberHeading id="beginchange" depth="3" name="_beginChange" sig="_beginChange()" />

<MemberMeta badges="protected" sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L740" sourceLabel="EntityGizmoScene.ts:740" />

Dispatches `transformstart` right before the very first entity change of the gesture.

<MemberHeading id="applyposition" depth="3" name="_applyPosition" sig="_applyPosition(pos: Vec3)" />

<MemberMeta badges="protected" sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L971" sourceLabel="EntityGizmoScene.ts:971" />

Applies a new absolute position to the selected entity and emits the gesture events around the change. The `position` event receives the applied `pos` and the entity.

**Parameters**

- `pos` ([Vec3](/vec3)) — New absolute cartesian position.

<MemberHeading id="addnode" depth="3" name="addNode" sig="addNode()" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L116" sourceLabel="Scene.ts:116" />

_Inherited from `Scene#addNode`_

**Overrides:&#x20;**`Scene#addNode`

Adds node to the current hierarchy.

<MemberHeading id="assign" depth="3" name="assign" sig="assign(renderer: Renderer)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L132" sourceLabel="Scene.ts:132" />

_Inherited from `Scene#assign`_

**Overrides:&#x20;**`Scene#assign`

Assign render node with renderer.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Render node's renderer.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L185" sourceLabel="Scene.ts:185" />

_Inherited from `Scene#destroy`_

**Overrides:&#x20;**`Scene#destroy`

Destroy node.

<MemberHeading id="clear" depth="3" name="_clear" sig="_clear()" />

<MemberMeta badges="protected" sourceHref="/source/scene/scene-ts/#L196" sourceLabel="Scene.ts:196" />

_Inherited from `Scene#_clear`_

**Overrides:&#x20;**`Scene#_clear`

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

_Inherited from `Scene#addEntityCollection`_

**Overrides:&#x20;**`Scene#addEntityCollection`

Adds an entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection.
- `isHidden` (boolean, optional) — If it's true that this collection has specific rendering.

**Returns**

- [`Scene`](/scene)

<MemberHeading id="removeentitycollection" depth="3" name="removeEntityCollection" sig="removeEntityCollection(entityCollection: EntityCollection)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L232" sourceLabel="Scene.ts:232" />

_Inherited from `Scene#removeEntityCollection`_

**Overrides:&#x20;**`Scene#removeEntityCollection`

Removes entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection for remove.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): Boolean" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L265" sourceLabel="Scene.ts:265" />

_Inherited from `Scene#isActive`_

**Overrides:&#x20;**`Scene#isActive`

Gets render node activity.

**Returns**

- `Boolean`

<MemberHeading id="setactive" depth="3" name="setActive" sig="setActive(isActive: boolean)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L274" sourceLabel="Scene.ts:274" />

_Inherited from `Scene#setActive`_

**Overrides:&#x20;**`Scene#setActive`

Rendering activation.

**Parameters**

- `isActive` (boolean) — Activation flag.

<MemberHeading id="setdrawmode" depth="3" name="setDrawMode" sig="setDrawMode(mode: Number)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L298" sourceLabel="Scene.ts:298" />

_Inherited from `Scene#setDrawMode`_

**Overrides:&#x20;**`Scene#setDrawMode`

Sets draw mode

**Parameters**

- `mode` (Number) — Draw mode, such as gl.TRIANGLES, gl.TRIANGLE\_STRIP, gl.LINES etc.

<MemberHeading id="drawpickingentitycollections" depth="3" name="drawPickingEntityCollections" sig="drawPickingEntityCollections(ec: Array.<EntityCollection>)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L334" sourceLabel="Scene.ts:334" />

_Inherited from `Scene#drawPickingEntityCollections`_

**Overrides:&#x20;**`Scene#drawPickingEntityCollections`

Draw entity collections picking frame.

**Parameters**

- `ec` (Array.\<[EntityCollection](/entitycollection)>) — Entity collection array.

## Instance Fields

<MemberHeading id="tools" depth="3" name="tools" sig="tools" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L513" sourceLabel="EntityGizmoScene.ts:513" />

Gizmo tool set: which handles are shown.

<MemberHeading id="autoselect" depth="3" name="autoSelect" sig="autoSelect" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmoscene-ts/#L321" sourceLabel="EntityGizmoScene.ts:321" />

When `false`, a left click neither selects a map entity nor drops the current selection.
