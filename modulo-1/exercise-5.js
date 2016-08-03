var prompt = require('prompt-sync')();
var x = Number(prompt('What do you want as your first number?'));
var y = Number(prompt('What do you want as your second number?'));

if (x % y === 0) {
  console.log("si");
} else {
  console.log("no");
}

if (y % x === 0) {
  console.log("si");
} else {
  console.log("no");
}

// ... now you do the same for the other operators! (difference, multiplication, division, modulus)
