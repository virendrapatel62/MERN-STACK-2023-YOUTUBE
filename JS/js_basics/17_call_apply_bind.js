console.log("call Apply bind");

function getName(x, y) {
  console.log(this);
  console.log("Name is : ", this.username, x, y);
}

const student = {
  username: "virendra",
};

// getName.call(student, 10, 20);
// getName.apply(student, [10, 20]);
// it return new fucnction

getName = getName.bind(student);

getName(10, 20);
