---
title: Handler
kind: class
longname: Handler
description: A WebGL handler for accessing low-level WebGL capabilities.
---

# Handler

<SourceLink href="/source/webgl/handler-ts/#L89" label="Handler.ts:89" />

A WebGL handler for accessing low-level WebGL capabilities.

---

## Constructor

<Signature
  code="new Handler(
	canvasTarget: string | HTMLCanvasElement,
	params?: Object,
): Handler"
/>

**Parameters**

- `canvasTarget` (string | HTMLCanvasElement) — Canvas element target. or undefined creates hidden canvas and handler becomes hidden.
- `params` (Object, optional) — Handler options:
  - `params.anisotropy` (number, optional) — Anisotropy filter degree. 8 is default.
  - `params.width` (number, optional) — Hidden handler width. 256 is default.
  - `params.height` (number, optional) — Hidden handler height. 256 is default.
  - `params.extensions` (Array.\<string>, optional) — Additional WebGL extension list. Available by default: EXT\_texture\_filter\_anisotropic.

---

## Instance Methods

<MemberHeading id="setframecallback" depth="3" name="setFrameCallback" sig="setFrameCallback(callback: function)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L361" sourceLabel="Handler.ts:361" />

Sets animation frame function.

**Parameters**

- `callback` (function) — Frame callback.

<MemberHeading
  id="createemptytexture2dext"
  depth="3"
  name="createEmptyTexture2DExt"
  sig="createEmptyTexture2DExt(
	width?: number,
	height?: number,
	filter?: string,
	internalFormat?: string,
	param?: string,
	levels?: number,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L376" sourceLabel="Handler.ts:376" />

Creates an empty immutable 2D texture (WebGL2).

**Parameters**

- `width` (number, optional, default: 1) — Texture width in pixels.
- `height` (number, optional, default: 1) — Texture height in pixels.
- `filter` (string, optional, default: "\\"NEAREST\\"") — GL\_TEXTURE\_MIN\_FILTER and GL\_TEXTURE\_MAG\_FILTER value.
- `internalFormat` (string, optional, default: "\\"RGBA8\\"") — Sized internal format (e.g. "RGBA8", "RGBA16F", "R16F").
- `param` (string, optional, default: "\\"CLAMP\_TO\_EDGE\\"") — GL\_TEXTURE\_WRAP\_S/T value.
- `levels` (number, optional, default: 1) — Number of mipmap levels (immutable storage).

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createemptytexture2darrayext"
  depth="3"
  name="createEmptyTexture2DArrayExt"
  sig="createEmptyTexture2DArrayExt(
	width?: number,
	height?: number,
	depth?: number,
	filter?: string,
	internalFormat?: string,
	param?: string,
	levels?: number,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L412" sourceLabel="Handler.ts:412" />

Creates an empty immutable 2D array texture (WebGL2).

**Parameters**

- `width` (number, optional, default: 1) — Texture width in pixels.
- `height` (number, optional, default: 1) — Texture height in pixels.
- `depth` (number, optional, default: 1) — Number of array layers.
- `filter` (string, optional, default: "\\"NEAREST\\"") — GL\_TEXTURE\_MIN\_FILTER and GL\_TEXTURE\_MAG\_FILTER value.
- `internalFormat` (string, optional, default: "\\"RGBA8\\"") — Sized internal format (e.g. "RGBA8", "R32F").
- `param` (string, optional, default: "\\"CLAMP\_TO\_EDGE\\"") — GL\_TEXTURE\_WRAP\_S/T value.
- `levels` (number, optional, default: 1) — Number of mipmap levels (immutable storage).

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createemptytexturen"
  depth="3"
  name="createEmptyTexture_n"
  sig="createEmptyTexture_n(
	width: number,
	height: number,
	internalFormat?: number,
	texParami?: number,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L446" sourceLabel="Handler.ts:446" />

Creates Empty NEAREST filtered texture.

**Parameters**

- `width` (number) — Empty texture width.
- `height` (number) — Empty texture height.
- `internalFormat` (number, optional) — Internal texture format, `gl.RGBA` by default.
- `texParami` (number, optional) — Wrap mode for S/T axes, `gl.CLAMP_TO_EDGE` by default.

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createemptytexturel"
  depth="3"
  name="createEmptyTexture_l"
  sig="createEmptyTexture_l(
	width: number,
	height: number,
	internalFormat?: number,
	texParami?: number,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L476" sourceLabel="Handler.ts:476" />

Creates empty LINEAR filtered texture.

**Parameters**

