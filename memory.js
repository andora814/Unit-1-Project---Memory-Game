console.log('test');

const cards = document.querySelector('.card');
const buttons = document.querySelectorAll('.button');

// Event Listeners

function cardClicked() {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      buttons[i].innerText = '1';
      console.log('button has been clicked');
    });
  }
}

cardClicked();
