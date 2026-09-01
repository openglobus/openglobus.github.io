---
title: Entity
kind: class
longname: Entity
description: Entity combines multiple visual features into one object. You can create it manually and add it to an entity collection.
---

# Entity

<SourceLink href="/source/entity/entity-ts/#L119" label="Entity.ts:119" />

Entity combines multiple visual features into one object. You can create it manually and add it to an entity collection.

---

## Constructor

<Signature code="new Entity(options?: IEntityParams): Entity" />

**Parameters**

- `options` (IEntityParams, optional) — Entity options.
  - `options.name` (string, optional) — Name of the entity.
  - `options.properties` (any, optional) — Additional properties of the entity.
  - `options.cartesian` ([Vec3](/vec3) | NumberArray3, optional) — Cartesian position.
  - `options.lonlat` ([LonLat](/lonlat) | NumberArray3 | NumberArray2, optional) — Geographic coordinates.
  - `options.altitude` (number, optional) — Altitude.
  - `options.visibility` (boolean, optional) — Visibility flag.
  - `options.billboard` ([Billboard](/billboard) | IBillboardParams, optional) — Billboard object or parameters.
  - `options.label` ([Label](/label) | ILabelParams, optional) — Label object or parameters.
  - `options.polyline` ([Polyline](/polyline) | IPolylineParams, optional) — Polyline object or parameters.
  - `options.ray` ([Ray](/ray) | IRayParams, optional) — Ray object or parameters.
  - `options.pointCloud` ([PointCloud](/pointcloud) | IPointCloudParams, optional) — Point cloud object or parameters.
  - `options.geometry` (Geometry | IGeometryParams, optional) — Geometry object or parameters.
  - `options.geoObject` ([GeoObject](/geoobject) | [IGeoObjectParams](/igeoobjectparams), optional) — Geo object or parameters.
  - `options.strip` ([Strip](/strip) | IStripParams, optional) — Strip object or parameters.
  - `options.independentPicking` (boolean, optional) — Independent picking flag.
  - `options.relativePosition` (boolean, optional) — When `true`, the entity position is relative to its parent.
  - `options.pitch` (number, optional) — Rotation around local X-axis in radians.
  - `options.yaw` (number, optional) — Rotation around local Y-axis in radians.
  - `options.roll` (number, optional) — Rotation around local Z-axis in radians.
  - `options.scale` (number | [Vec3](/vec3) | NumberArray3, optional) — Scaling factor.
  - `options.forceGlobalPosition` (boolean, optional) — Forces the entity to use the same world position as its parent.
  - `options.forceGlobalRotation` (boolean, optional) — Forces the entity to use the same world rotation as its parent.
  - `options.forceGlobalScale` (boolean, optional) — Forces the entity to use the same world scale as its parent.
  - `options.localPosition` ([Vec3](/vec3) | NumberArray3, optional) — Local position offset.

---

## Instance Methods

<MemberHeading id="isequal" depth="3" name="isEqual" sig="isEqual(entity: Entity): boolean" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L515" sourceLabel="Entity.ts:515" />

Checks if the given entity is equal to the current entity.

**Parameters**

- `entity` ([Entity](/entity)) — The entity to compare.

**Returns**

- `boolean` — True if entities are equal, otherwise false.

<MemberHeading id="getcollectionindex" depth="3" name="getCollectionIndex" sig="getCollectionIndex(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L547" sourceLabel="Entity.ts:547" />

Gets the collection index of the entity.

**Returns**

- `number` — The entity collection index.

<MemberHeading id="addto" depth="3" name="addTo" sig="addTo(collection: EntityCollection | Vector): Entity" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L557" sourceLabel="Entity.ts:557" />

Adds the entity to a collection or vector layer.

**Parameters**

- `collection` ([EntityCollection](/entitycollection) | [Vector](/vector)) — Target collection or vector layer.

**Returns**

- [`Entity`](/entity) — This object.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L566" sourceLabel="Entity.ts:566" />

Removes the entity from its collection or layer.

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L577" sourceLabel="Entity.ts:577" />

Sets the entity visibility.

**Parameters**

- `visibility` (boolean) — Entity visibility.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L608" sourceLabel="Entity.ts:608" />

Sets entity opacity for all available features.

