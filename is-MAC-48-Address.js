function solution(inputString) {
  const mac48Addy = inputString.split('-');
  const regexp = /[0-9A-F]/;

  if (mac48Addy.length > 6) {
    return false;
  }

  for (let i = 0; i < mac48Addy.length; i++) {
    if (mac48Addy[i] === '' || mac48Addy[i].length !== 2) {
      return false;
    }
    for (let j = 0; j < mac48Addy[i].length; j++) {
      if (regexp.test(mac48Addy[i][j])) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}

solution();
