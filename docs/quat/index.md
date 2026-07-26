---
title: Quat
kind: class
longname: Quat
description: A set of 4-dimensional coordinates used to represent rotation in 3-dimensional space.
---

# Quat

<SourceLink href="/source/math/quat-ts/#L15" label="Quat.ts:15" />

A set of 4-dimensional coordinates used to represent rotation in 3-dimensional space.

---

## Constructor

<Signature code="new Quat(x?: Number, y?: Number, z?: Number, w?: Number): Quat" />

**Parameters**

- `x` (Number, optional, default: "0.0") — The X component.
- `y` (Number, optional, default: "0.0") — The Y component.
- `z` (Number, optional, default: "0.0") — The Z component.
- `w` (Number, optional, default: "0.0") — The W component.

---

## Instance Methods

<MemberHeading id="iszero" depth="3" name="isZero" sig="isZero(): boolean" />

<MemberMeta sourceHref="/source/math/quat-ts/#L228" sourceLabel="Quat.ts:228" />

Returns true if the components are zero.

**Returns**

- `boolean`

<MemberHeading id="isnan" depth="3" name="isNaN" sig="isNaN(): boolean" />

<MemberMeta sourceHref="/source/math/quat-ts/#L237" sourceLabel="Quat.ts:237" />

Returns true if a component is NaN.

**Returns**

- `boolean`

<MemberHeading id="clear" depth="3" name="clear" sig="clear(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L246" sourceLabel="Quat.ts:246" />

Clear Quat. Sets zeroes.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="set" depth="3" name="set" sig="set(x?: Number, y?: Number, z?: Number, w?: Number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L260" sourceLabel="Quat.ts:260" />

Sets Quat values.

**Parameters**

- `x` (Number, optional, default: "0.0") — The X component.
- `y` (Number, optional, default: "0.0") — The Y component.
- `z` (Number, optional, default: "0.0") — The Z component.
- `w` (Number, optional, default: "0.0") — The W component.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="copy" depth="3" name="copy" sig="copy(q: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L274" sourceLabel="Quat.ts:274" />

Copy Quat values.

**Parameters**

- `q` ([Quat](/quat)) — Copy Quat.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="setidentity" depth="3" name="setIdentity" sig="setIdentity(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L287" sourceLabel="Quat.ts:287" />

Set current Quat instance to identity Quat.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L300" sourceLabel="Quat.ts:300" />

Duplicates a Quat instance.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="add" depth="3" name="add" sig="add(q: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L310" sourceLabel="Quat.ts:310" />

Computes the componentwise sum of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to add.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="addres" depth="3" name="addRes" sig="addRes(q: Quat, res: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L321" sourceLabel="Quat.ts:321" />

Computes the componentwise sum of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to add.
- `res` ([Quat](/quat)) — Output quaternion.

**Returns**

- [`Quat`](/quat) — Result quaternion.

<MemberHeading id="sub" depth="3" name="sub" sig="sub(q: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L331" sourceLabel="Quat.ts:331" />

Computes the componentwise difference of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to subtract.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="scaleto" depth="3" name="scaleTo" sig="scaleTo(scale: Number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L341" sourceLabel="Quat.ts:341" />

Multiplies the provided Quat componentwise by the provided scalar.

**Parameters**

- `scale` (Number) — The scalar to multiply with.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="scale" depth="3" name="scale" sig="scale(scale: Number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L351" sourceLabel="Quat.ts:351" />

Multiplies the provided Quat componentwise.

**Parameters**

- `scale` (Number) — The scalar to multiply with.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="tovec" depth="3" name="toVec" sig="toVec(): Array.<number>" />

<MemberMeta sourceHref="/source/math/quat-ts/#L364" sourceLabel="Quat.ts:364" />

Converts Quat values to array.

**Returns**

- `Array.<number>`

<MemberHeading id="setlookrotation" depth="3" name="setLookRotation" sig="setLookRotation(forward: Vec3, up: Vec3): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L379" sourceLabel="Quat.ts:379" />

Sets rotation with the given heading and up vectors.

**Parameters**

- `forward` ([Vec3](/vec3)) — Heading target coordinates.
- `up` ([Vec3](/vec3)) — Up vector.

**Returns**

- [`Quat`](/quat)

<MemberHeading
  id="setfromsphericalcoords"
  depth="3"
  name="setFromSphericalCoords"
  sig="setFromSphericalCoords(
	lat: number,
	lon: number,
	angle: number,
): Quat"
/>

<MemberMeta sourceHref="/source/math/quat-ts/#L422" sourceLabel="Quat.ts:422" />

Sets current quaternion by spherical coordinates.

**Parameters**

- `lat` (number) — Latitude.
- `lon` (number) — Longitude.
- `angle` (number) — Angle in radians.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getsphericalcoords" depth="3" name="getSphericalCoords" sig="getSphericalCoords(): Object" />

<MemberMeta sourceHref="/source/math/quat-ts/#L443" sourceLabel="Quat.ts:443" />

Gets spherical coordinates.

**Returns**

