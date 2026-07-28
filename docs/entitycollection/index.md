---
title: EntityCollection
kind: class
longname: EntityCollection
description: An observable collection of og.Entity instances where each entity has a unique id. Entity collection provides handlers for each type of entity like billboard, label or 3ds object.
---

# EntityCollection

<SourceLink href="/source/entity/entitycollection-ts/#L99" label="EntityCollection.ts:99" />

An observable collection of og.Entity instances where each entity has a unique id. Entity collection provides handlers for each type of entity like billboard, label or 3ds object.

**Fires**

- `event:draw`
- `event:drawend`
- `event:add`
- `event:remove`
- `event:entityadd`
- `event:entityremove`
- `event:visibilitychange`
- `event:mousemove`
- `event:mouseenter`
- `event:mouseleave`
- `event:lclick`
- `event:rclick`
- `event:mclick`
- `event:ldblclick`
- `event:rdblclick`
- `event:mdblclick`
- `event:lup`
- `event:rup`
- `event:mup`
- `event:ldown`
- `event:rdown`
- `event:mdown`
- `event:lhold`
- `event:rhold`
- `event:mhold`
- `event:mousewheel`
- `event:touchmove`
- `event:touchstart`
- `event:touchend`
- `event:doubletouch`
- `event:touchleave`
- `event:touchenter`

---

## Constructor

<Signature code="new EntityCollection(options?: Object): EntityCollection" />

**Parameters**

- `options` (Object, optional) — Entity options:
  - `options.entities` (Array.\<[Entity](/entity)>, optional) — Entities array.
  - `options.visibility` (boolean, optional, default: true) — Entity visibility.
  - `options.labelMaxLetters` (number, optional) — Maximum label letters per line used by the label handler.
  - `options.pickingEnabled` (boolean, optional) — Enables/disables picking for all entity handlers.
  - `options.receiveProjectors` (boolean, optional, default: true) — Enables/disables projector effect reception for this collection.
  - `options.receiveFrameTransparency` (boolean, optional, default: false) — Enables/disables frame transparency reception for this collection.
  - `options.receiveShadows` (boolean, optional, default: true) — Enables/disables shadow map reception for this collection.
  - `options.scaleByDistance` (Array.\<number>, optional) — Entity scale by distance parameters. (exactly 3 entries) First index - near distance to the entity, after entity becomes full scale. Second index - far distance to the entity, when the entity becomes zero scale. Third index - far distance to the entity, when the entity becomes invisible.
  - `options.pickingScale` (number | Array.\<number>, optional) — Picking scale value or xyz scale array.
  - `options.opacity` (number, optional) — Entity global opacity.
  - `options.shadeMode` (number | string, optional, default: 1) — Geo object shading mode: `0|none|unlit`, `0.5|phong`, `1|pbr`.
  - `options.depthOrder` (number, optional, default: 0) — Rendering order for grouped vector layer collections.
  - `options.depthOffset` (Number, optional, default: "0.0") — Signed world-space depth offset along the camera ray. Negative values move geometry closer to the camera, positive values move it farther.
  - `options.disableCullFace` (boolean, optional, default: false) — Disables back-face culling for geo object rendering. //@fires entitymove

---

## Instance Methods

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L366" sourceLabel="EntityCollection.ts:366" />

Sets collection visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L378" sourceLabel="EntityCollection.ts:378" />

Returns collection visibility.

**Returns**

- `boolean` — Collection visibility flag.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L387" sourceLabel="EntityCollection.ts:387" />

Sets collection opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="setpickingenabled" depth="3" name="setPickingEnabled" sig="setPickingEnabled(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L396" sourceLabel="EntityCollection.ts:396" />

Sets collection picking ability.

**Parameters**

- `enable` (boolean) — Picking enable flag.

<MemberHeading id="setreceiveprojectors" depth="3" name="setReceiveProjectors" sig="setReceiveProjectors(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L411" sourceLabel="EntityCollection.ts:411" />

Sets whether this collection receives projector effects.

**Parameters**

- `enable` (boolean) — `true` to receive projector effects, `false` to ignore them.

<MemberHeading id="setreceiveframetransparency" depth="3" name="setReceiveFrameTransparency" sig="setReceiveFrameTransparency(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L420" sourceLabel="EntityCollection.ts:420" />

Sets whether this collection receives frame transparency.

**Parameters**

- `enable` (boolean) — `true` to receive frame transparency, `false` to ignore it.

<MemberHeading id="setreceiveshadows" depth="3" name="setReceiveShadows" sig="setReceiveShadows(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L429" sourceLabel="EntityCollection.ts:429" />

Sets whether this collection receives shadow map effects.

**Parameters**

- `enable` (boolean) — `true` to receive shadow map effects, `false` to ignore them.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L438" sourceLabel="EntityCollection.ts:438" />

Gets collection opacity.

**Returns**

- `number` — Collection opacity.

