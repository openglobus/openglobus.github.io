---
title: GeoTIFFLayer
kind: class
longname: GeoTIFFLayer
description: GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.
---

# GeoTIFFLayer

<SourceLink href="/source/layer/geotifflayer-ts/#L64" label="GeoTIFFLayer.ts:64" />

GeoTIFFLayer renders Cloud Optimized GeoTIFF (COG) and standard GeoTIFF rasters onto the OpenGlobus 3D globe using progressive overview pyramid tiles.

---

## Constructor

<Signature code="new GeoTIFFLayer(name, options): GeoTIFFLayer" />

---

## Instance Methods

<MemberHeading id="initreader" depth="3" name="_initReader" sig="_initReader()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L135" sourceLabel="GeoTIFFLayer.ts:135" />

Opens the layer source. Also used to reopen it when the layer returns to the planet.

<MemberHeading id="setrenderoptions" depth="3" name="setRenderOptions" sig="setRenderOptions()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L232" sourceLabel="GeoTIFFLayer.ts:232" />

Updates rendering options and re-renders active textures in place.

<MemberHeading id="clearcache" depth="3" name="clearCache" sig="clearCache()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L306" sourceLabel="GeoTIFFLayer.ts:306" />

Clears decoded in-memory tile and raster caches.

<MemberHeading id="readsource" depth="3" name="_readSource" sig="_readSource()" />

<MemberMeta badges="async" sourceHref="/source/layer/geotifflayer-ts/#L431" sourceLabel="GeoTIFFLayer.ts:431" />

Opens the source. If its CRS is unresolved, fetches the projection from the EPSG registry and reopens the source with it.

Projections provided via `projFunc` or registered in `proj4` are already resolved and require no lookup.

<MemberHeading id="rendertileimage" depth="3" name="_renderTileImage" sig="_renderTileImage()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L772" sourceLabel="GeoTIFFLayer.ts:772" />

Renders the tile rasters into an image that goes straight into the tile texture. The previous image of the tile is reused, so restyling does not allocate.

<MemberHeading id="refreshcachedtile" depth="3" name="_refreshCachedTile" sig="_refreshCachedTile()" />

<MemberMeta sourceHref="/source/layer/geotifflayer-ts/#L784" sourceLabel="GeoTIFFLayer.ts:784" />

Renders the tile and puts it into the cache, reusing the image that is already there.
