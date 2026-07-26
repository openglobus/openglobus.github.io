---
title: Navigation
kind: class
longname: Navigation
description: Navigation.
---

# Navigation

**Extends:&#x20;**[`Control`](/control)

<SourceLink href="/source/control/navigation-ts/#L113" label="Navigation.ts:113" />

Navigation.

**Fires**

- `event:drag`
- `event:zoom`
- `event:rotate`

---

## Constructor

<Signature code="new Navigation(options?: INavigationParams): Navigation" />

**Parameters**

- `options` (INavigationParams, optional) — Navigation options:
  - `options.mode` (NavigationMode, optional) — Navigation mode: "north" (keeps north fixed), "adaptive" (default, auto-detects arc mode), "free" (arc rotation mode)
  - `options.inertia` (number, optional) — inertia factor
  - `options.minInertia` (number, optional) — inertia factor at minInertiaAltitude. Default is 1
  - `options.maxInertia` (number, optional) — inertia factor at maximal camera altitude. Default is 1.1
  - `options.minInertiaAltitude` (number, optional) — minimal altitude where inertia interpolation starts. Default is 3000000
  - `options.velInertia` (number, optional) — base velocity inertia factor. Default is 0.89
  - `options.dragInertia` (number, optional) — drag inertia
  - `options.mass` (number, optional) — camera mass, affects velocity. Default is 1
  - `options.minSlope` (number, optional) — minimal slope for vertical camera movement. Default is 0.35
  - `options.poleThreshold` (number, optional) — Vertical rotation is reduced when camera is close to poles
  - `options.disableRotation` (boolean, optional) — Disables horizontal rotation controls (right mouse button and touchpad). Default is false
  - `options.disableTilt` (boolean, optional) — Disables vertical tilt controls (right mouse button and touchpad). Default is false

---

## Instance Methods

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

<MemberMeta sourceHref="/source/control/control-ts/#L132" sourceLabel="Control.ts:132" />

_Inherited from `Control#remove`_

**Overrides:&#x20;**`Control#remove`

Removes control.

<MemberHeading id="activate" depth="3" name="activate" sig="activate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L159" sourceLabel="Control.ts:159" />

_Inherited from `Control#activate`_

**Overrides:&#x20;**`Control#activate`

Activate control.

<MemberHeading id="deactivate" depth="3" name="deactivate" sig="deactivate()" />

<MemberMeta sourceHref="/source/control/control-ts/#L178" sourceLabel="Control.ts:178" />

_Inherited from `Control#deactivate`_

**Overrides:&#x20;**`Control#deactivate`

Deactivate control.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive()" />

<MemberMeta sourceHref="/source/control/control-ts/#L191" sourceLabel="Control.ts:191" />

_Inherited from `Control#isActive`_

**Overrides:&#x20;**`Control#isActive`

Is control active.

## Instance Fields

<MemberHeading id="name" depth="3" name="name" sig="name" />

<MemberMeta sourceHref="/source/control/control-ts/#L74" sourceLabel="Control.ts:74" />

_Inherited from `Control#name`_

**Overrides:&#x20;**`Control#name`

Returns control name.

**Returns**

- `string`
