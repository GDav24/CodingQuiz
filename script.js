// start button variable //
var startButton = document.getElementById("startbutton");

// variable that begins score at 0

var score = 0;

// variable that finds the id average and assigns it to average

var average = document.getElementById("average");

// variable that starts the timer count to 60 

var count = 60;

// empty array variable that is used to create name and score array

var highscoreArray = []

//  variable that prints score and name array

var highScoresElement = document.getElementById("score-gen")

// highscore button asssigned to id 

var highScoresButton = document.getElementById("high-score-elem")

// highscore button event listener: displays score and array, displays hide button, uses forEach to create element based on score and name and make it an element appended to highscoreElement

highScoresButton.addEventListener("click", function () {
    highScoresElement.style.display = "block";
    document.getElementById("hide-btn").style.display = "block";
    highscoreArray.forEach((elem) => {
        var elementToMake = document.createElement("li");
        elementToMake.textContent = `Name: ${elem.name}, Score: ${elem.score}` 
        highScoresElement.appendChild(elementToMake);
    });
    highScoresButton.style.display = "none";
});


// event listener for start button that displays none and starts timer //

var counterElem = document.getElementById("counter");

startButton.addEventListener("click", function () {
    console.log("clicked");
    document.getElementById("quiz-start").style.display = "none";
    document.getElementById("question-one").style.display = "flex";
    var timer = setInterval(function() {
        count--;
        counterElem.textContent = count
        console.log("count", count)
        if(count <= 0) {
            alert("Time Expired");
            clearInterval(timer);
        }
    }, 1000);
});

// variable for question 1 answer buttons //

const incorrectOne = document.getElementById("incorrect-one");
const correctOne = document.getElementById("correct-one");

// event listeners for question 1 answers reduces timer by 10 seconds if wrong also opens second question //

incorrectOne.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "flex";
    count = count - 10;
});

correctOne.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-one").style.display = "none";
    document.getElementById("question-two").style.display = "flex";
    score = score + 20;
    console.log("score", score);
});

//variable for question 2 answer buttons //

const incorrectTwo = document.getElementById("incorrect-two");
const correctTwo = document.getElementById("correct-two");

// event listeners for question 2 answers reduces timer by 10 seconds if wrong also opens third question //

incorrectTwo.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "flex";
    count = count - 10;
});

correctTwo.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-two").style.display = "none";
    document.getElementById("question-three").style.display = "flex";
    score = score + 20;
    console.log("score", score);
});

// variable for question 3 answer buttons //

const incorrectThree = document.getElementById("incorrect-three");
const correctThree = document.getElementById("correct-three");

// event listeners for question 3 answers reduces timer by 10 seconds if wrong also opens four question //

incorrectThree.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "flex";
    count = count - 10;
});

correctThree.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-three").style.display = "none";
    document.getElementById("question-four").style.display = "flex";
    score = score + 20;
    console.log("score", score);
});

// variable for question 4 answer buttons //

const incorrectFour = document.getElementById("incorrect-four");
const correctFour = document.getElementById("correct-four");

// event listeners for question 4 answers reduces timer by 10 seconds if wrong also opens fifth question //

incorrectFour.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "flex";
    count = count - 10;
});

correctFour.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-four").style.display = "none";
    document.getElementById("question-five").style.display = "flex";
    score = score + 20;
    console.log("score", score);
});

// variable for question 5 answer buttons //

const incorrectFive = document.getElementById("incorrect-five");
const correctFive = document.getElementById("correct-five");

// event listeners for question 5 answers reduces timer by 10 seconds if wrong also opens results //
// makes timer reach zero after question is answered
// creates prompt that asks user for initials to add to high score
// pushes high score array

incorrectFive.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-five").style.display = "none";
    document.getElementById("results").style.display = "block";
    count = 0;
    average.textContent = `${score}%`;
    var nameVariable = prompt("Please enter initials")
    highscoreArray.push({"name": nameVariable, "score": score});
    console.log("highscoreArray", highscoreArray);
});


correctFive.addEventListener("click", function() {
    console.log("clicked");
    document.getElementById("question-five").style.display = "none";
    document.getElementById("results").style.display = "block";
    score = score + 20;
    console.log("score", score);
    average.textContent = `${score}%`;
    var nameVariable = prompt("Please enter initials")
    highscoreArray.push({"name": nameVariable, "score": score});
    console.log("highscoreArray", highscoreArray)
    count = 0;
}); 

// funciton that restarts quiz, resets count and score

function resetQuiz () {
    console.log("resetting the quiz");
    count = 60;
    score = 0;
}

// restart quiz button and variable that assigns it to reatke-quiz id

var replayButton = document.getElementById("retake-quiz");

console.log('replayButton', replayButton);

replayButton.addEventListener("click", function () {
    resetQuiz();

    document.getElementById("quiz-start").style.display = "block";
    document.getElementById("question-five").style.display = "none";
    document.getElementById("results").style.display = "none";
});

// variable and hideBtn button
// has event listener that displays highscore and makes hide button invisible

var hideBtn = document.getElementById("hide-btn")

hideBtn.addEventListener("click", function(){
    document.getElementById("score-gen").style.display = "none";
    document.getElementById("hide-btn").style.display = "none"
    highScoresButton.style.display = "block";
});
