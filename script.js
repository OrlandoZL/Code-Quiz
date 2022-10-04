//object that has an array of questions
var questions = [
    {
        question: "How are arrays enclosed?",
        choices: ["curly brackets", "parenthesis", "quotes", "brackets"],
        answer: "brackets"
    },
    {
        question: "How do you link JavaScript to HTML?",
        choices: ["<link>", "<a>", "<img>", "<script>"],
        answer: "<script>"
    },
    {
        question: "What is the third index of an array?",
        choices: ["1", "2", "3", "4"],
        answer: "2"
    },
    {
        question: "Commonly used data types do not include",
        choices: ["strings", "alerts", "booleans", "numbers"],
        answer: "alerts"
    },
    {
        question: "What's a good tool for debugging",
        choices: ["CSS", "terminal", "console.log", "HTML"],
        answer: "console.log"
    },
]
//creates unordered list
var ulCreate = document.createElement("ul");

//declares variables such as scores
var score = 0;
var questioncount = 1;
var questionPage = 0;

var highScorePage = document.querySelector("#button")
var timer = document.querySelector("#timer");
var startTimer = document.querySelector("#StartQuiz");
var Quiz = document.querySelector("#Quiz");
//variables that declare time
var timeLeft = 60;
var holdTime = 0;
var penalty = 10;
//eventlistener for timer
startTimer.addEventListener("click", function (){
    if (holdTime === 0) {
        holdTime = setInterval(function(){
            timeLeft--;
            timer.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdTime)
                done();
                timer.textContent = "Time is over!";

            }
        }, 2000);
    }
    render(questionPage);
});
//renders the new questions to the page
function render(questionPage) {
    Quiz.innerHTML = "";
    ulCreate.innerHTML = "";
    //loop for question and choices
    for(var i = 0; i < questions.length; i++) {
        var userQuestion = questions[questionPage].question;
        var userChoice = questions[questionPage].choices;
        Quiz.textContent = userQuestion;
    }
    //creates new list
    userChoice.forEach(function(newList){
        var quesitonItem = document.createElement("li");
        quesitonItem.textContent = newList;
        Quiz.appendChild(ulCreate);
        ulCreate.appendChild(quesitonItem);
        quesitonItem.addEventListener("click", (compare));

    })
}
//an event to determine whether the answer is correct or not
function compare (event) {
    var check = event.target;

    if (check.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id", "createDiv");
        if (check.textContent == questions[questionPage].answer) {
            score++;
            createDiv.textContent = "Your answer is correct, " + questions[questionPage].answer;
        }
        else {
            //takes 10 seconds of the clock as a penalty
            timeLeft = timeLeft - penalty;
            createDiv.textContent = "Incorrect answer! Correct answer is " + questions[questionPage].answer;
        }
    }
    questionPage++;

    if (questionPage >= questions.length) {
        //shows how you did on quiz
        done();
        createDiv.textContent = "You finished the quiz! " + " Your score is " + score + "/" + questions.length;
    }

    else {

        render(questionPage);
    }

    Quiz.appendChild(createDiv);
}
function done() {
    Quiz.innerHTML = "";
    timer.innerHTML = "";

    //creates heading element
    var heading = document.createElement("h1");
    heading.setAttribute("id", "heading");
    heading.textContent = "Finished!"

    Quiz.appendChild(heading);

    //create paragraph
    var paragraph = document.createElement("p");
    paragraph.setAttribute("paragraph");

    Quiz.appendChild(paragraph);

    //gathers remaining time
    if (timeLeft >= 0) {
        var timeleftover = timeLeft;
        var paragraph2 = document.createElement("p");
        clearInterval(holdTime);
        paragraph.textContent = "your final time is " + timeLeft;

        Quiz.appendChild(paragraph2);
    }

}