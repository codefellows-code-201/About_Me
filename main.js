'use strict';

//global variable to count correct answers
var correctAnswers = 0;

//userName request
var userName;

var userNameQuestion = function(){

  do{
    userName = prompt('What is your name?');
  }while(!userName);

  console.log('What is your name?:' + userName);
  alert('Welcome to my about me guessing game ' + userName);

  return userNameQuestion;
};

//baking question
var bakingQuestion = function(){

  var baking = prompt('Does Erin like baking?').toLowerCase();

  if (baking==='yes'|| baking==='y'){
    alert('Great job, ' + userName);
    correctAnswers ++;
  }else if(baking==='no'|| baking==='n'){
    alert('Silly! Of course I love baking, it involves chocolate!');
  }else {
    alert('Please provide a yes/y or no/n');
  }

  console.log('Does Erin like baking? : ' + baking);

  return bakingQuestion;
};

// changing a tire question
var tireQuestion = function(){

  var tire = prompt('Does Erin know how to change a tire?').toLowerCase();

  if (tire==='yes'|| tire==='y'){
    alert('Great job, ' + userName);
    correctAnswers++;
  }else if(tire==='no'|| tire==='n'){
    alert('Wrong! Although if it is raining or muddy I conveniently forget I have this knowledge');
  }else {
    alert('Please provide a yes/y or no/n');
  }

  console.log('Does Erin know how to change a tire? : ' + tire);

  return tireQuestion;
};

// //reptile question
var reptileQuestion = function(){

  var reptile = prompt('Does Erin want a reptile for a pet?').toLowerCase();

  if (reptile==='yes'|| reptile==='y'){
    alert('Ewwwww!!!');
  }else if(reptile==='no'|| reptile==='n'){
    alert('Correct ' + userName + '!');
    correctAnswers++;
  }else {
    alert('Please provide a yes/y or no/n');
  }

  console.log('Does Erin want a reptile for a pet? : ' + reptile);

  return reptileQuestion;
};

// //aunt question
var auntQuestion = function(){

  var aunt = prompt('Is Erin an aunt?').toLowerCase();

  if (aunt==='yes'|| aunt==='y'){
    alert('Correct! My nephew is the most adorable little human in the world!');
    correctAnswers++;
  }else if(aunt==='no'|| aunt==='n'){
    alert('Incorrect ' + userName);
  }else {
    alert('Please provide a yes/y or no/n');
  }

  console.log('Is Erin an aunt? : ' + aunt);

  return auntQuestion;
};

// //broccoli question
var broccoliQuestion = function(){

  var broccoli = prompt('Does Erin like broccoli?').toLowerCase();

  if (broccoli==='yes'|| broccoli==='y'){
    alert('Ewwwww!!! Yuck');
  }else if(broccoli==='no'|| broccoli==='n'){
    alert('Correct ' + userName + '! Broccoli is yucky.');
    correctAnswers++;
  }else {
    alert('Please provide a yes/y or no/n');
  }

  console.log('Does Erin like broccoli? : ' + broccoli);

  return broccoliQuestion;
};

// lego questions
var legoStructureQuestion = function(){

  var legoQuestion = parseInt(prompt('How many Lego structures are displayed in Erin\'s house?'));
  var legoAnswer = 13;

  for(var legoTurns = 0; legoTurns < 3; legoTurns++){
    if(legoQuestion < legoAnswer){
      legoQuestion = parseInt(prompt('Too low!'));
      console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
    }
    else if(legoQuestion > legoAnswer){
      legoQuestion = parseInt(prompt('Seriously?? That might be too many even for me.'));
      console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
    }
    else if (legoAnswer===legoQuestion){
      break;

    }else {
      legoQuestion = parseInt(prompt(('Please enter a number')));
    }
  }
  if(legoAnswer === legoQuestion){
    alert('Correct!');
    console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
    correctAnswers++;
  }

  console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);

  return legoStructureQuestion;
};

// country question
var travelQuestion = function(){

  var country = ['UNITED KINGDOM', 'SCOTLAND', 'ENGLAND', 'FRANCE', 'CANADA'];
  var answeredCorrectly = false;
  var guessCounter = 6;

  do{
    var countryAnswer = prompt('Which countries has Erin visited?').toUpperCase();

    for(var i = 0; i < country.length; i++){
      if(country[i] === countryAnswer){
        answeredCorrectly = true;
        break;
      }
    }

    if(answeredCorrectly){
      alert('Yes! It was amazing!');
      console.log(countryAnswer);
      correctAnswers++;

    } else {
      alert('I wish! Try again!');
    }
    guessCounter--;
  }while(guessCounter > 0 && !answeredCorrectly);

  return travelQuestion;
};

console.log(correctAnswers);

//Quiz Score
var quizResults = function(){

  var quizScore = Math.round(correctAnswers/7*100);
  alert('You scored ' + quizScore + '%');

  return quizResults;
};

//Functions to call
// userNameQuestion();
// bakingQuestion();
// tireQuestion();
// reptileQuestion();
// auntQuestion();
// broccoliQuestion();
// legoStructureQuestion();
// travelQuestion();
// quizResults();
