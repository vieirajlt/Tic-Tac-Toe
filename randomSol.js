function exA(a, b, op) {
  let res;
  switch (op) {
    case 'SUM':
      res = a + b;
      break;
    case 'SUB':
      res = a - b;
      break;
    case 'PROD':
      res = a * b;
      break;
    case 'DIV':
      res = a / b;
      break;
    default:
      res = -1;
      break;
  }
  return res;
}

function exC(a, b) {
  const value = exA(a, b);
  if (value < 0) {
    return 'NEGATIVE';
  } else if (value === 0) {
    return 'ZERO';
  } else {
    return 'POSITIVE';
  }
}

function exB(a, b, op) {
  let c;
  const value = exC(a, b, op);
  if (value === 'POSITIVE') {
    c = true;
  } else {
    c = false;
  }
  return c;
}

// 1 1
function exD(a, b, op) {
  let value = exB(a, b, op) ? 10 : 20;
  let count = 0;
  while (value < 30) {
    count += 1;
    value += 1;
  }

  return count;
}

exD(2, 4, 'SUM');
