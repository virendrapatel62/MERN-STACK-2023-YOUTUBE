// const studentProto = {
//   getName: function () {
//     console.log(this);
//   },
// };

// const student = {
//   name: "virendra",
//   age: 24,
//   __proto__: studentProto,
// };

// const student2 = {
//   name: "ankit",
//   age: 23,
//   __proto__: studentProto,
// };

// student.getName();
// student2.getName();

// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.getName = function () {
//   console.log(this);
// };

// const student = new Student("V", 24);
// const student2 = new Student("H", 23);

// student.getName();
// student2.getName();

// class Student {
//   name;
//   age;
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getName() {
//     console.log(this);
//   }
// }

// const student = new Student("V", 24);
// student.getName();
// const student2 = new Student("S", 23);
// student2.getName();

class Human {
  name;
  age;
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  walk() {
    console.log(`${this.name} is walking... 🚶🏼‍♂️`);
  }
}
class Student extends Human {
  schoolName;
  constructor(name, age, schoolName) {
    super(name, age);
    this.schoolName = schoolName;
  }

  printMe() {
    console.log(this);
  }
}

const harsh = new Student("Harsh", 23, "MKHHS");
harsh.walk();
harsh.printMe();
