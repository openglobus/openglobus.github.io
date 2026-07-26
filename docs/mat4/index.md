---
title: Mat4
kind: class
longname: Mat4
description: Class represents a 4x4 matrix.
---

# Mat4

<SourceLink href="/source/math/mat4-ts/#L29" label="Mat4.ts:29" />

Class represents a 4x4 matrix.

---

## Constructor

<Signature code="new Mat4(): Mat4" />

---

## Instance Methods

<MemberHeading id="set" depth="3" name="set" sig="set(m: Array.<number>): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L160" sourceLabel="Mat4.ts:160" />

Sets column-major order array matrix.

**Parameters**

- `m` (Array.\<number>) — Matrix array.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L185" sourceLabel="Mat4.ts:185" />

Duplicates a Matrix3 instance.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="copy" depth="3" name="copy" sig="copy(a: Mat4): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L197" sourceLabel="Mat4.ts:197" />

Copy matrix.

**Parameters**

- `a` ([Mat4](/mat4)) — Matrix to copy.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="getmat3" depth="3" name="getMat3" sig="getMat3(): Mat3" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L206" sourceLabel="Mat4.ts:206" />

Converts to 3x3 matrix.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="mulvec3" depth="3" name="mulVec3" sig="mulVec3(p: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L228" sourceLabel="Mat4.ts:228" />

Multiply to 3d vector.

**Parameters**

- `p` ([Vec3](/vec3)) — 3d vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mulvec4" depth="3" name="mulVec4" sig="mulVec4(p: Vec4): Vec4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L245" sourceLabel="Mat4.ts:245" />

Multiply to 4d vector.

**Parameters**

- `p` ([Vec4](/vec4)) — 4d vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="toinversematrix3" depth="3" name="toInverseMatrix3" sig="toInverseMatrix3(): Mat3" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L263" sourceLabel="Mat4.ts:263" />

Creates an inverse 3x3 matrix of the current.

**Returns**

- [`Mat3`](/mat3)

<MemberHeading id="inverseto" depth="3" name="inverseTo" sig="inverseTo(): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L301" sourceLabel="Mat4.ts:301" />

Creates an inverse matrix of the current.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="transposeto" depth="3" name="transposeTo" sig="transposeTo(): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L357" sourceLabel="Mat4.ts:357" />

Creates a transposed matrix of the current.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="setidentity" depth="3" name="setIdentity" sig="setIdentity(): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L383" sourceLabel="Mat4.ts:383" />

Sets matrix to identity.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(mx: Mat4): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L409" sourceLabel="Mat4.ts:409" />

Computes the product of two matrices.

**Parameters**

- `mx` ([Mat4](/mat4)) — Matrix to multiply.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="translate" depth="3" name="translate" sig="translate(v: Vec3): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L472" sourceLabel="Mat4.ts:472" />

Add translation vector to the current matrix.

**Parameters**

- `v` ([Vec3](/vec3)) — Translate vector.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="translatetoposition" depth="3" name="translateToPosition" sig="translateToPosition(v: Vec3): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L493" sourceLabel="Mat4.ts:493" />

Sets translation matrix to the position.

**Parameters**

- `v` ([Vec3](/vec3)) — Translate to position.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="rotate" depth="3" name="rotate" sig="rotate(u: Vec3, angle: number): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L508" sourceLabel="Mat4.ts:508" />

Rotates the current matrix around an axis by an angle.

**Parameters**

- `u` ([Vec3](/vec3)) — Rotation axis.
- `angle` (number) — Rotation angle in radians.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(u: Vec3, angle: number): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L542" sourceLabel="Mat4.ts:542" />

Sets current rotation matrix around the aligned axis and angle.

**Parameters**

- `u` ([Vec3](/vec3)) — Aligned axis.
- `angle` (number) — Aligned axis angle in radians.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="rotatebetweenvectors" depth="3" name="rotateBetweenVectors" sig="rotateBetweenVectors(a: Vec3, b: Vec3): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L575" sourceLabel="Mat4.ts:575" />

Gets the rotation matrix from one vector to another.

**Parameters**

- `a` ([Vec3](/vec3)) — First vector.
- `b` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(v: Vec3): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L586" sourceLabel="Mat4.ts:586" />

Scale current matrix to the vector values.

**Parameters**

- `v` ([Vec3](/vec3)) — Scale vector.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading
  id="setperspective"
  depth="3"
  name="setPerspective"
  sig="setPerspective(
	left: number,
	right: number,
	bottom: number,
	top: number,
	near: number,
	far: number,
): Mat4"
/>

<MemberMeta sourceHref="/source/math/mat4-ts/#L614" sourceLabel="Mat4.ts:614" />

Sets perspective projection matrix frustum values.

**Parameters**

- `left` (number)
- `right` (number)
- `bottom` (number)
- `top` (number)
- `near` (number)
- `far` (number)

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="setperspectivereverseinfinite" depth="3" name="setPerspectiveReverseInfinite" sig="setPerspectiveReverseInfinite()" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L650" sourceLabel="Mat4.ts:650" />

Infinite reverse-Z perspective. By default uses WebGL clip space (NDC z in \[-1, 1]); with `zeroToOne=true` uses EXT\_clip\_control ZERO\_TO\_ONE (NDC z in \[0, 1]). Use with gl.clearDepth(0), gl.depthFunc(GL\_GREATER). Far plane is not used in the matrix (culling only).

<MemberHeading
  id="setorthographic"
  depth="3"
  name="setOrthographic"
  sig="setOrthographic(
	left: number,
	right: number,
	bottom: number,
	top: number,
	near: number,
	far: number,
): Mat4"
/>

<MemberMeta sourceHref="/source/math/mat4-ts/#L697" sourceLabel="Mat4.ts:697" />

Creates current orthographic projection matrix.

**Parameters**

- `left` (number)
- `right` (number)
- `bottom` (number)
- `top` (number)
- `near` (number)
- `far` (number)

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="eulertomatrix" depth="3" name="eulerToMatrix" sig="eulerToMatrix(ax: number, ay: number, az: number): Mat4" />

<MemberMeta sourceHref="/source/math/mat4-ts/#L731" sourceLabel="Mat4.ts:731" />

Sets current rotation matrix by euler's angles.

**Parameters**

- `ax` (number) — Rotation angle in radians around X axis.
- `ay` (number) — Rotation angle in radians around Y axis.
- `az` (number) — Rotation angle in radians around Z axis.

**Returns**

- [`Mat4`](/mat4)

## Static Methods

<MemberHeading id="identity" depth="3" name="identity" sig="identity(): Mat4" />

<MemberMeta badges="static" sourceHref="/source/math/mat4-ts/#L44" sourceLabel="Mat4.ts:44" />

Returns identity matrix instance.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="getrotationaroundpoint" depth="3" name="getRotationAroundPoint" sig="getRotationAroundPoint(angle: number, center?: Vec3, up?: Vec3)" />

<MemberMeta badges="static" sourceHref="/source/math/mat4-ts/#L72" sourceLabel="Mat4.ts:72" />

Returns a rotation matrix around a point.

**Parameters**

- `angle` (number) — Rotation angle in radians.
- `center` ([Vec3](/vec3), optional) — Rotation center point.
- `up` ([Vec3](/vec3), optional) — Up axis.
