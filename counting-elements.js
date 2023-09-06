var countElements = function (arr) {
  const set = new Set(arr);
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (set.has(arr[j] + 1)) {
      count++;
    }
  }

  return count;
};

countElements();
