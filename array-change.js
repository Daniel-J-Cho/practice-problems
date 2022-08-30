function solution(inputArray) {
  let counter = 0;
  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i + 1] > inputArray[i]) {
      continue;
    } else {
      while (inputArray[i + 1] <= inputArray[i]) {
        inputArray[i + 1]++;
        counter++;
      }
    }
  }
  return counter;
}

solution();
