//task 1
const colorss = ["red", "green", "blue"];
console.log(colorss.length);

// task 2
const animals = ["monkey", "dog", "cat"];
const item = animals[animals.length - 1];
console.log(item);

//task 3
const numbers = [5, 43, 63, 23, 90];
let cons = numbers.length;
for (let i = 0; i < cons; i++) {
  numbers.pop();
}
console.log(numbers);

// second way
const numberSec = [5, 43, 63, 23, 90];
let mir = numberSec.length;
for (k = 0; k < mir; k++) {
  numberSec.shift();
}
console.log(numberSec);

// task 4

const students = ["Polina", "Dasha", "Masha"];
students.pop();
students.push("Borya");

students.shift();
students.unshift("Andrey");

console.log(students);

// task 5
const cats = ["Gachito", "Tom", "Batman"];

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}

for (let number of cats) {
  console.log(number);
}

cats.forEach(function (elem) {
  console.log(elem);
});
