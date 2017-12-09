const { firstAnswer, parser } = require('../index.js')

describe('Utils', () => {
  test('Day 7 - Check parser', () => {
    const result = parser('pbga (66)\nfwft (72) -> pbga')
    expect(result).toEqual([
      { name: 'pbga', childrens: '', weight: 66 },
      {
        name: 'fwft',
        childrens: ['pbga'],
        weight: 72,
      },
    ])
  })
})

describe('Part 1 - Recursive Circus', () => {
  test('Check bottom program', () => {
    const result = firstAnswer('pbga (66)\nfwft (72) -> pbga')
    expect(result).toEqual('fwft')
  })
})
