function solution(startTag) {
  const regex = /[^<\s>]+/;
  const tag = startTag.match(regex);
  return `</${tag[0]}>`;
}

solution();
