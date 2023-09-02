var missingNumber = function (nums) {
  const set = new Set();

  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }

  for (let j = 0; j <= nums.length; j++) {
    if (!set.has(j)) {
      return j;
    }
  }
};

missingNumber();
