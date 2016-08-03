 var prompt = require('prompt-sync')();

var n = Number(prompt('Entra un nuemro'));
console.log(n);
if (n % 2 === 0) {
  console.log("par");
} else {
  console.log("impar");
}
//var x = Number(prompt('What do you want as your first number?'));
//var y = Number(prompt('What do you want as your second number?'));
//console.log(x + y);

// ... now you do the same for the other operators! (difference, multiplication, division, modulus)
