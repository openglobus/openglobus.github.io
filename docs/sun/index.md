---
title: Sun
kind: class
longname: Sun
description: Real Sun geocentric position control that place the Sun on the right place by the Earth.
---

# Sun

<SourceLink href="/source/control/sun-ts/#L44" label="Sun.ts:44" />

Real Sun geocentric position control that place the Sun on the right place by the Earth.

**Example**

Lighting frozen at 21:30 local solar time under the camera

```js
new Sun({ localDateTime: new Date(2026, 7, 3, 21, 30) })
```

---

## Constructor

<Signature code="new Sun(options?: ISunParams): Sun" />

**Parameters**

- `options` (ISunParams, optional) — Options:
  - `options.activationHeight` (number, optional, default: "12079000.0") — Camera height above which the Sun takes its real position by the clock.
  - `options.offsetVertical` (number, optional, default: -5000000) — Vertical offset of the camera following light.
  - `options.offsetHorizontal` (number, optional, default: 5000000) — Horizontal offset of the camera following light.
  - `options.stopped` (boolean, optional, default: false) — Stops the control, leaving the Sun on its real position by the clock.
  - `options.localDateTime` (Date, optional) — Lights the scene by a fixed local apparent solar time under the camera instead of the camera following light, below activationHeight. At 12:00 the Sun stands on the meridian there, while the date sets the season. Read for the wall clock numbers it shows locally, so it is not an instant in time: one parsed from an absolute timestamp reads as the machine's time zone renders it. The Clock is left untouched, and while the control is stopped this is ignored.

---

## Instance Methods

<MemberHeading id="setlocaldatetime" depth="3" name="setLocalDateTime" sig="setLocalDateTime(localDateTime: Date | null)" />

<MemberMeta sourceHref="/source/control/sun-ts/#L162" sourceLabel="Sun.ts:162" />

Sets a fixed local apparent solar time under the camera.

**Parameters**

- `localDateTime` (Date | null) — Local date and time, or null to restore the camera following light.

<MemberHeading id="getcamerafollowingposition" depth="3" name="_getCameraFollowingPosition" sig="_getCameraFollowingPosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L180" sourceLabel="Sun.ts:180" />

Returns a light position offset from the camera along its own up and right axes, so that nearby terrain is lit regardless of the real Sun direction.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getlocaldatetimejulian" depth="3" name="_getLocalDateTimeJulian" sig="_getLocalDateTimeJulian(lon: number): JulianDate" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L205" sourceLabel="Sun.ts:205" />

Returns the julian date at which localDateTime is the local apparent solar time at lon. Local mean solar time is the first guess, then the measured subsolar longitude corrects it; that point drifts -360 degrees a day, so a residual of d degrees is worth -d / 360 of a day.

**Parameters**

- `lon` (number) — Longitude under the camera, degrees.

**Returns**

- `JulianDate`

<MemberHeading id="getlocaldatetimeposition" depth="3" name="_getLocalDateTimePosition" sig="_getLocalDateTimePosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L234" sourceLabel="Sun.ts:234" />

Returns the Sun position for localDateTime at the location under the camera.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)
