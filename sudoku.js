function solution(grid) {

  for (let row = 0; row < grid.length; row++) {
    if (validRow(grid, row) === false) {
      return false;
    }
  }

  for (let col = 0; col < grid.length; col++) {
    if (validCol(grid, col) === false) {
      return false;
    }
  }

  for (let row = 0; row < grid.length; row += 3) {
    for (let col = 0; col < grid.length; col += 3) {
      if (validBox(grid, row, col) === false) {
        return false;
      }
    }
  }

  return true;
}

function validRow(grid, row) {
  const checkList = [];
  for (let j = 0; j < grid.length; j++) {
    if (checkList.includes(grid[row][j])) {
      return false;
    } else {
      checkList.push(grid[row][j]);
    }
  }
  return true;
}

function validCol(grid, col) {
  const checkList = [];
  for (let k = 0; k < grid.length; k++) {
    if (checkList.includes(grid[k][col])) {
      return false;
    } else {
      checkList.push(grid[k][col]);
    }
  }
  return true;
}

function validBox(grid, startRow, startCol) {
  const checkList = [];
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      const boxVal = grid[startRow + row][startCol + col];
      if (checkList.includes(boxVal)) {
        return false;
      } else {
        checkList.push(boxVal);
      }
    }
  }
  return true;
}

solution();
