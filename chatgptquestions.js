const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = []


function getEvenNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
        evenNumbers.push(arr[i])
        console.log(evenNumbers)
        }
    }
    return evenNumbers
}
let result =  getEvenNumbers(numbers)
console.log(result)


console.log("-------------------")

const numberSection = [-3, 5, -1, 8, 0, -2, 7];

function sumPositiveNumbers(arr){
    let total = 0
for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
    total = total + arr[i]
    }
}
return total
}

let sumTotal = sumPositiveNumbers(numberSection)
console.log(sumTotal)

console.log("-------------------")

const fruits = ['apple', 'banana', 'orange', 'apple', 'kiwi', 'apple'];
const valueToCount = 'apple';

function countOccurrences(arr,value){
    let count = 0;
    for(let i = 0; i < arr.length; i++){
     if(arr[i] === value){
        count++
     }
    
    }
return count;
}

let display = countOccurrences(fruits, valueToCount)
console.log(display)

console.log("-------------------")

const numArray = [12,5,8,130,44];

function findMaximum(arr){
    let maxNum = arr[0]; // Start with the first element as the maximum
    for(let i = 1; i < arr.length; i++){ // Loop through starting from the second element
        if(arr[i] > maxNum){ // Compare each number with the current maximum
            maxNum = arr[i] // Update maxNum if a larger number is found
        }
    }
    return maxNum
}

let findMax = findMaximum(numArray)
console.log(findMax)

console.log("-------------------")

const array = [1, 2, 3, 4, 5];

function reversedArray(arr){
    let reverseArray = [];
    for(let i = arr.length - 1; i >= 0; i--){
        reverseArray.push(arr[i])
    }
    return reverseArray;
}

let reversal = reversedArray(array)
console.log(reversal)

console.log("-------------------")

const words = ['hello', 'world', 'JavaScript', 'is', 'fun'];
const maxLength = 4;

function filterByLength(arr, maxLength){
    const filteredWords = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length <= maxLength ){
            filteredWords.push(arr[i])
        }
    }
    return filteredWords
}

let stringLength = filterByLength(words, maxLength);
console.log(stringLength)

//////////////////////////////////////////////////////Array of objects

console.log("-------------------")

const people = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 19 },
    { name: 'Bob', age: 30 },
    { name: 'Alice', age: 22 }
];
const minAge = 21;

function filterByAge(arr, minAge){
    let result = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].age > minAge){
result.push(arr[i])
        }
    }
    return  result
}

let displayAges = filterByAge(people,minAge)
console.log(displayAges)

console.log("-------------------")

const products = [
    { name: 'Laptop', price: 1200 },
    { name: 'Phone', price: 800 },
    { name: 'Tablet', price: 500 },
    { name: 'Monitor', price: 300 }
];
const maxPrice = 600;

function pricing(arr,pricing){
    let block = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price < pricing){
        block.push(arr[i])
        }
    }
    return block
}

let displayProducts = pricing(products,maxPrice);
console.log(displayProducts)

let studentsOfClass = [
    { name: "Zephaniah", average: 96.75 },
    { name: "Pursalane", average: 94.2 },
    { name: "Siddalee", average: 83.33 },
    { name: "Ian", average: 89.50 },
    { name: "Elisha", average: 94.50 },
    { name: "Ezra", average: 96.50 },
]

function averageScore(arra){
    let totalAmount = 0
    for(let i = 0; i < arra.length; i++){
       totalAmount = totalAmount + arra[i].average;
    }

    let overall = totalAmount /arra.length;

    return overall
}

let classAver = averageScore(studentsOfClass);
console.log(classAver.toFixed(2))

////////////////////////////////////////////////For Loops of two

let word = ["race", "car", "mad", "dam", "live", "evil"];

function findPalindromePairs(words) {
    let palindromePairs = [];
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j) {
                let combined = words[i] + words[j];
                if (combined === combined.split('').reverse().join('')) {
                    palindromePairs.push([words[i], words[j]]);
                }
            }
        }
    }
    return palindromePairs;
}

let showTheCompare = findPalindromePairs(word)

console.log(showTheCompare); 

let reverseNumbers = [1,2,3,4,5,6]

function reverseArray(arr) {
    let reversed = [];
   for(let i = 0; i < arr.length; i++){
    reversed.unshift(arr[i])
   }
    return reversed;
}

let showNewReverse = reverseArray(reverseNumbers);
console.log(showNewReverse)



