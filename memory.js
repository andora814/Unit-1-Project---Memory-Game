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
    buttons[0].innerText = '';
    buttons[1].innerText = '';
    buttons[2].innerText = '';
    buttons[3].innerText = '';
    buttons[4].innerText = '';
    buttons[5].innerText = '';
    buttons[6].innerText = '';
    buttons[7].innerText = '';
    buttons[8].innerText = '';
    buttons[9].innerText = '';
    buttons[10].innerText = '';
    buttons[11].innerText = '';
    buttons[12].innerText = '';
    buttons[13].innerText = '';
    buttons[14].innerText = '';
    buttons[15].innerText = '';
    clickCount = 0;
    cardClicked();
  });
}

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

function cardsMatch() {
  if (firstCardClicked === secondCardClicked) {
    match = true;
    matchMessage.innerText = 'You have a match!';
    document.getElementById(firstButtonClicked).style.backgroundColor = 'green';
    document.getElementById(secondButtonClicked).style.backgroundColor =
      'green';
    document.getElementById(firstButtonClicked).style.color = 'green';
    document.getElementById(secondButtonClicked).style.color = 'green';
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
    buttons[i].innerText = cardImages[i];
    buttons[i].style.backgroundColor = 'white';
    buttons[i].style.color = 'white'; //comment this out to see cards "face up"
    buttons[i].addEventListener('click', (event) => {
      if (clickCount < 2) {
        clickCount++;
        if (clickCount === 1) {
          firstCardClicked = cardImages[i];
          firstButtonClicked = event.target.id;
          document.getElementById(firstButtonClicked).style.color = 'black';
          console.log(clickCount);
          document.getElementById(firstButtonClicked).disabled = true;
        }
        if (clickCount === 2) {
          secondCardClicked = cardImages[i];
          secondButtonClicked = event.target.id;
          document.getElementById(secondButtonClicked).style.color = 'black';
          timeDelay();
          console.log(clickCount);
          document.getElementById(firstButtonClicked).disabled = false;
        }
      } else {
        playOver = true;
        playAgain();
      }
    });
  }
}

cardClicked();
playAgain();

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
// egg: https://cdn.vectorstock.com/i/thumb-large/95/42/egg-icon-kawaii-logo-a-food-vector-38099542.webp
// almond: https://cdn.vectorstock.com/i/thumb-large/44/39/cute-almond-on-a-white-background-vector-35664439.webp
// lemon: https://cdn.vectorstock.com/i/thumb-large/20/29/cute-smiling-lemon-isolated-colorful-fruit-vector-28362029.webp
