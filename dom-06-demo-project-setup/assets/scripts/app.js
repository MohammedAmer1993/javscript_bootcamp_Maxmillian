const addMovieBtn = document.querySelector("header button");
const divAddModal = document.getElementById("add-modal");
const divBackDrop = document.getElementById("backdrop");
const cancelBtn = document.querySelector("#add-modal .btn.btn--passive");
const addBtn = document.querySelector("#add-modal .btn.btn--success");
const inputFields = document.querySelectorAll("input");
const movList = document.getElementById("movie-list");
const midSection = document.getElementById("entry-text");
const movEntries = [];

function updateUI() {
  if (movEntries.length === 0) {
    midSection.style.display = "block";
  } else {
    midSection.style.display = "none";
  }
}

function createElemnt(title, url, rating, id) {
  const tempElement = document.createElement("li");
  tempElement.classList.add("movie-element");
  tempElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${url} alt="${title}">
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5</p>
    </div>
  `;
  tempElement.addEventListener("click", deleteNodeHandler.bind(null, id));
  return tempElement;
}
function deleteNodeHandler(id) {
  const length = movEntries.length;
  for (let i = 0; i < length; ++i) {
    if (id === movEntries[i].id) {
      movEntries.splice(i, 1);
      movList.children[i].remove();
      break;
    }
  }
}

function toggleBackDrop() {
  divBackDrop.classList.toggle("visible");
}
function toggleAddMovie() {
  divAddModal.classList.toggle("visible");
  toggleBackDrop();
  clearInputs();
}

function checkValidEntry() {
  const titleName = inputFields[0].value.trim();
  const titleURL = inputFields[1].value.trim();
  const rating = inputFields[2].value.trim();
  if (titleName === "") {
    alert("Movie name is not valid");
    return null;
  } else if (titleURL === "") {
    alert("Movie URL is not valid");
    return null;
  } else if (rating === "") {
    alert("Movie Rating is not valid");
    return null;
  } else if (+rating < 0 || +rating > 5) {
    alert("Wrong rating, the valid rating is between 0 and 5");
    return null;
  }
  return true;
}

function addEntry() {
  const titleName = inputFields[0].value.trim();
  const titleURL = inputFields[1].value.trim();
  const rating = inputFields[2].value.trim();

  const entryObj = {
    id: Math.random(),
    title: titleName,
    url: titleURL,
    rating: rating,
  };
  const newElemnt = createElemnt(titleName, titleURL, rating, entryObj.id);
  movEntries.push(entryObj);
  updateUI();
  movList.appendChild(newElemnt);
  toggleAddMovie();
}

function clearInputs() {
  for (const element of inputFields) {
    element.value = "";
  }
}
function addEntryHandler() {
  const validityState = checkValidEntry();
  if (!validityState) {
    return;
  }
  addEntry();
}

addMovieBtn.addEventListener("click", toggleAddMovie);
cancelBtn.addEventListener("click", toggleAddMovie);
divBackDrop.addEventListener("click", toggleAddMovie);
addBtn.addEventListener("click", addEntryHandler);
