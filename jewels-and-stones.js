var numJewelsInStones = function (jewels, stones) {
  const jewelsMap = new Map();
  let ans = 0;

  for (let i = 0; i < jewels.length; i++) {
    jewelsMap.set(jewels[i], (jewelsMap.get(jewels[i]) || 0) + 1);
  }

  for (let j = 0; j < stones.length; j++) {
    if (jewelsMap.has(stones[j])) {
      ans++;
    }
  }

  return ans;
};

numJewelsInStones();
