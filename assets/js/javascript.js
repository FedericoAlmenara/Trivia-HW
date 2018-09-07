const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

const myQuestions = [

    {
        question: "Who won the FIFA World Cup in 1978?",
        answers: {
            a: "Argentina",
            b: "Belgium",
            c: "Chile",
        },
        correctAnswer: "a"
    },
    {
        question: "Who has scored the most goals in FIFA World Cup history?",
        answers: {
            a: "Messi",
            b: "Ronaldo",
            c: "Klose",
        },
        correctAnswer: "c"
    },
    {
        question: "Who won the FIFA World Cup in 1986?",
        answers: {
            a: "Argentina",
            b: "France",
            c: "Italy",
        },
        correctAnswer: "a"
    },
    {
        question: "Which country has the most world Cup Wins?",
        answers: {
            a: "Argentina",
            b: "France",
            c: "Brazil",
        },
        correctAnswer: "c"
    },
];

var button = $("#elem");

function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for (letter in currentQuestion.answers) {
                answers.push(
                    `<label>
                    <input type="radio" name="questions${questionNumber}"
                    value="${letter}">
                    ${letter} :
                    ${currentQuestion.answers[letter]}
                  </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
            );
        }

    );
    quizContainer.innerHTML = output.join('');
    myQuestions.forEach((currentQuestion, questionNumber) => {
        // here goes the code we want to run for each question
        const answers = [];
        for (letter in currentQuestion.answers) {
            answers.push(
                `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join('')} </div>`
        );
    });
    quizContainer.innerHTML = output.join('');
};


function showResults() { };
button.on("click", function () {

    console.log("start")
    var tenSeconds = 10,
        display = document.querySelector('#time');
    startTimer(tenSeconds, display);

    function startTimer(duration, display) {
        var timer = duration, minutes, seconds;
        setInterval(function () {
            minutes = parseInt(timer / 60, 10)
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            display.textContent = minutes + ":" + seconds;
            console.log("D")
            if (--timer == 0) {
                timer = duration;
                clearTimeout(timer);
                console.log("done");

            }
        }, 1000);
    }

});

