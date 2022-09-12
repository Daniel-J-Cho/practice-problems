function solution(inputArray) {
  const max = Math.max(...inputArray);
  for (let i = 1; i < max; i++) {
    const rem = inputArray.some(element => element % i === 0);
    if (!rem) {
      return i;
    }
  }
  return max + 1;
}

solution();
