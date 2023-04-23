console.log("Promise");

// const promiseOfIphone = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Iphone 15 : 😎");
//     reject(new Error("Paise nahi Hain abhi 😭"));
//   }, 2000);
// });

// promiseOfIphone
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

const getNumber1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(100);
    }, 2000);
  });
};

const getNumber2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(200);
    }, 2000);
  });
};

const getNumber3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(300);
    }, 2000);
  });
};

getNumber1()
  .then((number1) => {
    console.log(number1);
    return getNumber2();
  })
  .then((number2) => {
    console.log(number2);
    return getNumber3();
  })
  .then((number3) => {
    console.log(number3);
  });
