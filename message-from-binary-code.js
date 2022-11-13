function solution(code) {
  const arr = [];

  for (let i = 0; i < code.length; i += 8) {
    const str = code.substring(i, i + 8);
    arr.push(parseInt(str, 2));
  }

  return String.fromCharCode(...arr);
}

solution();