**Parameters**

- `opacity` (number) — Entity opacity.

<MemberHeading id="getopacity" depth="3" name="getOpacity" sig="getOpacity(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L636" sourceLabel="Entity.ts:636" />

Returns entity opacity.

**Returns**

- `number` — Entity opacity.

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L645" sourceLabel="Entity.ts:645" />

Returns entity visibility.

**Returns**

- `boolean` — Entity visibility flag.

<MemberHeading id="setcartesian3v" depth="3" name="setCartesian3v" sig="setCartesian3v(cartesian: Vec3)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L654" sourceLabel="Entity.ts:654" />

Sets entity cartesian position.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Cartesian position in 3D space.

<MemberHeading id="getscale" depth="3" name="getScale" sig="getScale(): Vec3" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L663" sourceLabel="Entity.ts:663" />

Returns the local scale.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="setscale3v" depth="3" name="setScale3v" sig="setScale3v(scale: Vec3)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L672" sourceLabel="Entity.ts:672" />

Sets per-axis local scale.

**Parameters**

- `scale` ([Vec3](/vec3)) — Scale vector.

<MemberHeading id="setscale" depth="3" name="setScale" sig="setScale(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L693" sourceLabel="Entity.ts:693" />

Sets uniform local scale.

**Parameters**

- `val` (number) — Scale value.

<MemberHeading id="getabsoluterotation" depth="3" name="getAbsoluteRotation" sig="getAbsoluteRotation(): Quat" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L704" sourceLabel="Entity.ts:704" />

Gets the absolute rotation direction of the entity.

**Returns**

- [`Quat`](/quat) — The absolute rotation quaternion.

<MemberHeading id="getrotation" depth="3" name="getRotation" sig="getRotation(): Quat" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L713" sourceLabel="Entity.ts:713" />

Gets the local rotation of the entity. For the root entity it is equal to the absolute rotation.

**Returns**

- [`Quat`](/quat) — The rotation quaternion.

<MemberHeading id="setlook3v" depth="3" name="setLook3v" sig="setLook3v(cart: Vec3)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L722" sourceLabel="Entity.ts:722" />

Rotates the entity to look at a given point in world coordinates.

**Parameters**

- `cart` ([Vec3](/vec3)) — The target position to look at.

<MemberHeading id="setlooklonlat" depth="3" name="setLookLonLat" sig="setLookLonLat(lonLat: LonLat)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L740" sourceLabel="Entity.ts:740" />

Rotates the entity to look at a given geographic coordinate.

**Parameters**

- `lonLat` ([LonLat](/lonlat)) — The longitude and latitude to look at.

<MemberHeading id="setabsoluterotation" depth="3" name="setAbsoluteRotation" sig="setAbsoluteRotation(rot: Quat)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L752" sourceLabel="Entity.ts:752" />

Sets the absolute rotation of the entity.

**Parameters**

- `rot` ([Quat](/quat)) — The new absolute rotation quaternion.

<MemberHeading id="setrotation" depth="3" name="setRotation" sig="setRotation(rot: Quat)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L761" sourceLabel="Entity.ts:761" />

Sets the local rotation of the entity.

**Parameters**

- `rot` ([Quat](/quat)) — The new rotation quaternion.

<MemberHeading id="setdirectquaternionrotation" depth="3" name="setDirectQuaternionRotation" sig="setDirectQuaternionRotation(rot: Quat)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L777" sourceLabel="Entity.ts:777" />

Sets rotation directly from glTF quaternion with common coordinate system conversion. This method avoids the current pitch/yaw/roll conversion.

**Parameters**

- `rot` ([Quat](/quat)) — Quaternion from glTF.

<MemberHeading id="setpitch" depth="3" name="setPitch" sig="setPitch(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L795" sourceLabel="Entity.ts:795" />

Sets the pitch rotation of the entity.

**Parameters**

- `val` (number) — The new pitch angle in radians.

<MemberHeading id="setyaw" depth="3" name="setYaw" sig="setYaw(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L805" sourceLabel="Entity.ts:805" />

Sets the yaw rotation of the entity.

**Parameters**

- `val` (number) — The new yaw angle in radians.

<MemberHeading id="setroll" depth="3" name="setRoll" sig="setRoll(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L816" sourceLabel="Entity.ts:816" />

