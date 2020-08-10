module.exports = words => words
  .map((s, i) => s[0]['to' + (i ? 'Upper' : 'Lower') + 'Case']() + s.substr(1))
  .join('')
