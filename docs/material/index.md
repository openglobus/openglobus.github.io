---
title: Material
kind: class
longname: Material
---

# Material

<SourceLink href="/source/layer/material-ts/#L12" label="Material.ts:12" />

---

## Constructor

<Signature code="new Material(segment: Segment, layer: Layer): Material" />

**Parameters**

- `segment` ([Segment](/segment))
- `layer` ([Layer](/layer))

---

## Instance Methods

<MemberHeading id="createtexture" depth="3" name="_createTexture" sig="_createTexture()" />

<MemberMeta sourceHref="/source/layer/material-ts/#L60" sourceLabel="Material.ts:60" />

The own ready texture is re-uploaded with texSubImage2D instead of creating a new one. It works while the image size stays the same, which is always true for tiles. After textureNotExists() the material is ready too, but it may hold a parent or default texture, which must not be overwritten.
