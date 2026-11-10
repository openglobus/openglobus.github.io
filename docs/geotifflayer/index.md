---
title: GeoTIFFLayer
kind: class
longname: GeoTIFFLayer
description: GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.
---

# GeoTIFFLayer

<SourceLink href="/source/layer/geotifflayer-ts/#L63" label="GeoTIFFLayer.ts:63" />

GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.

---

## Constructor

<Signature code="new GeoTIFFLayer(name, options): GeoTIFFLayer" />

---

## Instance Methods

<MemberHeading id="initreader" depth="3" name="_initReader" sig="_initReader()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L140" sourceLabel="GeoTIFFLayer.ts:140" />

Opens the layer source. Also used to reopen it when the layer returns to the planet.

<MemberHeading id="updatenativezoom" depth="3" name="_updateNativeZoom" sig="_updateNativeZoom()" />

<MemberMeta badges="protected" sourceHref="/source/layer/geotifflayer-ts/#L196" sourceLabel="GeoTIFFLayer.ts:196" />

Finds the native zoom of the sources for the tile size of the planet strategy, the sources open before or after the layer gets to the planet. Deeper tiles take the texture of the native zoom tile.

<MemberHeading id="setrenderoptions" depth="3" name="setRenderOptions" sig="setRenderOptions()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L261" sourceLabel="GeoTIFFLayer.ts:261" />

Updates rendering options and re-renders active textures in place.

<MemberHeading id="clearcache" depth="3" name="clearCache" sig="clearCache()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L335" sourceLabel="GeoTIFFLayer.ts:335" />

Clears decoded in-memory tile and raster caches.

<MemberHeading id="rendertileimage" depth="3" name="_renderTileImage" sig="_renderTileImage()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L778" sourceLabel="GeoTIFFLayer.ts:778" />

Renders the tile rasters into an image that goes straight into the tile texture. The previous image of the tile is reused, so restyling does not allocate.

<MemberHeading id="refreshcachedtile" depth="3" name="_refreshCachedTile" sig="_refreshCachedTile()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L790" sourceLabel="GeoTIFFLayer.ts:790" />

Renders the tile and puts it into the cache, reusing the image that is already there.
