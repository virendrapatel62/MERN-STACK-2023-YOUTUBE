function getUsers(callback) {
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
    callback(null, users);
  }, 2000);
}

function getRepositoriesByUser(user, callback) {
  setTimeout(() => {
    const repos = [
      {
        id: 1,
        name: "React",
      },
    ];

    callback(null, repos);
  }, 2000);
}
function getBranchesByRepoId(id, callback) {
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
    callback(null, branches);
  }, 2000);
}

getUsers((error, users) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Done Users!", users);
    getRepositoriesByUser(users[0], (error, repos) => {
      if (error) {
        //
      } else {
        console.log("Done Repos!", repos);
        getBranchesByRepoId(repos[0].id, (error, branches) => {
          if (error) {
          } else {
            console.log("Done Branches!", branches);
          }
        });
      }
    });
  }
});
