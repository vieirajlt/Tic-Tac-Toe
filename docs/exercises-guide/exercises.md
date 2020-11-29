# Exercises

Just to give you some context, sometimes we make some not very smart mistakes (we are only human…). Tools like SonarLint are a valuable help in these situations. SonarLint statically analyzes code to quickly find issues.

For all the exercises proposed you should take some time to analyze the code WITHOUT using the tool. As an exceptionally talented programmer, you should be able to catch some of these issues without using it. 

Then you can view the code on _VS Code_ and _SonarLint_ will outline the issues for you and give tips for fixing them! As easy as that! 

You should take into account that, in some cases, fixing one issue reveals another set of brand new issues for you to enjoy! Fun right?

For additional information on the issues go [here](https://rules.sonarsource.com/javascript).

## Exercise 1

file: _ex1.js_

solution: _sol1.js_ (don't do it, any doubts ask us first!!)

The main goal of this exercise is for you to understand how the tool works and the different issues it identifies. In order to do that, four simple functions are presented to you. You should start fixing them in order. 

Have fun :)

### Exercise 1.a. 

In this function, it is expected that you fix 3 (+1 bonus) different issues. 

```JavaScript

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

```

### Exercise 1.b. 

In this function, it is expected that you fix 4 different issues. 

```JavaScript

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

```

### Exercise 1.c. 

In this function, it is expected that you fix 5 different issues. 

```JavaScript
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
```

### Exercise 1.d. 

In this function, it is expected that you fix 2 different issues. 

```JavaScript
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
```

## Exercise 2

file: _ex2.js_

solution: _sol2.js_ (nooo!)


This exercise presents a more “real” application of this tool. It is a very simple program that implements the tic tac toe game. As in the previous exercise, we advise you to fix the issues in order.

We are expecting you to encounter around 15/16 issues (it will depend on your resolution).

Have fuuuun! When you FINISH the exercise you can play the game in the index.html file ;)

```JavaScript
const statusDisplay = document.querySelector('.game--status');

const gameActive = true;
let currentPlayer = 'X';
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => 'Game ended in a draw!';
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

statusDisplay.innerHTML = currentPlayerTurn();

const winningConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function handleCellPlayed(clickedCell, clickedCellIndex) {
  gameState[clickedCellIndex] = currentPlayer;
  clickedCell.innerHTML = currentPlayer;
}

function handlePlayerChange() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  nextPlayer = currentPlayer;
  statusDisplay.innerHTML = currentPlayerTurn();
}

function handleResultValidation() {
  let roundWon = false;

  for (let i = 0; i <= 7; i++) {
    const winCondition = winningConditions[i];
    const a = gameState[winCondition[0]];
    let b = gameState[winCondition[0]];
    b = gameState[winCondition[1]];
    const c = gameState[winCondition[2]];
    const val = false;


    if (a ==='' || b === '' || c === '') {
      continue;
    }
    if (a === b && b === c) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    statusDisplay.innerHTML = winningMessage();
    gameActive = false;
    return;
  }

  const roundDraw = !gameState.includes('');
  if (roundDraw) {
    statusDisplay.innerHTML = drawMessage();
    gameActive = false;
    return;
  }

  handlePlayerChange();
}

function handleCellClick(clickedCellEvent) {
  const clickedCell = clickedCellEvent.target;
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  if (gameState[clickedCellIndex] != '' || !gameActive) {
    return;
  }

  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResultValidation();
}

function handleRestartGame() {
  gameActive = true;
  currentPlayer = 'X';
  gameState = ['', '', '', '', '', '', '', '', ''];
  statusDisplay.innerHTML = currentPlayerTurn();
  document.querySelectorAll('.cell').forEach((cell) => cell.innerHTML = '');
}

function setGameActive(value, oldValue) {
  gameActive = value;
}

document.querySelectorAll('.cell').forEach((cell) => cell.addEventListener('click', handleCellClick));
document.querySelector('.game--restart').addEventListener('click', handleRestartGame);

```

### Christmas challenge
_(From Advent of code 2019)_

*--- PART 01 ---*

The Elves quickly load you into a spacecraft and prepare to launch.

At the first Go / No Go poll, every Elf is Go until the Fuel Counter-Upper. They haven't determined the amount of fuel required yet.

Fuel required to launch a given module is based on its mass. Specifically, to find the fuel required for a module, take its mass, divide by three, round down, and subtract 2.

For example:
* For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2.
* For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.
* For a mass of 1969, the fuel required is 654.
* For a mass of 100756, the fuel required is 33583.

The Fuel Counter-Upper needs to know the total fuel requirement. To find it, individually calculate the fuel needed for the mass of each module (your puzzle input), then add together all the fuel values.

