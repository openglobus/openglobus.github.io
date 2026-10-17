---
title: Strip
kind: class
longname: Strip
description: Strip object.
---

# Strip

<SourceLink href="/source/entity/strip/strip-ts/#L52" label="Strip.ts:52" />

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
  - `options.pathTimes` (Array.\<number>, optional) — Time of every path edge. Makes the strip follow the entity collection time, see [EntityCollection#setTime](/entitycollection#settime) and [EntityCollection#setTimeOpacity](/entitycollection#settimeopacity).

---

## Instance Methods

<MemberHeading id="setpickingcolor3v" depth="3" name="setPickingColor3v" sig="setPickingColor3v(color: Vec3)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L175" sourceLabel="Strip.ts:175" />

Assign picking color.

**Parameters**

- `color` ([Vec3](/vec3)) — Picking RGB color.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L186" sourceLabel="Strip.ts:186" />

Clears object

<MemberHeading id="setcolor4v" depth="3" name="setColor4v" sig="setColor4v(color: Vec4)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L210" sourceLabel="Strip.ts:210" />

Sets RGBA color. Each channel from 0.0 to 1.0.

**Parameters**

- `color` ([Vec4](/vec4)) — RGBA vector.

<MemberHeading id="setcolorhtml" depth="3" name="setColorHTML" sig="setColorHTML(color: string)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L219" sourceLabel="Strip.ts:219" />

Sets strip color.

**Parameters**

- `color` (string) — HTML style color.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L238" sourceLabel="Strip.ts:238" />

Sets strip opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="istimed" depth="3" name="isTimed" sig="isTimed(): boolean" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L252" sourceLabel="Strip.ts:252" />

Returns true when the strip has edge times and follows the entity collection time.

**Returns**

- `boolean`

<MemberHeading id="setpathtimes" depth="3" name="setPathTimes" sig="setPathTimes(times: Array.<number> | null)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L265" sourceLabel="Strip.ts:265" />

Sets edge times. Null removes them and the strip stops following the entity collection time.

**Parameters**

- `times` (Array.\<number> | null) — Time of every path edge, missing values repeat the previous one.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L320" sourceLabel="Strip.ts:320" />

Sets strip visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L327" sourceLabel="Strip.ts:327" />

**Returns**

- `boolean` — Strip visibility.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L336" sourceLabel="Strip.ts:336" />

Assign rendering scene node.

**Parameters**

- `scene` ([Scene](/scene)) — Assigned render node.

<MemberHeading id="updatertcposition" depth="3" name="updateRTCPosition" sig="updateRTCPosition(): boolean" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L354" sourceLabel="Strip.ts:354" />

Rebuilds vertices relative to the handler relative center when it has moved.

**Returns**

- `boolean` — True when the strip was rebuilt.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L371" sourceLabel="Strip.ts:371" />

Removes from entity.

<MemberHeading id="deletebuffers" depth="3" name="_deleteBuffers" sig="_deleteBuffers()" />

<MemberMeta sourceHref="/source/entity/strip/strip-ts/#L480" sourceLabel="Strip.ts:480" />

Delete buffers

## Instance Fields

<MemberHeading id="scene" depth="3" name="_scene" sig="_scene: Scene" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L126" sourceLabel="Strip.ts:126" />

Parent collection render node.

<MemberHeading id="entity" depth="3" name="_entity" sig="_entity: Entity" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L133" sourceLabel="Strip.ts:133" />

Entity instance that holds this strip.

<MemberHeading id="handler" depth="3" name="_handler" sig="_handler: StripHandler" />

<MemberMeta badges="protected" sourceHref="/source/entity/strip/strip-ts/#L162" sourceLabel="Strip.ts:162" />

Handler that stores and renders this object.
