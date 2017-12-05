const { firstAnswer, secondAnswer, parser } = require('../index.js')

describe('Utils', () => {
  test('Day 4 - Check parser', () => {
    const result = parser('aa bb cc dd ee\niix ewj')
    expect(result).toEqual(['aa bb cc dd ee', 'iix ewj'])
  })
})

describe('Part 1 - High-Entropy Passphrases', () => {
  test('Check aa bb cc dd ee', () => {
    const result = firstAnswer('aa bb cc dd ee')
    expect(result).toEqual(1)
  })

  test('Check aa bb cc dd aa', () => {
    const result = firstAnswer('aa bb cc dd aa')
    expect(result).toEqual(0)
  })

  test('Check aa bb cc dd aaa', () => {
    const result = firstAnswer('aa bb cc dd aaa')
    expect(result).toEqual(1)
  })
})

describe('Part 2 - High-Entropy Passphrases', () => {
  test('Check abcde fghij', () => {
    const result = secondAnswer('abcde fghij')
    expect(result).toEqual(1)
  })

  test('Check abcde xyz ecdab', () => {
    const result = secondAnswer('abcde xyz ecdab')
    expect(result).toEqual(0)
  })

  test('Check a ab abc abd abf abj', () => {
    const result = secondAnswer('a ab abc abd abf abj')
    expect(result).toEqual(1)
  })

  test('Check iiii oiii ooii oooi oooo', () => {
    const result = secondAnswer('iiii oiii ooii oooi oooo')
    expect(result).toEqual(1)
  })

  test('Check oiii ioii iioi iiio', () => {
    const result = secondAnswer('oiii ioii iioi iiio')
    expect(result).toEqual(0)
  })
})
