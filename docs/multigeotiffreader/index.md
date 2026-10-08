---
title: MultiGeoTIFFReader
kind: class
longname: MultiGeoTIFFReader
description: MultiGeoTIFFReader manages multiple Cloud-Optimized GeoTIFF (COG) sources, enabling multi-band compositing (e.g. RGB or NDVI across separate band files) and spatial mosaics (merging adjacent COG tiles into a unified layer).
---

# MultiGeoTIFFReader

<SourceLink href="/source/layer/geotiff/multigeotiffreader-ts/#L32" label="MultiGeoTIFFReader.ts:32" />

MultiGeoTIFFReader manages multiple Cloud-Optimized GeoTIFF (COG) sources, enabling multi-band compositing (e.g. RGB or NDVI across separate band files) and spatial mosaics (merging adjacent COG tiles into a unified layer).

---

## Constructor

<Signature code="new MultiGeoTIFFReader(options): MultiGeoTIFFReader" />

---

## Instance Methods

<MemberHeading id="init" depth="3" name="init" sig="init()" />

<MemberMeta badges="async" sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L54" sourceLabel="MultiGeoTIFFReader.ts:54" />

Initializes all GeoTIFF sources and builds unified extent and band mappings.

<MemberHeading id="unionnativebbox" depth="3" name="_unionNativeBBox" sig="_unionNativeBBox()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L213" sourceLabel="MultiGeoTIFFReader.ts:213" />

Union of the native bounding boxes of all sources, valid only when they share a CRS.

<MemberHeading id="setrenderoptions" depth="3" name="setRenderOptions" sig="setRenderOptions()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L237" sourceLabel="MultiGeoTIFFReader.ts:237" />

Applies rendering options to this reader and to every child reader.

<MemberHeading id="readtilerasters" depth="3" name="readTileRasters" sig="readTileRasters()" />

<MemberMeta badges="async" sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L253" sourceLabel="MultiGeoTIFFReader.ts:253" />

Reads rasters for a tile from the underlying GeoTIFF sources.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L470" sourceLabel="MultiGeoTIFFReader.ts:470" />

Cleans up child readers and shared worker pool.
