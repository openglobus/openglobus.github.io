---
title: Globals
kind: global
longname: Globals
---

# Globals

---

## Instance Methods

<MemberHeading id="taitotdb" depth="3" name="TAItoTDB" sig="TAItoTDB(tai: JulianDate): JulianDate" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L45" sourceLabel="astro.ts:45" />

Converts atomic time to barycentric dynamical time.

**Parameters**

- `tai` (JulianDate) — Atomic time.

**Returns**

- `JulianDate`

<MemberHeading id="getsunposition" depth="3" name="getSunPosition" sig="getSunPosition(jDate: JulianDate): Vec3" />

<MemberMeta sourceHref="/source/astro/earth-ts/#L20" sourceLabel="earth.ts:20" />

Returns Sun position in the geocentric coordinate system by the time.

**Parameters**

- `jDate` (JulianDate) — Julian date time.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="t" depth="3" name="T" sig="T(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L136" sourceLabel="jd.ts:136" />

Returns julian days from Epoch.

**Parameters**

- `jd` (JulianDate) — Julian date.

**Returns**

- `number` — Days from epoch

<MemberHeading id="getdaynumber" depth="3" name="getDayNumber" sig="getDayNumber(year: number, month: number, day: number): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L147" sourceLabel="jd.ts:147" />

Gets the date's julian day.

**Parameters**

- `year` (number) — Year.
- `month` (number) — Month.
- `day` (number) — Day.

**Returns**

- `number` — Day number

<MemberHeading id="datetoutc" depth="3" name="DateToUTC" sig="DateToUTC(date: Date): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L164" sourceLabel="jd.ts:164" />

Converts javascript date to the universal(UTC) julian date.

**Parameters**

- `date` (Date) — Date.

**Returns**

- `JulianDate` — UTC julian date

<MemberHeading id="datetotai" depth="3" name="DateToTAI" sig="DateToTAI(date: Date): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L199" sourceLabel="jd.ts:199" />

Converts javascript date to the atomic(TAI) julian date.

**Parameters**

- `date` (Date) — Date.

**Returns**

- `JulianDate` — TAI julian date

<MemberHeading id="utctotai" depth="3" name="UTCtoTAI" sig="UTCtoTAI(jd: JulianDate): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L208" sourceLabel="jd.ts:208" />

Converts coordinated universal(UTC) julian date to atomic(TAI) julian date.

**Parameters**

- `jd` (JulianDate) — UTC julian date.

**Returns**

- `JulianDate` — TAI julian date

<MemberHeading id="taitoutc" depth="3" name="TAItoUTC" sig="TAItoUTC(tai: JulianDate): JulianDate | undefined" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L239" sourceLabel="jd.ts:239" />

Converts atomic julian date(TAI) to the coordinated universal(UTC) julian date.

**Parameters**

- `tai` (JulianDate) — TAI julian date.

**Returns**

- `JulianDate | undefined` — UTC julian date

<MemberHeading id="utctodate" depth="3" name="UTCtoDate" sig="UTCtoDate(utc: JulianDate): Date" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L275" sourceLabel="jd.ts:275" />

Converts UTC julian date to the javascript date object.

**Parameters**

- `utc` (JulianDate) — UTC julian date.

**Returns**

- `Date` — JavaScript Date object

<MemberHeading id="taitodate" depth="3" name="TAItoDate" sig="TAItoDate(tai: JulianDate): Date" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L314" sourceLabel="jd.ts:314" />

Converts TAI julian date to the javascript date object.

**Parameters**

- `tai` (JulianDate) — TAI julian date.

**Returns**

- `Date` — JavaScript Date object

<MemberHeading
  id="addmilliseconds"
  depth="3"
  name="addMilliseconds"
  sig="addMilliseconds(
	jd: JulianDate,
	milliseconds: number,
): JulianDate"
/>

<MemberMeta sourceHref="/source/astro/jd-ts/#L330" sourceLabel="jd.ts:330" />

Adds milliseconds to the julian date.

**Parameters**

- `jd` (JulianDate) — Julian date.
- `milliseconds` (number) — Milliseconds to add.

**Returns**

- `JulianDate` — Julian date

<MemberHeading id="addseconds" depth="3" name="addSeconds" sig="addSeconds(jd: JulianDate, seconds: number): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L340" sourceLabel="jd.ts:340" />

Adds seconds to the julian date.

**Parameters**

- `jd` (JulianDate) — Julian date.
- `seconds` (number) — Seconds to add.

**Returns**

- `JulianDate` — Julian date

<MemberHeading id="addhours" depth="3" name="addHours" sig="addHours(jd: JulianDate, hours: number): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L350" sourceLabel="jd.ts:350" />

Adds hours to the julian date.

**Parameters**

- `jd` (JulianDate) — Julian date.
- `hours` (number) — Hours to add.

**Returns**

- `JulianDate` — Julian date

<MemberHeading id="addminutes" depth="3" name="addMinutes" sig="addMinutes(jd: JulianDate, minutes: number): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L360" sourceLabel="jd.ts:360" />

Adds minutes to the julian date.

**Parameters**

- `jd` (JulianDate) — Julian date.
- `minutes` (number) — Minutes to add.

**Returns**

- `JulianDate` — Julian date

<MemberHeading id="adddays" depth="3" name="addDays" sig="addDays(jd: JulianDate, days: number): JulianDate" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L370" sourceLabel="jd.ts:370" />

Adds days to the julian date.

**Parameters**

- `jd` (JulianDate) — Julian date.
- `days` (number) — Days to add.

**Returns**

- `JulianDate` — Julian date

<MemberHeading id="getmilliseconds" depth="3" name="getMilliseconds" sig="getMilliseconds(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L379" sourceLabel="jd.ts:379" />

Gets milliseconds of a julian date.

**Parameters**

- `jd` (JulianDate) — julian date.

**Returns**

- `number` — Milliseconds

<MemberHeading id="getseconds" depth="3" name="getSeconds" sig="getSeconds(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L390" sourceLabel="jd.ts:390" />

Gets seconds of a julian date.

**Parameters**

- `jd` (JulianDate) — julian date.

**Returns**

- `number` — Seconds

<MemberHeading id="gethours" depth="3" name="getHours" sig="getHours(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L400" sourceLabel="jd.ts:400" />

