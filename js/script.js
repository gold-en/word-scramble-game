'use strict';
const greetingText = document.querySelector('.greeting');
const wordText = document.querySelector('.word');
const hintText = document.querySelector('.hint span');
const timeText = document.querySelector('.time b');
const inputField = document.querySelector('input');
const refreshBtn = document.querySelector('.refresh-word');
const checkBtn = document.querySelector('.check-word');

greetingText.innerText = greet;

let correctWord, timer;

const initTimer = maxTime => {
  clearInterval(timer);

  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      return (timeText.innerText = maxTime);
    }
    clearInterval(timer);
    alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
    initGame();
  }, 1000);
};

const initGame = function () {
  initTimer(30);

  let randomObj = words[Math.floor(Math.random() * words.length)];
  let wordArray = randomObj.word.split('');

  for (let i = wordArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));

    // shuffling elements of an array using array destructuring
    [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
  }
  wordText.innerText = wordArray.join(''); //converts the array to string
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = '';
  inputField.setAttribute('maxlength', correctWord.length);
};
initGame();

const checkWord = () => {
  let userWord = inputField.value.toLocaleLowerCase();
  if (!userWord) return alert('Please enter a word check');

  if (userWord !== correctWord)
    return alert(`Oops! ${userWord} is not a correct word`);

  alert(`Congrats ${userWord.toUpperCase()} is a correct word`);
  initGame();
};

refreshBtn.addEventListener('click', initGame);
checkBtn.addEventListener('click', checkWord);
