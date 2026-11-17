---
title: Renderer
kind: class
longname: Renderer
description: High-level WebGL interface that runs the WebGL handler in real time.
---

# Renderer

<SourceLink href="/source/renderer/renderer-ts/#L151" label="Renderer.ts:151" />

High-level WebGL interface that runs the WebGL handler in real time.

**Fires**

- `event:predraw - Triggered before each frame is rendered.`
- `event:resize - Triggered when the canvas is resized.`
- `event:mousemove - Triggered when the mouse moves over the canvas.`
- `event:mousestop - Triggered when the mouse stops moving.`
- `event:lclick - Triggered on left mouse button click.`
- `event:rclick - Triggered on right mouse button click.`
- `event:mclick - Triggered on middle mouse button click.`
- `event:ldblclick - Triggered on left mouse button double-click.`
- `event:rdblclick - Triggered on right mouse button double-click.`
- `event:mdblclick - Triggered on middle mouse button double-click.`
- `event:lup - Triggered when the left mouse button is released.`
- `event:rup - Triggered when the right mouse button is released.`
- `event:mup - Triggered when the middle mouse button is released.`
- `event:ldown - Triggered when the left mouse button is pressed.`
- `event:rdown - Triggered when the right mouse button is pressed.`
- `event:mdown - Triggered when the middle mouse button is pressed.`
- `event:lhold - Triggered while the left mouse button is held.`
- `event:rhold - Triggered while the right mouse button is held.`
- `event:mhold - Triggered while the middle mouse button is held.`
- `event:mousewheel - Triggered on mouse wheel scroll.`
- `event:touchstart - Triggered on touch start.`
- `event:touchend - Triggered on the touch end.`
- `event:touchcancel - Triggered on touch cancel.`
- `event:touchmove - Triggered on touch move.`
- `event:doubletouch - Triggered on double touch.`
- `event:touchleave - Triggered when touch leaves the canvas.`
- `event:touchenter - Triggered when touch enters the canvas.`

---

## Constructor

<Signature
  code="new Renderer(
	handler: Handler | string | HTMLCanvasElement,
	params?: IRendererParams,
): Renderer"
/>

**Parameters**

- `handler` ([Handler](/handler) | string | HTMLCanvasElement) — WebGL handler instance or canvas target selector/element.
- `params` (IRendererParams, optional, default: "{}") — Renderer parameters: - controls: Control instances to add to the renderer - msaa: MSAA (Multi-Sample Anti-Aliasing) level - autoActivate: Start rendering automatically after creation - deferredDisabled: Disable deferred shading pipeline and render deferred objects with forward shaders - fontsSrc: Path to font resources - gamma: Gamma correction value - exposure: HDR exposure value - frameOpacity: Scene objects opacity used with transparentBackground to achieve an AR effect - toneMapping: HDR tone mapping operator - dpi: Device pixel ratio - clearColor: RGBA clear color array - lightPosition: Light position `[x, y, z]` - lightAmbient: Light ambient color `[r, g, b]` - lightDiffuse: Light diffuse color `[r, g, b]` - lightSpecular: Light specular `[r, g, b, shininess]`

---

## Instance Methods

<MemberHeading id="settonemapping" depth="3" name="setToneMapping" sig="setToneMapping(operator: string)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L624" sourceLabel="Renderer.ts:624" />

Sets HDR tone mapping operator and recompiles tone mapping shader.

**Parameters**

- `operator` (string) — Tone mapping operator name.

<MemberHeading id="gettonemapping" depth="3" name="getToneMapping" sig="getToneMapping(): string" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L646" sourceLabel="Renderer.ts:646" />

Returns HDR tone mapping operator.

**Returns**

- `string`

<MemberHeading id="applydepthforcamera" depth="3" name="applyDepthForCamera" sig="applyDepthForCamera()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L669" sourceLabel="Renderer.ts:669" />

Sets depth compare and clear value for the camera (reverse-Z vs classic). Pass null to restore the classic depth state: depthFunc(LESS), clearDepth(1), and clip-control NEGATIVE\_ONE\_TO\_ONE.

<MemberHeading id="seteventsactivity" depth="3" name="setEventsActivity" sig="setEventsActivity(activity: boolean)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L695" sourceLabel="Renderer.ts:695" />

Enables or disables renderer events.

**Parameters**

- `activity` (boolean) — Events activity flag.

<MemberHeading id="addpickingcallback" depth="3" name="addPickingCallback" sig="addPickingCallback(sender: any, callback: function): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L725" sourceLabel="Renderer.ts:725" />

Adds a picking render callback.

**Parameters**

- `sender` (any) — Callback context.
- `callback` (function) — Render callback function.

**Returns**

- `number` — Callback ID.

<MemberHeading id="removepickingcallback" depth="3" name="removePickingCallback" sig="removePickingCallback(id: number)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L740" sourceLabel="Renderer.ts:740" />

Removes a picking render callback.

**Parameters**

- `id` (number) — Callback ID to remove.

<MemberHeading id="assignpickingcolor" depth="3" name="assignPickingColor" sig="assignPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L766" sourceLabel="Renderer.ts:766" />

