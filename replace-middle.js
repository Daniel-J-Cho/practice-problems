function solution(arr) {
  if (arr.length % 2) {
    return arr;
  }

  if (!(arr.length % 2)) {
    const sum = (arr[(arr.length / 2) - 1]) + (arr[arr.length / 2]);
    arr.splice((arr.length / 2) - 1, 2, sum);
    return arr;
  }
}

solution();
