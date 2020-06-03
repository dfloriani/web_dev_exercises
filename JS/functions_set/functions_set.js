function isEven(number) {
  // return true if even and false otherwise
  return number % 2 === 0;
}

function factorial(number) {
  // factorial 4! is 4 * 3 * 2 * 1, 0! is 1
  var result = 1;
  for (var i = 2; i <= number; i++) {
    result *= i;
  }
  return result;
}

function kebabToSneak(str) {
  // replace - with _
  var newStr = str.replace(/-/g , "_");
  return newStr;
}
