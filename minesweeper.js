function solution(matrix) {
  const height = matrix.length;
  const length = matrix[0].length;

  const mainArr = [];

  for (let i = 0; i < height; i++) {
    const subArr = [];
    for (let j = 0; j < length; j++) {

      let counter = 0;

      if (matrix[i][j - 1]) {
        counter++;
      }
      if (matrix[i][j + 1]) {
        counter++;
      }

      if (i > 0) {
        if (matrix[i - 1][j - 1]) {
          counter++;
        }
        if (matrix[i - 1][j]) {
          counter++;
        }
        if (matrix[i - 1][j + 1]) {
          counter++;
        }
      }

      if (i < height - 1) {
        if (matrix[i + 1][j - 1]) {
          counter++;
        }
        if (matrix[i + 1][j]) {
          counter++;
        }
        if (matrix[i + 1][j + 1]) {
          counter++;
        }
      }
      subArr.push(counter);
    }
    mainArr.push(subArr);
  }
  return mainArr;
}

solution();
