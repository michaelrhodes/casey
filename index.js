var words = require('./words')
var snake = require('./snake')
var kebab = require('./kebab')
var pascal = require('./pascal')
var camel = require('./camel')

module.exports = {
  snake: input => snake(words(input)),
  kebab: input => kebab(words(input)),
  pascal: input => pascal(words(input)),
  camel: input => camel(words(input))
}
