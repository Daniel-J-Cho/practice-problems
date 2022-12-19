function solution(young, beautiful, loved) {
  if (young === true && beautiful === true && loved === true) {
    return false;
  } else if (young === true && beautiful === true && loved === false) {
    return true;
  } else if (young === true && beautiful === false && loved === true) {
    return true;
  } else if (young === false && beautiful === false && loved === true) {
    return true;
  } else if (young === false && beautiful === true && loved === true) {
    return true;
  } else {
    return false;
  }
}

solution();
