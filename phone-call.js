function solution(min1, min2To10, min11, s) {
  let minutes = 0;
  const minTwoTen = 9;

  if (s < min1) {
    return 0;
  }

  minutes++;
  s -= min1;

  if (s < min2To10 * minTwoTen) {
    return Math.floor(minutes + s / min2To10);
  }
  minutes += minTwoTen;
  s -= min2To10 * minTwoTen;

  return Math.floor(minutes + (s / min11));
}

solution();
