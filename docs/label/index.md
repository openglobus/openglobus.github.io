---
title: Label
kind: class
longname: Label
description: Billboard text label.
---

# Label

**Extends:&#x20;**[`BaseBillboard`](/basebillboard)

<SourceLink href="/source/entity/label/label-ts/#L66" label="Label.ts:66" />

Billboard text label.

---

## Constructor

<Signature code="new Label(options?: Object): Label" />

**Parameters**

- `options` (Object, optional) — Label options:
  - `options.position` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard spatial position.
  - `options.rotation` (number, optional) — Screen angle rotation.
  - `options.color` ([Vec4](/vec4) | string | Array.\<number>, optional) — Billboard color.
  - `options.alignedAxis` ([Vec3](/vec3) | Array.\<number>, optional) — Billboard aligned vector.
  - `options.offset` ([Vec2](/vec2) | Array.\<number>, optional) — Billboard center screen offset.
  - `options.visibility` (boolean, optional) — Visibility.
  - `options.text` (string, optional) — Text string.
  - `options.face` (string, optional) — HTML5 font face.
  - `options.size` (number, optional) — Font size in pixels.
  - `options.scale` (number, optional) — Screen scale. Doesn't affect the font size value.
  - `options.style` (string, optional) — HTML5 font style. Example 'normal', 'italic'.
  - `options.weight` (string, optional) — HTML5 font weight. Example 'normal', 'bold'.
  - `options.outline` (number, optional) — Text outline width in pixels. 0 - no outline. Default 0.
  - `options.outlineColor` ([Vec4](/vec4) | string | Array.\<number>, optional) — Outline color.
  - `options.align` (string, optional) — Text horizontal align: "left", "right" and "center".

---

## Instance Methods

<MemberHeading id="settext" depth="3" name="setText" sig="setText(text: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L167" sourceLabel="Label.ts:167" />

Sets label text.

**Parameters**

- `text` (string) — Text string. Text length cannot exceed the `labelHandler._maxLetters` value.

<MemberHeading id="setletterspacing" depth="3" name="setLetterSpacing" sig="setLetterSpacing(letterSpacing: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L186" sourceLabel="Label.ts:186" />

Sets text letter spacing.

**Parameters**

- `letterSpacing` (number) — Letter spacing.

<MemberHeading id="getletterspacing" depth="3" name="getLetterSpacing" sig="getLetterSpacing()" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L204" sourceLabel="Label.ts:204" />

Returns label text letter spacing.

<MemberHeading id="gettext" depth="3" name="getText" sig="getText(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L236" sourceLabel="Label.ts:236" />

Gets current text string.

**Returns**

- `string`

<MemberHeading id="setalign" depth="3" name="setAlign" sig="setAlign(align: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L245" sourceLabel="Label.ts:245" />

Sets label text align. Could be center, left or right. Left is default.

**Parameters**

- `align` (string) — Text align.

<MemberHeading id="getalign" depth="3" name="getAlign" sig="getAlign(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L267" sourceLabel="Label.ts:267" />

Gets label text current alignment.

**Returns**

- `string`

<MemberHeading id="setface" depth="3" name="setFace" sig="setFace(face: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L276" sourceLabel="Label.ts:276" />

Sets font face family.

**Parameters**

- `face` (string) — Font face family.

<MemberHeading id="getface" depth="3" name="getFace" sig="getFace(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L286" sourceLabel="Label.ts:286" />

Gets current font face.

**Returns**

- `string`

<MemberHeading id="setsize" depth="3" name="setSize" sig="setSize(size: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L295" sourceLabel="Label.ts:295" />

Sets label font size in pixels.

**Parameters**

- `size` (number) — Label size in pixels.

<MemberHeading id="getsize" depth="3" name="getSize" sig="getSize(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L315" sourceLabel="Label.ts:315" />

Gets label size in pixels.

**Returns**

- `number`

<MemberHeading id="setoutline" depth="3" name="setOutline" sig="setOutline(outline: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L326" sourceLabel="Label.ts:326" />

Sets text outline border width in pixels. Where 0 - is no outline. The visible width is capped by the font atlas distance field range, which grows with the label font size.

**Parameters**

- `outline` (number) — Text outline width in pixels.

<MemberHeading id="getoutline" depth="3" name="getOutline" sig="getOutline(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L340" sourceLabel="Label.ts:340" />

Gets text current outline width in pixels.

**Returns**

