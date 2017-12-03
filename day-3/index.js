function distance(a, b) {
  var distance = 0
  var dimensions = Math.max(a.length, b.length)
  for (var i = 0; i < dimensions; i++) {
    distance += Math.abs((b[i] || 0) - (a[i] || 0))
  }
  return distance
}

/*
  I get the Ulam Generator code base from:
  https://github.com/qmacro/ulam/blob/master/ulam.js
*/
function walkToUlamSpiral(w, h, valueInput) {
  const startCoords = [Math.floor(w / 2) + w % 2, Math.floor(h / 2) + 1]
  const matrix = [...Array(w).keys()].map(i => Array(h).fill(0))
  let answered = false

  let x = startCoords[0]
  let y = startCoords[1]

  let value = 1
  let count = 1

  matrix[y][x] = 1

  // Starting directions, and previous directions
  let xdir = +1,
    ydir = 0
  let xdirprev = +1,
    ydirprev = +1

  do {
    // Do twice
    for (let i = 0; i < 2; i++) {
      // Do <count> times
      for (let c = 0; c < count; c++) {
        // First Answer
        if (value === valueInput) {
          const pointDistance = distance(startCoords, [x, y])
          console.log(`First Answer: ${pointDistance}`)
          return
        }

        matrix[y][x] =
          matrix[y][x] +
          matrix[y][x + 1] +
          matrix[y][x - 1] +
          matrix[y + 1][x] +
          matrix[y - 1][x] +
          matrix[y + 1][x + 1] +
          matrix[y + 1][x - 1] +
          matrix[y - 1][x - 1] +
          matrix[y - 1][x + 1]

        // Increment value
        value++

        // Second Answer
        if (matrix[y][x] > valueInput && !answered) {
          console.log(`Second Answer: ${matrix[y][x]}`)
          answered = true
        }
        // Move
        x += xdir
        y += ydir
      }

      // Adjust direction
      if (xdir === 0) {
        xdir = xdirprev * -1
        ydirprev = ydir
        ydir = 0
      } else {
        ydir = ydirprev * -1
        xdirprev = xdir
        xdir = 0
      }
    }

    count++

    // Failsafe!
  } while (value < 9999999)
}

/*
  Answer
*/

walkToUlamSpiral(1000, 1000, 312051)

module.exports = {
  walkToUlamSpiral,
}
