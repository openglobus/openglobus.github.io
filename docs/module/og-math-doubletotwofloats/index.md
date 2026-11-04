---
title: og/math/doubleToTwoFloats
kind: module
longname: module:og/math/doubleToTwoFloats
description: Splits 64-bit values into two 32-bit floats, high and low, for the GPU. No dependencies, so the workers import it without the math classes.
---

# og/math/doubleToTwoFloats

<SourceLink href="/source/math/doubletotwofloats-ts/#L7" label="doubleToTwoFloats.ts:7" />

Splits 64-bit values into two 32-bit floats, high and low, for the GPU. No dependencies, so the workers import it without the math classes.

---

## Instance Methods

<MemberHeading
  id="doubletotwofloats2"
  depth="3"
  name="doubleToTwoFloats2"
  sig="doubleToTwoFloats2(
	value: number,
	highLowArr: NumberArray2 | Float32Array,
): NumberArray2 | Float32Array"
/>

<MemberMeta sourceHref="/source/math/doubletotwofloats-ts/#L25" sourceLabel="doubleToTwoFloats.ts:25" />

Separate 64 bit value to two 32-bit float values.

**Parameters**

- `value` (number) — Double type value.
- `highLowArr` (NumberArray2 | Float32Array) — Reference output array.

**Returns**

- `NumberArray2 | Float32Array` — Encoded array. (exactly 2 entries)

<MemberHeading id="doubletotwofloatsv2" depth="3" name="doubleToTwoFloatsV2" sig="doubleToTwoFloatsV2(value: number, highLowVec: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/doubletotwofloats-ts/#L42" sourceLabel="doubleToTwoFloats.ts:42" />

Separate 64 bit value to two 32-bit float values.

**Parameters**

- `value` (number) — Double type value.
- `highLowVec` ([Vec2](/vec2)) — Reference out vector object.

**Returns**

- [`Vec2`](/vec2) — Encoded array. (exactly 2 entries)

<MemberHeading id="doubletotwofloatsv3" depth="3" name="doubleToTwoFloatsV3" sig="doubleToTwoFloatsV3(v: XYZ, high: XYZ, low: XYZ)" />

<MemberMeta sourceHref="/source/math/doubletotwofloats-ts/#L56" sourceLabel="doubleToTwoFloats.ts:56" />

Splits a 64-bit 3d vector into two vectors with 32-bit float components.

**Parameters**

- `v` ([XYZ](/xyz)) — Double type value.
- `high` ([XYZ](/xyz)) — Out vector high values.
- `low` ([XYZ](/xyz)) — Out vector low values.

<MemberHeading
  id="doubletotwofloat32array"
  depth="3"
  name="doubleToTwoFloat32Array"
  sig="doubleToTwoFloat32Array(
	v: XYZ,
	high: Float32Array | NumberArray3,
	low: Float32Array | NumberArray3,
)"
/>

<MemberMeta sourceHref="/source/math/doubletotwofloats-ts/#L81" sourceLabel="doubleToTwoFloats.ts:81" />

Splits a 64-bit 3d vector into two arrays with 32-bit float components.

**Parameters**

- `v` ([XYZ](/xyz)) — Double type value.
- `high` (Float32Array | NumberArray3) — Out high values.
- `low` (Float32Array | NumberArray3) — Out low values.
