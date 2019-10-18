let correctAnswers = 0;
let incorrectAnswers = 0;
let unAnswered = 0;

let trivia = {
    questionOne: {
        question: "question",
        rightAnswer: "right",
        wrongAnswer: ["wrong1", "wrong2", "wrong3"]
    },
    questionTwo: {
        question: "question",
        rightAnswer: "right",
        wrongAnswer: ["wrong1", "wrong2", "wrong3"]
    },
    questionThree: {
        question: "question",
        rightAnswer: "right",
        wrongAnswer: ["wrong1", "wrong2", "wrong3"]
    },
    questionFour: {
        question: "question",
        rightAnswer: "right",
        wrongAnswer: ["wrong1", "wrong2", "wrong3"]
    }
};

function reStart () {
    $("<button>").text("start").appendTo("#button").click(startQuestions)
}

reStart()


function startQuestions () {
    console.log("hello")
    
}



// $("<div>").text(trivia.questionOne.question).appendTo("#question")