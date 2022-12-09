function solution(a, b) {
  if ((b - a) % 2 === 0 && a < b) {
    return false;
  } else if (a === b) {
    return false;
  } else {
    return true;
  }
}

solution();
