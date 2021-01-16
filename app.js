"use strict";

// wrapping all scripts in a function and then calling it

var guestName;

function guessingGame() {

  // ask user name
  var guestName = prompt('Welcome to Fizzo Pannnosch.com ! Please enter your NAME - what follows is a short and simple guessing game about Fizzo');
  var correctAnswer = 0;
  var wrongAnswer = 0;


  // question 1
  var userState = prompt('Does Fizzo live in WA state ? Please answer Yes or No');
  var userState = userState.toLowerCase();
  console.log('Does Fizzo live in WA state ?: ' + userState);
  if ((userState == 'yes') || (userState == 'y')) {
    alert('Congratulations, you are correct ');
    correctAnswer += 1;
  } else {
    alert('No, incorrect, Fizzo does live in WA state.');
    wrongAnswer += 1;
  }

  // question 2
  var userCity = prompt('Does Fizzo live in Seattle ? Please answer Yes or No');
  var userCity = userCity.toLowerCase();
  console.log('Does Fizzo live in Seattle ?' + userCity);
  if ((userCity == 'no') || (userCity == 'n')) {
    alert('Congratulations, you are correct. Fizzo does NOT live in Seattle.');
    correctAnswer += 1;
  } else {
    alert('Incorrect, Fizzo does NOT live in Seattle.');
    wrongAnswer += 1;
  }

  // question 3
  var userCity2 = prompt('Does Fizzo live in Olympia ? Please answer Yes or No');
  var userCity2 = userCity2.toLowerCase();
  console.log('Does Fizzo live in Olympia ?' + userCity2);
  if ((userCity2 == 'yes') || (userCity2 == 'y')) {
    alert('Congratulations, you are correct. Fizzo does live in Olympia.');
    correctAnswer += 1;
  } else {
    alert('Incorrect, Fizzo lives in Olympia.');
    wrongAnswer += 1;
  }

  // question 4
  var userCode = prompt('Does Fizzo love to code ? Please answer Yes or No');
  var userCode = userCode.toLowerCase();
  console.log('Does Fizzo love to code ?' + userCode);
  if ((userCode == 'yes') || (userCode == 'y')) {
    alert('Congratulations, you are correct. Fizzo does love to <code>.');
    correctAnswer += 1;
  } else {
    alert('Incorrect, Fizzo does love to <code>.');
    wrongAnswer += 1;
  }

  // question 5
  var userCar = prompt('Does Fizzo like Electric Cars? Please answer Yes or No');
  var userCar = userCar.toLowerCase();
  console.log('Does Fizzo like Electric Cars?' + userCar);
  if ((userCode == 'yes') || (userCode == 'y')) {
    alert('Congratulations, you are correct. Fizzo loves electric cars.');
    correctAnswer += 1;
  } else {
    alert('Incorrect, Fizzo loves electric cars.');
    wrongAnswer += 1;
  }

  // final greeting and score
  var el = document.getElementById('name');
  el.textContent = 'Welcome to my site, ' + guestName;
  var el2 = document.getElementById('name2');
  el2.textContent = guestName + ', You had ' + correctAnswer + ' correct answers';
  // Question number 6 - secret number guessing game
  var secretNumber = 7
  var guessIt = 0
  var triesLeft = 5
  for (var i = 1; i <= 4; i++) {
    // console.log('loop is running' + i);
    guessIt = prompt('Guess a number between 1 and 10 - you have ' + (triesLeft - i) + ' tries left');
    while ((guessIt > 10) || (guessIt < 1)) {
      console.log('outside range number ' + guessIt + ' tries left ' + i)
      guessIt = prompt('Please only enter numbers from 1 to 10 ! ' + (triesLeft - i) + ' tries left');
    }
    if (guessIt > secretNumber) {
      alert('too high');
    } else if (guessIt < secretNumber) {
      alert('too low');
    } else if (guessIt == secretNumber) {
      alert('BINGO');
      break;
    } else alert('numbers only please');
  }
  var el3 = document.getElementById('name3');
  el3.textContent = guestName + ', You already knew that number! It only took ' + i + ' tries for you to tune in. Great JOB, master';
  console.log('loop is done');
  console.log(guestName);
  // return guestName;


  // Question number 7 array countries

  var countriesIveBeen = ['Austria', 'Germany', 'Switzerland', 'Russia', 'USA', 'Mexico', 'Canada', 'Spain', 'Portugal', 'Czech Republic', 'Slovania', 'Greece', 'Italy'];
  var correctGuessNumber = 0
  var triesLeft = 6;
  var correctGuessArray = [];
  var answer = '';
  for (var i = 0; i < 6; i++) {
    // console.log('loop is running' + i);
    answer = prompt('Guess a country Fizzo has been to. You have ' + (triesLeft - i) + ' tries left');
    while (!answer || answer === '') {
      console.log('You have not given me a name of a country Fizzo has been to');
      answer = prompt('You have not given me a name of a country Fizzo has been to, please answer!!');
    }
    var counter = correctGuessArray.length;
    for (var b = 0; b < countriesIveBeen.length; b++) {
      console.log('I have made it this far' + b);
      if (answer == countriesIveBeen[b]) {
        correctGuessArray.push(answer);
        correctGuessNumber++;
      } else {
      }
    }
    if (correctGuessArray.length > counter) {
      alert('That is correct. I have been to ' + answer);
    } else {
      alert('That is INcorrect. I have NOT been to ' + answer);
    }
  }

  var countryListString = '';
  for (var i = 0; i < correctGuessArray.length; i++) {
    console.log('You guessed the following ' + correctGuessArray.length + ' countries correctly' + correctGuessArray[i]);
    countryListString = countryListString + correctGuessArray[i] + ', ';
  }
  console.log(countryListString);
  var el4 = document.getElementById('name4');
  el4.textContent = guestName + ' ! Congratulations ! You guessed ' + correctGuessArray.length + ' countries correctly. You are a great remote viewer.' + ' Here is the list of the ' + correctGuessArray.length + ' countries that you guessed correctly:';
  var el5 = document.getElementById('name5');
  el5.textContent = countryListString;
  console.log('loop is done');



}
guessingGame(); 