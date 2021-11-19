//////// Test ////////
// console.log('test');

//////// Global Variables ////////
const cards = document.querySelector('.card');
const buttons = document.querySelectorAll('.button');
let match = false;
let playOver = false;
let gameOver = false;
let clickCount = 0;
let firstCardClicked = false;
let secondCardClicked = false;
let cardImages = ['dog', 'dog', 'cat', 'cat'];

//////// Functions ////////

function shuffleArray(cardImages) {
  for (let i = cardImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cardImages[i];
    cardImages[i] = cardImages[j];
    cardImages[j] = temp;
  }
}

console.log('ORIGINAL: ' + cardImages);

shuffleArray(cardImages);

console.log('SHUFFLED: ' + cardImages);

function cardClicked() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      if (clickCount < 2) {
        buttons[i].innerText = cardImages[i];
        clickCount++;
        if (clickCount === 1) {
          console.log(`clickCount is ${clickCount}`);
          firstCardClicked = cardImages[i];
          console.log(`firstCardClicked is ${cardImages[i]}`);
        }
        if (clickCount === 2) {
          console.log(`clickCount is ${clickCount}`);
          secondCardClicked = cardImages[i];
          console.log(`secondCardClicked is ${cardImages[i]}`);
        }
      } else {
        playOver = true;
      }
    });
  }
}

cardClicked();

// Example of how to shuffle an array:
// https://dev.to/codebubb/how-to-shuffle-an-array-in-javascript-2ikj
// Math.floor rounds down to nearest integer
