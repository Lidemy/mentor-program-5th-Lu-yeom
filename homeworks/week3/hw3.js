function findPrimeNumber(lines) {
  for (let i = 1; i <= Number(lines[0]); i++) {
    if (isPrime(Number(lines[i]))) {
      console.log('Prime')
    } else {
      console.log('Composite')
    }
  }
}

// 判斷質數
function isPrime(n) {
  if (n === 1) return false // 數字1要回傳composite
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

findPrimeNumber([5])
