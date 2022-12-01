function solution(n) {
  if (n >= 0) {
    const integer = Math.floor(n / 60);
    const convertDecimal = Math.floor(n % 60);

    const str = integer.toString() + convertDecimal.toString();

    return str.split('').map(Number).reduce((a, b) => a + b);
  }
}
solution();
