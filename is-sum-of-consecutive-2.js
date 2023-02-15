function solution(n) {
  let count = 0;

  for (let i = 1; i < (n / 2); i++) {
    let temp = i + 1;
    let sum = i + (i + 1);
    while (sum < n) {
      temp++;
      sum += temp;
    }
    if (sum === n) {
      count++;
    }
  }

  return count;
}

solution();
