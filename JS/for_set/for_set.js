console.log("Print all numbers between -10 and 19, inclusive")
for (var i = -10; i < 20; i++) {
  console.log(i);
}

console.log("Print all even numbers between 10 and 40, inclusive")
for (var i = 10; i < 41; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

console.log("Print all even odd numbers between 300 and 333")
for (var i = 301; i < 333; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

console.log("Print all divisible by 5 and 3 [5...50]")
for (var i = 6; i < 50; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(i);
  }
}
