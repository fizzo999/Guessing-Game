
// Question number 7 array
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