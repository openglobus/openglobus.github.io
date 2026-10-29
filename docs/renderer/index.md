---
title: Renderer
kind: class
longname: Renderer
description: High-level WebGL interface that runs the WebGL handler in real time.
---

# Renderer

<SourceLink href="/source/renderer/renderer-ts/#L125" label="Renderer.ts:125" />

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

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L588" sourceLabel="Renderer.ts:588" />

Sets HDR tone mapping operator and recompiles tone mapping shader.

**Parameters**

- `operator` (string) — Tone mapping operator name.

<MemberHeading id="gettonemapping" depth="3" name="getToneMapping" sig="getToneMapping(): string" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L610" sourceLabel="Renderer.ts:610" />

Returns HDR tone mapping operator.

**Returns**

- `string`

<MemberHeading id="applydepthforcamera" depth="3" name="applyDepthForCamera" sig="applyDepthForCamera()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L633" sourceLabel="Renderer.ts:633" />

Sets depth compare and clear value for the camera (reverse-Z vs classic). Pass null to restore the classic depth state: depthFunc(LESS), clearDepth(1), and clip-control NEGATIVE\_ONE\_TO\_ONE.

<MemberHeading id="seteventsactivity" depth="3" name="setEventsActivity" sig="setEventsActivity(activity: boolean)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L659" sourceLabel="Renderer.ts:659" />

Enables or disables renderer events.

**Parameters**

- `activity` (boolean) — Events activity flag.

<MemberHeading id="addpickingcallback" depth="3" name="addPickingCallback" sig="addPickingCallback(sender: any, callback: function): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L689" sourceLabel="Renderer.ts:689" />

Adds a picking render callback.

**Parameters**

- `sender` (any) — Callback context.
- `callback` (function) — Render callback function.

**Returns**

- `number` — Callback ID.

<MemberHeading id="removepickingcallback" depth="3" name="removePickingCallback" sig="removePickingCallback(id: number)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L704" sourceLabel="Renderer.ts:704" />

Removes a picking render callback.

**Parameters**

- `id` (number) — Callback ID to remove.

<MemberHeading id="assignpickingcolor" depth="3" name="assignPickingColor" sig="assignPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L730" sourceLabel="Renderer.ts:730" />

Assigns a picking color to an object.

**Parameters**

- `obj` (Object) — Object that receives a picking color.

<MemberHeading id="clearpickingcolor" depth="3" name="clearPickingColor" sig="clearPickingColor(obj: Object)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L760" sourceLabel="Renderer.ts:760" />

Removes the picking color from an object.

**Parameters**

- `obj` (Object) — Object to clear the picking color from.

<MemberHeading id="getwidth" depth="3" name="getWidth" sig="getWidth(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L791" sourceLabel="Renderer.ts:791" />

Returns the canvas client width.

**Returns**

- `number`

<MemberHeading id="getheight" depth="3" name="getHeight" sig="getHeight(): number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L800" sourceLabel="Renderer.ts:800" />

Returns the canvas client height.

**Returns**

- `number`

<MemberHeading id="getviewportcenter" depth="3" name="getViewportCenter" sig="getViewportCenter(): Vec2" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L809" sourceLabel="Renderer.ts:809" />

Returns the canvas viewport center.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="addcontrol" depth="3" name="addControl" sig="addControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L819" sourceLabel="Renderer.ts:819" />

Adds a control to the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="addcontrols" depth="3" name="addControls" sig="addControls(cArr: Array.<Control>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L829" sourceLabel="Renderer.ts:829" />

Adds an array of controls to the renderer.

**Parameters**

- `cArr` (Array.\<[Control](/control)>) — Control array.

<MemberHeading id="removecontrol" depth="3" name="removeControl" sig="removeControl(control: Control)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L840" sourceLabel="Renderer.ts:840" />

Removes a control from the renderer.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="getinnercontainer" depth="3" name="getInnerContainer" sig="getInnerContainer()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L716" sourceLabel="Renderer.ts:716" />

The element the canvas is drawn in.

<MemberHeading id="getuicontainer" depth="3" name="getUIContainer" sig="getUIContainer()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L724" sourceLabel="Renderer.ts:724" />

Where the interface goes: the container given for it, or the inner one.

<MemberHeading id="initialize" depth="3" name="initialize" sig="initialize()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L902" sourceLabel="Renderer.ts:902" />

Renderer initialization.

<MemberHeading id="addscene" depth="3" name="addScene" sig="addScene(scene: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1128" sourceLabel="Renderer.ts:1128" />

Adds a scene to the renderer.

**Parameters**

- `scene` ([Scene](/scene)) — Scene.

<MemberHeading id="addscenebefore" depth="3" name="addSceneBefore" sig="addSceneBefore(scene: Scene, sceneBefore: Scene)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1151" sourceLabel="Renderer.ts:1151" />

