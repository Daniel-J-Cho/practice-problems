function solution(n) {
  const arr = Array.from(n.toString()).map(Number);
  if (arr.length % 2 === 0) {
    const half = Math.ceil(arr.length / 2);
    const firstHalf = arr.slice(0, half);
    const secondHalf = arr.slice(half);
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    for (let i = 0; i < firstHalf.length; i++) {
      sumFirstHalf += firstHalf[i];
    }
    for (let j = 0; j < secondHalf.length; j++) {
      sumSecondHalf += secondHalf[j];
    }
    if (sumFirstHalf === sumSecondHalf) {
      return true;
    }
  }
  return false;
}

solution();
