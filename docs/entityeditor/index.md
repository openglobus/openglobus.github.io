---
title: EntityEditor
kind: class
longname: EntityEditor
description: Entity properties editor. Combines the {@link EntityGizmo} on-map transform mechanism with the &quot;Entity Properties&quot; dialog.
---

# EntityEditor

**Extends:&#x20;**[`EntityGizmo`](/entitygizmo)

<SourceLink href="/source/control/entityeditor/entityeditor-ts/#L16" label="EntityEditor.ts:16" />

Entity properties editor. Combines the [EntityGizmo](/entitygizmo) on-map transform mechanism with the "Entity Properties" dialog.

---

## Constructor

<Signature code="new EntityEditor(options): EntityEditor" />

---

## Instance Methods

<MemberHeading id="selectentity" depth="3" name="selectEntity" sig="selectEntity(entity: Entity)" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L151" sourceLabel="EntityGizmo.ts:151" />

_Inherited from `EntityGizmo#selectEntity`_

**Overrides:&#x20;**`EntityGizmo#selectEntity`

Shows the gizmo on the given entity. Activates the control when it is inactive. Changing the selection cancels any running gesture on the previously selected entity.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to transform.

<MemberHeading id="unselectentity" depth="3" name="unselectEntity" sig="unselectEntity()" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L162" sourceLabel="EntityGizmo.ts:162" />

_Inherited from `EntityGizmo#unselectEntity`_

**Overrides:&#x20;**`EntityGizmo#unselectEntity`

Hides the gizmo and drops the selection. Cancels a running gesture.

<MemberHeading id="getselectedentity" depth="3" name="getSelectedEntity" sig="getSelectedEntity(): Entity | null" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L171" sourceLabel="EntityGizmo.ts:171" />

_Inherited from `EntityGizmo#getSelectedEntity`_

**Overrides:&#x20;**`EntityGizmo#getSelectedEntity`

Returns the selected entity or `null`.

**Returns**

- [`Entity`](/entity)` | null`

<MemberHeading id="istransforming" depth="3" name="isTransforming" sig="isTransforming(): boolean" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L180" sourceLabel="EntityGizmo.ts:180" />

_Inherited from `EntityGizmo#isTransforming`_

**Overrides:&#x20;**`EntityGizmo#isTransforming`

Returns `true` while a drag gesture is running.

**Returns**

- `boolean`

<MemberHeading id="getactivetransform" depth="3" name="getActiveTransform" sig="getActiveTransform(): IGizmoTransformEvent | null" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L189" sourceLabel="EntityGizmo.ts:189" />

_Inherited from `EntityGizmo#getActiveTransform`_

**Overrides:&#x20;**`EntityGizmo#getActiveTransform`

Returns the running gesture description or `null`.

**Returns**

- `IGizmoTransformEvent | null`

<MemberHeading id="canceltransform" depth="3" name="cancelTransform" sig="cancelTransform(): boolean" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L198" sourceLabel="EntityGizmo.ts:198" />

_Inherited from `EntityGizmo#cancelTransform`_

**Overrides:&#x20;**`EntityGizmo#cancelTransform`

Cancels the current gesture and restores the entity transform when possible.

**Returns**

- `boolean` — Whether a gesture was cancelled.

<MemberHeading id="oninit" depth="3" name="oninit" sig="oninit()" />

<MemberMeta sourceHref="/source/control/control-ts/#L82" sourceLabel="Control.ts:82" />

_Inherited from `Control#oninit`_

**Overrides:&#x20;**`EntityGizmo#oninit`

Control initialization function have to be overridden.

<MemberHeading id="onadd" depth="3" name="onadd" sig="onadd()" />

<MemberMeta sourceHref="/source/control/control-ts/#L88" sourceLabel="Control.ts:88" />

_Inherited from `Control#onadd`_

**Overrides:&#x20;**`EntityGizmo#onadd`

Control renderer assigning function have to be overridden.

<MemberHeading id="onremove" depth="3" name="onremove" sig="onremove()" />

<MemberMeta sourceHref="/source/control/control-ts/#L94" sourceLabel="Control.ts:94" />

_Inherited from `Control#onremove`_

**Overrides:&#x20;**`EntityGizmo#onremove`

Control remove function have to be overridden.

<MemberHeading id="onactivate" depth="3" name="onactivate" sig="onactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L100" sourceLabel="Control.ts:100" />

_Inherited from `Control#onactivate`_

**Overrides:&#x20;**`EntityGizmo#onactivate`

Control activation function have to be overridden.

<MemberHeading id="ondeactivate" depth="3" name="ondeactivate" sig="ondeactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L106" sourceLabel="Control.ts:106" />

_Inherited from `Control#ondeactivate`_

**Overrides:&#x20;**`EntityGizmo#ondeactivate`

Control deactivation function have to be overriden.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo()" />

<MemberMeta sourceHref="/source/control/control-ts/#L113" sourceLabel="Control.ts:113" />

_Inherited from `Control#addTo`_

**Overrides:&#x20;**`EntityGizmo#addTo`

Assign renderer to the control.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/control/control-ts/#L137" sourceLabel="Control.ts:137" />

_Inherited from `Control#remove`_

**Overrides:&#x20;**`EntityGizmo#remove`

Removes control.

<MemberHeading id="activate" depth="3" name="activate" sig="activate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L164" sourceLabel="Control.ts:164" />

_Inherited from `Control#activate`_

**Overrides:&#x20;**`EntityGizmo#activate`

Activate control.

<MemberHeading id="deactivate" depth="3" name="deactivate" sig="deactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L183" sourceLabel="Control.ts:183" />

_Inherited from `Control#deactivate`_

**Overrides:&#x20;**`EntityGizmo#deactivate`

Deactivate control.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive()" />

<MemberMeta sourceHref="/source/control/control-ts/#L196" sourceLabel="Control.ts:196" />

_Inherited from `Control#isActive`_

**Overrides:&#x20;**`EntityGizmo#isActive`

Is control active.

## Instance Fields

<MemberHeading id="tools" depth="3" name="tools" sig="tools" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L113" sourceLabel="EntityGizmo.ts:113" />

_Inherited from `EntityGizmo#tools`_

**Overrides:&#x20;**`EntityGizmo#tools`

Gizmo tool set: which handles are shown.

<MemberHeading id="editmode" depth="3" name="editMode" sig="editMode" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L125" sourceLabel="EntityGizmo.ts:125" />

_Inherited from `EntityGizmo#editMode`_

**Overrides:&#x20;**`EntityGizmo#editMode`

Rotation mode of the rotation rings. Does nothing with `tools: "translate"`.

<MemberHeading id="autoselect" depth="3" name="autoSelect" sig="autoSelect" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L137" sourceLabel="EntityGizmo.ts:137" />

_Inherited from `EntityGizmo#autoSelect`_

**Overrides:&#x20;**`EntityGizmo#autoSelect`

When `false`, a left click on a map entity does not change the gizmo selection.

<MemberHeading id="name" depth="3" name="name" sig="name" />

<MemberMeta sourceHref="/source/control/control-ts/#L74" sourceLabel="Control.ts:74" />

_Inherited from `Control#name`_

**Overrides:&#x20;**`EntityGizmo#name`

Returns control name.

**Returns**

- `string`
