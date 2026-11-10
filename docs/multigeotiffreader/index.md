---
title: MultiGeoTIFFReader
kind: class
longname: MultiGeoTIFFReader
description: MultiGeoTIFFReader manages multiple Cloud-Optimized GeoTIFF (COG) sources, enabling multi-band compositing (e.g. RGB or NDVI across separate band files) and spatial mosaics (merging adjacent COG tiles into a unified layer).
---

# MultiGeoTIFFReader

<SourceLink href="/source/layer/geotiff/multigeotiffreader-ts/#L31" label="MultiGeoTIFFReader.ts:31" />

MultiGeoTIFFReader manages multiple Cloud-Optimized GeoTIFF (COG) sources, enabling multi-band compositing (e.g. RGB or NDVI across separate band files) and spatial mosaics (merging adjacent COG tiles into a unified layer).

---

## Constructor

<Signature code="new MultiGeoTIFFReader(options): MultiGeoTIFFReader" />

---

## Instance Methods

<MemberHeading id="init" depth="3" name="init" sig="init()" />

<MemberMeta badges="async" sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L55" sourceLabel="MultiGeoTIFFReader.ts:55" />

Initializes all GeoTIFF sources and builds unified extent and band mappings.

<MemberHeading id="unionnativebbox" depth="3" name="_unionNativeBBox" sig="_unionNativeBBox()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L219" sourceLabel="MultiGeoTIFFReader.ts:219" />

Union of the native bounding boxes of all sources, valid only when they share a CRS.

<MemberHeading id="setrenderoptions" depth="3" name="setRenderOptions" sig="setRenderOptions()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L243" sourceLabel="MultiGeoTIFFReader.ts:243" />

Applies rendering options to this reader and to every child reader.

<MemberHeading id="readtilerasters" depth="3" name="readTileRasters" sig="readTileRasters()" />

<MemberMeta badges="async" sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L269" sourceLabel="MultiGeoTIFFReader.ts:269" />

Reads rasters for a tile from the underlying GeoTIFF sources.

<MemberHeading id="destroy" depth="3" name="destroy" sig="destroy()" />

<MemberMeta sourceHref="/source/layer/geotiff/multigeotiffreader-ts/#L478" sourceLabel="MultiGeoTIFFReader.ts:478" />

Cleans up child readers and shared worker pool.
