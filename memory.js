//////// Test ////////
// console.log('test');

//////// Global Variables ////////
const cards = document.querySelector('.card');
const buttons = document.querySelectorAll('.button');
const replay = document.querySelector('#replay');
let matchMessage = document.querySelector('#matchMessage');
let match = false;
let playOver = false;
let gameOver = false;
let clickCount = 0;
let firstCardClicked = '';
let secondCardClicked = '';
let firstButtonClicked;
// set this equal to document.query to clean it up
let secondButtonClicked;
let delay;
let doneArray = [];
let cardImages = [
  'dog',
  'dog',
  'cat',
  'cat',
  'fish',
  'fish',
  'cow',
  'cow',
  'rabbit',
  'rabbit',
  'bird',
  'bird',
  'turtle',
  'turtle',
  'horse',
  'horse'
];
let flippedCards = [firstCardClicked, secondCardClicked];

//////// Functions ////////
function playAgain() {
  replay.addEventListener('click', () => {
    shuffleArray(cardImages);
    console.log('SHUFFLED: ' + cardImages);
    clickCount = 0;
    console.log(clickCount);
  });
}

function shuffleArray(cardImages) {
  for (let i = cardImages.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = cardImages[i];
    cardImages[i] = cardImages[j];
    cardImages[j] = temp;
  }
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].innerText = cardImages[i];
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'white'; //comment this out to see cards "face up"
    buttons[i].disabled = false;
  }
}

console.log('ORIGINAL: ' + cardImages);
shuffleArray(cardImages);
console.log('SHUFFLED: ' + cardImages);

function cardsMatch() {
  if (firstCardClicked === secondCardClicked) {
    match = true;
    matchMessage.innerText = 'You have a match!';
    document.getElementById(firstButtonClicked).style.backgroundColor =
      '#0f06ff';
    document.getElementById(secondButtonClicked).style.backgroundColor =
      '#0f06ff';
    document.getElementById(firstButtonClicked).style.color = '#0f06ff';
    document.getElementById(secondButtonClicked).style.color = '#0f06ff';
    document.getElementById(firstButtonClicked).style.color = '#0f06ff';
    document.getElementById(secondButtonClicked).style.color = '#0f06ff';
    document.getElementById(secondButtonClicked).disabled = true;
    clickCount = 0;
    doneArray.push(firstButtonClicked);
    doneArray.push(secondButtonClicked);
    checkForWinner();
    return;
  } else {
    match = false;
    matchMessage.innerText = 'Try again!';
    document.getElementById(firstButtonClicked).style.color = 'white';
    document.getElementById(secondButtonClicked).style.color = 'white';
    clickCount = 0;
    return;
  }
}

function timeDelay() {
  delay = setTimeout(cardsMatch, 1000);
}

function checkForWinner() {
  if (doneArray.length === 16) {
    gameOver = true;
    matchMessage.innerText = 'Congratulations, you won!!';
    return;
  } else {
    gameOver = false;
  }
}

function cardClicked() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
      clickCount++;
      if (clickCount === 1) {
        firstCardClicked = cardImages[i];
        firstButtonClicked = event.target.id;
        document.getElementById(firstButtonClicked).style.color = '#0f06ff';
        console.log(clickCount);
        document.getElementById(firstButtonClicked).disabled = true;
      } else if (clickCount === 2) {
        secondCardClicked = cardImages[i];
        secondButtonClicked = event.target.id;
        document.getElementById(secondButtonClicked).style.color = '#0f06ff';
        timeDelay();
        console.log(clickCount);
        document.getElementById(firstButtonClicked).disabled = false;
      }
    });
  }
  playAgain();
}

cardClicked();

// 12 cartoon foods:
// carrot: https://cdn.vectorstock.com/i/thumb-large/78/18/cute-carrot-character-isolated-element-vector-31257818.webp
// onion: https://cdn5.vectorstock.com/i/thumb-large/33/74/cute-smiling-onion-isolated-colorful-vector-31303374.jpg
// avocado: https://cdn3.vectorstock.com/i/thumb-large/99/32/kawaii-cute-avocado-with-a-smile-vector-27289932.jpg
// peach: https://cdn2.vectorstock.com/i/thumb-large/97/71/cute-and-happy-orange-character-vector-32319771.jpg
// strawberry: https://cdn.vectorstock.com/i/thumb-large/34/72/cute-funny-strawberry-isolated-on-white-background-vector-31533472.webp
// peas: https://cdn.vectorstock.com/i/thumb-large/90/53/cute-cartoon-peas-isolated-on-white-background-vector-31909053.webp
// grapes: https://cdn.vectorstock.com/i/thumb-large/19/58/grapes-cute-kawaii-character-vector-29111958.webp
// banana: https://cdn.vectorstock.com/i/thumb-large/93/94/cute-banana-with-happy-funny-face-tropical-fruit-vector-40089394.webp
// broccoli: https://cdn.vectorstock.com/i/thumb-large/25/56/cute-cartoon-broccoli-vector-22022556.webp
// watermelon: https://cdn.vectorstock.com/i/thumb-large/30/38/cute-smiling-watermelon-isolated-colorful-vector-36283038.webp
// beet: https://cdn.vectorstock.com/i/thumb-large/48/74/purple-beet-with-a-face-on-a-white-background-vector-35664874.webp
// lemon: https://cdn.vectorstock.com/i/thumb-large/20/29/cute-smiling-lemon-isolated-colorful-fruit-vector-28362029.webp
// cherry: https://cdn.vectorstock.com/i/thumb-large/75/01/cute-happy-red-cherry-character-vector-31917501.webp
//