- `width` (number) — Empty texture width.
- `height` (number) — Empty texture height.
- `internalFormat` (number, optional)
- `texParami` (number, optional)

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createtexturen"
  depth="3"
  name="createTexture_n"
  sig="createTexture_n(
	image: ImageSource,
	internalFormat?: number,
	texParami?: number,
	texture?: WebGLTexture | null,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L506" sourceLabel="Handler.ts:506" />

Creates NEAREST filter texture.

**Parameters**

- `image` (ImageSource) — Image or Canvas object.
- `internalFormat` (number, optional)
- `texParami` (number, optional)
- `texture` (WebGLTexture | null, optional, default: null)

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createtexturel"
  depth="3"
  name="createTexture_l"
  sig="createTexture_l(
	image: ImageSource,
	internalFormat?: number,
	texParami?: number,
	texture?: WebGLTexture | null,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L538" sourceLabel="Handler.ts:538" />

Creates LINEAR filter texture.

**Parameters**

- `image` (ImageSource) — Image or Canvas object.
- `internalFormat` (number, optional)
- `texParami` (number, optional)
- `texture` (WebGLTexture | null, optional, default: null)

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createtexturemm"
  depth="3"
  name="createTexture_mm"
  sig="createTexture_mm(
	image: ImageSource,
	internalFormat?: number,
	texParami?: number,
	texture?: WebGLTexture | null,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L570" sourceLabel="Handler.ts:570" />

Creates MIPMAP filter texture.

**Parameters**

- `image` (ImageSource) — Image or Canvas object.
- `internalFormat` (number, optional)
- `texParami` (number, optional)
- `texture` (WebGLTexture | null, optional, default: null)

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="createtexturea"
  depth="3"
  name="createTexture_a"
  sig="createTexture_a(
	image: ImageSource,
	internalFormat?: number,
	texParami?: number,
	texture?: WebGLTexture | null,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L602" sourceLabel="Handler.ts:602" />

Creates ANISOTROPY filter texture.

**Parameters**

- `image` (ImageSource) — Image or Canvas object.
- `internalFormat` (number, optional)
- `texParami` (number, optional)
- `texture` (WebGLTexture | null, optional, default: null)

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="loadcubemaptexture"
  depth="3"
  name="loadCubeMapTexture"
  sig="loadCubeMapTexture(
	params: Texture3DParams,
	colorSpace?: number,
	textureFilter?: number,
): WebGLTexture | null"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L644" sourceLabel="Handler.ts:644" />

Creates cube texture.

**Parameters**

- `params` (Texture3DParams) — Face image urls:
  - `params.px` (string) — Positive X or right image url.
  - `params.nx` (string) — Negative X or left image url.
  - `params.py` (string) — Positive Y or up image url.
  - `params.ny` (string) — Negative Y or bottom image url.
  - `params.pz` (string) — Positive Z or face image url.
  - `params.nz` (string) — Negative Z or back image url.
- `colorSpace` (number, optional, default: "gl.SRGB8\_ALPHA8") — Cube texture internal format (for example gl.SRGB8\_ALPHA8 or gl.RGBA8).
- `textureFilter` (number, optional, default: "gl.LINEAR") — Cube texture filter (for example gl.LINEAR or gl.NEAREST).

**Returns**

- `WebGLTexture | null`

<MemberHeading
  id="addprogram"
  depth="3"
  name="addProgram"
  sig="addProgram(
	program: ShaderProgram,
	activate?: boolean,
): ShaderProgram"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L706" sourceLabel="Handler.ts:706" />

Adds shader program to the handler.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — Shader program.
- `activate` (boolean, optional, default: false) — If false program will not compile.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="removeprogram" depth="3" name="removeProgram" sig="removeProgram(name: string)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L725" sourceLabel="Handler.ts:725" />

Removes shader program from handler.

**Parameters**

- `name` (string) — Shader program name.

<MemberHeading id="addprograms" depth="3" name="addPrograms" sig="addPrograms(programsArr: Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L734" sourceLabel="Handler.ts:734" />

Adds shader programs to the handler.

**Parameters**

- `programsArr` (Array.\<[ShaderProgram](/shaderprogram)>) — Shader program array.

<MemberHeading id="initprogram" depth="3" name="_initProgram" sig="_initProgram(program: ShaderProgram)" />

<MemberMeta badges="protected" sourceHref="/source/webgl/handler-ts/#L745" sourceLabel="Handler.ts:745" />

Used in addProgram

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — ShaderProgram

<MemberHeading id="initializeextension" depth="3" name="initializeExtension" sig="initializeExtension(extensionStr: string, showLog: boolean): any" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L776" sourceLabel="Handler.ts:776" />

