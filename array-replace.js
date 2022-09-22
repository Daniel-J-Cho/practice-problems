function solution(inputArray, elemToReplace, substitutionElem) {
  const arr = [];

  for (let i = 0; i < inputArray.length; i++) {
    if (inputArray[i] === elemToReplace) {
      arr.push(substitutionElem);
    } else {
      arr.push(inputArray[i]);
    }
  }

  return arr;
}

solution();
