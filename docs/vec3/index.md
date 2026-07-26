---
title: Vec3
kind: class
longname: Vec3
description: Class represents a 3d vector.
---

# Vec3

<SourceLink href="/source/math/vec3-ts/#L15" label="Vec3.ts:15" />

Class represents a 3d vector.

---

## Constructor

<Signature code="new Vec3(x?: number, y?: number, z?: number): Vec3" />

**Parameters**

- `x` (number, optional) — First value.
- `y` (number, optional) — Second value.
- `z` (number, optional) — Third value.

---

## Instance Methods

<MemberHeading id="tovec4" depth="3" name="toVec4" sig="toVec4(): Vec4" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L362" sourceLabel="Vec3.ts:362" />

Converts to 4d vector, Fourth value is 1.0.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L371" sourceLabel="Vec3.ts:371" />

Returns clone vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="tostring" depth="3" name="toString" sig="toString(): string" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L380" sourceLabel="Vec3.ts:380" />

Converts vector to text string.

**Returns**

- `string`

<MemberHeading id="iszero" depth="3" name="isZero" sig="isZero(): boolean" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L389" sourceLabel="Vec3.ts:389" />

Returns true if vector's values are zero.

**Returns**

- `boolean`

<MemberHeading id="projtovec" depth="3" name="projToVec" sig="projToVec(a: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L399" sourceLabel="Vec3.ts:399" />

Get projection of the first vector to the second.

**Parameters**

- `a` ([Vec3](/vec3)) — Project vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="equal" depth="3" name="equal" sig="equal(p: Vec3): boolean" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L409" sourceLabel="Vec3.ts:409" />

Compares with vector. Returns true if it equals another.

**Parameters**

- `p` ([Vec3](/vec3)) — Vector to compare.

**Returns**

- `boolean`

<MemberHeading id="copy" depth="3" name="copy" sig="copy(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L418" sourceLabel="Vec3.ts:418" />

Copy input vector's values.

**Parameters**

- `p` ([Vec3](/vec3)) — Vector to copy.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="length" depth="3" name="length" sig="length(): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L430" sourceLabel="Vec3.ts:430" />

Gets vector's length.

**Returns**

- `number`

<MemberHeading id="length2" depth="3" name="length2" sig="length2(): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L439" sourceLabel="Vec3.ts:439" />

Returns squared vector's length.

**Returns**

- `number`

<MemberHeading id="getquat" depth="3" name="getQuat" sig="getQuat(): Quat" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L448" sourceLabel="Vec3.ts:448" />

Converts vector's values to a quaternion object.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="adda" depth="3" name="addA" sig="addA(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L458" sourceLabel="Vec3.ts:458" />

Adds vector to the current.

**Parameters**

- `p` ([Vec3](/vec3)) — Point to add.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="add" depth="3" name="add" sig="add(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L471" sourceLabel="Vec3.ts:471" />

Gets two vectors summarization.

**Parameters**

- `p` ([Vec3](/vec3)) — Vector to add.

**Returns**

- [`Vec3`](/vec3) — Returns a sum vector.

<MemberHeading id="addres" depth="3" name="addRes" sig="addRes(p: Vec3, res: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L482" sourceLabel="Vec3.ts:482" />

Computes the componentwise sum of two vectors.

**Parameters**

- `p` ([Vec3](/vec3)) — Vector to add.
- `res` ([Vec3](/vec3)) — Output vector.

**Returns**

- [`Vec3`](/vec3) — Sum vector.

<MemberHeading id="suba" depth="3" name="subA" sig="subA(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L492" sourceLabel="Vec3.ts:492" />

Subtract vector from the current.

**Parameters**

- `p` ([Vec3](/vec3)) — Subtract vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="sub" depth="3" name="sub" sig="sub(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L505" sourceLabel="Vec3.ts:505" />

Gets vector subtraction.

**Parameters**

- `p` ([Vec3](/vec3)) — Subtract vector.

**Returns**

- [`Vec3`](/vec3) — Returns a new subtraction vector.

<MemberHeading id="scale" depth="3" name="scale" sig="scale(scale: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L515" sourceLabel="Vec3.ts:515" />

Scale current vector.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="scaleto" depth="3" name="scaleTo" sig="scaleTo(scale: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L528" sourceLabel="Vec3.ts:528" />

