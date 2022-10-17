function solution(inputString) {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
    'u', 'v', 'w', 'x', 'y', 'z'];

  const chars = Array(alphabet.length).fill(0);

  for (const char of inputString) {
    chars[alphabet.indexOf(char)]++;
  }

  for (let i = 0; i < chars.length; i++) {
    if (chars[i + 1] > chars[i]) {
      return false;
    }
  }

  return true;
}

solution();
