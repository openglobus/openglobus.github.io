---
title: ProjectorsPass
kind: class
longname: ProjectorsPass
description: Deferred projector lighting pass. For every active projector draws a fullscreen quad clipped by a per-projector screen-space. Skipped entirely when no projectors are active. Scissor gives only ~5% optimization.
---

# ProjectorsPass

<SourceLink href="/source/renderer/projectors/projectorspass-ts/#L17" label="ProjectorsPass.ts:17" />

Deferred projector lighting pass. For every active projector draws a fullscreen quad clipped by a per-projector screen-space. Skipped entirely when no projectors are active. Scissor gives only \~5% optimization.

---

## Constructor

<Signature code="new ProjectorsPass(renderer): ProjectorsPass" />

---

## Instance Methods

<MemberHeading id="computescissor" depth="3" name="_computeScissor" sig="_computeScissor()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectorspass-ts/#L67" sourceLabel="ProjectorsPass.ts:67" />

Compute the projector frustum screen-space AABB in pixels (origin = bottom-left). Returns:

- true + filled `_scissor` rect when the projector is on-screen.
- false when the projector is entirely off-screen (caller should skip the draw).

If any frustum corner is behind the main camera (w\<=0), falls back to the full viewport (CPU-side near-plane clipping of the volume is too costly to be worth it here).

<MemberHeading id="apply" depth="3" name="apply" sig="apply()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectorspass-ts/#L156" sourceLabel="ProjectorsPass.ts:156" />

Apply per-projector additive projector color(lighting) into the currently bound framebuffer.
