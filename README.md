# Guessing-Game

## Instructions
Continue to build off of your lab 02 by adding additonal functionality to your About Me Guessing Game. Work in the same repository as you did for Lab 2, and modify your README.md file to describe your project with the new features you are adding.

+ As a ***user***, I would like to view a series of data related to the site owners interest so that the I can quickly view more information about them.
Create a “Top Ten” at the bottom of your HTML page as an ordered list in HTML. Some ideas that you can include could be top ten movies, top ten favorite places, or top ten places to visit. You may choose to do whatever ***top ten list*** that you wish.

#### I chose MOVIES

- Convert your work experience and education summary into an unordered list using HTML.


As a ***user***, I would like to be guided to an answer through a series of feedback responses so that I can learn more about the site owner.
- Add a 6th question to the guessing game that takes in a numeric input by prompting the user to guess a number.
- Indicate through an alert if the guess is “too high” or “too low”.
- It should give the user exactly four opportunities to get the correct answer.
- After all attempts have been exhausted, tell the user the correct answer. Consider using a loop of some sort.


As a ***user***, I would like to guess the answer to a question that could have many possibilities so that I can have fun with with a guessing game.
- Add a 7th question that has multiple possible correct answers that are stored in an array.
- Give the user 6 attempts to guess the correct answer.
- The guesses will end once the user guesses a correct answer or they run out of attempts.
- Display all the possible correct answers to the user.
- Consider using a loop of some sort for this question.


As a ***user***, I would like to know my final score so that I can know how well I did.
- Keep track of the total number of correct answers. At the end tell them how many they got correct out of the 7 questions asked.

## Stretch Goals
After completing all of the requirements listed above, you may optionally challenge yourself further by implementing some or all of the following into your application.

+ Attempt to make your code more DRY by putting all of the questions, answers, and responses to the first five yes/no questions into arrays (or even one huge multidimensional array), and modifying the game logic such that a ‘for’ loop will control the flow from question to question.
+ Make the number-guessing question use a random number as its correct answer.

# PROJECT PROGRESS

#### update 01/16/2021 - 
I realize that I have no documentation for this exercise in the README.md so I start it. Now I have to backtrack on what I did when, but that`s ok. I am learning.

#### update 01/15/2021 - 
+ wrap question #7 into an array that cycles through the individual index points of questions; 
+ make the number guessing game into a random number generator;
+ make the navbar fixed so it always displays when user scrolls down;
+ copy the ammended random Number generator guessing game into a seperate script and 
+ make an extra button on the navbar to call that function;
+ change the background for the movies list to make it more readable;
+ link the click-buttons in the nav correspond with local ID points on the same page;

#### update 01/14/2021 -
+ pair programming execrise with Victor Sullyvan - VictorSully79 on Github:
First I was the driver on his repo:
+ forked his repo; git cloned the forked link from my account to my local machine; Victor is the Navigator - I am the Driver;
+ wrapped his js script into one single function and then called the function;
+ git add commit push into my forked directory;
+ pull request towards his main branch repo;
+ role reversal - now I am the Navigator; Victor is the Driver;
+ he forks my Guessing-Game into his Github account; clones it onto his machine;
+ wrap my js script into a single function and then call the function;
+ he A - C - Ps into his forked Github repo;
+ he submits a pullrequest (PR) to my main repo - I accept it - merged; 

#### update 01/13/2021 -
+ merged my resume I had already parked in a paralell html;
+ starting to get the hang of this and really enjoying it;
+ build out question 6 and 7;
+ I manage to workout the look in a loop within a loop - so proud of  myself;
+ question 6 - the guess a number with 4 tries- see main requirements above;
+ question 7 - out of a list of - I chose ***countrie I have been to*** I come up with 13 - user prompt has to verify against 13 possible choices; scrubb against null input - keep track of the correct countries and the correct number of guesses

#### update 01/12/2021 -
+ I create a repo on github 'Guessing-Game' and clone it down to my system;
+ I first build the quiz in JavaScript - 5 questions about me - answer yes or y No or n - change input to lowerCase and verify - add an input scrubber against null or numbers; keep track of correct answers(number of) and document write it (grabElementById - man I love this stuff);
+ after building my about me website I start checking out the work of some of the other students in the class and I see I had taken this way too detailed and got stuck in the minutia;
+ so I change my website and simplify it by exporting the resume details into a seperate html file;
+ I create a gitignore so that it stays local on my machine only;
+ I A-C-P to my repo;