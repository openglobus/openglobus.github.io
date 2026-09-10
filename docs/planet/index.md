---
title: Planet
kind: class
longname: Planet
description: Main class for rendering a planet.
---

# Planet

**Extends:&#x20;**[`Scene`](/scene)

<SourceLink href="/source/scene/planet-ts/#L167" label="Planet.ts:167" />

Main class for rendering a planet.

**Fires**

- `event:draw - Triggered before globe frame begins to render.`
- `event:layeradd - Triggered when a layer is added to the planet.`
- `event:baselayerchange - Triggered when the base layer changes.`
- `event:layerremove - Triggered when a layer is removed from the planet.`
- `event:layervisibilitychange - Triggered when layer visibility changes.`
- `event:rendercompleted - Triggered when all data is loaded.`
- `event:terraincompleted - Triggered when terrain data is loaded.`
- `event:layerloadend - Triggered when layer data finishes loading.`

---

## Constructor

<Signature code="new Planet(options?: IPlanetParams): Planet" />

**Parameters**

- `options` (IPlanetParams, optional, default: "{}") — Planet configuration parameters.
  - `options.name` (string, optional) — Planet name.
  - `options.ellipsoid` ([Ellipsoid](/ellipsoid), optional, default: "wgs84") — Planet ellipsoid.
  - `options.minAltitude` (number, optional) — Minimum camera altitude above terrain.
  - `options.maxAltitude` (number, optional) — Maximum camera altitude above terrain.
  - `options.frustums` (Array.\<Array.\<number>>, optional) — Planet camera frustum configuration.
  - `options.maxGridSize` (number, optional, default: 256) — Maximum terrain segment grid size.
  - `options.maxLoadingRequests` (number, optional, default: 12) — Maximum concurrent tile loading requests.
  - `options.maxNodesCount` (number, optional, default: 400) — Maximum number of created quadtree nodes.
  - `options.maxEqualZoomAltitude` (number, optional, default: "15000000.0") — Max altitude where visible segments keep the same zoom.
  - `options.minEqualZoomAltitude` (number, optional, default: "10000.0") — Min altitude where visible segments keep the same zoom.
  - `options.minEqualZoomCameraSlope` (number, optional, default: 0.8) — Min camera slope for equal-zoom segment strategy.
  - `options.quadTreeStrategyPrototype` (function, optional, default: "EarthQuadTreeStrategy") — Quadtree strategy class.
  - `options.nightTextureSrc` (string | null, optional) — Night lights texture URL (`null` disables texture loading).
  - `options.specularTextureSrc` (string | null, optional) — Water/specular mask texture URL (`null` disables texture loading).
  - `options.atmosphereEnabled` (boolean, optional, default: false) — Enables atmosphere rendering.
  - `options.transitionOpacityEnabled` (boolean, optional) — Enables terrain transition opacity blending.
  - `options.atmosphereParameters` (IAtmosphereParams, optional) — Atmosphere model parameters.
  - `options.minDistanceBeforeMemClear` (number, optional) — Camera travel distance threshold before automatic memory cleanup.
  - `options.disableMemClear` (boolean, optional, default: false) — Disables automatic memory cleanup via memClear().
  - `options.vectorTileSize` (number, optional) — Vector tile texture size for vector layer baking.
  - `options.transparentBackground` (boolean, optional, default: false) — Enables transparent renderer background.
  - `options.nearPlaneStrategy` (INearPlaneStrategy, optional) — Near-plane strategy implementation.
  - `options.shadeMode` (number | string, optional, default: 0.5) — Terrain shading mode: `0|none|unlit`, `0.5|phong`, `1|pbr`.
  - `options.reverseDepth` (boolean, optional, default: true) — Enables reverse-Z depth for the default planet camera in perspective mode.

---

## Instance Methods

<MemberHeading id="getnorthframerotation" depth="3" name="getNorthFrameRotation" sig="getNorthFrameRotation(cartesian: Vec3): Quat" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L562" sourceLabel="Planet.ts:562" />

