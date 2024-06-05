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

let arr = [3, 5, 6, 7];
let newarr = [];

arr.forEach((ele, idx, numbers) => {
  newarr.push({ idx: idx, value: ele });
});

console.log(newarr);
