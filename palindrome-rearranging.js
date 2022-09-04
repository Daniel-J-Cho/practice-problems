function solution(inputString) {
  const strArr = inputString.split('');
  const countArr = [];
  let odd = 0;

  if (strArr.length === 1) {
    return true;
  }

  strArr.map(char => {
    if (countArr[char]) {
      countArr[char]++;
    } else {
      countArr[char] = 1;
    }
    return countArr;
  });

  for (const count in countArr) {
    const val = countArr[count];
    if ((val % 2) !== 0) {
      odd++;
    }
  }

  return odd < 2;
}

solution();
