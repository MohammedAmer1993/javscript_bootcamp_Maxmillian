const btn = document.getElementById("button");
const inp = document.querySelector("input");
const li1 = document.querySelector("#frist");

btn.addEventListener("click", headerHandler);

function headerHandler() {
  document.body.children.main.textContent = "finally worked";
  li1.className = "opt1";
}
