const ulposts = document.querySelector(".posts");
const postItem = document.getElementById("single-post");
const submitBtn = document.querySelector("form button");
const fetchBtn = document.querySelector("#available-posts button");
const titleInp = document.getElementById("title");
const textInp = document.getElementById("content");

function checkInputValue() {
  if (!titleInp.value || !textInp.value) {
    return false;
  } else {
    return true;
  }
}

function clearinput() {
  titleInp.value = "";
  textInp.value = "";
}

function sendHttpReq(method, url, data) {
  const promise = new Promise((resolve, reject) => {
    const req = new XMLHttpRequest();
    req.open(method, url);
    req.responseType = "json";
    req.onload = function () {
      if (req.status >= 200 && req.status < 300) {
        resolve(req.response);
      } else {
        reject(new Error(`error happend in server side status: ${req.status}`));
      }
    };
    req.onerror = function () {
      reject(new Error("error happend in your machine check your network"));
    };
    req.send(JSON.stringify(data));
  });
  return promise;
}

function sendHTTPFetch(url, method, post) {
  return fetch(url, {
    method: method,
    body: JSON.stringify(post),
  });
}

sendHTTPFetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`status code is ${response.status}`);
    }
  })
  .then((response) => {
    console.log(response);
    for (const post of response) {
      const element = document.importNode(postItem.content, true);
      element.querySelector("h2").innerText = post.title.toUpperCase();
      element.querySelector("p").innerText = post.body;
      element.querySelector("li").id = post.id;
      ulposts.append(element);
    }
  })
  .catch((error) => console.log("error.message"));

async function fetchPosts(method, url) {
  try {
    const response = await sendHTTPFetch(url).then((response) =>
      response.json()
    );
    console.log(response);
    for (const post of response) {
      const element = document.importNode(postItem.content, true);
      element.querySelector("h2").innerText = post.title.toUpperCase();
      element.querySelector("p").innerText = post.body;
      element.querySelector("li").id = post.id;
      ulposts.append(element);
    }
  } catch (error) {
    console.log(error.message);
  }
}

// fetchPosts("GET", "https://jsonplaceholder.typicode.com/posts");
async function uploadPosts() {
  const obj = {
    title: titleInp.value,
    body: textInp.value,
    userId: Math.random(),
  };
  try {
    const response = await sendHTTPFetch(
      "https://jsonplaceholder.typicode.com/posts",
      "POST",
      obj
    );
    console.log(response);
  } catch (error) {
    console.log(error.message);
  }
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  if (checkInputValue()) {
    uploadPosts();
    clearinput();
  } else {
    alert("some fields are empty");
  }
});

ulposts.addEventListener("click", (event) => {
  if (event.target.tagName === "BUTTON") {
    const node = event.target.closest("li");
    const id = node.id;
    console.log(id);
    sendHTTPFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, "DELETE");
    ulposts.removeChild(node);
  }
});
