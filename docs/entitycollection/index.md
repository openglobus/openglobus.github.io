---
title: EntityCollection
kind: class
longname: EntityCollection
description: An observable collection of og.Entity instances where each entity has a unique id. Entity collection provides handlers for each type of entity like billboard, label or 3ds object.
---

# EntityCollection

<SourceLink href="/source/entity/entitycollection-ts/#L95" label="EntityCollection.ts:95" />

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

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L345" sourceLabel="EntityCollection.ts:345" />

Sets collection visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L357" sourceLabel="EntityCollection.ts:357" />

Returns collection visibility.

**Returns**

- `boolean` — Collection visibility flag.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L366" sourceLabel="EntityCollection.ts:366" />

Sets collection opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="setpickingenabled" depth="3" name="setPickingEnabled" sig="setPickingEnabled(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L375" sourceLabel="EntityCollection.ts:375" />

Sets collection picking ability.

**Parameters**

- `enable` (boolean) — Picking enable flag.

<MemberHeading id="setreceiveprojectors" depth="3" name="setReceiveProjectors" sig="setReceiveProjectors(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L390" sourceLabel="EntityCollection.ts:390" />

Sets whether this collection receives projector effects.

**Parameters**

- `enable` (boolean) — `true` to receive projector effects, `false` to ignore them.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L399" sourceLabel="EntityCollection.ts:399" />

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

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L410" sourceLabel="EntityCollection.ts:410" />

Sets scale by distance parameters.

**Parameters**

- `near` (number) — Full scale entity distance.
- `far` (number) — Zero scale entity distance.
- `farInvisible` (number, optional) — Entity visibility distance.

<MemberHeading id="applyterraincollision" depth="3" name="applyTerrainCollision" sig="applyTerrainCollision()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L424" sourceLabel="EntityCollection.ts:424" />

Aligns collection entities to terrain. Currently applies to polyline entities.

<MemberHeading id="add" depth="3" name="add" sig="add(entity: Entity): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L533" sourceLabel="EntityCollection.ts:533" />

Adds entity to the collection and returns collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="addentities" depth="3" name="addEntities" sig="addEntities(entities: Array.<Entity>): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L549" sourceLabel="EntityCollection.ts:549" />

Adds entities array to the collection and returns collection.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entities array.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="belongs" depth="3" name="belongs" sig="belongs(entity: Entity): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L562" sourceLabel="EntityCollection.ts:562" />

Returns true if the entity belongs to this collection, otherwise returns false.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- `boolean` — `true` if the entity belongs to this collection.

<MemberHeading id="removeentity" depth="3" name="removeEntity" sig="removeEntity(entity: Entity)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L625" sourceLabel="EntityCollection.ts:625" />

Removes entity from this collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to remove.

<MemberHeading id="createpickingcolors" depth="3" name="createPickingColors" sig="createPickingColors()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L642" sourceLabel="EntityCollection.ts:642" />

Creates or refresh collected entities picking color.

<MemberHeading id="reindexentitiesarray" depth="3" name="reindexEntitiesArray" sig="reindexEntitiesArray(startIndex: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L668" sourceLabel="EntityCollection.ts:668" />

Refresh collected entities indexes from startIndex entities collection array position.

**Parameters**

- `startIndex` (number) — Entities collection array index.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(scene: Scene, isHidden?: boolean): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L682" sourceLabel="EntityCollection.ts:682" />

Adds this collection to render node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `isHidden` (boolean, optional, default: false) — Used in vector layers with planet-specific rendering.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L694" sourceLabel="EntityCollection.ts:694" />

This function is called in the Scene assign function.

**Parameters**

- `scene` ([Scene](/scene))

<MemberHeading id="updategeodeticcoordinates" depth="3" name="_updateGeodeticCoordinates" sig="_updateGeodeticCoordinates(ellipsoid: Ellipsoid)" />

<MemberMeta badges="protected" sourceHref="/source/entity/entitycollection-ts/#L725" sourceLabel="EntityCollection.ts:725" />

Updates coordinates all lonLat entities in collection after collection attached to the planet node.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Globe ellipsoid.

<MemberHeading id="updatebillboardstextureatlas" depth="3" name="updateBillboardsTextureAtlas" sig="updateBillboardsTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L738" sourceLabel="EntityCollection.ts:738" />

Updates billboard texture atlas.

<MemberHeading id="updatelabelsfontatlas" depth="3" name="updateLabelsFontAtlas" sig="updateLabelsFontAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L749" sourceLabel="EntityCollection.ts:749" />

Updates labels font atlas.

<MemberHeading id="updatestroketextureatlas" depth="3" name="updateStrokeTextureAtlas" sig="updateStrokeTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L764" sourceLabel="EntityCollection.ts:764" />

Updates stroke texture atlas.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L779" sourceLabel="EntityCollection.ts:779" />

Removes collection from render node.

<MemberHeading id="getentities" depth="3" name="getEntities" sig="getEntities(): Array.<Entity>" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L793" sourceLabel="EntityCollection.ts:793" />

Gets entity array.

**Returns**

- `Array.<`[`Entity`](/entity)`>` — Entity array copy.

<MemberHeading id="each" depth="3" name="each" sig="each(callback: function)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L802" sourceLabel="EntityCollection.ts:802" />

Safety entities loop.

**Parameters**

- `callback` (function) — Entity callback.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L814" sourceLabel="EntityCollection.ts:814" />

Removes all entities from collection and clear handlers.

## Events

<MemberHeading id="draw" depth="3" name="draw" sig="draw" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L899" sourceLabel="EntityCollection.ts:899" />