Gets hours of a julian date.

**Parameters**

- `jd` (JulianDate) — julian date.

**Returns**

- `number` — Hours

<MemberHeading id="getminutes" depth="3" name="getMinutes" sig="getMinutes(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L424" sourceLabel="jd.ts:424" />

Gets minutes of a julian date.

**Parameters**

- `jd` (JulianDate) — julian date.

**Returns**

- `number` — Minutes

<MemberHeading id="getdays" depth="3" name="getDays" sig="getDays(jd: JulianDate): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L434" sourceLabel="jd.ts:434" />

Gets days of a julian date.

**Parameters**

- `jd` (JulianDate) — julian date.

**Returns**

- `number` — Days

<MemberHeading id="secondstodays" depth="3" name="secondsToDays" sig="secondsToDays(s: number): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L443" sourceLabel="jd.ts:443" />

Returns days in seconds.

**Parameters**

- `s` (number) — Seconds.

**Returns**

- `number` — Days

<MemberHeading id="daystoseconds" depth="3" name="daysToSeconds" sig="daysToSeconds(d: number): number" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L452" sourceLabel="jd.ts:452" />

Returns seconds in days.

**Parameters**

- `d` (number) — Days.

**Returns**

- `number` — Seconds

<MemberHeading
  id="entitiesconstructor"
  depth="3"
  name="_entitiesConstructor"
  sig="_entitiesConstructor(
	entities: Array.<Entity> | Array.<IEntityParams>,
): Array.<Entity>"
/>

<MemberMeta sourceHref="/source/layer/vector-ts/#L52" sourceLabel="Vector.ts:52" />

Creates entity instance array.

**Parameters**

- `entities` (Array.\<[Entity](/entity)> | Array.\<IEntityParams>) — Entity array.

**Returns**

- `Array.<`[`Entity`](/entity)`>`

<MemberHeading id="quat" depth="3" name="Quat" sig="Quat(x?: Number, y?: Number, z?: Number, w?: Number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L1116" sourceLabel="Quat.ts:1116" />

Creates Quat instance.

**Parameters**

- `x` (Number, optional, default: "0.0") — The X component.
- `y` (Number, optional, default: "0.0") — The Y component.
- `z` (Number, optional, default: "0.0") — The Z component.
- `w` (Number, optional, default: "0.0") — The W component.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="vec2" depth="3" name="Vec2" sig="Vec2(x?: number, y?: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L572" sourceLabel="Vec2.ts:572" />

Vector 2d object creator.

**Parameters**

- `x` (number, optional) — First value.
- `y` (number, optional) — Second value.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="vec3" depth="3" name="Vec3" sig="Vec3(x?: number, y?: number, z?: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L966" sourceLabel="Vec3.ts:966" />

Vector 3d object creator.

**Parameters**

- `x` (number, optional) — Value X.
- `y` (number, optional) — Value Y.
- `z` (number, optional) — Value Z.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="vec4" depth="3" name="Vec4" sig="Vec4(x?: number, y?: number, z?: number, w?: number): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L262" sourceLabel="Vec4.ts:262" />

Vector 4d object creator.

**Parameters**

- `x` (number, optional) — First value.
- `y` (number, optional) — Second value.
- `z` (number, optional) — Third value.
- `w` (number, optional) — Fourth value.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="log" depth="3" name="log" sig="log(n: number, base: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L80" sourceLabel="math.ts:80" />

The log function returns the power to which the base value has to be raised to produce n.

**Parameters**

- `n` (number) — Produce value.
- `base` (number) — Base value.

**Returns**

- `number`

**Example**

```js
log(64, 2)
//returns 6
```

<MemberHeading id="clamp" depth="3" name="clamp" sig="clamp(value: number, min: number, max: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L95" sourceLabel="math.ts:95" />

Clamp the number.

**Parameters**

- `value` (number) — Input number.
- `min` (number) — Minimal edge.
- `max` (number) — Maximal edge.

**Returns**

- `number`

**Example**

```js
clamp(12, 1, 5)
//returns 5
```

<MemberHeading id="deg2rad" depth="3" name="DEG2RAD" sig="DEG2RAD(degrees: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L105" sourceLabel="math.ts:105" />

Converts degrees value to radians.

**Parameters**

- `degrees` (number) — Degree value.

**Returns**

- `number`

<MemberHeading id="rad2deg" depth="3" name="RAD2DEG" sig="RAD2DEG(angle: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L115" sourceLabel="math.ts:115" />

Converts radians value to degrees.

**Parameters**

- `angle` (number) — Degree value.

**Returns**

- `number`

<MemberHeading id="ispoweroftwo" depth="3" name="isPowerOfTwo" sig="isPowerOfTwo(x: number): boolean" />

<MemberMeta sourceHref="/source/math-ts/#L125" sourceLabel="math.ts:125" />

Check the number is a power of two.

**Parameters**

- `x` (number) — Input value.

**Returns**

- `boolean`

<MemberHeading id="nexthighestpoweroftwo" depth="3" name="nextHighestPowerOfTwo" sig="nextHighestPowerOfTwo(x: number, maxValue?: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L136" sourceLabel="math.ts:136" />

Returns next value that is power of two.

**Parameters**

- `x` (number) — Input value.
- `maxValue` (number, optional, default: 4096) — Maximal value.

**Returns**

- `number`

<MemberHeading id="randomi" depth="3" name="randomi" sig="randomi(min: number, max: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L151" sourceLabel="math.ts:151" />

Returns random integer number within the bounds.

**Parameters**

- `min` (number, default: 0) — Minimal bound.
- `max` (number, default: 1) — Maximal bound.

**Returns**

- `number`

<MemberHeading id="random" depth="3" name="random" sig="random(min?: number, max?: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L162" sourceLabel="math.ts:162" />

Returns random number within the bounds.

**Parameters**

- `min` (number, optional, default: 0) — Minimal bound.
- `max` (number, optional, default: 1) — Maximal bound.

**Returns**

- `number`

<MemberHeading id="degtodec" depth="3" name="degToDec" sig="degToDec(d: number, m: number, s: number, p?: boolean): number" />

<MemberMeta sourceHref="/source/math-ts/#L206" sourceLabel="math.ts:206" />

