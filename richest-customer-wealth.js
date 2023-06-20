var maximumWealth = function (accounts) {
  let top = 0;

  for (let i = 0; i < accounts.length; i++) {
    let indexSum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      indexSum += accounts[i][j];
    }

    if (indexSum > top) {
      top = indexSum;
    }
  }
  return top;
};

maximumWealth();
