function solution(inputString) {

  return inputString.split('').map(element => {
    if (element === 'z') {
      return 'a';
    }
    return String.fromCharCode(element.charCodeAt() + 1);
  }).join('');
}

solution();
