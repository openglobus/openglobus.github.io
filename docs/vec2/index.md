---
title: Vec2
kind: class
longname: Vec2
description: Class represents a 3d vector.
---

# Vec2

<SourceLink href="/source/math/vec2-ts/#L11" label="Vec2.ts:11" />

Class represents a 3d vector.

---

## Constructor

<Signature code="new Vec2(x?: number, y?: number): Vec2" />

**Parameters**

- `x` (number, optional) — First value.
- `y` (number, optional) — Second value.

---

## Instance Methods

<MemberHeading id="tovector3" depth="3" name="toVector3" sig="toVector3(): Vec3" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L185" sourceLabel="Vec2.ts:185" />

Converts to 3d vector, third value is 0.0.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L194" sourceLabel="Vec2.ts:194" />

Returns clone vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="equal" depth="3" name="equal" sig="equal(p: Vec2): boolean" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L204" sourceLabel="Vec2.ts:204" />

Compares with vector. Returns true if it equals another.

**Parameters**

- `p` ([Vec2](/vec2)) — Vector to compare.

**Returns**

- `boolean`

<MemberHeading id="copy" depth="3" name="copy" sig="copy(point2: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L213" sourceLabel="Vec2.ts:213" />

Copy input vector's values.

**Parameters**

- `point2` ([Vec2](/vec2)) — Vector to copy.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="length" depth="3" name="length" sig="length(): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L224" sourceLabel="Vec2.ts:224" />

Gets vector's length.

**Returns**

- `number`

<MemberHeading id="length2" depth="3" name="length2" sig="length2(): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L233" sourceLabel="Vec2.ts:233" />

Returns squared vector's length.

**Returns**

- `number`

<MemberHeading id="adda" depth="3" name="addA" sig="addA(v: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L243" sourceLabel="Vec2.ts:243" />

Adds vector to the current.

**Parameters**

- `v` ([Vec2](/vec2)) — Vector to add.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="add" depth="3" name="add" sig="add(v: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L255" sourceLabel="Vec2.ts:255" />

Adds two vectors.

**Parameters**

- `v` ([Vec2](/vec2)) — Vector to add.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="suba" depth="3" name="subA" sig="subA(v: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L265" sourceLabel="Vec2.ts:265" />

Subtracts a vector from the current vector in place.

**Parameters**

- `v` ([Vec2](/vec2)) — Subtract vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="sub" depth="3" name="sub" sig="sub(v: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L277" sourceLabel="Vec2.ts:277" />

Subtract vector from the current.

**Parameters**

