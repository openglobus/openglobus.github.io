---
title: Sun
kind: class
longname: Sun
description: Real Sun geocentric position control that place the Sun on the right place by the Earth.
---

# Sun

<SourceLink href="/source/control/sun-ts/#L66" label="Sun.ts:66" />

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
  - `options.timeZoneProvider` (TimeZoneProviderLike, optional) — Time zone source for the point under the camera: a function, or an object like TimeZoneProvider — its lazy load is kicked off on first use, and the built-in lookup answers until the data arrives.

---

## Instance Methods

<MemberHeading id="setlocaldatetime" depth="3" name="setLocalDateTime" sig="setLocalDateTime(localDateTime: Date | null)" />

<MemberMeta sourceHref="/source/control/sun-ts/#L295" sourceLabel="Sun.ts:295" />

Sets the local clock time under the camera, read by its UTC clock.

**Parameters**

- `localDateTime` (Date | null) — Local date and time, or null to restore the camera following light.

<MemberHeading id="setdatetime" depth="3" name="setDateTime" sig="setDateTime(dateTime: Date | null)" />

<MemberMeta sourceHref="/source/control/sun-ts/#L308" sourceLabel="Sun.ts:308" />

Sets the instant in time the Sun takes its real position at.

**Parameters**

- `dateTime` (Date | null) — Instant in time, or null to restore the camera following light.

<MemberHeading id="getcamerafollowingposition" depth="3" name="_getCameraFollowingPosition" sig="_getCameraFollowingPosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L327" sourceLabel="Sun.ts:327" />

Returns a light position offset from the camera along its own up and right axes, so that nearby terrain is lit regardless of the real Sun direction.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getsolarjulian" depth="3" name="_getSolarJulian" sig="_getSolarJulian(utc: JulianDate, lon: number): JulianDate" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L354" sourceLabel="Sun.ts:354" />

Returns the julian date at which the clock of the given one, read as UTC, is the local apparent solar time at lon. Local mean solar time is the first guess, then the measured subsolar longitude corrects it; that point drifts -360 degrees a day, so a residual of d degrees is worth -d / 360 of a day.

**Parameters**

- `utc` (JulianDate) — Julian date to take the clock of.
- `lon` (number) — Longitude under the camera, degrees.

**Returns**

- `JulianDate`

<MemberHeading id="getlocaldatetimeposition" depth="3" name="_getLocalDateTimePosition" sig="_getLocalDateTimePosition(cam: PlanetCamera): Vec3" />

<MemberMeta badges="protected" sourceHref="/source/control/sun-ts/#L403" sourceLabel="Sun.ts:403" />

Returns the Sun position for localDateTime at the location under the camera: the real position at the civil instant with useTimeZones, the solar reading otherwise.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Planet camera.

**Returns**

- [`Vec3`](/vec3)

## Instance Fields

<MemberHeading id="usetimezones" depth="3" name="useTimeZones" sig="useTimeZones: boolean" />

<MemberMeta sourceHref="/source/control/sun-ts/#L216" sourceLabel="Sun.ts:216" />

Reads localDateTime by the time zone of the point instead of the solar clock.

<MemberHeading id="timezoneprovider" depth="3" name="timeZoneProvider" sig="timeZoneProvider: TimeZoneProviderLike | null" />

<MemberMeta sourceHref="/source/control/sun-ts/#L234" sourceLabel="Sun.ts:234" />

Time zone source for the point under the camera: a function, or an object like TimeZoneProvider — its lazy load is kicked off on first use, and the built-in lookup answers until the data arrives. The built-in lookup when null.
