//Cоздайте три переменные

var x = 6;
var y = 15;
var z = 4;

x += y - x++ * z;
console.log(x);
z = --x - y * 5;
console.log(z);
y/= x + 5%z;
console.log(y);
z = x++ + y * 5;
console.log(z);
x = y - x++ * z;
console.log(x);
