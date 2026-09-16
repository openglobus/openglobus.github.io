---
title: TimeZoneProvider
kind: class
longname: TimeZoneProvider
description: "Time zone lookup over polygon data, made for {@link Sun.timeZoneProvider}. Loads lazily and hides the loading: the first request — a lookup, a load or the sun the provider is assigned to — kicks the single fetch."
---

# TimeZoneProvider

<SourceLink href="/source/utils/tz-ts/#L106" label="tz.ts:106" />

Time zone lookup over polygon data, made for `Sun.timeZoneProvider`. Loads lazily and hides the loading: the first request — a lookup, a load or the sun the provider is assigned to — kicks the single fetch.

**Example**

```js
const tz = new TimeZoneProvider({ src: "/res/tz/timezones.geojson" });
globe.sun.timeZoneProvider = tz;           // lighting picks the polygons up once loaded
tz.load().then(() => drawZones(tz.data));  // the very same single request
```

---

## Constructor

<Signature
  code="new TimeZoneProvider(
	options?: ITimeZoneProviderParams,
): TimeZoneProvider"
/>

**Parameters**

- `options` (ITimeZoneProviderParams, optional) — Options:
  - `options.src` (string, optional, default: "\\"/res/tz/timezones.geojson\\"") — GeoJSON url: features with an IANA name in properties.tzid and Polygon or MultiPolygon geometry in degrees.
  - `options.data` (ITimeZoneData, optional) — Inline data instead of fetching src.

---

## Instance Methods

<MemberHeading id="load" depth="3" name="load" sig="load(): Promise.<TimeZoneProvider>" />

<MemberMeta sourceHref="/source/utils/tz-ts/#L137" sourceLabel="tz.ts:137" />

Fetches and indexes the polygons once; repeated calls share the same promise.

**Returns**

- `Promise.<`[`TimeZoneProvider`](/timezoneprovider)`>`

<MemberHeading id="lookup" depth="3" name="lookup" sig="lookup(lon: number, lat: number): string | null" />

<MemberMeta sourceHref="/source/utils/tz-ts/#L160" sourceLabel="tz.ts:160" />

IANA zone name of the point, or null outside the data. Called before the data is in place, kicks the load and answers null for now.

**Parameters**

- `lon` (number) — Degrees longitude.
- `lat` (number) — Degrees latitude.

**Returns**

- `string | null`

## Instance Fields

<MemberHeading id="data" depth="3" name="data" sig="data" />

<MemberMeta sourceHref="/source/utils/tz-ts/#L128" sourceLabel="tz.ts:128" />

Loaded feature collection, or null before load.