- `Object` — Returns object with latitude, longitude and alpha.

<MemberHeading id="setfromaxisangle" depth="3" name="setFromAxisAngle" sig="setFromAxisAngle(axis: Vec3, angle: number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L483" sourceLabel="Quat.ts:483" />

Sets current Quat representing a rotation around an axis.

**Parameters**

- `axis` ([Vec3](/vec3)) — The axis of rotation.
- `angle` (number) — The angle in radians to rotate around the axis.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getaxisangle" depth="3" name="getAxisAngle" sig="getAxisAngle(): QuatAxisAngle" />

<MemberMeta sourceHref="/source/math/quat-ts/#L502" sourceLabel="Quat.ts:502" />

Returns axis and angle of the current Quat.

**Returns**

- [`QuatAxisAngle`](/quataxisangle) — Axis-angle representation.

<MemberHeading
  id="setfromeulerangles"
  depth="3"
  name="setFromEulerAngles"
  sig="setFromEulerAngles(
	pitch: number,
	yaw: number,
	roll: number,
): Quat"
/>

<MemberMeta sourceHref="/source/math/quat-ts/#L556" sourceLabel="Quat.ts:556" />

Sets current Quat by Euler's angles.

**Parameters**

- `pitch` (number) — Pitch angle in degrees.
- `yaw` (number) — Yaw angle in degrees.
- `roll` (number) — Roll angle in degrees.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="geteulerangles" depth="3" name="getEulerAngles" sig="getEulerAngles(): Object" />

<MemberMeta sourceHref="/source/math/quat-ts/#L585" sourceLabel="Quat.ts:585" />

Returns Euler's angles of the current Quat.

**Returns**

- `Object`

<MemberHeading id="setfrommatrix4" depth="3" name="setFromMatrix4" sig="setFromMatrix4(mx: Mat4): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L619" sourceLabel="Quat.ts:619" />

Computes a Quat from the provided 4x4 matrix instance.

**Parameters**

- `mx` ([Mat4](/mat4)) — The rotation matrix.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getmat4" depth="3" name="getMat4" sig="getMat4(out?: Mat4): Mat4" />

<MemberMeta sourceHref="/source/math/quat-ts/#L668" sourceLabel="Quat.ts:668" />

Converts current Quat to the rotation 4x4 matrix.

**Parameters**

- `out` ([Mat4](/mat4), optional) — Output matrix.

**Returns**

- [`Mat4`](/mat4)

<MemberHeading id="getmat3" depth="3" name="getMat3" sig="getMat3(): Mat3" />

<MemberMeta sourceHref="/source/math/quat-ts/#L708" sourceLabel="Quat.ts:708" />

Converts current Quat to the rotation 3x3 matrix.

**Returns**

- [`Mat3`](/mat3)

* **TODO:**
  - NOT TESTED

<MemberHeading id="mulvec3" depth="3" name="mulVec3" sig="mulVec3(v: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/quat-ts/#L750" sourceLabel="Quat.ts:750" />

Returns quaternion and vector production.

**Parameters**

- `v` ([Vec3](/vec3)) — 3d Vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mulvec3res" depth="3" name="mulVec3Res" sig="mulVec3Res(v: Vec3, res: Vec3): Vec3" />

<MemberMeta sourceHref="/source/math/quat-ts/#L783" sourceLabel="Quat.ts:783" />

Returns quaternion and vector production.

**Parameters**

- `v` ([Vec3](/vec3)) — 3d Vector.
- `res` ([Vec3](/vec3)) — result output vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="mul" depth="3" name="mul" sig="mul(q: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L866" sourceLabel="Quat.ts:866" />

Computes the product of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to multiply.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="mulres" depth="3" name="mulRes" sig="mulRes(q: Quat, res: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L841" sourceLabel="Quat.ts:841" />

Computes the product of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to multiply.
- `res` ([Quat](/quat)) — Output quaternion.

**Returns**

- [`Quat`](/quat) — Result quaternion.

<MemberHeading id="mula" depth="3" name="mulA" sig="mulA(q: Quat): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L866" sourceLabel="Quat.ts:866" />

Computes the product of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Quat to multiply.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="conjugate" depth="3" name="conjugate" sig="conjugate(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L890" sourceLabel="Quat.ts:890" />

Returns the conjugate of the current quaternion.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="inverse" depth="3" name="inverse" sig="inverse(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L899" sourceLabel="Quat.ts:899" />

Computes the inverse of the Quat.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="magnitude" depth="3" name="magnitude" sig="magnitude(): number" />

<MemberMeta sourceHref="/source/math/quat-ts/#L909" sourceLabel="Quat.ts:909" />

Computes a magnitude of the Quat.

**Returns**

- `number`

<MemberHeading id="magnitude2" depth="3" name="magnitude2" sig="magnitude2(): number" />

<MemberMeta sourceHref="/source/math/quat-ts/#L922" sourceLabel="Quat.ts:922" />

Computes a squared magnitude of the Quat.

**Returns**

- `number`

