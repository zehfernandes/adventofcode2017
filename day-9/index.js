const { getInput } = require('../utils')

const firstAnswer = input => {
  const remove = input.replace(/!./g, '').replace(/<.*?>/g, '')
  let depth = 1
  let countBrakets = 0
  remove.split('').forEach(char => {
    if (char === '{') depth = depth + 1
    if (char === '}') {
      depth = depth - 1
      countBrakets = countBrakets + depth
    }
  })

  return countBrakets
}

const secondAnswer = input => {
  const remove = input.replace(/!./g, '')
  const match = remove.match(/<.*?>/g)
  return match.reduce(function(a, b) {
    return a + (parseInt(b.length) - 2)
  }, 0)
}

/*
  Data
*/
const data = getInput('./day-9/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  secondAnswer,
  firstAnswer,
}
