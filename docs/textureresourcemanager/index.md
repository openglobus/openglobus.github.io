---
title: TextureResourceManager
kind: class
longname: TextureResourceManager
description: Manages shared WebGL textures with reference counting. Reuses textures for the same resource key and deletes them when no owners remain.
---

# TextureResourceManager

<SourceLink href="/source/utils/textureresourcemanager-ts/#L60" label="TextureResourceManager.ts:60" />

Manages shared WebGL textures with reference counting. Reuses textures for the same resource key and deletes them when no owners remain.

---

## Constructor

<Signature code="new TextureResourceManager(handler): TextureResourceManager" />

**Parameters**

- `handler` — WebGL handler used to create and delete textures.

---

## Instance Methods

<MemberHeading id="acquiretexture" depth="3" name="acquireTexture" sig="acquireTexture(params)" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L80" sourceLabel="TextureResourceManager.ts:80" />

Returns an existing texture for the same resource or creates a new one. Increases reference count for reused textures.

**Parameters**

- `params` — Texture source and GPU creation parameters.

**Returns**

- Managed WebGL texture or null if creation failed.

<MemberHeading id="releasetexture" depth="3" name="releaseTexture" sig="releaseTexture(texture)" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L110" sourceLabel="TextureResourceManager.ts:110" />

Releases one texture reference. Deletes GPU texture only when the reference count reaches zero.

**Parameters**

- `texture` — Managed texture previously returned by acquireTexture.

<MemberHeading id="clear" depth="3" name="clear" sig="clear()" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L139" sourceLabel="TextureResourceManager.ts:139" />

Deletes all managed GPU textures and clears manager state.

<MemberHeading id="getentrycount" depth="3" name="getEntryCount" sig="getEntryCount()" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L151" sourceLabel="TextureResourceManager.ts:151" />

Returns number of unique managed texture entries.

**Returns**

- Number of entries in the manager.

<MemberHeading id="getstats" depth="3" name="getStats" sig="getStats()" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L159" sourceLabel="TextureResourceManager.ts:159" />

Returns debug statistics for managed textures.

**Returns**

- Object with number of entries and total reference count.

<MemberHeading id="buildresourcekey" depth="3" name="_buildResourceKey" sig="_buildResourceKey()" />

<MemberMeta sourceHref="/source/utils/textureresourcemanager-ts/#L260" sourceLabel="TextureResourceManager.ts:260" />

Builds a stable texture resource key.

The key is composed of two logical parts:

1. Source image identity Describes where the original image comes from or how it can be uniquely identified.

   Supported prefixes:

   - res: A precomputed resource key provided by the GLTF parser. This is the preferred path for GLTF/GLB textures.

     Example: res:gltf-image|bytes:9a4c1f20|mime:image/png|len:24576

   - uri: A normalized external image URI. Used when the texture comes from an external image file. The URI should be resolved relative to the GLTF file path.

     Example: uri:https\://example.com/models/tree/textures/baseColor.png

   - fp: A content fingerprint calculated from image pixels. This is an expensive fallback path because it may require canvas readback. It can also fail for cross-origin images.

     Example: fp:7f21ab09

   - obj: A last-resort object identity key. Used only when no resourceKey, URI, or content fingerprint is available. This avoids accidental sharing between unrelated images.

     Example: obj:3

1. GPU texture creation parameters. Describes how the source image is uploaded to WebGL. The same source image may require different GPU textures if creation parameters differ.

   Supported fields:

   - fmt: Internal texture format passed to Handler.createTextureDefault(...). If absent, "fmt:default" means the default internal format is used.

     Example: fmt:default fmt:6408

   - wrap: Texture wrapping/filtering parameter passed to Handler.createTextureDefault(...). If absent, "wrap:default" means the default texture parameter is used.

     Example: wrap:default wrap:10497

   - mime: MIME type of the original image, if available. Used as an additional discriminator and for debugging.

     Example: mime:image/png

   - len: Original image byte length, if available. Used as an additional cheap discriminator, but not as the primary identity.

     Example: len:24576

Important:

- GLTF texture/image name is intentionally not used as a primary identity key. Names may be missing, duplicated, or different for the same binary image.

- The preferred identity source is resourceKey from the GLTF parser.

- The fallback order is: resourceKey -> normalized URI -> content fingerprint -> object identity.

- The final key must distinguish not only the source image, but also the GPU upload parameters that may affect the resulting WebGLTexture.
