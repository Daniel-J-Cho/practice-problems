function solution(s1, s2) {
  let common = 0;
  const s1Arr = s1.split('');
  const s2Arr = s2.split('');

  for (let i = 0; i < s1Arr.length; i++) {
    for (let j = 0; j < s2Arr.length; j++) {
      if (s1Arr[i] === s2Arr[j]) {
        common++;
        const index = s2Arr.indexOf(s2Arr[j]);
        if (index > -1) {
          s2Arr.splice(index, 1);
        }
        break;
      } else {
        continue;
      }
    }
  }

  return common;
}

solution();