Returns local north frame rotation for a cartesian point.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="getframerotation" depth="3" name="getFrameRotation" sig="getFrameRotation(cartesian: Vec3): Quat" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L572" sourceLabel="Planet.ts:572" />

Returns local frame rotation for a cartesian point.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Cartesian point.

**Returns**

- [`Quat`](/quat)

<MemberHeading id="addcontrol" depth="3" name="addControl" sig="addControl(control: Control)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L776" sourceLabel="Planet.ts:776" />

Add the given control to the renderer of the planet scene.

**Parameters**

- `control` ([Control](/control)) — Control.

<MemberHeading id="addcontrols" depth="3" name="addControls" sig="addControls(cArr: Array.<Control>)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L786" sourceLabel="Planet.ts:786" />

Add the given controls array to the renderer of the planet.

**Parameters**

- `cArr` (Array.\<[Control](/control)>) — Control array.

<MemberHeading id="getlayerbyname" depth="3" name="getLayerByName" sig="getLayerByName(name: string): Layer | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L798" sourceLabel="Planet.ts:798" />

Returns a layer by name.

**Parameters**

- `name` (string) — Layer name.

**Returns**

- [`Layer`](/layer)` | undefined`

<MemberHeading id="addlayer" depth="3" name="addLayer" sig="addLayer(layer: Layer)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L811" sourceLabel="Planet.ts:811" />

Adds layer to the planet.

**Parameters**

- `layer` ([Layer](/layer)) — Layer object.

<MemberHeading id="onlayervisibilitychanged" depth="3" name="_onLayerVisibilityChanged" sig="_onLayerVisibilityChanged(layer: Layer)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L820" sourceLabel="Planet.ts:820" />

Dispatch layer visibility changing event.

**Parameters**

- `layer` ([Layer](/layer)) — Changed layer.

<MemberHeading id="addlayers" depth="3" name="addLayers" sig="addLayers(layers: Array.<Layer>)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L829" sourceLabel="Planet.ts:829" />

Adds the given layers array to the planet.

**Parameters**

- `layers` (Array.\<[Layer](/layer)>) — Layers array.

<MemberHeading id="removelayer" depth="3" name="removeLayer" sig="removeLayer(layer: Layer)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L840" sourceLabel="Planet.ts:840" />

Removes the given layer from the planet.

**Parameters**

- `layer` ([Layer](/layer)) — Layer to remove.

<MemberHeading id="clearlayermaterial" depth="3" name="_clearLayerMaterial" sig="_clearLayerMaterial(layer: Layer)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L849" sourceLabel="Planet.ts:849" />

Clears material resources related to a layer in quadtree segments.

**Parameters**

- `layer` ([Layer](/layer)) — Material layer.

<MemberHeading id="setbaselayer" depth="3" name="setBaseLayer" sig="setBaseLayer(layer: Layer)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L858" sourceLabel="Planet.ts:858" />

Sets base layer coverage to the planet.

**Parameters**

- `layer` ([Layer](/layer)) — Layer object.

<MemberHeading id="setheightfactor" depth="3" name="setHeightFactor" sig="setHeightFactor(factor: number)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L899" sourceLabel="Planet.ts:899" />

Sets elevation scale. 1.0 is default.

**Parameters**

- `factor` (number) — Elevation scale.

<MemberHeading id="getheightfactor" depth="3" name="getHeightFactor" sig="getHeightFactor(): number" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L914" sourceLabel="Planet.ts:914" />

Gets elevation scale.

**Returns**

- `number` — Terrain elevation scale

<MemberHeading
  id="setlodsize"
  depth="3"
  name="setLodSize"
  sig="setLodSize(
	currentLodSize: number,
	minLodSize?: number,
	maxLodSize?: number,
)"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L926" sourceLabel="Planet.ts:926" />

Sets LOD thresholds for quadtree terrain rendering. Proxy to `QuadTreeStrategy.setLodSize`.

**Parameters**

