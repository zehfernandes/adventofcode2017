const fs = require('fs')

exports.getInput = filename => {
  return fs.readFileSync(filename, 'utf8').trim()
}
