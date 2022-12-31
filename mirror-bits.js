function solution(a) {
  const reversedStr = a.toString(2).split('').reverse().join('');

  return parseInt(reversedStr, 2);
}

solution();
