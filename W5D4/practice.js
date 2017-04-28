const readline = require('readline');

// window.setTimeout(function(){
//   alert("HAMMERTIME");
// }, 5000);
//

// const hammerTime = function (time) {
//   window.setTimeout(function(){
//     console.log(`${time} is hammertime`);
//   }, time);
// }
// hammerTime(5000);


const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function teaAndBiscuits () {
  let first, second;
  reader.question("Do you want some tea?", function(answer1){
    first = answer1;
    console.log(`${answer1}`);
  });
  reader.question("Do you want some biscuits?", function(answer2){
    second = answer2
    console.log(`${answer2}`);
  });
  console.log(`So you ${first} want tea and you ${second} want biscuits.`);
  // reader.close();
}


// function teaAndBiscuits () {
//   reader.question('Would you like some tea?', function (res) {
//     console.log(`You replied ${res}.`);
//     reader.question('Would you like some biscuits?', function (res2) {
//       console.log(`You replied ${res2}.`);
//
//       const first = (res === 'yes') ? 'do' : 'don\'t';
//       const second = (res2 === 'yes') ? 'do' : 'don\'t';
//
//       console.log(`So you ${first} want tea and you ${second} want biscuits.`);
//       reader.close();
//     });
//   });
// }
teaAndBiscuits();
