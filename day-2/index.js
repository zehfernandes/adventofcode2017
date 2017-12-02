const { getInput } = require('../utils')

const parser = input => {
  return input
    .split('\n')
    .map(value => value.split(/\s/g).map(value => parseInt(value)))
}

const findMaxMinDiference = data => {
  const max = Math.max.apply(Math, data)
  const min = Math.min.apply(Math, data)

  return max - min
}

const findEvenlyDivisible = data => {
  let divisible = []
  data.map((value, index, array) => {
    return array.map((element, findex) => {
      if (value % element === 0 && index !== findex) {
        divisible = value / element
      }
    })
  })

  return divisible
}

/*
  Answer
*/

const firstAnswer = input => {
  const data = parser(input)
  const diferences = data.map(findMaxMinDiference)
  return diferences.reduce(function(a, b) {
    return a + b
  })
}

const secondAnswer = input => {
  const data = parser(input)
  const divisible = data.map(findEvenlyDivisible)
  return divisible.reduce(function(a, b) {
    return a + b
  })
}

/*
  Data
*/

const data = getInput('./day-2/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  firstAnswer,
  secondAnswer,
  parser,
}
