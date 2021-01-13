"use strict";


var guestName = prompt('Welcome to Fizzo Pannnosch.com ! Please enter your name - what follows is a short and simple guessing game about Fizzo');
var el = document.getElementById('name');
el.textContent = 'Welcome to my site, ' + guestName;
var el2 = document.getElementById('name2');
el2.textContent = 'Thank you for visiting, ' + guestName;
var userState = prompt('Does Fizzo live in WA state ? Please answer Yes or No');
var userState = userState.toLowerCase();
console.log('Does Fizzo live in WA state ?: ' + userState);
if ((userState == 'yes') || (userState == 'y')) {
  alert('Congratulations, you are correct ');
} else {
  alert('No, incorrect, Fizzo does live in WA state.');
}
var userCity = prompt('Does Fizzo live in Seattle ? Please answer Yes or No');
var userCity = userCity.toLowerCase();
console.log('Does Fizzo live in Seattle ?' + userCity);
if ((userCity == 'no') || (userCity == 'n')) {
  alert('Congratulations, you are correct. Fizzo does NOT live in Seattle.');
} else {
  alert('Incorrect, Fizzo does NOT live in Seattle.');
}
var userCity2 = prompt('Does Fizzo live in Olympia ? Please answer Yes or No');
var userCity2 = userCity2.toLowerCase();
console.log('Does Fizzo live in Olympia ?' + userCity2);
if ((userCity2 == 'yes') || (userCity2 == 'y')) {
  alert('Congratulations, you are correct. Fizzo does live in Olympia.');
} else {
  alert('Incorrect, Fizzo lives in Olympia.');
}
var userCode = prompt('Does Fizzo love to code ? Please answer Yes or No');
var userCode = userCode.toLowerCase();
console.log('Does Fizzo love to code ?' + userCode);
if ((userCode == 'yes') || (userCode == 'y')) {
  alert('Congratulations, you are correct. Fizzo does love to <code>.');
} else {
  alert('Incorrect, Fizzo does love to <code>.');
}
var userCar = prompt('Does Fizzo like Electric Cars? Please answer Yes or No');
var userCar = userCar.toLowerCase();
console.log('Does Fizzo like Electric Cars?' + userCar);
if ((userCode == 'yes') || (userCode == 'y')) {
  alert('Congratulations, you are correct. Fizzo loves electric cars.');
} else {
  alert('Incorrect, Fizzo loves electric cars.');
}
