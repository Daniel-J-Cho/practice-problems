var findMaxConsecutiveOnes = function (nums) {
  let count = 0;
  let highest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      count = 0;
    }
    if (count > highest) {
      highest = count;
    }
  }

  return highest;
};

findMaxConsecutiveOnes();
