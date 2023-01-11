function solution(n, l, r) {
  return Math.ceil(Math.max(0, (Math.min(n / 2 - l, r - n / 2) + ((n + 1) % 2))));
}

solution();
