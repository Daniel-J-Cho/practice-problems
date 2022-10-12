let degree = 0;
function solution(n) {
  if (n < 10) {
    return degree;
  }

  const numArr = n.toString().split('').map(Number);
  const sum = numArr.reduce((prev, curr) => prev + curr);
  degree++;

  return solution(sum);
}

solution();
