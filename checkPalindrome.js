function solution(inputString) {
  var str = inputString.split('');
  var newStr = [];
  var revStr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '') {
      continue;
    } else {
      newStr.push(str[i]);
    }
  }

  for (let i = newStr.length - 1; i >= 0; i--) {
    revStr.push(newStr[i]);
  }

  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] !== revStr[i]) {
      return false;
    } else {
      continue;
    }
  }
  return true;
}

solution();
