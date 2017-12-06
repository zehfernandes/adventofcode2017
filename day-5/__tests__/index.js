const { firstAnswer, secondAnswer, parser } = require('../index.js')

describe('Utils', () => {
  test('Day 5 - Check parser', () => {
    const result = parser('0\n3\n0\n1\n-3')
    expect(result).toEqual([0, 3, 0, 1, -3])
  })
})

describe('Part 1 - A Maze of Twisty Trampolines, All Alike', () => {
  test('Check 0 3 0 1 -3', () => {
    const result = firstAnswer('0\n3\n0\n1\n-3')
    expect(result).toEqual(5)
  })
})

describe('Part 2 - A Maze of Twisty Trampolines, All Alike', () => {
  test('Check 0 3 0 1 -3', () => {
    const result = secondAnswer('0\n3\n0\n1\n-3')
    expect(result).toEqual(10)
  })
})
