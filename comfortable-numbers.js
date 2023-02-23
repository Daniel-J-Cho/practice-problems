function solution(l, r) {
  let counter = 0;

  for (let a = l; a <= r; a++) {
    for (let b = a + 1; b <= r; b++) {
      const endA = a + a.toString().split('').map(number => Number(number)).reduce((a, b) => a + b);
      const startB = b - b.toString().split('').map(number => Number(number)).reduce((a, b) => a + b);
      if (a >= startB && b <= endA) {
        counter++;
      }
    }
  }
  return counter;
}

solution();
