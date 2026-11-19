---
title: BaseBillboard
kind: class
longname: BaseBillboard
description: Base prototype for billboard and label classes.
---

# BaseBillboard

<SourceLink href="/source/entity/billboard/basebillboard-ts/#L34" label="BaseBillboard.ts:34" />

Base prototype for billboard and label classes.

---

## Constructor

<Signature code="new BaseBillboard(options?: Object): BaseBillboard" />

**Parameters**

- `options` (Object, optional) — Options:
  - `options.position` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard position.
  - `options.rotation` (number, optional) — Screen angle rotation.
  - `options.color` ([Vec4](/vec4) | string | Array.\<number>, optional) — Billboard color.
  - `options.alignedAxis` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard aligned vector.
  - `options.offset` ([Vec2](/vec2) | Array.\<number>, optional) — Billboard center screen offset.
  - `options.visibility` (boolean, optional) — Visibility.
  - `options.scale` (number, optional) — Screen scale. Doesn't affect the offset.

---

## Instance Methods

<MemberHeading id="setposition" depth="3" name="setPosition" sig="setPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L162" sourceLabel="BaseBillboard.ts:162" />

Sets billboard position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setposition3v" depth="3" name="setPosition3v" sig="setPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L182" sourceLabel="BaseBillboard.ts:182" />

Sets billboard position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="setrtcposition" depth="3" name="_setRTCPosition" sig="_setRTCPosition()" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L201" sourceLabel="BaseBillboard.ts:201" />

Splits the position relative to the handler center into the high and low parts.

<MemberHeading id="updatertcposition" depth="3" name="updateRTCPosition" sig="updateRTCPosition()" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L213" sourceLabel="BaseBillboard.ts:213" />

Updates the position relative to the handler center, when the center is changed.

<MemberHeading id="getposition" depth="3" name="getPosition" sig="getPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L225" sourceLabel="BaseBillboard.ts:225" />

Returns billboard position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setoffset" depth="3" name="setOffset" sig="setOffset(x: number, y: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L235" sourceLabel="BaseBillboard.ts:235" />

Sets screen space offset.

**Parameters**

- `x` (number) — X offset.
- `y` (number) — Y offset.

<MemberHeading id="setoffset2v" depth="3" name="setOffset2v" sig="setOffset2v(offset: Vec2)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L250" sourceLabel="BaseBillboard.ts:250" />

Sets screen space offset.

**Parameters**

- `offset` ([Vec2](/vec2)) — Offset size.

<MemberHeading id="getoffset" depth="3" name="getOffset" sig="getOffset(): Vec2" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L259" sourceLabel="BaseBillboard.ts:259" />

Returns billboard screen space offset size.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rotation: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L268" sourceLabel="BaseBillboard.ts:268" />

Sets billboard screen space rotation in radians.

**Parameters**

- `rotation` (number) — Screen space rotation in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L284" sourceLabel="BaseBillboard.ts:284" />

Gets screen space rotation.

**Returns**

- `number`

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(a: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L293" sourceLabel="BaseBillboard.ts:293" />

Sets billboard opacity.

**Parameters**

- `a` (number) — Billboard opacity.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L309" sourceLabel="BaseBillboard.ts:309" />

Returns billboard opacity, the color alpha value.

**Returns**

- `number`

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(r: number, g: number, b: number, a: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L321" sourceLabel="BaseBillboard.ts:321" />

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `r` (number) — Red.
- `g` (number) — Green.
- `b` (number) — Blue.
- `a` (number) — Alpha.

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec4)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L340" sourceLabel="BaseBillboard.ts:340" />

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `color` ([Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L349" sourceLabel="BaseBillboard.ts:349" />

Sets billboard color.

**Parameters**

- `color` (string) — HTML style color.

<MemberHeading id="getcolor" depth="3" name="getColor" sig="getColor(): Vec4" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L358" sourceLabel="BaseBillboard.ts:358" />

Returns RGBA color.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L367" sourceLabel="BaseBillboard.ts:367" />

Sets billboard visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L383" sourceLabel="BaseBillboard.ts:383" />

Returns billboard visibility.

**Returns**

- `boolean`

<MemberHeading id="setalignedaxis" depth="3" name="setAlignedAxis" sig="setAlignedAxis(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L394" sourceLabel="BaseBillboard.ts:394" />

Sets billboard cartesian aligned vector.

**Parameters**

- `x` (number) — Aligned vector X coordinate.
- `y` (number) — Aligned vector Y coordinate.
- `z` (number) — Aligned vector Z coordinate.

<MemberHeading id="setalignedaxis3v" depth="3" name="setAlignedAxis3v" sig="setAlignedAxis3v(alignedAxis: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L410" sourceLabel="BaseBillboard.ts:410" />

Sets billboard aligned vector.

**Parameters**

- `alignedAxis` ([Vec3](/vec3)) — Align direction.

<MemberHeading id="getalignedaxis" depth="3" name="getAlignedAxis" sig="getAlignedAxis(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L419" sourceLabel="BaseBillboard.ts:419" />

Returns aligned vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L427" sourceLabel="BaseBillboard.ts:427" />

Removes billboard from handler.

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L437" sourceLabel="BaseBillboard.ts:437" />

Sets billboard picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking color.

<MemberHeading id="setscale" depth="3" name="setScale" sig="setScale(scale: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L450" sourceLabel="BaseBillboard.ts:450" />

Sets screen scale. Size getters and the offset stay the same.

**Parameters**

- `scale` (number) — Scale.

<MemberHeading id="getscale" depth="3" name="getScale" sig="getScale(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L460" sourceLabel="BaseBillboard.ts:460" />

Returns screen scale.

**Returns**

- `number`
