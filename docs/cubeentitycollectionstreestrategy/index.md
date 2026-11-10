---
title: CubeEntityCollectionsTreeStrategy
kind: class
longname: CubeEntityCollectionsTreeStrategy
description: Entity collections of a vector layer in six trees, one on each cube face. The nodes have the ids of the planet nodes with the same tiles, so a collection is drawn with the visible tile and its entities go down to its terrain.
---

# CubeEntityCollectionsTreeStrategy

**Extends:&#x20;**`EntityCollectionsTreeStrategy`

<SourceLink href="/source/quadtree/cube/cubeentitycollectionstreestrategy-ts/#L16" label="CubeEntityCollectionsTreeStrategy.ts:16" />

Entity collections of a vector layer in six trees, one on each cube face. The nodes have the ids of the planet nodes with the same tiles, so a collection is drawn with the visible tile and its entities go down to its terrain.

---

## Constructor

<Signature
  code="new CubeEntityCollectionsTreeStrategy(
	quadTreeStrategy,
	layer,
	nodeCapacity,
): CubeEntityCollectionsTreeStrategy"
/>
