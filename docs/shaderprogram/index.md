---
title: ShaderProgram
kind: class
longname: ShaderProgram
description: Represents more comfortable using WebGL shader program.
---

# ShaderProgram

<SourceLink href="/source/webgl/shaderprogram-ts/#L100" label="ShaderProgram.ts:100" />

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
  - `material.defines` (ProgramDefines, optional) — Preprocessor defines. Boolean ones are switches: such a program compiles lazily, and variant() gives it built with other switch values.
  - `material.vertexShader` (string) — Vertex glsl code.
  - `material.fragmentShader` (string) — Fragment glsl code.

---

## Instance Methods

<MemberHeading id="attach" depth="3" name="attach" sig="attach(handler: Handler): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L273" sourceLabel="ShaderProgram.ts:273" />

Attaches this shader program to a handler.

**Parameters**

- `handler` ([Handler](/handler)) — WebGL handler.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L283" sourceLabel="ShaderProgram.ts:283" />

Initializes this shader program using handler WebGL context.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading
  id="variant"
  depth="3"
  name="variant"
  sig="variant(
	switches: number | Record.<string, boolean>,
): ShaderProgram"
/>

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L300" sourceLabel="ShaderProgram.ts:300" />

Returns the program with the given switches on and the rest off. Unknown switches are ignored. Each variant is compiled once, on first use, and cached.

**Parameters**

- `switches` (number | Record.\<string, boolean>) — Bit mask or switch values by name.

**Returns**

- [`ShaderProgram`](/shaderprogram)

**Example**

```js
program.variant(USE_FOG);           // by bit mask
program.variant({ USE_FOG: true }); // by name, the same program
```

<MemberHeading id="use" depth="3" name="use" sig="use()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L410" sourceLabel="ShaderProgram.ts:410" />

Makes this shader program current in WebGL context.

<MemberHeading id="activate" depth="3" name="activate" sig="activate(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L418" sourceLabel="ShaderProgram.ts:418" />

Activates this shader program and disables previously active one.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="deactivate" depth="3" name="deactivate" sig="deactivate(): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L441" sourceLabel="ShaderProgram.ts:441" />

Deactivates this shader program.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): boolean" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L451" sourceLabel="ShaderProgram.ts:451" />

Returns `true` if this shader program is active.

**Returns**

- `boolean`

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L458" sourceLabel="ShaderProgram.ts:458" />

Removes this shader program from its handler and releases WebGL program.

<MemberHeading id="set" depth="3" name="set" sig="set(material: Record.<string, any>): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L489" sourceLabel="ShaderProgram.ts:489" />

Sets provided shader variables and applies them. Automatically activates this shader program.

**Parameters**

- `material` (Record.\<string, any>) — Variable values by variable name.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="apply" depth="3" name="apply" sig="apply()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L502" sourceLabel="ShaderProgram.ts:502" />

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

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L516" sourceLabel="ShaderProgram.ts:516" />

Draws indexed geometry from provided index buffer.

**Parameters**

- `mode` (number) — WebGL draw mode.
- `buffer` (WebGLBufferExt) — Index buffer.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="drawarrays" depth="3" name="drawArrays" sig="drawArrays(mode: number, numItems: number): ShaderProgram" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L529" sourceLabel="ShaderProgram.ts:529" />

Draws non-indexed geometry.

**Parameters**

- `mode` (number) — WebGL draw mode.
- `numItems` (number) — Vertex count to draw.

**Returns**

- [`ShaderProgram`](/shaderprogram)

<MemberHeading id="disableattribarrays" depth="3" name="disableAttribArrays" sig="disableAttribArrays()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L584" sourceLabel="ShaderProgram.ts:584" />

Disables all attribute arrays used by this shader program.

<MemberHeading id="enableattribarrays" depth="3" name="enableAttribArrays" sig="enableAttribArrays()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L596" sourceLabel="ShaderProgram.ts:596" />

Enables all attribute arrays used by this shader program.

<MemberHeading id="delete" depth="3" name="delete" sig="delete()" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L616" sourceLabel="ShaderProgram.ts:616" />

Deletes underlying WebGL program.

<MemberHeading id="createprogram" depth="3" name="createProgram" sig="createProgram(gl: WebGL2RenderingContext)" />

<MemberMeta sourceHref="/source/webgl/shaderprogram-ts/#L624" sourceLabel="ShaderProgram.ts:624" />

Compiles shaders, links WebGL program and resolves variable locations.

**Parameters**

- `gl` (WebGL2RenderingContext) — WebGL context.

## Static Methods

<MemberHeading id="bindbuffer" depth="3" name="bindBuffer" sig="bindBuffer(program: ShaderProgram, variable: ProgramVariable)" />

<MemberMeta badges="static" sourceHref="/source/webgl/shaderprogram-ts/#L392" sourceLabel="ShaderProgram.ts:392" />

Binds attribute buffer and sets its pointer.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — Shader program instance.
- `variable` (ProgramVariable) — Attribute variable descriptor.
