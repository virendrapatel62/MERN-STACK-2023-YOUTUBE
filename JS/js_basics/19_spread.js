// const student = {
//   name: "John Doe",
//   age: 30,
//   address: "123 Main St",
// };

// const studentCopy = {
//   ...student,
// };

// // console.log(studentCopy, student);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const numbersCopy = [...numbers];

// console.log(numbersCopy, numbers);

const student = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "San",
    state: "CA",
  },
};

// const studentCopy = JSON.parse(JSON.stringify(student));
const studentCopy = structuredClone(student);

console.log(student.address === studentCopy.address);

student.address.city = "JBP";

student.age = 25;

console.log(student);
console.log(studentCopy);

console.clear();

function sum(x, ...numbers) {
  console.log(x, numbers);
  return numbers.reduce((a, b) => a + b, 0);
}
const result = sum(10, 10, 20, 90, 90, 90, 443);
