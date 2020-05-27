console.log("Print all numbers between -10 and 19, inclusive")
var count = -10

while(count < 20) {
  console.log(count);
  count++;
}

console.log("Print all even numbers between 10 and 40, inclusive")
var num = 10

while (num < 41) {
  if (num % 2 == 0) {
    console.log(num);
  }
  num++;
}

console.log("Print all even odd numbers between 300 and 333")
var num = 301

while (num < 333) {
  if (num % 2 != 0) {
    console.log(num);
  }
  num++;
}

console.log("Print all divisible by 5 and 3 [5...50]")
var num = 6

while (num < 50) {
  if (num % 3 == 0 && num % 5 == 0) {
    console.log(num);
  }
  num++;
}
