---
title: Selection
kind: class
longname: Selection
description: Activate Selection
---

# Selection

<SourceLink href="/source/control/selection/selection-ts/#L52" label="Selection.ts:52" />

Activate Selection

---

## Constructor

<Signature code="new Selection(): Selection" />

**Parameters**

- `options.ignoreTerrain` (boolean, optional, default: false)
- `options.onSelect` (function) — callback (extent) => {} where extent is selected extent array \[minLon,minLat,maxLon,maxLat]
- `options.autoSelectionHide` (boolean, optional, default: false) — clear selection rectangle after passing extent to callback
