function solution(time) {
  const timeStr = time.toString().split(':').map(Number);
  const hours = 24;
  const minutes = 60;

  if (timeStr[0] < hours && timeStr[1] < minutes) {
    return true;
  } else {
    return false;
  }
}

solution();
