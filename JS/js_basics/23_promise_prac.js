function getUsers() {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      const users = [
        {
          id: 1,
          name: "John Doe",
        },
        {
          id: 2,
          name: "Jane ",
        },
      ];
      resolve(users);
    }, 2000);
  });
}
function getRepositoriesByUser(user) {
  return new Promise(function (resolve, reject) {
    if (!user) {
      reject(new Error("no user"));
    }
    setTimeout(() => {
      const repos = [
        {
          id: 1,
          name: "React",
        },
      ];

      resolve(repos);
    }, 2000);
  });
}
function getBranchesByRepoId(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject(new Error("No id"));
    }
    setTimeout(() => {
      const branches = [
        {
          id: 1,
          name: "master",
        },
        {
          id: 2,
          name: "develop",
        },
        {
          id: 3,
          name: "release",
        },
      ];
      resolve(branches);
    }, 2000);
  });
}
async function task1() {
  const users = await getUsers();
  const repos = await getRepositoriesByUser(users[0]);
  const branches = await getBranchesByRepoId(repos[0].id);
  console.log(users, branches, repos);
}
task1();

// getUsers()
//   .then((users) => {
//     console.log("Done Users!", users);
//     return getRepositoriesByUser(users[0]);
//   })
//   .then((resos) => {
//     console.log("Done Rositories", resos);
//     return getBranchesByRepoId();
//   })
//   .then((branches) => {
//     console.log("Done Branches", branches);
//   })
//   .catch((error) => {
//     console.log("Error", error.message);
//   });

// getUsers((error, users) => {
//   if (error) {
//     console.error(error);
//   } else {
//     console.log("Done Users!", users);
//     getRepositoriesByUser(users[0], (error, repos) => {
//       if (error) {
//         //
//       } else {
//         console.log("Done Repos!", repos);
//         getBranchesByRepoId(repos[0].id, (error, branches) => {
//           if (error) {
//           } else {
//             console.log("Done Branches!", branches);
//           }
//         });
//       }
//     });
//   }
// });

function fail() {
  return new Promise((resolve, reject) => {
    reject(new Error("Failed to"));
  });
}
function pass() {
  return new Promise((resolve, reject) => {
    resolve(10);
  });
}

async function task() {
  try {
    const result = await pass();
    console.log(result);

    await fail();
  } catch (error) {
    console.log(error);
  }
}

task();
// fail()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// pass()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const promises = [fail(), pass(), pass(), fail()];

// Promise.race(promises).then((response) => {
//   console.log(response);
// });

// promises[0].then((r) => console.log(r));
// promises[1].then((r) => console.log(r));
// promises[2].then((r) => console.log(r));
// promises[3].then((r) => console.log(r));

// Promise.all(promises)
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((err) => console.log(err));
