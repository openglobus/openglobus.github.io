---
title: GeoTIFFLayer
kind: class
longname: GeoTIFFLayer
description: GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.
---

# GeoTIFFLayer

<SourceLink href="/source/layer/geotifflayer-ts/#L50" label="GeoTIFFLayer.ts:50" />

GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.

---

## Constructor

<Signature code="new GeoTIFFLayer(name, options): GeoTIFFLayer" />

---

## Instance Methods

<MemberHeading id="setrenderoptions" depth="3" name="setRenderOptions" sig="setRenderOptions()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L175" sourceLabel="GeoTIFFLayer.ts:175" />

Updates rendering options and re-renders active textures in place.

<MemberHeading id="clearcache" depth="3" name="clearCache" sig="clearCache()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L249" sourceLabel="GeoTIFFLayer.ts:249" />

Clears decoded in-memory tile and raster caches.

<MemberHeading id="rendertileimage" depth="3" name="_renderTileImage" sig="_renderTileImage()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L657" sourceLabel="GeoTIFFLayer.ts:657" />

Renders the tile rasters into an image that goes straight into the tile texture. The previous image of the tile is reused, so restyling does not allocate.

<MemberHeading id="refreshcachedtile" depth="3" name="_refreshCachedTile" sig="_refreshCachedTile()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L669" sourceLabel="GeoTIFFLayer.ts:669" />

Renders the tile and puts it into the cache, reusing the image that is already there.
