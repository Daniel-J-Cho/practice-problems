function solution(a) {
  const newArr = [];

  for (let i = a.length - 1; i >= 0; i--) {
    const bin = ('00000000' + a[i].toString(2)).slice(-8);
    newArr.push(bin);
  }

  return parseInt(newArr.join(''), 2);
}

solution();
