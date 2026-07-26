---
title: TextureAtlas
kind: class
longname: TextureAtlas
description: Texture atlas stores images in one texture. Each image has its own atlas texture coordinates.
---

# TextureAtlas

<SourceLink href="/source/utils/textureatlas-ts/#L17" label="TextureAtlas.ts:17" />

Texture atlas stores images in one texture. Each image has its own atlas texture coordinates.

---

## Constructor

<Signature
  code="new TextureAtlas(
	width?: number,
	height?: number,
	colorSpace?: string | number,
): TextureAtlas"
/>

**Parameters**

- `width` (number, optional, default: 1024) — Texture atlas width, if it hasn't 1024 default.
- `height` (number, optional, default: 1024) — Texture atlas height, if it hasn't 1024 default.
- `colorSpace` (string | number, optional, default: "\\"linear\\"") — Texture atlas color space. Available values: "linear", "srgb", 0, 1.

---

## Instance Methods

<MemberHeading id="getimage" depth="3" name="getImage" sig="getImage(): HTMLImageElement" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L88" sourceLabel="TextureAtlas.ts:88" />

Returns atlas javascript image object.

**Returns**

- `HTMLImageElement`

<MemberHeading id="getcanvas" depth="3" name="getCanvas" sig="getCanvas(): HTMLCanvasElement" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L97" sourceLabel="TextureAtlas.ts:97" />

Returns canvas object.

**Returns**

- `HTMLCanvasElement`

<MemberHeading id="clearcanvas" depth="3" name="clearCanvas" sig="clearCanvas()" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L105" sourceLabel="TextureAtlas.ts:105" />

Clear atlas with black.

<MemberHeading id="assignhandler" depth="3" name="assignHandler" sig="assignHandler(handler: Handler)" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L114" sourceLabel="TextureAtlas.ts:114" />

Sets openglobus gl handler that creates gl texture.

**Parameters**

- `handler` ([Handler](/handler)) — WebGL handler.

<MemberHeading id="getdiagonal" depth="3" name="getDiagonal" sig="getDiagonal(image: HTMLImageElementExt): number" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L125" sourceLabel="TextureAtlas.ts:125" />

Returns image diagonal size.

**Parameters**

- `image` (HTMLImageElementExt) — Image object.

**Returns**

- `number`

<MemberHeading
  id="addimage"
  depth="3"
  name="addImage"
  sig="addImage(
	image: HTMLImageElementExt,
	fastInsert?: boolean,
): TextureAtlasNode | undefined"
/>

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L139" sourceLabel="TextureAtlas.ts:139" />

Adds image to the atlas and returns created node with texture coordinates of the stored image.

**Parameters**

- `image` (HTMLImageElementExt) — Input javascript image object.
- `fastInsert` (boolean, optional, default: false) — If it's true atlas doesn't restore all images again and store image in the current atlas scheme.

**Returns**

- `TextureAtlasNode | undefined`

<MemberHeading id="makeatlas" depth="3" name="_makeAtlas" sig="_makeAtlas(fastInsert?: boolean)" />

<MemberMeta badges="protected" sourceHref="/source/utils/textureatlas-ts/#L208" sourceLabel="TextureAtlas.ts:208" />

Main atlas making function.

**Parameters**

- `fastInsert` (boolean, optional, default: false) — If it's true atlas doesn't restore all images again and store image in the current atlas scheme.

<MemberHeading id="createtexture" depth="3" name="createTexture" sig="createTexture()" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L249" sourceLabel="TextureAtlas.ts:249" />

Creates atlas gl texture.

<MemberHeading id="loadimage" depth="3" name="loadImage" sig="loadImage(src: string, success: ImagesCacheManagerCallback)" />

<MemberMeta sourceHref="/source/utils/textureatlas-ts/#L266" sourceLabel="TextureAtlas.ts:266" />

Asynchronous function that loads and creates image to the image cache, and call success callback when it's done.

**Parameters**

- `src` (string) — Image object src string.
- `success` (ImagesCacheManagerCallback) — The callback that handles the image loads done.
