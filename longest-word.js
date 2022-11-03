function solution(text) {
  const regexText = text.match(/[a-zA-Z0-9]+/gi);

  let longest = '';

  for (let i = 0; i < regexText.length; i++) {
    if (regexText[i].length > longest.length) {
      longest = regexText[i];
    }
  }

  return longest;
}

solution();