Converts degrees value to decimal.

**Parameters**

- `d` (number) — Degrees.
- `m` (number) — Minutes.
- `s` (number) — Seconds.
- `p` (boolean, optional) — Positive flag. False - default.

**Returns**

- `number`

<MemberHeading id="mod" depth="3" name="mod" sig="mod(m: number, n: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L221" sourceLabel="math.ts:221" />

The modulo operation that also works for negative dividends.

**Parameters**

- `m` (number) — The dividend.
- `n` (number) — The divisor.

**Returns**

- `number` — The remainder.

<MemberHeading id="zerotwopi" depth="3" name="zeroTwoPI" sig="zeroTwoPI(a: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L200" sourceLabel="math.ts:200" />

Returns an angle in the range 0 \<= angle \<= 2Pi which is equivalent to the provided angle.

**Parameters**

- `a` (number) — Angle in radians

**Returns**

- `number`

<MemberHeading id="step" depth="3" name="step" sig="step(edge: number, x: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L215" sourceLabel="math.ts:215" />

Returns 0.0 if x is smaller than edge and otherwise 1.0.

**Parameters**

- `edge` (number)
- `x` (number) — Value to edge.

**Returns**

- `number`

<MemberHeading id="frac" depth="3" name="frac" sig="frac(x: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L225" sourceLabel="math.ts:225" />

The frac function returns the fractional part of x, i.e. x minus floor(x).

**Parameters**

- `x` (number) — Input value.

**Returns**

- `number`

<MemberHeading id="log2" depth="3" name="log2" sig="log2(x: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L236" sourceLabel="math.ts:236" />

Returns Math.log(x) / Math.log(2)

**Parameters**

- `x` (number) — Input value.

**Returns**

- `number`

<MemberHeading id="exp2" depth="3" name="exp2" sig="exp2(n: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L246" sourceLabel="math.ts:246" />

Returns two power of n.

**Parameters**

- `n` (number) — Power value.

**Returns**

- `number`

<MemberHeading id="pow2i" depth="3" name="pow2i" sig="pow2i(n: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L256" sourceLabel="math.ts:256" />

Returns two power of integer n.

**Parameters**

- `n` (number) — Integer power value.

**Returns**

- `number`

<MemberHeading id="slice" depth="3" name="slice" sig="slice(t: number, h1: number, h0: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L267" sourceLabel="math.ts:267" />

Returns a slice of linear interpolation t \* (h1 - h0)

**Parameters**

- `t` (number) — A value that linearly interpolates between the h0 parameter and the h1 parameter.
- `h1` (number) — End value.
- `h0` (number) — Start value.

**Returns**

- `number`

<MemberHeading id="lerp" depth="3" name="lerp" sig="lerp(t: number, h1: number, h0: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L279" sourceLabel="math.ts:279" />

Performs a linear interpolation.

**Parameters**

- `t` (number) — A value that linearly interpolates between the h0 parameter and the h1 parameter.
- `h1` (number) — End value.
- `h0` (number) — Start value.

**Returns**

- `number`

<MemberHeading
  id="bezier3v"
  depth="3"
  name="bezier3v"
  sig="bezier3v(
	t: number,
	p0: Vec3,
	p1: Vec3,
	p2: Vec3,
	p3: Vec3,
): Vec3"
/>

<MemberMeta sourceHref="/source/math-ts/#L305" sourceLabel="math.ts:305" />

Performs a 3D bezier interpolation.

**Parameters**

- `t` (number) — Interpolation value.
- `p0` ([Vec3](/vec3)) — First control point.
- `p1` ([Vec3](/vec3)) — Second control point.
- `p2` ([Vec3](/vec3)) — Third control point.
- `p3` ([Vec3](/vec3)) — Fourth control point.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="rev" depth="3" name="rev" sig="rev(x: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L325" sourceLabel="math.ts:325" />

Clamp angle value within 360.

**Parameters**

- `x` (number) — Input angle.

**Returns**

- `number`

<MemberHeading id="normlon" depth="3" name="norm_lon" sig="norm_lon(lon: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L335" sourceLabel="math.ts:335" />

Clamp longitude within: -180 to +180 degrees.

**Parameters**

- `lon` (number) — Longitude.

**Returns**

- `number`

<MemberHeading id="negativepitopi" depth="3" name="negativePItoPI" sig="negativePItoPI(a: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L345" sourceLabel="math.ts:345" />

Returns an angle in the range -Pi \<= angle \<= Pi which is equivalent to the provided angle.

**Parameters**

- `a` (number) — Angle in radians.

**Returns**

- `number`

<MemberHeading
  id="solveiterationfixed"
  depth="3"
  name="solve_iteration_fixed"
  sig="solve_iteration_fixed(
	f: function,
	x0: number,
	maxIter: number,
): number"
/>

<MemberMeta sourceHref="/source/math-ts/#L357" sourceLabel="math.ts:357" />

Solve using iteration method and a fixed number of steps.

**Parameters**

- `f` (function) — Equation. Used in Euler's equation(see og.orbit) solving.
- `x0` (number) — First approximation.
- `maxIter` (number) — Maximum iterations.

**Returns**

- `number`

<MemberHeading
  id="solveiteration"
  depth="3"
  name="solve_iteration"
  sig="solve_iteration(
	f: function,
	x0: number,
	err: number,
	maxIter: number,
): number"
/>

<MemberMeta sourceHref="/source/math-ts/#L377" sourceLabel="math.ts:377" />

Solve using iteration; terminate when error is below err or the maximum number of iterations is reached. Used in Euler's equation(see og.orbit) solving.

**Parameters**

- `f` (function) — Equation.
- `x0` (number) — First approximation.
- `err` (number) — Maximal accepted error value.
- `maxIter` (number, default: 50) — Maximum iterations.

**Returns**

- `number`

<MemberHeading id="getangledirection" depth="3" name="getAngleDirection" sig="getAngleDirection(a, b): number" />

<MemberMeta sourceHref="/source/math-ts/#L396" sourceLabel="math.ts:396" />

**Parameters**

- `a` — First bearing angle
- `b` — Second bearing angle

**Returns**

- `number`