<MemberHeading
  id="setscalebydistance"
  depth="3"
  name="setScaleByDistance"
  sig="setScaleByDistance(
	near: number,
	far: number,
	farInvisible?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L449" sourceLabel="EntityCollection.ts:449" />

Sets scale by distance parameters.

**Parameters**

- `near` (number) — Full scale entity distance.
- `far` (number) — Zero scale entity distance.
- `farInvisible` (number, optional) — Entity visibility distance.

<MemberHeading id="applyterraincollision" depth="3" name="applyTerrainCollision" sig="applyTerrainCollision()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L463" sourceLabel="EntityCollection.ts:463" />

Aligns collection entities to terrain. Currently applies to polyline entities.

<MemberHeading id="add" depth="3" name="add" sig="add(entity: Entity): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L572" sourceLabel="EntityCollection.ts:572" />

Adds entity to the collection and returns collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="addentities" depth="3" name="addEntities" sig="addEntities(entities: Array.<Entity>): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L588" sourceLabel="EntityCollection.ts:588" />

Adds entities array to the collection and returns collection.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entities array.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="belongs" depth="3" name="belongs" sig="belongs(entity: Entity): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L601" sourceLabel="EntityCollection.ts:601" />

Returns true if the entity belongs to this collection, otherwise returns false.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- `boolean` — `true` if the entity belongs to this collection.

<MemberHeading id="removeentity" depth="3" name="removeEntity" sig="removeEntity(entity: Entity)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L664" sourceLabel="EntityCollection.ts:664" />

Removes entity from this collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to remove.

<MemberHeading id="createpickingcolors" depth="3" name="createPickingColors" sig="createPickingColors()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L681" sourceLabel="EntityCollection.ts:681" />

Creates or refresh collected entities picking color.

<MemberHeading id="reindexentitiesarray" depth="3" name="reindexEntitiesArray" sig="reindexEntitiesArray(startIndex: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L707" sourceLabel="EntityCollection.ts:707" />

Refresh collected entities indexes from startIndex entities collection array position.

**Parameters**

- `startIndex` (number) — Entities collection array index.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(scene: Scene, isHidden?: boolean): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L721" sourceLabel="EntityCollection.ts:721" />

Adds this collection to render node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `isHidden` (boolean, optional, default: false) — Used in vector layers with planet-specific rendering.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L733" sourceLabel="EntityCollection.ts:733" />

This function is called in the Scene assign function.

**Parameters**

- `scene` ([Scene](/scene))

<MemberHeading id="updategeodeticcoordinates" depth="3" name="_updateGeodeticCoordinates" sig="_updateGeodeticCoordinates(ellipsoid: Ellipsoid)" />

<MemberMeta badges="protected" sourceHref="/source/entity/entitycollection-ts/#L764" sourceLabel="EntityCollection.ts:764" />

Updates coordinates all lonLat entities in collection after collection attached to the planet node.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Globe ellipsoid.

<MemberHeading id="updatebillboardstextureatlas" depth="3" name="updateBillboardsTextureAtlas" sig="updateBillboardsTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L777" sourceLabel="EntityCollection.ts:777" />

Updates billboard texture atlas.

<MemberHeading id="updatelabelsfontatlas" depth="3" name="updateLabelsFontAtlas" sig="updateLabelsFontAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L788" sourceLabel="EntityCollection.ts:788" />

Updates labels font atlas.

<MemberHeading id="updatestroketextureatlas" depth="3" name="updateStrokeTextureAtlas" sig="updateStrokeTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L803" sourceLabel="EntityCollection.ts:803" />

Updates stroke texture atlas.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L818" sourceLabel="EntityCollection.ts:818" />

Removes collection from render node.

<MemberHeading id="getentities" depth="3" name="getEntities" sig="getEntities(): Array.<Entity>" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L832" sourceLabel="EntityCollection.ts:832" />

Gets entity array.

**Returns**

- `Array.<`[`Entity`](/entity)`>` — Entity array copy.

<MemberHeading id="each" depth="3" name="each" sig="each(callback: function)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L841" sourceLabel="EntityCollection.ts:841" />

Safety entities loop.

**Parameters**

- `callback` (function) — Entity callback.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L853" sourceLabel="EntityCollection.ts:853" />

Removes all entities from collection and clear handlers.

## Events

<MemberHeading id="draw" depth="3" name="draw" sig="draw" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L938" sourceLabel="EntityCollection.ts:938" />

Triggered when collection entities begin draw.

<MemberHeading id="drawend" depth="3" name="drawend" sig="drawend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L944" sourceLabel="EntityCollection.ts:944" />

Triggered after collection has drawn.

<MemberHeading id="add" depth="3" name="add" sig="add" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L950" sourceLabel="EntityCollection.ts:950" />

Triggered when added to the render node.

<MemberHeading id="remove" depth="3" name="remove" sig="remove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L956" sourceLabel="EntityCollection.ts:956" />

Triggered when removed from the render node.

