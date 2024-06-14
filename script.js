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
let ul = document.getElementById("array-container")
let btn = document.querySelector(".submit")
function submitValue() {
  let li = document.createElement("li")
  let todo1 = document.querySelector(".input").value

  let lastId = todo[todo.length - 3].id;
  let newTodo = {
    id: lastId + 1,
    activity: todo1,
  };
  li.textContent = todo1
  ul.appendChild(li)
  todo.push(newTodo);

  // console.log(todo)
}



// let todo = [
//   {
//     id: 1,
//     activity: "wake-up",
//   },
//   {
//     id: 2,
//     activity: "Prepare breakfast",
//   },
//   {
//     id: 3,
//     activity: " prepare for work",
//   },
//   {
//     id: 4,
//     activity: "I am at sheda",
//   },
// ];

// let ol = document.createElement("ol");
// let button = document.querySelector("button");

// let mainDiv = document.querySelector("#main");
// mainDiv.appendChild(ol);

// const addTodo = function () {
//   let inputFeild = document.querySelector(".input");

//   let todo1 = inputFeild.value;

//   let lastId = todo[todo.length - 1].id;
//   let newTodo = {
//     id: lastId + 1,
//     activity: todo1,
//   };
//   todo.push(newTodo);
//   let li = document.createElement("li");
//   li.innerText = todo1;
//   ol.appendChild(li);
//   console.log(todo);
// };
// for (let i = 0; i < todo.length; i++) {
//   let li = document.createElement("li");
//   li.innerText = todo[i].activity;
//   ol.appendChild(li);
// }
// button.addEventListener("click", addTodo);











// array of objects
const navlists = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "services" },
  { name: "contact us", path: "/contact" },
]
console.log(navlists);
let navList = document.getElementById("navlist")

navlists.map((navlist) => {
  let li = document.createElement("li")
  let aaaa = document.createElement("a")
  aaaa.textContent = navlist.name
  aaaa.href = navlist.path
  navList.appendChild(li)
  li.appendChild(aaaa)
  navList.style.display = "flex"
  navList.style.gap = "4rem"
  aaaa.style.color = "red"
  li.style.listStyleType = "none"
})

const cards = [{ img: "/photo-1716319487101-108ceed67fcb.avif", artist: "chris brown", title: "its " },
{ img: "/premium_photo-1663858367001-89e5c92d1e0e.avif", artist: " brown", title: " a" },
{ img: "/premium_photo-1715753663745-2d21590fc8fb.avif", artist: "nigga brown", title: " man" },
{ img: "/photo-1716319487101-108ceed67fcb.avif", artist: "james brown", title: "world" }
]

// let boxes = document.querySelector(".boxes")
// cards.map((card)=>{
//   let divs = document.createElement("div")
//   let image = document.createElement("img")
//   let artist = document.createElement("h1")
//   let title = document.createElement("p")

//   divs.appendChild(image)
//   divs.appendChild(artist)
//   divs.appendChild(title)

//   boxes.appendChild(divs)
//   image.src = card.img
//   image.style.width = '100px'
//   artist.textContent = card.artist
//   title.textContent = card.title
//   title.style.color = "red"
//   boxes.style.gap = "4rem"
//   boxes.style.display = "flex"
//   divs.style.display = "grid"
// })


let boxes = document.querySelector(".boxes")
cards.map((card) => {
  let div = document.createElement("div")
  let img = document.createElement("img")
  let h1 = document.createElement("h1")
  let p = document.createElement("p")

  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(p)
  boxes.appendChild(div)

  img.src = card.img
  img.style.width = "100px"
  h1.textContent = card.artist
  p.textContent = card.title
})

// largest integer
function minMax(a, b) {
  return Math.max(a, b)
}
console.log(minMax(5, 9));




// odds and even numbers
for (let i = 0; i <= 15; i++) {
  if (i === 0) {
    console.log(`${i} is an `);
  }
}





let seeMore = document.querySelector(".see-more")
let emptySpace = ''
let hidden = document.querySelector(".hidden-show")
let hide = document.querySelector(".hideAll")
seeMore.addEventListener('click', function () {
  hidden.style.display = "block"
  hide.style.display = "block"
  seeMore.style.display = "none"
})
hide.addEventListener('click', function () {
  hidden.style.display = "none"
  hide.style.display = "none"
  seeMore.style.display = "block"
})


