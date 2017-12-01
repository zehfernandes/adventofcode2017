const { getInput } = require('../utils')

const parser = input => {
  return input.split('').map(value => parseInt(value))
}

const findSequenceDigits = data => {
  const sequence = data.filter((value, index, array) => {
    if (index === 0) index = array.length
    return value === array[index - 1]
  })

  return sequence.length > 0 ? sequence : [0]
}

const findHalfwayDigit = data => {
  const sequence = data.filter((value, index, array) => {
    let pos = index + array.length / 2
    if (pos >= array.length) pos = pos - array.length
    return value === array[pos]
  })

  return sequence.length > 0 ? sequence : [0]
}

const firstAnswer = input => {
  const data = parser(input)
  const digits = findSequenceDigits(data)

  return digits.reduce(function(a, b) {
    return a + b
  })
}
const secondAnswer = input => {
  const data = parser(input)
  const digits = findHalfwayDigit(data)

  return digits.reduce(function(a, b) {
    return a + b
  })
}

const data = getInput('./day-1/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  firstAnswer,
  secondAnswer,
  parser,
}
