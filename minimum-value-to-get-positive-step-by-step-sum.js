var minStartValue = function (nums) {

  const prefix = [nums[0]];
  let min = 0;

  for (let i = 1; i < nums.length; i++) {
    prefix.push(nums[i] + prefix[prefix.length - 1]);
  }

  for (let j = 0; j < prefix.length; j++) {
    min = Math.min(min, prefix[j]);
  }

  return 1 - min;

};

minStartValue();
