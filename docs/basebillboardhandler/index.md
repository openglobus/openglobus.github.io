---
title: BaseBillboardHandler
kind: class
longname: BaseBillboardHandler
---

# BaseBillboardHandler

<SourceLink href="/source/entity/billboard/basebillboardhandler-ts/#L30" label="BaseBillboardHandler.ts:30" />

---

## Constructor

<Signature code="new BaseBillboardHandler(entityCollection): BaseBillboardHandler" />

---

## Instance Methods

<MemberHeading id="setchangedbuffer" depth="3" name="_setChangedBuffer" sig="_setChangedBuffer(index: number)" />

<MemberMeta badges="protected" sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L264" sourceLabel="BaseBillboardHandler.ts:264" />

Marks a buffer to be updated in the next frame and requests the frame to be rendered.

**Parameters**

- `index` (number) — Buffer index.

<MemberHeading id="setchangedpositionrange" depth="3" name="_setChangedPositionRange" sig="_setChangedPositionRange(from: number, to: number)" />

<MemberMeta badges="protected" sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L280" sourceLabel="BaseBillboardHandler.ts:280" />

Marks a half open range of the position arrays as changed, so that the next update uploads only that range instead of the whole buffer.

**Parameters**

- `from` (number) — First changed float index.
- `to` (number) — Index past the last changed float.

<MemberHeading
  id="getrtcposition"
  depth="3"
  name="getRTCPosition"
  sig="getRTCPosition(
	pos: Vec3,
	rtcPositionHigh: Vec3,
	rtcPositionLow: Vec3,
)"
/>

<MemberMeta sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L399" sourceLabel="BaseBillboardHandler.ts:399" />

Splits the position relative to the center into two 32-bit floats.

**Parameters**

- `pos` ([Vec3](/vec3)) — Cartesian position.
- `rtcPositionHigh` ([Vec3](/vec3)) — Out high part.
- `rtcPositionLow` ([Vec3](/vec3)) — Out low part.

<MemberHeading id="setrelativecenter" depth="3" name="setRelativeCenter" sig="setRelativeCenter(c: Vec3)" />

<MemberMeta sourceHref="/source/entity/billboard/basebillboardhandler-ts/#L410" sourceLabel="BaseBillboardHandler.ts:410" />

Sets the center the positions are relative to, near the camera they keep the precision.

**Parameters**

- `c` ([Vec3](/vec3)) — Center.
