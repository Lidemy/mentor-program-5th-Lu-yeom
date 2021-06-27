function findNarcissistic(n, m) {
  for (let i = n; i <= m; i++) {
    const digit = i.toString().length
    const numbers = i.toString().split('')
    if (isNarcissistic(i, numbers, digit)) {
      console.log(i)
    }
  }

  function isNarcissistic(raw, numbers, digit) {
    let sum = 0
    numbers.forEach((n) => {
      sum += Number(n) ** digit
    })
    return sum === Number(raw)
  }
}

findNarcissistic(5, 200)
