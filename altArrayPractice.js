let array = [2,7,1,9,3,0,12,10]

for(let i = 0; i < array.length; i++){
    console.log(array[i])
}

function showArray(arr){
    let arras = arr.length
    for(let i = 0; i < arras; i++){
        console.log(arr[i])
    }
}

showArray(array)

console.log("-----------------")

function count(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total = total + arr[i]
    }
    return total
}

let displayAmount = count(array)
console.log(displayAmount)

let arrayOfObjects = [
    {item: "Twizzler", flavors:["Strawberry", "Green Apple, Sour"]},
    {item: "Skittles", flavors: ["Sour", "Korean"]}
]

let amonutOfFlavorsCount = 0;

for(let i = 0; i < arrayOfObjects.length; i++){
  
    for(let x = 0; x < arrayOfObjects[i].flavors.length; i++){
      amonutOfFlavorsCount = amonutOfFlavorsCount + arrayOfObjects[i].flavors.length
    }
}

console.log(amonutOfFlavorsCount)