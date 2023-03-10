function solution(inputString) {
  const lowerCase = inputString.toLowerCase();
  const reversed = lowerCase.split('').reverse().join('');

  if (lowerCase === reversed) {
    return true;
  } else {
    return false;
  }
}

solution();
