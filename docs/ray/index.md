---
title: Ray
kind: class
longname: Ray
description: Ray class.
---

# Ray

<SourceLink href="/source/entity/ray/ray-ts/#L36" label="Ray.ts:36" />

Ray class.

---

## Constructor

<Signature code="new Ray(options?: Object): Ray" />

**Parameters**

- `options` (Object, optional) — Options:
  - `options.startPosition` ([Vec3](/vec3) | Array.\<number>, optional) — Ray start point position.
  - `options.endPosition` ([Vec3](/vec3) | Array.\<number>, optional) — Ray end point position.
  - `options.startColor` ([Vec3](/vec3) | Array.\<number>, optional) — Ray start point color.
  - `options.endColor` ([Vec3](/vec3) | Array.\<number>, optional) — Ray end point color.
  - `options.opacity` (number, optional, default: "1.0") — Ray opacity multiplier.
  - `options.visibility` (boolean, optional) — Visibility.

---

## Instance Methods

<MemberHeading id="setstartposition" depth="3" name="setStartPosition" sig="setStartPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L166" sourceLabel="Ray.ts:166" />

Sets ray start position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setsrc" depth="3" name="setSrc" sig="setSrc(src: string)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L184" sourceLabel="Ray.ts:184" />

Sets image template url source.

**Parameters**

- `src` (string) — Image url.

<MemberHeading id="setimage" depth="3" name="setImage" sig="setImage(image: Object)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L199" sourceLabel="Ray.ts:199" />

Sets image template object.

**Parameters**

- `image` (Object) — JavaScript image object.

<MemberHeading id="setstartposition3v" depth="3" name="setStartPosition3v" sig="setStartPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L270" sourceLabel="Ray.ts:270" />

Sets ray start position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="setendposition" depth="3" name="setEndPosition" sig="setEndPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L286" sourceLabel="Ray.ts:286" />

Sets ray end position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setendposition3v" depth="3" name="setEndPosition3v" sig="setEndPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L300" sourceLabel="Ray.ts:300" />

Sets ray end position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="getstartposition" depth="3" name="getStartPosition" sig="getStartPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L371" sourceLabel="Ray.ts:371" />

Returns ray start position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="getendposition" depth="3" name="getEndPosition" sig="getEndPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L380" sourceLabel="Ray.ts:380" />

Returns ray end position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L389" sourceLabel="Ray.ts:389" />

Sets visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L399" sourceLabel="Ray.ts:399" />

Sets ray opacity.

**Parameters**

- `opacity` (number) — Opacity value in range \[0..1].

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L411" sourceLabel="Ray.ts:411" />

Returns ray opacity multiplier.

**Returns**

- `number`

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L420" sourceLabel="Ray.ts:420" />

Returns visibility.

**Returns**

- `boolean`

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L428" sourceLabel="Ray.ts:428" />

Remove from handler.

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/ray/ray-ts/#L438" sourceLabel="Ray.ts:438" />

Sets picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking color.

<MemberHeading id="set" depth="3" name="set" sig="set(origin: Vec3, direction: Vec3): Ray" />

<MemberMeta sourceHref="/source/math/ray-ts/#L61" sourceLabel="Ray.ts:61" />

Sets a ray parameters.

**Parameters**

- `origin` ([Vec3](/vec3)) — The origin of the ray.
- `direction` ([Vec3](/vec3)) — The direction of the ray.

**Returns**

- [`Ray`](/ray)

<MemberHeading id="getpoint" depth="3" name="getPoint" sig="getPoint(distance: number): Vec3" />

<MemberMeta sourceHref="/source/math/ray-ts/#L72" sourceLabel="Ray.ts:72" />

Returns a point on the ray at the given distance.

**Parameters**

- `distance` (number) — Distance from the origin along the ray.

**Returns**

- [`Vec3`](/vec3) — The point at the given distance.

<MemberHeading id="hittriangleres" depth="3" name="hitTriangleRes" sig="hitTriangleRes(v0: Vec3, v1: Vec3, v2: Vec3, res: Vec3): number" />

<MemberMeta sourceHref="/source/math/ray-ts/#L86" sourceLabel="Ray.ts:86" />

Returns ray hit a triangle result.

**Parameters**

- `v0` ([Vec3](/vec3)) — First triangle corner coordinate.
- `v1` ([Vec3](/vec3)) — Second triangle corner coordinate.
- `v2` ([Vec3](/vec3)) — Third triangle corner coordinate.
- `res` ([Vec3](/vec3)) — Hit point object pointer that stores hit result.

**Returns**

- `number`

<MemberHeading id="hitplaneres" depth="3" name="hitPlaneRes" sig="hitPlaneRes(plane: Plane, res: Vec3): number" />

<MemberMeta sourceHref="/source/math/ray-ts/#L186" sourceLabel="Ray.ts:186" />

Finds the intersection of the ray with a plane.

**Parameters**

- `plane` ([Plane](/plane)) — The plane to intersect with.
- `res` ([Vec3](/vec3)) — Output intersection point when result is `Ray.INSIDE`.

**Returns**

- `number` — Intersection status: `Ray.INSIDE`, `Ray.OUTSIDE`, or `Ray.AWAY`.

<MemberHeading id="hitsphere" depth="3" name="hitSphere" sig="hitSphere(sphere: Sphere): Vec3" />

<MemberMeta sourceHref="/source/math/ray-ts/#L210" sourceLabel="Ray.ts:210" />

Returns a ray hit sphere coordinates. If there isn't hit returns null.

**Parameters**

- `sphere` ([Sphere](/sphere)) — Sphere object.

**Returns**

- [`Vec3`](/vec3)

## Other

<MemberHeading id="outside" depth="3" name="OUTSIDE" sig="OUTSIDE" />

<MemberMeta badges="static" sourceHref="/source/math/ray-ts/#L37" sourceLabel="Ray.ts:37" />

<MemberHeading id="inside" depth="3" name="INSIDE" sig="INSIDE" />

<MemberMeta badges="static" sourceHref="/source/math/ray-ts/#L42" sourceLabel="Ray.ts:42" />

<MemberHeading id="inplane" depth="3" name="INPLANE" sig="INPLANE" />

<MemberMeta badges="static" sourceHref="/source/math/ray-ts/#L47" sourceLabel="Ray.ts:47" />

<MemberHeading id="away" depth="3" name="AWAY" sig="AWAY" />

<MemberMeta badges="static" sourceHref="/source/math/ray-ts/#L52" sourceLabel="Ray.ts:52" />
