'use strict';

// first function askGuestName is to prompt/ask for user name - verify input for empty string and store it for later use
function askGuestName() {
  let guestName = prompt(
    'Welcome to Fizzo Pannnosch.com ! Please enter your NAME - what follows is a short and simple guessing game about Fizzo'
  );
  while (guestName === '') {
    guestName = prompt('please enter your name');
  }
  return guestName;
}

// helper function that takes an id attribute as a parameter and a message-string to create the parameter element and add the message-string as its text content
function domElementHelper(idAttribute, messageString) {
  let el = document.getElementById(idAttribute);
  el.textContent = messageString;
}

// helper function for first 5 questions
function firstFiveQuestions(guestName) {
  let correctAnswer = 0,
    wrongAnswer = 0;
  // setting up array for questions
  let questions = [
    'Does Fizzo live in WA state ? ',
    'Does Fizzo study at Code Fellows ? ',
    'Does Fizzo live in Olympia ? ',
    'Does Fizzo love to code ? ',
    'Does Fizzo like Electric Cars? ',
  ];
  let answersTemp = '';
  let correctEDAnswers = [
    'does live in WA state.',
    'does study at Code Fellows.',
    'lives in Olympia.',
    'does love to <code>.',
    'loves electric cars. Infact he drives one and LOVES it',
  ];
  // question number 1 - number 5
  for (let i = 0; i < questions.length; i++) {
    answersTemp = prompt(`${questions[i]} Please answer Yes or No !`);
    if (
      answersTemp.toUpperCase() == 'YES' ||
      answersTemp.toUpperCase() == 'Y'
    ) {
      alert('Congratulations, you are correct ');
      correctAnswer += 1;
    } else {
      alert(`Incorrect, Fizzo ${correctEDAnswers[i]}`);
      wrongAnswer += 1;
    }
  }
  // final greeting and score message #1 & #2 for questions 1 - 5
  domElementHelper('name', `Welcome to my site, ${guestName}`);
  domElementHelper(
    'name2',
    `${guestName}, You had ${correctAnswer} correct answers and ${wrongAnswer} incorrect answers.`
  );
}

// helper function secret number guessing game
function secretNumber(guestName) {
  let secretNumber = Math.floor(Math.random() * 10 + 1);
  let guessIt = 0;
  let triesLeft = 5;
  let guessedItAtRound = 0;
  for (let i = 1; i < triesLeft; i++) {
    guessIt = prompt(
      `Guess a RANDOM number between 1 and 10 - you have ${
        triesLeft - i
      } tries left`
    );
    while (guessIt > 10 || guessIt < 1) {
      guessIt = prompt(
        `Please only enter numbers from 1 to 10 ! ${triesLeft - i} tries left`
      );
    }
    if (guessIt > secretNumber) {
      alert('too high');
    } else if (guessIt < secretNumber) {
      alert('too low');
    } else if (guessIt == secretNumber) {
      alert('BINGO. You got it.');
      guessedItAtRound = i;
      break;
    } else alert('sorry you didn`t guess the secret number - TOO BAD');
  }
  // output message #3
  if (guessedItAtRound > 0) {
    domElementHelper(
      'name3',
      `${guestName}, You already knew that number! It only took ${guessedItAtRound} tries for you to tune in. Great JOB, master`
    );
  } else {
    domElementHelper(
      'name3',
      `${guestName}, You did NOT guess the secret number`
    );
  }
}
// helper function for guessing countries Fizzo has been to
function countriesFizzoHasBeenTo(guestName) {
  let countriesIveBeen = [
    'Austria',
    'Germany',
    'Switzerland',
    'Russia',
    'USA',
    'Mexico',
    'Canada',
    'Spain',
    'Portugal',
    'Czech Republic',
    'Slovania',
    'Greece',
    'Italy',
  ];
  let correctGuessNumber = 0;
  let triesLeft = 6;
  let correctGuessArray = [];
  let answer2 = '';
  let counter = 0;

  for (let i = 0; i < 6; i++) {
    answer2 = prompt(
      'Guess a country Fizzo has been to. You have ' +
        (triesLeft - i) +
        ' tries left'
    );
    while (!answer2 || answer2 === '') {
      answer2 = prompt(
        'You have not given me a name of a country Fizzo has been to, please answer!!'
      );
    }

    counter = correctGuessArray.length;

    for (let b = 0; b < countriesIveBeen.length; b++) {
      // console.log('I have made it this far' + b);
      if (answer2 == countriesIveBeen[b]) {
        correctGuessArray.push(answer2);
        correctGuessNumber++;
      } else {
      }
    }
    if (correctGuessArray.length > counter) {
      alert('That is correct. I have been to ' + answer2);
    } else {
      alert('That is INcorrect. I have NOT been to ' + answer2);
    }
  }

  // preparing output message
  let countryListString = '';
  for (let i = 0; i < correctGuessArray.length; i++) {
    countryListString += `${correctGuessArray[i]}, `;
  }
  // output messages #4
  domElementHelper(
    'name4',
    `${guestName} ! Congratulations ! You guessed ${correctGuessArray.length} countries correctly. You are a great remote viewer. Here is the list of the ${correctGuessArray.length} countries that you guessed correctly:`
  );
  // output message #5
  domElementHelper('name5', countryListString);
}
// main function guessingGame calls subsequent functions to facilitate guessing game
function guessingGame() {
  // ask user name sub function
  let guestName = askGuestName();
  // ask 5 questions about Fizzo sub function
  firstFiveQuestions(guestName);
  // Question number 6 - secret number guessing game
  secretNumber(guestName);
  // Question number 7 array countries
  countriesFizzoHasBeenTo(guestName);
}
guessingGame();
