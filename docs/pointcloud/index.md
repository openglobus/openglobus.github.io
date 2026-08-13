---
title: PointCloud
kind: class
longname: PointCloud
description: PointCloud object.
---

# PointCloud

<SourceLink href="/source/entity/pointcloud/pointcloud-ts/#L53" label="PointCloud.ts:53" />

PointCloud object.

**Example**

Creates point cloud with two ten pixel size points

```js
new og.Entity({
    pointCloud: {
        pointSize: 10,
        points: [
            [0, 0, 0, 255, 255, 255, 255, { 'name': 'White point' }],
            [100, 100, 0, 255, 0, 0, 255, { 'name': 'Red point' }]
        ]
    }
});
```

---

## Constructor

<Signature code="new PointCloud(options?: *): PointCloud" />

**Parameters**

- `options` (\*, optional) — Point cloud options:
  - `options.points` (Array.\<Array.\<number>>, optional) — Points cartesian coordinates array, where first three is cartesian coordinates, next fourth is an RGBA color, and last is a point properties.
  - `options.pointSize` (number, optional) — Point screen size in pixels.
  - `options.pickingScale` (number, optional) — Point border picking size in screen pixels.
  - `options.visibility` (boolean, optional) — Point cloud visibility.

---

## Instance Methods

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L229" sourceLabel="PointCloud.ts:229" />

Clears point cloud data

<MemberHeading id="setvisibility" depth="3" name="setVisibility" sig="setVisibility(visibility: boolean)" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L250" sourceLabel="PointCloud.ts:250" />

Sets cloud visibility.

**Parameters**

- `visibility` (boolean) — Visibility flag.

<MemberHeading id="setopacity" depth="3" name="setOpacity" sig="setOpacity(opacity: number)" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L260" sourceLabel="PointCloud.ts:260" />

Sets opacity for all points in the cloud.

**Parameters**

- `opacity` (number) — Opacity value in range \[0..1].

<MemberHeading id="getvisibility" depth="3" name="getVisibility" sig="getVisibility(): boolean" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L277" sourceLabel="PointCloud.ts:277" />

**Returns**

- `boolean` — Point cloud visibility.

<MemberHeading id="bindscene" depth="3" name="bindScene" sig="bindScene(scene: Scene)" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L286" sourceLabel="PointCloud.ts:286" />

Assign rendering scene node.

**Parameters**

- `scene` ([Scene](/scene)) — Assigned render node.

<MemberHeading id="remove" depth="3" name="remove" sig="remove()" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L295" sourceLabel="PointCloud.ts:295" />

Removes from entity.

<MemberHeading id="setpoints" depth="3" name="setPoints" sig="setPoints(points: Array.<Poi>)" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L307" sourceLabel="PointCloud.ts:307" />

Adds points to render.

**Parameters**

- `points` (Array.\<Poi>) — Point cloud array.

**Example**

```js
var points = [[0, 0, 0, 255, 255, 255, 255, { 'name': 'White point' }], [100, 100, 0, 255, 0, 0, 255, { 'name': 'Red point' }]];
```

<MemberHeading id="getpoint" depth="3" name="getPoint" sig="getPoint(index: number): IPoint" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L378" sourceLabel="PointCloud.ts:378" />

Returns specific point by index.

**Parameters**

- `index` (number) — Point index.

**Returns**

- `IPoint` — Point at the given index.

<MemberHeading id="update" depth="3" name="_update" sig="_update()" />

<MemberMeta badges="protected" sourceHref="/source/entity/pointcloud/pointcloud-ts/#L461" sourceLabel="PointCloud.ts:461" />

Update gl buffers.

<MemberHeading id="deletebuffers" depth="3" name="_deleteBuffers" sig="_deleteBuffers()" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L477" sourceLabel="PointCloud.ts:477" />

Delete buffers

## Instance Fields

<MemberHeading id="visibility" depth="3" name="visibility" sig="visibility: boolean" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L143" sourceLabel="PointCloud.ts:143" />

Cloud visibility.

<MemberHeading id="pointsize" depth="3" name="pointSize" sig="pointSize: number" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L150" sourceLabel="PointCloud.ts:150" />

Point screen size in pixels.

<MemberHeading id="pickingscale" depth="3" name="pickingScale" sig="pickingScale: number" />

<MemberMeta sourceHref="/source/entity/pointcloud/pointcloud-ts/#L157" sourceLabel="PointCloud.ts:157" />

Point picking border size in pixels.
