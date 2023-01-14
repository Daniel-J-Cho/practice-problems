function solution(a, b, n) {
  let sum = 0;
  let product = 1;

  while (n > 0) {
    product = a * b;
    sum += product;
    n--;
    a++;
    b++;
  }

  return sum;
}

solution();
