function solution(cell) {
  let counter = 0;

  const moves = [[-2, -1], [-2, 1], [-1, -2], [-1, 2], [1, -2], [1, 2], [2, -1], [2, 1]];

  for (const move of moves) {
    if (('a'.charCodeAt(0) <= cell[0].charCodeAt(0) + move[0]) &&
      (cell[0].charCodeAt(0) + move[0] <= 'h'.charCodeAt(0)) &&
      (Number(cell[1]) + move[1] >= 1) && (Number(cell[1]) + move[1] <= 8)) {
      counter++;
    } else {
      continue;
    }
  }

  return counter;
}

solution();
