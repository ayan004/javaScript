console.log("This is tut39");

//a easy mathematical demonstration of the use of Promise
let p = new Promise((resolve, reject) => {
  let a = 1 + 4;
  if (a == 5) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

p.then((message) => {
  console.log("This is in the then " + message);
}).catch((message) => {
  console.log("This is in the then " + message);
});

//What is Promise actually => Promise is an proper way of writing callback functions. It is an actually an substitute of writing callback functions

//declaration of two common variables used by below functions
const userLeft = false;
const userWatchingCatMeme = true;

//demonstration of a callback function => watchTutorialCallback
function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "User Watching Cat Meme----------",
      message: "webDevSimplified < cat",
    });
  } else {
    callback("Thumbs up and Subscribe");
  }
}

watchTutorialCallback(
  (message) => {
    console.log("Success: " + message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);

//the above watchTutorialCallback function is rewritten using Promise
function watchTutorialPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "User Watching Cat Meme",
        message: "webDevSimplified < cat",
      });
    } else {
      resolve("Thumbs up and Subscribe");
    }
  });
}

watchTutorialPromise()
  .then((message) => {
    console.log("Success: " + message);
  })
  .catch((error) => {
    console.log(error.name + " " + error.message);
  });
