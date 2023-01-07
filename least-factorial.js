function solution(n) {
  let k = 1;
  let m = 1;

  while (k < n) {
    m++;
    k *= m;
  }

  return k;
}

solution();
