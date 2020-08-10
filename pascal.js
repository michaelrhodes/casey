module.exports = words => words
  .map(s => s[0].toUpperCase() + s.substr(1))
  .join('')
