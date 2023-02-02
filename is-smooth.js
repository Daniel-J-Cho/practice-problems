function solution(arr) {
  if (arr.length % 2) {
    const first = arr[0];
    const last = arr[arr.length - 1];

    if (first === last && arr[Math.floor(arr.length / 2)] === first) {
      return true;
    } else {
      return false;
    }
  }

  if (!(arr.length % 2)) {
    const firstMid = arr[(arr.length / 2) - 1];
    const secondMid = arr[arr.length / 2];
    const sum = firstMid + secondMid;

    if (arr[0] === arr[arr.length - 1] && sum === arr[0]) {
      return true;
    } else {
      return false;
    }
  }
}

solution();
