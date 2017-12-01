const { firstAnswer, secondAnswer, parser } = require('../index.js')
/*
describe('Part 1 - Inverse Captcha', () => {
  test('Check parser', () => {
    const result = parser('1122')
    expect(result).toEqual([1, 1, 2, 2])
  })

  test('Check case 1122', () => {
    const result = firstAnswer('1122')
    expect(result).toEqual(3)
  })

  test('Check case 1111', () => {
    const result = firstAnswer('1111')
    expect(result).toEqual(4)
  })

  test('Check case 1234', () => {
    const result = firstAnswer('1234')
    expect(result).toEqual(0)
  })

  test('Check case 91212129', () => {
    const result = firstAnswer('91212129')
    expect(result).toEqual(9)
  })
})
*/
describe('Part 2 - Inverse Captcha', () => {
  test('Check case 1212', () => {
    const result = secondAnswer('1212')
    expect(result).toEqual(6)
  })

  test('Check case 1221', () => {
    const result = secondAnswer('1221')
    expect(result).toEqual(0)
  })

  test('Check case 123425', () => {
    const result = secondAnswer('123425')
    expect(result).toEqual(4)
  })

  test('Check case 123123', () => {
    const result = secondAnswer('123123')
    expect(result).toEqual(12)
  })

  test('Check case 12131415', () => {
    const result = secondAnswer('12131415')
    expect(result).toEqual(4)
  })
})
