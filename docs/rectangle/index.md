---
title: Rectangle
kind: class
longname: Rectangle
description: 2D Rectangle class.
---

# Rectangle

<SourceLink href="/source/rectangle-ts/#L9" label="Rectangle.ts:9" />

2D Rectangle class.

---

## Constructor

<Signature
  code="new Rectangle(
	left?: number,
	top?: number,
	right?: number,
	bottom?: number,
): Rectangle"
/>

**Parameters**

- `left` (number, optional) — Left coordinate. 0 - default.
- `top` (number, optional) — Top coordinate. 0 - default.
- `right` (number, optional) — Right coordinate. 0 - default.
- `bottom` (number, optional) — Bottom coordinate. 0 - default.

---

## Instance Methods

<MemberHeading id="clone" depth="3" name="clone" sig="clone(): Rectangle" />

<MemberMeta sourceHref="/source/rectangle-ts/#L57" sourceLabel="Rectangle.ts:57" />

Clone rectangle object.

**Returns**

- [`Rectangle`](/rectangle)

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth()" />

<MemberMeta sourceHref="/source/rectangle-ts/#L66" sourceLabel="Rectangle.ts:66" />

Returns rectangle width.

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight()" />

<MemberMeta sourceHref="/source/rectangle-ts/#L75" sourceLabel="Rectangle.ts:75" />

Returns rectangle height.

<MemberHeading id="getsquare" depth="3" name="getSquare" sig="getSquare()" />

<MemberMeta sourceHref="/source/rectangle-ts/#L84" sourceLabel="Rectangle.ts:84" />

Returns rectangle area.

<MemberHeading id="getdiagonal" depth="3" name="getDiagonal" sig="getDiagonal()" />

<MemberMeta sourceHref="/source/rectangle-ts/#L93" sourceLabel="Rectangle.ts:93" />

Returns rectangle diagonal size.

<MemberHeading id="fit" depth="3" name="fit" sig="fit(width: number, height: number)" />

<MemberMeta sourceHref="/source/rectangle-ts/#L106" sourceLabel="Rectangle.ts:106" />

Returns true if rectangle fits their size in width and height.

**Parameters**

- `width` (number) — Width.
- `height` (number) — Height.