//Create an array to store the tasks in the to-do list. Each task should have properties such as id (auto-incrementing), title, description, and completed.
let user = document.getElementById("user")
let arrayObj = [{
  id: 1,
  title: "Just Random",
  description: "the last soul"
}];


let addNewTodo = document.querySelector(".button")
addNewTodo.addEventListener('click',function add(){
  let overAllTitle = document.querySelector(".title-submit").value
  let overAllDES = document.querySelector(".des-submit").value
  let myP = document.querySelector(".myPTag")
  myP.style.color = 'red'
    if(overAllDES === ''){
      return myP.textContent = "title can't be empty"
    }
    else if(overAllTitle === ''){
      return  myP.textContent = "description can't be empty"
    }
  addTask(overAllDES,overAllTitle)
})


function addTask(title, description) {
  let displayText = document.createElement("p");
  let div = document.createElement("div")
  let editBtn = document.createElement("button")
  editBtn.textContent = "edit"
  let h1 = document.createElement("h1")
  let p = document.createElement("p")
  let checkBox = document.createElement("input")
  checkBox.type = "checkbox"
  let save1 = document.createElement("button")
  save1.textContent = "save"
  save1.style.display = "none"
  let save2 = document.createElement("button")
  save2.textContent = "save"
  save2.style.display = "none"

  let text1 = document.createElement("input")
  text1.type = "text"
  text1.style.display = "none"
  let text2 = document.createElement("input")
  text2.type = "text"
  text2.placeholder = "enter for description"
  text2.style.display = "none"
  let deleteButton = document.createElement("button")
  deleteButton.textContent = "Delete"

  h1.textContent = title
  p.textContent = description
  div.appendChild(h1)
  div.appendChild(p)
  div.appendChild(checkBox)
  div.appendChild(text1)
  div.appendChild(text2)
  div.appendChild(displayText)
  div.appendChild(deleteButton)
  div.appendChild(save1)
  div.appendChild(save2)
  div.appendChild(editBtn)
  user.appendChild(div)


   checkBox.addEventListener("change", function() {
    if (checkBox.checked) {
        displayText.textContent = "You just completed your Todo"
    }else{
      displayText.textContent = ''
    }
 });
  editBtn.addEventListener('click', function editTask() {
    text1.style.display = "block"
    save1.style.display = "block"
    editBtn.style.display = "none"

    text1.placeholder = "Enter new title"

  })
  save1.addEventListener('click', function saveBtn() {
    let value = text1.value
   h1.textContent = value
    //text1.value = ''
    editBtn.style.display = "none"
    text2.style.display = "block"
    text1.style.display = "none"
    save1.style.display = "none"
    save2.style.display = "block"
    if(text1.value === ''){
      return h1.textContent = title
    }
    console.log(value);
  })
  save2.addEventListener('click', function saveBtn2() {
    let value2 = text2.value
   p.textContent = value2
    text2.value = ''
    text1.style.display = "none"
    editBtn.style.display = "block"
    text2.style.display = "none"
    save2.style.display = "none"
    if(text1.value === ''){
      return p.textContent = description
    }
    console.log(value2);
  })

  deleteButton.addEventListener('click', function deleteTask() {
    div.remove();
})

  let newTask = {
    id: arrayObj.length + 1,
    title: title,
    description: description
  }
  arrayObj.push(newTask)
}
console.log(arrayObj);
addTask("my name is David", "Money")
addTask("my name is Ebuka", "kenya guy")
addTask("my name is Timi", "Needs yansh to cure depression")
addTask("my name is Tolu", "dev")
addTask("my name is AY", "Jack of all language")
addTask("my name is AY", "Jack of all language")




// let listBook = document.querySelector(".listOfBooks")
// let submitBooks = document.querySelector(".submitBooks")
// submitBooks.addEventListener('click',function getValue(){
//   let inputTitle = document.querySelector(".title").value;
//     let inputAuthor = document.querySelector(".author").value;
//     addBooks(inputTitle, inputAuthor)
// })
// function addBooks(title,author) {
//   let div = document.createElement("div")
//   let h1 = document.createElement("h1")
//   let p = document.createElement("p")
//  h1.textContent = title
//  p.textContent = author
//  div.appendChild(p)
//  div.appendChild(h1)
//  listBook.appendChild(div)
// return `${title} and ${author}`
// }
// addBooks("hidden","man")

let listBook = document.querySelector(".listOfBooks")
let submitBooks = document.querySelector(".submitBooks")

