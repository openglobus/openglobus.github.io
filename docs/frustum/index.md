---
title: Frustum
kind: class
longname: Frustum
description: Frustum object, part of the camera object.
---

# Frustum

<SourceLink href="/source/camera/frustum-ts/#L42" label="Frustum.ts:42" />

Frustum object, part of the camera object.

---

## Constructor

<Signature code="new Frustum(options: *): Frustum" />

**Parameters**

- `options` (\*)

---

## Instance Methods

<MemberHeading id="getrightplane" depth="3" name="getRightPlane" sig="getRightPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L196" sourceLabel="Frustum.ts:196" />

Returns right clipping plane.

**Returns**

- `NumberArray4` — Right clipping plane coefficients.

<MemberHeading id="getleftplane" depth="3" name="getLeftPlane" sig="getLeftPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L205" sourceLabel="Frustum.ts:205" />

Returns left clipping plane.

**Returns**

- `NumberArray4` — Left clipping plane coefficients.

<MemberHeading id="getbottomplane" depth="3" name="getBottomPlane" sig="getBottomPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L214" sourceLabel="Frustum.ts:214" />

Returns bottom clipping plane.

**Returns**

- `NumberArray4` — Bottom clipping plane coefficients.

<MemberHeading id="gettopplane" depth="3" name="getTopPlane" sig="getTopPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L223" sourceLabel="Frustum.ts:223" />

Returns top clipping plane.

**Returns**

- `NumberArray4` — Top clipping plane coefficients.

<MemberHeading id="getbackwardplane" depth="3" name="getBackwardPlane" sig="getBackwardPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L232" sourceLabel="Frustum.ts:232" />

Returns backward clipping plane.

**Returns**

- `NumberArray4` — Backward clipping plane coefficients.

<MemberHeading id="getforwardplane" depth="3" name="getForwardPlane" sig="getForwardPlane(): NumberArray4" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L241" sourceLabel="Frustum.ts:241" />

Returns forward clipping plane.

**Returns**

- `NumberArray4` — Forward clipping plane coefficients.

<MemberHeading id="getprojectionviewmatrix" depth="3" name="getProjectionViewMatrix" sig="getProjectionViewMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L250" sourceLabel="Frustum.ts:250" />

Returns projection-view matrix.

**Returns**

- `NumberArray16` — Projection-view matrix values.

<MemberHeading id="getprojectionviewrtematrix" depth="3" name="getProjectionViewRTEMatrix" sig="getProjectionViewRTEMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L259" sourceLabel="Frustum.ts:259" />

Returns projection-view RTE matrix.

**Returns**

- `NumberArray16` — Projection-view RTE matrix values.

<MemberHeading id="getprojectionmatrix" depth="3" name="getProjectionMatrix" sig="getProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L268" sourceLabel="Frustum.ts:268" />

Returns projection matrix.

**Returns**

- `NumberArray16` — Projection matrix values.

<MemberHeading id="getinverseprojectionmatrix" depth="3" name="getInverseProjectionMatrix" sig="getInverseProjectionMatrix(): NumberArray16" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L277" sourceLabel="Frustum.ts:277" />

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

<MemberMeta sourceHref="/source/camera/frustum-ts/#L293" sourceLabel="Frustum.ts:293" />

Sets up camera projection matrix.

**Parameters**

- `viewAngle` (number) — Camera vertical field of view angle in degrees.
- `aspect` (number) — Viewport aspect ratio (`width / height`).
- `near` (number) — Near clipping plane distance.
- `far` (number) — Far clipping plane distance.
- `isOrthographic` (boolean, optional, default: false) — Enables orthographic projection mode.
- `focusDistance` (number, optional, default: "this.focusDistance") — Reference distance used to compute orthographic frustum size.
- `reverseDepth` (boolean, optional, default: false) — Enables reverse-Z infinite perspective projection.
- `depthZeroToOne` (boolean, optional, default: false) — Uses `[0, 1]` NDC depth range for reverse-Z projection.

<MemberHeading id="setfocusdistance" depth="3" name="setFocusDistance" sig="setFocusDistance(focusDistance: number)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L343" sourceLabel="Frustum.ts:343" />

Sets reference distance used to compute orthographic bounds and rebuilds projection matrices. Keeps current near and far clipping planes unchanged.

**Parameters**

- `focusDistance` (number) — Reference distance.

