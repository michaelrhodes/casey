# casey
character case transforms

## install
```sh
npm install michaelrhodes/casey
```

## use
```js
var casey = require('casey')

casey.camel('the quick brown fox jumps over the IBM computer')
> 'theQuickBrownFoxJumpsOverTheIBMComputer'

casey.kebab('the quick brown fox jumps over the IBM computer')
> 'the-quick-brown-fox-jumps-over-the-ibm-computer'

casey.pascal('the quick brown fox jumps over the IBM computer')
> 'TheQuickBrownFoxJumpsOverTheIBMComputer'

casey.snake('the quick brown fox jumps over the IBM computer')
> 'the_quick_brown_fox_jumps_over_the_ibm_computer'
```

## obey
[CC0-1.0](https://creativecommons.org/publicdomain/zero/1.0/)
