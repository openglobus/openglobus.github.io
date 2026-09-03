---
title: og/utils/shared
kind: module
longname: module:og/utils/shared
---

# og/utils/shared

<SourceLink href="/source/utils/shared-ts/#L5" label="shared.ts:5" />

---

## Instance Methods

<MemberHeading id="isundef" depth="3" name="isUndef" sig="isUndef(obj: Object): boolean" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L34" sourceLabel="shared.ts:34" />

Returns true if the object pointer is undefined.

**Parameters**

- `obj` (Object) — Object pointer.

**Returns**

- `boolean` — Returns true if object is undefined.

<MemberHeading id="htmlcolortorgba" depth="3" name="htmlColorToRgba" sig="htmlColorToRgba(htmlColor: string, opacity?: number): Vec4" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L120" sourceLabel="shared.ts:120" />

Convert html color string to the RGBA number vector.

**Parameters**

- `htmlColor` (string) — HTML string("#C6C6C6" or "#EF5" or "rgb(8,8,8)" or "rgba(8,8,8)") color.
- `opacity` (number, optional) — Opacity for the output vector.

**Returns**

- [`Vec4`](/vec4)

<MemberHeading id="htmlcolortorgb" depth="3" name="htmlColorToRgb" sig="htmlColorToRgb(htmlColor: string): Vec3" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L174" sourceLabel="shared.ts:174" />

Convert html color string to the RGB number vector.

**Parameters**

- `htmlColor` (string) — HTML string("#C6C6C6" or "#EF5" or "rgb(8,8,8)" or "rgba(8,8,8)") color.

**Returns**

- [`Vec3`](/vec3)

<MemberHeading id="stringtemplate" depth="3" name="stringTemplate" sig="stringTemplate(template: string, params: Object): string" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L224" sourceLabel="shared.ts:224" />

Replace template substrings between '{' and '}' tokens.

**Parameters**

- `template` (string) — String with templates in "{" and "}"
- `params` (Object) — Template named object with subsrtings.

**Returns**

- `string`

**Example**

Example from og.terrain that replaces tile indexes in url:

```js
var substrings = {
      "x": 12,
      "y": 15,
      "z": 8
}
og.utils.stringTemplate("http://earth3.openglobus.org/{z}/{y}/{x}.ddm", substrings);
//returns http://earth3.openglobus.org/8/15/12.ddm
```

<MemberHeading id="stringtemplate2" depth="3" name="stringTemplate2" sig="stringTemplate2(template: string, params: Object): string" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L246" sourceLabel="shared.ts:246" />

Replace template substrings between '${...}' tokens. Also supports escaped '${...}' tokens emitted by GLSL bundlers.

**Parameters**

- `template` (string) — String with templates in "${" and "}"
- `params` (Object) — Template named object with subsrtings.

**Returns**

- `string`

**Example**

Example from og.terrain that replaces tile indexes in url:

```js
var substrings = {
      "x": 12,
      "y": 15,
      "z": 8
}
og.utils.stringTemplate2("http://earth3.openglobus.org/${z}/${y}/${x}.ddm", substrings);
//returns http://earth3.openglobus.org/8/15/12.ddm
```

<MemberHeading
  id="createscalebydistance"
  depth="3"
  name="createScaleByDistance"
  sig="createScaleByDistance(
	v?: NumberArray3 | NumberArray4,
	def: NumberArray4,
): NumberArray4"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L315" sourceLabel="shared.ts:315" />

Normalizes `[near, far, vanish, scale]`, defaulting `scale` to `1`. `near <= 0` disables world scaling. It is set to `far` so the shader scale remains `1`. If `far <= 0`, both use a small epsilon to avoid division by zero without affecting fading.

**Parameters**

- `v` (NumberArray3 | NumberArray4, optional) — Source parameters.
- `def` (NumberArray4) — Default parameters.

**Returns**

- `NumberArray4` — Normalized parameters.

<MemberHeading
  id="binarysearch"
  depth="3"
  name="binarySearch"
  sig="binarySearch(
	ar: Array.<any>,
	el: any,
	compare_fn: function,
): number"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L446" sourceLabel="shared.ts:446" />

Finds an item in a sorted array.

**Parameters**

- `ar` (Array.\<any>) — The sorted array to search.
- `el` (any) — The item to find in the array.
- `compare_fn` (function) — comparator The function to use to compare the item to elements in the array.

**Returns**

- `number` — a negative number if 'a' is less than 'b'; 0 if 'a' is equal to 'b'; 'a' positive number of 'a' is greater than 'b'.

**Example**

```js
// Create a comparator function to search through an array of numbers.
function comparator(a, b) {
    return a - b;
};
var numbers = [0, 2, 4, 6, 8];
var index = og.utils.binarySearch(numbers, 6, comparator); // 3
```

<MemberHeading
  id="binaryinsert"
  depth="3"
  name="binaryInsert"
  sig="binaryInsert(
	ar: Array.<any>,
	el: any,
	compare_fn: function,
): number"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L472" sourceLabel="shared.ts:472" />

