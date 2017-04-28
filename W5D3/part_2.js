function printCallback(array){
  for (let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
}

function titleize (names, cb){
  let titles = names.map(function(x){
    return `Mx. ${x} Jingleheimer Schmidt`
  })
  cb(titles)
}

// titleize(["Mary", "Brian", "Leo"], printCallback);

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
}

let steve = new Elephant("Steve", 56, ["sleeping"])

Elephant.prototype.trumpet = function () {
  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!`);
}

Elephant.prototype.grow = function (){
  this.height += 12;
}

Elephant.prototype.addTrick = function(trick) {
  this.tricks.push(trick);
}

Elephant.prototype.play = function () {
  console.log(`${this.name} is ${this.tricks[Math.floor(Math.random()*this.tricks.length)]}!`);
}
// steve.trumpet();
// steve.grow();
// console.log(steve.height);
// steve.addTrick("pooping");
// steve.play();
// steve.play();
// steve.play();
let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.prototype.paradeHelper = function(elephant) {
  console.log(`${elephant.name} is trotting by!`);
}
// herd.forEach(Elephant.prototype.paradeHelper);


function dinerBreakfast() {
  let order = "I'd like cheesy scrambled eggs please.";
  console.log(order);

  return function (food) {
    order = `${order.slice(0, order.length - 8)} and ${food} please.`;
    console.log(order);
  };
};
let order = dinerBreakfast();
order("pancakes");
order("grits");
order("sauasage");
