var reverseOnlyLetters = function (s) {
  const arr = s.split('');
  let i = 0;
  let j = s.length - 1;
  const regex = /[a-zA-Z]/;

  while (i <= j) {
    if (regex.test(arr[i]) && regex.test(arr[j])) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
    if (!regex.test(arr[i]) && regex.test(arr[j])) {
      i++;
    }
    if (regex.test(arr[i]) && !regex.test(arr[j])) {
      j--;
    }
    if (!regex.test(arr[i]) && !regex.test(arr[j])) {
      i++;
      j--;
    }
  }

  return arr.join('');
};

reverseOnlyLetters();
