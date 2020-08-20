var assert = console.assert

var words = require('./words')
var snake = require('./snake')
var kebab = require('./kebab')
var pascal = require('./pascal')
var camel = require('./camel')

var w0 = words('the quick brown fox jumps over the lazy dog')
var w1 = words('   theQuick  brown-fox jumps_over the lazy dog ')
var w2 = words('the quick brown fox jumps over the IBM computer')

assert(w0.length === 9)
assert(w1.length === 9)
assert(w2.length === 9)

assert(snake(w0) === snake(w1))
assert(kebab(w0) === kebab(w1))
assert(pascal(w0) === pascal(w1))
assert(camel(w0) === camel(w1))

assert(snake(w1) === 'the_quick_brown_fox_jumps_over_the_lazy_dog')
assert(kebab(w1) === 'the-quick-brown-fox-jumps-over-the-lazy-dog')
assert(pascal(w1) === 'TheQuickBrownFoxJumpsOverTheLazyDog')
assert(camel(w1) === 'theQuickBrownFoxJumpsOverTheLazyDog')

assert(snake(w2) === 'the_quick_brown_fox_jumps_over_the_ibm_computer')
assert(kebab(w2) === 'the-quick-brown-fox-jumps-over-the-ibm-computer')
assert(pascal(w2) === 'TheQuickBrownFoxJumpsOverTheIBMComputer')
assert(camel(w2) === 'theQuickBrownFoxJumpsOverTheIBMComputer')
