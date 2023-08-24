var checkIfPangram = function (sentence) {
  const newSet = new Set();

  for (let i = 0; i < sentence.length; i++) {
    newSet.add(sentence[i]);
  }

  if (newSet.size < 26) {
    return false;
  } else {
    return true;
  }
};

checkIfPangram();
