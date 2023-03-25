var numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// numbers = Array();

numbers.push(6);
numbers.push(7);
numbers.push(8);
numbers.push(9);

console.log(numbers);

numbers.pop();
numbers.pop();
numbers.pop();
numbers.pop();

console.log(numbers);

numbers.unshift(0);
console.log(numbers);
numbers.shift();
console.log(numbers);

/**
 * push => add to the end
 * pop => remove from end
 * unshift => add to the first
 * shift => remove from the first
 */

var newArray = numbers.concat([6, 7, 8, 9]);

console.log(newArray);

var emptyArray = Array(10);

emptyArray.fill(1);
console.log(emptyArray);

console.clear();

var array = [11, 22, 32, 42, 52];

for (var number of array) {
  console.log(number);
}

for (var index in array) {
  console.log(array[index]);
}

console.log(array.length);
array.push(90);

console.log(array.length);
array.push(90);

console.clear();
console.log(array.join("___"));
