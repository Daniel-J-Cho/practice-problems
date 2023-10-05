var sumOfUnique = function (nums) {
  const map = new Map();
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], nums[i]);
    } else if (map.has(nums[i])) {
      map.set(nums[i], nums[i] - nums[i]);
    }
  }

  for (const [key] of map) {
    sum += map.get(key);
  }

  return sum;
};

sumOfUnique();
