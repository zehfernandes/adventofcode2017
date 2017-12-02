const { firstAnswer, secondAnswer, parser } = require('../index.js')

describe('Utils', () => {
  test('Day 2 - Check parser', () => {
    const result = parser('5 1 9 5\n7 5 3\n2 4 6 8')
    expect(result).toEqual([[5, 1, 9, 5], [7, 5, 3], [2, 4, 6, 8]])
  })
})

describe('Part 1 - Corruption Checksum', () => {
  test('Check checksum', () => {
    const result = firstAnswer('5 1 9 5\n7 5 3\n2 4 6 8')
    expect(result).toEqual(18)
  })
})

describe('Part 2 - Corruption Checksum', () => {
  test('Check evenly divisible values', () => {
    const result = secondAnswer('5 9 2 8\n9 4 7 3\n3 8 6 5')
    expect(result).toEqual(9)
  })
})
