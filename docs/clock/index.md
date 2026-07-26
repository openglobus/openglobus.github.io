---
title: Clock
kind: class
longname: Clock
description: Class represents application timer that stores custom current julian datetime, and time speed multiplier.
---

# Clock

<SourceLink href="/source/clock-ts/#L27" label="Clock.ts:27" />

Class represents application timer that stores custom current julian datetime, and time speed multiplier.

---

## Constructor

<Signature code="new Clock(params?: Object): Clock" />

**Parameters**

- `params` (Object, optional) — Clock parameters:
  - `params.startDate` (JulianDate, optional, default: "0.0") — Julian start date.
  - `params.endDate` (JulianDate, optional, default: "0.0") — Julian end date.
  - `params.currentDate` (JulianDate, optional) — Julian current date. Default: current date.
  - `params.multiplier` (number, optional, default: "1.0") — Time speed multiplier.

---

## Instance Methods

<MemberHeading id="setdate" depth="3" name="setDate" sig="setDate(date: Object)" />

<MemberMeta sourceHref="/source/clock-ts/#L143" sourceLabel="Clock.ts:143" />

Sets current clock datetime.

**Parameters**

- `date` (Object) — JavaScript Date object.

<MemberHeading id="getdate" depth="3" name="getDate" sig="getDate(): Date" />

<MemberMeta sourceHref="/source/clock-ts/#L159" sourceLabel="Clock.ts:159" />

Returns current application date.

**Returns**

- `Date`

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(clock: Clock): boolean" />

<MemberMeta sourceHref="/source/clock-ts/#L206" sourceLabel="Clock.ts:206" />

**Parameters**

- `clock` ([Clock](/clock)) — Clock instance to compare.

**Returns**

- `boolean`
