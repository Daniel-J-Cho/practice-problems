function solution(names) {
  const namesArr = [];

  names.forEach(element => {
    if (!namesArr.includes(element)) {
      namesArr.push(element);
    } else {
      for (let i = 1; i < names.length; i++) {
        const newName = `${element}(${i})`;
        if (!namesArr.includes(newName)) {
          namesArr.push(newName);
          break;
        }
      }
    }
  });

  return namesArr;
}

solution();
