function solution(n) {
  return parseInt(
    n.toString(2).padStart(32, '0').match(/(..?)/g).map(el => el.split('').reverse().join('')).join(''), 2
  );
}

solution();
