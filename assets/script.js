//make up questions
var questions = [
  {
    question: "Question 1",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Question 2",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
  {
    question: "Question 3",
    answers: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
];

var startButton = document.getElementById("start-btn");
var questionContainerEl = document.getElementById("questions-container");
var quizTimer = document.getElementById("timer");
var timeLeft = 100;
var timerInterval;
var currentQuestion = 0;

startButton.addEventListener("click", startGame);

//start of game
function startGame() {
  console.log("started");
  startButton.classList.add("hide");
  questionContainerEl.classList.remove("hide");
  timerInterval = setInterval(function () {
    timeLeft--;
    quizTimer.textContent = "Time Left!" + timeLeft;

    if (timeLeft === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function showQuestions(questionIndex) {
  //call questions
  //question needs to show
  document.getElementById("answer-btns").innerHTML = "";
  var title = questions[questionIndex].question;

  document.getElementById("questions").innerHTML = title;

  for (var i = 0; i < questions[questionIndex].answers.length; i++) {
    var answer = questions[questionIndex].answers[i].text;
    var isCorrect = questions[questionIndex].answers[i].correct;

    var button = document.createElement("button");
    button.classList.add("options");
    button.setAttribute("correct", isCorrect);

    button.innerHTML = answer;
    document.getElementById("answer-btns").append(button);
  }

  var selectAllButtons = document.querySelectorAll(".options");

  for (var i = 0; i < selectAllButtons.length; i++) {
    selectAllButtons[i].addEventListener("click", function () {
      currentQuestion++;

      showQuestions(currentQuestion);
    });
  }

  // answers need to show
  // marker(not loop) ++cou
}
showQuestions(currentQuestion);
// track the answers
//connect score and timer

//end game,
//timer countdown ,wrong answers minus time with wrong answer, what does it display

//scoreboard- show high score with initials
//save to localstorage

// function nextQuestion() {
//   showQuestions(0);
// }

//timer
