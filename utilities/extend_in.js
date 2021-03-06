var get = require('./get')
var set = require('./set')
var assign = require('object-assign')

module.exports = function extendIn (source, keypath, extensions) {
  if (keypath.length === 0) return assign({}, source, extensions)

  var data = assign({}, get(source, keypath))

  for (var i = 2, len = arguments.length; i < len; i++) {
    assign(data, arguments[i])
  }

  return set(source, keypath, data)
}
