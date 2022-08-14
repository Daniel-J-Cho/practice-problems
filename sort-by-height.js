function solution(a) {
  const filterArr = [...a].filter(num => num !== -1);
  const sortArr = filterArr.sort((a, b) => a - b);
  let sortArrIndex = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      continue;
    } else {
      a[i] = sortArr[sortArrIndex++];
    }
  }
  return a;
}

solution();