- `currentLodSize` (number) — Current LOD size target.
- `minLodSize` (number, optional) — Minimum LOD size.
- `maxLodSize` (number, optional) — Maximum LOD size.

<MemberHeading id="getterrainbyname" depth="3" name="getTerrainByName" sig="getTerrainByName(name: string): EmptyTerrain | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L945" sourceLabel="Planet.ts:945" />

Returns a terrain provider by name.

**Parameters**

- `name` (string) — Terrain provider name.

**Returns**

- [`EmptyTerrain`](/emptyterrain)` | undefined`

<MemberHeading id="addterrain" depth="3" name="addTerrain" sig="addTerrain(terrain: EmptyTerrain)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L958" sourceLabel="Planet.ts:958" />

Attaches terrain provider to the planet without activating it.

**Parameters**

- `terrain` ([EmptyTerrain](/emptyterrain)) — Terrain provider.

<MemberHeading id="addterrains" depth="3" name="addTerrains" sig="addTerrains(terrains: Array.<EmptyTerrain>)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L973" sourceLabel="Planet.ts:973" />

Attaches the given terrain providers array to the planet.

**Parameters**

- `terrains` (Array.\<[EmptyTerrain](/emptyterrain)>) — Terrain providers array.

<MemberHeading id="removeterrain" depth="3" name="removeTerrain" sig="removeTerrain(terrain: EmptyTerrain)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L984" sourceLabel="Planet.ts:984" />

Detaches terrain provider from the planet. Currently active terrain provider can't be removed.

**Parameters**

- `terrain` ([EmptyTerrain](/emptyterrain)) — Terrain provider.

<MemberHeading id="setterrain" depth="3" name="setTerrain" sig="setTerrain(terrain: EmptyTerrain)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1003" sourceLabel="Planet.ts:1003" />

Sets terrain provider. Only one terrain provider could be active at a time. The given provider is automatically attached to the planet terrain providers list.

**Parameters**

- `terrain` ([EmptyTerrain](/emptyterrain)) — Terrain provider.

<MemberHeading id="initatmosphereshader" depth="3" name="initAtmosphereShader" sig="initAtmosphereShader(atmosParams?: AtmosphereParameters)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1050" sourceLabel="Planet.ts:1050" />

Reinitializes terrain forward/deferred shaders for atmosphere mode.

**Parameters**

- `atmosParams` (AtmosphereParameters, optional) — Optional atmosphere shader parameters.

<MemberHeading id="init" depth="3" name="init" sig="init()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1168" sourceLabel="Planet.ts:1168" />

Initializes render resources, workers, shaders, and layer state.

<MemberHeading id="initlayers" depth="3" name="initLayers" sig="initLayers()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1343" sourceLabel="Planet.ts:1343" />

Reattaches already registered layers to apply initialization logic.

<MemberHeading
  id="createdefaulttextures"
  depth="3"
  name="createDefaultTextures"
  sig="createDefaultTextures(
	param0: IDefaultTextureParams,
	param1: IDefaultTextureParams,
)"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L1368" sourceLabel="Planet.ts:1368" />

Creates default textures first for the North Pole and whole globe and second for the South Pole.

**Parameters**

- `param0` (IDefaultTextureParams) — Default texture params for the first texture.
- `param1` (IDefaultTextureParams) — Default texture params for the second texture.

<MemberHeading id="updateattributionslist" depth="3" name="updateAttributionsList" sig="updateAttributionsList()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1403" sourceLabel="Planet.ts:1403" />

Updates attribution lists

<MemberHeading id="updatevisiblelayers" depth="3" name="updateVisibleLayers" sig="updateVisibleLayers()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1420" sourceLabel="Planet.ts:1420" />

Schedules visible layers list refresh for the next frame.

<MemberHeading id="applyattribution" depth="3" name="_applyAttribution" sig="_applyAttribution()" />

<MemberMeta badges="protected" sourceHref="/source/scene/planet-ts/#L1473" sourceLabel="Planet.ts:1473" />

Apply to render list of layer attributions