<MemberHeading id="entityadd" depth="3" name="entityadd" sig="entityadd" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L962" sourceLabel="EntityCollection.ts:962" />

Triggered when new entity added to the collection.

<MemberHeading id="entityremove" depth="3" name="entityremove" sig="entityremove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L968" sourceLabel="EntityCollection.ts:968" />

Triggered when entity removes from the collection.

<MemberHeading id="visibilitychange" depth="3" name="visibilitychange" sig="visibilitychange" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L974" sourceLabel="EntityCollection.ts:974" />

Triggered when visibility changes.

<MemberHeading id="mousemove" depth="3" name="mousemove" sig="mousemove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L980" sourceLabel="EntityCollection.ts:980" />

Triggered when mouse moves over the entity.

<MemberHeading id="mouseenter" depth="3" name="mouseenter" sig="mouseenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L986" sourceLabel="EntityCollection.ts:986" />

Triggered when mouse has entered over the entity.

<MemberHeading id="mouseleave" depth="3" name="mouseleave" sig="mouseleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L992" sourceLabel="EntityCollection.ts:992" />

Triggered when mouse leaves the entity.

<MemberHeading id="lclick" depth="3" name="lclick" sig="lclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L998" sourceLabel="EntityCollection.ts:998" />

Mouse left button clicked.

<MemberHeading id="rclick" depth="3" name="rclick" sig="rclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1004" sourceLabel="EntityCollection.ts:1004" />

Mouse right button clicked.

<MemberHeading id="mclick" depth="3" name="mclick" sig="mclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1010" sourceLabel="EntityCollection.ts:1010" />

Mouse right button clicked.

<MemberHeading id="ldblclick" depth="3" name="ldblclick" sig="ldblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1016" sourceLabel="EntityCollection.ts:1016" />

Mouse left button double click.

<MemberHeading id="rdblclick" depth="3" name="rdblclick" sig="rdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1022" sourceLabel="EntityCollection.ts:1022" />

Mouse right button double click.

<MemberHeading id="mdblclick" depth="3" name="mdblclick" sig="mdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1028" sourceLabel="EntityCollection.ts:1028" />

Mouse middle button double click.

<MemberHeading id="lup" depth="3" name="lup" sig="lup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1034" sourceLabel="EntityCollection.ts:1034" />

Mouse left button up(stop pressing).

<MemberHeading id="rup" depth="3" name="rup" sig="rup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1040" sourceLabel="EntityCollection.ts:1040" />

Mouse right button up(stop pressing).

<MemberHeading id="mup" depth="3" name="mup" sig="mup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1046" sourceLabel="EntityCollection.ts:1046" />

Mouse middle button up(stop pressing).

<MemberHeading id="ldown" depth="3" name="ldown" sig="ldown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1052" sourceLabel="EntityCollection.ts:1052" />

Mouse left button is just pressed down(start pressing).

<MemberHeading id="rdown" depth="3" name="rdown" sig="rdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1058" sourceLabel="EntityCollection.ts:1058" />

Mouse right button is just pressed down(start pressing).

<MemberHeading id="mdown" depth="3" name="mdown" sig="mdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1064" sourceLabel="EntityCollection.ts:1064" />

Mouse middle button is just pressed down(start pressing).

<MemberHeading id="lhold" depth="3" name="lhold" sig="lhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1070" sourceLabel="EntityCollection.ts:1070" />

Mouse left button is pressing.

<MemberHeading id="rhold" depth="3" name="rhold" sig="rhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1076" sourceLabel="EntityCollection.ts:1076" />

Mouse right button is pressing.

<MemberHeading id="mhold" depth="3" name="mhold" sig="mhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1082" sourceLabel="EntityCollection.ts:1082" />

Mouse middle button is pressing.

<MemberHeading id="mousewheel" depth="3" name="mousewheel" sig="mousewheel" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1088" sourceLabel="EntityCollection.ts:1088" />

Mouse wheel is rotated.

<MemberHeading id="touchmove" depth="3" name="touchmove" sig="touchmove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1094" sourceLabel="EntityCollection.ts:1094" />

Triggered when touch moves over the entity.

<MemberHeading id="touchstart" depth="3" name="touchstart" sig="touchstart" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1100" sourceLabel="EntityCollection.ts:1100" />

Triggered when entity begins to touch.

<MemberHeading id="touchend" depth="3" name="touchend" sig="touchend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1106" sourceLabel="EntityCollection.ts:1106" />

Triggered when entity ends touching.

<MemberHeading id="doubletouch" depth="3" name="doubletouch" sig="doubletouch" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1112" sourceLabel="EntityCollection.ts:1112" />

Triggered entity double touch.

<MemberHeading id="touchleave" depth="3" name="touchleave" sig="touchleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1118" sourceLabel="EntityCollection.ts:1118" />

Triggered when touching leaves entity.

<MemberHeading id="touchenter" depth="3" name="touchenter" sig="touchenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1124" sourceLabel="EntityCollection.ts:1124" />

Triggered when touch enters over the entity.
