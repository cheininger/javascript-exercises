const sumAll = function (firstNumber, secondNumber) {
  if (typeof firstNumber != "number" || typeof secondNumber != "number") {
    return "ERROR";
  } else if (firstNumber < 0 || secondNumber < 0) {
    return "ERROR";
  } else {
    let sum = 0;
    let smallerNumber = 0;
    let largeNumber = 0;

    if (firstNumber > secondNumber) {
      smallerNumber = secondNumber;
      largeNumber = firstNumber;
    } else if (firstNumber < secondNumber) {
      smallerNumber = firstNumber;
      largeNumber = secondNumber;
    }

    while (smallerNumber <= largeNumber) {
      sum += smallerNumber;
      smallerNumber++;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;