<MemberHeading id="sortlayers" depth="3" name="_sortLayers" sig="_sortLayers()" />

<MemberMeta badges="protected" sourceHref="/source/scene/planet-ts/#L1485" sourceLabel="Planet.ts:1485" />

Sort visible layer - preparing for rendering.

<MemberHeading id="lockquadtree" depth="3" name="lockQuadTree" sig="lockQuadTree()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1687" sourceLabel="Planet.ts:1687" />

Pauses quadtree render-node collection and disables camera terrain collision checks.

<MemberHeading id="unlockquadtree" depth="3" name="unlockQuadTree" sig="unlockQuadTree()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1700" sourceLabel="Planet.ts:1700" />

Resumes quadtree render-node collection and enables camera terrain collision checks.

<MemberHeading id="renderingopaquescreennodes" depth="3" name="_renderingOpaqueScreenNodes" sig="_renderingOpaqueScreenNodes()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1984" sourceLabel="Planet.ts:1984" />

Drawing nodes

<MemberHeading
  id="renderdepthframebuffer"
  depth="3"
  name="renderDepthFramebuffer"
  sig="renderDepthFramebuffer(
	cam: PlanetCamera,
	quadTreeStrategy: QuadTreeStrategy,
)"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2265" sourceLabel="Planet.ts:2265" />

Renders terrain depth and frustum id into the depth framebuffer.

**Parameters**

- `cam` ([PlanetCamera](/planetcamera)) — Camera used for rendering.
- `quadTreeStrategy` (QuadTreeStrategy) — Quadtree strategy with rendered node lists.

<MemberHeading id="memclear" depth="3" name="memClear" sig="memClear()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2334" sourceLabel="Planet.ts:2334" />

Starts a clear memory thread.

<MemberHeading id="getrayintersectionellipsoid" depth="3" name="getRayIntersectionEllipsoid" sig="getRayIntersectionEllipsoid(ray: Ray): Vec3 | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2366" sourceLabel="Planet.ts:2366" />

Returns ray vector hit ellipsoid coordinates. If the ray doesn't hit ellipsoid, it returns 'undefined'.

**Parameters**

- `ray` ([Ray](/ray)) — Ray.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading
  id="getcartesianfrompixelellipsoid"
  depth="3"
  name="getCartesianFromPixelEllipsoid"
  sig="getCartesianFromPixelEllipsoid(
	px: Vec2 | IBaseInputState,
): Vec3 | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2376" sourceLabel="Planet.ts:2376" />

Project screen coordinates to the planet ellipsoid.

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading id="getlonlatfrompixelellipsoid" depth="3" name="getLonLatFromPixelEllipsoid" sig="getLonLatFromPixelEllipsoid(px: Vec2): LonLat | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2387" sourceLabel="Planet.ts:2387" />

Project screen coordinates to the planet ellipsoid.

**Parameters**

- `px` ([Vec2](/vec2)) — Screen coordinates.

**Returns**

- [`LonLat`](/lonlat)` | undefined`

<MemberHeading id="getcartesianfrommouseterrain" depth="3" name="getCartesianFromMouseTerrain" sig="getCartesianFromMouseTerrain(): Vec3 | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2399" sourceLabel="Planet.ts:2399" />

Returns mouse position cartesian coordinates on the current terrain.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading
  id="getcartesianfrompixelterrain"
  depth="3"
  name="getCartesianFromPixelTerrain"
  sig="getCartesianFromPixelTerrain(
	px: Vec2 | IBaseInputState,
): Vec3 | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2415" sourceLabel="Planet.ts:2415" />

Returns screen coordinates cartesian coordinates on the current terrain. position or null if input coordinates is outside the planet.

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Pixel screen 2d coordinates.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading
  id="getlonlatfrompixelterrain"
  depth="3"
  name="getLonLatFromPixelTerrain"
  sig="getLonLatFromPixelTerrain(
	px: Vec2 | IBaseInputState,
): LonLat | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2431" sourceLabel="Planet.ts:2431" />