<MemberHeading id="getanglebetweenazimuths" depth="3" name="getAngleBetweenAzimuths" sig="getAngleBetweenAzimuths(a: number, b: number): number" />

<MemberMeta sourceHref="/source/math-ts/#L415" sourceLabel="math.ts:415" />

Returns angle between two azimuths

**Parameters**

- `a` (number) — First azimuth angle
- `b` (number) — Second azimuth angle

**Returns**

- `number`

<MemberHeading id="forwardlon" depth="3" name="forward_lon" sig="forward_lon(lon: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L57" sourceLabel="mercator.ts:57" />

Converts degrees longitude to mercator coordinate.

**Parameters**

- `lon` (number) — Degrees geodetic longitude.

**Returns**

- `number`

<MemberHeading id="forwardlat" depth="3" name="forward_lat" sig="forward_lat(lat: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L67" sourceLabel="mercator.ts:67" />

Converts degrees latitude to mercator coordinate.

**Parameters**

- `lat` (number) — Degrees geodetic latitude.

**Returns**

- `number`

<MemberHeading id="inverselon" depth="3" name="inverse_lon" sig="inverse_lon(lon: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L77" sourceLabel="mercator.ts:77" />

Converts mercator longitude to degrees coordinate.

**Parameters**

- `lon` (number) — Mercator longitude.

**Returns**

- `number`

<MemberHeading id="inverselat" depth="3" name="inverse_lat" sig="inverse_lat(lat: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L87" sourceLabel="mercator.ts:87" />

Converts mercator latitude to degrees coordinate.

**Parameters**

- `lat` (number) — Mercator latitude.

**Returns**

- `number`

<MemberHeading id="gettilex" depth="3" name="getTileX" sig="getTileX(lon: number, zoom: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L99" sourceLabel="mercator.ts:99" />

Returns mercator map tile grid horizontal coordinate index by geodetic longitude and zoom level. Where top left corner of the grid is 0 coordinate index.

**Parameters**

- `lon` (number) — Geodetic degrees longitude.
- `zoom` (number) — Zoom level.

**Returns**

- `number`

<MemberHeading id="gettiley" depth="3" name="getTileY" sig="getTileY(lat: number, zoom: number): number" />

<MemberMeta sourceHref="/source/mercator-ts/#L111" sourceLabel="mercator.ts:111" />

Returns mercator map tile grid vertical coordinate index by geodetic latitude and zoom level. Where top left corner of the grid is 0 coordinate index.

**Parameters**

- `lat` (number) — Geodetic degrees latitude.
- `zoom` (number) — Zoom level.

**Returns**

- `number`

<MemberHeading id="forwardarray" depth="3" name="forwardArray" sig="forwardArray(lonlatArr: Array.<LonLat>): Array.<LonLat>" />

<MemberMeta sourceHref="/source/mercator-ts/#L125" sourceLabel="mercator.ts:125" />

Converts geodetic coordinate array to mercator coordinate array.

**Parameters**

- `lonlatArr` (Array.\<[LonLat](/lonlat)>) — LonLat array to convert.

**Returns**

- `Array.<`[`LonLat`](/lonlat)`>` — Converted mercator coordinates.

<MemberHeading id="tokeyfield" depth="3" name="toKeyField" sig="toKeyField()" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L49" sourceLabel="TextureResourceManager.ts:49" />

Converts a nullable key component into a stable string field.

Used by texture resource keys to make absent/default GPU parameters explicit.

Examples:

- toKeyField("fmt", undefined) => "fmt:default"
- toKeyField("wrap", null) => "wrap:default"
- toKeyField("mime", "image/png") => "mime:image/png"

The "default" value means that the texture will be created using the default behavior of Handler.createTextureDefault(...) for this parameter.

## Instance Fields

<MemberHeading id="mat3" depth="3" name="Mat3" sig="Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L150" sourceLabel="Mat3.ts:150" />

Mat3 factory.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="mat4" depth="3" name="Mat4" sig="Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L765" sourceLabel="Mat4.ts:765" />

Mat4 factory.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="currpickingcolor" depth="3" name="_currPickingColor" sig="_currPickingColor: Array.<number>" />

<MemberMeta sourceHref="/source/renderer/rendererevents-ts/#L170" sourceLabel="RendererEvents.ts:170" />

Stores current picking rgb color.

<MemberHeading id="prevpickingcolor" depth="3" name="_prevPickingColor" sig="_prevPickingColor: Array.<number>" />

<MemberMeta sourceHref="/source/renderer/rendererevents-ts/#L177" sourceLabel="RendererEvents.ts:177" />

Stores previous picked rgb color.

## Enums

<MemberHeading id="str2align" depth="3" name="STR2ALIGN" sig="STR2ALIGN: number" />

<MemberMeta badges="readonly,enum" sourceHref="/source/entity/label/label-ts/#L33" sourceLabel="Label.ts:33" />

Text align options.

**Properties**

- `left` (number, default: "ALIGN.LEFT")
- `right` (number, default: "ALIGN.RIGHT")
- `center` (number, default: "ALIGN.CENTER")

<MemberHeading id="units" depth="3" name="Units" sig="Units: string" />

<MemberMeta badges="enum" sourceHref="/source/proj/proj-ts/#L11" sourceLabel="Proj.ts:11" />

Projection units: 'degrees', 'ft', 'm' or 'km'.

**Properties**

- `DEGREES` (string, default: "degrees")
- `FEET` (string, default: "ft")
- `METERS` (string, default: "m")
- `KILOMETERS` (string, default: "km")

## Events

<MemberHeading id="load" depth="3" name="load" sig="load" />

<MemberMeta badges="event" sourceHref="/source/layer/canvastiles-ts/#L28" sourceLabel="CanvasTiles.ts:28" />

Triggered when the current tile image has loaded before rendering.

<MemberHeading id="loadend" depth="3" name="loadend" sig="loadend" />

<MemberMeta badges="event" sourceHref="/source/layer/canvastiles-ts/#L34" sourceLabel="CanvasTiles.ts:34" />

Triggered when all tiles have loaded or loading has stopped.

<MemberHeading id="load" depth="3" name="#load" sig="#load" />

<MemberMeta badges="event" sourceHref="/source/layer/xyz-ts/#L457" sourceLabel="XYZ.ts:457" />

Triggered when current tile image has loaded before rendering.

