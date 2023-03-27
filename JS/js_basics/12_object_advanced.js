console.log("Object Adavnced..");
/**
const student = {
  name: "Virendra",
  age: 24,
  learnJavaScript: function () {
    console.log(this.name.concat(" ", "is Learning JS"));
  },
};
const student2 = {
  name: "Harsh",
  age: 24,
  learnJavaScript: function () {
    console.log(this.name.concat(" ", "is Learning JS"));
  },
};

 */

/**
function createStudent(name, age) {
  const student = {
    name: name,
    age: age,
    learnJavaScript: function () {
      console.log(this.name.concat(" ", "is Learning JS"));
    },
  };

  return student;
}

const student = createStudent("Virnedra", 24);
const student2 = createStudent("Harsh", 25);
const student3 = createStudent("Sandeep", 28);

student.learnJavaScript();
student2.learnJavaScript();
student3.learnJavaScript();

const name1 = "Virendra";
const name2 = "Sandeep";

console.log(name1.charAt === name2.charAt);
console.log(student.learnJavaScript === student2.learnJavaScript);
 */

function Student(name, age) {
  this.name = name;
  this.age = age;
}

Student.prototype.learnJavascript = function () {
  console.log(this.name, this.age);
};

const student = new Student("Virendra", 24);
const student2 = new Student("Harsh", 24);

console.log(student.learnJavascript == student2.learnJavascript);
