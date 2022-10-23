function solution(st) {
  let i = 0;
  let newSt;

  while (st !== st.split('').reverse().join('')) {
    newSt = st.split('');
    newSt.splice(st.length - i, 0, st[i]);
    st = newSt.join('');
    i++;
  }

  return st;
}

solution();
