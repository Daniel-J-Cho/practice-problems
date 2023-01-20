function solution(n) {
  const arr = n.toString().split('').map(number => Number(number));

  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] < 5) {
      arr.splice(i, 1, 0);
    } else if (arr[i] >= 5) {
      arr.splice(i, 1, 0);
      arr.splice(i - 1, 1, arr[i - 1] + 1);
    }
  }

  return Number(arr.join(''));
}

solution();
