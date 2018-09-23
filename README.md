# defaults-deep-safe

A deep version of `_.defaults(object, [sources])`, safe by default by deep cloning each `source`. Arrays are not merged.

## Status

[![npm version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]

## Installation

Install the package via `npm`:

```
❯ npm install defaults-deep-safe
```

## Usage

#### Arguments
1. `object` *(Object)*: The destination object.
2. `[source]` *(...Object)*: The source objects.

#### Returns
*(Object)*: Returns the destination object.

#### Example
```js
const defaultsDeep = require('defaults-deep-safe');

const object = { foo: 'bar', bar: { biz: { net: 'qux' } }, qux: ['biz'] };
const source = { bar: { biz: { net: 'txi', qox: 'fuc' } }, qux: ['baz'] };

defaultsDeep(object, source);
// => { foo: 'bar', bar: { biz: { net: 'qux', qox: 'fuc' } }, qux: ['biz'] }
```

Or as a lodash `mixin`:

```js
const _ = require('lodash');

_.mixin({
  defaultsDeep: require('defaults-deep-safe')
});

_.defaultsDeep(object, [sources]);
```

## Motivation

This module is perfect for merging config/settings files and to safely handle options by avoiding changing objects by reference.

Here's a quick example demonstrating why using `_.defaults` may not be a safe operation:

```js
const foo = { a: 1, c: 2 };
const bar = { b: new Date(), d: { e: 'f' } };

const result = require('lodash').defaults(foo, bar);

require('assert')(bar.b === result.b);
// => true

require('assert')(bar.d === result.d);
// => true

result.d.g = 'h';

console.log(bar.d);
// => { e: 'f', g: 'h' }
```

Using `defaults-deep-safe`:

```js
const foo = { a: 1, c: 2 };
const bar = { b: new Date(), d: { e: 'f' } };

const result = require('defaults-deep-safe')(foo, bar);

require('assert')(bar.b === result.b);
// => AssertionError: false == true

require('assert')(bar.d === result.d);
// => AssertionError: false == true

result.d.g = 'h';

console.log(bar.d);
// => { e: 'f' }
```

## Tests

```
❯ npm test
```

## License

MIT

[npm-image]: https://img.shields.io/npm/v/defaults-deep-safe.svg
[npm-url]: https://npmjs.org/package/defaults-deep-safe
[travis-image]: https://travis-ci.org/ruimarinho/defaults-deep-safe.svg
[travis-url]: https://travis-ci.org/ruimarinho/defaults-deep-safe
