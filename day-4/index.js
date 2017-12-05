const { getInput } = require('../utils')

const parser = input => {
  return input.split('\n')
}

const checkDuplicateWords = phrase => {
  const arr = phrase.split(/\s/g)
  return new Set(arr).size === arr.length
}

const checkAnagrams = phrase => {
  const unique = new Set()
  const arr = phrase.split(/\s/g).map(value => {
    unique.add(
      value
        .split('')
        .sort()
        .join('')
    )
  })

  return unique.size === arr.length
}

/*
  Answer
*/

const firstAnswer = input => {
  const data = parser(input)
  const availablePassphrases = data.filter(value => {
    return checkDuplicateWords(value)
  })

  return availablePassphrases.length
}

const secondAnswer = input => {
  const data = parser(input)
  const availablePassphrases = data.filter(value => {
    return checkAnagrams(value)
  })

  return availablePassphrases.length
}

/*
  Data
*/

const data = getInput('./day-4/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  firstAnswer,
  secondAnswer,
  parser,
}