Assigns a picking color to an object.

**Parameters**

- `obj` (Object) — Object that receives a picking color.

<MemberHeading id="clearpickingcolor" depth="3" name="clearPickingColor" sig="clearPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L796" sourceLabel="Renderer.ts:796" />

Removes the picking color from an object.

**Parameters**

- `obj` (Object) — Object to clear the picking color from.

<MemberHeading
  id="bindlightingfeatures"
  depth="3"
  name="bindLightingFeatures"
  sig="bindLightingFeatures(
	program: ShaderProgram,
	projectorUnit?: number,
	shadowUnit?: number,
	cascadeUnit?: number,
)"
/>

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L854" sourceLabel="Renderer.ts:854" />

Binds the lighting features (projectors, shadows) to a program, the ones its feature variant has. Texture units left undefined take each manager's default.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — Activated program.
- `projectorUnit` (number, optional) — First texture unit for projectors.
- `shadowUnit` (number, optional) — Texture unit for shadow maps.
- `cascadeUnit` (number, optional) — Texture unit for cascade shadows.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L877" sourceLabel="Renderer.ts:877" />

Returns the canvas client width.

**Returns**

- `number`

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L886" sourceLabel="Renderer.ts:886" />

Returns the canvas client height.

**Returns**

- `number`

<MemberHeading id="getviewportcenter" depth="3" name="getViewportCenter" sig="getViewportCenter(): Vec2" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L895" sourceLabel="Renderer.ts:895" />

Returns the canvas viewport center.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="addcontrol" depth="3" name="addControl" sig="addControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L905" sourceLabel="Renderer.ts:905" />

Adds a control to the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="addcontrols" depth="3" name="addControls" sig="addControls(cArr: Array.<Control>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L915" sourceLabel="Renderer.ts:915" />

Adds an array of controls to the renderer.

**Parameters**

- `cArr` (Array.\<[Control](/control)>) — Control array.

<MemberHeading id="removecontrol" depth="3" name="removeControl" sig="removeControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L926" sourceLabel="Renderer.ts:926" />

Removes a control from the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="getinnercontainer" depth="3" name="getInnerContainer" sig="getInnerContainer()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L785" sourceLabel="Renderer.ts:785" />

The element the canvas is drawn in.

<MemberHeading id="getuicontainer" depth="3" name="getUIContainer" sig="getUIContainer()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L793" sourceLabel="Renderer.ts:793" />

Where the interface goes: the container given for it, or the inner one.

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L988" sourceLabel="Renderer.ts:988" />

Renderer initialization.

<MemberHeading id="addscene" depth="3" name="addScene" sig="addScene(scene: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1235" sourceLabel="Renderer.ts:1235" />

Adds a scene to the renderer.

**Parameters**

- `scene` ([Scene](/scene)) — Scene.

<MemberHeading id="addscenebefore" depth="3" name="addSceneBefore" sig="addSceneBefore(scene: Scene, sceneBefore: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1258" sourceLabel="Renderer.ts:1258" />

Adds a scene to the renderer before a specific node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `sceneBefore` ([Scene](/scene)) — Insert before the sceneBefore node.

<MemberHeading id="addscenes" depth="3" name="addScenes" sig="addScenes(nodesArr: Array.<Scene>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1280" sourceLabel="Renderer.ts:1280" />

Adds scenes to the renderer.

**Parameters**

- `nodesArr` (Array.\<[Scene](/scene)>) — Render nodes array.

<MemberHeading id="enqueueentitycollectionstodraw" depth="3" name="enqueueEntityCollectionsToDraw" sig="enqueueEntityCollectionsToDraw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1324" sourceLabel="Renderer.ts:1324" />

TODO: replace with cache-friendly linked list by BillboardHandler, LabelHandler etc.

<MemberHeading id="markfordepthrefresh" depth="3" name="markForDepthRefresh" sig="markForDepthRefresh()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1335" sourceLabel="Renderer.ts:1335" />

Forces the depth buffer to be refreshed in the next frame. Has an effect for terrain altitude estimate precision.

<MemberHeading id="requestredraw" depth="3" name="requestRedraw" sig="requestRedraw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1674" sourceLabel="Renderer.ts:1674" />

Requests the next frame to be rendered.

<MemberHeading id="draw" depth="3" name="draw" sig="draw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1697" sourceLabel="Renderer.ts:1697" />

Draw nodes.

<MemberHeading id="screenframe" depth="3" name="_screenFrame" sig="_screenFrame()" />

<MemberMeta badges="protected" sourceHref="/source/renderer/renderer-ts/#L1867" sourceLabel="Renderer.ts:1867" />

Tone maps the forward image onto the canvas.

<MemberHeading id="screenframedirect" depth="3" name="_screenFrameDirect" sig="_screenFrameDirect()" />

<MemberMeta badges="protected" sourceHref="/source/renderer/renderer-ts/#L1883" sourceLabel="Renderer.ts:1883" />

Tone maps the forward image straight into the canvas. The tone mapping reads the image texel by texel (texelFetch at gl\_FragCoord), so the image must be the canvas size. toneMappingFramebuffer (screenTexture.screen) is not written.

