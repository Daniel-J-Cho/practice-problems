var twoSum = function (nums, target) {
  const pair = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        pair.push(i);
        pair.push(j);
      }
    }
  }
  return pair;
};

twoSum();
