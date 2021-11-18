//////// Test ////////
console.log('test');

//////// Global Variables ////////
const cards = document.querySelector('.card');
const cardOne = document.querySelector('#cardOne');
const cardTwo = document.querySelector('#cardTwo');
const cardThree = document.querySelector('#cardThree');
const cardFour = document.querySelector('#cardFour');
const buttons = document.querySelectorAll('.button');
let cardImages = ['dog', 'dog', 'cat', 'cat'];

console.log(cardImages);

// Example of how to shuffle an array:
// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
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
      if (i === 0) {
        console.log('button one has been clicked');
        buttons[i].innerText = cardImages[0];
      } else if (i === 1) {
        console.log('button two has been clicked');
        buttons[i].innerText = cardImages[1];
      } else if (i === 2) {
        console.log('button three has been clicked');
        buttons[i].innerText = cardImages[2];
      } else if (i === 3) {
        console.log('button four has been clicked');
        buttons[i].innerText = cardImages[3];
      }
    });
  }
}

cardClicked();
