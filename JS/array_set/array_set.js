function printReverse(arr) {
  for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i]);
  }
}

function isUniform(arr) {
  var first = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] !== first) {
      return false;
    }
  }
  return true;
}
// not using forEach here because it would only exit the 1st function on false return

function sumArray(arr) {
  var sum = 0;
  arr.forEach((item) => {
    sum += item;
  });
  return sum;
}

function max(arr) {
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

printReverse([1,2,3,4]); // 4,3,2,1
isUniform([1,1,1,1]); // true
sumArray([1,2,3]); // 6
max([1,2,3]); // 3