Adds a scene to the renderer before a specific node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `sceneBefore` ([Scene](/scene)) — Insert before the sceneBefore node.

<MemberHeading id="addscenes" depth="3" name="addScenes" sig="addScenes(nodesArr: Array.<Scene>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1173" sourceLabel="Renderer.ts:1173" />

Adds scenes to the renderer.

**Parameters**

- `nodesArr` (Array.\<[Scene](/scene)>) — Render nodes array.

<MemberHeading id="enqueueentitycollectionstodraw" depth="3" name="enqueueEntityCollectionsToDraw" sig="enqueueEntityCollectionsToDraw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1217" sourceLabel="Renderer.ts:1217" />

TODO: replace with cache-friendly linked list by BillboardHandler, LabelHandler etc.

<MemberHeading id="markfordepthrefresh" depth="3" name="markForDepthRefresh" sig="markForDepthRefresh()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1228" sourceLabel="Renderer.ts:1228" />

Forces the depth buffer to be refreshed in the next frame. Has an effect for terrain altitude estimate precision.

<MemberHeading id="requestredraw" depth="3" name="requestRedraw" sig="requestRedraw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1567" sourceLabel="Renderer.ts:1567" />

Requests the next frame to be rendered.

<MemberHeading id="draw" depth="3" name="draw" sig="draw()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1590" sourceLabel="Renderer.ts:1590" />

Draw nodes.

<MemberHeading
  id="getdistancefrompixel"
  depth="3"
  name="getDistanceFromPixel"
  sig="getDistanceFromPixel(
	px: Vec2 | IBaseInputState,
): number | undefined"
/>

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1945" sourceLabel="Renderer.ts:1945" />

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

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1984" sourceLabel="Renderer.ts:1984" />

Returns 3d coordinates from screen coordinates

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading id="start" depth="3" name="start" sig="start()" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2048" sourceLabel="Renderer.ts:2048" />

Function starts renderer

<MemberHeading id="addprogram" depth="3" name="addProgram" sig="addProgram(program: ShaderProgram)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2141" sourceLabel="Renderer.ts:2141" />

Adds a shader program to the renderer if it has not been added yet.

**Parameters**

- `program` ([ShaderProgram](/shaderprogram)) — ShaderProgram instance.

<MemberHeading id="addprograms" depth="3" name="addPrograms" sig="addPrograms(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2152" sourceLabel="Renderer.ts:2152" />

Adds one or more programs to the renderer. Supports both individual programs and nested program arrays.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

<MemberHeading id="addshaders" depth="3" name="addShaders" sig="addShaders(...programs: ShaderProgram | Array.<ShaderProgram>)" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L2167" sourceLabel="Renderer.ts:2167" />

Alias for `Renderer.addPrograms`.

**Parameters**

- `programs` ([ShaderProgram](/shaderprogram) | Array.\<[ShaderProgram](/shaderprogram)>) — ShaderProgram list.

## Instance Fields

<MemberHeading id="billboardstextureatlas" depth="3" name="billboardsTextureAtlas" sig="billboardsTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L421" sourceLabel="Renderer.ts:421" />

Texture atlas for the billboard images.

<MemberHeading id="fontatlas" depth="3" name="fontAtlas" sig="fontAtlas: FontAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L428" sourceLabel="Renderer.ts:428" />

Texture font atlas for the font families and styles.

<MemberHeading id="stroketextureatlas" depth="3" name="strokeTextureAtlas" sig="strokeTextureAtlas: TextureAtlas" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L435" sourceLabel="Renderer.ts:435" />

Texture atlas for the rays, polylines, and strips.

<MemberHeading id="exposure" depth="3" name="exposure" sig="exposure: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L508" sourceLabel="Renderer.ts:508" />

HDR exposure.

<MemberHeading id="gamma" depth="3" name="gamma" sig="gamma: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L524" sourceLabel="Renderer.ts:524" />

Gamma correction value.

<MemberHeading id="whitepoint" depth="3" name="whitepoint" sig="whitepoint: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L540" sourceLabel="Renderer.ts:540" />

Tone mapping white point.

<MemberHeading id="frameopacity" depth="3" name="frameOpacity" sig="frameOpacity: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L556" sourceLabel="Renderer.ts:556" />

Scene objects opacity used with transparentBackground to achieve an AR effect.

<MemberHeading id="brightthreshold" depth="3" name="brightThreshold" sig="brightThreshold: number" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L572" sourceLabel="Renderer.ts:572" />

Bloom bright pass threshold.

<MemberHeading id="isidle" depth="3" name="isIdle" sig="isIdle" />

<MemberMeta sourceHref="/source/renderer/renderer-ts/#L1575" sourceLabel="Renderer.ts:1575" />

Returns true when the renderer skips frames because nothing has been changed.
