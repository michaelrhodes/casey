var proper = /([A-Z]*(?=[A-Z]|$))/
var separator = /([-_\s]+)/
var excluded = /[^-\s\w]/g

module.exports = input => input
  .replace(excluded, ' ')
  .split(separator)
  .reduce((array, string) => ((
    separator.test(string) ||
    array.push.apply(array, string.split(proper).filter(s => s))
  ), array), [])
