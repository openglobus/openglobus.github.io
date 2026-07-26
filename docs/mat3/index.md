---
title: Mat3
kind: class
longname: Mat3
description: Class represents a 3x3 matrix.
---

# Mat3

<SourceLink href="/source/math/mat3-ts/#L10" label="Mat3.ts:10" />

Class represents a 3x3 matrix.

---

## Constructor

<Signature code="new Mat3(): Mat3" />

---

## Instance Methods

<MemberHeading id="set" depth="3" name="set" sig="set(m: Array.<number>): Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L26" sourceLabel="Mat3.ts:26" />

Sets column-major order array matrix.

**Parameters**

- `m` (Array.\<number>) — Matrix array.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L44" sourceLabel="Mat3.ts:44" />

Duplicates a Mat3 instance.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="copy" depth="3" name="copy" sig="copy(a: Mat3): Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L56" sourceLabel="Mat3.ts:56" />

Copy matrix.

**Parameters**

- `a` ([Mat3](/mat3)) — Matrix to copy.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="transposeto" depth="3" name="transposeTo" sig="transposeTo(): Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L65" sourceLabel="Mat3.ts:65" />

Creates transposed matrix from the current.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="setidentity" depth="3" name="setIdentity" sig="setIdentity(): Mat3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L85" sourceLabel="Mat3.ts:85" />

Sets matrix to identity.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="mulvec" depth="3" name="mulVec" sig="mulVec(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L104" sourceLabel="Mat3.ts:104" />

Multiply to 3d vector.

**Parameters**

- `p` ([Vec3](/vec3)) — 3D vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getmat4" depth="3" name="getMat4" sig="getMat4(): Mat4" />

<MemberMeta sourceHref="/source/math/mat3-ts/#L119" sourceLabel="Mat3.ts:119" />

Converts to 4x4 matrix.

**Returns**

- [`Mat4`](/mat4)