<MemberHeading id="screenframeoutput" depth="3" name="_screenFrameOutput" sig="_screenFrameOutput()" />

<MemberMeta badges="protected" sourceHref="/source/renderer/renderer-ts/#L1905" sourceLabel="Renderer.ts:1905" />

Tone maps the forward image into toneMappingFramebuffer, then draws the current output texture (screen, picking, depth, frustum) on the canvas.

<MemberHeading id="resolveforwardtexture" depth="3" name="_resolveForwardTexture" sig="_resolveForwardTexture()" />

<MemberMeta badges="protected" sourceHref="/source/renderer/renderer-ts/#L1935" sourceLabel="Renderer.ts:1935" />

Returns the texture holding the forward image; with MSAA it resolves it into hdrFramebuffer first.

<MemberHeading id="drawtonemapping" depth="3" name="_drawToneMapping" sig="_drawToneMapping()" />

<MemberMeta badges="protected" sourceHref="/source/renderer/renderer-ts/#L1947" sourceLabel="Renderer.ts:1947" />

Draws the tone mapped image into the bound framebuffer. Leaves the screen quad bound for the next pass.

<MemberHeading
  id="getdistancefrompixel"
  depth="3"
  name="getDistanceFromPixel"
  sig="getDistanceFromPixel(
	px: Vec2 | IBaseInputState,
): number | undefined"
/>

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2117" sourceLabel="Renderer.ts:2117" />

Returns the distance from the active (screen) camera to the 3d-surface using the defined screen coordinates

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- `number | undefined`

<MemberHeading
  id="getcartesianfrompixel"
  depth="3"
  name="getCartesianFromPixel"
  sig="getCartesianFromPixel(
	px: Vec2 | IBaseInputState,
): Vec3 | undefined"
/>

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2154" sourceLabel="Renderer.ts:2154" />

Returns 3d coordinates from screen coordinates

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading id="start" depth="3" name="start" sig="start()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2218" sourceLabel="Renderer.ts:2218" />

Function starts renderer

<MemberHeading id="addprogram" depth="3" name="addProgram" sig="addProgram(program: ShaderProgram)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2312" sourceLabel="Renderer.ts:2312" />

Adds a shader program to the renderer if it has not been added yet.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — ShaderProgram instance.

<MemberHeading id="addprograms" depth="3" name="addPrograms" sig="addPrograms(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2323" sourceLabel="Renderer.ts:2323" />

Adds one or more programs to the renderer. Supports both individual programs and nested program arrays.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

<MemberHeading id="addshaders" depth="3" name="addShaders" sig="addShaders(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2338" sourceLabel="Renderer.ts:2338" />

Alias for `Renderer.addPrograms`.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

## Instance Fields

<MemberHeading id="billboardstextureatlas" depth="3" name="billboardsTextureAtlas" sig="billboardsTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L457" sourceLabel="Renderer.ts:457" />

Texture atlas for the billboard images.

<MemberHeading id="fontatlas" depth="3" name="fontAtlas" sig="fontAtlas: FontAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L464" sourceLabel="Renderer.ts:464" />

Texture font atlas for the font families and styles.

<MemberHeading id="stroketextureatlas" depth="3" name="strokeTextureAtlas" sig="strokeTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L471" sourceLabel="Renderer.ts:471" />

Texture atlas for the rays, polylines, and strips.

<MemberHeading id="exposure" depth="3" name="exposure" sig="exposure: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L544" sourceLabel="Renderer.ts:544" />

HDR exposure.

<MemberHeading id="gamma" depth="3" name="gamma" sig="gamma: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L560" sourceLabel="Renderer.ts:560" />

Gamma correction value.

<MemberHeading id="whitepoint" depth="3" name="whitepoint" sig="whitepoint: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L576" sourceLabel="Renderer.ts:576" />

Tone mapping white point.

<MemberHeading id="frameopacity" depth="3" name="frameOpacity" sig="frameOpacity: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L592" sourceLabel="Renderer.ts:592" />

Scene objects opacity used with transparentBackground to achieve an AR effect.

<MemberHeading id="brightthreshold" depth="3" name="brightThreshold" sig="brightThreshold: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L608" sourceLabel="Renderer.ts:608" />

Bloom bright pass threshold.

<MemberHeading id="hdrformat" depth="3" name="hdrFormat" sig="hdrFormat" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L827" sourceLabel="Renderer.ts:827" />

Format of the forward and HDR render targets (IRendererParams.hdrFormat).

**Returns**

- `HdrFormat`

<MemberHeading id="activelightingfeatures" depth="3" name="activeLightingFeatures" sig="activeLightingFeatures" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L837" sourceLabel="Renderer.ts:837" />

Lighting features with something active, a variant mask of LIGHTING\_FEATURE\_\* bits: programs with lighting feature switches draw with program.variant(renderer.activeLightingFeatures).

**Returns**

- `number`

<MemberHeading id="isidle" depth="3" name="isIdle" sig="isIdle" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1682" sourceLabel="Renderer.ts:1682" />

Returns true when the renderer skips frames because nothing has been changed.
