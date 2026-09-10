---
title: DockManager
kind: class
longname: DockManager
description: Docks dialogs to the sides of a host element. Sides claim bands in first-use order, while dialogs on the same side stack and share its length. Draggable edges render in a separate layer, keeping panels flush and preventing clipped seams or thickness-related layout adjustments.
---

# DockManager

<SourceLink href="/source/ui/dock-ts/#L122" label="Dock.ts:122" />

Docks dialogs to the sides of a host element. Sides claim bands in first-use order, while dialogs on the same side stack and share its length.

Draggable edges render in a separate layer, keeping panels flush and preventing clipped seams or thickness-related layout adjustments.

---

## Constructor

<Signature code="new DockManager(params): DockManager" />

---

## Instance Methods

<MemberHeading id="layout" depth="3" name="layout" sig="layout()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L298" sourceLabel="Dock.ts:298" />

Recomputes every side from the host rectangle, taking a band off it in dock order.

<MemberHeading id="docksize" depth="3" name="_dockSize" sig="_dockSize()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L347" sourceLabel="Dock.ts:347" />

What a side opens at for this dialog: its width standing on end, or its height.

<MemberHeading id="band" depth="3" name="_band" sig="_band()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L363" sourceLabel="Dock.ts:363" />

The band a side takes off a rectangle, and what the sides after it will see.

<MemberHeading id="slot" depth="3" name="_slot" sig="_slot()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L398" sourceLabel="Dock.ts:398" />

Returns a newcomer's stack share: the existing average, normalized to 1 / (count + 1).

<MemberHeading id="opendocked" depth="3" name="_openDocked" sig="_openDocked()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L441" sourceLabel="Dock.ts:441" />

A dialog can ask to open docked, and it takes its side as soon as it turns up - a dialog created hidden would otherwise let a later one claim the corner first. A side with nothing shown in it costs no room until something is.

<MemberHeading id="siderect" depth="3" name="_sideRect" sig="_sideRect()" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L723" sourceLabel="Dock.ts:723" />

The band a side would occupy, whether it is in use yet or not.

## Instance Fields

<MemberHeading id="freerect" depth="3" name="freeRect" sig="freeRect" />

<MemberMeta sourceHref="/source/ui/dock-ts/#L214" sourceLabel="Dock.ts:214" />

The rectangle no side has taken, in host coordinates.
