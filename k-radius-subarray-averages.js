var getAverages = function (nums, k) {
  const prefix = [nums[0]];

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  const n = nums.length;
  const avgArr = [];
  let avg = 0;
  const numOfIndexes = k * 2 + 1;

  for (let j = 0; j < n; j++) {
    if (j - k < 0 || j + k > n - 1) {
      avgArr.push(-1);
    } else {
      avg = (prefix[j + k] - prefix[j - k] + nums[j - k]) / numOfIndexes;
      avgArr.push(Math.floor(avg));
    }
  }

  return avgArr;
};

getAverages();
