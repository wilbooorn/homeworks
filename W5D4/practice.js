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
teaAndBiscuits();
