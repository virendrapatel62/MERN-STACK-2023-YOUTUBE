console.log("Arrow Functions");

// function sayHello() {
//   console.log("Say Hello Function");
// }

// const sayHello = () => {
//   console.log("Say Hello Function");
// };

// sayHello();

// function sum(x, y) {
//   console.log(x + y);
// }

// const sum = (x, y) => {
//   console.log(x + y);
// };
// sum(10, 20);

// function sum(x, y) {
//   return x + y;
// }

// const sum = (x, y) => {
//   return x + y;
// };

// console.log(sum(10, 23));

// function sayHello(callback) {
//   console.log("Before callback");
//   callback();
//   console.log("after callback");
// }

// sayHello(() => {
//   console.log("This is callback");
// });

// const getSum = () => {
//   return (x, y) => {
//     return x + y;
//   };
// };

// const sum = getSum();

// const result = sum(10, 10);

// console.log(result);

//  Arrow function vs normal function

// const student = {
//   name: "virendra",
//   age: 24,

//   //   getStudentInfo: function (x, y) {
//   //     console.log(arguments);
//   //   },
//   getStudentInfo: () => {
//     console.log(arguments);
//   },
// };

// student.getStudentInfo(23, 34);

// function Student() {
//   console.log(this);
//   const arrow = () => {
//     console.log(this);
//   };
//   arrow();
// }
// new Student();
// const arrow = () => {
//   console.log(this);
// };

// arrow();
