---
title: EntityCollection
kind: class
longname: EntityCollection
description: An observable collection of og.Entity instances where each entity has a unique id. Entity collection provides handlers for each type of entity like billboard, label or 3ds object.
---

# EntityCollection

<SourceLink href="/source/entity/entitycollection-ts/#L108" label="EntityCollection.ts:108" />

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
  - `options.scaleByDistance` (Array.\<number>, optional) — Scale by distance parameters: `[near, far, vanish, scale]`. The fourth entry is a plain multiplier and defaults to `1`, so three entries are accepted as well. See `EntityCollection#scaleByDistance` for what each entry means. Default is `[MAX32, MAX32, MAX32, 1]` (no distance scaling).
  - `options.pickingScale` (number | Array.\<number>, optional) — Picking scale value or xyz scale array.
  - `options.opacity` (number, optional) — Entity global opacity.
  - `options.shadeMode` (number | string, optional, default: 1) — Geo object shading mode: `0|none|unlit`, `0.5|phong`, `1|pbr`.
  - `options.depthOrder` (number, optional, default: 0) — Rendering order for grouped vector layer collections.
  - `options.depthOffset` (Number, optional, default: "0.0") — Signed world-space depth offset along the camera ray. Negative values move geometry closer to the camera, positive values move it farther.
  - `options.disableCullFace` (boolean, optional, default: false) — Disables back-face culling for geo object rendering. //@fires entitymove

---

## Instance Methods

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L379" sourceLabel="EntityCollection.ts:379" />

Sets collection visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="requestredraw" depth="3" name="requestRedraw" sig="requestRedraw()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L391" sourceLabel="EntityCollection.ts:391" />

Requests the next frame to be rendered.

<MemberHeading id="settime" depth="3" name="setTime" sig="setTime(time: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L400" sourceLabel="EntityCollection.ts:400" />

Sets the current time of polylines and strips with path times.

**Parameters**

- `time` (number) — Time in the same units as the path times.

<MemberHeading id="settimeopacity" depth="3" name="setTimeOpacity" sig="setTimeOpacity(past: number, future: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L412" sourceLabel="EntityCollection.ts:412" />

Sets opacity multipliers of the path parts passed and ahead of the current time.

**Parameters**

- `past` (number) — Multiplier up to the current time.
- `future` (number) — Multiplier after the current time.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L423" sourceLabel="EntityCollection.ts:423" />

Returns collection visibility.

**Returns**

- `boolean` — Collection visibility flag.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L432" sourceLabel="EntityCollection.ts:432" />

Sets collection opacity.

**Parameters**

- `opacity` (number) — Opacity.

<MemberHeading id="setpickingenabled" depth="3" name="setPickingEnabled" sig="setPickingEnabled(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L442" sourceLabel="EntityCollection.ts:442" />

Sets collection picking ability.

**Parameters**

- `enable` (boolean) — Picking enable flag.

<MemberHeading id="setreceiveprojectors" depth="3" name="setReceiveProjectors" sig="setReceiveProjectors(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L457" sourceLabel="EntityCollection.ts:457" />

Sets whether this collection receives projector effects.

**Parameters**

- `enable` (boolean) — `true` to receive projector effects, `false` to ignore them.

<MemberHeading id="setreceiveframetransparency" depth="3" name="setReceiveFrameTransparency" sig="setReceiveFrameTransparency(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L466" sourceLabel="EntityCollection.ts:466" />

Sets whether this collection receives frame transparency.

**Parameters**

- `enable` (boolean) — `true` to receive frame transparency, `false` to ignore it.

<MemberHeading id="setreceiveshadows" depth="3" name="setReceiveShadows" sig="setReceiveShadows(enable: boolean)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L475" sourceLabel="EntityCollection.ts:475" />

Sets whether this collection receives shadow map effects.

**Parameters**

- `enable` (boolean) — `true` to receive shadow map effects, `false` to ignore them.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L484" sourceLabel="EntityCollection.ts:484" />

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
	vanish?: number,
	scale?: number,
)"
/>

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L499" sourceLabel="EntityCollection.ts:499" />

Sets scale by distance parameters.

**Parameters**

- `near` (number) — Distance below which a geoObject keeps its world size. Billboards and labels ignore it; pass `0` to disable the world scale ramp.
- `far` (number) — Distance up to which an entity keeps its size.
- `vanish` (number, optional) — Distance at which the size reaches zero. Defaults to `far`, which means no fading at all: past `far` a billboard or a label keeps its screen size, and a geoObject keeps the world size it reached there.
- `scale` (number, optional) — Plain multiplier applied on top, for every entity type.

<MemberHeading id="applyterraincollision" depth="3" name="applyTerrainCollision" sig="applyTerrainCollision()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L522" sourceLabel="EntityCollection.ts:522" />

Aligns collection entities to terrain. Currently applies to polyline entities.

<MemberHeading id="add" depth="3" name="add" sig="add(entity: Entity): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L663" sourceLabel="EntityCollection.ts:663" />

