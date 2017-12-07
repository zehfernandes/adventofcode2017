const { memoryReallocation, parser } = require('../index.js')

describe('Utils', () => {
  test('Day 6 - Check parser', () => {
    const result = parser('2	8	8	5')
    expect(result).toEqual([2, 8, 8, 5])
  })
})

describe('Part 1 - Memory Reallocation', () => {
  test('Check 0 2 7 0', () => {
    const data = parser('0 2 7 0')
    const result = memoryReallocation(data)
    expect(result.first).toEqual(5)
  })
})

describe('Part 2 - Memory Reallocation', () => {
  test('Check 0 3 0 1 -3', () => {
    const data = parser('0 2 7 0')
    const result = memoryReallocation(data)
    expect(result.second).toEqual(4)
  })
})
