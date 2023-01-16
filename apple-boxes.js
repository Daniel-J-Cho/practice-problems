function solution(k) {
  let even = 0;
  let odd = 0;

  for (let i = 1; i <= k; i++) {
    if (i % 2 === 0) {
      even += Math.pow(i, 2);
    } else {
      odd += Math.pow(i, 2);
    }
  }

  return even - odd;
}

solution();
