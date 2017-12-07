const { getInput } = require('../utils')

const parser = input => {
  return input.split(/\s/g).map(value => parseInt(value))
}

const memoryReallocation = data => {
  const memoryStates = []

  const state = data

  do {
    let maxValue = Math.max(...state)
    const maxValueIndex = state.indexOf(Math.max(...state))
    let i = maxValueIndex + 1

    memoryStates.push(state.join(''))

    state[maxValueIndex] = 0

    do {
      if (i > state.length - 1) i = 0

      state[i] = state[i] + 1

      maxValue--
      i++
    } while (maxValue > 0)
  } while (!memoryStates.includes(state.join('')))

  let secondAnswer
  memoryStates.filter((value, index, array) => {
    if (value === state.join('')) {
      secondAnswer = array.length - index
    }
  })

  return { first: memoryStates.length, second: secondAnswer }
}

/*
  Data
*/
const data = parser(getInput('./day-6/input.txt'))
const answer = memoryReallocation(data)
console.log(`First Answer: ${answer.first}`)
console.log(`Second Answer: ${answer.second}`)

module.exports = {
  memoryReallocation,
  parser,
}