Returns geodetic coordinates on the current terrain planet by its screen coordinates. position or null if input coordinates is outside the planet.

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Pixel screen 2d coordinates.

**Returns**

- [`LonLat`](/lonlat)` | undefined`

<MemberHeading id="getpixelfromcartesian" depth="3" name="getPixelFromCartesian" sig="getPixelFromCartesian(coords: Vec3): Vec2" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2444" sourceLabel="Planet.ts:2444" />

Project cartesian coordinates to screen space.

**Parameters**

- `coords` ([Vec3](/vec3)) — Cartesian coordinates.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="getpixelfromlonlat" depth="3" name="getPixelFromLonLat" sig="getPixelFromLonLat(lonlat: LonLat): Vec2 | undefined" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2454" sourceLabel="Planet.ts:2454" />

Project geodetic coordinates to screen space.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- [`Vec2`](/vec2)` | undefined`

<MemberHeading
  id="getdistancefrompixelellipsoid"
  depth="3"
  name="getDistanceFromPixelEllipsoid"
  sig="getDistanceFromPixelEllipsoid(
	px: Vec2 | IBaseInputState,
): number | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2467" sourceLabel="Planet.ts:2467" />

Returns distance from an active (screen) camera to the planet ellipsoid.

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- `number | undefined`

<MemberHeading id="getdistancefrompixel" depth="3" name="getDistanceFromPixel" sig="getDistanceFromPixel(px: Vec2 | IBaseInputState): number" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2483" sourceLabel="Planet.ts:2483" />

Returns distance from active (screen) camera to the planet terrain by screen coordinates.

**Parameters**

- `px` ([Vec2](/vec2) | IBaseInputState) — Screen coordinates.

**Returns**

- `number`

<MemberHeading id="viewextent" depth="3" name="viewExtent" sig="viewExtent(extent: Extent)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2492" sourceLabel="Planet.ts:2492" />

Sets camera to the planet geographical extent.

**Parameters**

- `extent` ([Extent](/extent)) — Geographical extent.

<MemberHeading id="viewextentarr" depth="3" name="viewExtentArr" sig="viewExtentArr(extentArr: Array.<number>)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2506" sourceLabel="Planet.ts:2506" />

Fits camera position for the view extent.

**Parameters**

- `extentArr` (Array.\<number>) — Geographical extent array, (exactly 4 entries) where index 0 - southwest longitude, 1 - latitude southwest, 2 - longitude northeast, 3 - latitude northeast.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2515" sourceLabel="Planet.ts:2515" />

Gets current camera view extent.

**Returns**

- [`Extent`](/extent)

<MemberHeading id="getviewextent" depth="3" name="getViewExtent" sig="getViewExtent(): Extent" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2552" sourceLabel="Planet.ts:2552" />

Returns currently cached quadtree view extent.

**Returns**

- [`Extent`](/extent)

<MemberHeading id="viewlonlat" depth="3" name="viewLonLat" sig="viewLonLat(lonlat: LonLat, lookLonLat?: LonLat, up?: Vec3)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2563" sourceLabel="Planet.ts:2563" />

Sets camera to the planet geographical position.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Camera position.
- `lookLonLat` ([LonLat](/lonlat), optional) — Viewpoint.
- `up` ([Vec3](/vec3), optional) — Camera up vector.

<MemberHeading
  id="flyextent"
  depth="3"
  name="flyExtent"
  sig="flyExtent(
	extent: Extent,
	height?: Number,
	params: IPlanetFlyCartesianParams,
)"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2574" sourceLabel="Planet.ts:2574" />

Fly active camera to the view extent.

**Parameters**

- `extent` ([Extent](/extent)) — Geographical extent.
- `height` (Number, optional) — Height on the end of the flight route.
- `params` (IPlanetFlyCartesianParams) — Flight parameters.

<MemberHeading id="flycartesian" depth="3" name="flyCartesian" sig="flyCartesian(cartesian: Vec3, params: IPlanetFlyCartesianParams)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2584" sourceLabel="Planet.ts:2584" />

