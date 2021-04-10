//make up questions
var questions = {
    {
        title: "Question 1 here";
        choices: ["1", "2", "3", "4"];
        answer: "1";
    }
    {
        title: "Question 2 here";
        choices: ["1", "2", "3", "4"];
        answer: "1";
    }
    {
        title: "Question 3 here";
        choices: ["1", "2", "3", "4"];
        answer: "1";
    }
    {
        title: "Question 4 here";
        choices: ["1", "2", "3", "4"];
        answer: "1";
    }
    {
        title: "Question 5 here";
        choices: ["1", "2", "3", "4"];
        answer: "1";
    }
};

function


var score
var timer

function setTime() {
    // Sets interval in variable
    var timer = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timer);
        gameOver()
      }
  
    }, 1000);
  }

function gameOver() {
    clearInterval(timer)

    <h2>Game Over</h2>
}

//for questions
function 