// objects to store the questions and answers in
var trivia = [
    {
        question: "What is Jerry/Larry/Terry's real name?",
        answers: ["Jerry", "Garry", "Larry", "Terry"],
        correct: 1,
    },
    {
        question: "Who is Leslie's number one crush?",
        answers: ["Obama", "Ben Wyatt", "Ann Perkins", "Joe Biden"],
        correct: 3,
    },
    {
        question: "What is Andy and April's three-legged dog's name?",
        answers: ["Champion", "Pogo", "Tripod", "Lucky"],
        correct: 0,
    },
    {
        question: "What is Ben Wyatt's favorite food?",
        answers: ["Bacon", "Pizza", "Calzones", "Waffles"],
        correct: 2
    }
];

// variables: correct answers, incorrect answers, question number
var correct = 0;
var incorrect = 0;
var questionNum = 0;
var correctNum = 0;
var userChoice;
var correctIndex;

//  press start game, then the timer begins going down. if timer reaches zero, then the round is over.
// function to have the question generated and then put on the page
function roundQuestion() {
    $(".answer-div").empty().hide();
    $("#timer, #current-question").show();
    //questions on the page
    var currentQuestion = trivia[questionNum];
    var answers = trivia[questionNum].answers;
    correctIndex = trivia[questionNum].correct;
    var timer = 5;
    // change the question number
    $("#time-remaining").text(timer);
    $("#question-num").text(questionNum + 1);
    
    // put the question in a h4 tag
    var questionText = $("<h4>").text(currentQuestion.question);
    $("#question").append(questionText);
    for (var i = 0; i < answers.length; i++) {
        var answersText = $("<p>").addClass("row answer-choice").attr("data-index", answers.indexOf(answers[i])).text(answers[i]);
        $("#question").append(answersText);
    }

    // change the number of the timeer counter
    function timerDecrease() {
        if (timer > 0) {
        timer --;
        $("#time-remaining").text(timer);
        } else {
            clearInterval(runTimer);
            answer();
        }
    }
        var runTimer = setInterval(timerDecrease, 1000);

    // when the user clicks an answer choice...
    $(".answer-choice").on("click", function(){
        // store the index number as the user's choice...
        userChoice = parseInt($(this).attr("data-index"));
        // stop running the question timer
        clearInterval(runTimer);
        // compare and show the appropriate div
        answer();
    });

}

function answer() {
    $("#question").empty();
    $("#timer, #current-question").hide();
    var answerDiv = $("<div>").addClass("row answer-div")
    if (userChoice === correctIndex) {
        correct++;
        console.log("YAY!")
        // show the answer div with a timer, and then go to the next question
        answerDiv.text("You got it right! Yay!");
    } else if (userChoice !== correctIndex) {
        incorrect++;
        // show the answer div with the correct answer, with a timer
        answerDiv.text(`Sorry, the answer was ${trivia[questionNum].answers[correctIndex]}`)
    } else if (userChoice === "undefined") {

    }
    $("#game").append(answerDiv);
    questionNum++;
    console.log(questionNum);

    // if it isn't the last question, then go to the next round
    if (questionNum + 1 <= trivia.length) {
        setTimeout(roundQuestion, 5000);
    }
    // if it is the last question, then display the end game div
    else if (questionNum + 1 > trivia.length) {
        setTimeout(endGame, 5000);
    }
}

function endGame() {
    console.log("running");
    $(".answer-div").empty().hide();
    var results = $("<div>").addClass("results");
    var gameOver = $("<h3>").text("Game Over!")
    var resultsText = $("<p>").text(`You got ${correct} correct and ${incorrect} wrong. Play again?`);
    results.append(gameOver, resultsText);
    $("#game").append(results);
}

function playGame() {
    $("#start").hide();
    $("#game").show();
    roundQuestion();
}




// put questions in a p tag, with data of correct or incorrect

// notification for win/lose with the correct answer, timed.
// correct answers/play again when the game is over.
$("#game").hide();
$("#start").on("click", playGame);

