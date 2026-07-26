---
title: Events
kind: class
longname: Events
description: Base events class to handle custom events.
---

# Events

<SourceLink href="/source/events-ts/#L26" label="Events.ts:26" />

Base events class to handle custom events.

---

## Constructor

<Signature code="new Events(eventNames?: Array.<string>, sender?: *): Events" />

**Parameters**

- `eventNames` (Array.\<string>, optional) — Event names that could be dispatched.
- `sender` (\*, optional)

---

## Instance Methods

<MemberHeading id="registernames" depth="3" name="registerNames" sig="registerNames(eventNames: Array.<string>)" />

<MemberMeta sourceHref="/source/events-ts/#L71" sourceLabel="Events.ts:71" />

Function that creates event object properties that would be dispatched.

**Parameters**

- `eventNames` (Array.\<string>) — Specified event names list.

<MemberHeading id="stamp" depth="3" name="_stamp" sig="_stamp(name: Object, obj: Object): boolean" />

<MemberMeta badges="protected" sourceHref="/source/events-ts/#L93" sourceLabel="Events.ts:93" />

Returns true if event callback has stamped.

**Parameters**

- `name` (Object) — Event identifier.
- `obj` (Object) — Event callback.

**Returns**

- `boolean`

<MemberHeading
  id="on"
  depth="3"
  name="on"
  sig="on(
	name: string,
	callback: EventCallback,
	sender?: any,
	priority?: number,
)"
/>

<MemberMeta sourceHref="/source/events-ts/#L113" sourceLabel="Events.ts:113" />

Attach listener.

**Parameters**

- `name` (string) — Event name to listen.
- `callback` (EventCallback) — Event callback function.
- `sender` (any, optional) — Event callback function owner.
- `priority` (number, optional, default: 0) — Priority of event callback.

<MemberHeading id="off" depth="3" name="off" sig="off(name: string, callback: EventCallback | null)" />

<MemberMeta sourceHref="/source/events-ts/#L132" sourceLabel="Events.ts:132" />

Stop listening event name with specified callback function.

**Parameters**

- `name` (string) — Event name.
- `callback` (EventCallback | null) — Attached event callback.

<MemberHeading id="dispatch" depth="3" name="dispatch" sig="dispatch(event: EventCallbackHandler, ...args?: Object)" />

<MemberMeta sourceHref="/source/events-ts/#L162" sourceLabel="Events.ts:162" />

Dispatch event.

**Parameters**

- `event` (EventCallbackHandler) — Event instance property that created by event name.
- `args` (Object, optional) — Callback parameters.

<MemberHeading id="stoppropagation" depth="3" name="stopPropagation" sig="stopPropagation()" />

<MemberMeta sourceHref="/source/events-ts/#L181" sourceLabel="Events.ts:181" />

Brakes events propagation.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/events-ts/#L189" sourceLabel="Events.ts:189" />

Removes all events.