**Parameters**

- `ar` (Array.\<any>) — The sorted array to insert.
- `el` (any) — The item to insert.
- `compare_fn` (function) — comparator The function to use to compare the item to elements in the array.

**Returns**

- `number` — Array index position in which item inserted in.

<MemberHeading id="throttle" depth="3" name="throttle" sig="throttle(func: any, limit: Number, skip?: boolean)" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L730" sourceLabel="shared.ts:730" />

Callback throttling

**Parameters**

- `func` (any)
- `limit` (Number)
- `skip` (boolean, optional, default: false)

<MemberHeading
  id="blerp"
  depth="3"
  name="blerp"
  sig="blerp(
	x: Number,
	y: Number,
	fQ11: Number,
	fQ21: Number,
	fQ12: Number,
	fQ22: Number,
	x1?: Number,
	x2?: Number,
	y1?: Number,
	y2?: Number,
)"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L783" sourceLabel="shared.ts:783" />

y2-----Q12--------------Q22--- | | | | | | | | y-------|-----P----------|---- | | | | | | | | | | | | | | | | | | | | y1-----Q11----|---------Q21--- | | | | | | x1 x x2

**Parameters**

- `x` (Number)
- `y` (Number)
- `fQ11` (Number)
- `fQ21` (Number)
- `fQ12` (Number)
- `fQ22` (Number)
- `x1` (Number, optional, default: "0.0")
- `x2` (Number, optional, default: "1.0")
- `y1` (Number, optional, default: "0.0")
- `y2` (Number, optional, default: "1.0")

<MemberHeading id="concattypedarrays" depth="3" name="concatTypedArrays" sig="concatTypedArrays(a: TypedArray, b: TypedArray | Array.<number>)" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L915" sourceLabel="shared.ts:915" />

Concatenates two the same type arrays

**Parameters**

- `a` (TypedArray)
- `b` (TypedArray | Array.\<number>)

<MemberHeading
  id="concatarrays"
  depth="3"
  name="concatArrays"
  sig="concatArrays(
	a?: TypedArray | Array.<number>,
	b?: TypedArray | Array.<number>,
): TypedArray | Array.<number>"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L940" sourceLabel="shared.ts:940" />

Concatenates two the same arrays

**Parameters**

- `a` (TypedArray | Array.\<number>, optional, default: "\[]") — First array
- `b` (TypedArray | Array.\<number>, optional, default: "\[]") — Second array

**Returns**

- `TypedArray | Array.<number>`

<MemberHeading
  id="makearraytyped"
  depth="3"
  name="makeArrayTyped"
  sig="makeArrayTyped(
	arr: Array.<number>,
	ctor: Float32Array,
): TypedArray"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L957" sourceLabel="shared.ts:957" />

Convert simple array to typed

**Parameters**

- `arr` (Array.\<number>)
- `ctor` (Float32Array)

**Returns**

- `TypedArray`

<MemberHeading id="makearray" depth="3" name="makeArray" sig="makeArray(arr: TypedArray | Array.<number>): Array.<number>" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L972" sourceLabel="shared.ts:972" />

Convert typed array to array

**Parameters**

- `arr` (TypedArray | Array.\<number>)

**Returns**

- `Array.<number>`

<MemberHeading
  id="splicearray"
  depth="3"
  name="spliceArray"
  sig="spliceArray(
	arr: TypedArray | Array,
	starting: Number,
	deleteCount: Number,
	out?: Object,
)"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L988" sourceLabel="shared.ts:988" />

**Parameters**

- `arr` (TypedArray | Array)
- `starting` (Number)
- `deleteCount` (Number)
- `out` (Object, optional)

<MemberHeading
  id="splicetypedarray"
  depth="3"
  name="spliceTypedArray"
  sig="spliceTypedArray(
	arr: TypedArray,
	starting: Number,
	deleteCount: Number,
	out?: Object,
)"
/>

<MemberMeta sourceHref="/source/utils/shared-ts/#L1025" sourceLabel="shared.ts:1025" />

**Parameters**

- `arr` (TypedArray)
- `starting` (Number)
- `deleteCount` (Number)
- `out` (Object, optional)

<MemberHeading id="getmatrixsubarrayboundsext" depth="3" name="getMatrixSubArrayBoundsExt" sig="getMatrixSubArrayBoundsExt()" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L1125" sourceLabel="shared.ts:1125" />

Returns two float32 triangle coordinate arrays from inside of the source triangle array.

<MemberHeading id="loadimage" depth="3" name="loadImage" sig="loadImage(url: string): Promise.<Image>" />

<MemberMeta badges="async" sourceHref="/source/utils/shared-ts/#L1207" sourceLabel="shared.ts:1207" />

Promise for load images

**Parameters**

- `url` (string) — link to image.

**Returns**

- `Promise.<Image>` — Returns promise.

<MemberHeading id="isimageloaded" depth="3" name="isImageLoaded" sig="isImageLoaded(image: HTMLImageElement): boolean" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L1290" sourceLabel="shared.ts:1290" />