Fly camera to the point.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Fly cartesian coordinates.
- `params` (IPlanetFlyCartesianParams) — Flight parameters.

<MemberHeading id="flylonlat" depth="3" name="flyLonLat" sig="flyLonLat(lonlat: LonLat, params: IPlanetFlyCartesianParams)" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2594" sourceLabel="Planet.ts:2594" />

Fly camera to the geodetic position.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Fly geographical coordinates.
- `params` (IPlanetFlyCartesianParams) — Flight parameters.

<MemberHeading id="stopflying" depth="3" name="stopFlying" sig="stopFlying()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2602" sourceLabel="Planet.ts:2602" />

Stop current flight.

<MemberHeading id="updatebillboardstexcoords" depth="3" name="updateBillboardsTexCoords" sig="updateBillboardsTexCoords()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2610" sourceLabel="Planet.ts:2610" />

Refreshes billboard texture coordinates for all visible entity collections.

<MemberHeading
  id="getentityterrainpoint"
  depth="3"
  name="getEntityTerrainPoint"
  sig="getEntityTerrainPoint(
	entity: Entity,
	res: Vec3,
): Vec3 | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2636" sourceLabel="Planet.ts:2636" />

Finds terrain point under an entity in currently rendered segments.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to test.
- `res` ([Vec3](/vec3)) — Output vector for terrain point.

**Returns**

- [`Vec3`](/vec3)` | undefined`

<MemberHeading
  id="getcartesianterrainpoint"
  depth="3"
  name="getCartesianTerrainPoint"
  sig="getCartesianTerrainPoint(
	cart: Vec3,
	res: Vec3,
): number | undefined"
/>

<MemberMeta sourceHref="/source/scene/planet-ts/#L2654" sourceLabel="Planet.ts:2654" />

Finds terrain point under a cartesian point.

**Parameters**

- `cart` ([Vec3](/vec3)) — Cartesian point to test.
- `res` ([Vec3](/vec3)) — Output vector for terrain point.

**Returns**

- `number | undefined`

<MemberHeading id="getheightdefault" depth="3" name="getHeightDefault" sig="getHeightDefault(lonLat: LonLat): Promise.<number>" />

<MemberMeta badges="async" sourceHref="/source/scene/planet-ts/#L2682" sourceLabel="Planet.ts:2682" />

Returns terrain height at the given coordinates in default terrain datum.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- `Promise.<number>`

<MemberHeading id="getheightaboveell" depth="3" name="getHeightAboveELL" sig="getHeightAboveELL(lonLat: LonLat): Promise.<number>" />

<MemberMeta badges="async" sourceHref="/source/scene/planet-ts/#L2700" sourceLabel="Planet.ts:2700" />

Returns terrain height above ellipsoid at the given coordinates.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — Geodetic coordinates.

**Returns**

- `Promise.<number>`

<MemberHeading id="onremove" depth="3" name="onremove" sig="onremove()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2716" sourceLabel="Planet.ts:2716" />

Handles node detachment and frees runtime terrain data.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L2731" sourceLabel="Planet.ts:2731" />

**Overrides:&#x20;**`Scene#destroy`

Destroy planet.

<MemberHeading id="addnode" depth="3" name="addNode" sig="addNode()" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L116" sourceLabel="Scene.ts:116" />

_Inherited from `Scene#addNode`_

**Overrides:&#x20;**`Scene#addNode`

Adds node to the current hierarchy.

<MemberHeading id="assign" depth="3" name="assign" sig="assign(renderer: Renderer)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L132" sourceLabel="Scene.ts:132" />

_Inherited from `Scene#assign`_

**Overrides:&#x20;**`Scene#assign`

Assign render node with renderer.

**Parameters**

- `renderer` ([Renderer](/renderer)) — Render node's renderer.

<MemberHeading id="clear" depth="3" name="_clear" sig="_clear()" />

<MemberMeta badges="protected" sourceHref="/source/scene/scene-ts/#L196" sourceLabel="Scene.ts:196" />

