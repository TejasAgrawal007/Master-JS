const promiseOne = new Promise(function (resolve, reject) {
  // Do Async task
  // DB call, cryptography, networkCall

  setTimeout(() => {
    console.log("Async Task is Complate");
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Complate");
});

new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("Async Task 2 Complate");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promise 2 Complate");
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({
      username: "Tejas",
      email: "tejas@gmail.com",
    });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "Tejas", password: "1234" });
    } else {
      reject("SomeThing went Wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })

  .then((username) => {
    console.log(username);
  })

  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("Finally is either resolve or rjected!"));