<MemberHeading id="loadend" depth="3" name="#loadend" sig="#loadend" />

<MemberMeta badges="event" sourceHref="/source/layer/xyz-ts/#L463" sourceLabel="XYZ.ts:463" />

Triggered when all tiles have loaded or loading has stopped.

<MemberHeading id="projchanged" depth="3" name="projchanged" sig="projchanged" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1048" sourceLabel="RendererEvents.ts:1048" />

Triggered when camera projection is changed

<MemberHeading id="changerelativecenter" depth="3" name="changerelativecenter" sig="changerelativecenter" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1054" sourceLabel="RendererEvents.ts:1054" />

Triggered when a relative center is changed

<MemberHeading id="predraw" depth="3" name="predraw" sig="predraw" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1060" sourceLabel="RendererEvents.ts:1060" />

Triggered before the scene frame is rendered (before render nodes).

<MemberHeading id="draw" depth="3" name="draw" sig="draw" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1066" sourceLabel="RendererEvents.ts:1066" />

Called after the scene frame callback and before the deferred, WOIT, and forward rendering passes.

<MemberHeading id="forwardpass" depth="3" name="forwardpass" sig="forwardpass" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1072" sourceLabel="RendererEvents.ts:1072" />

Triggered for forward pass

<MemberHeading id="forwardpass" depth="3" name="forwardpass" sig="forwardpass" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1078" sourceLabel="RendererEvents.ts:1078" />

Triggered after all

<MemberHeading id="transparentpass" depth="3" name="transparentpass" sig="transparentpass" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1084" sourceLabel="RendererEvents.ts:1084" />

Triggered for WOIT (transparency) pass

<MemberHeading id="gbufferpass" depth="3" name="gbufferpass" sig="gbufferpass" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1090" sourceLabel="RendererEvents.ts:1090" />

Triggered for deferred opaque geometry pass

<MemberHeading id="postdraw" depth="3" name="postdraw" sig="postdraw" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1096" sourceLabel="RendererEvents.ts:1096" />

Triggered after a scene frame is rendered (after render nodes).

<MemberHeading id="resize" depth="3" name="resize" sig="resize" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1102" sourceLabel="RendererEvents.ts:1102" />

Triggered when the screen is resized.

<MemberHeading id="resizeend" depth="3" name="resizeend" sig="resizeend" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1108" sourceLabel="RendererEvents.ts:1108" />

Triggered when the screen is resized.

<MemberHeading id="mouseenter" depth="3" name="mouseenter" sig="mouseenter" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1114" sourceLabel="RendererEvents.ts:1114" />

Mouse enters the work screen

<MemberHeading id="mouseleave" depth="3" name="mouseleave" sig="mouseleave" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1120" sourceLabel="RendererEvents.ts:1120" />

Mouse leaves the work screen

<MemberHeading id="mousemove" depth="3" name="mousemove" sig="mousemove" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1126" sourceLabel="RendererEvents.ts:1126" />

Mouse is moving.

<MemberHeading id="mousestop" depth="3" name="mousestop" sig="mousestop" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1132" sourceLabel="RendererEvents.ts:1132" />

Mouse is just stopped.

<MemberHeading id="lclick" depth="3" name="lclick" sig="lclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1138" sourceLabel="RendererEvents.ts:1138" />

Mouse left button clicked.

<MemberHeading id="rclick" depth="3" name="rclick" sig="rclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1144" sourceLabel="RendererEvents.ts:1144" />

Mouse right button clicked.

<MemberHeading id="mclick" depth="3" name="mclick" sig="mclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1150" sourceLabel="RendererEvents.ts:1150" />

Mouse middle button clicked.

<MemberHeading id="ldblclick" depth="3" name="ldblclick" sig="ldblclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1156" sourceLabel="RendererEvents.ts:1156" />

Mouse left button double-click.

<MemberHeading id="rdblclick" depth="3" name="rdblclick" sig="rdblclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1162" sourceLabel="RendererEvents.ts:1162" />

Mouse right button double click.

<MemberHeading id="mdblclick" depth="3" name="mdblclick" sig="mdblclick" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1168" sourceLabel="RendererEvents.ts:1168" />

Mouse middle button double click.

<MemberHeading id="lup" depth="3" name="lup" sig="lup" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1174" sourceLabel="RendererEvents.ts:1174" />

Mouse left button up (stop pressing).

<MemberHeading id="rup" depth="3" name="rup" sig="rup" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1180" sourceLabel="RendererEvents.ts:1180" />

Mouse the right button up (stop pressing).

<MemberHeading id="mup" depth="3" name="mup" sig="mup" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1186" sourceLabel="RendererEvents.ts:1186" />

Mouse the middle button up (stop pressing).

<MemberHeading id="ldown" depth="3" name="ldown" sig="ldown" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1192" sourceLabel="RendererEvents.ts:1192" />

Mouse left button is just pressed down (start pressing).

<MemberHeading id="rdown" depth="3" name="rdown" sig="rdown" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1198" sourceLabel="RendererEvents.ts:1198" />

Mouse right button is just pressed down (start pressing).

<MemberHeading id="mdown" depth="3" name="mdown" sig="mdown" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1204" sourceLabel="RendererEvents.ts:1204" />

Mouse middle button is just pressed down (start pressing).

<MemberHeading id="lhold" depth="3" name="lhold" sig="lhold" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1210" sourceLabel="RendererEvents.ts:1210" />

Mouse left button is pressing.

<MemberHeading id="rhold" depth="3" name="rhold" sig="rhold" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1216" sourceLabel="RendererEvents.ts:1216" />

Mouse right button is pressing.

<MemberHeading id="mhold" depth="3" name="mhold" sig="mhold" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1222" sourceLabel="RendererEvents.ts:1222" />

Mouse middle button is pressing.

<MemberHeading id="mousewheel" depth="3" name="mousewheel" sig="mousewheel" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1228" sourceLabel="RendererEvents.ts:1228" />

Mouse wheel is rotated.

<MemberHeading id="touchstart" depth="3" name="touchstart" sig="touchstart" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1234" sourceLabel="RendererEvents.ts:1234" />

Triggered when touching starts.

