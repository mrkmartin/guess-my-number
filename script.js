'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Helper function to update text content
const setTextContent = (selector, message) => {
  document.querySelector(selector).textContent = message;
};

// Helper function to reset styles
const resetStyles = () => {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// Event handler for the 'check' button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    setTextContent('.message', '⛔ No number!');
  } else if (guess === secretNumber) {
    setTextContent('.message', '🎉 Correct Number!');
    setTextContent('.number', secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      setTextContent('.highscore', highscore);
    }
  } else {
    if (score > 1) {
      setTextContent(
        '.message',
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!'
      );
      score--;
      setTextContent('.score', score);
    } else {
      setTextContent('.message', '💥 You lost the game!');
      setTextContent('.score', 0);
    }
  }
});

// Event handler for the 'again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  setTextContent('.score', score);
  setTextContent('.number', '?');
  setTextContent('.message', 'Start guessing...');
  document.querySelector('.guess').value = '';
  resetStyles();
});
