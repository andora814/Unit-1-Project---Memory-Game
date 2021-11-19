//////// Test ////////
console.log('test');

//////// Global Variables ////////
const cards = document.querySelector('.card');
const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');
const cardThree = document.querySelector('#cardThree');
const cardFour = document.querySelector('#cardFour');
const buttons = document.querySelectorAll('.button');
let match = false;
let playOver = false;
let gameOver = false;
let clickCount = 0;
let firstCardClicked = false;
let secondCardClicked = false;
let cardImages = ['dog', 'dog', 'cat', 'cat'];

console.log(cardImages);

// Example of how to shuffle an array:
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// Math.floor rounds down to nearest integer
const shuffleArray = (cardImages) => {
  for (let i = cardImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cardImages[i];
    cardImages[i] = cardImages[j];
    cardImages[j] = temp;
  }
};
shuffleArray(cardImages);
console.log(cardImages);

//////// Event Listeners ////////

function cardClicked() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      console.log('button has been clicked');
      buttons[i].innerText = cardImages[i];
      clickCount++;
      console.log(clickCount);
    });
  }
}

cardClicked();
