const palindromes = function (string) {
  const editedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");

  return editedString.split("").reverse().join("") == editedString;
};

// Do not edit below this line
module.exports = palindromes;
