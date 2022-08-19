function solution(a) {
  let teamOne = 0;
  let teamTwo = 0;
  const totalArr = [];
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      teamOne += a[i];
    } else {
      teamTwo += a[i];
    }
  }
  totalArr.push(teamOne);
  totalArr.push(teamTwo);

  return totalArr;
}

solution();