Sets the roll rotation of the entity.

**Parameters**

- `val` (number) — The new roll angle in radians.

<MemberHeading id="setpitchyawroll" depth="3" name="setPitchYawRoll" sig="setPitchYawRoll(pitch: number, yaw: number, roll: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L829" sourceLabel="Entity.ts:829" />

Sets pitch, yaw and roll at once.

**Parameters**

- `pitch` (number) — The new pitch angle in radians.
- `yaw` (number) — The new yaw angle in radians.
- `roll` (number) — The new roll angle in radians.

<MemberHeading id="getpitch" depth="3" name="getPitch" sig="getPitch(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L842" sourceLabel="Entity.ts:842" />

Gets the pitch angle of the entity.

**Returns**

- `number` — The pitch angle in radians.

<MemberHeading id="getyaw" depth="3" name="getYaw" sig="getYaw(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L851" sourceLabel="Entity.ts:851" />

Gets the yaw angle of the entity.

**Returns**

- `number` — The yaw angle in radians.

<MemberHeading id="getroll" depth="3" name="getRoll" sig="getRoll(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L860" sourceLabel="Entity.ts:860" />

Gets the roll angle of the entity.

**Returns**

- `number` — The roll angle in radians.

<MemberHeading id="setabsolutepitch" depth="3" name="setAbsolutePitch" sig="setAbsolutePitch(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L869" sourceLabel="Entity.ts:869" />

Sets the absolute pitch of the entity.

**Parameters**

- `val` (number) — The absolute pitch angle in radians.

<MemberHeading id="setabsoluteyaw" depth="3" name="setAbsoluteYaw" sig="setAbsoluteYaw(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L883" sourceLabel="Entity.ts:883" />

Sets the absolute yaw of the entity.

**Parameters**

- `val` (number) — The absolute yaw angle in radians.

<MemberHeading id="setabsoluteroll" depth="3" name="setAbsoluteRoll" sig="setAbsoluteRoll(val: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L897" sourceLabel="Entity.ts:897" />

Sets the absolute roll of the entity.

**Parameters**

- `val` (number) — The absolute roll angle in radians.

<MemberHeading id="getabsolutepitch" depth="3" name="getAbsolutePitch" sig="getAbsolutePitch(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L911" sourceLabel="Entity.ts:911" />

Gets the absolute pitch angle of the entity.

**Returns**

- `number` — The absolute pitch angle in radians.

<MemberHeading id="getabsoluteyaw" depth="3" name="getAbsoluteYaw" sig="getAbsoluteYaw(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L924" sourceLabel="Entity.ts:924" />

Gets the absolute yaw angle of the entity.

**Returns**

- `number` — The absolute yaw angle in radians.

<MemberHeading id="getabsoluteroll" depth="3" name="getAbsoluteRoll" sig="getAbsoluteRoll(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L936" sourceLabel="Entity.ts:936" />

Gets the absolute roll angle of the entity.

**Returns**

- `number` — The absolute roll angle in radians.

<MemberHeading id="setabsolutecartesian" depth="3" name="setAbsoluteCartesian" sig="setAbsoluteCartesian(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L974" sourceLabel="Entity.ts:974" />

Sets the absolute cartesian position of the entity.

**Parameters**

- `x` (number) — X coordinate.
- `y` (number) — Y coordinate.
- `z` (number) — Z coordinate.

<MemberHeading id="setabsolutecartesian3v" depth="3" name="setAbsoluteCartesian3v" sig="setAbsoluteCartesian3v(absolutCartesian: Vec3)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L983" sourceLabel="Entity.ts:983" />

Sets absolute cartesian position using a vector.

**Parameters**

- `absolutCartesian` ([Vec3](/vec3)) — Absolute cartesian position.

<MemberHeading id="getabsolutecartesian" depth="3" name="getAbsoluteCartesian" sig="getAbsoluteCartesian(): Vec3" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1003" sourceLabel="Entity.ts:1003" />

Returns absolute cartesian position.

**Returns**

- [`Vec3`](/vec3) — Absolute cartesian position.

<MemberHeading id="setcartesian" depth="3" name="setCartesian" sig="setCartesian(x: number, y: number, z: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1020" sourceLabel="Entity.ts:1020" />

