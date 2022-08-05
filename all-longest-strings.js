function solution(inputArray) {
  const arrCopy = inputArray;
  let stringLength = 0;
  const outputArray = [];
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i].length >= stringLength) {
      stringLength = arrCopy[i].length;
    }
  }
  for (let j = 0; j < arrCopy.length; j++) {
    if (arrCopy[j].length === stringLength) {
      outputArray.push(arrCopy[j]);
    }
  }
  return outputArray;
}

solution();
