let one = 10;
let two = 4;
let count = 10;
// let result = one ** two;
// let result = one % two;
// one /= two;
// console.log(one >= count);

let hasStatus = "status";
let hasBackground = "";
let isOpen = "open";
// console.log(hasStatus || hasBackground || isOpen);
// console.log(isOpen || (hasBackground && hasStatus));

// task 2
let height = 15;
let width = 20;
if (height < width) {
  console.log(width);
} else {
  console.log(height);
}
// task 4
key = true;
documents = true;
pen = true;
apple = false;
orange = true;

console.log((apple || orange) && documents, key, pen);
//task 5
let number = prompt("number");
console.log(number);
if (number % 5 === 0) {
  console.log("Fiz");
} else if (number % 3 === 0) {
  console.log("Buz");
} else if (number % 15 === 0) {
  console.log("FizBuz");
}

// task 3
let task3 = 1;
while (task3 < 20) {
  task3++;
  if (task3 % 3 === 0) {
    console.log(task3);
  }
}
