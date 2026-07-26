---
title: IGeoObjectParams
kind: interface
longname: IGeoObjectParams
description: Interface for GeoObject parameters.
---

# IGeoObjectParams

<SourceLink href="/source/entity/geoobject/geoobject-ts/#L24" label="GeoObject.ts:24" />

Interface for GeoObject parameters.

**Properties**

- `object3d` (Object3d, optional) — 3D object associated with the geo object.
- `objSrc` (string, optional) — Source url of the 3D object.
- `tag` (string, optional) — Unique instancing drawing identifier tag.
- `position` ([Vec3](/vec3) | NumberArray3, optional) — Position in Cartesian coordinates.
- `scale` (number | [Vec3](/vec3) | NumberArray3, optional) — Scale of the object.
- `translate` ([Vec3](/vec3) | NumberArray3, optional) — Translation offset.
- `color` ([Vec4](/vec4) | NumberArray4 | string, optional) — RGBA color or HTML color string.
- `visibility` (boolean, optional) — Visibility flag.