Initialize additional WebGL extensions.

**Parameters**

- `extensionStr` (string) — Extension name.
- `showLog` (boolean, default: false) — Show logging.

**Returns**

- `any`

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize()" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L792" sourceLabel="Handler.ts:792" />

Main function that initializes handler.

<MemberHeading id="setdefaults" depth="3" name="_setDefaults" sig="_setDefaults()" />

<MemberMeta badges="protected" sourceHref="/source/webgl/handler-ts/#L869" sourceLabel="Handler.ts:869" />

Sets default gl render parameters. Used in init function.

<MemberHeading id="setclipcontrolzerotoone" depth="3" name="setClipControlZeroToOne" sig="setClipControlZeroToOne(useZeroToOne: boolean)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L906" sourceLabel="Handler.ts:906" />

Switches clip-control depth range between ZERO\_TO\_ONE and NEGATIVE\_ONE\_TO\_ONE. If EXT\_clip\_control is unavailable, the internal ZERO\_TO\_ONE flag is reset to false.

**Parameters**

- `useZeroToOne` (boolean) — True sets ZERO\_TO\_ONE, false sets NEGATIVE\_ONE\_TO\_ONE.

<MemberHeading
  id="createstreamarraybuffer"
  depth="3"
  name="createStreamArrayBuffer"
  sig="createStreamArrayBuffer(
	itemSize: number,
	numItems: number,
	usage?: number,
	bytes?: number,
): WebGLBufferExt"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L932" sourceLabel="Handler.ts:932" />

Creates ARRAY\_BUFFER storage for frequently updated data.

**Parameters**

- `itemSize` (number) — Number of scalar components per item.
- `numItems` (number) — Number of items.
- `usage` (number, optional, default: "STREAM\_DRAW") — GL usage hint (STATIC\_DRAW, DYNAMIC\_DRAW or STREAM\_DRAW).
- `bytes` (number, optional, default: 4) — Bytes per scalar component.

**Returns**

- `WebGLBufferExt`

<MemberHeading
  id="setstreamarraybuffer"
  depth="3"
  name="setStreamArrayBuffer"
  sig="setStreamArrayBuffer(
	buffer: WebGLBufferExt,
	array: TypedArray,
	offset?: number,
): WebGLBufferExt"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L956" sourceLabel="Handler.ts:956" />

Uploads data to an existing ARRAY\_BUFFER via bufferSubData.

**Parameters**

- `buffer` (WebGLBufferExt) — Target ARRAY\_BUFFER.
- `array` (TypedArray) — Source data to upload.
- `offset` (number, optional, default: 0) — Byte offset in the target buffer.

**Returns**

- `WebGLBufferExt`

<MemberHeading
  id="createarraybuffer"
  depth="3"
  name="createArrayBuffer"
  sig="createArrayBuffer(
	array: TypedArray,
	itemSize: number,
	numItems?: number,
	usage?: number,
): WebGLBufferExt"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L973" sourceLabel="Handler.ts:973" />

Creates and initializes ARRAY\_BUFFER from a typed array.

**Parameters**

- `array` (TypedArray) — Source data.
- `itemSize` (number) — Number of scalar components per item.
- `numItems` (number, optional) — Number of items (computed from array length when omitted).
- `usage` (number, optional, default: "STATIC\_DRAW") — GL usage hint (STATIC\_DRAW, DYNAMIC\_DRAW or STREAM\_DRAW).

**Returns**

- `WebGLBufferExt`

<MemberHeading
  id="createarraybufferlength"
  depth="3"
  name="createArrayBufferLength"
  sig="createArrayBufferLength(
	size: number,
	usage?: number,
): WebGLBufferExt"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L991" sourceLabel="Handler.ts:991" />

Creates ARRAY\_BUFFER storage with a specific byte length and no initial data.

**Parameters**

- `size` (number) — Buffer size in bytes.
- `usage` (number, optional, default: "STATIC\_DRAW") — GL usage hint (STATIC\_DRAW, DYNAMIC\_DRAW or STREAM\_DRAW).

**Returns**

- `WebGLBufferExt`

<MemberHeading
  id="createelementarraybuffer"
  depth="3"
  name="createElementArrayBuffer"
  sig="createElementArrayBuffer(
	array: TypedArray,
	itemSize: number,
	numItems: number,
	usage?: number,
): Object"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1011" sourceLabel="Handler.ts:1011" />

Creates ELEMENT ARRAY buffer.

**Parameters**

