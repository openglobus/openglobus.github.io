---
title: Billboard
kind: class
longname: Billboard
description: Represents basic quad billboard image.
---

# Billboard

**Extends:&#x20;**[`BaseBillboard`](/basebillboard)

<SourceLink href="/source/entity/billboard/billboard-ts/#L34" label="Billboard.ts:34" />

Represents basic quad billboard image.

---

## Constructor

<Signature code="new Billboard(options?: Object): Billboard" />

**Parameters**

- `options` (Object, optional) — Options:
  - `options.position` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard spatial position.
  - `options.rotation` (number, optional) — Screen angle rotation.
  - `options.color` ([Vec4](/vec4) | string | Array.\<number>, optional) — Billboard color.
  - `options.alignedAxis` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard aligned vector.
  - `options.offset` ([Vec2](/vec2) | Array.\<number>, optional) — Billboard center screen offset.
  - `options.visibility` (boolean, optional) — Visibility.
  - `options.src` (string, optional) — Billboard image url source.
  - `options.image` (Image, optional) — Billboard image object.
  - `options.width` (number, optional) — Screen width.
  - `options.height` (number, optional) — Screen height.
  - `options.scale` (number, optional) — Billboard scale.

---

## Instance Methods

<MemberHeading id="setsrc" depth="3" name="setSrc" sig="setSrc(src: string)" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L107" sourceLabel="Billboard.ts:107" />

Sets billboard image url source.

**Parameters**

- `src` (string) — Image url.

<MemberHeading id="setimage" depth="3" name="setImage" sig="setImage(image: Object)" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L141" sourceLabel="Billboard.ts:141" />

Sets image object.

**Parameters**

- `image` (Object) — JavaScript image object.

<MemberHeading id="setsize" depth="3" name="setSize" sig="setSize(width: number, height: number)" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L155" sourceLabel="Billboard.ts:155" />

Sets billboard screen size in pixels.

**Parameters**

- `width` (number) — Billboard width.
- `height` (number) — Billboard height.

<MemberHeading id="getsize" depth="3" name="getSize" sig="getSize(): Object" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L181" sourceLabel="Billboard.ts:181" />

Returns billboard screen size.

**Returns**

- `Object`

<MemberHeading id="setwidth" depth="3" name="setWidth" sig="setWidth(width: number)" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L193" sourceLabel="Billboard.ts:193" />

Sets billboard screen width.

**Parameters**

- `width` (number) — Width.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L202" sourceLabel="Billboard.ts:202" />

Gets billboard screen width.

**Returns**

- `number`

<MemberHeading id="setheight" depth="3" name="setHeight" sig="setHeight(height: number)" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L211" sourceLabel="Billboard.ts:211" />

Sets billboard screen heigh.

**Parameters**

- `height` (number) — Height.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/entity/billboard/billboard-ts/#L220" sourceLabel="Billboard.ts:220" />

Gets billboard screen height.

**Returns**

- `number`

<MemberHeading id="setposition" depth="3" name="setPosition" sig="setPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L151" sourceLabel="BaseBillboard.ts:151" />

_Inherited from `BaseBillboard#setPosition`_

**Overrides:&#x20;**`BaseBillboard#setPosition`

Sets billboard position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setposition3v" depth="3" name="setPosition3v" sig="setPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L168" sourceLabel="BaseBillboard.ts:168" />

_Inherited from `BaseBillboard#setPosition3v`_

**Overrides:&#x20;**`BaseBillboard#setPosition3v`

Sets billboard position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="getposition" depth="3" name="getPosition" sig="getPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L185" sourceLabel="BaseBillboard.ts:185" />

_Inherited from `BaseBillboard#getPosition`_

**Overrides:&#x20;**`BaseBillboard#getPosition`

