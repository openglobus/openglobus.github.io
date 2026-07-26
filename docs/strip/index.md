---
title: Strip
kind: class
longname: Strip
description: Strip object.
---

# Strip

<SourceLink href="/source/entity/strip/strip-ts/#L47" label="Strip.ts:47" />

Strip object.

**Example**

Stripe example

```js
new og.Entity({
    strip: {
        gridSize: 10,
        path: [
            [[],[]],
            [[],[]]
        ]
    }
});
```

---

## Constructor

<Signature code="new Strip(options?: *): Strip" />

**Parameters**

- `options` (\*, optional) — Strip options:
  - `options.visibility` (boolean, optional) — Strip visibility.

---

## Instance Methods

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L158" sourceLabel="Strip.ts:158" />

Assign picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking RGB color.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L169" sourceLabel="Strip.ts:169" />

Clears object

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec4)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L190" sourceLabel="Strip.ts:190" />

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `color` ([Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L199" sourceLabel="Strip.ts:199" />

Sets strip color.

**Parameters**

- `color` (string) — HTML style color.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L218" sourceLabel="Strip.ts:218" />

Sets strip opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L232" sourceLabel="Strip.ts:232" />

Sets strip visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L239" sourceLabel="Strip.ts:239" />

**Returns**

- `boolean` — Strip visibility.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L248" sourceLabel="Strip.ts:248" />

Assign rendering scene node.

**Parameters**

- `scene` ([Scene](/scene)) — Assigned render node.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L257" sourceLabel="Strip.ts:257" />

Removes from entity.

<MemberHeading id="deletebuffers" depth="3" name="_deleteBuffers" sig="_deleteBuffers()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L355" sourceLabel="Strip.ts:355" />

Delete buffers

## Instance Fields

<MemberHeading id="scene" depth="3" name="_scene" sig="_scene: Scene" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L115" sourceLabel="Strip.ts:115" />

Parent collection render node.

<MemberHeading id="entity" depth="3" name="_entity" sig="_entity: Entity" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L122" sourceLabel="Strip.ts:122" />

Entity instance that holds this strip.

<MemberHeading id="handler" depth="3" name="_handler" sig="_handler: StripHandler" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L145" sourceLabel="Strip.ts:145" />

Handler that stores and renders this object.
