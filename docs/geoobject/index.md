---
title: GeoObject
kind: class
longname: GeoObject
description: Represents 3D object on the the globe or 3d space
---

# GeoObject

<SourceLink href="/source/entity/geoobject/geoobject-ts/#L51" label="GeoObject.ts:51" />

Represents 3D object on the the globe or 3d space

---

## Constructor

<Signature code="new GeoObject(options: IGeoObjectParams): GeoObject" />

**Parameters**

- `options` ([IGeoObjectParams](/igeoobjectparams)) — Geo object parameters:
  - `options.object3d` (Object3d, optional) — 3D object associated with the geo object.
  - `options.objSrc` (string, optional) — Source url of the 3D object.
  - `options.tag` (string, optional) — Unique instancing drawing identifier tag.
  - `options.position` ([Vec3](/vec3) | NumberArray3, optional) — Position in Cartesian coordinates.
  - `options.scale` (number | [Vec3](/vec3) | NumberArray3, optional, default: 1) — Scale of the object.
  - `options.translate` ([Vec3](/vec3) | NumberArray3, optional) — Translation offset.
  - `options.color` ([Vec4](/vec4) | NumberArray4 | string, optional) — RGBA color or HTML color string.
  - `options.visibility` (boolean, optional, default: true) — Visibility flag.

---

## Instance Methods

<MemberHeading id="getposition" depth="3" name="getPosition" sig="getPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L164" sourceLabel="GeoObject.ts:164" />

Gets the position of the geo object.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(a: number)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L217" sourceLabel="GeoObject.ts:217" />

Sets the opacity of the geo object.

**Parameters**

- `a` (number) — Opacity value (0 to 1).

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L226" sourceLabel="GeoObject.ts:226" />

Gets the opacity of the geo object.

**Returns**

- `number`

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(r: number, g: number, b: number, a?: number)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L237" sourceLabel="GeoObject.ts:237" />

Sets the color of the geo object.

**Parameters**

- `r` (number) — Red component.
- `g` (number) — Green component.
- `b` (number) — Blue component.
- `a` (number, optional) — Alpha component.

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec3 | Vec4)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L250" sourceLabel="GeoObject.ts:250" />

Sets color.

**Parameters**

- `color` ([Vec3](/vec3) | [Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L263" sourceLabel="GeoObject.ts:263" />

Sets geo object visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L277" sourceLabel="GeoObject.ts:277" />

Returns geo object visibility.

**Returns**

- `boolean`

<MemberHeading id="setposition" depth="3" name="setPosition" sig="setPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L288" sourceLabel="GeoObject.ts:288" />

Sets geo object position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setposition3v" depth="3" name="setPosition3v" sig="setPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L314" sourceLabel="GeoObject.ts:314" />

Sets geo object position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="setobject" depth="3" name="setObject" sig="setObject(object: Object3d)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L322" sourceLabel="GeoObject.ts:322" />

Sets Object3d for the object

**Parameters**

- `object` (Object3d)

<MemberHeading id="setobjectsrc" depth="3" name="setObjectSrc" sig="setObjectSrc(src: string)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L330" sourceLabel="GeoObject.ts:330" />

Sets the object url source.

**Parameters**

- `src` (string)

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L339" sourceLabel="GeoObject.ts:339" />

Sets object HTML color.

**Parameters**

- `color` (string)

<MemberHeading id="setscale" depth="3" name="setScale" sig="setScale(scale: number)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L348" sourceLabel="GeoObject.ts:348" />

Sets scales.

**Parameters**

- `scale` (number)

<MemberHeading id="setscale3v" depth="3" name="setScale3v" sig="setScale3v(scale: Vec3)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L358" sourceLabel="GeoObject.ts:358" />

Sets X, Y, Z axis scales

**Parameters**

- `scale` ([Vec3](/vec3))

<MemberHeading id="getscale" depth="3" name="getScale" sig="getScale(): Vec3" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L368" sourceLabel="GeoObject.ts:368" />

Gets scale.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setlocalposition3v" depth="3" name="setLocalPosition3v" sig="setLocalPosition3v(localPosition: Vec3)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L385" sourceLabel="GeoObject.ts:385" />

Sets local offset position.

**Parameters**

- `localPosition` ([Vec3](/vec3))

<MemberHeading id="getlocalposition" depth="3" name="getLocalPosition" sig="getLocalPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L395" sourceLabel="GeoObject.ts:395" />

Gets local offset position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L403" sourceLabel="GeoObject.ts:403" />

Removes the geo object from the handler.

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L413" sourceLabel="GeoObject.ts:413" />

Sets billboard picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking color.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(qRot: Quat)" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L422" sourceLabel="GeoObject.ts:422" />

Sets the rotation quaternion.

**Parameters**

- `qRot` ([Quat](/quat)) — Rotation quaternion.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L433" sourceLabel="GeoObject.ts:433" />

Returns orientation quaternion.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="updaterotation" depth="3" name="updateRotation" sig="updateRotation()" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L440" sourceLabel="GeoObject.ts:440" />

Update object rotation

<MemberHeading id="getdirection" depth="3" name="getDirection" sig="getDirection(): Vec3" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L449" sourceLabel="GeoObject.ts:449" />

Returns object direction

**Returns**

- [`Vec3`](/vec3)

## Instance Fields

<MemberHeading id="tag" depth="3" name="tag" sig="tag" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L155" sourceLabel="GeoObject.ts:155" />

Gets the unique tag of the geo object.

**Returns**

- `string`

<MemberHeading id="object3d" depth="3" name="object3d" sig="object3d" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L173" sourceLabel="GeoObject.ts:173" />

Gets the 3D object associated with this geo object.

**Returns**

- `Object3d`

<MemberHeading id="vertices" depth="3" name="vertices" sig="vertices" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L182" sourceLabel="GeoObject.ts:182" />

Gets geometry mesh vertices.

**Returns**

- `Array.<number>`

<MemberHeading id="normals" depth="3" name="normals" sig="normals" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L191" sourceLabel="GeoObject.ts:191" />

Gets geometry mesh normals.

**Returns**

- `Array.<number>`

<MemberHeading id="texcoords" depth="3" name="texCoords" sig="texCoords" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L200" sourceLabel="GeoObject.ts:200" />

Gets geometry mesh texture coordinates.

**Returns**

- `Array.<number>`

<MemberHeading id="indices" depth="3" name="indices" sig="indices" />

<MemberMeta sourceHref="/source/entity/geoobject/geoobject-ts/#L209" sourceLabel="GeoObject.ts:209" />

Gets geometry mesh indices.

**Returns**

- `Array.<number>`