Triggered when collection entities begin draw.

<MemberHeading id="drawend" depth="3" name="drawend" sig="drawend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L905" sourceLabel="EntityCollection.ts:905" />

Triggered after collection has drawn.

<MemberHeading id="add" depth="3" name="add" sig="add" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L911" sourceLabel="EntityCollection.ts:911" />

Triggered when added to the render node.

<MemberHeading id="remove" depth="3" name="remove" sig="remove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L917" sourceLabel="EntityCollection.ts:917" />

Triggered when removed from the render node.

<MemberHeading id="entityadd" depth="3" name="entityadd" sig="entityadd" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L923" sourceLabel="EntityCollection.ts:923" />

Triggered when new entity added to the collection.

<MemberHeading id="entityremove" depth="3" name="entityremove" sig="entityremove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L929" sourceLabel="EntityCollection.ts:929" />

Triggered when entity removes from the collection.

<MemberHeading id="visibilitychange" depth="3" name="visibilitychange" sig="visibilitychange" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L935" sourceLabel="EntityCollection.ts:935" />

Triggered when visibility changes.

<MemberHeading id="mousemove" depth="3" name="mousemove" sig="mousemove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L941" sourceLabel="EntityCollection.ts:941" />

Triggered when mouse moves over the entity.

<MemberHeading id="mouseenter" depth="3" name="mouseenter" sig="mouseenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L947" sourceLabel="EntityCollection.ts:947" />

Triggered when mouse has entered over the entity.

<MemberHeading id="mouseleave" depth="3" name="mouseleave" sig="mouseleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L953" sourceLabel="EntityCollection.ts:953" />

Triggered when mouse leaves the entity.

<MemberHeading id="lclick" depth="3" name="lclick" sig="lclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L959" sourceLabel="EntityCollection.ts:959" />

Mouse left button clicked.

<MemberHeading id="rclick" depth="3" name="rclick" sig="rclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L965" sourceLabel="EntityCollection.ts:965" />

Mouse right button clicked.

<MemberHeading id="mclick" depth="3" name="mclick" sig="mclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L971" sourceLabel="EntityCollection.ts:971" />

Mouse right button clicked.

<MemberHeading id="ldblclick" depth="3" name="ldblclick" sig="ldblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L977" sourceLabel="EntityCollection.ts:977" />

Mouse left button double click.

<MemberHeading id="rdblclick" depth="3" name="rdblclick" sig="rdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L983" sourceLabel="EntityCollection.ts:983" />

Mouse right button double click.

<MemberHeading id="mdblclick" depth="3" name="mdblclick" sig="mdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L989" sourceLabel="EntityCollection.ts:989" />

Mouse middle button double click.

<MemberHeading id="lup" depth="3" name="lup" sig="lup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L995" sourceLabel="EntityCollection.ts:995" />

Mouse left button up(stop pressing).

<MemberHeading id="rup" depth="3" name="rup" sig="rup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1001" sourceLabel="EntityCollection.ts:1001" />

Mouse right button up(stop pressing).

<MemberHeading id="mup" depth="3" name="mup" sig="mup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1007" sourceLabel="EntityCollection.ts:1007" />

Mouse middle button up(stop pressing).

<MemberHeading id="ldown" depth="3" name="ldown" sig="ldown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1013" sourceLabel="EntityCollection.ts:1013" />

Mouse left button is just pressed down(start pressing).

<MemberHeading id="rdown" depth="3" name="rdown" sig="rdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1019" sourceLabel="EntityCollection.ts:1019" />

Mouse right button is just pressed down(start pressing).

<MemberHeading id="mdown" depth="3" name="mdown" sig="mdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1025" sourceLabel="EntityCollection.ts:1025" />

Mouse middle button is just pressed down(start pressing).

<MemberHeading id="lhold" depth="3" name="lhold" sig="lhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1031" sourceLabel="EntityCollection.ts:1031" />

Mouse left button is pressing.

<MemberHeading id="rhold" depth="3" name="rhold" sig="rhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1037" sourceLabel="EntityCollection.ts:1037" />

Mouse right button is pressing.

<MemberHeading id="mhold" depth="3" name="mhold" sig="mhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1043" sourceLabel="EntityCollection.ts:1043" />

Mouse middle button is pressing.

<MemberHeading id="mousewheel" depth="3" name="mousewheel" sig="mousewheel" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1049" sourceLabel="EntityCollection.ts:1049" />

Mouse wheel is rotated.

<MemberHeading id="touchmove" depth="3" name="touchmove" sig="touchmove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1055" sourceLabel="EntityCollection.ts:1055" />

Triggered when touch moves over the entity.

<MemberHeading id="touchstart" depth="3" name="touchstart" sig="touchstart" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1061" sourceLabel="EntityCollection.ts:1061" />

Triggered when entity begins to touch.

<MemberHeading id="touchend" depth="3" name="touchend" sig="touchend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1067" sourceLabel="EntityCollection.ts:1067" />

Triggered when entity ends touching.

<MemberHeading id="doubletouch" depth="3" name="doubletouch" sig="doubletouch" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1073" sourceLabel="EntityCollection.ts:1073" />

Triggered entity double touch.

<MemberHeading id="touchleave" depth="3" name="touchleave" sig="touchleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1079" sourceLabel="EntityCollection.ts:1079" />

Triggered when touching leaves entity.

<MemberHeading id="touchenter" depth="3" name="touchenter" sig="touchenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1085" sourceLabel="EntityCollection.ts:1085" />

Triggered when touch enters over the entity.
