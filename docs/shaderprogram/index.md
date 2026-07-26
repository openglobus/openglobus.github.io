---
title: ShaderProgram
kind: class
longname: ShaderProgram
description: Represents more comfortable using WebGL shader program.
---

# ShaderProgram

<SourceLink href="/source/webgl/shaderprogram-ts/#L43" label="ShaderProgram.ts:43" />

**Modifiers:** `public`

Represents more comfortable using WebGL shader program.

---

## Constructor

<Signature
  code="new ShaderProgram(
	name: string,
	material: ProgramMaterial,
): ShaderProgram"
/>

Shader program name.

**Parameters**

- `name` (string) — ShaderProgram name.
- `material` (ProgramMaterial) — Object stores uniforms, attributes and program codes:
  - `material.uniforms` (Record.\<string, any>) — Uniforms definition section.
  - `material.attributes` (Record.\<string, any>) — Attributes definition section.
  - `material.vertexShader` (string) — Vertex glsl code.
  - `material.fragmentShader` (string) — Fragment glsl code.

---

## Instance Methods

<MemberHeading id="attach" depth="3" name="attach" sig="attach(handler: Handler): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L170" sourceLabel="ShaderProgram.ts:170" />

Attaches this shader program to a handler.

**Parameters**

- `handler` ([Handler](/handler)) — WebGL handler.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L179" sourceLabel="ShaderProgram.ts:179" />

Initializes this shader program using handler WebGL context.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="use" depth="3" name="use" sig="use()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L241" sourceLabel="ShaderProgram.ts:241" />

Makes this shader program current in WebGL context.

<MemberHeading id="activate" depth="3" name="activate" sig="activate(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L249" sourceLabel="ShaderProgram.ts:249" />

Activates this shader program and disables previously active one.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="deactivate" depth="3" name="deactivate" sig="deactivate(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L269" sourceLabel="ShaderProgram.ts:269" />

Deactivates this shader program.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): boolean" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L279" sourceLabel="ShaderProgram.ts:279" />

Returns `true` if this shader program is active.

**Returns**

- `boolean`

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L286" sourceLabel="ShaderProgram.ts:286" />

Removes this shader program from its handler and releases WebGL program.

<MemberHeading id="set" depth="3" name="set" sig="set(material: Record.<string, any>): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L309" sourceLabel="ShaderProgram.ts:309" />

Sets provided shader variables and applies them. Automatically activates this shader program.

**Parameters**

- `material` (Record.\<string, any>) — Variable values by variable name.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="apply" depth="3" name="apply" sig="apply()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L322" sourceLabel="ShaderProgram.ts:322" />

Applies currently stored shader variable values.

<MemberHeading
  id="drawindexbuffer"
  depth="3"
  name="drawIndexBuffer"
  sig="drawIndexBuffer(
	mode: number,
	buffer: WebGLBufferExt,
): ShaderProgram"
/>

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L336" sourceLabel="ShaderProgram.ts:336" />

Draws indexed geometry from provided index buffer.

**Parameters**

- `mode` (number) — WebGL draw mode.
- `buffer` (WebGLBufferExt) — Index buffer.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="drawarrays" depth="3" name="drawArrays" sig="drawArrays(mode: number, numItems: number): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L349" sourceLabel="ShaderProgram.ts:349" />

Draws non-indexed geometry.

**Parameters**

- `mode` (number) — WebGL draw mode.
- `numItems` (number) — Vertex count to draw.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="disableattribarrays" depth="3" name="disableAttribArrays" sig="disableAttribArrays()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L405" sourceLabel="ShaderProgram.ts:405" />

Disables all attribute arrays used by this shader program.

<MemberHeading id="enableattribarrays" depth="3" name="enableAttribArrays" sig="enableAttribArrays()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L417" sourceLabel="ShaderProgram.ts:417" />

Enables all attribute arrays used by this shader program.

<MemberHeading id="delete" depth="3" name="delete" sig="delete()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L437" sourceLabel="ShaderProgram.ts:437" />

Deletes underlying WebGL program.

<MemberHeading id="createprogram" depth="3" name="createProgram" sig="createProgram(gl: WebGL2RenderingContext)" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L445" sourceLabel="ShaderProgram.ts:445" />

Compiles shaders, links WebGL program and resolves variable locations.

**Parameters**

- `gl` (WebGL2RenderingContext) — WebGL context.

## Static Methods

<MemberHeading id="bindbuffer" depth="3" name="bindBuffer" sig="bindBuffer(program: ShaderProgram, variable: ProgramVariable)" />

<MemberMeta badges="static" sourceHref="/source/webgl/shaderprogram-ts/#L223" sourceLabel="ShaderProgram.ts:223" />

Binds attribute buffer and sets its pointer.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — Shader program instance.
- `variable` (ProgramVariable) — Attribute variable descriptor.
