'use strict';

// let whatYear = function (year) {
//   for (let index = 33; index > 2; index--) {
//     year++;
//     if (year === index) {
//       console.log(year);
//       break;
//     }
//   }
// };
// whatYear(2);

// document.querySelector('.message').textContent = 'Correct Number!';

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
const winSound = new Audio('/mp3/kids-saying-yay-sound-effect_3.mp3');
const loseSound = new Audio('/mp3/losing-horn-313723.mp3');

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 5;
let clickCount = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  clickCount++; //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // correct guess
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    winSound.play();
    document.querySelector('.highscore').textContent = clickCount;
    clickCount = 0;

    // high guess
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      loseSound.play();
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#7a0000ff';
    }
    // low guess
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost';
      loseSound.play();
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#7a0000ff';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
