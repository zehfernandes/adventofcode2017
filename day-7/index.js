const { getInput } = require('../utils')

const parser = input => {
  return input.split('\n').map(value => {
    let childrens = ''
    if (/\s->\s/.test(value)) {
      childrens = value.split(' -> ')[1].split(', ')
    }

    return {
      name: value.split(/\s/)[0],
      childrens: childrens,
      weight: parseInt(
        value
          .split(/\s/)[1]
          .replace('(', '')
          .replace(')', '')
      ),
    }
  })
}

const findBottomProgram = tree => {
  const flatArray = []
  tree.forEach(element => {
    flatArray.push(element.name)
    if (element.childrens !== '') {
      element.childrens.map(value => flatArray.push(value))
    }
  })

  return flatArray.find((element, index) => {
    const array = [...flatArray]
    array[index] = ''
    return !array.includes(element)
  })
}

const sortByDepth = (a, b) => {
  let itemA = a.depth
  let itemB = b.depth
  if (typeof a.depth === 'undefined') {
    itemA = 999999999
  }
  if (typeof b.depth === 'undefined') {
    itemB = 999999999
  }

  return itemA - itemB
}

const sortByDepthInverse = (a, b) => {
  let itemA = a.depth
  let itemB = b.depth
  if (typeof a.depth === 'undefined') {
    itemA = 999999999
  }
  if (typeof b.depth === 'undefined') {
    itemB = 999999999
  }

  return itemB - itemA
}

const registerDepth = tree => {
  const bottomProgram = findBottomProgram(tree)
  const bottomPosition = tree.map(x => x.name).indexOf(bottomProgram)
  tree[bottomPosition].depth = 0

  tree.sort(sortByDepth)

  for (const i in tree) {
    const node = tree[i]
    if (node.childrens === '') continue

    for (const a in node.childrens) {
      const childrenName = node.childrens[a]
      const childrenIndex = tree.map(x => x.name).indexOf(childrenName)
      tree[childrenIndex].depth = node.depth + 1
    }

    if (typeof node.depth === 'undefined') {
      registerDepth(tree)
    }
  }

  return tree
}

const countMemory = tree => {
  const track = Array()
  tree.sort(sortByDepthInverse)
  tree.forEach(element => {
    if (element.childrens === '') {
      element.allWeight = element.weight
      return
    }

    let count = 0
    // console.log(element)
    const elWithValues = element.childrens.map(value => {
      const weight = tree.find(el => el.name === value).allWeight
      count = count + weight
      return weight
    })
    count = count + element.weight
    element.allWeight = count

    if (typeof track[element.depth] === 'undefined') {
      track[element.depth] = Array()
    }
    track[element.depth].push({
      average: count,
      node: element.name,
      values: elWithValues,
    })
  })

  return track
}

const firstAnswer = input => {
  const data = parser(input)
  return findBottomProgram(data)
}

const secondAnswer = input => {
  const data = parser(input)
  const depthTree = registerDepth(data)
  const all = countMemory(depthTree)

  console.log(all)
}

/*
  Data
*/
const data = getInput('./day-7/input.txt')
console.log(`First Answer: ${firstAnswer(data)}`)
console.log(`Second Answer: ${secondAnswer(data)}`)

module.exports = {
  parser,
  firstAnswer,
}
