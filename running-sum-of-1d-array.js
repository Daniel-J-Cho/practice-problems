const runningSum = function (nums) {
  let countSum = 0;
  const runSum = nums.map(num => (countSum += num));

  return runSum;

};

runningSum();
