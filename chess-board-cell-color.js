function solution(cell1, cell2) {
  const evenIndexLetters = ['A', 'C', 'E', 'G'];
  let cell1Color = '';
  let cell2Color = '';

  if (evenIndexLetters.indexOf(cell1[0]) !== -1) {
    if (cell1[1] % 2 !== 0) {
      cell1Color = 'dark';
    } else {
      cell1Color = 'light';
    }
  } else {
    if (cell1[1] % 2 !== 0) {
      cell1Color = 'light';
    } else {
      cell1Color = 'dark';
    }
  }

  if (evenIndexLetters.indexOf(cell2[0]) !== -1) {
    if (cell2[1] % 2 !== 0) {
      cell2Color = 'dark';
    } else {
      cell2Color = 'light';
    }
  } else {
    if (cell2[1] % 2 !== 0) {
      cell2Color = 'light';
    } else {
      cell2Color = 'dark';
    }
  }

  if (cell1Color === cell2Color) {
    return true;
  } else {
    return false;
  }
}

solution();