<MemberHeading id="dot" depth="3" name="dot" sig="dot(q: Quat): number" />

<MemberMeta sourceHref="/source/math/quat-ts/#L936" sourceLabel="Quat.ts:936" />

Computes the dot (scalar) product of two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Second quaternion.

**Returns**

- `number`

<MemberHeading id="normalize" depth="3" name="normalize" sig="normalize(): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L945" sourceLabel="Quat.ts:945" />

Current Quat normalization.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(q: Quat): Boolean" />

<MemberMeta sourceHref="/source/math/quat-ts/#L975" sourceLabel="Quat.ts:975" />

Compares two Quats.

**Parameters**

- `q` ([Quat](/quat)) — Second quaternion.

**Returns**

- `Boolean`

<MemberHeading id="slerp" depth="3" name="slerp" sig="slerp(b: Quat, t: number): Quat" />

<MemberMeta sourceHref="/source/math/quat-ts/#L987" sourceLabel="Quat.ts:987" />

Performs a spherical linear interpolation between two Quats.

**Parameters**

- `b` ([Quat](/quat)) — The end rotation Quat.
- `t` (number) — interpolation amount between the two Quats.

**Returns**

- [`Quat`](/quat)

## Static Methods

<MemberHeading id="xrotation" depth="3" name="xRotation" sig="xRotation(a: number): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L70" sourceLabel="Quat.ts:70" />

Returns a Quat represents rotation around X axis.

**Parameters**

- `a` (number) — The angle in radians to rotate around the axis.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="yrotation" depth="3" name="yRotation" sig="yRotation(a: number): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L81" sourceLabel="Quat.ts:81" />

Returns a Quat represents rotation around Y axis.

**Parameters**

- `a` (number) — The angle in radians to rotate around the axis.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="zrotation" depth="3" name="zRotation" sig="zRotation(a: number): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L92" sourceLabel="Quat.ts:92" />

Returns a Quat represents rotation around Z axis.

**Parameters**

- `a` (number) — The angle in radians to rotate around the axis.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="axisangletoquat" depth="3" name="axisAngleToQuat" sig="axisAngleToQuat(axis: Vec3, angle?: number): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L104" sourceLabel="Quat.ts:104" />

Computes a Quat representing a rotation around an axis.

**Parameters**

- `axis` ([Vec3](/vec3)) — The axis of rotation.
- `angle` (number, optional, default: "0.0") — The angle in radians to rotate around the axis.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getlookrotation" depth="3" name="getLookRotation" sig="getLookRotation(forward: Vec3, up: Vec3): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L118" sourceLabel="Quat.ts:118" />

Computes a rotation from the given heading and up vector.

**Parameters**

- `forward` ([Vec3](/vec3)) — Heading target coordinates.
- `up` ([Vec3](/vec3)) — Up vector.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getlookatsourcedest" depth="3" name="getLookAtSourceDest" sig="getLookAtSourceDest(sourcePoint: Vec3, destPoint: Vec3): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L150" sourceLabel="Quat.ts:150" />

Computes a Quat from source point heading to the destination point.

**Parameters**

- `sourcePoint` ([Vec3](/vec3)) — Source coordinate.
- `destPoint` ([Vec3](/vec3)) — Destination coordinate.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getrotationbetweenvectors" depth="3" name="getRotationBetweenVectors" sig="getRotationBetweenVectors(u: Vec3, v: Vec3): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L171" sourceLabel="Quat.ts:171" />

Computes rotation between two vectors.

**Parameters**

- `u` ([Vec3](/vec3)) — First vector.
- `v` ([Vec3](/vec3)) — Second vector.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getrotationbetweenvectorsres" depth="3" name="getRotationBetweenVectorsRes" sig="getRotationBetweenVectorsRes(u: Vec3, v: Vec3, res: Quat): Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L185" sourceLabel="Quat.ts:185" />

Computes rotation between two vectors.

**Parameters**

- `u` ([Vec3](/vec3)) — First vector.
- `v` ([Vec3](/vec3)) — Second vector.
- `res` ([Quat](/quat)) — Output quaternion.

**Returns**

- [`Quat`](/quat)

<MemberHeading
  id="getrotationbetweenvectorsup"
  depth="3"
  name="getRotationBetweenVectorsUp"
  sig="getRotationBetweenVectorsUp(
	source: Vec3,
	dest: Vec3,
	up: Vec3,
): Quat"
/>

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L201" sourceLabel="Quat.ts:201" />

Computes rotation between two vectors. Uses the `up` vector when vectors are exactly opposite. Returns identity when vectors are exactly equal.

**Parameters**

- `source` ([Vec3](/vec3)) — First vector.
- `dest` ([Vec3](/vec3)) — Second vector.
- `up` ([Vec3](/vec3)) — Up vector.

**Returns**

- [`Quat`](/quat)

## Other

<MemberHeading id="identity" depth="3" name="IDENTITY" sig="IDENTITY: Quat" />

<MemberMeta badges="static" sourceHref="/source/math/quat-ts/#L60" sourceLabel="Quat.ts:60" />

Identity Quat.
