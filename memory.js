//////// Test ////////
// console.log('test');

//////// Global Variables ////////
const cards = document.querySelector('.card');
const buttons = document.querySelectorAll('.button');
const replay = document.querySelector('#replay');
let matchMessage = document.querySelector('#matchMessage');
// const imageOne = document.querySelector('#imageOne');
// imageOne.src =
//   'https://cdn.vectorstock.com/i/thumb-large/78/18/cute-carrot-character-isolated-element-vector-31257818.webp';
// const imageTwo = document.querySelector('#imageTwo');
// const imageThree = document.querySelector('#imageThree');
// const imageFour = document.querySelector('#imageFour');
let match = false;
let playOver = false;
let gameOver = false;
let clickCount = 0;
let firstCardClicked = '';
let secondCardClicked = '';

let cardImages = ['dog', 'dog', 'cat', 'cat'];
let doneArray = [];
let blankArray = [];
// let doneArray = ['done', 'done', 'done', 'done'];
let flippedCards = [firstCardClicked, secondCardClicked];

//////// Functions ////////
function playAgain() {
  replay.addEventListener('click', () => {
    buttons[0].innerText = '';
    buttons[1].innerText = '';
    buttons[2].innerText = '';
    buttons[3].innerText = '';
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
    return;
    matchMessage.innerText = 'You have a match!';
    // why is this "unreachable code?"
  }
  match = false;
  return;
}

function cardClicked() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', (event) => {
      if (clickCount < 2) {
        buttons[i].innerText = cardImages[i];
        clickCount++;
        if (clickCount === 1) {
          console.log(`clickCount is ${clickCount}`);
          firstCardClicked = cardImages[i];
          console.log(`firstCardClicked is ${firstCardClicked}`);
          console.log(`event target is ${event.target.innerText}`);
        }
        if (clickCount === 2) {
          console.log(`clickCount is ${clickCount}`);
          secondCardClicked = cardImages[i];
          console.log(`secondCardClicked is ${secondCardClicked}`);
          console.log(`event target is ${event.target.innerText}`);
          cardsMatch();
          if (match === true) {
            doneArray.push(firstCardClicked);
            doneArray.push(secondCardClicked);
            // will need to simplify this and make it DRY //
            if (doneArray[0] === buttons[0]) {
              buttons.splice(index, i);
              console.log(buttons);
              console.log(cardImages);
            }

            console.log(firstCardClicked, secondCardClicked);
            console.log(doneArray);
            // need to figure out WHICH cards were clicked so I can interact with the DOM...//
            return;
          } else {
            firstCardClicked = blankArray[i];
            secondCardClicked = blankArray[i];
            console.log(match);
          }
        }
      } else {
        playOver = true;
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
