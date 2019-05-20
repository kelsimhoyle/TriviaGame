// objects to store the questions and answers in
var trivia = [
    {
        question: "What is Jerry/Larry/Terry's real name?",
        answers: ["Jerry", "Garry", "Larry", "Terry"],
        correct: 1,
        correctGif: "<img src='assets/images/jerry.gif' alt='Jerry'>",
        correctResponse: "That's right! How did you even know who he is?",
        wrongGif: "<img src='assets/images/jerryWrong.gif' alt='Jerry'>",
        wrongResponse: "His name is actually Garry. But who cares?"
    },
    {
        question: "Who is Leslie's number one crush?",
        answers: ["Obama", "Ben Wyatt", "Ann Perkins", "Joe Biden"],
        correct: 3,
        correctGif: "<img src='assets/images/joeBiden.gif' alt='Joe Biden Gif'>",
        correctResponse: "Of course it's Joe Biden! Who else would it be?",
        wrongGif: "<img src='assets/images/joeBidenWrong.gif'>",
        wrongResponse: "She loves all of those other people, but Leslie really loves her some Joe Biden!"
    },
    {
        question: "What is Andy and April's three-legged dog's name?",
        answers: ["Champion", "Pogo", "Tripod", "Lucky"],
        correct: 0,
        correctGif: "<img src='assets/images/champion.gif' alt='Champion Gif'>",
        correctResponse: "Yes! His name is Champion",
        wrongGif: "<img src='assets/images/champion.gif' alt='Champion Gif'>",
        wrongResponse: "His name is Champion and he is literally the best dog ever."
    },
    {
        question: "What is Ben Wyatt's favorite food?",
        answers: ["Bacon", "Pizza", "Calzones", "Waffles"],
        correct: 2,
        correctGif: "<img src='https://media.giphy.com/media/In5LldGSCjY08/giphy.gif' alt ='Ben asking for calzones'>",
        correctResponse: "He loves calzones! Who actually likes calzones???",
        wrongGif: "<img src='https://media.giphy.com/media/rpCWcit0sTc2c/giphy.gif' alt='Ben Calzones have betrayed me'>",
        wrongResponse: "Ben loves calzones, even if they give him food poisoning."
    },
    {
        question: "What day do Tom and Donna celebrate?",
        answers: ["Treat Yo' Self", "Galentines", "Breakfast Day", "Nap Day"],
        correct: 0,
        correctGif: "<img src='https://media.giphy.com/media/i1hiQy3uVZ0KQ/giphy.gif' alt='Treat Yo Self Gif'>",
        correctResponse: "You know it! Treat Yo' Self Day is the Best Day of the Yeeeaaarr!",
        wrongGif: "<img src='https://media.giphy.com/media/XgWZpm5U6Jdzq/giphy.gif' alt='Treat Yo Self Gif'>",
        wrongResponse: "They created the best day ever: Treat Yo' Self!!"
    },
    {
        question: "What is both of Ron's ex-wive's names?",
        answers: ["Dianne", "Tammy", "Ann", "Amy"],
        correct: 1,
        correctGif: "<img src='https://media.giphy.com/media/ezIgROWqfsUMM/giphy.gif' alt='Tammy Scaring Leslie'>",
        correctResponse: "Yes, it's Tammy. And they are all horrible.",
        wrongGif: "<img src='https://media.giphy.com/media/oVL2oNdYpENzO/giphy.gif' alt='Tammy and Ron'>",
        wrongResponse: "Their names are Tammy. And they are all bad for Ron, as shown in this scene."
    },
    {
        question: "What Indiana city does the show take place?",
        answers: ["Eagleton", "Indianapolis", "Bloomington", "Pawnee"],
        correct: 3,
        correctGif: "<img src='https://media.giphy.com/media/7oXEv1P5KlzaM/giphy.gif' alt='Pawnee Welcome Sign'>",
        correctResponse: "Yes, it's Pawnee. One of the best places in the world!",
        wrongGif: "<img src='https://media.giphy.com/media/7oXEv1P5KlzaM/giphy.gif' alt='Pawnee Welcome Sign'>",
        wrongResponse: "Pawnee, of course. Way better than Eagleton."
    },
    {
        question: "What animal does the whole city love?",
        answers: ["A dog", "A mouse", "A miniture pony", "A raccoon"],
        correct: 2,
        correctGif: "<img src='assets/images/lilsebastian.gif' alt='Little Sebastian'>",
        correctResponse: "You love Little Sebastian as much as everyone else, don't you!?",
        wrongGif: "<img src='assets/images/lilsebastian.gif' alt='Little Sebastian'>",
        wrongResponse: "How could you forget the best miniature pony ever? Everyone loves Little Sebastian!"
    },
    {
        question: "What is Andy's band's name?",
        answers: ["Radwagon", "The Andy Andy Andys", "Mouse Rat", "Threeskin"],
        correct: 2,
        correctGif: "<img src='https://media.giphy.com/media/UkhHIZ37IDRGo/giphy.gif' alt='Andy Throwing Confetti'>",
        correctResponse: "Correct! Andy's band's name is Mouse Rat. Although, the other names are all ones that they tried out.",
        wrongGif: "<img src='https://media.giphy.com/media/VvXg0yjJQgfEQ/giphy.gif' alt='Andy'>",
        wrongResponse: "Technically, Andy's band has had all of these names. But the band goes by the name Mouse Rat."
    },
    {
        question: "What is the best breakfast joint in Pawnee?",
        answers: ["Sweetums", "JJ's Diner", "Big and Wide", "Fat Sack"],
        correct: 1,
        correctGif: "<img src='assets/images/jjsDiner.gif' alt=''>",
        correctResponse: "Yes, JJ's Diner is the best!",
        wrongGif: "<img src='assets/images/jjsWrong.gif' alt=''>",
        wrongResponse: "It's JJ's Diner. Where you can get all of the eggs and bacon."
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
    var timer = 30;
    // change the question number
    $("#time-remaining").text(timer);
    $("#question-num").text(questionNum + 1);

    // put the question in a h4 tag
    var questionText = $("<h4>").text(currentQuestion.question);
    $("#question").append(questionText);
    for (var i = 0; i < answers.length; i++) {
        var answersText = $("<p>").addClass("row flex-row justify-content-center answer-choice").attr("data-index", answers.indexOf(answers[i])).text(answers[i]);
        $("#question").append(answersText);
    }

    // change the number of the timer counter
    function timerDecrease() {
        if (timer > 0) {
            timer--;
            $("#time-remaining").text(timer);
        } else {
            clearInterval(runTimer);
            userChoice = -1;
            answer();
        }
    }
    // every second, run the timerDecrese function
    var runTimer = setInterval(timerDecrease, 1000);

    // when the user clicks an answer choice...
    $(".answer-choice").on("click", function () {
        // store the index number as the user's choice...
        userChoice = parseInt($(this).attr("data-index"));
        // stop running the question timer
        clearInterval(runTimer);
        // compare and show the appropriate div
        answer();
    });

}

function answer() {
    $("#question, .answer-div").empty();
    $("#timer, #current-question").hide();
    var answerDiv = $("<div>").addClass("answer-div");
    var gifDiv = $("<div>").addClass("row");
    var textDiv = $("<div>").addClass("row flex-row justify-content-center")
    if (userChoice === correctIndex) {
        correct++;
        // show the answer div with a timer, and then go to the next question
        var answerText = $("<p>").text(trivia[questionNum].correctResponse);
        textDiv.append(answerText);
        gifDiv.html(trivia[questionNum].correctGif);
    } else if (userChoice !== correctIndex) {
        incorrect++;
        // show the answer div with the correct answer, with a timer
        gifDiv.html(trivia[questionNum].wrongGif);
        textDiv.text(trivia[questionNum].wrongResponse)
    } else if (userChoice === -1) {

    }
    answerDiv.append(textDiv, gifDiv);
    $("#game").append(answerDiv);
    questionNum++;

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
    $(".answer-div").empty().hide();
    var results = $("<div>").addClass("results");
    var tryAgainBtn = $("<button>").addClass("btn btn-primary mx-auto d-block").attr("id", "play-again");
    var gameOver = $("<h3>").addClass("text-center").text("Game Over!");
    var resultsText = $("<p>").addClass("row flex-row justify-content-center");
    var gif = $("<div>").addClass("row flex-row justifiy-content-center");
    if (correct > 6) {
        gif.append($("<img>").attr("src", "https://media.giphy.com/media/xTiTnLWl6ftNuZAe8E/giphy.gif"));
        resultsText.text(`Wow, you know your parks and Rec! You got ${correct} right and only ${incorrect} wrong. Good job!`);
        tryAgainBtn.text("Play Again")
    } else if (correct < 7) {
        resultsText.text(`You only got ${correct} right and ${incorrect} wrong. I know you can do better. Why don't you try again?`);
        gif.append($("<img>").attr("src", "https://media.giphy.com/media/D7v65JWyrFMti/giphy.gif"));
        tryAgainBtn.text("Try Again");
    }

    results.append(gameOver, resultsText, gif, tryAgainBtn);
    $("#game").append(results);
    $("#play-again").on("click", playGame);
}

function playGame() {
    // resetting variables when the player choses to play again
    questionNum = 0;
    correct = 0;
    incorrect = 0;
    $(".welcome-content, .results, #play").hide();
    $(".results").empty();
    $("#game").show();
    roundQuestion();
}

// hide the game until the user choses to play
$("#game").hide();
// when the user clicks the button to play the game, triggers starting all of the functions
$("#play").on("click", playGame);

