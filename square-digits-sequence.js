function solution(a0) {
  if (a0 === 1) {
    return 2;
  }

  const arr = [];
  const a0Str = a0.toString()
    .split('')
    .map(number => Number(number));
  let currSum = 0;
  arr.push(a0);

  const sum = a0Str.reduce((a, b) => a + Math.pow(b, 2), 0);
  arr.push(sum);

  while (!(arr[arr.length - 1] === arr[arr.length - 2])) {
    currSum = arr[arr.length - 1].toString()
      .split('')
      .map(number => Number(number))
      .reduce((a, b) => a + Math.pow(b, 2), 0);
    if (arr.includes(currSum)) {
      arr.push(currSum);
      return arr.length;
    } else {
      arr.push(currSum);
    }
  }
}

solution();