- `array` (TypedArray) — Input array.
- `itemSize` (number) — Array item size.
- `numItems` (number) — Items quantity.
- `usage` (number, optional, default: "STATIC\_DRAW") — Parameter of the bufferData call can be one of STATIC\_DRAW, DYNAMIC\_DRAW, or STREAM\_DRAW.

**Returns**

- `Object`

<MemberHeading id="setsize" depth="3" name="setSize" sig="setSize(w: number, h: number)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1033" sourceLabel="Handler.ts:1033" />

Sets handler canvas size.

**Parameters**

- `w` (number) — Canvas width.
- `h` (number) — Canvas height.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1065" sourceLabel="Handler.ts:1065" />

Returns context screen width.

**Returns**

- `number`

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1074" sourceLabel="Handler.ts:1074" />

Returns context screen height.

**Returns**

- `number`

<MemberHeading id="getclientaspect" depth="3" name="getClientAspect" sig="getClientAspect(): number" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1083" sourceLabel="Handler.ts:1083" />

Returns canvas aspect ratio.

**Returns**

- `number`

<MemberHeading id="getcenter" depth="3" name="getCenter" sig="getCenter(): number" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1092" sourceLabel="Handler.ts:1092" />

Returns canvas center coordinates.

**Returns**

- `number`

<MemberHeading id="clearframe" depth="3" name="clearFrame" sig="clearFrame()" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1144" sourceLabel="Handler.ts:1144" />

Clearing gl frame.

<MemberHeading id="start" depth="3" name="start" sig="start()" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1154" sourceLabel="Handler.ts:1154" />

Starts animation loop.

<MemberHeading id="iswebgl2" depth="3" name="isWebGl2" sig="isWebGl2()" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1175" sourceLabel="Handler.ts:1175" />

Check is gl context type equals webgl2

<MemberHeading id="animationframecallback" depth="3" name="_animationFrameCallback" sig="_animationFrameCallback()" />

<MemberMeta badges="protected" sourceHref="/source/webgl/handler-ts/#L1183" sourceLabel="Handler.ts:1183" />

Make animation.

<MemberHeading
  id="createdefaulttexture"
  depth="3"
  name="createDefaultTexture"
  sig="createDefaultTexture(
	params: IDefaultTextureParams | null,
	success: function,
)"
/>

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1199" sourceLabel="Handler.ts:1199" />

Creates a default 2x2 texture and passes it to callback. If `params.color` is set, a solid color texture is created. If `params.url` is set, the image is loaded asynchronously. Otherwise a fallback gray texture is created.

**Parameters**

- `params` (IDefaultTextureParams | null) — Texture source parameters.
- `success` (function) — Callback with created texture.

<MemberHeading id="deletetexture" depth="3" name="deleteTexture" sig="deleteTexture(texture: WebGLTextureExt | null | undefined)" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1236" sourceLabel="Handler.ts:1236" />

Deletes texture if it is not marked as default.

**Parameters**

- `texture` (WebGLTextureExt | null | undefined) — Texture to delete.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L1246" sourceLabel="Handler.ts:1246" />

Releases handler resources, WebGL objects, observers and canvas.

## Static Methods

<MemberHeading
  id="getextension"
  depth="3"
  name="getExtension"
  sig="getExtension(
	gl: WebGL2RenderingContext | null,
	name: string,
): any"
/>

<MemberMeta badges="static" sourceHref="/source/webgl/handler-ts/#L321" sourceLabel="Handler.ts:321" />

The return value is null if the extension is not supported, or an extension object otherwise.

**Parameters**

- `gl` (WebGL2RenderingContext | null) — WebGl context pointer.
- `name` (string) — Extension name.

**Returns**

- `any`

<MemberHeading
  id="getcontext"
  depth="3"
  name="getContext"
  sig="getContext(
	canvas: HTMLCanvasElement,
	contextAttributes?: any,
): WebGLContextExt | null"
/>

<MemberMeta badges="static" sourceHref="/source/webgl/handler-ts/#L337" sourceLabel="Handler.ts:337" />

Returns a drawing context on the canvas, or null if the context identifier is not supported.

**Parameters**

- `canvas` (HTMLCanvasElement) — HTML canvas object.
- `contextAttributes` (any, optional) — See canvas.getContext contextAttributes.

**Returns**

- `WebGLContextExt | null`

## Instance Fields

<MemberHeading id="isclipcontrolzerotoone" depth="3" name="isClipControlZeroToOne" sig="isClipControlZeroToOne" />

<MemberMeta sourceHref="/source/webgl/handler-ts/#L896" sourceLabel="Handler.ts:896" />

Returns true when clip-control depth range is currently ZERO\_TO\_ONE.

**Returns**

- `boolean`
