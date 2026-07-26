---
title: og/math/coder
kind: module
longname: module:og/math/coder
---

# og/math/coder

<SourceLink href="/source/math/coder-ts/#L5" label="coder.ts:5" />

---

## Instance Methods

<MemberHeading id="encodefloattorgba" depth="3" name="encodeFloatToRGBA" sig="encodeFloatToRGBA(v: number): Vec4" />

<MemberMeta sourceHref="/source/math/coder-ts/#L19" sourceLabel="coder.ts:19" />

Encode 32 bit float value to the RGBA vector.

**Parameters**

- `v` (number) — 32 bit float value.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="decodefloatfromrgba" depth="3" name="decodeFloatFromRGBA" sig="decodeFloatFromRGBA(rgba: Vec4): number" />

<MemberMeta sourceHref="/source/math/coder-ts/#L31" sourceLabel="coder.ts:31" />

Decode RGBA vector to 32 bit float value.

**Parameters**

- `rgba` ([Vec4](/vec4)) — RGBA encoded 32 bit float value.

**Returns**

- `number`

<MemberHeading
  id="decodefloatfromrgbaarr"
  depth="3"
  name="decodeFloatFromRGBAArr"
  sig="decodeFloatFromRGBAArr(
	arr: NumberArray4 | NumberArray3,
	use32?: boolean,
): number"
/>

<MemberMeta sourceHref="/source/math/coder-ts/#L45" sourceLabel="coder.ts:45" />

Decode RGBA vector to 32 bit float value.

**Parameters**

- `arr` (NumberArray4 | NumberArray3) — RGBA encoded 32 bit float value.
- `use32` (boolean, optional, default: false) — Use 32 bit result

**Returns**

- `number`

<MemberHeading id="doubletotwofloats" depth="3" name="doubleToTwoFloats" sig="doubleToTwoFloats(value: number): Float32Array" />

<MemberMeta sourceHref="/source/math/coder-ts/#L58" sourceLabel="coder.ts:58" />

Separate 64 bit value to two 32-bit float values.

**Parameters**

- `value` (number) — Double type value.

**Returns**

- `Float32Array` — Encoded array. (exactly 2 entries)

<MemberHeading
  id="doubletotwofloats2"
  depth="3"
  name="doubleToTwoFloats2"
  sig="doubleToTwoFloats2(
	value: number,
	highLowArr: NumberArray2 | Float32Array,
): NumberArray2 | Float32Array"
/>

<MemberMeta sourceHref="/source/math/coder-ts/#L79" sourceLabel="coder.ts:79" />

Separate 64 bit value to two 32-bit float values.

**Parameters**

- `value` (number) — Double type value.
- `highLowArr` (NumberArray2 | Float32Array) — Reference output array.

**Returns**

- `NumberArray2 | Float32Array` — Encoded array. (exactly 2 entries)

<MemberHeading id="doubletotwofloatsv2" depth="3" name="doubleToTwoFloatsV2" sig="doubleToTwoFloatsV2(value: number, highLowVec: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/coder-ts/#L102" sourceLabel="coder.ts:102" />

Separate 64 bit value to two 32-bit float values.

**Parameters**

- `value` (number) — Double type value.
- `highLowVec` ([Vec2](/vec2)) — Reference out vector object.

**Returns**

- [`Vec2`](/vec2) — Encoded array. (exactly 2 entries)
