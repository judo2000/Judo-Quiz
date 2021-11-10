// target carosell div
let carousel = document.querySelector("#carouselbox");
// create h2 element
let h2El = document.createElement("h2");
//create ul element
let listEl = document.createElement("ul");
// set index to 0 so the first question will display in the crousel
let index = 0;
// initialize currentQuestion variable
let currentQuestion;

const questions = [
  { 
    question: 'Who was the founder of judo?',
    options: ['Scott Moore', 'Heidi Moore', 'Jigoro Kano'],
    anser: 2
  },
  { 
    question: 'In what year was judo founded?', 
    options: [1882, 1982, 1772],
    anser: 0
  }
];


//console.log(questions[index].question);
currentQuestion = questions[index].question;
h2El.textContent = currentQuestion;
// append current question in an h2 element to carousel div
carousel.appendChild(h2El);
// append the list element to the carousel div
carousel.appendChild(listEl);
listEl.innerHTML = "";
//carousel.textContent = questions[index].question;
//currentOptions = questions[index].options;
for (let i = 0; i < questions[index].options.length; i++) {
  // For each option, create an li at each iteration
  const listItem = document.createElement('li');
  
  // get the current current option in object from the array based on it's index
  const currentOptions = questions[index].options[i];
  // create a button element to append to the li
  let button = document.createElement("button");
  // cet button content = current option
  button.textContent = currentOptions;
  //append button to list element on each iteration
  listItem.appendChild(button);
  listEl.appendChild(listItem);
  console.log(listItem);
}

carousel.addEventListener('click', function(event) {
  console.log(event.target);
});
