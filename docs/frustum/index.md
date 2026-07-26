---
title: Frustum
kind: class
longname: Frustum
description: Frustum object, part of the camera object.
---

# Frustum

<SourceLink href="/source/camera/frustum-ts/#L40" label="Frustum.ts:40" />

Frustum object, part of the camera object.

---

## Constructor

<Signature code="new Frustum(options: *): Frustum" />

**Parameters**

- `options` (\*)

---

## Instance Methods

<MemberHeading id="getrightplane" depth="3" name="getRightPlane" sig="getRightPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L185" sourceLabel="Frustum.ts:185" />

Returns right clipping plane.

**Returns**

- `NumberArray4` — Right clipping plane coefficients.

<MemberHeading id="getleftplane" depth="3" name="getLeftPlane" sig="getLeftPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L194" sourceLabel="Frustum.ts:194" />

Returns left clipping plane.

**Returns**

- `NumberArray4` — Left clipping plane coefficients.

<MemberHeading id="getbottomplane" depth="3" name="getBottomPlane" sig="getBottomPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L203" sourceLabel="Frustum.ts:203" />

Returns bottom clipping plane.

**Returns**

- `NumberArray4` — Bottom clipping plane coefficients.

<MemberHeading id="gettopplane" depth="3" name="getTopPlane" sig="getTopPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L212" sourceLabel="Frustum.ts:212" />

Returns top clipping plane.

**Returns**

- `NumberArray4` — Top clipping plane coefficients.

<MemberHeading id="getbackwardplane" depth="3" name="getBackwardPlane" sig="getBackwardPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L221" sourceLabel="Frustum.ts:221" />

Returns backward clipping plane.

**Returns**

- `NumberArray4` — Backward clipping plane coefficients.

<MemberHeading id="getforwardplane" depth="3" name="getForwardPlane" sig="getForwardPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L230" sourceLabel="Frustum.ts:230" />

Returns forward clipping plane.

**Returns**

- `NumberArray4` — Forward clipping plane coefficients.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L239" sourceLabel="Frustum.ts:239" />

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix values.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L248" sourceLabel="Frustum.ts:248" />

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix values.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L257" sourceLabel="Frustum.ts:257" />

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix values.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L266" sourceLabel="Frustum.ts:266" />

Returns inverse projection matrix.

**Returns**

- `NumberArray16` — Inverse projection matrix values.

<MemberHeading
  id="setprojectionmatrix"
  depth="3"
  name="setProjectionMatrix"
  sig="setProjectionMatrix(
	viewAngle: number,
	aspect: number,
	near: number,
	far: number,
	isOrthographic?: boolean,
	focusDistance?: number,
	reverseDepth?: boolean,
	depthZeroToOne?: boolean,
)"
/>

<MemberMeta sourceHref="/source/camera/frustum-ts/#L282" sourceLabel="Frustum.ts:282" />

Sets up camera projection matrix.

**Parameters**

- `viewAngle` (number) — Camera vertical field of view angle in degrees.
- `aspect` (number) — Viewport aspect ratio (`width / height`).
- `near` (number) — Near clipping plane distance.
- `far` (number) — Far clipping plane distance.
- `isOrthographic` (boolean, optional, default: false) — Enables orthographic projection mode.
- `focusDistance` (number, optional, default: 10) — Reference distance used to compute orthographic frustum size.
- `reverseDepth` (boolean, optional, default: false) — Enables reverse-Z infinite perspective projection.
- `depthZeroToOne` (boolean, optional, default: false) — Uses `[0, 1]` NDC depth range for reverse-Z projection.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L331" sourceLabel="Frustum.ts:331" />

Updates near and far clipping planes.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional, default: "this.far") — Far clipping plane distance.

<MemberHeading id="setprojectionviewrtematrix" depth="3" name="setProjectionViewRTEMatrix" sig="setProjectionViewRTEMatrix(viewRTEMatrix: Mat4)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L372" sourceLabel="Frustum.ts:372" />

Updates projection-view RTE matrix.

**Parameters**

- `viewRTEMatrix` ([Mat4](/mat4)) — View matrix in RTE coordinates.

<MemberHeading id="setviewmatrix" depth="3" name="setViewMatrix" sig="setViewMatrix(viewMatrix: Mat4)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L381" sourceLabel="Frustum.ts:381" />

Camera's projection matrix values.

**Parameters**

- `viewMatrix` ([Mat4](/mat4)) — View matrix.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L436" sourceLabel="Frustum.ts:436" />

Returns true if the point is inside the frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when the point is inside.

<MemberHeading id="containsspherebottomexc" depth="3" name="containsSphereBottomExc" sig="containsSphereBottomExc(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L452" sourceLabel="Frustum.ts:452" />

Returns true if the sphere is inside the frustum, ignoring the bottom plane.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere passes all checked planes.

<MemberHeading id="containsspherebuttom" depth="3" name="containsSphereButtom" sig="containsSphereButtom(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L468" sourceLabel="Frustum.ts:468" />

Checks sphere intersection with the bottom frustum plane only.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere is not clipped by the bottom plane.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L480" sourceLabel="Frustum.ts:480" />

Returns true if the sphere is inside the frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere is inside.

<MemberHeading id="containssphere2" depth="3" name="containsSphere2" sig="containsSphere2(center: Vec3, radius: number): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L498" sourceLabel="Frustum.ts:498" />

Returns true if the sphere is inside the frustum.

**Parameters**

- `center` ([Vec3](/vec3)) — Sphere center.
- `radius` (number) — Sphere radius.

**Returns**

- `boolean` — `true` when the sphere is inside.

<MemberHeading id="containsbox" depth="3" name="containsBox" sig="containsBox(box: Box): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L514" sourceLabel="Frustum.ts:514" />

Returns true if the box intersects or is inside the frustum.

**Parameters**

- `box` ([Box](/box)) — Bounding box.

**Returns**

- `boolean` — `true` when the box is not fully outside.
