---
title: FreeNavigation
kind: class
longname: FreeNavigation
description: Free-flight camera navigation. W/S — move forward/backward A/D — strafe left/right Space/Ctrl — increase/decrease altitude Shift — hold to move without changing the camera height above the ellipsoid Q/E — roll Mouse — look around Mouse wheel — adjust movement speed Right mouse button — hold to keep the point under the screen center in the center F — activate and deactivate the control, see toggleKey Yaw follows the local ellipsoid normal, while pitch uses the camera's right vector. The camera preserves its orientation relative to the local horizon while moving. By default, pointer lock allows unrestricted mouse rotation. Pressing Escape releases the pointer and deactivates the control. Set pointerLock to false to use regular mouse movement instead. The control conflicts with the {@link Navigation} control, so an active {@link Navigation} is deactivated while the free navigation is active, and restored back on deactivation.
---

# FreeNavigation

**Extends:&#x20;**[`Control`](/control)

<SourceLink href="/source/control/freenavigation-ts/#L152" label="FreeNavigation.ts:152" />

Free-flight camera navigation.

- W/S — move forward/backward
- A/D — strafe left/right
- Space/Ctrl — increase/decrease altitude
- Shift — hold to move without changing the camera height above the ellipsoid
- Q/E — roll
- Mouse — look around
- Mouse wheel — adjust movement speed
- Right mouse button — hold to keep the point under the screen center in the center
- F — activate and deactivate the control, see `toggleKey`

Yaw follows the local ellipsoid normal, while pitch uses the camera's right vector. The camera preserves its orientation relative to the local horizon while moving.

By default, pointer lock allows unrestricted mouse rotation. Pressing Escape releases the pointer and deactivates the control. Set `pointerLock` to `false` to use regular mouse movement instead.

The control conflicts with the [Navigation](/navigation) control, so an active [Navigation](/navigation) is deactivated while the free navigation is active, and restored back on deactivation.

**Fires**

- `event:move`
- `event:rotate`
- `event:speedchange`
- `event:activate`
- `event:deactivate`

---

## Constructor

<Signature
  code="new FreeNavigation(
	options?: IFreeNavigationParams,
): FreeNavigation"
/>

**Parameters**

- `options` (IFreeNavigationParams, optional) — Free navigation options:
  - `options.speed` (number, optional) — Initial selected movement speed in m/s. Default is 0
  - `options.minSpeed` (number, optional) — Minimal selected movement speed in m/s. Default is -300
  - `options.maxSpeed` (number, optional) — Maximal selected movement speed in m/s. Default is 1000000
  - `options.speedStep` (number, optional) — Mouse wheel speed step near the zero speed in m/s. Default is 1
  - `options.speedFactor` (number, optional) — Relative speed increment per one mouse wheel step. Default is 0.45
  - `options.lookSensitivity` (number, optional) — Camera rotation angle in radians per mouse move pixel
  - `options.rollSpeed` (number, optional) — Q/E roll angular speed in radians per second the smoothed roll velocity approaches
  - `options.accelerationTime` (number, optional) — Acceleration smoothing time in seconds. Default is 0.6
  - `options.decelerationTime` (number, optional) — Deceleration smoothing time in seconds. Default is 0.4
  - `options.pitchLimit` (number, optional) — Maximal pitch angle above and below the local horizon in radians
  - `options.invertY` (boolean, optional) — Inverts vertical mouse rotation direction. Default is false
  - `options.pointerLock` (boolean, optional) — Locks and hides the mouse pointer. Default is true
  - `options.toggleKey` (number, optional) — Key code which activates and deactivates the control, it works while the control is inactive as well. Zero disables it. Default is `input.KEY_F`
  - `options.showInfo` (boolean, optional) — Shows the movement speed and the key hint. Default is false

---

## Instance Methods

<MemberHeading id="toggle" depth="3" name="toggle" sig="toggle()" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L304" sourceLabel="FreeNavigation.ts:304" />

Activates the control when it is inactive and deactivates it otherwise.

<MemberHeading id="setspeed" depth="3" name="setSpeed" sig="setSpeed(speed: number)" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L418" sourceLabel="FreeNavigation.ts:418" />

Sets selected movement speed in meters per second, clamped to the min and max speed.

**Parameters**

- `speed` (number) — Speed in m/s.

