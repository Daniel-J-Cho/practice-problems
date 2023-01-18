function solution(n) {
  const arr = n.toString().split('').reverse();

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      if (arr.indexOf('0', i) > i) {
        return true;
      } else {
        return false;
      }
    }
  }
}

solution();
