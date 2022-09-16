function solution(image) {
  const square = 3;
  const arr = [];

  for (let i = 0; i <= image.length - square; i++) {
    const subArr = [];
    for (let j = 0; j <= image[0].length - square; j++) {
      let sum = 0;
      for (let k = 0; k < square; k++) {
        for (let l = 0; l < square; l++) {
          sum += image[i + k][j + l];
        }
      }
      subArr.push(Math.floor(sum / 9));
    }
    if (subArr.length) {
      arr.push(subArr);
    }
  }
  return arr;
}

solution();
