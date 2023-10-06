const add = function (firstNum, secondNum) {
  return firstNum + secondNum;
};

const subtract = function (firstNum, secondNum) {
  return firstNum - secondNum;
};

const sum = function (array) {
  return array.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = function (array) {
  return array.reduce((product, currentValue) => product * currentValue, 1);
};

const power = function (baseNumber, powerNumber) {
  return baseNumber ** powerNumber;
};

const factorial = function (number) {
  if (number === 0) {
    return 1;
  }
  return number * factorial(number - 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
