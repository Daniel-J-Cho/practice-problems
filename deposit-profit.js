function solution(deposit, rate, threshold) {
  let years = 0;
  let currentAmt = deposit;

  while (currentAmt < threshold) {
    currentAmt = currentAmt + ((rate / 100) * currentAmt);
    years++;
  }

  return years;
}

solution();
