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
let picnicBasket =
  'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fclipart-library.com%2Fimages_k%2Ftransparent-basket%2Ftransparent-basket-1.png&f=1&nofb=1';
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
let flippedCards = [firstCardClicked, secondCardClicked];

//////// Functions ////////
function playAgain() {
  replay.addEventListener('click', () => {
    shuffleArray(cardImages);
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
    buttons[i].disabled = false;
    buttons[i].style.backgroundImage = `url(${picnicBasket})`;
    buttons[i].style.backgroundColor = `white`;
  }
}

shuffleArray(cardImages);

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
    ).style.backgroundImage = `url(${picnicBasket})`;
    document.getElementById(
      secondButtonClicked
    ).style.backgroundImage = `url(${picnicBasket})`;
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
    matchMessage.innerText = 'Congratulations, you won!!!';
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
        document.getElementById(firstButtonClicked).style.backgroundSize =
          '100px 120px';
        document.getElementById(firstButtonClicked).disabled = true;
      } else if (clickCount === 2) {
        secondCardClicked = cardImages[i];
        secondButtonClicked = event.target.id;
        document.getElementById(
          secondButtonClicked
        ).style.backgroundImage = `url(${cardImages[i]})`;
        document.getElementById(secondButtonClicked).style.backgroundSize =
          '100px 120px';
        timeDelay();
        document.getElementById(firstButtonClicked).disabled = false;
      }
    });
  }
  playAgain();
}

cardClicked();
