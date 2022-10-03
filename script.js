//object that has an array of questions
var question = [
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
//declares variables such as scores
var score = 0;
var questioncount = 1;
var questionPage = 0;


var timer = document.querySelector("#timer");
var startTimer = document.querySelector("#StartQuiz");
var Quiz = document.querySelector("#Quiz");
//variables that declare time
var timeLeft = 60;
var holdTIme = 0;
var penalty = 10;

startTimer.addEventListener("click", function (){
    if (holdTIme === 0) {
        holdTime = setInterval(function(){
            timeLeft--;
            timer.textContent = "Time: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(holdTIme)
                document();
                timer.textContent = "Time is over!";

            }
        }, 2000);
    }
    render(questionPage);
});

function render(questionPage) {

}