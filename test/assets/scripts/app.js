const btn = document.querySelector("button");
const btn2 = document.getElementById("click");

function getLocation() {
  const promise = new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        resolve(data);
      },
      (error) => {
        reject(error);
      }
    );
  });
  return promise;
}

function setFrist(duration) {
  const promise = new Promise(function (resolve, reject) {
    console.log("inside frist timer");
    setTimeout(() => {
      resolve("frist timer");
    }, duration);
  });
  return promise;
}

function Handler() {
  getLocation()
    .then(
      (data) => {
        console.log(data);
        return setFrist(3000);
      },
      (error) => {
        console.log(error);
        return "got error man";
      }
    )
    .then(
      (data) => console.log(data),
      (error) => console.log(error)
    );
}

function clickHandler() {
  console.log("Hello from inside the handler");
  navigator.geolocation.getCurrentPosition(
    (data) => {
      console.log("timer went of");
      setTimeout(() => {
        console.log("we are insid e the timer now");
        setTimeout(() => {
          console.log("we are inside the sec timer");
        }, 2000);
      }, 2000);
      console.log(data);
    },
    (error) => {
      console.log(error);
    }
  );
}

function timer1() {
  const promise = new Promise(function (resolve, reject) {
    console.log("before the promise go in pending state");
    setTimeout(() => {
      reject(new Error("this is error"));
    }, 4000);
  });
  return promise;
}

function timer2() {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve("resolved code from timer 2");
    }, 2000);
  });
  return promise;
}

function Hand() {
  let timeMsg;
  timer1()
    .then(
      (resolve) => {
        timeMsg = resolve;
        return timer2();
      },
      (reject) => {
        console.log(reject);
        throw new Error("just an error");
      }
    )
    .catch((rejected) => {
      console.log("hiiiiiiiii");
      console.log(rejected, "again and again");
      return getLocation();
    })
    .then((data) => console.log(data, timeMsg));
}

function Hand2() {
  timer1()
    .then((resolved) => {
      console.log(resolved);
      return timer2();
    })
    .then((resolved) => console.log(resolved));
  timer2().then((out) => console.log(out));
}

// console.log(res);
async function Leg() {
  console.log("rudeeeeee");
  const res = await timer1();
  console.log(res);
  const res2 = await timer2();
  console.log(res2);
}
// Leg();
// console.log("does it block");
// Hand2();

Promise.allSettled([timer1(), timer2()]).then((data) => console.log(data));

btn.addEventListener("click", Hand);
btn2.addEventListener("click", Leg);
