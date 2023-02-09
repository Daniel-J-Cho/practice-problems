function solution(statues) {
  const sorted = statues.sort((a, b) => a - b);
  let counter = 0;

  for (let i = 0; i < sorted.length; i++) {
    if (i === sorted.length - 1) {
      break;
    }
    while ((sorted[i + 1] - sorted[i]) !== 1) {
      sorted[i]++;
      counter++;
    }
  }

  return counter;
}

solution();