Adds entity to the collection and returns collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="addentities" depth="3" name="addEntities" sig="addEntities(entities: Array.<Entity>): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L680" sourceLabel="EntityCollection.ts:680" />

Adds entities array to the collection and returns collection.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Entities array.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="belongs" depth="3" name="belongs" sig="belongs(entity: Entity): boolean" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L693" sourceLabel="EntityCollection.ts:693" />

Returns true if the entity belongs to this collection, otherwise returns false.

**Parameters**

- `entity` ([Entity](/entity)) — Entity.

**Returns**

- `boolean` — `true` if the entity belongs to this collection.

<MemberHeading id="removeentity" depth="3" name="removeEntity" sig="removeEntity(entity: Entity)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L756" sourceLabel="EntityCollection.ts:756" />

Removes entity from this collection.

**Parameters**

- `entity` ([Entity](/entity)) — Entity to remove.

<MemberHeading id="createpickingcolors" depth="3" name="createPickingColors" sig="createPickingColors()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L775" sourceLabel="EntityCollection.ts:775" />

Creates or refresh collected entities picking color.

<MemberHeading id="reindexentitiesarray" depth="3" name="reindexEntitiesArray" sig="reindexEntitiesArray(startIndex: number)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L801" sourceLabel="EntityCollection.ts:801" />

Refresh collected entities indexes from startIndex entities collection array position.

**Parameters**

- `startIndex` (number) — Entities collection array index.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(scene: Scene, isHidden?: boolean): EntityCollection" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L815" sourceLabel="EntityCollection.ts:815" />

Adds this collection to render node.

**Parameters**

- `scene` ([Scene](/scene)) — Render node.
- `isHidden` (boolean, optional, default: false) — Used in vector layers with planet-specific rendering.

**Returns**

- [`EntityCollection`](/entitycollection) — Current collection instance.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L827" sourceLabel="EntityCollection.ts:827" />

This function is called in the Scene assign function.

**Parameters**

- `scene` ([Scene](/scene))

<MemberHeading id="updategeodeticcoordinates" depth="3" name="_updateGeodeticCoordinates" sig="_updateGeodeticCoordinates(ellipsoid: Ellipsoid)" />

<MemberMeta badges="protected" sourceHref="/source/entity/entitycollection-ts/#L860" sourceLabel="EntityCollection.ts:860" />

Updates coordinates all lonLat entities in collection after collection attached to the planet node.

**Parameters**

- `ellipsoid` ([Ellipsoid](/ellipsoid)) — Globe ellipsoid.

<MemberHeading id="updatebillboardstextureatlas" depth="3" name="updateBillboardsTextureAtlas" sig="updateBillboardsTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L873" sourceLabel="EntityCollection.ts:873" />

Updates billboard texture atlas.

<MemberHeading id="updatelabelsfontatlas" depth="3" name="updateLabelsFontAtlas" sig="updateLabelsFontAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L884" sourceLabel="EntityCollection.ts:884" />

Updates labels font atlas.

<MemberHeading id="updatestroketextureatlas" depth="3" name="updateStrokeTextureAtlas" sig="updateStrokeTextureAtlas()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L899" sourceLabel="EntityCollection.ts:899" />

Updates stroke texture atlas.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L914" sourceLabel="EntityCollection.ts:914" />

Removes collection from render node.

<MemberHeading id="getentities" depth="3" name="getEntities" sig="getEntities(): Array.<Entity>" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L928" sourceLabel="EntityCollection.ts:928" />

Gets entity array.

**Returns**

- `Array.<`[`Entity`](/entity)`>` — Entity array copy.

<MemberHeading id="each" depth="3" name="each" sig="each(callback: function)" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L937" sourceLabel="EntityCollection.ts:937" />

Safety entities loop.

**Parameters**

- `callback` (function) — Entity callback.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/entitycollection-ts/#L949" sourceLabel="EntityCollection.ts:949" />

Removes all entities from collection and clear handlers.

## Events

<MemberHeading id="draw" depth="3" name="draw" sig="draw" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1036" sourceLabel="EntityCollection.ts:1036" />

Triggered when collection entities begin draw.

<MemberHeading id="drawend" depth="3" name="drawend" sig="drawend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1042" sourceLabel="EntityCollection.ts:1042" />

Triggered after collection has drawn.

<MemberHeading id="add" depth="3" name="add" sig="add" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1048" sourceLabel="EntityCollection.ts:1048" />

Triggered when added to the render node.

<MemberHeading id="remove" depth="3" name="remove" sig="remove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1054" sourceLabel="EntityCollection.ts:1054" />

Triggered when removed from the render node.

<MemberHeading id="entityadd" depth="3" name="entityadd" sig="entityadd" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1060" sourceLabel="EntityCollection.ts:1060" />

Triggered when new entity added to the collection.

