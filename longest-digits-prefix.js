function solution(inputString) {
  const digitArr = [];

  for (let i = 0; i < inputString.length; i++) {
    if (/\d/.test(inputString[i])) {
      digitArr.push(inputString[i]);
    } else {
      break;
    }
  }

  return digitArr.join('');
}

solution();
