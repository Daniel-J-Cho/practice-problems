var deepestLeavesSum = function (root) {
  if (!root) {
    return 0;
  }

  let queue = [root];
  let sum = 0;

  while (queue.length) {
    const nodesInCurrentLevel = queue.length;
    const nextQueue = [];

    for (let i = 0; i < nodesInCurrentLevel; i++) {
      const node = queue[i];

      if (node.left) {
        nextQueue.push(node.left);
      }

      if (node.right) {
        nextQueue.push(node.right);
      }
    }

    if (!nextQueue.length) {
      for (let j = 0; j < queue.length; j++) {
        sum += queue[j].val;
      }
    }

    queue = nextQueue;
  }

  return sum;

};

deepestLeavesSum();
