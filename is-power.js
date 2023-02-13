function solution(n) {
  if (n <= 1) {
    return true;
  }

  for (let a = 2; a <= Math.sqrt(n); a++) {
    let b = 2;

    let testProduct = Math.pow(a, b);

    while (testProduct <= n && testProduct > 0) {
      if (testProduct === n) {
        return true;
      }

      b++;
      testProduct = Math.pow(a, b);
    }
  }

  return false;
}

solution();