Returns billboard position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setoffset" depth="3" name="setOffset" sig="setOffset(x: number, y: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L195" sourceLabel="BaseBillboard.ts:195" />

_Inherited from `BaseBillboard#setOffset`_

**Overrides:&#x20;**`BaseBillboard#setOffset`

Sets screen space offset.

**Parameters**

- `x` (number) — X offset.
- `y` (number) — Y offset.

<MemberHeading id="setoffset2v" depth="3" name="setOffset2v" sig="setOffset2v(offset: Vec2)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L210" sourceLabel="BaseBillboard.ts:210" />

_Inherited from `BaseBillboard#setOffset2v`_

**Overrides:&#x20;**`BaseBillboard#setOffset2v`

Sets screen space offset.

**Parameters**

- `offset` ([Vec2](/vec2)) — Offset size.

<MemberHeading id="getoffset" depth="3" name="getOffset" sig="getOffset(): Vec2" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L219" sourceLabel="BaseBillboard.ts:219" />

_Inherited from `BaseBillboard#getOffset`_

**Overrides:&#x20;**`BaseBillboard#getOffset`

Returns billboard screen space offset size.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rotation: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L228" sourceLabel="BaseBillboard.ts:228" />

_Inherited from `BaseBillboard#setRotation`_

**Overrides:&#x20;**`BaseBillboard#setRotation`

Sets billboard screen space rotation in radians.

**Parameters**

- `rotation` (number) — Screen space rotation in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L244" sourceLabel="BaseBillboard.ts:244" />

_Inherited from `BaseBillboard#getRotation`_

**Overrides:&#x20;**`BaseBillboard#getRotation`

Gets screen space rotation.

**Returns**

- `number`

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(a: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L253" sourceLabel="BaseBillboard.ts:253" />

_Inherited from `BaseBillboard#setOpacity`_

**Overrides:&#x20;**`BaseBillboard#setOpacity`

Sets billboard opacity.

**Parameters**

- `a` (number) — Billboard opacity.

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(r: number, g: number, b: number, a: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L272" sourceLabel="BaseBillboard.ts:272" />

_Inherited from `BaseBillboard#setColor`_

**Overrides:&#x20;**`BaseBillboard#setColor`

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `r` (number) — Red.
- `g` (number) — Green.
- `b` (number) — Blue.
- `a` (number) — Alpha.

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec4)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L291" sourceLabel="BaseBillboard.ts:291" />

_Inherited from `BaseBillboard#setColor4v`_

**Overrides:&#x20;**`BaseBillboard#setColor4v`

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `color` ([Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L300" sourceLabel="BaseBillboard.ts:300" />

_Inherited from `BaseBillboard#setColorHTML`_

**Overrides:&#x20;**`BaseBillboard#setColorHTML`

Sets billboard color.

**Parameters**

- `color` (string) — HTML style color.

<MemberHeading id="getcolor" depth="3" name="getColor" sig="getColor(): Vec4" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L309" sourceLabel="BaseBillboard.ts:309" />

_Inherited from `BaseBillboard#getColor`_

**Overrides:&#x20;**`BaseBillboard#getColor`

Returns RGBA color.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L318" sourceLabel="BaseBillboard.ts:318" />

_Inherited from `BaseBillboard#setVisibility`_

**Overrides:&#x20;**`BaseBillboard#setVisibility`

Sets billboard visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L334" sourceLabel="BaseBillboard.ts:334" />

_Inherited from `BaseBillboard#getVisibility`_

**Overrides:&#x20;**`BaseBillboard#getVisibility`

Returns billboard visibility.

**Returns**

- `boolean`

<MemberHeading id="setalignedaxis" depth="3" name="setAlignedAxis" sig="setAlignedAxis(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L345" sourceLabel="BaseBillboard.ts:345" />

_Inherited from `BaseBillboard#setAlignedAxis`_

**Overrides:&#x20;**`BaseBillboard#setAlignedAxis`

Sets billboard cartesian aligned vector.

**Parameters**

- `x` (number) — Aligned vector X coordinate.
- `y` (number) — Aligned vector Y coordinate.
- `z` (number) — Aligned vector Z coordinate.

<MemberHeading id="setalignedaxis3v" depth="3" name="setAlignedAxis3v" sig="setAlignedAxis3v(alignedAxis: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L361" sourceLabel="BaseBillboard.ts:361" />

_Inherited from `BaseBillboard#setAlignedAxis3v`_

**Overrides:&#x20;**`BaseBillboard#setAlignedAxis3v`

Sets billboard aligned vector.

**Parameters**

- `alignedAxis` ([Vec3](/vec3)) — Align direction.

<MemberHeading id="getalignedaxis" depth="3" name="getAlignedAxis" sig="getAlignedAxis(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L370" sourceLabel="BaseBillboard.ts:370" />

_Inherited from `BaseBillboard#getAlignedAxis`_

**Overrides:&#x20;**`BaseBillboard#getAlignedAxis`

Returns aligned vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L378" sourceLabel="BaseBillboard.ts:378" />

_Inherited from `BaseBillboard#remove`_

**Overrides:&#x20;**`BaseBillboard#remove`

Removes billboard from handler.

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L388" sourceLabel="BaseBillboard.ts:388" />

_Inherited from `BaseBillboard#setPickingColor3v`_

**Overrides:&#x20;**`BaseBillboard#setPickingColor3v`

Sets billboard picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking color.