- `v` ([Vec2](/vec2)) — Subtract vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(scale: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L287" sourceLabel="Vec2.ts:287" />

Scale current vector.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="scaleto" depth="3" name="scaleTo" sig="scaleTo(scale: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L299" sourceLabel="Vec2.ts:299" />

Scale current vector to another instance.

**Parameters**

- `scale` (number) — Scale value.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="mula" depth="3" name="mulA" sig="mulA(vec: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L309" sourceLabel="Vec2.ts:309" />

Multiplies the current vector by another vector in place.

**Parameters**

- `vec` ([Vec2](/vec2)) — Multiply vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(vec: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L321" sourceLabel="Vec2.ts:321" />

Multiplies the current vector by another vector and returns a new vector.

**Parameters**

- `vec` ([Vec2](/vec2)) — Multiply vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="diva" depth="3" name="divA" sig="divA(vec: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L331" sourceLabel="Vec2.ts:331" />

Divides current vector components by another vector in place.

**Parameters**

- `vec` ([Vec2](/vec2)) — Divisor vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="dot" depth="3" name="dot" sig="dot(v: Vec2): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L343" sourceLabel="Vec2.ts:343" />

Returns the dot product of two vectors.

**Parameters**

- `v` ([Vec2](/vec2)) — Another vector.

**Returns**

- `number`

<MemberHeading id="dotarr" depth="3" name="dotArr" sig="dotArr(arr: Array.<number>): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L353" sourceLabel="Vec2.ts:353" />

Returns the dot product with a 2-element array.

**Parameters**

- `arr` (Array.\<number>) — Array vector. (exactly 2 entries)

**Returns**

- `number`

<MemberHeading id="cross" depth="3" name="cross" sig="cross(v: Vec2): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L363" sourceLabel="Vec2.ts:363" />

Gets vectors cross production.

**Parameters**

- `v` ([Vec2](/vec2)) — Another vector.

**Returns**

- `number`

<MemberHeading id="clear" depth="3" name="clear" sig="clear(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L372" sourceLabel="Vec2.ts:372" />

Sets vector to zero.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="normal" depth="3" name="normal" sig="normal(): Vec2" />

<MemberMeta badges="deprecated" sourceHref="/source/math/vec2-ts/#L383" sourceLabel="Vec2.ts:383" />

Returns normalized vector.

<Callout type="error">
  &#x20;This method is deprecated and should not be used.
</Callout>

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="getnormal" depth="3" name="getNormal" sig="getNormal(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L392" sourceLabel="Vec2.ts:392" />

Returns normalized vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="normalize" depth="3" name="normalize" sig="normalize(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L409" sourceLabel="Vec2.ts:409" />

Normalize current vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="tovec" depth="3" name="toVec" sig="toVec(): Array.<number>" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L423" sourceLabel="Vec2.ts:423" />

Converts vector to a number array.

**Returns**

- `Array.<number>`

<MemberHeading id="distance" depth="3" name="distance" sig="distance(p: Vec2): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L433" sourceLabel="Vec2.ts:433" />

Gets distance to point.

**Parameters**

- `p` ([Vec2](/vec2)) — Target point.

**Returns**

- `number`

<MemberHeading id="set" depth="3" name="set" sig="set(x: number, y: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L445" sourceLabel="Vec2.ts:445" />

Sets vector's values.

**Parameters**

- `x` (number) — Value X.
- `y` (number) — Value Y.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="negate" depth="3" name="negate" sig="negate(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L456" sourceLabel="Vec2.ts:456" />

Negate current vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="negateto" depth="3" name="negateTo" sig="negateTo(): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L467" sourceLabel="Vec2.ts:467" />

Negate current vector to another instance.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="projtoray" depth="3" name="projToRay" sig="projToRay(pos: Vec2, direction: Vec2): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L478" sourceLabel="Vec2.ts:478" />

Gets projected point coordinates of the current vector on the ray.

**Parameters**

- `pos` ([Vec2](/vec2)) — Ray position.
- `direction` ([Vec2](/vec2)) — Ray direction.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="angle" depth="3" name="angle" sig="angle(a: Vec2): number" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L490" sourceLabel="Vec2.ts:490" />

Gets angle between two vectors.

**Parameters**

- `a` ([Vec2](/vec2)) — Another vector.

**Returns**

- `number`

<MemberHeading id="lerp" depth="3" name="lerp" sig="lerp(v1: Vec2, v2: Vec2, l: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L502" sourceLabel="Vec2.ts:502" />

Returns linear interpolation between two vectors.

**Parameters**

- `v1` ([Vec2](/vec2)) — Start vector.
- `v2` ([Vec2](/vec2)) — End vector.
- `l` (number) — Interpolation factor in range \[0, 1].

**Returns**

- [`Vec2`](/vec2) — Interpolated vector.

<MemberHeading id="slerp" depth="3" name="slerp" sig="slerp(v2: Vec2, t: number): Vec2" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L528" sourceLabel="Vec2.ts:528" />

Spherically interpolates between two vectors. Interpolates between current and v2 vector by amount t. The difference between this and linear interpolation (aka, "lerp") is that the vectors are treated as directions rather than points in space. The direction of the returned vector is interpolated by the angle and its magnitude is interpolated between the magnitudes of from and to.

**Parameters**

- `v2` ([Vec2](/vec2))
- `t` (number) — The parameter t is clamped to the range \[0, 1].

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="iszero" depth="3" name="isZero" sig="isZero(): boolean" />

<MemberMeta sourceHref="/source/math/vec2-ts/#L560" sourceLabel="Vec2.ts:560" />

Returns true if vector's values are zero.

**Returns**

- `boolean`

## Static Methods

<MemberHeading id="fromvec" depth="3" name="fromVec" sig="fromVec(arr: NumberArray2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L60" sourceLabel="Vec2.ts:60" />

Creates 2d vector from array.

**Parameters**

- `arr` (NumberArray2) — Input array. (exactly 2 entries)

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="add" depth="3" name="add" sig="add(a: Vec2, b: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L71" sourceLabel="Vec2.ts:71" />

Returns summary vector.

**Parameters**

- `a` ([Vec2](/vec2)) — First vector.
- `b` ([Vec2](/vec2)) — Second vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="sub" depth="3" name="sub" sig="sub(a: Vec2, b: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L84" sourceLabel="Vec2.ts:84" />

Returns two vectors subtraction.

**Parameters**

- `a` ([Vec2](/vec2)) — First vector.
- `b` ([Vec2](/vec2)) — Second vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(a: Vec2, scale: number): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L97" sourceLabel="Vec2.ts:97" />

Returns scaled vector.

**Parameters**

- `a` ([Vec2](/vec2)) — Input vector.
- `scale` (number) — Scale value.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(a: Vec2, b: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L110" sourceLabel="Vec2.ts:110" />

Returns two vectors production.

**Parameters**

- `a` ([Vec2](/vec2)) — First vector.
- `b` ([Vec2](/vec2)) — Second vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="div" depth="3" name="div" sig="div(a: Vec2, b: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L123" sourceLabel="Vec2.ts:123" />

Returns vector components division product one to another.

**Parameters**

- `a` ([Vec2](/vec2)) — First vector.
- `b` ([Vec2](/vec2)) — Second vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="projbtoa" depth="3" name="proj_b_to_a" sig="proj_b_to_a(b: Vec2, a: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L136" sourceLabel="Vec2.ts:136" />

Get projection of the first vector to the second.

**Parameters**

- `b` ([Vec2](/vec2)) — First vector.
- `a` ([Vec2](/vec2)) — Second vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="angle" depth="3" name="angle" sig="angle(a: Vec2, b: Vec2): number" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L147" sourceLabel="Vec2.ts:147" />

Gets angle between two vectors.

**Parameters**

- `a` ([Vec2](/vec2)) — First vector.
- `b` ([Vec2](/vec2)) — Second vector.

**Returns**

- `number`

<MemberHeading id="orthonormalize" depth="3" name="orthoNormalize" sig="orthoNormalize(normal: Vec2, tangent: Vec2): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L158" sourceLabel="Vec2.ts:158" />

Makes vectors normalized and orthogonal to each other.

**Parameters**

- `normal` ([Vec2](/vec2)) — Normal vector.
- `tangent` ([Vec2](/vec2)) — Tangent vector.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="projbtoplane" depth="3" name="proj_b_to_plane" sig="proj_b_to_plane(b: Vec2, n: Vec2, def?: Vec3): Vec2" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L172" sourceLabel="Vec2.ts:172" />

Projects a vector onto a plane with normal `n`.

**Parameters**

- `b` ([Vec2](/vec2)) — Vector to project.
- `n` ([Vec2](/vec2)) — Plane normal.
- `def` ([Vec3](/vec3), optional) — Default value if the result is zero.

**Returns**

- [`Vec2`](/vec2)

## Other

<MemberHeading id="up" depth="3" name="UP" sig="UP" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L35" sourceLabel="Vec2.ts:35" />

<MemberHeading id="down" depth="3" name="DOWN" sig="DOWN" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L40" sourceLabel="Vec2.ts:40" />

<MemberHeading id="right" depth="3" name="RIGHT" sig="RIGHT" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L45" sourceLabel="Vec2.ts:45" />

<MemberHeading id="left" depth="3" name="LEFT" sig="LEFT" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L50" sourceLabel="Vec2.ts:50" />

<MemberHeading id="zero" depth="3" name="ZERO" sig="ZERO" />

<MemberMeta badges="static" sourceHref="/source/math/vec2-ts/#L55" sourceLabel="Vec2.ts:55" />
