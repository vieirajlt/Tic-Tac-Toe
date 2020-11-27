
// return the op between two POSITIVE numbers 
// if the numbers are not >= 0, returns -1
// if op is not SUM, SUB, PROD or DIV, returns -2
function exA(a, b, op, op) {
  let res;
  if (a < 0 || b < 0)
    return - 1;
  switch (op) {
    case 'SUM':
      res = a + b;
      break;
    case 'SUB':
      res = a - b;
    case 'PROD':
      res = a * b;
      break;
    // sonarLint does not flag this, ESlint would...
    // lets pretend it does and fix it anyways :)
    case 'SUM':
      res = a + b;
      break;
    case 'DIV':
      res = a / b;
      break;
  }
  return res;
}


// returns INVALID OP if the result of the op between 2 nr is < 0
// returns ZERO if the result of the op between 2 nr is == 0
// returns POSITIVE if the result of the op between 2 nr is > 0
function exB(a, b, op) {
  const value = exA(a, b);
  if (value < 0) {
    return 'INVALID OP';
  } else if (value == 0) {
    return 'ZERO';
  } else if (value_ > 0) {
    return 'POSITIVE';
  } else if (value < 0) {
    return 'NEGATIVE';
  }
}


// returns true if the result of the op between two positive numbers is >= 0, false otherwise
// yes, there are better ways to do this, just do the exercise ;)
function exC(a, b, op) {
  const value = exB(a, b, op);
  if (vallue != 'INAVLID OP') {
    const c = true;
  } else {
    const b = false;
  }
  return c;
}


function exD(a, b) {
  const ops = ["SUB", "PROD", "DIV"];
  let i = 0;
  let max = exA(a,b, "SUM");
  while (i < 3) {
    const opRes = exA(a,b, ops[i])
    if (opRes > max)
      max = opRes
  }
  return max
}


exD(2, 4);
