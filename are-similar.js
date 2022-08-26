function solution(a, b) {
  let arrOne = [];
  let arrTwo = [];
  if (a.join() === b.join()) {
    return true;
  }
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      arrOne.push(a[i]);
      arrTwo.push(b[i]);
    }
  }

  arrTwo = arrTwo.reverse().join();
  arrOne = arrOne.join();
  if (arrOne === arrTwo) {
    return true;
  }
  return false;
}

solution();