<MemberHeading id="touchend" depth="3" name="touchend" sig="touchend" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1240" sourceLabel="RendererEvents.ts:1240" />

Triggered when touching ends.

<MemberHeading id="touchcancel" depth="3" name="touchcancel" sig="touchcancel" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1246" sourceLabel="RendererEvents.ts:1246" />

Triggered when touching cancel.

<MemberHeading id="touchmove" depth="3" name="touchmove" sig="touchmove" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1252" sourceLabel="RendererEvents.ts:1252" />

Triggered when touch is move.

<MemberHeading id="doubletouch" depth="3" name="doubletouch" sig="doubletouch" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1258" sourceLabel="RendererEvents.ts:1258" />

Triggered when double touch.

<MemberHeading id="touchleave" depth="3" name="touchleave" sig="touchleave" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1264" sourceLabel="RendererEvents.ts:1264" />

Triggered when touch leaves a picked object.

<MemberHeading id="touchenter" depth="3" name="touchenter" sig="touchenter" />

<MemberMeta badges="event" sourceHref="/source/renderer/rendererevents-ts/#L1270" sourceLabel="RendererEvents.ts:1270" />

Triggered when touch enter picking an object.

<MemberHeading id="draw" depth="3" name="draw" sig="draw" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2618" sourceLabel="Planet.ts:2618" />

Triggered before globe frame begins to render.

<MemberHeading id="layeradd" depth="3" name="layeradd" sig="layeradd" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2624" sourceLabel="Planet.ts:2624" />

Triggered when a layer is added to the planet.

<MemberHeading id="baselayerchange" depth="3" name="baselayerchange" sig="baselayerchange" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2630" sourceLabel="Planet.ts:2630" />

Triggered when the base layer changes.

<MemberHeading id="layerremove" depth="3" name="layerremove" sig="layerremove" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2636" sourceLabel="Planet.ts:2636" />

Triggered when a layer is removed from the planet.

<MemberHeading id="layervisibilitychange" depth="3" name="layervisibilitychange" sig="layervisibilitychange" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2642" sourceLabel="Planet.ts:2642" />

Triggered when layer visibility changes.

<MemberHeading id="rendercompleted" depth="3" name="rendercompleted" sig="rendercompleted" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2648" sourceLabel="Planet.ts:2648" />

Triggered when all data is loaded.

<MemberHeading id="terraincompleted" depth="3" name="terraincompleted" sig="terraincompleted" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2654" sourceLabel="Planet.ts:2654" />

Triggered when all terrain data is loaded.

<MemberHeading id="layerloadend" depth="3" name="layerloadend" sig="layerloadend" />

<MemberMeta badges="event" sourceHref="/source/scene/planet-ts/#L2660" sourceLabel="Planet.ts:2660" />

Triggered when layer data finishes loading.

## Other

<MemberHeading id="planetnameprefix" depth="3" name="PLANET_NAME_PREFIX" sig="PLANET_NAME_PREFIX: string" />

<MemberMeta sourceHref="/source/globe-ts/#L41" sourceLabel="Globe.ts:41" />

<MemberHeading id="j2000obliquity" depth="3" name="J2000_OBLIQUITY" sig="J2000_OBLIQUITY" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L10" sourceLabel="astro.ts:10" />

Angle between J2000 mean equator and the ecliptic plane. 23 deg 26' 21".448 (Seidelmann, _Explanatory Supplement to the Astronomical Almanac_ (1992), eqn 3.222-1.

<MemberHeading id="autometers" depth="3" name="AU_TO_METERS" sig="AU_TO_METERS" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L17" sourceLabel="astro.ts:17" />

IAU 1976 value

<MemberHeading id="tdttai" depth="3" name="TDT_TAI" sig="TDT_TAI" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L24" sourceLabel="astro.ts:24" />

Terrestrial and atomic time difference.

<MemberHeading id="earthgravitationalparameter" depth="3" name="EARTH_GRAVITATIONAL_PARAMETER" sig="EARTH_GRAVITATIONAL_PARAMETER" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L31" sourceLabel="astro.ts:31" />

Earth gravitational parameter product of gravitational constant G and the mass M of the Earth.

<MemberHeading id="sungravitationalparameter" depth="3" name="SUN_GRAVITATIONAL_PARAMETER" sig="SUN_GRAVITATIONAL_PARAMETER" />

<MemberMeta sourceHref="/source/astro/astro-ts/#L38" sourceLabel="astro.ts:38" />

Sun gravitational parameter product of gravitational constant G and the mass M of the Sun.

<MemberHeading id="elementsepoch" depth="3" name="ELEMENTS_EPOCH" sig="ELEMENTS_EPOCH" />

<MemberMeta sourceHref="/source/astro/earth-ts/#L13" sourceLabel="earth.ts:13" />

Epoch of the Sun orbital elements below: 1999-12-31 00:00 UT, 1.5 days before J2000.

<MemberHeading id="secondspermillisecond" depth="3" name="SECONDS_PER_MILLISECOND" sig="SECONDS_PER_MILLISECOND" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L9" sourceLabel="jd.ts:9" />

Seconds in millisecond.

<MemberHeading id="millisecondspersecond" depth="3" name="MILLISECONDS_PER_SECOND" sig="MILLISECONDS_PER_SECOND" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L15" sourceLabel="jd.ts:15" />

Milliseconds in second.

<MemberHeading id="secondsperminute" depth="3" name="SECONDS_PER_MINUTE" sig="SECONDS_PER_MINUTE" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L21" sourceLabel="jd.ts:21" />

Seconds in minute.

<MemberHeading id="onebysecondsperminute" depth="3" name="ONE_BY_SECONDS_PER_MINUTE" sig="ONE_BY_SECONDS_PER_MINUTE" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L27" sourceLabel="jd.ts:27" />

One by seconds in minute.

<MemberHeading id="minutesperhour" depth="3" name="MINUTES_PER_HOUR" sig="MINUTES_PER_HOUR" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L33" sourceLabel="jd.ts:33" />

Minutes in hour.

<MemberHeading id="hoursperday" depth="3" name="HOURS_PER_DAY" sig="HOURS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L39" sourceLabel="jd.ts:39" />

Hours in day.

<MemberHeading id="onebyhoursperday" depth="3" name="ONE_BY_HOURS_PER_DAY" sig="ONE_BY_HOURS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L45" sourceLabel="jd.ts:45" />

