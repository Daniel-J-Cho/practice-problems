function solution(divisor, bound) {
  let N = null;

  for (let i = 0; i <= bound; i++) {
    if (i % divisor !== 0) {
      continue;
    } else {
      N = i;
    }
  }

  return N;
}

solution();
