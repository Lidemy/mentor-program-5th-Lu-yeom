function printStars(n) {
  let stars = ''
  for (let i = 0; i <= n; i++) {
    stars = `${stars}*` + '\n'
  }
  console.log(stars)
}
printStars(5)
