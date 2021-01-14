secretNumber = 7
var guessIt = 0
var triesLeft = 5
for (var i = 1; i <= 4; i++) {
  // console.log('loop is running' + i);
  guessIt = prompt('Guess a number between 1 and 10 - you have ' + (triesLeft - i) + ' tries left');
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