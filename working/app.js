const button = document.querySelector("button");
const li1 = document.querySelector("#frist");
const li2 = document.querySelector("#second");
const li3 = document.querySelector("#third");
const ul = document.querySelector("ul");
const div = document.querySelector("div");

let x = 0;
const itm = [li1, li2, li3];
const opt = ["opt1", "opt2", "opt3"];

let caller = clickHandler.bind(this, itm, opt);

button.addEventListener("click", caller);

function clickHandler(itemArr, optArr) {
  itemArr[x % 3].className = optArr[0];
  itemArr[(x + 1) % 3].className = optArr[1];
  itemArr[(x + 2) % 3].className = optArr[2];
  ++x;
}

// const people = [
//   { id: 6, name: "Thomas H.Carson", born: 1956 },
//   { id: 4, name: "Alan Turning", born: 1912 },
//   { id: 1, name: "Donald Kuth", born: 1938 },
//   { id: 7, name: "Peter Norvig", born: 1956 },
//   { id: 10, name: "Randal Braynt", born: 1952 },
//   { id: 2, name: "Vin Cerf", born: 1943 },
//   { id: 8, name: "Jon Bently", born: 1953 },
//   { id: 9, name: "Grady Booch", born: 1955 },
//   { id: 5, name: "John Von Neuman", born: 1903 },
//   { id: 3, name: "Hal Aspelson", born: 1947 },
// ];

// let m = people.findIndex((el, idx, prs) => {
//   return el.name === "Jon Bently";
// });

// function reducer(previous, current) {
//   previous[current.id] = current;
//   return previous;
// }

// const wholeArrIntoObj = people.reduce(reducer, {});
// console.log(wholeArrIntoObj);

// const arr = [
//   [3, 2, 5, 1],
//   [6, 2, 4, 8, 3, 4],
//   [2, 5],
//   [3, 5, 2, 5],
//   [3],
//   [3, 6, 7, 5, 3, 5],
// ];

// let intial = {
//   shortest: null,
//   longest: [],
// };

// function reducer(previous, current) {
//   shortValue = previous.shortest ? previous.shortest.length : Number.MAX_VALUE;
//   return {
//     shortest: shortValue < current.length ? previous.shortest : current,
//     longest:
//       previous.longest.length > current.length ? previous.longest : current,
//   };
// }

// let y = arr.reduce(reducer, intial);

// console.log(y);

// console.log(arr[2].includes(5));

// let arr = [3, 5, 6, 7];
// let newarr = [];

// arr.forEach((ele, idx, numbers) => {
//   newarr.push({ idx: idx, value: ele });
// });

// console.log(newarr);

// function father(fn) {
//   return function (...args) {
//     return fn(...args);
//   };
// }

// function son(a, b) {
//   return a + b;
// }

// let sum = father(son)(3, 5);
// console.log(sum);

// let s = "mohammed;299;ok;88";

// let y = s.split(";").map((el, idx, list) => {
//   if (isNaN(el)) {
//     return el;
//   } else {
//     return +el;
//   }
// });

// console.log(y);

// let myArr = ["mhmd", "amer", "mody", "rady"];
// const [fna, lna, so] = myArr;
// console.log(so);

// const mySet = new Set([1, 2, 3, 4, 5]);

// mySet.add("hi");
// console.log(mySet.values());
// mySet.delete("hi");
// console.log(mySet.values());

// for (const entry of mySet.entries()) {
//   console.log(entry);
// }

// const person1 = { name: "mohammed", age: 31 };
// const person2 = { name: "yousef", age: 30 };
// const person3 = { name: "mody", age: 30 };

// const myMap = new Map([
//   [person1, ["football", "swimming"]],
//   [person2, ["computer games", "social media"]],
// ]);

// myMap.set(person3, ["dominos", "chess"]);
// console.log(myMap);

// for (const [key, value] of myMap.entries()) {
//   console.log(key);
//   console.log(value);
// }

// for (const key of myMap.keys()) console.log(key);

// for (const value of myMap.values()) console.log(value);
// myMap.clear();
// console.log(myMap.get(person1));