_Inherited from `Scene#_clear`_

**Overrides:&#x20;**`Scene#_clear`

Clear current node.

<MemberHeading
  id="addentitycollection"
  depth="3"
  name="addEntityCollection"
  sig="addEntityCollection(
	entityCollection: EntityCollection,
	isHidden?: boolean,
): Scene"
/>

<MemberMeta sourceHref="/source/scene/scene-ts/#L209" sourceLabel="Scene.ts:209" />

_Inherited from `Scene#addEntityCollection`_

**Overrides:&#x20;**`Scene#addEntityCollection`

Adds an entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection.
- `isHidden` (boolean, optional) — If it's true that this collection has specific rendering.

**Returns**

- [`Scene`](/scene)

<MemberHeading id="removeentitycollection" depth="3" name="removeEntityCollection" sig="removeEntityCollection(entityCollection: EntityCollection)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L232" sourceLabel="Scene.ts:232" />

_Inherited from `Scene#removeEntityCollection`_

**Overrides:&#x20;**`Scene#removeEntityCollection`

Removes entity collection.

**Parameters**

- `entityCollection` ([EntityCollection](/entitycollection)) — Entity collection for remove.

<MemberHeading id="isactive" depth="3" name="isActive" sig="isActive(): Boolean" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L265" sourceLabel="Scene.ts:265" />

_Inherited from `Scene#isActive`_

**Overrides:&#x20;**`Scene#isActive`

Gets render node activity.

**Returns**

- `Boolean`

<MemberHeading id="setactive" depth="3" name="setActive" sig="setActive(isActive: boolean)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L274" sourceLabel="Scene.ts:274" />

_Inherited from `Scene#setActive`_

**Overrides:&#x20;**`Scene#setActive`

Rendering activation.

**Parameters**

- `isActive` (boolean) — Activation flag.

<MemberHeading id="setdrawmode" depth="3" name="setDrawMode" sig="setDrawMode(mode: Number)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L298" sourceLabel="Scene.ts:298" />

_Inherited from `Scene#setDrawMode`_

**Overrides:&#x20;**`Scene#setDrawMode`

Sets draw mode

**Parameters**

- `mode` (Number) — Draw mode, such as gl.TRIANGLES, gl.TRIANGLE\_STRIP, gl.LINES etc.

<MemberHeading id="drawpickingentitycollections" depth="3" name="drawPickingEntityCollections" sig="drawPickingEntityCollections(ec: Array.<EntityCollection>)" />

<MemberMeta sourceHref="/source/scene/scene-ts/#L334" sourceLabel="Scene.ts:334" />

_Inherited from `Scene#drawPickingEntityCollections`_

**Overrides:&#x20;**`Scene#drawPickingEntityCollections`

Draw entity collections picking frame.

**Parameters**

- `ec` (Array.\<[EntityCollection](/entitycollection)>) — Entity collection array.

## Instance Fields

<MemberHeading id="terrainready" depth="3" name="terrainReady" sig="terrainReady" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L543" sourceLabel="Planet.ts:543" />

Returns true if the current terrain data set is loaded

<MemberHeading id="maxgridsize" depth="3" name="maxGridSize" sig="maxGridSize" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L552" sourceLabel="Planet.ts:552" />

Returns max segment grid size used by the quadtree.

**Returns**

- `number`

<MemberHeading id="atmospheremaxopacity" depth="3" name="atmosphereMaxOpacity" sig="atmosphereMaxOpacity" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L581" sourceLabel="Planet.ts:581" />

Sets maximum atmosphere opacity.

**Parameters**

- `opacity` (number) — Opacity value in range `[0..1]`.

<MemberHeading id="atmospheremaxopacity" depth="3" name="atmosphereMaxOpacity" sig="atmosphereMaxOpacity" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L591" sourceLabel="Planet.ts:591" />

Gets maximum atmosphere opacity.

**Returns**

- `number`

