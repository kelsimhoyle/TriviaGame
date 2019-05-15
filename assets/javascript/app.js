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
console.log(trivia[1]);

// variables: correct answers, incorrect answers, question number
var correct = 0;
var incorrect = 0;
var questionNum = 0;

// function to have the question generated and then put on the page
function questionRound() {
    var userChoice;
    var correctIndex;
    // choose a question
    for (var i = 0; i < trivia.length; i++) {
        //questions on the page
        var currentQuestion = trivia[i];
        var answers = trivia[i].answers;
        correctIndex = trivia[i].correct;
        // put the question in a h4 tag
        var questionText = $("<h3>").addClass("row").text(currentQuestion.question);
        $("#question").append(questionText);
        for (var j = 0; j < answers.length; j++) {
            var answersText = $("<p>").addClass("row answer-choice").attr("data-index", answers.indexOf(answers[j])).text(answers[j]);
            $("#question").append(answersText);
        }
        $(".answer-choice").on("click", function(){
            userChoice = parseInt($(this).attr("data-index"));
            console.log(userChoice);
            if (userChoice === correctIndex) {
                correct++
                console.log("YAY!")
            }
        });

        
    }
    // put questions in a p tag, with data of correct or incorrect
}
// timed question
// var for if answer was answered correctly
// notification for win/lose with the correct answer, timed.
// correct answers/play again when the game is over.

// question timer
// answer/
// for loop to run through
    // onclick class 
    // empty function
    // start function
questionRound();
