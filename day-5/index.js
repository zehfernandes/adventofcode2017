const { getInput } = require('../utils')

const parser = input => {
  return input.split('\n').map(Number)
}

/*
  Answer
*/

const firstAnswer = input => {
  const data = parser(input)

  let count = 0
  let i = 0

  while (data[count] !== undefined) {
    const newValue = data[count] + 1
    data[count] = newValue
    count = count + data[count] - 1

    i++

    if (data[count] === undefined) {
      return i
    }
  }
}

const secondAnswer = input => {
  const data = parser(input)

  let count = 0
  let i = 0

  while (data[count] !== undefined) {
    let newValue

    if (data[count] > 3) {
      newValue = data[count] - 1
    } else {
      newValue = data[count] + 1
    }

    data[count] = newValue
    count = count + data[count] - 1

    i++

    if (data[count] === undefined) {
      return i
    }
  }
}

/*
  Data
*/
const data = getInput('./day-5/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  firstAnswer,
  secondAnswer,
  parser,
}
