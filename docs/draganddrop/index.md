---
title: DragAndDrop
kind: class
longname: DragAndDrop
description: "Adds dropped files on the globe: glb/obj models and images are placed in the drop point, GeoTIFF rasters are placed by their georeference. A GeoTIFF that is not an image for certain may hold heights, its tags do not tell that, so the control asks whether to add it as a terrain or as a layer."
---

# DragAndDrop

<SourceLink href="/source/control/draganddrop-ts/#L48" label="DragAndDrop.ts:48" />

Adds dropped files on the globe: glb/obj models and images are placed in the drop point, GeoTIFF rasters are placed by their georeference. A GeoTIFF that is not an image for certain may hold heights, its tags do not tell that, so the control asks whether to add it as a terrain or as a layer.

---

## Constructor

<Signature code="new DragAndDrop(options): DragAndDrop" />

---

## Instance Methods

<MemberHeading id="addfiles" depth="3" name="addFiles" sig="addFiles()" />

<MemberMeta sourceHref="/source/control/draganddrop-ts/#L162" sourceLabel="DragAndDrop.ts:162" />

Adds files on the globe. Mtl file goes along with the obj file in the same list.
