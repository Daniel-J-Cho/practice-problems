var reverseWords = function (s) {
  const splitStr = s.split(' ');
  const newStr = [];

  for (let i = 0; i < splitStr.length; i++) {
    const reversed = [];
    const word = splitStr[i].split('');
    let l = splitStr[i].length - 1;
    while (l >= 0) {
      reversed.push(word[l]);
      l--;
    }
    const newWord = reversed.join('');
    newStr.push(newWord);
  }

  return newStr.join(' ');
};

reverseWords();
