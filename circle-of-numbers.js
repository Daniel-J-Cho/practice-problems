function solution(n, firstNumber) {
  if (firstNumber > n / 2) {
    return firstNumber - (n / 2);
  } else if (firstNumber === n / 2) {
    return 0;
  } else {
    return firstNumber + (n / 2);
  }
}

solution();
