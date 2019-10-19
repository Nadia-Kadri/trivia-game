let trivia = [

    {question: "This is the first question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: 1
    },
    
    {question: "This is the second question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: 1
    },
    
    {question: "This is the third question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: 1
    },
    
    {question: "This is the fourth question",
        answers: ["answer1", "answer2", "answer3", "answer4"],
        rightAnswer: 1
    }
];

let correctAnswers = 0;
let incorrectAnswers = 0;
let unAnswered = 0;

let gameStart = false;
let currentQuestion = 0;

$(document).ready(function () {

    initialScreen ()

    $("#start-button").on("click", function (){
        gameStart = true;
        questionGenerator ()
    });


    function initialScreen () {
        $("#question").hide()
        $(".answer").hide()
        $("#timer").hide()
        $(".display-right-answer").hide()
        $(".score").hide()
    }

    function questionGenerator () {
        $("#question").show().text(trivia[currentQuestion].question)
        $(".answer").show()
        $("#timer").show()
        $("#game-rules").hide()
        $("#start-button").hide()
        
        $("#answer-one").text(`a) ${trivia[currentQuestion].answers[0]}`)
        $("#answer-two").text(`b) ${trivia[currentQuestion].answers[1]}`)
        $("#answer-three").text(`c) ${trivia[currentQuestion].answers[2]}`)
        $("#answer-four").text(`d) ${trivia[currentQuestion].answers[3]}`)
    }

});





// $("<div>").text(trivia.questionOne.question).appendTo("#question")