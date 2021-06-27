function printStar(i) {
  let result = ''
  for (let j = 1; j <= i; j++) {
    result += '*'
  }
  console.log(result)
}

// eslint-disable-next-line no-unused-vars
function star(n) {
  for (let i = 1; i <= n; i++) {
    printStar(i)
  }
}
