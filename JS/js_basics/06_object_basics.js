console.log("Basics Of Objects");

var age = 23;
var is18 = true;
var name = "virendra";

var student = {
  name: "Virendra",
  age: 24,
  is18: true,

  getDescription: function description() {
    return "my name is " + this.name;
  },
};

console.log(student.age);
console.log(student.name);
console.log(student.is18);
console.log(student.getDescription());
