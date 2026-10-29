---
title: LRUCache
kind: class
longname: LRUCache
description: Least recently used cache of a limited number of entries. Map keeps the insertion order, so the first key is always the least recently used one.
---

# LRUCache

<SourceLink href="/source/utils/lrucache-ts/#L8" label="LRUCache.ts:8" />

Least recently used cache of a limited number of entries. Map keeps the insertion order, so the first key is always the least recently used one.

---

## Constructor

<Signature code="new LRUCache(capacity: number, onEvict?: function): LRUCache" />

**Parameters**

- `capacity` (number) — Maximal number of entries.
- `onEvict` (function, optional) — Called with the entries removed to free the place for new ones.

---

## Instance Methods

<MemberHeading id="get" depth="3" name="get" sig="get()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L31" sourceLabel="LRUCache.ts:31" />

Returns the value and makes it the most recently used.

<MemberHeading id="peek" depth="3" name="peek" sig="peek()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L44" sourceLabel="LRUCache.ts:44" />

Returns the value without making it the most recently used.

<MemberHeading id="set" depth="3" name="set" sig="set()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L51" sourceLabel="LRUCache.ts:51" />

Sets the most recently used value, the least recently used ones over the capacity are evicted.

<MemberHeading id="values" depth="3" name="values" sig="values()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L66" sourceLabel="LRUCache.ts:66" />

Returns the values from the least to the most recently used, without making them used.

<MemberHeading id="delete" depth="3" name="delete" sig="delete()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L77" sourceLabel="LRUCache.ts:77" />

Removes the entry, not counted as an eviction.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/utils/lrucache-ts/#L84" sourceLabel="LRUCache.ts:84" />

Removes all the entries, not counted as evictions.
