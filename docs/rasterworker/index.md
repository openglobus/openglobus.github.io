---
title: RasterWorker
kind: class
longname: RasterWorker
description: "Raster pixels work out of the main thread: the terrain grid heights of the tile pixels, as createTileHeights makes them, and the GeoTIFF tile resampling, as warpRasters does."
---

# RasterWorker

<SourceLink href="/source/utils/rasterworker-ts/#L24" label="RasterWorker.ts:24" />

Raster pixels work out of the main thread: the terrain grid heights of the tile pixels, as createTileHeights makes them, and the GeoTIFF tile resampling, as warpRasters does.

---

## Constructor

<Signature code="new RasterWorker(numWorkers): RasterWorker" />

---

## Instance Methods

<MemberHeading id="heights" depth="3" name="heights" sig="heights()" />

<MemberMeta sourceHref="/source/utils/rasterworker-ts/#L32" sourceLabel="RasterWorker.ts:32" />

Returns the promise of the tile grid heights of the pixels, the pixels are moved to the worker.

<MemberHeading id="warp" depth="3" name="warp" sig="warp()" />

<MemberMeta sourceHref="/source/utils/rasterworker-ts/#L51" sourceLabel="RasterWorker.ts:51" />

Returns the promise of the resampled tile rasters, the window rasters and mask are moved to the worker.
