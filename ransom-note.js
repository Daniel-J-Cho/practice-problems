var canConstruct = function (ransomNote, magazine) {
  const ransomMap = new Map();
  const magazineMap = new Map();

  for (let i = 0; i < ransomNote.length; i++) {
    if (ransomMap.has(ransomNote[i])) {
      ransomMap.set(ransomNote[i], ransomMap.get(ransomNote[i]) + 1);
    } else {
      ransomMap.set(ransomNote[i], 1);
    }
  }

  for (let j = 0; j < magazine.length; j++) {
    if (magazineMap.has(magazine[j])) {
      magazineMap.set(magazine[j], magazineMap.get(magazine[j]) + 1);
    } else {
      magazineMap.set(magazine[j], 1);
    }
  }

  let testValue;

  for (const [key, value] of ransomMap) {
    testValue = magazineMap.get(key);
    if (!magazineMap.has(key)) {
      return false;
    }
    if (value > testValue) {
      return false;
    }
  }

  return true;
};

canConstruct();
