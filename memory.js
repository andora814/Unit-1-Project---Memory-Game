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
let carrot =
  'https://cdn.vectorstock.com/i/thumb-large/78/18/cute-carrot-character-isolated-element-vector-31257818.webp';
let avocado =
  'https://cdn3.vectorstock.com/i/thumb-large/99/32/kawaii-cute-avocado-with-a-smile-vector-27289932.jpg';
let strawberry =
  'https://cdn.vectorstock.com/i/thumb-large/34/72/cute-funny-strawberry-isolated-on-white-background-vector-31533472.webp';
let grapes =
  'https://cdn.vectorstock.com/i/thumb-large/19/58/grapes-cute-kawaii-character-vector-29111958.webp';
let broccoli =
  'https://cdn.vectorstock.com/i/thumb-large/25/56/cute-cartoon-broccoli-vector-22022556.webp';
let watermelon =
  'https://cdn.vectorstock.com/i/thumb-large/30/38/cute-smiling-watermelon-isolated-colorful-vector-36283038.webp';
let beet =
  'https://cdn.vectorstock.com/i/thumb-large/48/74/purple-beet-with-a-face-on-a-white-background-vector-35664874.webp';
let lemon =
  'https://cdn.vectorstock.com/i/thumb-large/20/29/cute-smiling-lemon-isolated-colorful-fruit-vector-28362029.webp';

let cardImages = [
  carrot,
  carrot,
  avocado,
  avocado,
  strawberry,
  strawberry,
  grapes,
  grapes,
  broccoli,
  broccoli,
  watermelon,
  watermelon,
  beet,
  beet,
  lemon,
  lemon
];

// let cardImages = [
//   'carrot',
//   'carrot',
//   'avocado',
//   'avocado',
//   'strawberry',
//   'strawberry',
//   'grapes',
//   'grapes',
//   'broccoli',
//   'broccoli',
//   'watermelon',
//   'watermelon',
//   'beet',
//   'beet',
//   'lemon',
//   'lemon'
// ];
let flippedCards = [firstCardClicked, secondCardClicked];

//////// Functions ////////
function playAgain() {
  replay.addEventListener('click', () => {
    shuffleArray(cardImages);
    console.log('SHUFFLED: ' + cardImages);
    clickCount = 0;
    matchMessage.innerText = 'Good Luck!';
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
    buttons[i].style.background = cardImages[i];
    // buttons[i] = cardImages[i];
    // buttons[i].style.backgroundColor = 'white';
    // buttons[i].style.color = 'white'; //comment this out to see cards "face up"
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
    document.getElementById(firstButtonClicked).style.backgroundImage = `none`;
    document.getElementById(secondButtonClicked).style.backgroundImage = `none`;
    document.getElementById(firstButtonClicked).style.backgroundColor = `black`;
    document.getElementById(
      secondButtonClicked
    ).style.backgroundColor = `black`;
    document.getElementById(firstButtonClicked).disabled = true;
    document.getElementById(secondButtonClicked).disabled = true;
    clickCount = 0;
    doneArray.push(firstButtonClicked);
    doneArray.push(secondButtonClicked);
    checkForWinner();
    return;
  } else {
    match = false;
    matchMessage.innerText = 'Try again!';
    document.getElementById(
      firstButtonClicked
    ).style.backgroundImage = `url(data:image/jpeg;base64,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)`;
    document.getElementById(
      secondButtonClicked
    ).style.backgroundImage = `url(data:image/jpeg;base64,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)`;
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
        document.getElementById(
          firstButtonClicked
        ).style.backgroundImage = `url(${cardImages[i]})`;
        document.getElementById(firstButtonClicked).disabled = true;
        console.log(firstCardClicked);
        console.log(firstButtonClicked);
      } else if (clickCount === 2) {
        secondCardClicked = cardImages[i];
        secondButtonClicked = event.target.id;
        document.getElementById(
          secondButtonClicked
        ).style.backgroundImage = `url(${cardImages[i]})`;
        timeDelay();
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
// picnic blanket background : https://thumbs.dreamstime.com/b/red-crumpled-linen-gingham-picnic-tablecloth-white-30754821.jpg
