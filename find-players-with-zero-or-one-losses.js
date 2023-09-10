var findWinners = function (matches) {
  const counts = new Map();
  const ans = [];
  const never = [];
  const once = [];

  for (let i = 0; i < matches.length; i++) {
    counts.set(matches[i][0], 0);
  }

  for (let j = 0; j < matches.length; j++) {
    counts.set(matches[j][1], (counts.get(matches[j][1]) || 0) + 1);
  }

  for (const [key, val] of counts) {
    if (val === 0) {
      never.push(key);
    } else if (val === 1) {
      once.push(key);
    }
  }

  never.sort((a, b) => a - b);
  once.sort((a, b) => a - b);

  ans.push(never);
  ans.push(once);

  return ans;

};

findWinners();
