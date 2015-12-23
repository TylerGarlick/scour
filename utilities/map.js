const forEach = require('./each')

module.exports = function map (each, fn) {
  /* istanbul ignore next */
  if (typeof each !== 'function') each = forEach.bind(this, each)
  const result = []
  each(function () { result.push(fn.apply(this, arguments)) })
  return result
}