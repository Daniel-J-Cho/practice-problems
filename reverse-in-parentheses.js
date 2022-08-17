function getOpenAndCloseParen(inputString) {
  let openParen = null;
  let closeParen = null;
  const arr = inputString.split('');

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === '(') {
      openParen = i;
    }
    if (arr[i] === ')') {
      closeParen = i;
      break;
    }
  }
  if (openParen === null || closeParen === null) {
    return null;
  }
  return { openParen, closeParen };
}

function reverseParenStr(openParen, closeParen, inputString) {
  const startingStr = inputString.substring(0, openParen);
  const parenStr = inputString.substring(openParen + 1, closeParen);
  const endStr = inputString.substring(closeParen + 1, inputString.length);

  return startingStr + reverse(parenStr) + endStr;
}

function reverse(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function solution(inputString) {
  let indexes = getOpenAndCloseParen(inputString);

  while (indexes) {
    const { openParen, closeParen } = indexes;
    const newStr = reverseParenStr(openParen, closeParen, inputString);

    inputString = newStr;
    indexes = getOpenAndCloseParen(inputString);
  }

  return inputString;
}

solution();
