
// return the op between two POSITIVE numbers 
// if the numbers are not >= 0, returns -1
// if op is not SUM, SUB, PROD or DIV, returns -2
function exA(a, b, op) {
  let res;
  if (a < 0 || b < 0)
    return - 1;
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
      res = -2
      break;
  }
  return res;
}


// returns INVALID OP if the result of the op between 2 nr is < 0
// returns ZERO if the result of the op between 2 nr is == 0
// returns POSITIVE if the result of the op between 2 nr is > 0
function exB(a, b, op) {
  const value = exA(a, b, op);
  if (value < 0) {
    return 'INVALID OP';
  } else if (value === 0) {
    return 'ZERO';
  } else  {
    return 'POSITIVE';
  } 
}


// returns true if the result of the op between two positive numbers is >= 0, false otherwise
// yes, there are better ways to do this, just do the exercise ;)
function exC(a, b, op) {
  const value = exB(a, b, op);
  const c = (value !== 'INAVLID OP') 
  return c;
}


// returns the max value of all operations applied to 2 numbers
function exD(a, b) {
  const ops = ["SUB", "PROD", "DIV"];
  let max = exA(a,b, "SUM");
  for (let i = 0; i < 3; i+=1) {
    const opRes = exA(a,b, ops[i])
    if (opRes > max)
      max = opRes
  }
  return max
}


exD(2, 4);
