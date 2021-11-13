// target start game button
const startBtn = document.getElementById("startBtn");
// target play again button
const playAgainBtn = document.getElementById("playAgainBtn");
// set initial state of play agai button to display: none;
playAgainBtn.style.display = "none";
//target options div
const optionsEl = document.querySelector("#options");
// target save button
const saveBtn = document.createElement("button");
//target the question element
const questionEl = document.querySelector(".question");
//create ul element
let listEl = document.createElement("ul");
// set index to 0 so the first question will display in the crousel
let index = 0;
// initialize secondsLeft and set to 0
let secondsLeft = 0;
// initialize currentQuestion variable
let currentQuestion;
// initialize score and set to 0
let score = 0;
// create empty highScores array
let highScores = [];
// initialize gameOver and set to true
let gameOver = true;
// target time div
const timeEl = document.querySelector(".time");
// target results div
const results = document.querySelector("#results");

// Questions array
const questions = [
  { 
    question: 'In what year was judo founded?', 
    options: [1882, 1982, 1772],
    answer: 0
  },
  { 
    question: 'Who was the founder of judo?',
    options: ['Bruce Lee', 'Jackie Chan', 'Jigoro Kano'],
    answer: 2
  },
  { 
    question: 'What is the name of the first judo school?',
    options: ['The Budokan', 'The Kodokan', 'Tokyo School of Judo'],
    answer: 1
  }, 
  { 
    question: 'What is the Japanes word for begin?',
    options: ['Hajemi', 'Matte', 'Morote'],
    answer: 0
  }
];

// function to set timer
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

// function to build the list items and append them to the list element (ul)
function buildList() {
  // get the first question
  currentQuestion = questions[index].question;
  // set questionEl text to the current question
  questionEl.textContent = currentQuestion;
  // append the list element to the options div
  optionsEl.appendChild(listEl);
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
    // set button content = current option
    button.setAttribute("data-index", i);
    button.setAttribute("class", "optionBtn");
    button.textContent = currentOptions;
    //append button to list element on each iteration
    listItem.appendChild(button);
    listEl.appendChild(listItem);
  }
}

// function to move to next question
function next() {
  if (index <= questions.length ) {
    //index = index + 1;
    currentQuestion = questions[index].question;
    questionEl.textContent = currentQuestion;
    buildList();
  } 
}

// function to show results
function showResults() {
  listEl.innerHTML = "";
  questionEl.textContent = `You scored ${score}!`;

  var userInitials = document.createElement("input");
  userInitials.type = "text";
  userInitials.placeholder = "Enter your initials";
  userInitials.id = "userInitials"; // set the CSS class
  results.appendChild(userInitials); // put it into the DOM
  
  saveBtn.textContent = "Save";
  saveBtn.setAttribute("id", "saveBtn");
  results.appendChild(saveBtn);
}

// Event listener for save button
saveBtn.addEventListener('click', function() {
  let initials = document.getElementById('userInitials').value;
  var userScore = {
    initials: initials,
    score: score
  };

  var storedScores = JSON.parse(localStorage.getItem("scores"));
  if (storedScores !== null) {
    highScores = storedScores;
  } 
  highScores.push(userScore);
  
  // Get the existing data
  localStorage.setItem("scores", JSON.stringify(highScores));
  results.innerHTML = "";
  renderScores();
});

optionsEl.addEventListener('click', function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    let elIndex = element.getAttribute("data-index");
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
  }
});

// renders scores to the screen
function renderScores() {
  questionEl.textContent = `High Scores!`;
  for (var i = 0; i < highScores.length; i++) {
   listItem = document.createElement("li");
   listItem.textContent = `${highScores[i].initials} - ${highScores[i].score}`;
   listEl.appendChild(listItem);
   results.appendChild(listEl);
 }
 results.prepend(playAgainBtn);
 playAgainBtn.style.display = "block";
 playAgainBtn.setAttribute("class", "text-center");
}

// event listener for play again button
playAgainBtn.addEventListener('click', function() {
 playAgainBtn.style.display = "none";
 startGame();
});

// start game function
function startGame() {
 // the carousell starts with a display of none, set it to block so it is visible
 carouselbox.style.display = "block";
 // initialize the high scores array in case it is not empty
 highScores = [];
 // set the index to 0 in case it is not
 index = 0;
 // set scores to 0
 score = 0;
 // set time to could down from 60
 secondsLeft = 60;
 // make the timer visible
 timeEl.style.display = 'block';
 // call the set time function
 setTime();
 // set the game over variable to false
 gameOver = false;
 // set the timer element's text content to show how many seconds are left.
 timeEl.textContent = secondsLeft + " seconds";
 // set the start quize button to hidden
 startBtn.style.display = 'none';
 // call the function to buidl the list of options list
 buildList();
}

// event listener for start game button
startBtn.addEventListener('click', function() {
  startGame();
});