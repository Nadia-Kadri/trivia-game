let trivia = [

    {question: "What is Europe's most mountainous country?",
        answers: ["Ireland", "Switzerland", "Belgium", "Sweden"],
        rightAnswer: 1
    },
    
    {question: "In what country is the Valley of the Kings located?",
        answers: ["China", "Egypt", "Indonesia", "Australia"],
        rightAnswer: 1
    },
    
    {question: "What is the largest country in South America?",
        answers: ["Argentina", "Brazil", "Peru", "Colombia"],
        rightAnswer: 1
    },

];


let correctAnswers = 0;
let incorrectAnswers = 0;
let unAnswered = 0;

let gameStart = false;
let currentQuestion = 0;
let counter = 5;
let intervalId;

$(document).ready(function () {

    initialScreen ()

    $("#start-button").on("click", function (){
        gameStart = true;
        questionGenerator ()
        generateTimer ()
    });


    function initialScreen () {
        $("#question").hide()
        $(".answer").hide()
        $("#timer").hide()
        $("#display-right-answer").hide()
        $("#good-job").hide()
        $("#not-quite").hide()
        $(".score").hide()
    }

    function questionGenerator () {
        questionCheck ()

        if (gameStart) {
            generateTimer ()

            $("#question").show().text(trivia[currentQuestion].question)
            $(".answer").show()
            $("#timer").show()
            $("#game-rules").hide()
            $("#start-button").hide()
            $("#display-right-answer").hide()
            $("#good-job").hide()
            $("#not-quite").hide()
            
            $("#answer-one").text(`a) ${trivia[currentQuestion].answers[0]}`)
            $("#answer-two").text(`b) ${trivia[currentQuestion].answers[1]}`)
            $("#answer-three").text(`c) ${trivia[currentQuestion].answers[2]}`)
            $("#answer-four").text(`d) ${trivia[currentQuestion].answers[3]}`)
        }
    }

    function generateTimer () {

        let counter = 5;

        function run() {
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
            $("#seconds").text(counter);
        }
      
        function decrement() {
            counter--;
            if (counter === 0) {
                clearInterval(intervalId);
                unAnswered++
                console.log(unAnswered)
                currentQuestion++
                $(".answer").hide()
                $("#display-right-answer").show()
                $("#timer").hide()
                setTimeout(questionGenerator, 4000);
            }
            $("#seconds").text(counter);
        }

        run ()

    }

    $(".answer").on("click", captureUserAnswer);

    function captureUserAnswer () {
        clearInterval(intervalId);
        questionCheck ()
    
        if (gameStart === false) {
          return false;
        }
    
        let answerIndex = parseInt($(this).attr("value"));
    
        if (answerIndex === trivia[currentQuestion].rightAnswer) {
            correctAnswers++;
            rightAnswer ()
            console.log(correctAnswers);
        } else {
            incorrectAnswers++;
            wrongAnswer ()
            console.log(incorrectAnswers);
        }
    }


    function rightAnswer () {
        currentQuestion++
        $(".answer").hide()
        $(".display-right-answer").hide()
        $("#good-job").show().text("Good Job!")
        $("#timer").hide()

        setTimeout(questionGenerator, 4000);
        let counter = 5;
        clearInterval(intervalId);
        generateTimer ()
    }

    function wrongAnswer () {
        currentQuestion++
        $(".answer").hide()
        $("#display-right-answer").show()
        $("#good-job").hide()
        $("#not-quite").show().text("Not quite!")
        $("#timer").hide()

        setTimeout(questionGenerator, 4000);
        let counter = 5;
        clearInterval(intervalId);
        generateTimer ()
    }


    function questionCheck () {
        if (currentQuestion === trivia.length) {
            gameStart = false;
            initialScreen ()
            $(".score").show()
            clearInterval(intervalId);

            $("#right").show().text(`Correct: ${correctAnswers}`)
            $("#wrong").show().text(`Incorrect: ${incorrectAnswers}`)
            $("#unanswered").show().text(`Unanswered: ${unAnswered}`)
        }
    }

});