One by hours in day.

<MemberHeading id="secondsperhour" depth="3" name="SECONDS_PER_HOUR" sig="SECONDS_PER_HOUR" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L51" sourceLabel="jd.ts:51" />

Seconds in hour.

<MemberHeading id="onebysecondsperhour" depth="3" name="ONE_BY_SECONDS_PER_HOUR" sig="ONE_BY_SECONDS_PER_HOUR" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L57" sourceLabel="jd.ts:57" />

One by seconds in hour.

<MemberHeading id="secondsper12hours" depth="3" name="SECONDS_PER_12_HOURS" sig="SECONDS_PER_12_HOURS" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L63" sourceLabel="jd.ts:63" />

Seconds in 12 hours.

<MemberHeading id="minutesperday" depth="3" name="MINUTES_PER_DAY" sig="MINUTES_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L69" sourceLabel="jd.ts:69" />

Minutes in day.

<MemberHeading id="onebyminutesperday" depth="3" name="ONE_BY_MINUTES_PER_DAY" sig="ONE_BY_MINUTES_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L75" sourceLabel="jd.ts:75" />

One by minutes in day.

<MemberHeading id="secondsperday" depth="3" name="SECONDS_PER_DAY" sig="SECONDS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L81" sourceLabel="jd.ts:81" />

Seconds in day.

<MemberHeading id="millisecondsperday" depth="3" name="MILLISECONDS_PER_DAY" sig="MILLISECONDS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L87" sourceLabel="jd.ts:87" />

Milliseconds in day.

<MemberHeading id="onebymillisecondsperday" depth="3" name="ONE_BY_MILLISECONDS_PER_DAY" sig="ONE_BY_MILLISECONDS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L93" sourceLabel="jd.ts:93" />

One by milliseconds in day.

<MemberHeading id="onebysecondsperday" depth="3" name="ONE_BY_SECONDS_PER_DAY" sig="ONE_BY_SECONDS_PER_DAY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L99" sourceLabel="jd.ts:99" />

One by seconds in day.

<MemberHeading id="daysperjuliancentury" depth="3" name="DAYS_PER_JULIAN_CENTURY" sig="DAYS_PER_JULIAN_CENTURY" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L105" sourceLabel="jd.ts:105" />

Days in julian century.

<MemberHeading id="daysperjulianyear" depth="3" name="DAYS_PER_JULIAN_YEAR" sig="DAYS_PER_JULIAN_YEAR" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L111" sourceLabel="jd.ts:111" />

Days in julian year.

<MemberHeading id="picosecond" depth="3" name="PICOSECOND" sig="PICOSECOND" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L117" sourceLabel="jd.ts:117" />

Seconds in picoseconds.

<MemberHeading id="modifiedjuliandatedifference" depth="3" name="MODIFIED_JULIAN_DATE_DIFFERENCE" sig="MODIFIED_JULIAN_DATE_DIFFERENCE" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L123" sourceLabel="jd.ts:123" />

Modified julian date difference.

<MemberHeading id="j2000" depth="3" name="J2000" sig="J2000" />

<MemberMeta sourceHref="/source/astro/jd-ts/#L129" sourceLabel="jd.ts:129" />

Julian date of 2000 year. Epoch.

<MemberHeading id="safe" depth="3" name="SAFE" sig="SAFE" />

<MemberMeta sourceHref="/source/control/elevationprofile/elevationprofile-ts/#L45" sourceLabel="ElevationProfile.ts:45" />

Point types

<MemberHeading id="track" depth="3" name="TRACK" sig="TRACK" />

<MemberMeta sourceHref="/source/control/elevationprofile/elevationprofile-ts/#L52" sourceLabel="ElevationProfile.ts:52" />

drawData index names

<MemberHeading id="visibleextent" depth="3" name="visibleExtent" sig="visibleExtent" />

<MemberMeta badges="deprecated" sourceHref="/source/control/visibleextent/visibleextent-js/#L72" sourceLabel="VisibleExtent.js:72" />

<Callout type="error">
  &#x20;This constant is deprecated and should not be used.
</Callout>

<MemberHeading id="mars" depth="3" name="mars" sig="mars: Ellipsoid" />

<MemberMeta sourceHref="/source/ellipsoid/mars-ts/#L7" sourceLabel="mars.ts:7" />

Mars ellipsoid object.

<MemberHeading id="moon" depth="3" name="moon" sig="moon: Ellipsoid" />

<MemberMeta sourceHref="/source/ellipsoid/moon-ts/#L7" sourceLabel="moon.ts:7" />

Moon ellipsoid object.

<MemberHeading id="wgs84" depth="3" name="wgs84" sig="wgs84: Ellipsoid" />

<MemberMeta sourceHref="/source/ellipsoid/wgs84-ts/#L7" sourceLabel="wgs84.ts:7" />

WGS84 ellipsoid object.

<MemberHeading id="twopi" depth="3" name="TWO_PI" sig="TWO_PI" />

<MemberMeta sourceHref="/source/math-ts/#L38" sourceLabel="math.ts:38" />

<MemberHeading id="pitwo" depth="3" name="PI_TWO" sig="PI_TWO" />

<MemberMeta sourceHref="/source/math-ts/#L42" sourceLabel="math.ts:42" />

<MemberHeading id="log2" depth="3" name="LOG2" sig="LOG2" />

<MemberMeta sourceHref="/source/math-ts/#L49" sourceLabel="math.ts:49" />

<MemberHeading id="max32" depth="3" name="MAX32" sig="MAX32" />

<MemberMeta sourceHref="/source/math-ts/#L51" sourceLabel="math.ts:51" />

<MemberHeading id="max" depth="3" name="MAX" sig="MAX" />

<MemberMeta sourceHref="/source/math-ts/#L53" sourceLabel="math.ts:53" />

<MemberHeading id="min" depth="3" name="MIN" sig="MIN" />

<MemberMeta sourceHref="/source/math-ts/#L55" sourceLabel="math.ts:55" />

<MemberHeading id="radians" depth="3" name="RADIANS" sig="RADIANS" />

<MemberMeta sourceHref="/source/math-ts/#L58" sourceLabel="math.ts:58" />