Scale current vector to another instance.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mula" depth="3" name="mulA" sig="mulA(vec: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L538" sourceLabel="Vec3.ts:538" />

Multiply current vector object to another and store result in the current instance.

**Parameters**

- `vec` ([Vec3](/vec3)) — Multiply vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(vec: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L551" sourceLabel="Vec3.ts:551" />

Multiply current vector object to another and returns new vector instance.

**Parameters**

- `vec` ([Vec3](/vec3)) — Multiply vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mulres" depth="3" name="mulRes" sig="mulRes(vec: Vec3, res: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L562" sourceLabel="Vec3.ts:562" />

Computes the componentwise product of two vectors.

**Parameters**

- `vec` ([Vec3](/vec3)) — Vector multiplier.
- `res` ([Vec3](/vec3)) — Output vector.

**Returns**

- [`Vec3`](/vec3) — Product vector.

<MemberHeading id="diva" depth="3" name="divA" sig="divA(vec: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L572" sourceLabel="Vec3.ts:572" />

Divides current vector components by another vector in place.

**Parameters**

- `vec` ([Vec3](/vec3)) — Divisor vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="div" depth="3" name="div" sig="div(vec: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L585" sourceLabel="Vec3.ts:585" />

Divide current vector's components to another and returns new vector instance.

**Parameters**

- `vec` ([Vec3](/vec3)) — Divisor vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="dot" depth="3" name="dot" sig="dot(a: Vec3): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L595" sourceLabel="Vec3.ts:595" />

Returns the dot product of two vectors.

**Parameters**

- `a` ([Vec3](/vec3)) — Another vector.

**Returns**

- `number`

<MemberHeading id="dotarr" depth="3" name="dotArr" sig="dotArr(arr: Array.<number>): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L605" sourceLabel="Vec3.ts:605" />

Returns the dot product with an array.

**Parameters**

- `arr` (Array.\<number>) — Array vector. (exactly 3 entries)

**Returns**

- `number`

<MemberHeading id="cross" depth="3" name="cross" sig="cross(point3: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L615" sourceLabel="Vec3.ts:615" />

Gets vectors cross production.

**Parameters**

- `point3` ([Vec3](/vec3)) — Another vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="clear" depth="3" name="clear" sig="clear(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L628" sourceLabel="Vec3.ts:628" />

Sets vector to zero.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getnormal" depth="3" name="getNormal" sig="getNormal(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L638" sourceLabel="Vec3.ts:638" />

Returns normalized vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="normal" depth="3" name="normal" sig="normal(): Vec3" />

<MemberMeta badges="deprecated" sourceHref="/source/math/vec3-ts/#L657" sourceLabel="Vec3.ts:657" />

Returns normalized vector.

<Callout type="error">
  &#x20;This method is deprecated and should not be used.
</Callout>

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="normalnegate" depth="3" name="normalNegate" sig="normalNegate(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L675" sourceLabel="Vec3.ts:675" />

Returns the normalized negated vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="normalnegatescale" depth="3" name="normalNegateScale" sig="normalNegateScale(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L693" sourceLabel="Vec3.ts:693" />

Returns the normalized negated vector multiplied by `scale`.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="normalscale" depth="3" name="normalScale" sig="normalScale(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L711" sourceLabel="Vec3.ts:711" />

Returns normalized scale vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="normalize" depth="3" name="normalize" sig="normalize(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L729" sourceLabel="Vec3.ts:729" />

Normalize current vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="tovec" depth="3" name="toVec" sig="toVec(): Array.<number>" />

<MemberMeta badges="deprecated" sourceHref="/source/math/vec3-ts/#L743" sourceLabel="Vec3.ts:743" />

Converts vector to a number array.

<Callout type="error">
  &#x20;This method is deprecated and should not be used.
</Callout>

**Returns**

- `Array.<number>`

<MemberHeading id="toarray" depth="3" name="toArray" sig="toArray(): Array.<number>" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L752" sourceLabel="Vec3.ts:752" />

Converts vector to a number array.

**Returns**

- `Array.<number>`

<MemberHeading id="distance" depth="3" name="distance" sig="distance(p: Vec3): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L762" sourceLabel="Vec3.ts:762" />

Gets distance to point.

**Parameters**

- `p` ([Vec3](/vec3)) — Target point.

**Returns**

- `number`

<MemberHeading id="distance2" depth="3" name="distance2" sig="distance2(p: Vec3): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L775" sourceLabel="Vec3.ts:775" />

Gets square distance to point.

**Parameters**

- `p` ([Vec3](/vec3)) — Target point.

**Returns**

- `number`

<MemberHeading id="set" depth="3" name="set" sig="set(x: number, y: number, z: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L790" sourceLabel="Vec3.ts:790" />

Sets vector's values.

**Parameters**

- `x` (number) — Value X.
- `y` (number) — Value Y.
- `z` (number) — Value Z.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="negate" depth="3" name="negate" sig="negate(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L802" sourceLabel="Vec3.ts:802" />

Negate current vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="negateto" depth="3" name="negateTo" sig="negateTo(): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L814" sourceLabel="Vec3.ts:814" />

Negate current vector to another instance.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="projtoray" depth="3" name="projToRay" sig="projToRay(pos: Vec3, direction: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L825" sourceLabel="Vec3.ts:825" />

Gets projected point coordinates of the current vector on the ray.

**Parameters**

- `pos` ([Vec3](/vec3)) — Ray position.
- `direction` ([Vec3](/vec3)) — Ray direction.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="angle" depth="3" name="angle" sig="angle(a: Vec3): number" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L837" sourceLabel="Vec3.ts:837" />

Gets angle between two vectors.

**Parameters**

- `a` ([Vec3](/vec3)) — Another vector.

**Returns**

- `number`

<MemberHeading id="lerp" depth="3" name="lerp" sig="lerp(v2: Vec3, l: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L848" sourceLabel="Vec3.ts:848" />

Returns two vectors linear interpolation.

**Parameters**

- `v2` ([Vec3](/vec3)) — End vector.
- `l` (number) — Interpolation value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="smerp" depth="3" name="smerp" sig="smerp(v2: Vec3, t: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L859" sourceLabel="Vec3.ts:859" />

Returns vector interpolation by v(t) = v1 \* t + v2 \* (1 - t)

**Parameters**

- `v2` ([Vec3](/vec3)) — End vector.
- `t` (number) — Interpolation value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="slerp" depth="3" name="slerp" sig="slerp(v2: Vec3, t: number): Vec3" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L878" sourceLabel="Vec3.ts:878" />

Spherically interpolates between two vectors. Interpolates between current and v2 vector by amount t. The difference between this and linear interpolation (aka, "lerp") is that the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated by the angle and its magnitude is interpolated between the magnitudes of from and to.

**Parameters**

- `v2` ([Vec3](/vec3))
- `t` (number) — The parameter t is clamped to the range \[0, 1].

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getrotationto" depth="3" name="getRotationTo" sig="getRotationTo(dest: Vec3, fallbackAxis: Vec3): Quat" />

<MemberMeta sourceHref="/source/math/vec3-ts/#L919" sourceLabel="Vec3.ts:919" />

Returns the shortest-arc quaternion rotating this vector to `dest`.

**Parameters**

- `dest` ([Vec3](/vec3)) — Destination vector.
- `fallbackAxis` ([Vec3](/vec3)) — Axis used when vectors are opposite.

**Returns**

- [`Quat`](/quat)

## Static Methods

<MemberHeading id="doubletotwofloats" depth="3" name="doubleToTwoFloats" sig="doubleToTwoFloats(v: Vec3, high: Vec3, low: Vec3)" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L102" sourceLabel="Vec3.ts:102" />

Splits a 64-bit Vec3 value into two Vec3 values with 32-bit float components.

**Parameters**

- `v` ([Vec3](/vec3)) — Double type value.
- `high` ([Vec3](/vec3)) — Out vector high values.
- `low` ([Vec3](/vec3)) — Out vector low values.

<MemberHeading
  id="doubletotwofloat32array"
  depth="3"
  name="doubleToTwoFloat32Array"
  sig="doubleToTwoFloat32Array(
	v: Vec3,
	high: Float32Array,
	low: Float32Array,
): Array.<number>"
/>

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L146" sourceLabel="Vec3.ts:146" />

Splits a 64-bit Vec3 value into two float arrays with 32-bit components.

**Parameters**

- `v` ([Vec3](/vec3)) — Double type value.
- `high` (Float32Array) — Out vector high values.
- `low` (Float32Array) — Out vector low values.

**Returns**

- `Array.<number>` — Encoded array. (exactly 2 entries)

<MemberHeading id="fromvec" depth="3" name="fromVec" sig="fromVec(arr: NumberArray2 | NumberArray3 | NumberArray4): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L188" sourceLabel="Vec3.ts:188" />

Creates 3d vector from array.

**Parameters**

- `arr` (NumberArray2 | NumberArray3 | NumberArray4) — Input array (exactly 3 entries)

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="angle" depth="3" name="angle" sig="angle(a: Vec3, b: Vec3): number" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L199" sourceLabel="Vec3.ts:199" />

Gets angle between two vectors.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- `number`

<MemberHeading id="lerp" depth="3" name="lerp" sig="lerp(v1: Vec3, v2: Vec3, l: number): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L216" sourceLabel="Vec3.ts:216" />

Returns two vectors linear interpolation.

**Parameters**

- `v1` ([Vec3](/vec3)) — Start vector.
- `v2` ([Vec3](/vec3)) — End vector.
- `l` (number) — Interpolate value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="add" depth="3" name="add" sig="add(a: Vec3, b: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L227" sourceLabel="Vec3.ts:227" />

Returns the sum of two vectors.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="sub" depth="3" name="sub" sig="sub(a: Vec3, b: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L240" sourceLabel="Vec3.ts:240" />

Returns the difference between two vectors.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(a: Vec3, scale: number): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L253" sourceLabel="Vec3.ts:253" />

Returns scaled vector.

**Parameters**

- `a` ([Vec3](/vec3)) — Input vector.
- `scale` (number) — Scale value.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(a: Vec3, b: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L264" sourceLabel="Vec3.ts:264" />

Returns two vectors production.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="noncollinear" depth="3" name="noncollinear" sig="noncollinear(a: Vec3, b: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L277" sourceLabel="Vec3.ts:277" />

Returns true if two vectors are non-collinear.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="projbtoplane" depth="3" name="proj_b_to_plane" sig="proj_b_to_plane(b: Vec3, n: Vec3, def?: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L289" sourceLabel="Vec3.ts:289" />

Projects a vector onto a plane with normal `n`.

**Parameters**

- `b` ([Vec3](/vec3)) — Vector to project.
- `n` ([Vec3](/vec3)) — Plane normal.
- `def` ([Vec3](/vec3), optional) — Default value if the result is zero.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="projbtoa" depth="3" name="proj_b_to_a" sig="proj_b_to_a(b: Vec3, a: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L304" sourceLabel="Vec3.ts:304" />

Get projection of the first vector to the second.

**Parameters**

- `b` ([Vec3](/vec3)) — First vector.
- `a` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="orthonormalize" depth="3" name="orthoNormalize" sig="orthoNormalize(normal: Vec3, tangent: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L316" sourceLabel="Vec3.ts:316" />

Makes vectors normalized and orthogonal to each other. Normalizes normal. Normalizes tangent and makes sure it is orthogonal to normal (that is, angle between them is 90 degrees).

**Parameters**

- `normal` ([Vec3](/vec3)) — Normal vector.
- `tangent` ([Vec3](/vec3)) — Tangent vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="div" depth="3" name="div" sig="div(a: Vec3, b: Vec3): Vec3" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L339" sourceLabel="Vec3.ts:339" />

Returns vector components division product one to another.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Vec3`](/vec3)

## Other

<MemberHeading id="up" depth="3" name="UP" sig="UP" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L43" sourceLabel="Vec3.ts:43" />

<MemberHeading id="down" depth="3" name="DOWN" sig="DOWN" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L48" sourceLabel="Vec3.ts:48" />

<MemberHeading id="right" depth="3" name="RIGHT" sig="RIGHT" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L53" sourceLabel="Vec3.ts:53" />

<MemberHeading id="left" depth="3" name="LEFT" sig="LEFT" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L58" sourceLabel="Vec3.ts:58" />

<MemberHeading id="forward" depth="3" name="FORWARD" sig="FORWARD" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L63" sourceLabel="Vec3.ts:63" />

<MemberHeading id="backward" depth="3" name="BACKWARD" sig="BACKWARD" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L68" sourceLabel="Vec3.ts:68" />

<MemberHeading id="zero" depth="3" name="ZERO" sig="ZERO" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L73" sourceLabel="Vec3.ts:73" />

<MemberHeading id="unitx" depth="3" name="UNIT_X" sig="UNIT_X" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L78" sourceLabel="Vec3.ts:78" />

<MemberHeading id="unity" depth="3" name="UNIT_Y" sig="UNIT_Y" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L83" sourceLabel="Vec3.ts:83" />

<MemberHeading id="unitz" depth="3" name="UNIT_Z" sig="UNIT_Z" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L88" sourceLabel="Vec3.ts:88" />

<MemberHeading id="north" depth="3" name="NORTH" sig="NORTH" />

<MemberMeta badges="static" sourceHref="/source/math/vec3-ts/#L93" sourceLabel="Vec3.ts:93" />
