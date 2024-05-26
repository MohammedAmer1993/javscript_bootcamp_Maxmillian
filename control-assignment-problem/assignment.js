const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const anotherRandom = Math.random();

if (randomNumber > 0.7) {
  alert("this number is bigger than 0.7");
}

let myArray = [3, 4, 9, 1];

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

for (const i of myArray) {
  console.log(i);
}

for (let i = myArray.length - 1; i >= 0; i--) {
  console.log(myArray[i]);
}

if (
  (randomNumber > 0.7 && anotherRandom > 0.7) ||
  randomNumber <= 0.2 ||
  anotherRandom <= 0.2
) {
  alert("condition met");
}
