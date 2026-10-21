---
title: EntityGizmo
kind: class
longname: EntityGizmo
description: On-map gizmo for translating and rotating entities.
---

# EntityGizmo

**Extends:&#x20;**[`Control`](/control)

<SourceLink href="/source/control/entitygizmo/entitygizmo-ts/#L67" label="EntityGizmo.ts:67" />

On-map gizmo for translating and rotating entities.

---

## Constructor

<Signature code="new EntityGizmo(options?: IEntityGizmoParams): EntityGizmo" />

**Parameters**

- `options` (IEntityGizmoParams, optional) — Gizmo options:
  - `options.tools` (GizmoTools, optional) — Gizmo tool set, i.e., which handles are shown. `translate` shows move axes and planes only, `full` adds rotation rings. Orthogonal to `editMode`.
  - `options.editMode` (EditModeName, optional) — Rotation mode. `native` rotates in the entity's own frame, `yaw` rotates in the local horizon frame. Affects the rotation rings only, so it does nothing with `tools: "translate"`.
  - `options.autoSelect` (boolean, optional) — When `true`, a left click on a map entity selects it and a left click anywhere else drops the selection. When `false`, clicks do not change the gizmo selection, so the host application stays the only source of the selection. Default is `true`.

---

## Instance Methods

<MemberHeading id="selectentity" depth="3" name="selectEntity" sig="selectEntity(entity: Entity)" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L152" sourceLabel="EntityGizmo.ts:152" />

Shows the gizmo on the given entity. Activates the control when it is inactive. Changing the selection cancels any running gesture on the previously selected entity.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to transform.

<MemberHeading id="unselectentity" depth="3" name="unselectEntity" sig="unselectEntity()" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L163" sourceLabel="EntityGizmo.ts:163" />

Hides the gizmo and drops the selection. Cancels a running gesture.

<MemberHeading id="getselectedentity" depth="3" name="getSelectedEntity" sig="getSelectedEntity(): Entity | null" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L172" sourceLabel="EntityGizmo.ts:172" />

Returns the selected entity or `null`.

**Returns**

- [`Entity`](/entity)` | null`

<MemberHeading id="istransforming" depth="3" name="isTransforming" sig="isTransforming(): boolean" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L181" sourceLabel="EntityGizmo.ts:181" />

Returns `true` while a drag gesture is running.

**Returns**

- `boolean`

<MemberHeading id="getactivetransform" depth="3" name="getActiveTransform" sig="getActiveTransform(): IGizmoTransformEvent | null" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L190" sourceLabel="EntityGizmo.ts:190" />

Returns the running gesture description or `null`.

**Returns**

- `IGizmoTransformEvent | null`

<MemberHeading id="canceltransform" depth="3" name="cancelTransform" sig="cancelTransform(): boolean" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L199" sourceLabel="EntityGizmo.ts:199" />

Cancels the current gesture and restores the entity transform when possible.

**Returns**

- `boolean` — Whether a gesture was cancelled.

<MemberHeading id="oninit" depth="3" name="oninit" sig="oninit()" />

<MemberMeta sourceHref="/source/control/control-ts/#L82" sourceLabel="Control.ts:82" />

_Inherited from `Control#oninit`_

**Overrides:&#x20;**`Control#oninit`

Control initialization function have to be overridden.

<MemberHeading id="onadd" depth="3" name="onadd" sig="onadd()" />

<MemberMeta sourceHref="/source/control/control-ts/#L88" sourceLabel="Control.ts:88" />

_Inherited from `Control#onadd`_

**Overrides:&#x20;**`Control#onadd`

Control renderer assigning function have to be overridden.

<MemberHeading id="onremove" depth="3" name="onremove" sig="onremove()" />

<MemberMeta sourceHref="/source/control/control-ts/#L94" sourceLabel="Control.ts:94" />

_Inherited from `Control#onremove`_

**Overrides:&#x20;**`Control#onremove`

Control remove function have to be overridden.

<MemberHeading id="onactivate" depth="3" name="onactivate" sig="onactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L100" sourceLabel="Control.ts:100" />

_Inherited from `Control#onactivate`_

**Overrides:&#x20;**`Control#onactivate`

Control activation function have to be overridden.

<MemberHeading id="ondeactivate" depth="3" name="ondeactivate" sig="ondeactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L106" sourceLabel="Control.ts:106" />

_Inherited from `Control#ondeactivate`_

**Overrides:&#x20;**`Control#ondeactivate`

Control deactivation function have to be overriden.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo()" />

<MemberMeta sourceHref="/source/control/control-ts/#L113" sourceLabel="Control.ts:113" />

_Inherited from `Control#addTo`_

**Overrides:&#x20;**`Control#addTo`

Assign renderer to the control.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/control/control-ts/#L137" sourceLabel="Control.ts:137" />

_Inherited from `Control#remove`_

**Overrides:&#x20;**`Control#remove`

Removes control.

<MemberHeading id="activate" depth="3" name="activate" sig="activate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L164" sourceLabel="Control.ts:164" />

_Inherited from `Control#activate`_

**Overrides:&#x20;**`Control#activate`

Activate control.

<MemberHeading id="deactivate" depth="3" name="deactivate" sig="deactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L183" sourceLabel="Control.ts:183" />

_Inherited from `Control#deactivate`_

**Overrides:&#x20;**`Control#deactivate`

Deactivate control.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive()" />

<MemberMeta sourceHref="/source/control/control-ts/#L196" sourceLabel="Control.ts:196" />

_Inherited from `Control#isActive`_

**Overrides:&#x20;**`Control#isActive`

Is control active.

## Instance Fields

<MemberHeading id="tools" depth="3" name="tools" sig="tools" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L114" sourceLabel="EntityGizmo.ts:114" />

Gizmo tool set: which handles are shown.

<MemberHeading id="editmode" depth="3" name="editMode" sig="editMode" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L126" sourceLabel="EntityGizmo.ts:126" />

Rotation mode of the rotation rings. Does nothing with `tools: "translate"`.

<MemberHeading id="autoselect" depth="3" name="autoSelect" sig="autoSelect" />

<MemberMeta sourceHref="/source/control/entitygizmo/entitygizmo-ts/#L138" sourceLabel="EntityGizmo.ts:138" />

When `false`, a left click neither selects a map entity nor drops the current selection.

<MemberHeading id="name" depth="3" name="name" sig="name" />

<MemberMeta sourceHref="/source/control/control-ts/#L74" sourceLabel="Control.ts:74" />

_Inherited from `Control#name`_

**Overrides:&#x20;**`Control#name`

Returns control name.

**Returns**

- `string`
