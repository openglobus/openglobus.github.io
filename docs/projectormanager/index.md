---
title: ProjectorManager
kind: class
longname: ProjectorManager
description: Default texture unit where the depth array sampler is bound.
---

# ProjectorManager

<SourceLink href="/source/renderer/projectors/projectormanager-ts/#L28" label="ProjectorManager.ts:28" />

Default texture unit where the depth array sampler is bound.

---

## Constructor

<Signature code="new ProjectorManager(renderer): ProjectorManager" />

---

## Instance Methods

<MemberHeading id="rebindframebuffertolayer" depth="3" name="_rebindFramebufferToLayer" sig="_rebindFramebufferToLayer()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L128" sourceLabel="ProjectorManager.ts:128" />

Rebinds projector.depthCamera.framebuffer COLOR\_ATTACHMENT0 from its own TEXTURE\_2D to (this.\_depthArrayTexture, projector.\_slot) so renders go directly into the array layer without any per-frame copy. The original TEXTURE\_2D stays referenced inside framebuffer.textures\[0] so framebuffer.destroy() can free it normally — we never overwrite that slot with the shared array texture.

<MemberHeading id="restoreframebufferattachment" depth="3" name="_restoreFramebufferAttachment" sig="_restoreFramebufferAttachment()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L153" sourceLabel="ProjectorManager.ts:153" />

Restores projector.depthCamera.framebuffer COLOR\_ATTACHMENT0 back to its original TEXTURE\_2D so subsequent depth renders no longer touch the freed array layer.

<MemberHeading id="bindforward" depth="3" name="bindForward" sig="bindForward()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L240" sourceLabel="ProjectorManager.ts:240" />

Binds forward/WOIT projectors to the given shader program. Uses top-K projectors by priority for current draw call.

**Returns**

- Actual projector count uploaded (0..MAX\_FORWARD\_PROJECTORS).

<MemberHeading id="binddeferred" depth="3" name="bindDeferred" sig="bindDeferred(projectorIndex)" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L314" sourceLabel="ProjectorManager.ts:314" />

Binds exactly one projector for deferred frustum-geometry draw call.

**Parameters**

- `projectorIndex` (default: 0) — Active projector index in priority-sorted array.

**Returns**

- 1 if projector was bound, 0 if index is out of range.

<MemberHeading id="ensuredeptharraytexture" depth="3" name="_ensureDepthArrayTexture" sig="_ensureDepthArrayTexture()" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L373" sourceLabel="ProjectorManager.ts:373" />

Lazily allocates the manager-owned TEXTURE\_2D\_ARRAY at the size of the first projector to be added. All subsequent projectors must use the same size. Returns false if a size mismatch is detected.

## Instance Fields

<MemberHeading id="activecount" depth="3" name="activeCount" sig="activeCount" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L64" sourceLabel="ProjectorManager.ts:64" />

Total active projectors count (used by consumers to choose \_proj / \_noproj programs).

<MemberHeading id="deptharraytexture" depth="3" name="depthArrayTexture" sig="depthArrayTexture" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L69" sourceLabel="ProjectorManager.ts:69" />

Manager-owned TEXTURE\_2D\_ARRAY containing depth maps for all projectors.

<MemberHeading id="active" depth="3" name="active" sig="active" />

<MemberMeta sourceHref="/source/renderer/projectors/projectormanager-ts/#L74" sourceLabel="ProjectorManager.ts:74" />

Snapshot of currently active projectors (sorted by priority desc).
