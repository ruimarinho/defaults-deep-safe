
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

  return _.merge.apply(null, _.initial(args).concat(_.rest(args).map(_.cloneDeep)).concat(mergeDefaults));
};
