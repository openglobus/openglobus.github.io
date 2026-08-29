---
title: Label
kind: class
longname: Label
description: Billboard text label.
---

# Label

**Extends:&#x20;**[`BaseBillboard`](/basebillboard)

<SourceLink href="/source/entity/label/label-ts/#L65" label="Label.ts:65" />

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
  - `options.style` (string, optional) — HTML5 font style. Example 'normal', 'italic'.
  - `options.weight` (string, optional) — HTML5 font weight. Example 'normal', 'bold'.
  - `options.outline` (number, optional) — Text outline width in pixels. 0 - no outline. Default 0.
  - `options.outlineColor` ([Vec4](/vec4) | string | Array.\<number>, optional) — Outline color.
  - `options.align` (string, optional) — Text horizontal align: "left", "right" and "center".

---

## Instance Methods

<MemberHeading id="settext" depth="3" name="setText" sig="setText(text: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L166" sourceLabel="Label.ts:166" />

Sets label text.

**Parameters**

- `text` (string) — Text string. Text length cannot exceed the `labelHandler._maxLetters` value.

<MemberHeading id="setletterspacing" depth="3" name="setLetterSpacing" sig="setLetterSpacing(letterSpacing: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L185" sourceLabel="Label.ts:185" />

Sets text letter spacing.

**Parameters**

- `letterSpacing` (number) — Letter spacing.

<MemberHeading id="getletterspacing" depth="3" name="getLetterSpacing" sig="getLetterSpacing()" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L203" sourceLabel="Label.ts:203" />

Returns label text letter spacing.

<MemberHeading id="setrtl" depth="3" name="setRtl" sig="setRtl(isRTL: boolean)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L212" sourceLabel="Label.ts:212" />

Change text direction.

**Parameters**

- `isRTL` (boolean) — Text string.

<MemberHeading id="gettext" depth="3" name="getText" sig="getText(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L231" sourceLabel="Label.ts:231" />

Gets current text string.

**Returns**

- `string`

<MemberHeading id="setalign" depth="3" name="setAlign" sig="setAlign(align: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L240" sourceLabel="Label.ts:240" />

Sets label text align. Could be center, left or right. Left is default.

**Parameters**

- `align` (string) — Text align.

<MemberHeading id="getalign" depth="3" name="getAlign" sig="getAlign(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L262" sourceLabel="Label.ts:262" />

Gets label text current alignment.

**Returns**

- `string`

<MemberHeading id="setface" depth="3" name="setFace" sig="setFace(face: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L271" sourceLabel="Label.ts:271" />

Sets font face family.

**Parameters**

- `face` (string) — Font face family.

<MemberHeading id="getface" depth="3" name="getFace" sig="getFace(): string" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L281" sourceLabel="Label.ts:281" />

Gets current font face.

**Returns**

- `string`

<MemberHeading id="setsize" depth="3" name="setSize" sig="setSize(size: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L290" sourceLabel="Label.ts:290" />

Sets label font size in pixels.

**Parameters**

- `size` (number) — Label size in pixels.

<MemberHeading id="getsize" depth="3" name="getSize" sig="getSize(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L306" sourceLabel="Label.ts:306" />

Gets label size in pixels.

**Returns**

- `number`

<MemberHeading id="setoutline" depth="3" name="setOutline" sig="setOutline(outline: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L317" sourceLabel="Label.ts:317" />

Sets text outline border width in pixels. Where 0 - is no outline. The visible width is capped by the font atlas distance field range, which grows with the label font size.

**Parameters**

- `outline` (number) — Text outline width in pixels.

<MemberHeading id="getoutline" depth="3" name="getOutline" sig="getOutline(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L331" sourceLabel="Label.ts:331" />

Gets text current outline width in pixels.

**Returns**

- `number`

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(a: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L340" sourceLabel="Label.ts:340" />

**Overrides:&#x20;**`BaseBillboard#setOpacity`

Sets label opacity.

**Parameters**

- `a` (number) — Label opacity.

<MemberHeading id="setoutlinecolor" depth="3" name="setOutlineColor" sig="setOutlineColor(r: number, g: number, b: number, a: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L353" sourceLabel="Label.ts:353" />

Sets text outline color.

**Parameters**

- `r` (number) — Red.
- `g` (number) — Green.
- `b` (number) — Blue.
- `a` (number) — Alpha.

<MemberHeading id="setoutlinecolor4v" depth="3" name="setOutlineColor4v" sig="setOutlineColor4v(rgba: Vec4)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L377" sourceLabel="Label.ts:377" />

Sets text outline color.

**Parameters**

- `rgba` ([Vec4](/vec4)) — Color vector.

<MemberHeading id="setoutlinecolorhtml" depth="3" name="setOutlineColorHTML" sig="setOutlineColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L386" sourceLabel="Label.ts:386" />

Sets text outline color HTML string.

**Parameters**

- `color` (string) — HTML string color.

<MemberHeading id="getoutlinecolor" depth="3" name="getOutlineColor" sig="getOutlineColor(): Vec4" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L395" sourceLabel="Label.ts:395" />

Gets outline color vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="setoutlineopacity" depth="3" name="setOutlineOpacity" sig="setOutlineOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L404" sourceLabel="Label.ts:404" />

Sets outline opacity. Actually outline color alpha value.

**Parameters**

- `opacity` (number) — Outline opacity.

<MemberHeading id="getoutlineopacity" depth="3" name="getOutlineOpacity" sig="getOutlineOpacity(): number" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L420" sourceLabel="Label.ts:420" />

Gets outline opacity value.

**Returns**

- `number`

<MemberHeading id="update" depth="3" name="update" sig="update()" />

<MemberMeta badges="async" sourceHref="/source/entity/label/label-ts/#L428" sourceLabel="Label.ts:428" />

Updates label parameters.

<MemberHeading id="assignfontatlas" depth="3" name="assignFontAtlas" sig="assignFontAtlas(fontAtlas: FontAtlas)" />

<MemberMeta sourceHref="/source/entity/label/label-ts/#L457" sourceLabel="Label.ts:457" />

Assigns font atlas and update.

**Parameters**

- `fontAtlas` (FontAtlas) — Font atlas.

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
