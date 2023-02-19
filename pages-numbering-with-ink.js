function solution(current, numberOfDigits) {
  let currValDigits = current.toString().length;
  let remaining = numberOfDigits - currValDigits;

  while (remaining >= currValDigits) {
    current++;
    currValDigits = current.toString().length;
    remaining -= currValDigits;
  }

  return current;
}

solution();
