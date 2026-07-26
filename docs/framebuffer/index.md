---
title: Framebuffer
kind: class
longname: Framebuffer
description: Class represents framebuffer.
---

# Framebuffer

<SourceLink href="/source/webgl/framebuffer-ts/#L69" label="Framebuffer.ts:69" />

Class represents framebuffer.

---

## Constructor

<Signature
  code="new Framebuffer(
	handler: Handler,
	options?: IFrameBufferParams,
): Framebuffer"
/>

**Parameters**

- `handler` ([Handler](/handler)) — WebGL handler.
- `options` (IFrameBufferParams, optional) — Framebuffer options:

---

## Instance Methods

<MemberHeading id="init" depth="3" name="init" sig="init()" />

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L177" sourceLabel="Framebuffer.ts:177" />

Framebuffer initialization.

<MemberHeading id="readpixelbuffers" depth="3" name="readPixelBuffers" sig="readPixelBuffers()" />

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L218" sourceLabel="Framebuffer.ts:218" />

Synchronously reads all configured async pixel buffers for the current framebuffer state. Use when the same-frame CPU readback is required.

<MemberHeading id="bindoutputtexture" depth="3" name="bindOutputTexture" sig="bindOutputTexture(texture: WebGLTexture, glAttachment?: number)" />

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L372" sourceLabel="Framebuffer.ts:372" />

Bind buffer texture.

**Parameters**

- `texture` (WebGLTexture) — Output texture.
- `glAttachment` (number, optional, default: 0) — color attachment index.

<MemberHeading
  id="readpixels"
  depth="3"
  name="readPixels"
  sig="readPixels(
	res: TypedArray,
	nx: number,
	ny: number,
	w?: number,
	h?: number,
	index?: number,
)"
/>

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L389" sourceLabel="Framebuffer.ts:389" />

Gets pixel RGBA color from framebuffer by coordinates.

**Parameters**

- `res` (TypedArray) — Normalized x - coordinate.
- `nx` (number) — Normalized x - coordinate.
- `ny` (number) — Normalized y - coordinate.
- `w` (number, optional, default: 1) — Normalized width.
- `h` (number, optional, default: 1) — Normalized height.
- `index` (number, optional, default: 0) — color attachment index.

<MemberHeading id="readallpixels" depth="3" name="readAllPixels" sig="readAllPixels(res: TypedArray, attachmentIndex?: number)" />

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L411" sourceLabel="Framebuffer.ts:411" />

Reads all pixels(RGBA colors) from framebuffer.

**Parameters**

- `res` (TypedArray) — Result array.
- `attachmentIndex` (number, optional, default: 0) — color attachment index.

<MemberHeading id="getimage" depth="3" name="getImage" sig="getImage(): HTMLImageElement" />

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L432" sourceLabel="Framebuffer.ts:432" />

Gets JavaScript image that in the framebuffer.

**Returns**

- `HTMLImageElement`

<MemberHeading
  id="readdata"
  depth="3"
  name="readData"
  sig="readData(
	nx: number,
	ny: number,
	outData: NumberArray4 | Float32Array,
	attachmentIndex?: number,
): void"
/>

<MemberMeta sourceHref="/source/webgl/framebuffer-ts/#L454" sourceLabel="Framebuffer.ts:454" />

Reads pixel data from the buffer at the specified normalized coordinates.

**Parameters**

- `nx` (number) — Normalized X coordinate in the range \[0, 1], multiplied by the buffer width.
- `ny` (number) — Normalized Y coordinate in the range \[0, 1], multiplied by the buffer height.
- `outData` (NumberArray4 | Float32Array) — Output array where the RGBA pixel values will be written.
- `attachmentIndex` (number, optional, default: 0) — Index of the color attachment (buffer) to read from.

**Returns**

- `void`

**Example**

```js
const color = new Float32Array(4);
framebuffer.readData(0.5, 0.5, color); // Reads the color at the center of the buffer
```
