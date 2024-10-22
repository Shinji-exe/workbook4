//Arrays

//Notes to remember
let student = {} //object, single thing.
let students = [] //array many things

//A javascript array is used to store multiple values in a single variable

//EXAMPLE
//          0 index     1 index      2 index
let kids = ["Natalie", "Brittany", "Zachary", "Zoe", "Taylor"];
//             1           2           3

//To access an element in an array, you can use a subscript

let oldest = kids[0]; // kids[0] the [0] is a subscript
let middle = kids[1];
let youngest = kids[2];

for(let i = 0; i < kids.length; i++){
    console.log(kids[i])
}

console.log("-------------------")

for(let i = 0; i < 3; i++){
console.log(kids[i])
}

console.log("-------------------")

let = [313,328,349,287,301]; //stores numbers

let importantDates = [
    new Date(1958, 8, 5),
    new Date(1976, 4, 30),
    new Date(2009, 9, 10)
]

console.log(importantDates)

console.log("-------------------")

let menu = [
    {item: "Hamburger", price: 6.95},
    {item: "Cheeseburger", price: 7.95},
    {item: "Hot Dog", price: 4.95}
]

console.log(menu)

console.log("-------------------")

function getMealCost(orders){
    let sum = 0;

    // let numOrders = orders.length;
    for(let i = 0; i < orders.length; i++){
        sum = sum + orders[i].price
    }
    return sum
}

let myOrder = [
    {item: "Hamburger", price: 6.95},
    {item: "Cheeseburger", price: 7.95},
    {item: "Hot Dog", price: 4.95}
]

let myOrder2 = [
    {item: "Chicken Tacos", price: 8.95},
    {item: "Guacamole", price: 2.85},
    {item: "Sweet Tea", price: 2.75}
]

let totalAmount = getMealCost(myOrder);
let withTip = totalAmount * 1.2;

console.log(withTip.toFixed(2))

let secondTotalAmount = getMealCost(myOrder2)
let secondTipAmount = secondTotalAmount * 1.2;

console.log(secondTipAmount.toFixed(2))


