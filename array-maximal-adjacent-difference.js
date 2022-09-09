function solution(inputArray) {
  let diff = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const currDiff = Math.abs(inputArray[i + 1] - inputArray[i]);
    if (currDiff > diff) {
      diff = currDiff;
    }
  }

  return diff;
}

solution();
