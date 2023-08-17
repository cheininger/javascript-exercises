const reverseString = function (string) {
  let arr = Array.from(string);
  let reverseArr = arr.reverse();
  let reverseString = reverseArr.toString();
  return reverseString.replaceAll(/\,/g, "");
};

// Do not edit below this line
module.exports = reverseString;
