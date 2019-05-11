let comments = [];
let button = document.querySelector("#Btn");
let table = document.querySelector(".comments-table");

document.getElementById("Btn").addEventListener("click", submit);

function displayComments(comments) {
  comments.sort((a, b) => b.timestamp - a.timestamp);
  for (let i = 0; i < comments.length; i++) {
    let published = document.createElement("div");
    let image = document.createElement("div");
    let body = document.createElement("div");
    let nameElement = document.createElement("div");
    let commentElement = document.createElement("div");
    let dateElement = document.createElement("div");
    let imageElement = document.createElement("div");

    nameElement.innerText = comments[i].name;
    let dateStamp = new Date(comments[i].timestamp);
    dateStamp =
      dateStamp.getDate() +
      "/" +
      (dateStamp.getMonth() + 1) +
      "/" +
      dateStamp.getFullYear();
    dateElement.innerText = dateStamp;
    commentElement.innerText = comments[i].comment;

    published.classList.add("comments__published");
    nameElement.classList.add("username");
    commentElement.classList.add("input");
    dateElement.classList.add("date");
    imageElement.classList.add("comments--icon");
    image.classList.add("comments__img");
    body.classList.add("comments__body");

    body.appendChild(nameElement);
    body.appendChild(dateElement);
    body.appendChild(commentElement);
    image.appendChild(imageElement);
    published.appendChild(image);
    published.appendChild(body);
    table.appendChild(published);
  }
}

// Create comment with form
function createComment(name, comment) {
  axios
    .post("https://project-1-api.herokuapp.com/comments?api_key=authkey", {
      name: name,
      comment: comment
    })
    .then(response => {
      comments.push(response.data);
      document.getElementById("myForm").reset();
      displayComments(comments);
    })
    .catch(error => {
      console.log("404 error");
    });
}

function clearComments() {
  document.querySelector(".comments-table").innerHTML = "";
}

function submit(event) {
  event.preventDefault(); // prevent the webpage from reloading
  let inputName = document.querySelector("#Name").value;
  let inputComment = document.querySelector("#Comment").value;
  if (inputName !== "" && inputComment !== "") {
    clearComments();
    createComment(inputName, inputComment);
    // transformComment();
  } else {
    alert("The comment and name inputs are empty");
  }
}

// Authentification
const authentificationKey = axios.get(
  "https://project-1-api.herokuapp.com/register"
);

authentificationKey.then(function(response) {
  const authkey = response.data.api_key;
});

//Get array of comments from API
let comArr = axios.get(
  "https://project-1-api.herokuapp.com/comments?api_key=authkey"
);
comArr.then(function(response) {
  comments = response.data; //API answers with comments Data
  displayComments(comments);
});
