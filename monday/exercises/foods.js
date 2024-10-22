let lunch = [
    {item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacamole", price: 5.25},
    {item: "Sweet Tea", price: 2.79}
];

function eating(foods){
    let totalsum = 0 // Let it be 0
     let menu = foods.length // Not really needed, you can just add foods.length in the for-loop
    for(let i = 0; i < menu; i++){ // you can swap out menu for foods.length because we're using the foods parameter which will be called by the lunch array
    totalsum = totalsum + foods[i].price; 
    }
    return totalsum
}

let totalCost = eating(lunch)
let totalCostWithTip = totalCost * 1.18;
console.log(totalCost)

console.log(totalCostWithTip.toFixed(2))