<MemberHeading id="entityremove" depth="3" name="entityremove" sig="entityremove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1066" sourceLabel="EntityCollection.ts:1066" />

Triggered when entity removes from the collection.

<MemberHeading id="visibilitychange" depth="3" name="visibilitychange" sig="visibilitychange" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1072" sourceLabel="EntityCollection.ts:1072" />

Triggered when visibility changes.

<MemberHeading id="mousemove" depth="3" name="mousemove" sig="mousemove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1078" sourceLabel="EntityCollection.ts:1078" />

Triggered when mouse moves over the entity.

<MemberHeading id="mouseenter" depth="3" name="mouseenter" sig="mouseenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1084" sourceLabel="EntityCollection.ts:1084" />

Triggered when mouse has entered over the entity.

<MemberHeading id="mouseleave" depth="3" name="mouseleave" sig="mouseleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1090" sourceLabel="EntityCollection.ts:1090" />

Triggered when mouse leaves the entity.

<MemberHeading id="lclick" depth="3" name="lclick" sig="lclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1096" sourceLabel="EntityCollection.ts:1096" />

Mouse left button clicked.

<MemberHeading id="rclick" depth="3" name="rclick" sig="rclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1102" sourceLabel="EntityCollection.ts:1102" />

Mouse right button clicked.

<MemberHeading id="mclick" depth="3" name="mclick" sig="mclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1108" sourceLabel="EntityCollection.ts:1108" />

Mouse right button clicked.

<MemberHeading id="ldblclick" depth="3" name="ldblclick" sig="ldblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1114" sourceLabel="EntityCollection.ts:1114" />

Mouse left button double click.

<MemberHeading id="rdblclick" depth="3" name="rdblclick" sig="rdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1120" sourceLabel="EntityCollection.ts:1120" />

Mouse right button double click.

<MemberHeading id="mdblclick" depth="3" name="mdblclick" sig="mdblclick" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1126" sourceLabel="EntityCollection.ts:1126" />

Mouse middle button double click.

<MemberHeading id="lup" depth="3" name="lup" sig="lup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1132" sourceLabel="EntityCollection.ts:1132" />

Mouse left button up(stop pressing).

<MemberHeading id="rup" depth="3" name="rup" sig="rup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1138" sourceLabel="EntityCollection.ts:1138" />

Mouse right button up(stop pressing).

<MemberHeading id="mup" depth="3" name="mup" sig="mup" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1144" sourceLabel="EntityCollection.ts:1144" />

Mouse middle button up(stop pressing).

<MemberHeading id="ldown" depth="3" name="ldown" sig="ldown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1150" sourceLabel="EntityCollection.ts:1150" />

Mouse left button is just pressed down(start pressing).

<MemberHeading id="rdown" depth="3" name="rdown" sig="rdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1156" sourceLabel="EntityCollection.ts:1156" />

Mouse right button is just pressed down(start pressing).

<MemberHeading id="mdown" depth="3" name="mdown" sig="mdown" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1162" sourceLabel="EntityCollection.ts:1162" />

Mouse middle button is just pressed down(start pressing).

<MemberHeading id="lhold" depth="3" name="lhold" sig="lhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1168" sourceLabel="EntityCollection.ts:1168" />

Mouse left button is pressing.

<MemberHeading id="rhold" depth="3" name="rhold" sig="rhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1174" sourceLabel="EntityCollection.ts:1174" />

Mouse right button is pressing.

<MemberHeading id="mhold" depth="3" name="mhold" sig="mhold" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1180" sourceLabel="EntityCollection.ts:1180" />

Mouse middle button is pressing.

<MemberHeading id="mousewheel" depth="3" name="mousewheel" sig="mousewheel" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1186" sourceLabel="EntityCollection.ts:1186" />

Mouse wheel is rotated.

<MemberHeading id="touchmove" depth="3" name="touchmove" sig="touchmove" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1192" sourceLabel="EntityCollection.ts:1192" />

Triggered when touch moves over the entity.

<MemberHeading id="touchstart" depth="3" name="touchstart" sig="touchstart" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1198" sourceLabel="EntityCollection.ts:1198" />

Triggered when entity begins to touch.

<MemberHeading id="touchend" depth="3" name="touchend" sig="touchend" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1204" sourceLabel="EntityCollection.ts:1204" />

Triggered when entity ends touching.

<MemberHeading id="doubletouch" depth="3" name="doubletouch" sig="doubletouch" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1210" sourceLabel="EntityCollection.ts:1210" />

Triggered entity double touch.

<MemberHeading id="touchleave" depth="3" name="touchleave" sig="touchleave" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1216" sourceLabel="EntityCollection.ts:1216" />

Triggered when touching leaves entity.

<MemberHeading id="touchenter" depth="3" name="touchenter" sig="touchenter" />

<MemberMeta badges="event" sourceHref="/source/entity/entitycollection-ts/#L1222" sourceLabel="EntityCollection.ts:1222" />

Triggered when touch enters over the entity.