Sets local cartesian position.

**Parameters**

- `x` (number) — X coordinate in 3D space.
- `y` (number) — Y coordinate in 3D space.
- `z` (number) — Z coordinate in 3D space.

<MemberHeading id="setcartesian3vsilent" depth="3" name="_setCartesian3vSilent" sig="_setCartesian3vSilent(cartesian: Vec3, skipLonLat: boolean)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1130" sourceLabel="Entity.ts:1130" />

Sets local cartesian position without dispatching events.

**Parameters**

- `cartesian` ([Vec3](/vec3)) — Cartesian position in 3D space.
- `skipLonLat` (boolean, default: false) — Skip geodetic conversion.

<MemberHeading id="getlonlat" depth="3" name="getLonLat" sig="getLonLat(): LonLat" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1168" sourceLabel="Entity.ts:1168" />

Returns geodetic coordinates.

**Returns**

- [`LonLat`](/lonlat) — Entity geodetic coordinates.

<MemberHeading id="setlonlat" depth="3" name="setLonLat" sig="setLonLat(lonlat: LonLat)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1177" sourceLabel="Entity.ts:1177" />

Sets geodetic coordinates.

**Parameters**

- `lonlat` ([LonLat](/lonlat)) — Geodetic coordinates.

<MemberHeading id="setlonlat2" depth="3" name="setLonLat2" sig="setLonLat2(lon: number, lat: number, height?: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1206" sourceLabel="Entity.ts:1206" />

Sets geodetic coordinates.

**Parameters**

- `lon` (number) — Longitude.
- `lat` (number) — Latitude.
- `height` (number, optional) — Height.

<MemberHeading id="setaltitude" depth="3" name="setAltitude" sig="setAltitude(altitude: number)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1233" sourceLabel="Entity.ts:1233" />

Sets entity altitude over the planet.

**Parameters**

- `altitude` (number) — Altitude.

<MemberHeading id="getaltitude" depth="3" name="getAltitude" sig="getAltitude(): number" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1242" sourceLabel="Entity.ts:1242" />

Returns entity altitude over the planet.

**Returns**

- `number` — Altitude.

<MemberHeading id="getcartesian" depth="3" name="getCartesian" sig="getCartesian(): Vec3" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1251" sourceLabel="Entity.ts:1251" />

Returns cartesian position.

**Returns**

- [`Vec3`](/vec3) — Cartesian position.

<MemberHeading id="setbillboard" depth="3" name="setBillboard" sig="setBillboard(billboard: Billboard): Billboard" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1261" sourceLabel="Entity.ts:1261" />

Sets entity billboard.

**Parameters**

- `billboard` ([Billboard](/billboard)) — Billboard object.

**Returns**

- [`Billboard`](/billboard) — Assigned billboard object.

<MemberHeading id="setlabel" depth="3" name="setLabel" sig="setLabel(label: Label): Label" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1280" sourceLabel="Entity.ts:1280" />

Sets entity label.

**Parameters**

- `label` ([Label](/label)) — Text label.

**Returns**

- [`Label`](/label) — Assigned label object.

<MemberHeading id="setray" depth="3" name="setRay" sig="setRay(ray: Ray): Ray" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1299" sourceLabel="Entity.ts:1299" />

Sets entity ray.

**Parameters**

- `ray` ([Ray](/ray)) — Ray object.

**Returns**

- [`Ray`](/ray) — Assigned ray object.

<MemberHeading id="setpolyline" depth="3" name="setPolyline" sig="setPolyline(polyline: Polyline): Polyline" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1317" sourceLabel="Entity.ts:1317" />

Sets entity polyline.

**Parameters**

- `polyline` ([Polyline](/polyline)) — Polyline object.

**Returns**

- [`Polyline`](/polyline) — Assigned polyline object.

<MemberHeading id="setpointcloud" depth="3" name="setPointCloud" sig="setPointCloud(pointCloud: PointCloud): PointCloud" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1335" sourceLabel="Entity.ts:1335" />

Sets entity pointCloud.

**Parameters**

- `pointCloud` ([PointCloud](/pointcloud)) — PointCloud object.

**Returns**

- [`PointCloud`](/pointcloud) — Assigned point cloud object.

