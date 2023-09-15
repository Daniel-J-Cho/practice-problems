var largestUniqueNumber = function (nums) {
  const count = new Map();
  let max = -1;

  for (let i = 0; i < nums.length; i++) {
    count.set(nums[i], (count.get(nums[i]) || 0) + 1);
  }

  for (const [key, val] of count) {
    if (key > max && val === 1) {
      max = key;
    }
  }

  return max;
};

largestUniqueNumber();
