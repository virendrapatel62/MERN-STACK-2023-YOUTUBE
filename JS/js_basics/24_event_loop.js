function sayHello() {
  console.log("Hello");
}

function sum(x, y) {
  return x + y;
}

sayHello();

let n = 0;

setTimeout(() => {
  console.log("Hello after 0 second");
}, 0);
Promise.resolve(0).then(() => console.log("Hello"));

console.log(sum(1, 20));
