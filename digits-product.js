function solution(product) {
  if (product === 0) {
    return 10;
  }

  for (let i = 0; i < 5000; i++) {
    const num = String(i);
    let total = 1;

    for (const char in num) {
      total *= Number(num[char]);
    }

    if (total === product) {
      return i;
    }
  }
  return -1;
}

solution();
