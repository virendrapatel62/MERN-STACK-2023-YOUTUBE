const student = {
  name: "John",
  age: 20,
  gender: "male",
  school: "UCLA",
  grade: 90,
  address: {
    city: "San Francisco",
    state: "CA",
    zip: 94100,
  },
};

const {
  name: username,
  address: { city: cityName },
} = student;

console.log(username, cityName);
// const name = student.name;
// const age = student.age;
// const gender = student.gender;
// const school = student.school;
// const grade = student.grade;
// const address = student.address;

console.clear();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, second, third, , , , , eight, , ten] = numbers;

console.log(eight, ten);
// const first = numbers[0];
// const second = numbers[1];
// const third = numbers[2];
// const fourth = numbers[3];
// const fifth = numbers[4];
// const fifth = numbers[7];

console.clear();

const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const [one, ...number] = numbers2;

console.log(number);

const product = {
  price: 100,
  quantity: 10,
  discount: 0.2,
};

const { price, ...otherProperties } = product;

console.log(otherProperties);

// console.clear();

function createProduct({ price, quantity, discount }) {
  console.log(price, discount, quantity);
}

createProduct(product);
