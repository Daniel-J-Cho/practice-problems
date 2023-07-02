var middleNode = function (head) {

  let count = 0;

  let curr = head;

  while (curr !== null) {
    curr = curr.next;
    count++;
  }

  curr = head;

  if (count % 2 === 0) {
    for (let i = 0; i < (count / 2); i++) {
      curr = curr.next;
    }
  } else {
    for (let i = 0; i < (count / 2) - 1; i++) {
      curr = curr.next;
    }
  }

  return curr;

};

middleNode();
