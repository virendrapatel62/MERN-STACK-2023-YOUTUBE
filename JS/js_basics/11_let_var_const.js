console.log("Let - Var - Const");

/**
 * ReAssignment
 * var ,let  => ✅
 * const => ❌
 */

// var age = 24;
// const userName = "Virendra";
// let is18 = true;

// console.log(age, userName, is18);

// age = 90;
// is18 = false;

// userName = "harsh";
// console.log(age, userName, is18);

/**
 * Hoisting
 * var => ✅
 * let and const => ❌
 */

function sayHello() {
  //   console.log(age);
  //   console.log(userName);
  //   console.log(is18);
  var age = 24;
  const userName = "Virendra";
  let is18 = true;
}
sayHello();

/**
 * Fucntional Scope => var
 * Localscope => let and const
 */
function task() {
  console.log("This is task");
  console.log(a);

  if (true) {
    var a = 90;
    let b = 91;
    const c = 92;
    console.log("Inside IF Statemente");
    console.log(b, c);
  }

  //   console.log(b, c); ❌
  console.log(a);
}

// task();

function doIT() {
  let i = 10;
  if (true) {
    let i = 19;
    console.log(i);
  }
  console.log(i);
}

// doIT();

var userName = 90;
console.log(window.userName);
