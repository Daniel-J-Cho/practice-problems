function solution(a, b) {
  const arr = [];
  let counter = 0;

  for (let i = a; i <= b; i++) {
    arr.push(i.toString(2));
  }

  for (let j = 0; j < arr.length; j++) {
    for (let k = 0; k < arr[j].length; k++) {
      if (arr[j][k] === '1') {
        counter++;
      }
    }
  }

  return counter;
}

solution();
