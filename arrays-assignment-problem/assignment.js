const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filterArray = myArray.filter((num) => num > 5);
const mapArray = myArray.map((num) => ({ num: num }));
const reduceArray = myArray.reduce((prev, curr) => prev * curr, 1);

console.log(filterArray);
console.log(mapArray);
console.log(reduceArray);

const maxNumber = myArray.reduce((prev, curr) => {
  return curr > prev ? curr : prev;
}, Number.MIN_SAFE_INTEGER);

const [max, min] = myArray.reduce(
  (prev, curr) => {
    if (curr > prev[0]) {
      prev[0] = curr;
    }
    if (curr < prev[1]) {
      prev[1] = curr;
    }
    return prev;
  },
  [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER]
);

console.log(max);
console.log(min);

const mySet = new Set([1, 2, 3, 4, 5, 6]);
console.log(mySet);
