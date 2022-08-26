function solution(a, b) {
  let result = true;
  let aVar = null;
  let bVar = null;
  let swapped = false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      if (aVar === null || bVar === null) {
        aVar = a[i];
        bVar = b[i];
      } else {
        if (swapped || aVar !== b[i] || bVar !== a[i]) {
          result = false;
        }
        swapped = true;
      }
    }
  }
  return result;
}

solution();
