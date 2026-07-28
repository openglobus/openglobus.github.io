---
title: Renderer
kind: class
longname: Renderer
description: High-level WebGL interface that runs the WebGL handler in real time.
---

# Renderer

<SourceLink href="/source/renderer/renderer-ts/#L122" label="Renderer.ts:122" />

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

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L481" sourceLabel="Renderer.ts:481" />

Sets HDR tone mapping operator and recompiles tone mapping shader.

**Parameters**

- `operator` (string) — Tone mapping operator name.

<MemberHeading id="gettonemapping" depth="3" name="getToneMapping" sig="getToneMapping(): string" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L501" sourceLabel="Renderer.ts:501" />

Returns HDR tone mapping operator.

**Returns**

- `string`

<MemberHeading id="applydepthforcamera" depth="3" name="applyDepthForCamera" sig="applyDepthForCamera()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L524" sourceLabel="Renderer.ts:524" />

Sets depth compare and clear value for the camera (reverse-Z vs classic). Pass null to restore the classic depth state: depthFunc(LESS), clearDepth(1), and clip-control NEGATIVE\_ONE\_TO\_ONE.

<MemberHeading id="seteventsactivity" depth="3" name="setEventsActivity" sig="setEventsActivity(activity: boolean)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L549" sourceLabel="Renderer.ts:549" />

Enables or disables renderer events.

**Parameters**

- `activity` (boolean) — Events activity flag.

<MemberHeading id="addpickingcallback" depth="3" name="addPickingCallback" sig="addPickingCallback(sender: any, callback: function): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L579" sourceLabel="Renderer.ts:579" />

Adds a picking render callback.

**Parameters**

- `sender` (any) — Callback context.
- `callback` (function) — Render callback function.

**Returns**

- `number` — Callback ID.

<MemberHeading id="removepickingcallback" depth="3" name="removePickingCallback" sig="removePickingCallback(id: number)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L594" sourceLabel="Renderer.ts:594" />

Removes a picking render callback.

**Parameters**

- `id` (number) — Callback ID to remove.

<MemberHeading id="assignpickingcolor" depth="3" name="assignPickingColor" sig="assignPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L620" sourceLabel="Renderer.ts:620" />

Assigns a picking color to an object.

**Parameters**

- `obj` (Object) — Object that receives a picking color.

<MemberHeading id="clearpickingcolor" depth="3" name="clearPickingColor" sig="clearPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L650" sourceLabel="Renderer.ts:650" />

Removes the picking color from an object.

**Parameters**

- `obj` (Object) — Object to clear the picking color from.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L681" sourceLabel="Renderer.ts:681" />

Returns the canvas client width.

**Returns**

- `number`

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L690" sourceLabel="Renderer.ts:690" />

Returns the canvas client height.

**Returns**

- `number`

<MemberHeading id="getviewportcenter" depth="3" name="getViewportCenter" sig="getViewportCenter(): Vec2" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L699" sourceLabel="Renderer.ts:699" />

Returns the canvas viewport center.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="addcontrol" depth="3" name="addControl" sig="addControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L709" sourceLabel="Renderer.ts:709" />

Adds a control to the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="addcontrols" depth="3" name="addControls" sig="addControls(cArr: Array.<Control>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L718" sourceLabel="Renderer.ts:718" />

Adds an array of controls to the renderer.

**Parameters**

- `cArr` (Array.\<[Control](/control)>) — Control array.

<MemberHeading id="removecontrol" depth="3" name="removeControl" sig="removeControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L729" sourceLabel="Renderer.ts:729" />

Removes a control from the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L777" sourceLabel="Renderer.ts:777" />

Renderer initialization.

<MemberHeading id="addscene" depth="3" name="addScene" sig="addScene(scene: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L993" sourceLabel="Renderer.ts:993" />

Adds a scene to the renderer.

**Parameters**

- `scene` ([Scene](/scene)) — Scene.

<MemberHeading id="addscenebefore" depth="3" name="addSceneBefore" sig="addSceneBefore(scene: Scene, sceneBefore: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1015" sourceLabel="Renderer.ts:1015" />

Adds a scene to the renderer before a specific node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `sceneBefore` ([Scene](/scene)) — Insert before the sceneBefore node.

<MemberHeading id="addscenes" depth="3" name="addScenes" sig="addScenes(nodesArr: Array.<Scene>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1036" sourceLabel="Renderer.ts:1036" />

Adds scenes to the renderer.

**Parameters**

- `nodesArr` (Array.\<[Scene](/scene)>) — Render nodes array.

<MemberHeading id="enqueueentitycollectionstodraw" depth="3" name="enqueueEntityCollectionsToDraw" sig="enqueueEntityCollectionsToDraw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1080" sourceLabel="Renderer.ts:1080" />

TODO: replace with cache-friendly linked list by BillboardHandler, LabelHandler etc.

<MemberHeading id="markfordepthrefresh" depth="3" name="markForDepthRefresh" sig="markForDepthRefresh()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1091" sourceLabel="Renderer.ts:1091" />

Forces the depth buffer to be refreshed in the next frame. Has an effect for terrain altitude estimate precision.

<MemberHeading id="draw" depth="3" name="draw" sig="draw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1429" sourceLabel="Renderer.ts:1429" />

Draw nodes.

<MemberHeading
  id="getdistancefrompixel"
  depth="3"
  name="getDistanceFromPixel"
  sig="getDistanceFromPixel(
	px: Vec2 | IBaseInputState,
): number | undefined"
/>

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1767" sourceLabel="Renderer.ts:1767" />

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

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1806" sourceLabel="Renderer.ts:1806" />

Returns 3d coordinates from screen coordinates

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading id="start" depth="3" name="start" sig="start()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1869" sourceLabel="Renderer.ts:1869" />

Function starts renderer

<MemberHeading id="addprogram" depth="3" name="addProgram" sig="addProgram(program: ShaderProgram)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1958" sourceLabel="Renderer.ts:1958" />

Adds a shader program to the renderer if it has not been added yet.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — ShaderProgram instance.

<MemberHeading id="addprograms" depth="3" name="addPrograms" sig="addPrograms(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1969" sourceLabel="Renderer.ts:1969" />

Adds one or more programs to the renderer. Supports both individual programs and nested program arrays.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

<MemberHeading id="addshaders" depth="3" name="addShaders" sig="addShaders(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1984" sourceLabel="Renderer.ts:1984" />

Alias for `Renderer.addPrograms`.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

## Instance Fields

<MemberHeading id="billboardstextureatlas" depth="3" name="billboardsTextureAtlas" sig="billboardsTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L397" sourceLabel="Renderer.ts:397" />

Texture atlas for the billboard images.

<MemberHeading id="fontatlas" depth="3" name="fontAtlas" sig="fontAtlas: FontAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L404" sourceLabel="Renderer.ts:404" />

Texture font atlas for the font families and styles.

<MemberHeading id="stroketextureatlas" depth="3" name="strokeTextureAtlas" sig="strokeTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L411" sourceLabel="Renderer.ts:411" />

Texture atlas for the rays, polylines, and strips.
