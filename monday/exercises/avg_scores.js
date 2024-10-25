"use strict"

let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];

//arrays
//functions, calling functions, passing parameters, catch return value in variable
//for-loops
//operators to the summing

// function with the for off loop
function getAverageAmount(myScores){
    let sumOfAllScores = 0;
    //for of keeps the count so no i++
for (const score of myScores) {
//  console.log(score)
 sumOfAllScores = sumOfAllScores + score;
//  console.log(sumOfAllScores)

 let average = sumOfAllScores / myScores.length
//  console.log(average)
 // sumOfAllScores += score

 return average
}

}

let myAverageScore = getAverageAmount(myScores)
console.log(myAverageScore.toFixed(2))

console.log("-----------------------")

function addCount(arrayParam){
let addCountLength = 0;
for(let i = 0; i < arrayParam.length; i++){
  addCountLength = addCountLength + arrayParam[i]
}
return addCountLength
}

let counter = addCount(myScores);
console.log("Count: " + counter)

console.log("-----------------------")

let count;

for(let i = 0; i < myScores.length; i++){
  count = myScores.length;
}

console.log(count)

//OR

function getTheCountLength(array){
let count = null;
for(let i = 0; i < array.length; i++){
  count = array.length;
}
return count
}

let lengthTotal = getTheCountLength(myScores);
console.log(lengthTotal)

console.log("-----------------------")

for(let i = 0; i < myScores.length; i++){
    const item = myScores[i]
    console.log(item)
}

console.log("-----------------------")

function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
      let score = scores[i];
      sum = sum + score;
    }
    let average = sum / scores.length;
  
    return average;
  }
  
  let averageScore = getAverage(myScores);
  
  console.log(averageScore.toFixed(2));
  


// function getAverage() {
//   let num1 = 0;
//   let num2 = 0;

//   for (let i = 0; i < myScores.length; i++) {
//     num1 = num1 + myScores[i];
//   }

//   for (x = 0; x < yourScores.length; x++) {
//     num2 = num2 + yourScores[x];
//   }

//   let total = num1 + num2;

//   let average = total / (myScores.length + yourScores.length);

//   console.log(total);
//   console.log(average.toFixed(2));
// }

// getAverage();

