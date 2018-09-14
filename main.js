'use strict';
//userName request
var userName = prompt('Welcome to my site, what\'s your name?');
console.log('What is your name?:' + userName);

// //baking question
// var baking = prompt('Does Erin like baking?').toLowerCase();
// if (baking==='yes'|| baking==='y'){
//   alert('Great job, ' + userName);
// }else if(baking==='no'|| baking==='n'){
//   alert('Silly! Of course I love baking, it involves chocolate!');
// }else {
//   alert('Please provide a yes/y or no/n');
// }
// console.log('Does Erin like baking? : ' + baking);

// //changing a tire question
// var tire = prompt('Does Erin know how to change a tire?').toLowerCase();
// if (tire==='yes'|| tire==='y'){
//   alert('Great job, ' + userName);
// }else if(tire==='no'|| tire==='n'){
//   alert('Wrong! Although if it is raining or muddy I conveniently forget I have this knowledge');
// }else {
//   alert('Please provide a yes/y or no/n');
// }
// console.log('Does Erin know how to change a tire? : ' + tire);

// //reptile question
// var reptile = prompt('Does Erin want a reptile for a pet?').toLowerCase();
// if (reptile==='yes'|| reptile==='y'){
//   alert('Ewwwww!!!');
// }else if(reptile==='no'|| reptile==='n'){
//   alert('Correct ' + userName + '!');
// }else {
//   alert('Please provide a yes/y or no/n');
// }
// console.log('Does Erin want a reptile for a pet? : ' + reptile);

// //aunt question
// var aunt = prompt('Is Erin an aunt?').toLowerCase();
// if (aunt==='yes'|| aunt==='y'){
//   alert('Correct! My nephew is the most adorable little human in the world!');
// }else if(aunt==='no'|| aunt==='n'){
//   alert('Incorrect ' + userName);
// }else {
//   alert('Please provide a yes/y or no/n');
// }
// console.log('Is Erin an aunt? : ' + aunt);

// //broccoli question
// var broccoli = prompt('Does Erin like broccoli?').toLowerCase();
// if (broccoli==='yes'|| broccoli==='y'){
//   alert('Ewwwww!!! Yuck');
// }else if(broccoli==='no'|| broccoli==='n'){
//   alert('Correct ' + userName + '! Broccoli is yucky.');
// }else {
//   alert('Please provide a yes/y or no/n');
// }
// console.log('Does Erin like broccoli? : ' + broccoli);

// lego questions
// var legoTurns = 0;
// var legoQuestion = prompt('How many Lego structures are displayed in Erin\'s house?');
// var legoAnswer = 13;

// for(legoTurns = 0; legoTurns < 3; legoTurns++){
//   if(legoQuestion < legoAnswer){
//     legoQuestion = prompt('Too low!');
//     console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
//   }
//   else if(legoQuestion > legoAnswer){
//     legoQuestion = prompt('Seriously?? That might be too many even for me.');
//     console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
//   }
//   else {
//     alert('Correct!');
//     console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
//     break;
//   }
// }
// console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);

// country question
var countryGuesses = 0;
var visitCountry = ['United Kingdom', 'Scotland', 'England', 'France', 'Canada'];
var countryQuestion = prompt('Which countries has Erin visited?').toLowerCase();

for(countryGuesses = 0; countryGuesses < 5; countryGuesses++){
  if(countryQuestion !== visitCountry[countryGuesses]){
    countryQuestion = prompt('I wish! Try again!').toLowerCase();
    console.log ('Which countries has Erin visited? ' + countryQuestion);
  }
  else if(countryQuestion === visitCountry[countryGuesses]){
    countryQuestion = prompt('Yes! It was amazing!');
    console.log ('Which countries has Erin visited? ' + countryQuestion);
  }
}
// console.log ('How many Lego structures are displayed in Erin\'s house? ' + legoQuestion);
