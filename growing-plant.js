function solution(upSpeed, downSpeed, desiredHeight) {
  let heightSum = 0;
  let days = 1;

  while (heightSum < desiredHeight) {
    heightSum += upSpeed;
    if (heightSum >= desiredHeight) {
      return days;
    } else {
      days++;
      heightSum -= downSpeed;
    }
  }
}

solution();
