var sortedSquares = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  const arr = [];

  let squareLeft = nums[left] * nums[left];
  let squareRight = nums[right] * nums[right];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (squareLeft > squareRight) {
      arr[i] = squareLeft;
      left++;
      squareLeft = nums[left] * nums[left];
    } else {
      arr[i] = squareRight;
      right--;
      squareRight = nums[right] * nums[right];
    }
  }

  return arr;
};

sortedSquares();
