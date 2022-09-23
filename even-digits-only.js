function solution(n) {
  const arr = Array.from(n.toString()).map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}

solution();