<MemberHeading id="degrees" depth="3" name="DEGREES" sig="DEGREES" />

<MemberMeta sourceHref="/source/math-ts/#L60" sourceLabel="math.ts:60" />

<MemberHeading id="degreesdouble" depth="3" name="DEGREES_DOUBLE" sig="DEGREES_DOUBLE" />

<MemberMeta sourceHref="/source/math-ts/#L63" sourceLabel="math.ts:63" />

<MemberHeading id="radianshalf" depth="3" name="RADIANS_HALF" sig="RADIANS_HALF" />

<MemberMeta sourceHref="/source/math-ts/#L65" sourceLabel="math.ts:65" />

<MemberHeading id="arcsecondstoradians" depth="3" name="ARCSECONDS_TO_RADIANS" sig="ARCSECONDS_TO_RADIANS" />

<MemberMeta sourceHref="/source/math-ts/#L68" sourceLabel="math.ts:68" />

<MemberHeading id="radianstohours" depth="3" name="RADIANS_TO_HOURS" sig="RADIANS_TO_HOURS" />

<MemberMeta sourceHref="/source/math-ts/#L80" sourceLabel="math.ts:80" />

<MemberHeading id="hourstoradians" depth="3" name="HOURS_TO_RADIANS" sig="HOURS_TO_RADIANS" />

<MemberMeta sourceHref="/source/math-ts/#L72" sourceLabel="math.ts:72" />

<MemberHeading id="hourstodegrees" depth="3" name="HOURS_TO_DEGREES" sig="HOURS_TO_DEGREES" />

<MemberMeta sourceHref="/source/math-ts/#L74" sourceLabel="math.ts:74" />

<MemberHeading id="degreestohours" depth="3" name="DEGREES_TO_HOURS" sig="DEGREES_TO_HOURS" />

<MemberMeta sourceHref="/source/math-ts/#L76" sourceLabel="math.ts:76" />

<MemberHeading id="sqrthalf" depth="3" name="SQRT_HALF" sig="SQRT_HALF" />

<MemberMeta sourceHref="/source/math-ts/#L79" sourceLabel="math.ts:79" />

<MemberHeading id="pole" depth="3" name="POLE" sig="POLE: number" />

<MemberMeta sourceHref="/source/mercator-ts/#L9" sourceLabel="mercator.ts:9" />

Mercator size.

<MemberHeading id="poledouble" depth="3" name="POLE_DOUBLE" sig="POLE_DOUBLE: number" />

<MemberMeta sourceHref="/source/mercator-ts/#L34" sourceLabel="mercator.ts:34" />

Double mercator size.

<MemberHeading id="onebypoledouble" depth="3" name="ONE_BY_POLE_DOUBLE" sig="ONE_BY_POLE_DOUBLE: number" />

<MemberMeta sourceHref="/source/mercator-ts/#L41" sourceLabel="mercator.ts:41" />

One by mercator double size.

<MemberHeading id="maxlat" depth="3" name="MAX_LAT" sig="MAX_LAT: number" />

<MemberMeta sourceHref="/source/mercator-ts/#L144" sourceLabel="mercator.ts:144" />

Max mercator latitude.

<MemberHeading id="minlat" depth="3" name="MIN_LAT" sig="MIN_LAT: number" />

<MemberMeta sourceHref="/source/mercator-ts/#L151" sourceLabel="mercator.ts:151" />

Min mercator latitude.

<MemberHeading id="metersperunit" depth="3" name="METERS_PER_UNIT" sig="METERS_PER_UNIT: Record.<string, number>" />

<MemberMeta sourceHref="/source/proj/proj-ts/#L23" sourceLabel="Proj.ts:23" />

Meters per unit lookup table.

<MemberHeading id="opside" depth="3" name="OPSIDE" sig="OPSIDE" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L21" sourceLabel="quadTree.ts:21" />

World opposite side table.

<MemberHeading id="neighbour" depth="3" name="NEIGHBOUR" sig="NEIGHBOUR" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L26" sourceLabel="quadTree.ts:26" />

First index is {N,E,S,W} and second is {NW,NE,SW,SE}

<MemberHeading id="oppart" depth="3" name="OPPART" sig="OPPART" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L37" sourceLabel="quadTree.ts:37" />

Neighbor's oposite part. For example oposite side on the east neighbor side is: \[S]\[SE] = NE

<MemberHeading id="nopsord" depth="3" name="NOPSORD" sig="NOPSORD" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L48" sourceLabel="quadTree.ts:48" />

Neighbos's opside array order. For example NW node by E side array index is 0, SE node by S side is 1.

<MemberHeading id="comside" depth="3" name="COMSIDE" sig="COMSIDE" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L58" sourceLabel="quadTree.ts:58" />

First index is {NW,NE,SW,SE}, another one is {N,E,S,W}

<MemberHeading id="partoffset" depth="3" name="PARTOFFSET" sig="PARTOFFSET" />

<MemberMeta sourceHref="/source/quadtree/quadtree-ts/#L69" sourceLabel="quadTree.ts:69" />

Gets segment part left to right or up to downo ffset against neighbour side. Where 0 - no offset 1 - half segment size offset.

<MemberHeading id="maxprojectorlayers" depth="3" name="MAX_PROJECTOR_LAYERS" sig="MAX_PROJECTOR_LAYERS" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L13" sourceLabel="ProjectorManager.ts:13" />

Maximum number of depth layers allocated in manager-owned projector array texture. Defines how many projectors can be added to the manager at once.

<MemberHeading id="maxforwardprojectors" depth="3" name="MAX_FORWARD_PROJECTORS" sig="MAX_FORWARD_PROJECTORS" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L21" sourceLabel="ProjectorManager.ts:21" />

Maximum number of projectors processed in a single shader invocation. Used by forward / WOIT paths as top-K by priority per draw call. Deferred projector pass binds one projector per draw (`chunkSize = 1`).

<MemberHeading id="defaultmaxnodes" depth="3" name="DEFAULT_MAX_NODES" sig="DEFAULT_MAX_NODES: number" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L113" sourceLabel="Planet.ts:113" />

Maximum created nodes count. The more nodes count the more memory usage. When the maximum node count is exceeded, memClear() will be called.

**Default:** `400`
