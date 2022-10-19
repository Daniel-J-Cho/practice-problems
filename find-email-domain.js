function solution(address) {
  const domainName = address.split('@');

  return domainName[domainName.length - 1];
}

solution();