Gets image is loaded

**Parameters**

- `image` (HTMLImageElement)

**Returns**

- `boolean` — Returns true is the image is loaded

<MemberHeading id="gettileimageresolution" depth="3" name="getTileImageResolution" sig="getTileImageResolution(x, y, z, imageSize, ellipsoid)" />

<MemberMeta sourceHref="/source/utils/shared-ts/#L1348" sourceLabel="shared.ts:1348" />

**Parameters**

- `x`
- `y`
- `z`
- `imageSize` (default: 256)
- `ellipsoid` — console.log(1, getTileImageResolution(0, 0, 1)); console.log(7, getTileImageResolution(66, 44, 7)); console.log(10, getTileImageResolution(536, 358, 10)); console.log(12, getTileImageResolution(2149, 1446, 12)); console.log(13, getTileImageResolution(4301, 2892, 13)); console.log(14, getTileImageResolution(8582, 5736, 14)); console.log(15, getTileImageResolution(17205, 11569, 15)); console.log(16, getTileImageResolution(34419, 23138, 16)); console.log(17, getTileImageResolution(68661, 45892, 17)); console.log(18, getTileImageResolution(137650, 92555, 18));

## Static Methods

<MemberHeading
  id="getlinesintersection2v"
  depth="3"
  name="getLinesIntersection2v"
  sig="getLinesIntersection2v(
	start1: Vec2,
	end1: Vec2,
	start2: Vec2,
	end2: Vec2,
	isSegment?: boolean,
): Vec2"
/>

<MemberMeta badges="static" sourceHref="/source/utils/shared-ts/#L491" sourceLabel="shared.ts:491" />

Returns two segment lines intersection coordinate.

**Parameters**

- `start1` ([Vec2](/vec2)) — First line first coordinate.
- `end1` ([Vec2](/vec2)) — First line second coordinate.
- `start2` ([Vec2](/vec2)) — Second line first coordinate.
- `end2` ([Vec2](/vec2)) — Second line second coordinate.
- `isSegment` (boolean, optional) — Lines are segments.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading
  id="getlinesintersectionlonlat"
  depth="3"
  name="getLinesIntersectionLonLat"
  sig="getLinesIntersectionLonLat(
	start1: Vec2,
	end1: Vec2,
	start2: Vec2,
	end2: Vec2,
	isSegment?: boolean,
): Vec2"
/>

<MemberMeta badges="static" sourceHref="/source/utils/shared-ts/#L534" sourceLabel="shared.ts:534" />

Returns two segment lines intersection coordinate.

**Parameters**

- `start1` ([Vec2](/vec2)) — First line first coordinate.
- `end1` ([Vec2](/vec2)) — First line second coordinate.
- `start2` ([Vec2](/vec2)) — Second line first coordinate.
- `end2` ([Vec2](/vec2)) — Second line second coordinate.
- `isSegment` (boolean, optional, default: false) — Lines are segments.

**Returns**

- [`Vec2`](/vec2)

<MemberHeading id="xmltojson" depth="3" name="xmlToJson" sig="xmlToJson(xml: Object): Object" />

<MemberMeta badges="static" sourceHref="/source/utils/shared-ts/#L573" sourceLabel="shared.ts:573" />

Converts XML to JSON

**Parameters**

- `xml` (Object) — Xml object

**Returns**

- `Object`

<MemberHeading
  id="getmatrixsubarray64"
  depth="3"
  name="getMatrixSubArray64"
  sig="getMatrixSubArray64(
	srcArr: TypedArray | Array.<number>,
	gridSize: number,
	i0: number,
	j0: number,
	size: number,
): Float64Array"
/>

<MemberMeta badges="static" sourceHref="/source/utils/shared-ts/#L1057" sourceLabel="shared.ts:1057" />

Returns 64-bit triangle coordinate array from inside of the source triangle array.

**Parameters**

- `srcArr` (TypedArray | Array.\<number>) — Source array
- `gridSize` (number) — Source array square matrix size
- `i0` (number) — First row index source array matrix
- `j0` (number) — First column index
- `size` (number) — Square matrix result size.

**Returns**

- `Float64Array` — Triangle coordinates array from the source array.

<MemberHeading
  id="getmatrixsubarray32"
  depth="3"
  name="getMatrixSubArray32"
  sig="getMatrixSubArray32(
	sourceArr: TypedArray | Array.<number>,
	gridSize: number,
	i0: number,
	j0: number,
	size: number,
): Float32Array"
/>

<MemberMeta badges="static" sourceHref="/source/utils/shared-ts/#L1094" sourceLabel="shared.ts:1094" />

Returns 32-bit triangle coordinate array from inside of the source triangle array.

**Parameters**

- `sourceArr` (TypedArray | Array.\<number>) — Source array
- `gridSize` (number) — Source array square matrix size
- `i0` (number) — First row index source array matrix
- `j0` (number) — First column index
- `size` (number) — Square matrix result size.

**Returns**

- `Float32Array` — Triangle coordinates array from the source array.
