function solution(inputString) {
  const arr = inputString.split('');
  const testArr = arr;
  if (testArr.length % 2) {
    return false;
  } else {
    for (let i = 0; i < arr.length / 2; i++) {
      if (arr[i] === arr[i + (arr.length / 2)]) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }
}

solution();