submitBooks.addEventListener('click', function getValue() {
    let inputTitle = document.querySelector(".title").value;
    let inputAuthor = document.querySelector(".author").value;
    let addedBook = addBooks(inputTitle, inputAuthor);
    if(addedBook){
      return "User added a books"
    }
    //console.log(addedBook);
})

function addBooks(title, author) {
  let deleteBtn = document.createElement("button")
  deleteBtn.textContent = "delete"
  let p = document.createElement('p')
  let finalSave = document.createElement("button")
  let yesSave = document.createElement("button")
  let noSave = document.createElement("button")
  let saveDiv = document.querySelector(".save-div")
  saveDiv.style.display = 'none'
  finalSave.textContent = "save"
  yesSave.textContent = "yes"
  noSave.textContent = "no"
  yesSave.style.display = "inline";
  noSave.style.display = "inline";
  yesSave.style.display = "none"
  noSave.style.display = "none"
     let join = document.createElement("p")
    let div = document.createElement("div");
    let h1 = document.createElement("h1");
    
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    p2.style.display = 'none'
    join.textContent = `the title is ${title} an author is ${author}`
    h1.textContent = title;
    p1.textContent = author;
    if(title === ''){
      // let p = document.createElement('p')
      p.textContent = "Your Todo can't be empty" 
      return undefined
    } if(author === ''){
      // let p = document.createElement('p')
      p.textContent = "Your Todo can't be empty" 
      return undefined
    }
    div.appendChild(h1)
    div.appendChild(p)
    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(yesSave)
    div.appendChild(noSave)
    div.appendChild(deleteBtn)
    div.appendChild(join)
    div.appendChild(finalSave)
    listBook.appendChild(div)
    listBook.appendChild(saveDiv)
    
    finalSave.addEventListener('click', function(){
      p2.textContent = "do you want to save finally"
      p2.style.color = "red"
      p2.style.display = "block"
      yesSave.style.display = "block"
  noSave.style.display = "block"
    })
    deleteBtn.addEventListener('click', function(){
      div.remove()
    })
      
    yesSave.addEventListener('click',function(){
      saveDiv.style.display = 'block'
      let join = document.createElement("p")
      let div = document.createElement("div");
      let h1 = document.createElement("h1");
      join.textContent = author
      h1.textContent = title
      div.style.display = 'flex'
      div.appendChild(h1)
      div.appendChild(join)
      saveDiv.appendChild(div)
    })
    noSave.addEventListener('click',function noSaveOne(){
      yesSave.style.display = "none"
      noSave.style.display = "none"
      p2.style.display = 'none'
    })
    return `the title is ${title} an author is ${author}`
}
addBooks("Hidden", "Man");
 function display(){
  localStorage.setItem('value', h1)
  saveDiv=localStorage.getItem('value')
 }



