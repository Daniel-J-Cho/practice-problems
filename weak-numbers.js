function solution(n) {
  const divisorCountArr = [];
  const weaknessArr = [];
  const finalArr = [];

  for (let i = 1; i <= n; i++) {
    let divisorCount = 0;
    let divisor = i;

    while (divisor > 0) {
      if (i % divisor === 0) {
        divisorCount++;
      }
      divisor--;
    }
    let weakness = 0;
    for (let j = 0; j < divisorCountArr.length; j++) {
      if (divisorCount < divisorCountArr[j]) {
        weakness++;
      }
    }
    divisorCountArr.push(divisorCount);
    weaknessArr.push(weakness);
  }
  const weakest = Math.max(...weaknessArr);
  const quantity = weaknessArr.reduce((total, x) => x === weakest ? total + 1 : total, 0);
  finalArr.push(weakest);
  finalArr.push(quantity);
  return finalArr;
}

solution();
