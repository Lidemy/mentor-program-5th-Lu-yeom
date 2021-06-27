function compare(a, b, k) {
  if (a === b) {
    return 'DRAW'
  }

  if (k === -1) {
    const temp = a
    a = b
    b = temp
  }

  if (a.length > b.length) {
    return 'A'
  }
  if (a.length < b.length) {
    return 'B'
  }

  if (a.length === b.length) {
    for (let j = 0; j < a.length; j += 1) {
      if (a[j] === b[j]) {
        continue
      }
      if (a[j] > b[j]) {
        return 'A'
      } else {
        return 'B'
      }
    }
  }
}

// eslint-disable-next-line no-unused-vars
function solve(input) {
  const n = Number(input[0])
  for (let i = 1; i <= n; i += 1) {
    const [a, b, k] = input[i].split('')
    console.log(compare(a, b, k))
  }
}
