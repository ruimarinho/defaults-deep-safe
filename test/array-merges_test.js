
/**
 * Module dependencies.
 */

var defaultsDeep = require('..');

/**
 * Test array merges.
 */

describe('Arrays', function() {
  it('should not merge arrays', function() {
    var object = {
      foo: 'bar',
      bar: [],
      qux: {
        biz: {
          net: ['foo']
        }
      }
    };

    var source = {
      bar: ['net'],
      qux: {
        biz: {
          net: ['bar']
        }
      },
      qox: ['biz']
    };

    var result = defaultsDeep(object, source);

    result.bar.should.eql([]);
    result.qux.biz.net.should.eql(['foo']);
    result.qox.should.eql(['biz']);
  });
});
