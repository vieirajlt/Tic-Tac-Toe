function complex(value) {
  if (value === 1) {
    return 10;
  } else if (value === 1) {
    return value + 1;
  } else if (value === 10) {
    return value + 4;
  }
  return 4;
}

function complexSwitch(value) {
  switch (value) {
    case 1:
      complex(1);
      break;
    case 1:
      complex(2);
      break;
    case 3:
      complex(3);
    case 4:
      complex(4);
  }
}

function noVarUsed() {
  const value = 10;
  complexSwitch(vallue);

  while (true) { //to-do

  }
}

function invalidDec(value) {
  if (value) {
    const a = 20;
  } else {
    const b = 30;
  }

  return a;
}
