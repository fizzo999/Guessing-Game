"use strict";
// wrapping all scripts in a function and then calling it
var guestName;
function guessingGame() {
  // ask user name
  var guestName = prompt('Welcome to Fizzo Pannnosch.com ! Please enter your NAME - what follows is a short and simple guessing game about Fizzo');
  var correctAnswer = 0;
  var wrongAnswer = 0;
  // setting up array for questions
  var questions = ['Does Fizzo live in WA state ? ', 'Does Fizzo study at Code Fellows ? ', 'Does Fizzo live in Olympia ? ', 'Does Fizzo love to code ? ', 'Does Fizzo like Electric Cars? '];
  var answers = [];
  var please = 'Please answer Yes or No !'
  var congrats = 'Congratulations, you are correct ';
  var answersTemp = '';
  var incorr = 'Incorrect, Fizzo ';
  var correctEDAnswers = ['does live in WA state.', 'does study at Code Fellows.', 'lives in Olympia.', 'does love to <code>.', 'loves electric cars. Infact he drives one and LOVES it']
  // question 1
  for (var i = 0; i < questions.length; i++) {
    answersTemp = prompt(questions[i] + please);
    // console.log(questions[i] + ' : ' + answersTemp);
    if ((answersTemp == 'yes') || (answersTemp == 'y')) {
      alert(congrats);
      correctAnswer += 1;
      answers.push(answersTemp);
    } else {
      alert(incorr + correctEDAnswers[i]);
      wrongAnswer += 1;
    }
  }
  // final greeting and score message #1 & #2
  var el = document.getElementById('name');
  el.textContent = 'Welcome to my site, ' + guestName;
  var el2 = document.getElementById('name2');
  el2.textContent = guestName + ', You had ' + correctAnswer + ' correct answers and ' + wrongAnswer + ' incorrect answers.';
  // Question number 6 - secret number guessing game
  var secretNumber = Math.floor((Math.random() * 10) + 1);
  var guessIt = 0
  var triesLeft = 5
  for (var i = 1; i <= 4; i++) {
    // console.log('loop is running' + i);
    guessIt = prompt('Guess a RANDOM number between 1 and 10 - you have ' + (triesLeft - i) + ' tries left');
    while ((guessIt > 10) || (guessIt < 1)) {
      // console.log('outside range number ' + guessIt + ' tries left ' + i)
      guessIt = prompt('Please only enter numbers from 1 to 10 ! ' + (triesLeft - i) + ' tries left');
    }
    if (guessIt > secretNumber) {
      alert('too high');
    } else if (guessIt < secretNumber) {
      alert('too low');
    } else if (guessIt == secretNumber) {
      alert('BINGO. You got it.');
      break;
    } else alert('numbers only please');
  }
  // output message #3
  var el3 = document.getElementById('name3');
  el3.textContent = guestName + ', You already knew that number! It only took ' + i + ' tries for you to tune in. Great JOB, master';
  // console.log('loop is done');
  // console.log(guestName);
  // Question number 7 array countries
  var countriesIveBeen = ['Austria', 'Germany', 'Switzerland', 'Russia', 'USA', 'Mexico', 'Canada', 'Spain', 'Portugal', 'Czech Republic', 'Slovania', 'Greece', 'Italy'];
  var correctGuessNumber = 0
  var triesLeft = 6;
  var correctGuessArray = [];
  var answer2 = '';
  for (var i = 0; i < 6; i++) {
    answer2 = prompt('Guess a country Fizzo has been to. You have ' + (triesLeft - i) + ' tries left');
    while (!answer2 || answer2 === '') {
      answer2 = prompt('You have not given me a name of a country Fizzo has been to, please answer!!');
    }
    var counter = correctGuessArray.length;
    for (var b = 0; b < countriesIveBeen.length; b++) {
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
  var countryListString = '';
  for (var i = 0; i < correctGuessArray.length; i++) {
    // console.log('You guessed the following ' + correctGuessArray.length + ' countries correctly' + correctGuessArray[i]);
    countryListString = countryListString + correctGuessArray[i] + ', ';
  }
  // output messages #4
  var el4 = document.getElementById('name4');
  el4.textContent = guestName + ' ! Congratulations ! You guessed ' + correctGuessArray.length + ' countries correctly. You are a great remote viewer. Here is the list of the ' + correctGuessArray.length + ' countries that you guessed correctly:';
  // output message #5
  var el5 = document.getElementById('name5');
  el5.textContent = countryListString;
  // console.log('loop is done');
}
guessingGame(); 