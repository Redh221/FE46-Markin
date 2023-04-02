// task 1
function getSumn(par) {
  let count = 0;
  let result = 0;
  while (count <= par) {
    result += count;
    count++;
  }
  console.log(result);
}
getSumn(100);

// task 2

function credit(vak) {
  let result = 0;
  result = vak * 5 * 0.17;
  console.log(result);
}

credit(100000);
