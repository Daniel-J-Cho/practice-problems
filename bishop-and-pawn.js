function solution(bishop, pawn) {
  const bishopPosition = bishop.split('');
  const pawnPosition = pawn.split('');

  bishopPosition[0] = bishopPosition[0].charCodeAt(0) - 'a'.charCodeAt(0);
  bishopPosition[1] = Number(bishopPosition[1]);
  pawnPosition[0] = pawnPosition[0].charCodeAt(0) - 'a'.charCodeAt(0);
  pawnPosition[1] = Number(pawnPosition[1]);

  if ((bishopPosition[0] - bishopPosition[1] === pawnPosition[0] - pawnPosition[1]) ||
    (bishopPosition[0] + bishopPosition[1] === pawnPosition[0] + pawnPosition[1])) {
    return true;
  } else {
    return false;
  }
}

solution();
