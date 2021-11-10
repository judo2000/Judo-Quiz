// target carosell div
const startBtn = document.getElementById("startBtn");
const playAgainBtn = document.getElementById("playAgainBtn");
playAgainBtn.style.display = "none";
let carousel = document.querySelector("#carouselbox");
// create h2 element
let h2El = document.createElement("h2");
//create ul element
let listEl = document.createElement("ul");
// set index to 0 so the first question will display in the crousel
let index = 0;
var secondsLeft ;
// initialize currentQuestion variable
let currentQuestion;
// initialize score and set to 0
let score = 0;
let highScores = [];
let gameOver = true;
var timeEl = document.querySelector(".time");
let results = document.querySelector("#results");

//let secondsLeft = 10;


// Questions array
const questions = [
  { 
    question: 'Who was the founder of judo?',
    options: ['Scott Moore', 'Heidi Moore', 'Jigoro Kano'],
    answer: 2
  },
  { 
    question: 'In what year was judo founded?', 
    options: [1882, 1982, 1772],
    answer: 0
  }
];




// function to build the list items and append them to the list element (ul)
function buildList() {
  // get the first question
  currentQuestion = questions[index].question;
  // set h2 text to the current question
  h2El.textContent = currentQuestion;
  // append current question in an h2 element to carousel div 
  carousel.appendChild(h2El);
  // append the list element to the carousel div
  carousel.appendChild(listEl);
  // set innterHTML of list element to empty
  listEl.innerHTML = "";
  // iterate through current question options
  for (let i = 0; i < questions[index].options.length; i++) {
    // For each option, create an li at each iteration
    const listItem = document.createElement('li');
    // get the current current option in object from the array based on it's index
    let currentOptions = questions[index].options[i];
    // create a button element to append to the li
    let button = document.createElement("button");
    // cet button content = current option
    button.setAttribute("data-index", i);
    button.textContent = currentOptions;
    //append button to list element on each iteration
    listItem.appendChild(button);
    listEl.appendChild(listItem);
  }
}

function next() {
  if (index <= questions.length ) {
    //index = index + 1;
    currentQuestion = questions[index].question;
    h2El.textContent = currentQuestion;
    buildList();
  } 
}

// function saveScore() {
  
//   let initials = document.getElementById('userInitials').value;
//   console.log(initials);
  
//   var user = {
//     initials: initials,
//     score: 2
//   };
//   // Get the existing data
//   var storedUser = localStorage.getItem('user');
//   console.log(storedUser);
//   localStorage.setItem("user", JSON.stringify(user));
//   //renderScores();
// }

var saveBtn = document.createElement("button");

function showResults() {
  listEl.innerHTML = "";
  h2El.textContent = `You scored ${score}!`;
  // add form for initials here
  
  var userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.id = "userInitials"; // set the CSS class
  results.appendChild(userInitials); // put it into the DOM
  
  saveBtn.textContent = "Save";
  results.appendChild(saveBtn);
  console.log("showing results");
}

saveBtn.addEventListener('click', function() {
  let initials = document.getElementById('userInitials').value;
  console.log(initials);
  
  var userScore = {
    initials: initials,
    score: score
  };

  var storedScores = JSON.parse(localStorage.getItem("scores"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScores !== null) {
    highScores = storedScores;
  } 
  highScores.push(userScore);

  console.log(highScores);
  // Get the existing data
  localStorage.setItem("scores", JSON.stringify(highScores));
  results.innerHTML = "";
  renderScores();
});

carousel.addEventListener('click', function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // console.log("it is a button");
    let elIndex = element.getAttribute("data-index");
    //console.log(elIndex);
    let answer = questions[index].answer;
    if (parseInt(elIndex) === answer) {
      score++;
      index = index + 1;
    if (index !== questions.length) {
      next();
    } else {
      secondsLeft = 0;
      //clearInterval(timerInterval);
      timeEl.style.display = 'none';
      
      if (gameOver === false) {
        gameOver = true;
        showResults();
      }
    }
    } else {
      secondsLeft -= 10;
      //setTime();
      index = index + 1;
    if (index !== questions.length) {
      next();
    } else {
      secondsLeft = 0;
      //clearInterval(timerInterval);
      timeEl.style.display = 'none';
      
      if (gameOver === false) {
        gameOver = true;
        showResults();
      }
    }
    }
    // console.log("index ", index);
    // console.log("User Chose", elIndex);
    // console.log("answer", answer);
    // console.log("THE INDEX IS ", index);
    
  }
  
});

function setTime() {
  // Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds";
    
    if(secondsLeft <= 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      timeEl.style.display = 'none';
      // Calls function to create and append image
      if (gameOver === false) {
        gameOver = true;
        showResults();
      }
    }

  }, 1000);
}



startBtn.addEventListener('click', function() {
  startGame();
});


function renderScores() {
   h2El.textContent = `High Scores!`;
   for (var i = 0; i < highScores.length; i++) {
    listItem = document.createElement("li");
    listItem.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
    listEl.appendChild(listItem);
    results.appendChild(listEl);
  }
  results.appendChild(playAgainBtn);
  playAgainBtn.style.display = "block";
}

playAgainBtn.addEventListener('click', function() {
  playAgainBtn.style.display = "none";
  startGame();
});

function startGame() {
  highScores = [];
  index = 0;
  score = 0;
  timeEl.style.display = 'block';
  secondsLeft = 60;
  setTime();
  gameOver = false;
  timeEl.textContent = secondsLeft + " seconds";
  
  startBtn.style.display = 'none';
  buildList();
}