<MemberHeading id="atmosphereminopacity" depth="3" name="atmosphereMinOpacity" sig="atmosphereMinOpacity" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L600" sourceLabel="Planet.ts:600" />

Sets minimum atmosphere opacity.

**Parameters**

- `opacity` (number) — Opacity value in range `[0..1]`.

<MemberHeading id="atmosphereminopacity" depth="3" name="atmosphereMinOpacity" sig="atmosphereMinOpacity" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L610" sourceLabel="Planet.ts:610" />

Gets minimum atmosphere opacity.

**Returns**

- `number`

<MemberHeading id="atmosphereopacitycurveshift" depth="3" name="atmosphereOpacityCurveShift" sig="atmosphereOpacityCurveShift" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L619" sourceLabel="Planet.ts:619" />

Sets atmosphere opacity interpolation curve shift.

**Parameters**

- `curveShift` (number) — Curve shift. Zero produces linear interpolation.

<MemberHeading id="atmosphereopacitycurveshift" depth="3" name="atmosphereOpacityCurveShift" sig="atmosphereOpacityCurveShift" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L629" sourceLabel="Planet.ts:629" />

Gets atmosphere opacity interpolation curve shift.

**Returns**

- `number`

<MemberHeading id="atmospheremaxminopacity" depth="3" name="atmosphereMaxMinOpacity" sig="atmosphereMaxMinOpacity" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L638" sourceLabel="Planet.ts:638" />

Gets target atmosphere opacity parameters `[max, min, curveShift]`.

**Returns**

- `Float32Array`

<MemberHeading id="atmosphereenabled" depth="3" name="atmosphereEnabled" sig="atmosphereEnabled" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L687" sourceLabel="Planet.ts:687" />

Enables or disables atmosphere rendering and related programs.

**Parameters**

- `enabled` (boolean) — Atmosphere activity flag.

<MemberHeading id="atmosphereenabled" depth="3" name="atmosphereEnabled" sig="atmosphereEnabled" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L700" sourceLabel="Planet.ts:700" />

Returns atmosphere activity flag.

**Returns**

- `boolean`

<MemberHeading id="shademode" depth="3" name="shadeMode" sig="shadeMode" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L709" sourceLabel="Planet.ts:709" />

Returns active terrain shade mode.

**Returns**

- `number`

<MemberHeading id="shademode" depth="3" name="shadeMode" sig="shadeMode" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L718" sourceLabel="Planet.ts:718" />

Sets terrain shade mode.

**Parameters**

- `m` (number | string) — Shade mode id (`0|0.5|1` or `none|phong|pbr`).

<MemberHeading id="normalmapcreator" depth="3" name="normalMapCreator" sig="normalMapCreator" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L740" sourceLabel="Planet.ts:740" />

Returns normal-map generator used by the planet.

**Returns**

- `NormalMapCreator`

<MemberHeading id="layers" depth="3" name="layers" sig="layers" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L749" sourceLabel="Planet.ts:749" />

Returns current layers snapshot.

**Returns**

- `Array.<`[`Layer`](/layer)`>`

<MemberHeading id="sun" depth="3" name="sun" sig="sun" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L758" sourceLabel="Planet.ts:758" />

Returns Sun control instance if attached to the renderer.

**Returns**

- [`Sun`](/sun)` | undefined`

<MemberHeading id="sunpos" depth="3" name="sunPos" sig="sunPos" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L767" sourceLabel="Planet.ts:767" />

Returns current sun world position.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="terrains" depth="3" name="terrains" sig="terrains" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L935" sourceLabel="Planet.ts:935" />

Returns attached terrain providers snapshot.

**Returns**

- `Array.<`[`EmptyTerrain`](/emptyterrain)`>`

<MemberHeading id="atmospherecontrol" depth="3" name="atmosphereControl" sig="atmosphereControl" />

<MemberMeta sourceHref="/source/scene/planet-ts/#L1068" sourceLabel="Planet.ts:1068" />

Returns atmosphere control instance bound to the planet.

**Returns**

- `Atmosphere`
