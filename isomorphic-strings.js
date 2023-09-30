var isIsomorphic = function (s, t) {
  const map = new Map();
  const set = new Set();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!set.has(t[i])) {
      set.add(t[i]);
      map.set(s[i], t[i]);
    } else {
      continue;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] !== map.get(s[j])) {
      return false;
    }
  }

  return true;
};

isIsomorphic();
