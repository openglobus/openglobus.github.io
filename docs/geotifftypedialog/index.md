---
title: GeoTiffTypeDialog
kind: class
longname: GeoTiffTypeDialog
description: Asks how to add a GeoTIFF. The dialog answers null when it is closed without a choice.
---

# GeoTiffTypeDialog

**Extends:&#x20;**[`Dialog`](/dialog)

<SourceLink href="/source/control/geotifftypedialog-ts/#L19" label="GeoTiffTypeDialog.ts:19" />

Asks how to add a GeoTIFF. The dialog answers null when it is closed without a choice.

---

## Constructor

<Signature
  code="new GeoTiffTypeDialog(
	params: IGeoTiffTypeDialogParams,
): GeoTiffTypeDialog"
/>

**Parameters**

- `params` (IGeoTiffTypeDialogParams) — Options:
  - `params.fileName` (string) — File name, shown as a plain text.
  - `params.onClose` (function) — Takes the answer when the dialog is closed.

---

## Instance Methods

<MemberHeading id="positionnearelementonfirstopen" depth="3" name="positionNearElementOnFirstOpen" sig="positionNearElementOnFirstOpen(anchorEl, rootEl, gap, placement)" />

<MemberMeta sourceHref="/source/ui/dialog-ts/#L290" sourceLabel="Dialog.ts:290" />

_Inherited from `Dialog#positionNearElementOnFirstOpen`_

**Overrides:&#x20;**`Dialog#positionNearElementOnFirstOpen`

Places the dialog next to an anchor element, once, on its first open.

**Parameters**

- `anchorEl` — Element to place the dialog against, e.g. the control toggle button.
- `rootEl` — Container the dialog is kept inside of, the dialog parent by default.
- `gap` (default: 8) — Distance between the anchor and the dialog in pixels.
- `placement` (default: "right") — "right" opens the dialog right of the anchor, mirrored to its left when the anchor sits in the right half of the container; "below" opens it underneath the anchor.

## Instance Fields

<MemberHeading id="dock" depth="3" name="dock" sig="dock" />

<MemberMeta sourceHref="/source/ui/dialog-ts/#L261" sourceLabel="Dialog.ts:261" />

_Inherited from `Dialog#dock`_

**Overrides:&#x20;**`Dialog#dock`

Side this dialog asks to open docked to.
