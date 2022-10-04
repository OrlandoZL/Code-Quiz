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
var ulcreate = document.createElement("ul");

//declares variables such as scores
var score = 0;
var questioncount = 1;
var questionPage = 0;


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
    ulcreate.innerHTML = "";
    //loop for question and choices
    for(var i = 0; i < question.length; i++) {
        var userQuestion = questions[questionPage].question;
        var userChoice = questions[questionPage].choices;
        Quiz.textContent = userQuestion;
    }
    //creates new list
    userChoice.forEach(function(newList){
        var quesitonItem = document.createElement("li");
        quesitonItem.textContent = newList;
        Quiz.appendChild(ulcreate);
        ulcreate.appendChild(listItem);
        quesitonItem.addEventListener("click", (compare));

    })
}
//an event to determine whether the answer is correct or not
function compare (event) {
    var check = event.target;

    if (check.matches("li")) {
        var createDiv = document.createElement("div");
        createDiv.setAttribute("createDiv");
        if (check.textContent == questions[questionPage].answer) {
            score++;
            createDiv.textContent = "You're answer is correct, " + questions[questionPage].answer;
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
        createDiv.textContent = "You finished the quiz!" + " " + "Your score is " + score + "/" + questions.length;
    }

    else {

        render(questionPage);
    }

    Quiz.appendChild(createDiv);
}
function done() {
    questionPage.innerHTML = "";
    timer.innerHTML = "";

    //creates heading element
    var heading = document.createElement("h1");
    heading.setAttribute("heading");
    create.textContent = "Finished!"

    questionPage.appendChild(heading);

    //create paragraph
    var paragraph = document.createElement("p");
    paragraph.setAttribute("paragraph");

    questionPage.appendChild(paragraph);

    //gathers remaining time
    if (timeLeft >= 0) {
        var timeleftover = timeLeft;
        var paragraph2 = document.createElement("p");
        clearInterval(holdTime);
        paragraph.textContent = "your final time is " + timeLeft;

        questionPage.appendChild(paragraph2);
    }
    //submit button
    var submit = document.createElement("button");
    submit.setAttribute("type", "submit");
    submit.setAttribute("id", "submitbtn");
    submit.textContent = "submit";

    questionPage.appendChild(submit);

    var label = document.createElement("label");
    label.setAttribute("id", "newLabel");
    label.textContent = "initials";

    questionPage.appendChild(label);

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("id", "initials");
    input.textContent = "";

    questionPage.appendChild(input);

submit.addEventListener("click", function(){
    var initials = input.value;

    if (initials === null) {
        console.log("enter initials");
    }
    else {
    var lastScore = {
    initials: initials,
    score: timeLeft
        }
     console.log(lastScore);
     var scores = localStorage.getItem("scores");
    if(scores === null) {
        scores= [];
    }
    //puts scores together
    else {
        scores = JSON.parse(scores);
    }
    scores.push(scores);
    var newScore = JSON.stringify(scores);
    }
})

}