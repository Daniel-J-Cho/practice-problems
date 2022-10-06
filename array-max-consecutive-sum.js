function solution(inputArray, k) {
  let currSum = inputArray.slice(0, k).reduce((accumulator, currVal) => accumulator + currVal);
  let max = currSum;

  for (let i = 0; i < inputArray.length - k; i++) {
    currSum += inputArray[i + k] - inputArray[i];
    max = Math.max(max, currSum);
  }

  return max;
}

solution();
