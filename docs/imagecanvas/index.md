---
title: ImageCanvas
kind: class
longname: ImageCanvas
description: Usefull class for working with JS canvas object.
---

# ImageCanvas

<SourceLink href="/source/imagecanvas-ts/#L7" label="ImageCanvas.ts:7" />

Usefull class for working with JS canvas object.

---

## Constructor

<Signature code="new ImageCanvas(width?: number, height?: number): ImageCanvas" />

**Parameters**

- `width` (number, optional) — Canvas width. Default 256.
- `height` (number, optional) — Canvas height. Default 256.

---

## Instance Methods

<MemberHeading id="getcanvas" depth="3" name="getCanvas" sig="getCanvas(): HTMLCanvasElement" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L37" sourceLabel="ImageCanvas.ts:37" />

Returns canvas object.

**Returns**

- `HTMLCanvasElement`

<MemberHeading id="getcontext" depth="3" name="getContext" sig="getContext(): CanvasRenderingContext2D" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L46" sourceLabel="ImageCanvas.ts:46" />

Returns canvas context pointer.

**Returns**

- `CanvasRenderingContext2D`

<MemberHeading id="fillempty" depth="3" name="fillEmpty" sig="fillEmpty()" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L54" sourceLabel="ImageCanvas.ts:54" />

Fills canvas RGBA with zeroes.

<MemberHeading id="fill" depth="3" name="fill" sig="fill(color: string)" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L68" sourceLabel="ImageCanvas.ts:68" />

Fills canvas RGBA with color.

**Parameters**

- `color` (string) — CSS string color.

<MemberHeading id="getdata" depth="3" name="getData" sig="getData(): Uint8ClampedArray" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L78" sourceLabel="ImageCanvas.ts:78" />

Gets canvas pixels RGBA data.

**Returns**

- `Uint8ClampedArray`

<MemberHeading id="fillcolor" depth="3" name="fillColor" sig="fillColor(color: string)" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L88" sourceLabel="ImageCanvas.ts:88" />

Fill the canvas by color.

**Parameters**

- `color` (string) — CSS string color.

<MemberHeading id="setdata" depth="3" name="setData" sig="setData(data: Array.<number>)" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L98" sourceLabel="ImageCanvas.ts:98" />

Sets RGBA pixel data.

**Parameters**

- `data` (Array.\<number>) — Array RGBA data.

<MemberHeading id="resize" depth="3" name="resize" sig="resize(width: number, height: number)" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L110" sourceLabel="ImageCanvas.ts:110" />

Resize canvas.

**Parameters**

- `width` (number) — Width.
- `height` (number) — Height.

<MemberHeading
  id="drawimage"
  depth="3"
  name="drawImage"
  sig="drawImage(
	img: Image,
	x?: number,
	y?: number,
	width?: number,
	height?: number,
)"
/>

<MemberMeta sourceHref="/source/imagecanvas-ts/#L125" sourceLabel="ImageCanvas.ts:125" />

Draw an image on the canvas.

**Parameters**

- `img` (Image) — Draw image.
- `x` (number, optional) — Left top image corner X coordinate on the canvas.
- `y` (number, optional) — Left top image corner Y coordinate on the canvas.
- `width` (number, optional) — Image width slice. Image width is default.
- `height` (number, optional) — Image height slice. Image height is default.

<MemberHeading id="getimage" depth="3" name="getImage" sig="getImage(): Image" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L134" sourceLabel="ImageCanvas.ts:134" />

Converts canvas to JS image object.

**Returns**

- `Image`

<MemberHeading id="gettextwidth" depth="3" name="getTextWidth" sig="getTextWidth(text: string): number" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L148" sourceLabel="ImageCanvas.ts:148" />

Get measured text width.

**Parameters**

- `text` (string) — Measured text.

**Returns**

- `number`

<MemberHeading
  id="drawtext"
  depth="3"
  name="drawText"
  sig="drawText(
	text: string,
	x?: number,
	y?: number,
	font?: string,
	color?: string,
)"
/>

<MemberMeta sourceHref="/source/imagecanvas-ts/#L162" sourceLabel="ImageCanvas.ts:162" />

Draw a text on the canvas.

**Parameters**

- `text` (string) — Text.
- `x` (number, optional, default: 0) — Canvas X - coordinate. 0 - default.
- `y` (number, optional, default: 14) — Canvas Y - coordinate. 0 - default.
- `font` (string, optional, default: "normal 14px Verdana") — Font style. 'normal 14px Verdana' - is default.
- `color` (string, optional, default: "black") — Css font color.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L179" sourceLabel="ImageCanvas.ts:179" />

Gets canvas width.

**Returns**

- `number`

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L188" sourceLabel="ImageCanvas.ts:188" />

Gets canvas height.

**Returns**

- `number`

<MemberHeading id="load" depth="3" name="load" sig="load(url: string, callback?: function)" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L198" sourceLabel="ImageCanvas.ts:198" />

Load image to canvas.

**Parameters**

- `url` (string) — Image url.
- `callback` (function, optional) — Image onload callback.

<MemberHeading id="openimage" depth="3" name="openImage" sig="openImage()" />

<MemberMeta sourceHref="/source/imagecanvas-ts/#L213" sourceLabel="ImageCanvas.ts:213" />

Open canvas image in the new window.