<MemberHeading
  id="setorthobounds"
  depth="3"
  name="setOrthoBounds"
  sig="setOrthoBounds(
	left: number,
	right: number,
	bottom: number,
	top: number,
)"
/>

<MemberMeta sourceHref="/source/camera/frustum-ts/#L363" sourceLabel="Frustum.ts:363" />

Updates orthographic projection bounds and rebuilds projection matrices. Keeps the current near and far clipping planes unchanged.

**Parameters**

- `left` (number) — Left orthographic bound.
- `right` (number) — Right orthographic bound.
- `bottom` (number) — Bottom orthographic bound.
- `top` (number) — Top orthographic bound.

<MemberHeading
  id="setorthoprojection"
  depth="3"
  name="setOrthoProjection"
  sig="setOrthoProjection(
	left: number,
	right: number,
	bottom: number,
	top: number,
	near: number,
	far: number,
)"
/>

<MemberMeta sourceHref="/source/camera/frustum-ts/#L377" sourceLabel="Frustum.ts:377" />

Updates orthographic projection bounds and clipping planes in one projection rebuild.

**Parameters**

- `left` (number) — Left orthographic bound.
- `right` (number) — Right orthographic bound.
- `bottom` (number) — Bottom orthographic bound.
- `top` (number) — Top orthographic bound.
- `near` (number) — Near clipping plane distance.
- `far` (number) — Far clipping plane distance.

<MemberHeading id="setnearfar" depth="3" name="setNearFar" sig="setNearFar(near: number, far?: number)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L405" sourceLabel="Frustum.ts:405" />

Updates near and far clipping planes.

**Parameters**

- `near` (number) — Near clipping plane distance.
- `far` (number, optional, default: "this.far") — Far clipping plane distance.

<MemberHeading id="setprojectionviewrtematrix" depth="3" name="setProjectionViewRTEMatrix" sig="setProjectionViewRTEMatrix(viewRTEMatrix: Mat4)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L447" sourceLabel="Frustum.ts:447" />

Updates projection-view RTE matrix.

**Parameters**

- `viewRTEMatrix` ([Mat4](/mat4)) — View matrix in RTE coordinates.

<MemberHeading id="setviewmatrix" depth="3" name="setViewMatrix" sig="setViewMatrix(viewMatrix: Mat4)" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L456" sourceLabel="Frustum.ts:456" />

Camera's projection matrix values.

**Parameters**

- `viewMatrix` ([Mat4](/mat4)) — View matrix.

<MemberHeading id="containspoint" depth="3" name="containsPoint" sig="containsPoint(point: Vec3): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L511" sourceLabel="Frustum.ts:511" />

Returns true if the point is inside the frustum.

**Parameters**

- `point` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- `boolean` — `true` when the point is inside.

<MemberHeading id="containsspherebottomexc" depth="3" name="containsSphereBottomExc" sig="containsSphereBottomExc(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L527" sourceLabel="Frustum.ts:527" />

Returns true if the sphere is inside the frustum, ignoring the bottom plane.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere passes all checked planes.

<MemberHeading id="containsspherebuttom" depth="3" name="containsSphereButtom" sig="containsSphereButtom(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L543" sourceLabel="Frustum.ts:543" />

Checks sphere intersection with the bottom frustum plane only.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere is not clipped by the bottom plane.

<MemberHeading id="containssphere" depth="3" name="containsSphere" sig="containsSphere(sphere: Sphere): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L555" sourceLabel="Frustum.ts:555" />

Returns true if the sphere is inside the frustum.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Bounding sphere.

**Returns**

- `boolean` — `true` when the sphere is inside.

<MemberHeading id="containssphere2" depth="3" name="containsSphere2" sig="containsSphere2(center: Vec3, radius: number): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L573" sourceLabel="Frustum.ts:573" />

Returns true if the sphere is inside the frustum.

**Parameters**

- `center` ([Vec3](/vec3)) — Sphere center.
- `radius` (number) — Sphere radius.

**Returns**

- `boolean` — `true` when the sphere is inside.

<MemberHeading id="containsbox" depth="3" name="containsBox" sig="containsBox(box: Box): boolean" />

<MemberMeta sourceHref="/source/camera/frustum-ts/#L589" sourceLabel="Frustum.ts:589" />

Returns true if the box intersects or is inside the frustum.

**Parameters**

- `box` ([Box](/box)) — Bounding box.

**Returns**

- `boolean` — `true` when the box is not fully outside.
