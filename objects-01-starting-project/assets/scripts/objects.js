const titleName = document.getElementById("title");
const keyExtraName = document.getElementById("extra-name");
const valueExtraName = document.getElementById("extra-value");
const addMovieBtn = document.getElementById("add-movie-btn");
const searchInput = document.getElementById("filter-title");
const searchBtn = document.getElementById("search-btn");
const moviesDatabase = [];

function searchHandler() {
  const searchText = searchInput.value;
  if (searchText.trim() === "") {
    renderList(moviesDatabase);
    return;
  }
  searchInput.value = "";
  const filteredArr = moviesDatabase.filter((el) => {
    return el.info.title.indexOf(searchText) !== -1;
  });
  renderList(filteredArr);
}

function clearFields() {
  titleName.value = "";
  keyExtraName.value = "";
  valueExtraName.value = "";
}

function checkInput(title, key, val) {
  if (title.trim() === "" || key.trim === "" || val.trim() === "") {
    alert("Missing information");
    return false;
  } else {
    return true;
  }
}

function collectData() {
  const name = titleName.value;
  const key = keyExtraName.value;
  const val = valueExtraName.value;

  if (checkInput(name, key, val)) {
    const obj = {
      info: {
        title: name,
        [key]: val,
      },
      id: Math.random(),
    };
    clearFields();
    return obj;
  } else {
    return false;
  }
}

function addToDatabase() {
  const entry = collectData();
  if (entry) {
    moviesDatabase.push(entry);
  }
}

function renderList(movies) {
  const movList = document.getElementById("movie-list");
  if (movies.length) {
    movList.classList.add("visible");
  } else {
    movList.classList.remove("visible");
  }
  movList.innerHTML = "";
  movies.forEach((el) => {
    const liNode = document.createElement("li");
    let text = el.info.title + " - ";
    for (key in el.info) {
      if (key === "title") {
        continue;
      }
      text = text + `${key}: ${el.info[key]}`;
    }
    liNode.textContent = text;
    movList.append(liNode);
  });
}

function addBtnHandler() {
  console.log(this);
  addToDatabase();
  renderList(moviesDatabase);
}

addMovieBtn.addEventListener("click", addBtnHandler);
searchBtn.addEventListener("click", searchHandler);
