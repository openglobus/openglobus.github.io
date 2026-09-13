---
title: Sun
kind: class
longname: Sun
description: Real Sun geocentric position control that place the Sun on the right place by the Earth.
---

# Sun

<SourceLink href="/source/control/sun-ts/#L48" label="Sun.ts:48" />

Real Sun geocentric position control that place the Sun on the right place by the Earth.

**Example**

Lighting frozen at 21:30 on the local clock under the camera

```js
new Sun({ localDateTime: new Date(Date.UTC(2026, 7, 3, 21, 30)) })
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
  - `options.localDateTime` (Date, optional) — Local clock time under the camera — wall-clock numbers, not an instant: build it with Date.UTC. Civil time with useTimeZones, solar time otherwise.
  - `options.dateTime` (Date, optional) — Instant in time the Sun takes its real position at.
  - `options.useTimeZones` (boolean, optional, default: false) — Reads localDateTime by the time zone of the point. Leave off on bodies without civil time.

---

## Instance Methods

<MemberHeading id="setlocaldatetime" depth="3" name="setLocalDateTime" sig="setLocalDateTime(localDateTime: Date | null)" />

<MemberMeta sourceHref="/source/control/sun-ts/#L205" sourceLabel="Sun.ts:205" />

Sets the local clock time under the camera, read by its UTC clock.

**Parameters**

- `localDateTime` (Date | null) — Local date and time, or null to restore the camera following light.

<MemberHeading id="setdatetime" depth="3" name="setDateTime" sig="setDateTime(dateTime: Date | null)" />

<MemberMeta sourceHref="/source/control/sun-ts/#L218" sourceLabel="Sun.ts:218" />

Sets the instant in time the Sun takes its real position at.

**Parameters**

- `dateTime` (Date | null) — Instant in time, or null to restore the camera following light.

<MemberHeading id="getcamerafollowingposition" depth="3" name="_getCameraFollowingPosition" sig="_getCameraFollowingPosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L237" sourceLabel="Sun.ts:237" />

Returns a light position offset from the camera along its own up and right axes, so that nearby terrain is lit regardless of the real Sun direction.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getsolarjulian" depth="3" name="_getSolarJulian" sig="_getSolarJulian(utc: JulianDate, lon: number): JulianDate" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L264" sourceLabel="Sun.ts:264" />

Returns the julian date at which the clock of the given one, read as UTC, is the local apparent solar time at lon. Local mean solar time is the first guess, then the measured subsolar longitude corrects it; that point drifts -360 degrees a day, so a residual of d degrees is worth -d / 360 of a day.

**Parameters**

- `utc` (JulianDate) — Julian date to take the clock of.
- `lon` (number) — Longitude under the camera, degrees.

**Returns**

- `JulianDate`

<MemberHeading id="getlocaldatetimeposition" depth="3" name="_getLocalDateTimePosition" sig="_getLocalDateTimePosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L313" sourceLabel="Sun.ts:313" />

Returns the Sun position for localDateTime at the location under the camera: the real position at the civil instant with useTimeZones, the solar reading otherwise.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)

## Instance Fields

<MemberHeading id="usetimezones" depth="3" name="useTimeZones" sig="useTimeZones: boolean" />

<MemberMeta sourceHref="/source/control/sun-ts/#L189" sourceLabel="Sun.ts:189" />

Reads localDateTime by the time zone of the point instead of the solar clock.
