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

function exC(a, b, op) {
  const value = exA(a, b, op);
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

function exD(a, b) {
  const ops = ["SUM", "DIF", "PROD", "MUL"];
  let max = -1;
  for (let i = 0; i < ops.length; i+= 1) {
    const opRes = exA(a,b, ops[i])
    if (opRes > max)
      max = opRes
  }
  return max
}

exD(2, 4);
