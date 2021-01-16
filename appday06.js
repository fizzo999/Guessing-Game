// secret number guessing game VARIATION - random number 1-10

function randNumbers() {

  var secretNumber = Math.floor((Math.random() * 10) + 1);
  var guessIt = 0
  var triesLeft = 5
  for (var i = 1; i <= 4; i++) {
    // console.log('loop is running' + i);
    guessIt = prompt('Guess a number between 1 and 10 - you have ' + (triesLeft - i) + ' tries left');
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
  el3.textContent = 'You already knew that number! It only took ' + i + ' tries for you to tune in. Great JOB, master';
}