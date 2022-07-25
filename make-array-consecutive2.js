function solution(statues) {
  var counter = 0;
  statues.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < statues.length; i++) {
    if (statues[i + 1] - statues[i] > 1) {
      counter += statues[i + 1] - statues[i] - 1;
    }
  }
  return counter;
}

solution();
