function palindromePermute(str) {
  let oddAllow = 0;
  let newStr = '';
  const lowercase = str.toLowerCase();
  const map = new Map();

  for (let i = 0; i < lowercase.length; i++) {
    if (lowercase[i] === ' ') {
      continue;
    } else {
      newStr += lowercase[i];
    }
  }

  for (let i = 0; i < newStr.length; i++) {
    if (!(map.has(newStr[i]))) {
      map.set(newStr[i], 1);
    } else {
      map.set(newStr[i], map.get(newStr[i]) + 1);
    }
  }

  if (newStr.length % 2 === 0) {
    for (const val of map.values()) {
      if (val % 2 !== 0) {
        return false;
      }
    }

    return true;
  } else {
    for (const val of map.values()) {
      if (val % 2 !== 0) {
        oddAllow++;
        if (oddAllow > 1) {
          return false;
        }
      }
    }

    return true;
  }
}

palindromePermute();
