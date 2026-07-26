---
title: Vec4
kind: class
longname: Vec4
description: Class represents a 4d vector.
---

# Vec4

<SourceLink href="/source/math/vec4-ts/#L14" label="Vec4.ts:14" />

Class represents a 4d vector.

---

## Constructor

<Signature code="new Vec4(x?: number, y?: number, z?: number, w?: number): Vec4" />

**Parameters**

- `x` (number, optional) — First value.
- `y` (number, optional) — Second value.
- `z` (number, optional) — Third value.
- `w` (number, optional) — Fourth value.

---

## Instance Methods

<MemberHeading id="tovec3" depth="3" name="toVec3" sig="toVec3(): Vec3" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L70" sourceLabel="Vec4.ts:70" />

Converts to Vec3, without fourth value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L79" sourceLabel="Vec4.ts:79" />

Returns clone vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="equal" depth="3" name="equal" sig="equal(v: Vec4): boolean" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L89" sourceLabel="Vec4.ts:89" />

Compares with vector. Returns true if it equals another.

**Parameters**

- `v` ([Vec4](/vec4)) — Vector to compare.

**Returns**

- `boolean`

<MemberHeading id="copy" depth="3" name="copy" sig="copy(v: Vec4): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L98" sourceLabel="Vec4.ts:98" />

Copy input vector's values.

**Parameters**

- `v` ([Vec4](/vec4)) — Vector to copy.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="toarray" depth="3" name="toArray" sig="toArray(): Array.<number>" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L120" sourceLabel="Vec4.ts:120" />

Converts vector to a number array.

**Returns**

- `Array.<number>`

<MemberHeading id="toarray3" depth="3" name="toArray3" sig="toArray3(): Array.<number>" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L120" sourceLabel="Vec4.ts:120" />

Converts vector to a number array.

**Returns**

- `Array.<number>`

<MemberHeading id="set" depth="3" name="set" sig="set(x: number, y: number, z: number, w: number): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L133" sourceLabel="Vec4.ts:133" />

Sets vector's values.

**Parameters**

- `x` (number) — Value X.
- `y` (number) — Value Y.
- `z` (number) — Value Z.
- `w` (number) — Value W.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="adda" depth="3" name="addA" sig="addA(v: Vec4): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L147" sourceLabel="Vec4.ts:147" />

Adds vector to the current.

**Parameters**

- `v` ([Vec4](/vec4)) — Vector to add.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="suba" depth="3" name="subA" sig="subA(v: Vec4): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L161" sourceLabel="Vec4.ts:161" />

Subtract vector from the current.

**Parameters**

- `v` ([Vec4](/vec4)) — Subtract vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(scale: number): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L175" sourceLabel="Vec4.ts:175" />

Scale current vector.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="affinity" depth="3" name="affinity" sig="affinity(): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L188" sourceLabel="Vec4.ts:188" />

Makes vector affinity. Thereby fourth component becomes to 1.0.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="scaleto" depth="3" name="scaleTo" sig="scaleTo(scale: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L205" sourceLabel="Vec4.ts:205" />

Scale current vector to another instance.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getstep" depth="3" name="getStep" sig="getStep(): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L214" sourceLabel="Vec4.ts:214" />

Vector's edge function that returns vector where each component is 0.0 if it's smaller than edge and otherwise 1.0.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="getfrac" depth="3" name="getFrac" sig="getFrac(v: Vec4): Vec4" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L229" sourceLabel="Vec4.ts:229" />

The vector frac function returns the vector of fractional parts of each value, i.e. x minus floor(x).

**Parameters**

- `v` ([Vec4](/vec4)) — Input vector

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="dot" depth="3" name="dot" sig="dot(v: Vec4): number" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L239" sourceLabel="Vec4.ts:239" />

Returns the dot product of two vectors.

**Parameters**

- `v` ([Vec4](/vec4)) — Another vector.

**Returns**

- `number`

<MemberHeading id="iszero" depth="3" name="isZero" sig="isZero(): boolean" />

<MemberMeta sourceHref="/source/math/vec4-ts/#L248" sourceLabel="Vec4.ts:248" />

Returns true if vector's values are zero.

**Returns**

- `boolean`

## Static Methods

<MemberHeading id="fromvec" depth="3" name="fromVec" sig="fromVec(arr: Array.<number>): Vec4" />

<MemberMeta badges="static" sourceHref="/source/math/vec4-ts/#L61" sourceLabel="Vec4.ts:61" />

Creates 4d vector from array.

**Parameters**

- `arr` (Array.\<number>) — Array of four values

**Returns**

- [`Vec4`](/vec4)

## Other

<MemberHeading id="identity" depth="3" name="identity" sig="identity: Vec4" />

<MemberMeta badges="static" sourceHref="/source/math/vec4-ts/#L51" sourceLabel="Vec4.ts:51" />

Identity vector \[0,0,0,1].
