const { firstAnswer, secondAnswer } = require('../index.js')

describe('Utils', () => {
  test('Day 7 - Check parser', () => {})
})

describe('Part 1 - Stream Processing', () => {
  test('Check {}', () => {
    const result = firstAnswer('{}')
    expect(result).toEqual(1)
  })

  test('Check {{{}}}', () => {
    const result = firstAnswer('{{{}}}')
    expect(result).toEqual(6)
  })

  test('Check {{{},{},{{}}}}', () => {
    const result = firstAnswer('{{{},{},{{}}}}')
    expect(result).toEqual(16)
  })

  test('Check {<a>,<a>,<a>,<a>}', () => {
    const result = firstAnswer('{<a>,<a>,<a>,<a>}')
    expect(result).toEqual(1)
  })

  test('Check {{<ab>},{<ab>},{<ab>},{<ab>}}', () => {
    const result = firstAnswer('{{<ab>},{<ab>},{<ab>},{<ab>}}')
    expect(result).toEqual(9)
  })

  test('Check {{<!!>},{<!!>},{<!!>},{<!!>}}', () => {
    const result = firstAnswer('{{<!!>},{<!!>},{<!!>},{<!!>}}')
    expect(result).toEqual(9)
  })

  test('Check {{<a!>},{<a!>},{<a!>},{<ab>}}', () => {
    const result = firstAnswer('{{<a!>},{<a!>},{<a!>},{<ab>}}')
    expect(result).toEqual(3)
  })
})

describe('Part 2 - Stream Processing', () => {
  test('Check <{o"i!a,<{i<a>', () => {
    const result = secondAnswer('<{o"i!a,<{i<a>')
    expect(result).toEqual(10)
  })
})
