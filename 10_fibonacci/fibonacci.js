const fibonacci = function (nthNumber) {
  if (nthNumber < 0) return "OOPS";
  if (nthNumber === 0) return 0;

  let firstNum = 1;
  let secondNum = 0;

  for (i = 2; i <= nthNumber; i++) {
    let current = firstNum + secondNum;
    secondNum = firstNum;
    firstNum = current;
  }

  return firstNum;
};

// Do not edit below this line
module.exports = fibonacci;
