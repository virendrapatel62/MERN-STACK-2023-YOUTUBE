console.log("Functions JS");

function doubleIt(number) {
  // 22
  return number * 2;
}

function calculateSum(a, b) {
  return a + b;
}

var sum = calculateSum(10, 12);

console.log("sum :", sum);

var double = doubleIt(sum);

console.log("double", double);

function sayHello(name) {
  console.log("Hello " + name);
}

// sayHello("Virendra");
// sayHello("Sandeep");
// sayHello("Harsh");

console.log("Hello World.", "23", 345, 4, 456, 457);

console.clear();

console.error("This is Error");

console.log("Hello");

// alert("This IS Message");
var answer = confirm("Are you sure");

if (answer) {
  alert("Yes You Cliced on Ok");
} else {
  alert(" You Cliced on Cancel");
}
