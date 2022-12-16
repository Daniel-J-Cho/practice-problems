function solution(score1, score2) {

  const max = Math.max(score1, score2);
  const min = Math.min(score1, score2);

  if ((max === 6 && min < 5) || (max === 7 && min === 5) || (max === 7 && min === 6)) {
    return true;
  } else {
    return false;
  }
}

solution();
