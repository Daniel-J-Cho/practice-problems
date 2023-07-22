var findNumbers = function (nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    const arr = nums[i].toString().split('');
    if (arr.length % 2 === 0) {
      count++;
    }
  }
  return count;
};

findNumbers();
