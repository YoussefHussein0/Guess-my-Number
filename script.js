'use strict';

const winSound = new Audio('/mp3/kids-saying-yay-sound-effect_3.mp3');
const loseSound = new Audio('/mp3/losing-horn-313723.mp3');

let score = 5;
let clickCount = 0;
let highscore = 0;
let secretNumber;
let currentRange = 20; // default range

// Initialize secretNumber initially
secretNumber = Math.trunc(Math.random() * currentRange) + 1;
// document.querySelector('.number').textContent = secretNumber;

const lose = function () {
  document.querySelector('.message').textContent = 'You lost';
  loseSound.currentTime = 0;
  loseSound.play();
  document.querySelector('.score').textContent = 0;
  document.querySelector('body').style.backgroundColor = '#7a0000ff';
};
const loseLives = function () {
  score--;
  document.querySelector('.score').textContent = score;
};

const gameStart = function () {
  const guess = Number(document.querySelector('.guess').value);
  clickCount++; //no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    // correct guess
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = clickCount;
    winSound.play();
    clickCount = 0;

    // high guess
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      loseLives();
    } else {
      lose();
    }
    // low guess
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      loseLives();
    } else {
      lose();
    }
  }
};

document.querySelector('.choose').addEventListener('change', function () {
  const difficulty = this.value;

  if (difficulty === 'option1') {
    currentRange = 20;
  } else if (difficulty === 'option2') {
    currentRange = 30;
  } else if (difficulty === 'option3') {
    currentRange = 40;
  }

  secretNumber = Math.trunc(Math.random() * currentRange) + 1;
  console.log(`Difficulty set, secret number is ${secretNumber}`);
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    gameStart();
  }
});

document.querySelector('.check').addEventListener('click', function () {
  gameStart();
});

document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';

  secretNumber = Math.trunc(Math.random() * currentRange) + 1;
  console.log(`New game, secret number is ${secretNumber}`);
});
