function solution(inputString) {
  const regex = /\d+/g;
  const numStr = inputString.match(regex);

  if (numStr === null) {
    return 0;
  }

  const numArr = numStr.map(Number);

  return numArr.reduce((prev, curr) => prev + curr, 0);

}

solution();
