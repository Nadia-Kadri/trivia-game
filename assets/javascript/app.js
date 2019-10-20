let trivia = [

    {question: "What is Europe's most mountainous country?",
        answers: ["Ireland", "Belgium", "Sweden", "Switzerland"],
        rightAnswer: 3,
        imageSrc: "assets/images/switzerland.png"
    },

    {question: "What country has the most natural lakes?",
        answers: ["United States", "Canada", "Australia", "India"],
        rightAnswer: 1,
        imageSrc: "assets/images/canada.png"
    },
    
    {question: "Which African nation has the most pyramids?",
        answers: ["Sudan", "Egypt", "Algeria", "Libya"],
        rightAnswer: 0,
        imageSrc: "assets/images/sudan.png"
    },

    {question: "In what country is the Valley of the Kings located?",
        answers: ["China", "Egypt", "Indonesia", "Australia"],
        rightAnswer: 1,
        imageSrc: "assets/images/egypt.png"
    },
    
    {question: "What is the largest country in South America?",
        answers: ["Argentina", "Brazil", "Peru", "Colombia"],
        rightAnswer: 1,
        imageSrc: "assets/images/brazil.png"
    },

    {question: "Which country contains the Biblical rivers of the Tigris and the Euphrates?",
        answers: ["Tanzania", "Morocco", "Iraq", "Sudan"],
        rightAnswer: 2,
        imageSrc: "assets/images/iraq.png"
    },

    {question: "Okinawa is a volcano in which country?",
        answers: ["Singapore", "Malaysia", "China", "Japan"],
        rightAnswer: 3,
        imageSrc: "assets/images/japan.png"
    }

];



let correctAnswers = 0;
let incorrectAnswers = 0;
let unAnswered = 0;

let gameStart = false;
let currentQuestion = 0;
let counter = 15;
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
        $("#flag").hide()
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
            $("#flag").hide()
            $("#not-quite").hide()
            $("#start-image").hide()
            
            $("#answer-one").text(`a) ${trivia[currentQuestion].answers[0]}`)
            $("#answer-two").text(`b) ${trivia[currentQuestion].answers[1]}`)
            $("#answer-three").text(`c) ${trivia[currentQuestion].answers[2]}`)
            $("#answer-four").text(`d) ${trivia[currentQuestion].answers[3]}`)
        }
    }

    function generateTimer () {

        let counter = 15;

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
                
                $("#display-right-answer").show().text(`The correct answer was: ${trivia[currentQuestion].answers[trivia[currentQuestion].rightAnswer]}`)

                $("#flag").show()
                $("#flag-image").attr("src", trivia[currentQuestion].imageSrc)

                currentQuestion++

                $(".answer").hide()
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
        } else {
            incorrectAnswers++;
            wrongAnswer ()
        }
    }


    function rightAnswer () {
        $("#good-job").show().text("Good Job!")

        $("#flag").show()
        $("#flag-image").attr("src", trivia[currentQuestion].imageSrc)

        currentQuestion++

        $(".answer").hide()
        $(".display-right-answer").hide()
        $("#timer").hide()

        setTimeout(questionGenerator, 4000);
        let counter = 15;
        clearInterval(intervalId);
        generateTimer ()
    }

    function wrongAnswer () {
        
        $("#display-right-answer").show().text(`The correct answer was: ${trivia[currentQuestion].answers[trivia[currentQuestion].rightAnswer]}`)

        $("#flag").show()
        $("#flag-image").attr("src", trivia[currentQuestion].imageSrc)

        currentQuestion++

        $(".answer").hide()
        $("#good-job").hide()
        $("#not-quite").show().text("Not quite!")
        $("#timer").hide()

        setTimeout(questionGenerator, 4000);
        let counter = 15;
        clearInterval(intervalId);
        generateTimer ()
    }


    function questionCheck () {
        if (currentQuestion === trivia.length) {
            gameStart = false;
            currentQuestion = 0;
            initialScreen ()
            $(".score").show()
            clearInterval(intervalId);

            $("#right").show().text(`Correct: ${correctAnswers}`)
            $("#wrong").show().text(`Incorrect: ${incorrectAnswers}`)
            $("#unanswered").show().text(`Unanswered: ${unAnswered}`)
        }
    }

});
