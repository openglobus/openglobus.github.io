---
title: DepthCameraHandler
kind: class
longname: DepthCameraHandler
description: "Renderer depth cameras. A camera index in the list is its slot in the planet quad tree strategies. The cameras are bound to the first planet the renderer has when it starts. A planet added later is not picked up: give it to DepthCamera as the planet option, though the footprints still show on the start planet only. A removed planet is not released."
---

# DepthCameraHandler

<SourceLink href="/source/renderer/depthcamera/depthcamerahandler-ts/#L22" label="DepthCameraHandler.ts:22" />

Renderer depth cameras. A camera index in the list is its slot in the planet quad tree strategies. The cameras are bound to the first planet the renderer has when it starts. A planet added later is not picked up: give it to DepthCamera as the planet option, though the footprints still show on the start planet only. A removed planet is not released.

- **TODO:**
  - Several planets: keep the footprint and frustum collections per planet, in the planet a camera is
    bound to. Now they live in the start planet, so the footprint of a camera bound to another planet lands
    on the start planet ellipsoid.

---

## Constructor

<Signature code="new DepthCameraHandler(renderer): DepthCameraHandler" />

---

## Instance Methods

<MemberHeading id="prepareframe" depth="3" name="prepareFrame" sig="prepareFrame()" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamerahandler-ts/#L162" sourceLabel="DepthCameraHandler.ts:162" />

Puts the cameras in place, before the planets collect their nodes.

<MemberHeading id="frame" depth="3" name="frame" sig="frame()" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamerahandler-ts/#L174" sourceLabel="DepthCameraHandler.ts:174" />

Renders the depth frames, after the planets have collected the nodes and before the scenes are drawn.

## Instance Fields

<MemberHeading id="initialized" depth="3" name="initialized" sig="initialized" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamerahandler-ts/#L62" sourceLabel="DepthCameraHandler.ts:62" />

True after the renderer has initialized the handler: an added camera is initialized at once.

<MemberHeading id="planet" depth="3" name="planet" sig="planet" />

<MemberMeta sourceHref="/source/renderer/depthcamera/depthcamerahandler-ts/#L73" sourceLabel="DepthCameraHandler.ts:73" />

First planet of the renderer at its start, the default one to bind the cameras to.
