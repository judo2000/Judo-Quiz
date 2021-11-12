<div id="top"></div>

  <h3 align="center">The Judo Quiz</h3>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://judo2000.github.io/week4-quiz/)

This is my judo quiz project.  This week there was no starter code so my first step was to create the index.html page using a [Bootstrap].

I then created the assets folder with the css and js folders wor the style.css and script.js files respectively. 

My first step was to created the questions which is an array of objects.  Each array item is an object with the question, options, and answer.  The options are an array and the anser is the index of the correct option.

Next I worked on the carousel part of the project.  The first part of this was setting the initial index and to write the function to display the question and options on the page.  The next stop was to check if the answer was correct or not and advance to the next question.  If the answer was correct 10 secons is deducted from the timer and the user advances to the next question.

After I got that working I set up the thimer.  When the user clicks the Start Quiz button, the first question is displayed and the timer starts counting down from 60 seconds.  If the user gets a question wrong, 10 seconds is subtracted from the timer and they advance to the next question.  If the timer runs out before the user finishes answering all the question or if the user answers all the questions before the time runs out, the game is over.  Once the game ends the user is shown their score (1 point for each correct answer) and a box to enter theri initials to save their score.

Scores are saved in local storage.  After the user clicks to sae their score all saved scores are shown on the screen along with a play again button.

After getting all the functionality working, I worked on the styling and layout of the page.  I found a free clipart for the [kanji] of the word judo for the header.

I used the grid system to lay out the page and used a card with the timer in the card header and the question in the h3 of the card-body. Everything else is displayed in the card-body.


<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [Bootstrap]

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Stephen Moore - judo2000@comcast.net

Project Link: [The Judo Quiz Page](https://judo2000.github.io/week4-quiz/)

Github Repo Link: [Github repository ](https://github.com/judo2000/week4-quiz)

<p align="right">(<a href="#top">back to top</a>)</p>

[product-screenshot]: assets/img/quiz_screenshot.png
[Bootstrap]: https://getbootstrap.com/
[kanji]: assets\img\324-3244405_judo-clipart_136x300.png