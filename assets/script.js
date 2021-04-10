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

startButton.addEventListener("click", startGame);

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

function nextQuestion() {
  showQuestions(questions);
}
