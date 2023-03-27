/**

const moreCommonProps = {
  getName: function () {
    console.log(this);
  },
};

const commonProps = {
  batch: "Js Batch",
  schoolName: "ABC",
  __proto__: moreCommonProps,
};

const student = {
  name: "Virnedra",
  __proto__: commonProps,
};
const student2 = {
  name: "harsh",
  __proto__: commonProps,
};

const lastProto = student.__proto__.__proto__.__proto__;

console.log(string.__proto__.__proto__);

 */

function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.getName = function () {
  console.log(this);
};
Student.prototype.setName = function () {
  console.log(this);
};

const s1 = new Student("Virnedra", 23);
const s2 = new Student("HArsh", 23);

s1.getName();
s1.setName();

s2.getName();
