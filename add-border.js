function solution(picture) {
  const asteriskArr = [];
  let asteriskStr = '';
  if (picture === null) {
    return false;
  }
  for (let i = 0; i < picture[0].length + 2; i++) {
    asteriskStr += '*';
  }
  asteriskArr.push(asteriskStr);
  for (let j = 0; j < picture.length; j++) {
    let newStr = '*' + picture[j];
    newStr = newStr + '*';
    asteriskArr.push(newStr);
  }
  asteriskArr.push(asteriskStr);
  return asteriskArr;
}

solution();
