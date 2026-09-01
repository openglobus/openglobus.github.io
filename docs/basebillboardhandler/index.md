---
title: BaseBillboardHandler
kind: class
longname: BaseBillboardHandler
---

# BaseBillboardHandler

<SourceLink href="/source/entity/billboard/basebillboardhandler-ts/#L28" label="BaseBillboardHandler.ts:28" />

---

## Constructor

<Signature code="new BaseBillboardHandler(entityCollection): BaseBillboardHandler" />

---

## Instance Methods

<MemberHeading id="setchangedbuffer" depth="3" name="_setChangedBuffer" sig="_setChangedBuffer(index: number)" />

<MemberMeta badges="protected" sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L252" sourceLabel="BaseBillboardHandler.ts:252" />

Marks a buffer to be updated in the next frame and requests the frame to be rendered.

**Parameters**

- `index` (number) — Buffer index.

<MemberHeading id="setchangedpositionrange" depth="3" name="_setChangedPositionRange" sig="_setChangedPositionRange(from: number, to: number)" />

<MemberMeta badges="protected" sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L268" sourceLabel="BaseBillboardHandler.ts:268" />

Marks a half open range of the position arrays as changed, so that the next update uploads only that range instead of the whole buffer.

**Parameters**

- `from` (number) — First changed float index.
- `to` (number) — Index past the last changed float.
