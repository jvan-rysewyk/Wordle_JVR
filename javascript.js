

let height = 6;
let width = 5;

let row = 1;
let letter = 1;
const wordElements = document.querySelectorAll('.wordle_box')

let gameOver = false;
let congratulations = false;
let alphabets = 0;









// generating a random word from the array of validWords
let word = validWords[Math.floor(Math.random() * validWords.length)].toUpperCase();
console.log(word)
//selecting all buttons from the HTML file and listening for the click.
// realised on the day of presentation to fix on eof the problems i have is be to change the way i had created the buttons i should have used a (class) and an (id).
const buttonElements = document.querySelectorAll('button');
buttonElements.forEach((element) => {
    element.addEventListener('click', function () {
        keypress(element.attributes['data-key'].value)

    });
});
// adding letters to the row 
function createWord(key) {
    if (letter < 6) {
        wordElements[row - 1].querySelectorAll('.box')[letter - 1].innerText = key;
        letter += 1;
    }

}

// checking the word with random word is equal to the letter elements is correct and adding the color to the box. this is were i wasn't able to have a letter checker to check all letters because of the key-data input above.
function checkWord() {
 alphabets = 0;
    const letterElements = wordElements[row - 1].querySelectorAll('.box');
// console.log(letterElements)
    letterElements.forEach((element, index) => {
        
        const letter = word.toLowerCase().indexOf(element.innerText.toLowerCase());

// if the letter is equal to the index of alphabets pend green , yellow , grey to box
         if (letter === index) {
            alphabets += 1;
            element.classList.add('box-green');
        } else if (letter >= 1) {
            element.classList.add('box-yellow');
        } else {
            element.classList.add('box-grey');

        }

    });
    // if the word is correct allert () in you get to your last guess the alert game over()
    if (alphabets === 5) {
        gameOver = true;
        congratulations = true;
        alert('Amazing! You have correctly guessed the word.')
    } else if (row === 6) {
        gameOver = true;
        alert('Have another go. The correct word was : ' + word);
    }

}
// if total number of letters is below 6 then alert not enough letters.
// otherwise continue to the nbext line.

function enterWord() {
    if (letter < 6) {
        alert('Invalid count of letters');
    } else {
        checkWord();
        row += 1;
        letter = 1;

    }
}
// creating a Delete function for when the delete button is pressed on the keyboard. 
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

// keypress is evoking the functions created above and it getting to the end alerting game over.

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


