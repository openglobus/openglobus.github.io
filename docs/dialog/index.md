---
title: Dialog
kind: class
longname: Dialog
description: Floating dialog window with a draggable header, a resizable body and a close button. Dragged by its header to an edge of its container, the dialog docks to that side when a {@link DockManager} watches the container, and the dock option opens it docked at once.
---

# Dialog

**Extends:&#x20;**`View`

<SourceLink href="/source/ui/dialog-ts/#L78" label="Dialog.ts:78" />

Floating dialog window with a draggable header, a resizable body and a close button. Dragged by its header to an edge of its container, the dialog docks to that side when a [DockManager](/dockmanager) watches the container, and the `dock` option opens it docked at once.

---

## Constructor

<Signature code="new Dialog(options?: IDialogParams): Dialog" />

**Parameters**

- `options` (IDialogParams, optional) — Options:
  - `options.title` (string, optional, default: "\\"\\"") — Header title.
  - `options.visible` (boolean, optional, default: true) — Initial visibility.
  - `options.resizable` (boolean, optional, default: true) — Resize handle flag.
  - `options.width` (number, optional, default: 300) — Dialog width in pixels.
  - `options.height` (number, optional, default: 200) — Dialog height in pixels. Fits the content when it is not set.
  - `options.left` (number, optional, default: 0) — Offset from the left edge of the container in pixels.
  - `options.right` (number, optional) — Offset from the right edge of the container in pixels, applied instead of the left one.
  - `options.top` (number, optional, default: 0) — Offset from the top edge of the container in pixels.
  - `options.minHeight` (number, optional) — Minimal height in pixels.
  - `options.maxHeight` (number, optional) — Maximal height in pixels.
  - `options.minWidth` (number, optional) — Minimal width in pixels.
  - `options.maxWidth` (number, optional) — Maximal width in pixels.
  - `options.useHide` (boolean, optional, default: false) — Hides the dialog on close instead of removing it.
  - `options.dock` (DockSide, optional) — Side to open docked to the first time the dialog is shown, if a dock manager is there.
  - `options.hideToolbar` (boolean, optional, default: false) — Hides the bar the dialog is dragged by. Without it the dialog cannot be moved.

---

## Instance Methods

<MemberHeading id="positionnearelementonfirstopen" depth="3" name="positionNearElementOnFirstOpen" sig="positionNearElementOnFirstOpen(anchorEl, rootEl, gap, placement)" />

<MemberMeta sourceHref="/source/ui/dialog-ts/#L290" sourceLabel="Dialog.ts:290" />

Places the dialog next to an anchor element, once, on its first open.

**Parameters**

- `anchorEl` — Element to place the dialog against, e.g. the control toggle button.
- `rootEl` — Container the dialog is kept inside of, the dialog parent by default.
- `gap` (default: 8) — Distance between the anchor and the dialog in pixels.
- `placement` (default: "right") — "right" opens the dialog right of the anchor, mirrored to its left when the anchor sits in the right half of the container; "below" opens it underneath the anchor.

## Instance Fields

<MemberHeading id="dock" depth="3" name="dock" sig="dock" />

<MemberMeta sourceHref="/source/ui/dialog-ts/#L261" sourceLabel="Dialog.ts:261" />

Side this dialog asks to open docked to.
