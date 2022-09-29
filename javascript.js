

let height = 6;
let width = 5;

let row = 1;
let letter = 1;
const wordElements = document.querySelectorAll('.wordle_box')

let gameOver = false;
let congratulations = false;
let alphabets = 0;










let word = validWords[Math.floor(Math.random() * validWords.length)].toUpperCase();
console.log(word)

const buttonElements = document.querySelectorAll('button');

buttonElements.forEach((element) => {
    element.addEventListener('click', function () {
        keypress(element.attributes['data-key'].value)

    });
});

function createWord(key) {
    if (letter < 6) {
        wordElements[row - 1].querySelectorAll('.box')[letter - 1].innerText = key;
        letter += 1;
    }

}


function checkWord() {
    const letterElements = wordElements[row - 1].querySelectorAll('.box');
  
    letterElements.forEach((element, index) => {
        const letter = word.toLowerCase().indexOf(element.innerText.toLowerCase());
        
       
        

        if (letter === index) {
            alphabets += 1;
            element.classList.add('box-green');
        } else if (letter > 0) {
            element.classList.add('box-yellow');
        } else {
            element.classList.add('box-grey');

        }

    });
    if (alphabets === 5) {
        gameOver = true;
        congratulations = true;
        alert('Amazing! You have correctly guessed the word.')
    } else if (row === 6) {
        gameOver = true;
        alert('Have another go. The correct word was : ' + word);
    }

}

function enterWord() {
    if (letter < 6) {
        alert('Invalid count of letters');
    } else {
        checkWord();
        row += 1;
        letter = 1;

    }
}

function deleteLetter() {
    const letterElements = wordElements[row - 1].querySelectorAll('.box');
    for (let index = letterElements.length - 1; index >= 0; index--) {
        const element = letterElements[index];
        if (element.innerText !== '') {
            element.innerText = '';
            letter -= 1;
            break;

        }

    }
}



function keypress(key) {
    if (!gameOver) {
        if (key.toLowerCase() === 'enter') {
            enterWord();
        } else if (key.toLowerCase() === 'delete') {
            deleteLetter();
        } else {
            createWord(key);
        }
    } else {
        alert('Game over! Be sure to return tomorrow if you dare to guess the new word!')

    }


}


