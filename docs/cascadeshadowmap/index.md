---
title: CascadeShadowMap
kind: class
longname: CascadeShadowMap
description: Cascade shadow map configuration options.
---

# CascadeShadowMap

<SourceLink href="/source/renderer/cascadeshadows/cascadeshadowmap-ts/#L65" label="CascadeShadowMap.ts:65" />

Cascade shadow map configuration options.

**Properties**

- `enabled` — Enables cascade shadow rendering.
- `size` — Shadow map texture size in pixels.
- `cascadeCount` — Number of generated cascade splits when cascades is not provided.
- `maxDistance` — Maximum camera distance covered by all cascade splits.
- `splitLambda` — Blend factor between uniform and logarithmic split distribution.
- `verticalViewAngle` — Vertical view angle for the orthographic cascade camera.
- `casterMargin` — Minimum light-space depth margin for shadow casters in world units.
- `excludeLayers` — Vector layers excluded from cascade shadow rendering.
- `cascades` — Per-cascade parameter overrides. When provided, its length defines cascade count.

---

## Constructor

<Signature code="new CascadeShadowMap(params): CascadeShadowMap" />

---

## Instance Methods

<MemberHeading id="computefrustumslicebounds" depth="3" name="_computeFrustumSliceBounds" sig="_computeFrustumSliceBounds()" />

<MemberMeta sourceHref="/source/renderer/cascadeshadows/cascadeshadowmap-ts/#L504" sourceLabel="CascadeShadowMap.ts:504" />

Computes the eight view-frustum corners used by the light-space crop matrix.
