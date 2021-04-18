function isPrime(num) {
    if (num === 2 || num === 3 || num === 5 || num === 7) return true;
    return num%2 > 0 && num%3 > 0 && num%5 > 0

    // тут надо вычитать корень и перебирать массив !!
  }
  
  console.log(
    isPrime(2),
    isPrime(3)
  )