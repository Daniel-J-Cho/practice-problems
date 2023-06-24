var fizzBuzz = function (n) {
  const arr = [];
  let pos = 1;

  while (pos <= n) {
    if (pos % 3 === 0 && pos % 5 === 0) {
      arr.push('FizzBuzz');
    } else if (pos % 3 === 0) {
      arr.push('Fizz');
    } else if (pos % 5 === 0) {
      arr.push('Buzz');
    } else {
      arr.push(pos.toString());
    }
    pos++;
  }

  return arr;
};

fizzBuzz();
