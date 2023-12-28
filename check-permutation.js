function checkPerm(str1, str2) {
  const mapOne = new Map();
  const mapTwo = new Map();

  if (str1.length !== str2.length) {
    return false;
  }

  for (let i = 0; i < str1.length; i++) {
    if (!(mapOne.has(str1[i]))) {
      mapOne.set(str1[i], 1);
    } else {
      mapOne.set(str1[i], mapOne.get(str1[i]) + 1);
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (!(mapTwo.has(str2[j]))) {
      mapTwo.set(str2[j], 1);
    } else {
      mapTwo.set(str2[j], mapTwo.get(str2[j]) + 1);
    }
  }

  for (const [key] of mapOne) {
    if (mapOne.get(key) !== mapTwo.get(key)) {
      return false;
    }
  }

  return true;
}

checkPerm();