// quiz application
let jsQuestions = [
    {
      id: 1,
      question: "What is the purpose of the `querySelector()` method?",
      answer: "a",
      options: {
        a: "To select and return the first element that matches a specified CSS selector",
        b: "To modify the CSS properties of an element",
        c: "To create a new HTML element",
        d: "To define a JavaScript function"
      }
    },
    {
      id: 2,
      question: "What is the correct syntax for a for loop in JavaScript?",
      answer: "d",
      options: {
        a: "for (let i = 0; i < condition; i++)",
        b: "for (let i = condition; i > 0; i--)",
        c: "for (condition; i++)",
        d: "for (let i = 0; i < condition; i++)"
      }
    },
    {
      id: 3,
      question: "Which of the following is NOT a valid data type in JavaScript?",
      answer: "c",
      options: {
        a: "number",
        b: "string",
        c: "character",
        d: "boolean"
      }
    },
    {
      id: 4,
      question: "What does the `push()` method do in JavaScript arrays?",
      answer: "b",
      options: {
        a: "Removes the last element from an array",
        b: "Adds one or more elements to the end of an array and returns the new length",
        c: "Sorts the elements of an array",
        d: "Reverses the order of the elements of an array"
      }
    },
    {
      id: 5,
      question: "What is the purpose of the `addEventListener()` method?",
      answer: "a",
      options: {
        a: "To attach an event handler function to an HTML element",
        b: "To create a new HTML element",
        c: "To modify the CSS properties of an element",
        d: "To define a JavaScript function"
      }
    },
  {
    id: 6,
    question: "What is the purpose of the `typeof` operator?",
    answer: "To determine the data type of a variable or expression.",
    options: {
      a: "To compare two values",
      b: "To create a new variable",
      c: "To determine the data type of a variable or expression",
      d: "To concatenate strings"
    }
  },
  {
    id: 7,
    question: "What is an IIFE in JavaScript?",
    answer: "Immediately Invoked Function Expression, used to create a private scope.",
    options: {
      a: "A JavaScript framework",
      b: "A built-in method",
      c: "A programming language",
      d: "Immediately Invoked Function Expression, used to create a private scope"
    }
  },
  {
    id: 8,
    question: "What is the purpose of the `this` keyword in JavaScript?",
    answer: "To refer to the current object.",
    options: {
      a: "To declare variables",
      b: "To perform arithmetic operations",
      c: "To refer to the current object",
      d: "To create functions"
    }
  },
  {
    id: 9,
    question: "What is a closure in JavaScript?",
    answer: "A function that has access to its outer scope even after the outer function has finished executing.",
    options: {
      a: "A way to style HTML elements",
      b: "A type of loop",
      c: "A function that returns a value",
      d: "A function that has access to its outer scope even after the outer function has finished executing"
    }
  },
  {
    id: 10,
    question: "What is the purpose of `JSON.parse()` in JavaScript?",
    answer: "To parse JSON strings and convert them into JavaScript objects.",
    options: {
      a: "To convert a string into an array",
      b: "To parse JSON strings and convert them into JavaScript objects",
      c: "To remove an element from an array",
      d: "To reverse the elements of an array"
    }
  },
    {
      id: 11,
      question: "What is the purpose of the `typeof` operator?",
      answer: "To determine the data type of a variable or expression.",
      options: {
        a: "To compare two values",
        b: "To create a new variable",
        c: "To determine the data type of a variable or expression",
        d: "To concatenate strings"
      }
    },
    {
      id: 12,
      question: "What is an IIFE in JavaScript?",
      answer: "Immediately Invoked Function Expression, used to create a private scope.",
      options: {
        a: "A JavaScript framework",
        b: "A built-in method",
        c: "A programming language",
        d: "Immediately Invoked Function Expression, used to create a private scope"
      }
    },
    {
      id: 13,
      question: "What is the purpose of the `this` keyword in JavaScript?",
      answer: "To refer to the current object.",
      options: {
        a: "To declare variables",
        b: "To perform arithmetic operations",
        c: "To refer to the current object",
        d: "To create functions"
      }
    },
    {
      id: 14,
      question: "What is a closure in JavaScript?",
      answer: "A function that has access to its outer scope even after the outer function has finished executing.",
      options: {
        a: "A way to style HTML elements",
        b: "A type of loop",
        c: "A function that returns a value",
        d: "A function that has access to its outer scope even after the outer function has finished executing"
      }
    },
    {
      id: 15,
      question: "What is the purpose of `JSON.parse()` in JavaScript?",
      answer: "To parse JSON strings and convert them into JavaScript objects.",
      options: {
        a: "To convert a string into an array",
        b: "To parse JSON strings and convert them into JavaScript objects",
        c: "To remove an element from an array",
        d: "To reverse the elements of an array"
      }
    },
];
// function oneByOne(){
//   let questions = document.querySelector(".questions")
//   questions.innerHTML = '';
//   jsQuestions.forEach(jsQuestion => {
//     let div = document.createElement("div")
//     div.textContent = `${id + 1} ${jsQuestion.question}`
//     questions.appendChild(div)
//   })
// }


let currentIndex = 1; // Track the current index of the question being displayed

function oneByOne() {
  let questionsContainer = document.querySelector(".questions");
  //questionsContainer.innerHTML = ''; // Clear the container before displaying new questions
  let jsQuestion = jsQuestions[currentIndex]; // Get the current question

  // Create a div element to display the question
  let questionDiv = document.createElement("div");
  questionDiv.textContent = `${jsQuestion.id}. ${jsQuestion.question}`;
  questionsContainer.appendChild(questionDiv);

  // Display options
  let options = jsQuestion.options;
  for (let option in options) {
    let optionDiv = document.createElement("div");
    optionDiv.textContent = `${option}: ${options[option]}`;
    questionsContainer.appendChild(optionDiv);
  }

  currentIndex++; // Move to the next question for the next function call
}

// Call oneByOne() initially to start displaying questions
oneByOne();
