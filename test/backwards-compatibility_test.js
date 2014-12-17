
/**
 * Module dependencies.
 */

var defaultsDeep = require('..');

/**
 * From `lodash` core tests.
 *
 * @see https://github.com/lodash/lodash/blob/master/test/test.js#L3341
 */

describe('Backwards compatibility with _.defaults', function() {
  it('should assign properties of a source object if missing on the destination object', function() {
    defaultsDeep({ a: 1 }, { a: 2, b: 2 }).should.eql({ a: 1,  b: 2 });
  });

  it('should accept multiple source objects', function() {
    var expected = { a: 1, b: 2, c: 3 };

    defaultsDeep({ a: 1, b: 2 }, { b: 3 }, { c: 3 }).should.eql(expected);
    defaultsDeep({ a: 1, b: 2 }, { b: 3, c: 3 }, { c: 2 }).should.eql(expected);
  });

  it('should not overwrite `null` values', function() {
    var actual = defaultsDeep({ a: null }, { a: 1 });

    (null === actual.a).should.equal(true);
  });

  it('should overwrite `undefined` values', function() {
    var actual = defaultsDeep({ 'a': undefined }, { 'a': 1 });

    actual.a.should.equal(1);
  });
});
