const randomNumber = parseInt(Math.random() * 100 + 1);

const btn = document.querySelector('.guessSubmit')
const userInput = document.querySelector('.guessField')
const guesses = document.querySelector('.guesses')
const lastResult = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParse')


const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true

if (playGame) {
    btn.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert("Please Enter a Valid Number.");
    } else if (guess < 1) {
        alert("Please Enter The Number Greater Then 0");
    } else if (guess > 100) {
        alert("Please Enter The Number Greater Then 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess();
            displayMessage(`Game Over. Random Number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if(guess === randomNumber){
        displayMessage(`You Guessed it Right`);
        endGame();
    }else if (guess < randomNumber) {
        displayMessage(`Number is too Low`);
    }
    else if (guess > randomNumber) {
        displayMessage(`Number is too High`);
    }
}

function displayGuess(guess) {
    userInput.value = '';
    guesses.innerHTML += `${guess} ,    `;
    numGuess++;
    lastResult.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
  }

  function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNumber = parseInt(Math.random() * 100 + 1);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${11 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
  }
