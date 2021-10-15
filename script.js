'use strict';
var secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  var InputNumber = document.querySelector('.guess').value;

  // When there is No Input.
  if (!InputNumber) {
    document.querySelector('.message').textContent = 'No Input!';
    return;
  }

  // when Not in a Range.
  if (InputNumber > 20 || InputNumber <= 0) {
    document.querySelector('.message').textContent =
      '↹↹ Not In Range(1 - 20). ';
    return;
  }

  // when Guess is Correct.
  if (secretNumber == document.querySelector('.guess').value) {
    if (highScore < score) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.message').textContent = '🎉🎊 Correct Answer ';
  }

  // when guess is Low.
  else if (InputNumber < secretNumber) {
    notEqual();
    document.querySelector('.message').textContent = '📉 Number is Low ';
  }

  // when guess is high.
  else if (secretNumber < InputNumber) {
    document.querySelector('.message').textContent = '📈 Number is High ';
    notEqual();
  }
});

//  Not Equal to secretNumber function
function notEqual() {
  score--;
  document.querySelector('.score').textContent = score;

  if (score <= 0) {
    document.querySelector('.message').textContent = '🤬🤬 You Lost The Game ';
    document.querySelector('body').style.backgroundColor = '#CE2525';
    console.log('🤬🤬 You Lost The Game ');
    return;
  }
}

// Play Again.
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//  reseting the page.
document.querySelector('.reset').addEventListener('click', function () {
  window.location.reload();
});
