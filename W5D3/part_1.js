function madLib(verb, adj, noun) {
   return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}
// console.log(madLib('make', 'best', 'guac'));


function isSubstring(searchString, subString){
  return searchString.includes(subString);
}
// console.log(isSubstring("time to program", "time"));
// console.log(isSubstring("Jump for joy", "joys"));


function fizzBuzz(array){
  let solution = []
  for (let i = 0; i < array.length; i++){
    if (array[i] % 3 === 0){
      if (array[i] % 5 !== 0){
        solution.push(array[i]);
      }
    }
    else if (array[i] % 5 === 0){
      solution.push(array[i]);
    }
  }return solution;
}
// console.log(fizzBuzz([1,2,3,4,5,6,7,8,9,10]))

function isPrime(num) {
  for( let i = 2; i <= (num/2); i++){
    if (num % i === 0){
      return false;
    }
  }
  return true
}

// console.log(isPrime(4))
// console.log(isPrime(10))
// console.log(isPrime(15))
// console.log(isPrime(17))

function sumOfNPrimes(num){
  let solution = []
  let sum = 0
  let i = 2
  while (solution.length < num){
    if (isPrime(i)){
      solution.push(i);
    }
    i++;
  }
  solution.forEach(el => sum += el);
  return sum;
}
// console.log(sumOfNPrimes(0));
// console.log(sumOfNPrimes(1));
// console.log(sumOfNPrimes(4));