- `number`

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(a: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L349" sourceLabel="Label.ts:349" />

**Overrides:&#x20;**`BaseBillboard#setOpacity`

Sets label opacity.

**Parameters**

- `a` (number) — Label opacity.

<MemberHeading id="setoutlinecolor" depth="3" name="setOutlineColor" sig="setOutlineColor(r: number, g: number, b: number, a: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L362" sourceLabel="Label.ts:362" />

Sets text outline color.

**Parameters**

- `r` (number) — Red.
- `g` (number) — Green.
- `b` (number) — Blue.
- `a` (number) — Alpha.

<MemberHeading id="setoutlinecolor4v" depth="3" name="setOutlineColor4v" sig="setOutlineColor4v(rgba: Vec4)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L386" sourceLabel="Label.ts:386" />

Sets text outline color.

**Parameters**

- `rgba` ([Vec4](/vec4)) — Color vector.

<MemberHeading id="setoutlinecolorhtml" depth="3" name="setOutlineColorHTML" sig="setOutlineColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L395" sourceLabel="Label.ts:395" />

Sets text outline color HTML string.

**Parameters**

- `color` (string) — HTML string color.

<MemberHeading id="getoutlinecolor" depth="3" name="getOutlineColor" sig="getOutlineColor(): Vec4" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L404" sourceLabel="Label.ts:404" />

Gets outline color vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="setoutlineopacity" depth="3" name="setOutlineOpacity" sig="setOutlineOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L413" sourceLabel="Label.ts:413" />

Sets outline opacity. Actually outline color alpha value.

**Parameters**

- `opacity` (number) — Outline opacity.

<MemberHeading id="getoutlineopacity" depth="3" name="getOutlineOpacity" sig="getOutlineOpacity(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L429" sourceLabel="Label.ts:429" />

Gets outline opacity value.

**Returns**

- `number`

<MemberHeading id="update" depth="3" name="update" sig="update()" />

<MemberMeta badges="async" sourceHref="/source/entity/label/label-ts/#L437" sourceLabel="Label.ts:437" />

Updates label parameters.

<MemberHeading id="assignfontatlas" depth="3" name="assignFontAtlas" sig="assignFontAtlas(fontAtlas: FontAtlas)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L466" sourceLabel="Label.ts:466" />

Assigns font atlas and update.

**Parameters**

- `fontAtlas` (FontAtlas) — Font atlas.

<MemberHeading id="setposition" depth="3" name="setPosition" sig="setPosition(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L162" sourceLabel="BaseBillboard.ts:162" />

_Inherited from `BaseBillboard#setPosition`_

**Overrides:&#x20;**`BaseBillboard#setPosition`

Sets billboard position.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setposition3v" depth="3" name="setPosition3v" sig="setPosition3v(position: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L182" sourceLabel="BaseBillboard.ts:182" />

_Inherited from `BaseBillboard#setPosition3v`_

**Overrides:&#x20;**`BaseBillboard#setPosition3v`

Sets billboard position.

**Parameters**

- `position` ([Vec3](/vec3)) — Cartesian coordinates.

<MemberHeading id="getposition" depth="3" name="getPosition" sig="getPosition(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L202" sourceLabel="BaseBillboard.ts:202" />

_Inherited from `BaseBillboard#getPosition`_

**Overrides:&#x20;**`BaseBillboard#getPosition`

Returns billboard position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setoffset" depth="3" name="setOffset" sig="setOffset(x: number, y: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L212" sourceLabel="BaseBillboard.ts:212" />

_Inherited from `BaseBillboard#setOffset`_

**Overrides:&#x20;**`BaseBillboard#setOffset`

Sets screen space offset.

**Parameters**

- `x` (number) — X offset.
- `y` (number) — Y offset.

<MemberHeading id="setoffset2v" depth="3" name="setOffset2v" sig="setOffset2v(offset: Vec2)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L227" sourceLabel="BaseBillboard.ts:227" />

_Inherited from `BaseBillboard#setOffset2v`_

**Overrides:&#x20;**`BaseBillboard#setOffset2v`

Sets screen space offset.

**Parameters**

- `offset` ([Vec2](/vec2)) — Offset size.

<MemberHeading id="getoffset" depth="3" name="getOffset" sig="getOffset(): Vec2" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L236" sourceLabel="BaseBillboard.ts:236" />

_Inherited from `BaseBillboard#getOffset`_

**Overrides:&#x20;**`BaseBillboard#getOffset`

Returns billboard screen space offset size.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rotation: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L245" sourceLabel="BaseBillboard.ts:245" />

_Inherited from `BaseBillboard#setRotation`_

**Overrides:&#x20;**`BaseBillboard#setRotation`

Sets billboard screen space rotation in radians.

**Parameters**

- `rotation` (number) — Screen space rotation in radians.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L261" sourceLabel="BaseBillboard.ts:261" />

_Inherited from `BaseBillboard#getRotation`_

**Overrides:&#x20;**`BaseBillboard#getRotation`

Gets screen space rotation.

**Returns**

- `number`

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L286" sourceLabel="BaseBillboard.ts:286" />

_Inherited from `BaseBillboard#getOpacity`_

**Overrides:&#x20;**`BaseBillboard#getOpacity`

Returns billboard opacity, the color alpha value.

**Returns**

- `number`

<MemberHeading id="setcolor" depth="3" name="setColor" sig="setColor(r: number, g: number, b: number, a: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L298" sourceLabel="BaseBillboard.ts:298" />

_Inherited from `BaseBillboard#setColor`_

**Overrides:&#x20;**`BaseBillboard#setColor`

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `r` (number) — Red.
- `g` (number) — Green.
- `b` (number) — Blue.
- `a` (number) — Alpha.

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec4)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L317" sourceLabel="BaseBillboard.ts:317" />

_Inherited from `BaseBillboard#setColor4v`_

**Overrides:&#x20;**`BaseBillboard#setColor4v`

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `color` ([Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L326" sourceLabel="BaseBillboard.ts:326" />

_Inherited from `BaseBillboard#setColorHTML`_

**Overrides:&#x20;**`BaseBillboard#setColorHTML`

Sets billboard color.

**Parameters**

- `color` (string) — HTML style color.

<MemberHeading id="getcolor" depth="3" name="getColor" sig="getColor(): Vec4" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L335" sourceLabel="BaseBillboard.ts:335" />

_Inherited from `BaseBillboard#getColor`_

**Overrides:&#x20;**`BaseBillboard#getColor`

Returns RGBA color.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L344" sourceLabel="BaseBillboard.ts:344" />

_Inherited from `BaseBillboard#setVisibility`_

**Overrides:&#x20;**`BaseBillboard#setVisibility`

Sets billboard visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L360" sourceLabel="BaseBillboard.ts:360" />

_Inherited from `BaseBillboard#getVisibility`_

**Overrides:&#x20;**`BaseBillboard#getVisibility`

Returns billboard visibility.

**Returns**

- `boolean`

<MemberHeading id="setalignedaxis" depth="3" name="setAlignedAxis" sig="setAlignedAxis(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L371" sourceLabel="BaseBillboard.ts:371" />

_Inherited from `BaseBillboard#setAlignedAxis`_

**Overrides:&#x20;**`BaseBillboard#setAlignedAxis`

Sets billboard cartesian aligned vector.

**Parameters**

- `x` (number) — Aligned vector X coordinate.
- `y` (number) — Aligned vector Y coordinate.
- `z` (number) — Aligned vector Z coordinate.

<MemberHeading id="setalignedaxis3v" depth="3" name="setAlignedAxis3v" sig="setAlignedAxis3v(alignedAxis: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L387" sourceLabel="BaseBillboard.ts:387" />

_Inherited from `BaseBillboard#setAlignedAxis3v`_

**Overrides:&#x20;**`BaseBillboard#setAlignedAxis3v`

Sets billboard aligned vector.

**Parameters**

- `alignedAxis` ([Vec3](/vec3)) — Align direction.

<MemberHeading id="getalignedaxis" depth="3" name="getAlignedAxis" sig="getAlignedAxis(): Vec3" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L396" sourceLabel="BaseBillboard.ts:396" />

_Inherited from `BaseBillboard#getAlignedAxis`_

**Overrides:&#x20;**`BaseBillboard#getAlignedAxis`

Returns aligned vector.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L404" sourceLabel="BaseBillboard.ts:404" />

_Inherited from `BaseBillboard#remove`_

**Overrides:&#x20;**`BaseBillboard#remove`

Removes billboard from handler.

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L414" sourceLabel="BaseBillboard.ts:414" />

_Inherited from `BaseBillboard#setPickingColor3v`_

**Overrides:&#x20;**`BaseBillboard#setPickingColor3v`

Sets billboard picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking color.

<MemberHeading id="setscale" depth="3" name="setScale" sig="setScale(scale: number)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L427" sourceLabel="BaseBillboard.ts:427" />

_Inherited from `BaseBillboard#setScale`_

**Overrides:&#x20;**`BaseBillboard#setScale`

Sets screen scale. Size getters and the offset stay the same.

**Parameters**

- `scale` (number) — Scale.

<MemberHeading id="getscale" depth="3" name="getScale" sig="getScale(): number" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboard-ts/#L437" sourceLabel="BaseBillboard.ts:437" />

_Inherited from `BaseBillboard#getScale`_

**Overrides:&#x20;**`BaseBillboard#getScale`

Returns screen scale.

**Returns**

- `number`

## Instance Fields

<MemberHeading id="isrtl" depth="3" name="isRtl" sig="isRtl: boolean" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L213" sourceLabel="Label.ts:213" />

Right-to-left text direction.
