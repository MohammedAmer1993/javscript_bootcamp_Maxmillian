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
