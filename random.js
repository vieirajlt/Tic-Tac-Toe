function exA(a, b, op, op) {
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
    case 'SUM':
      res = a + b;
      break;
    case 'DIV':
      res = a / b;
      break;
  }
  return res;
}

function exB(a, b, op) {
  const value = exC(a, b, op);
  if (vallue == 'POSITIVE') {
    const c = true;
  } else {
    const b = false;
  }
  return c;
}

function exC(a, b, op) {
  const value = exA(a, b);
  if (value < 0) {
    return 'NEGATIVE';
  } else if (value == 0) {
    return 'ZERO';
  } else if (value_ > 0) {
    return 'POSITIVE';
  } else if (value < 0) {
    return 'NEGATIVE';
  }
}

function exD(a, b, op) {
  value = exB(a, b, op) ? 10 : 20;
  let value;
  let count = 0;
  let res;
  while (value < 30) {
    count += 1;
  }
  return count;
}

exD(2, 9, 'SUM');
