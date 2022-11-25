function solution(n, m) {
  if (n <= m) {
    if (m % n !== 0) {
      return Math.trunc(m / n) * n;
    } else {
      return (m / n) * n;
    }
  } else {
    return 0;
  }
}

solution();