<MemberHeading id="setgeometry" depth="3" name="setGeometry" sig="setGeometry(geometry: Geometry): Geometry" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1353" sourceLabel="Entity.ts:1353" />

Sets entity geometry.

**Parameters**

- `geometry` (Geometry) — Geometry object.

**Returns**

- `Geometry` — Assigned geometry object.

<MemberHeading id="setgeoobject" depth="3" name="setGeoObject" sig="setGeoObject(geoObject: GeoObject): GeoObject" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1376" sourceLabel="Entity.ts:1376" />

Sets entity geoObject.

**Parameters**

- `geoObject` ([GeoObject](/geoobject)) — GeoObject.

**Returns**

- [`GeoObject`](/geoobject) — Assigned geo object.

<MemberHeading id="setstrip" depth="3" name="setStrip" sig="setStrip(strip: Strip): Strip" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1395" sourceLabel="Entity.ts:1395" />

Sets entity strip.

**Parameters**

- `strip` ([Strip](/strip)) — Strip object.

**Returns**

- [`Strip`](/strip) — Assigned strip object.

<MemberHeading
  id="appendchildren"
  depth="3"
  name="appendChildren"
  sig="appendChildren(
	entities: Array.<Entity>,
	forceRelativePosition?: boolean,
)"
/>

<MemberMeta sourceHref="/source/entity/entity-ts/#L1431" sourceLabel="Entity.ts:1431" />

Appends child entities.

**Parameters**

- `entities` (Array.\<[Entity](/entity)>) — Child entities.
- `forceRelativePosition` (boolean, optional) — If defined, sets `relativePosition` for each child.

<MemberHeading id="appendchild" depth="3" name="appendChild" sig="appendChild(entity: Entity)" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1445" sourceLabel="Entity.ts:1445" />

Appends a child entity.

**Parameters**

- `entity` ([Entity](/entity)) — Child entity.

<MemberHeading id="setpickingcolor" depth="3" name="setPickingColor" sig="setPickingColor()" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1459" sourceLabel="Entity.ts:1459" />

Applies entity picking color to all supported features.

<MemberHeading id="getextent" depth="3" name="getExtent" sig="getExtent(): Extent" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1484" sourceLabel="Entity.ts:1484" />

Returns geodetic extent.

**Returns**

- [`Extent`](/extent) — Geodetic extent.

## Instance Fields

<MemberHeading id="rootentity" depth="3" name="rootEntity" sig="rootEntity" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L440" sourceLabel="Entity.ts:440" />

Returns the root entity.

**Returns**

- [`Entity`](/entity) — Root entity.

<MemberHeading id="relativeposition" depth="3" name="relativePosition" sig="relativePosition" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L455" sourceLabel="Entity.ts:455" />

Sets whether the entity position is relative to its parent.

**Parameters**

- `isRelative` (boolean) — Relative-position flag.

<MemberHeading id="relativeposition" depth="3" name="relativePosition" sig="relativePosition" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L488" sourceLabel="Entity.ts:488" />

Returns whether the entity position is relative to its parent.

**Returns**

- `boolean`

<MemberHeading id="entitycollection" depth="3" name="entityCollection" sig="entityCollection" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L497" sourceLabel="Entity.ts:497" />

Gets current entity collection container.

**Returns**

- [`EntityCollection`](/entitycollection)` | null`

<MemberHeading id="id" depth="3" name="id" sig="id" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L506" sourceLabel="Entity.ts:506" />

Returns the entity id.

**Returns**

- `number`

<MemberHeading id="layerindex" depth="3" name="layerIndex" sig="layerIndex" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L523" sourceLabel="Entity.ts:523" />

Gets the layer index of the entity.

**Returns**

- `number` — The layer index.

<MemberHeading id="instancename" depth="3" name="instanceName" sig="instanceName" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L531" sourceLabel="Entity.ts:531" />

Returns the instance class name.

**Returns**

- `string` — Always `"Entity"`.

<MemberHeading id="layer" depth="3" name="layer" sig="layer" />

<MemberMeta sourceHref="/source/entity/entity-ts/#L1412" sourceLabel="Entity.ts:1412" />

Returns the assigned vector layer.

**Returns**

- [`Vector`](/vector)` | null`
