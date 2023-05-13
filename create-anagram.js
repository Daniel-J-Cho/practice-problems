function solution(s, t) {
  let count = 0;
  const set = new Set();
  const charObj = {};
  const charObj2 = {};

  for (let i = 0; i < t.length; i++) {
    if (!set.has(t[i])) {
      set.add(t[i]);
    }
  }

  for (const item of set) {
    charObj[item] = 0;
    charObj2[item] = 0;
  }

  for (let j = 0; j < t.length; j++) {
    if (t.indexOf(t[j]) === -1) {
      continue;
    } else {
      charObj[t[j]]++;
    }
  }

  for (let k = 0; k < s.length; k++) {
    if (s.indexOf(s[k]) === -1 || !set.has(s[k])) {
      continue;
    } else {
      charObj2[s[k]]++;
    }
  }

  for (const element in charObj) {
    if ((charObj[element] - charObj2[element]) < 0) {
      continue;
    }
    count += (charObj[element] - charObj2[element]);
  }

  return count;
}

solution();
