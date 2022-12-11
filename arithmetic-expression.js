function solution(a, b, c) {
  if (a + b === c) {
    return true;
  } else if (a - b === c) {
    return true;
  } else if (a * b === c) {
    return true;
  } else if (a / b === c) {
    return true;
  } else {
    return false;
  }
}
solution();
