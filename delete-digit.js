function solution(n) {
  const strNum = n.toString();

  const newArr = [];

  for (let i = 0; i < strNum.length; i++) {
    if (i === 0) {
      newArr.push(strNum.substring(1, strNum.length));
    } else {
      newArr.push(strNum.substring(0, i) + strNum.substring(i + 1));
    }
  }

  return Math.max(...newArr.map(Number));
}

solution();
