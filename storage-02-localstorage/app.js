import "core-js";
const storeBtn = document.getElementById("store-btn");
const getBtn = document.getElementById("retrieve-btn");

storeBtn.addEventListener("click", () => {
  document.cookie = "id=33";
  document.cookie = "id=11111";
  document.cookie = `data=${JSON.stringify({ name: "amer", age: 31 })}`;
});

getBtn.addEventListener("click", () => {
  console.dir(document);
  console.log(document.cookie);
});
