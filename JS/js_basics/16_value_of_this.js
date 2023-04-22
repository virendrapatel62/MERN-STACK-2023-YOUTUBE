// function hello() {
//   console.log(`hello function `, this);
// }

// const a1 = () => {
//   console.log("arrow ", this);
// };

// hello();
// a1();

function Student() {
  console.log(this);

  function fun() {
    console.log(this);
  }

  fun();

  const a = () => {
    console.log(this);

    const b = () => {
      console.log(this);
    };
    b();
  };

  a();
}

new Student();

console.clear();

function demo2() {
  console.log(this);
  const student = {
    name: "virendta",
    age: 24,
    getValueOfThis: () => {
      console.log(this);
      const arrowInsideStudent = () => {
        console.log(this);
      };
      arrowInsideStudent();
    },
  };
  student.getValueOfThis();
}

demo2();