<MemberHeading id="stepspeed" depth="3" name="stepSpeed" sig="stepSpeed(steps: number)" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L435" sourceLabel="FreeNavigation.ts:435" />

Changes the movement speed by the given number of wheel steps.

The speed step increases with the current speed. Changes are reversible, and zero speed is always reachable.

**Parameters**

- `steps` (number) — Number of the wheel steps, negative decreases the speed.

<MemberHeading id="ispointerlocked" depth="3" name="isPointerLocked" sig="isPointerLocked(): boolean" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L466" sourceLabel="FreeNavigation.ts:466" />

True when the mouse pointer is locked by the control.

**Returns**

- `boolean`

<MemberHeading id="requestpointerlock" depth="3" name="requestPointerLock" sig="requestPointerLock()" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L475" sourceLabel="FreeNavigation.ts:475" />

Locks and hides the mouse pointer over the canvas.

<MemberHeading id="exitpointerlock" depth="3" name="exitPointerLock" sig="exitPointerLock()" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L500" sourceLabel="FreeNavigation.ts:500" />

Releases the mouse pointer.

<MemberHeading id="locktarget" depth="3" name="lockTarget" sig="lockTarget(point?: Vec3)" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L520" sourceLabel="FreeNavigation.ts:520" />

Locks the target point, so the camera keeps looking at it wherever it moves,

**Parameters**

- `point` ([Vec3](/vec3), optional) — Target point in the cartesian coordinates.

<MemberHeading id="unlocktarget" depth="3" name="unlockTarget" sig="unlockTarget()" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L544" sourceLabel="FreeNavigation.ts:544" />

Releases the locked target point.

<MemberHeading id="stop" depth="3" name="stop" sig="stop()" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L553" sourceLabel="FreeNavigation.ts:553" />

Stops the camera movement and releases the locked target point.

<MemberHeading
  id="limitpitch"
  depth="3"
  name="_limitPitch"
  sig="_limitPitch(
	angle: number,
	forward: Vec3,
	right: Vec3,
	localUp: Vec3,
): number"
/>

<MemberMeta badges="protected" sourceHref="/source/control/freenavigation-ts/#L806" sourceLabel="FreeNavigation.ts:806" />

Clamps the pitch rotation angle.

**Parameters**

- `angle` (number) — Pitch angle in radians.
- `forward` ([Vec3](/vec3)) — Camera forward vector.
- `right` ([Vec3](/vec3)) — Camera right vector.
- `localUp` ([Vec3](/vec3)) — Local reference frame up direction.

**Returns**

- `number`

<MemberHeading id="handleroll" depth="3" name="_handleRoll" sig="_handleRoll()" />

<MemberMeta badges="protected" sourceHref="/source/control/freenavigation-ts/#L839" sourceLabel="FreeNavigation.ts:839" />

Rollls the camera around its forward axis and keeps its angular velocity smoothed.

<MemberHeading id="handlemove" depth="3" name="_handleMove" sig="_handleMove()" />

<MemberMeta badges="protected" sourceHref="/source/control/freenavigation-ts/#L872" sourceLabel="FreeNavigation.ts:872" />

Moves the camera and keeps its orientation in the local reference frame.

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

<MemberHeading id="speed" depth="3" name="speed" sig="speed" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L400" sourceLabel="FreeNavigation.ts:400" />

Returns selected movement speed in meters per second.

**Returns**

- `number`

<MemberHeading id="speed" depth="3" name="speed" sig="speed" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L409" sourceLabel="FreeNavigation.ts:409" />

Sets selected movement speed in meters per second.

**Parameters**

- `speed` (number) — Speed in m/s.

<MemberHeading id="targetpoint" depth="3" name="targetPoint" sig="targetPoint" />

<MemberMeta sourceHref="/source/control/freenavigation-ts/#L511" sourceLabel="FreeNavigation.ts:511" />

Locked target point in the cartesian coordinates, or null when no target is locked.

**Returns**

- [`Vec3`](/vec3)` | null`

<MemberHeading id="name" depth="3" name="name" sig="name" />

<MemberMeta sourceHref="/source/control/control-ts/#L74" sourceLabel="Control.ts:74" />

_Inherited from `Control#name`_

**Overrides:&#x20;**`Control#name`

Returns control name.

**Returns**

- `string`
