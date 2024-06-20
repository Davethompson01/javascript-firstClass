let todo = [
  {
    id: 1,
    activity: "wake-up",
  },
  {
    id: 2,
    activity: "Prepare breakfast",
  },
  {
    id: 3,
    activity: " prepare for work",
  },
  {
    id: 4,
    activity: "I am at sheda",
  },
];

// let p = document.getElementById("myP")
// let array = []
let ul = document.getElementById("array-container");
let btn = document.querySelector(".submit");
function submitValue() {
  let li = document.createElement("li");
  let todo1 = document.querySelector(".input").value;

  let lastId = todo[todo.length - 3].id;
  let newTodo = {
    id: lastId + 1,
    activity: todo1,
  };
  li.textContent = todo1;
  ul.appendChild(li);
  todo.push(newTodo);

  // console.log(todo)
}

// array of objects
const navlists = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "services" },
  { name: "contact us", path: "/contact" },
];
console.log(navlists);
let navList = document.getElementById("navlist");

navlists.map((navlist) => {
  let li = document.createElement("li");
  let aaaa = document.createElement("a");
  aaaa.textContent = navlist.name;
  aaaa.href = navlist.path;
  navList.appendChild(li);
  li.appendChild(aaaa);
  navList.style.display = "flex";
  navList.style.gap = "4rem";
  aaaa.style.color = "red";
  li.style.listStyleType = "none";
});

const cards = [
  {
    img: "/photo-1716319487101-108ceed67fcb.avif",
    artist: "chris brown",
    title: "its ",
  },
  {
    img: "/premium_photo-1663858367001-89e5c92d1e0e.avif",
    artist: " brown",
    title: " a",
  },
  {
    img: "/premium_photo-1715753663745-2d21590fc8fb.avif",
    artist: "nigga brown",
    title: " man",
  },
  {
    img: "/photo-1716319487101-108ceed67fcb.avif",
    artist: "james brown",
    title: "world",
  },
];

let boxes = document.querySelector(".boxes");
cards.map((card) => {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h1 = document.createElement("h1");
  let p = document.createElement("p");

  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(p);
  boxes.appendChild(div);

  img.src = card.img;
  img.style.width = "100px";
  h1.textContent = card.artist;
  p.textContent = card.title;
});

// largest integer
function minMax(a, b) {
  return Math.max(a, b);
}
console.log(minMax(5, 9));

// odds and even numbers
for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(`${i} is an `);
  }
}

let seeMore = document.querySelector(".see-more");
let emptySpace = "";
let hidden = document.querySelector(".hidden-show");
let hide = document.querySelector(".hideAll");
seeMore.addEventListener("click", function () {
  hidden.style.display = "block";
  hide.style.display = "block";
  seeMore.style.display = "none";
});
hide.addEventListener("click", function () {
  hidden.style.display = "none";
  hide.style.display = "none";
  seeMore.style.display = "block";
});

//Create an array to store the tasks in the to-do list. Each task should have properties such as id (auto-incrementing), title, description, and completed.
let user = document.getElementById("user");
let arrayObj = [
  {
    id: 1,
    title: "Just Random",
    description: "the last soul",
  },
];

let addNewTodo = document.querySelector(".button");
addNewTodo.addEventListener("click", function add() {
  let overAllTitle = document.querySelector(".title-submit").value;
  let overAllDES = document.querySelector(".des-submit").value;
  let myP = document.querySelector(".myPTag");
  myP.style.color = "red";
  if (overAllDES === "") {
    return (myP.textContent = "title can't be empty");
  } else if (overAllTitle === "") {
    return (myP.textContent = "description can't be empty");
  }
  addTask(overAllDES, overAllTitle);
});

function addTask(title, description) {
  let displayText = document.createElement("p");
  let div = document.createElement("div");
  let editBtn = document.createElement("button");
  editBtn.textContent = "edit";
  let h1 = document.createElement("h1");
  let p = document.createElement("p");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  let save1 = document.createElement("button");
  save1.textContent = "save";
  save1.style.display = "none";
  let save2 = document.createElement("button");
  save2.textContent = "save";
  save2.style.display = "none";

  let text1 = document.createElement("input");
  text1.type = "text";
  text1.style.display = "none";
  let text2 = document.createElement("input");
  text2.type = "text";
  text2.placeholder = "enter for description";
  text2.style.display = "none";
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  h1.textContent = title;
  p.textContent = description;
  div.appendChild(h1);
  div.appendChild(p);
  div.appendChild(checkBox);
  div.appendChild(text1);
  div.appendChild(text2);
  div.appendChild(displayText);
  div.appendChild(deleteButton);
  div.appendChild(save1);
  div.appendChild(save2);
  div.appendChild(editBtn);
  user.appendChild(div);

  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      displayText.textContent = "You just completed your Todo";
    } else {
      displayText.textContent = "";
    }
  });
  editBtn.addEventListener("click", function editTask() {
    text1.style.display = "block";
    save1.style.display = "block";
    editBtn.style.display = "none";

    text1.placeholder = "Enter new title";
  });
  save1.addEventListener("click", function saveBtn() {
    let value = text1.value;
    h1.textContent = value;
    //text1.value = ''
    editBtn.style.display = "none";
    text2.style.display = "block";
    text1.style.display = "none";
    save1.style.display = "none";
    save2.style.display = "block";
    if (text1.value === "") {
      return (h1.textContent = title);
    }
    console.log(value);
  });
  save2.addEventListener("click", function saveBtn2() {
    let value2 = text2.value;
    p.textContent = value2;
    text2.value = "";
    text1.style.display = "none";
    editBtn.style.display = "block";
    text2.style.display = "none";
    save2.style.display = "none";
    if (text1.value === "") {
      return (p.textContent = description);
    }
    console.log(value2);
  });

  deleteButton.addEventListener("click", function deleteTask() {
    div.remove();
  });

  let newTask = {
    id: arrayObj.length + 1,
    title: title,
    description: description,
  };
  arrayObj.push(newTask);
}
console.log(arrayObj);
addTask("my name is David", "Money");
addTask("my name is Ebuka", "kenya guy");
addTask("my name is Timi", "Needs yansh to cure depression");
addTask("my name is Tolu", "dev");
addTask("my name is AY", "Jack of all language");
addTask("my name is AY", "Jack of all language");
