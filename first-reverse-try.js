function solution(arr) {
  let temp;

  if (arr.length < 2) {
    return arr;
  } else {
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
  }
}

solution();
