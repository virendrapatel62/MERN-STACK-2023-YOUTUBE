var userName = "virendra";

console.log(userName);
// userName = `this
// is
//  strig created
//  using
//   backtick`;

userName = "My name is Virendra";
console.log(userName);

//  0123456789
// "My name is Virendra";

console.log(userName.charAt(0));
console.log(userName.charAt(2));
console.log(userName.charAt(3));
console.log(userName.charAt(10));

userName = "My name is Virendra";

console.log(userName.charCodeAt(4));
console.log(userName.concat(", My age is 18"));
console.log(
  userName.concat(", my age is 18", " and my brother's name is Mohan")
);

userName = "My name is Virendra";

console.log(userName.endsWith("Virendra"));
console.log(userName.includes("nameeee"));
console.log(userName.indexOf("M"));
console.log(userName.indexOf("a"));
console.log(userName.lastIndexOf("a"));
console.log(userName.length);

userName = "My name is Virendra";

for (char of userName) {
  console.log(char);
}
for (let i = 0; i < userName.length; i++) {
  console.log(userName.charAt(i));
}

for (index in userName) {
  console.log(index);
}

userName = "My name is Virendra";

console.log(userName.split(" "));