What is the sum of the fuel requirements for all of the modules on your spacecraft?
(the puzzle input is in the repository)

*--- PART 02 ---*

During the second Go / No Go poll, the Elf in charge of the Rocket Equation Double-Checker stops the launch sequence. Apparently, you forgot to include additional fuel for the fuel you just added.

Fuel itself requires fuel just like a module - take its mass, divide by three, round down, and subtract 2. However, that fuel also requires fuel, and that fuel requires fuel, and so on. Any mass that would require negative fuel should instead be treated as if it requires zero fuel; the remaining mass, if any, is instead handled by wishing really hard, which has no mass and is outside the scope of this calculation.

So, for each module mass, calculate its fuel and add it to the total. Then, treat the fuel amount you just calculated as the input mass and repeat the process, continuing until a fuel requirement is zero or negative. For example:

* A module of mass 14 requires 2 fuel. This fuel requires no further fuel (2 divided by 3 and rounded down is 0, which would call for a negative fuel), so the total fuel required is still just 2.
* At first, a module of mass 1969 requires 654 fuel. Then, this fuel requires 216 more fuel (654 / 3 - 2). 216 then requires 70 more fuel, which requires 21 fuel, which requires 5 fuel, which requires no further fuel. So, the total fuel required for a module of mass 1969 is 654 + 216 + 70 + 21 + 5 = 966.
* The fuel required by a module of mass 100756 and its fuel is: 33583 + 11192 + 3728 + 1240 + 411 + 135 + 43 + 12 + 2 = 50346.

What is the sum of the fuel requirements for all of the modules on your spacecraft when also taking into account the mass of the added fuel? (Calculate the fuel requirements for each module separately, then add them all up at the end.)

*Solution:*
- Part 01: 3342946
- Part 02: 5011553

### Day of Programmer Challenge

Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer (the 256th day of the year) during a year in the inclusive range from 1700 to 2700.

From 1700 to 1917, Russia's official calendar was the Julian calendar; since 1919 they used the Gregorian calendar system. The transition from the Julian to Gregorian calendar system occurred in 1918, when the next day after January 31st was February 14th. This means that in 1918, February 14th was the 32nd day of the year in Russia.

In both calendar systems, February is the only month with a variable amount of days; it has 29 days during a leap year, and 28 days during all other years. In the Julian calendar, leap years are divisible by 4; in the Gregorian calendar, leap years are either of the following:
* Divisible by 400
* Divisible by 4 and not divisile by 100

Given a year, `y`, find the date of the 256th day of that year according to the official Russian calendar during that year. Then print it in the format `dd.mm.yyyy`, where `dd` is the two-digit day, `mm` is the two-digit month, and `yyyy` is `y`.

For example, the given  *_year_* = 1984. 1984 is divisible by 4, so it is a leap year. The 256th day of a leap year after 1918 is September 12, so the answer is `12.09.1980`.

*Function descrition*

Create a function to calculate the day of the programmer. It should return a string representing the date of the 256th day of the year given.

`dayOfProgrammer` has the following parameter(s):
* year: an integer

_Input Format_: A single input denoting year y

_Constraints_: y between 1700 and 2700

_Output Format_: Print the full date of Day of the Programmer during year `y` in the format `dd.mm.yyyy`, where `dd` is the two-digit day, `mm` is the two-digit month, and `yyyy` is `y`.

*Sample Input 0*

```2017```


*Sample Output 0*

```13.09.2017```

*Explanation 0*

In the year  y = 2017, January has 31 days, February has 28 days, March has 31 days, April has 30 days, May has 31 days, June has 30 days, July has 31 days, and August has 31 days. When we sum the total number of days in the first eight months, we get 31 + 28 + 31 + 30 + 31 + 30 + 31 + 31 = 243. Day of the Programmer is the 256th day, so then calculate 256 - 243 = 13 to determine that it falls on day 13 of the 9th month (September). We then print the full date in the specified format, which is 13.09.2017.

*Sample Input 1*

```2016```


*Sample Output 1*

```12.09.2016```

*Explanation 1*

Year  y = 2016 is a leap year, so February has 29 days but all the other months have the same number of days as in 2017. When we sum the total number of days in the first eight months, we get 31 + 29 + 31 + 30 + 31 + 30 + 31 + 31 = 244. Day of the Programmer is the 256th day, so then calculate 256 - 244 = 12 to determine that it falls on day 12 of the 9th month (September). We then print the full date in the specified format, which is 12.09.2016.

*Sample Input 2*

```2800```


*Sample Output 2*

```12.09.1800```

*Explanation 2*

Since 1800 is leap year as per Julian calendar. Day lies on 12 September.


