"use strict";

const computerHardware = [
  {
    id: 1,
    name: "Intel Core i7-11700K",
    type: "Processor",
    price: 379.99,
    stock: 25,
  },
  {
    id: 2,
    name: "NVIDIA GeForce RTX 3080",
    type: "Graphics Card",
    price: 699.99,
    stock: 10,
  },
  {
    id: 3,
    name: "Corsair Vengeance LPX 16GB",
    type: "Memory (RAM)",
    price: 89.99,
    stock: 50,
  },
  {
    id: 4,
    name: "Samsung 970 EVO Plus 1TB",
    type: "Solid State Drive (SSD)",
    price: 129.99,
    stock: 40,
  },
];

// for (let i = 0; i < computerHardware.length; i++) {
//   let item = computerHardware[i];
//   console.log(item);
// }

//   for (const item of computerHardware) {
//     console.log(item)
//   }

//Getting one item
function findHardware(computerHardware) {
  let foundItem;
  for (let i = 0; i < computerHardware.length; i++) {
    let item = computerHardware[i];
    // console.log(item);
    if (item.id === 3) { //OR computerHardware[i]
      foundItem = item;
    }
  }
  return foundItem
}

let hardwareFound = findHardware(computerHardware);
console.log(hardwareFound)

// For an array is getting mutiple things
//object is getting one thing
// 


console.log("-------------------")
//Getting many items
function findingMoreHardware(arr){
    let foundItem = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price < 400){
            foundItem.push(arr[i])
        }
    }
    return foundItem
}

let gettingItems = findingMoreHardware(computerHardware);
console.log(gettingItems)