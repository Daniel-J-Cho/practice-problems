function solution(inputString) {
  const array = inputString.split('.');
  if (array.length !== 4) {
    return false;
  }
  for (let i = 0; i < array.length; i++) {
    const strInd = array[i].toString();
    const arrInd = strInd.split('');
    if (arrInd.length === 0) {
      return false;
    }
    for (let j = 0; j < arrInd.length; j++) {
      if (arrInd.length > 1 && arrInd[j] === '0') {
        return false;
      }
    }
    if (array[i] >= 0 && array[i] <= 255) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}

solution();
