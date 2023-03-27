console.log("More On Functions");

// function sum(x, y) {
//   return x + y;
// }

// const answer = sum(12, 23);

// console.log(answer);

// function Person(name) {
//   this.name = name;
// }
// const person = new Person("Virendra");
// console.log(person);

function doSomething(task) {
  console.log("Starting The Task");
  task();
  console.log("Ending The task");
}

function printMessage() {
  console.log("Hello World..");
}

function sendEmail() {
  console.log("Send Email");
}

doSomething(printMessage);
doSomething(sendEmail);

console.clear();

// function isDivisibleBy2(number) {
//   return number % 2 == 0;
// }
// function isDivisibleBy3(number) {
//   return number % 3 == 0;
// }

// console.log(isDivisibleBy2(10));
// console.log(isDivisibleBy2(11));
// console.log(isDivisibleBy3(11));
// console.log(isDivisibleBy3(10));

// function isDivisibleBy(number, by) {
//   return number % by == 0;
// }
// function isGreterThen(number, by) {
//   return number > by;
// }

// console.log(isDivisibleBy(10, 2));
// console.log(isDivisibleBy(10, 3));
// console.log(isGreterThen(10, 120));
// console.log(isGreterThen(23, 2));

function printIf(number, predicate, successCallback) {
  const flag = predicate(number);

  console.log("Flag", flag);
  if (flag) {
    console.log("hurerrreeeee");

    if (successCallback) {
      successCallback();
    }
  } else {
  }
}

printIf(1000, function (number) {
  return number > 100;
});

printIf(1000, function (number) {
  return number % 2 == 0;
});
printIf(1000, function (number) {
  return number % 10 == 0;
});
printIf(1000, function (number) {
  return number < 900;
});

printIf(
  "Virendra",
  (name) => name.includes("VireDDD"),
  function () {
    console.log("Virendra includes Vire");
  }
);

console.clear();

function outerFunction() {
  // return [];
  // return {};
  // return 90;
  // return true;
  console.log("from outer Function");
  function innerFunction() {
    console.log("Hello from Inner Function");
  }
  return innerFunction;
}

// Higher Order Function => outerFunction

const fun = outerFunction();
fun();

console.clear();

// let count = 0;
// function inc() {
//   count++;
// }

// function dec() {
//   count--;
// }

// inc();
// inc();
// inc();

// count = 90;

// console.log(count);
// dec();
// dec();

// console.log(count);

function counter() {
  let count = 0;
  function inc() {
    count++;
  }
  function dec() {
    count--;
  }
  function print() {
    console.log(count);
  }
  return {
    inc: inc,
    dec: dec,
    print: print,
  };
}

console.log("COunter 1");
const myCounter = counter();

myCounter.inc();
myCounter.inc();
myCounter.inc();
myCounter.print();
myCounter.dec();

myCounter.print();

console.log("COunter 2");
const myCounter2 = counter();

myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.inc();
myCounter2.print();
myCounter2.dec();

myCounter2.print();
