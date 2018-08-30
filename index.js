
/**
 * Module dependencies.
 */

var _ = require('lodash');

/**
 * Merge defaults.
 */

function mergeDefaults(objectValue, sourceValue) {
  // Do not merge arrays.
  if (_.isArray(objectValue)) {
    return objectValue;
  }

  if (_.isPlainObject(sourceValue)) {
    return _.merge(objectValue, sourceValue, mergeDefaults);
  }

  return _.defaults(objectValue, sourceValue);
}

/**
 * Export `defaultsDeep`.
 */

module.exports = function() {
  var args = _.toArray(arguments);

  return [_.head(args)].concat(_.drop(args)).map(_.cloneDeep).concat(_.head(args)).reverse().reduce((result, object) => {
    return _.mergeWith(result, object, (objectValue, sourceValue) => {
      return _.isArray(sourceValue) ? sourceValue : undefined;
    });
  });
};
