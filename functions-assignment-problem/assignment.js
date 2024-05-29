const sayHello = (name) => {
  console.log("Hi " + name);
};

const sayHello2 = (greeting, name) => {
  console.log(greeting + " " + name);
};

const sayHello3 = (name) => "hi " + name;

const sayHello4 = () => console.log("hi mohammed");

const sayHello5 = (name, greeting = "Hi ") => {
  console.log(greeting + name);
};

function checkinput(cb, ...strings) {
  let isEmpty = false;
  for (el of strings) {
    if (!el) {
      isEmpty = true;
      break;
    }
  }
  if (!isEmpty) {
    cb();
  }
}

function checkArg() {
  console.log("all input is valid string");
}
sayHello("Max");
checkinput(checkArg, "mohammed", "amer", "is", "here");
