---
title: Globe
kind: class
longname: Globe
description: Creates a WebGL context with globe.
---

# Globe

<SourceLink href="/source/globe-ts/#L167" label="Globe.ts:167" />

Creates a WebGL context with globe.

**Example**

Basic initialization

```js
globus = new Globe({
    atmosphere: false,
    target: 'globus',
    name: 'Earth',
    controls: [
         new control.Navigation(),
         new control.KeyboardNavigation(),
         new control.EarthCoordinates(),
         new control.LayerSwitcher({),
         new control.TouchNavigation(),
         new control.Sun()
     ],
    terrain: new GlobusRGBTerrain(),
    layers: [new OpenStreetMap(), new Bing()],
    atmosphereEnabled: true
});
```

---

## Constructor

<Signature code="new Globe(options: IGlobeParams): Globe" />

**Parameters**

- `options` (IGlobeParams) — Options:
  - `options.target` (string | HTMLElement) — HTML element id where planet canvas have to be created.
  - `options.name` (string, optional) — Planet name. Default is uniq identifier.
  - `options.terrain` ([EmptyTerrain](/emptyterrain), optional) — Terrain provider. Default no terrain - og.terrain.EmptyTerrain.
  - `options.controls` (Array.\<[Control](/control)>, optional) — Controls.
  - `options.layers` (Array.\<[Layer](/layer)>, optional) — Planet layers.
  - `options.viewExtent` ([Extent](/extent) | [ExtentBoundingBox](/extentboundingbox), optional) — \[options.viewExtent] - Viewable starting extent.
  - `options.autoActivate` (boolean, optional, default: true) — Globe rendering auto activation flag. True is default.
  - `options.attributionContainer` (HTMLElement, optional) — Container for attribution list.
  - `options.maxGridSize` (number, optional, default: 128) — = Maximal segment grid size. 128 is default
  - `options.fontsSrc` (string, optional) — Fonts collection url.
  - `options.resourcesSrc` (string, optional) — Resources root src.
  - `options.nightTextureSrc` (string, optional) — Night-glowing image sources
  - `options.specularTextureSrc` (string, optional) — Specular water mask image sourcr
  - `options.maxAltitude` (number, optional) — Maximal camera altitude above terrain
  - `options.minAltitude` (number, optional, default: "1.0") — Minimal camera altitude above terrain
  - `options.maxEqualZoomAltitude` (number, optional) — Maximal altitude since segments on the screen became the same zoom level
  - `options.minEqualZoomAltitude` (number, optional, default: "10000.0") — Minimal altitude since segments on the screen became the same zoom level
  - `options.minEqualZoomCameraSlope` (number, optional, default: 0.8) — Minimal camera slope above the globe where segments on the screen became the same zoom level
  - `options.loadingBatchSize` (number, optional, default: 12)
  - `options.quadTreeStrategyPrototype` (number, optional) — Prototype of quadTree. QuadTreeStrategy for Earth is default.
  - `options.msaa` (number, optional, default: 0) — MSAA antialiasing parameter: 2,4,8,16. Default is 0.
  - `options.deferredDisabled` (boolean, optional, default: false) — Disables deferred and WOIT pipelines and renders objects with forward shaders.
  - `options.pixelRatio` (number, optional) — Device pixel ratio. Default is current screen DPI.
  - `options.atmosphereEnabled` (boolean, optional) — Enables atmosphere effect.
  - `options.transtitionOpacityEnabled` (boolean, optional) — Enables terrain smooth opacity transition effect.
  - `options.atmosphereParameters` (IAtmosphereParams, optional) — Atmosphere model parameters.
  - `options.gamma` (number, optional) — Gamma
  - `options.exposure` (number, optional) — Exposure
  - `options.transparentBackground` (boolean, optional, default: false) — Enables a transparent WebGL canvas background so HTML behind the globe container remains visible.
  - `options.reverseDepth` (boolean, optional, default: true) — Enables reverse-Z depth for the planet camera perspective mode.

---

## Instance Methods

<MemberHeading id="fadein" depth="3" name="fadeIn" sig="fadeIn()" />

<MemberMeta sourceHref="/source/globe-ts/#L446" sourceLabel="Globe.ts:446" />

Starts screen brightness fading in effect by the duration time.

<MemberHeading id="fadeout" depth="3" name="fadeOut" sig="fadeOut()" />

<MemberMeta sourceHref="/source/globe-ts/#L454" sourceLabel="Globe.ts:454" />

Starts screen brightness fading out effect by the duration time.

## Instance Fields

<MemberHeading id="inner" depth="3" name="$inner" sig="$inner: Element" />

<MemberMeta sourceHref="/source/globe-ts/#L220" sourceLabel="Globe.ts:220" />

Dom element where WebGL canvas creates
