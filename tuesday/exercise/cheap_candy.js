let products = [
    {product: "Gummy Worms", price: 5.79},
    {product: "Plain M&Ms", price: 2.89},
    {product: "Peanut M&Ms", price: 2.89},
    {product: "Swedish Fish", price: 3.79},
]

products.push({product: "Twizzlers", price: 4.50})
products.push({product: "Sour Patch Kids", price: 5.50})
products.push({product: "Mike & Ikes", price: 2.50})
products.push({product: "Peach Rings", price: 2.50})
products.push({product: "Chocolate", price: 1.50})
products.push({product: "Thin Mints", price: 1.50})

// console.log(products)

//To get one
function something(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price < 4){
            // console.log(arr[i].product)
            return arr[i].product
        }
    }
}

console.log("---------------------")

for(let i = 0; i < products.length; i++){
    console.log(products[i])
}

console.log("---------------------")

//for-of version
for(const product of products) {
    if(product.price < 4){
        console.log(product)
    }
}

console.log("---------------------")

function getCheapCandies(candies,lowPrice){
    let cheapCandies = []

    for (const candy of candies) {
        if(candy.price < lowPrice){
            cheapCandies.push(candy)
        }
    }
return cheapCandies
}

let cheapCandies = getCheapCandies(products, 3)
console.log(cheapCandies)

// let somethings = something(products)
// console.log(somethings)

//OR 

console.log("---------------------")

function something(arr){
    let cheapCandyArray = []
    for(let i = 0; i < arr.length; i++){
        if(arr[i].price < 4){
            // console.log(arr[i].product)
            cheapCandyArray.push(arr[i].product)
        }
    }
    return cheapCandyArray
}

let somethings = something(products)
console.log(somethings)

console.log("---------------------")

for(let x = 0; x < products.length; x++){
if(products[x].product.includes("M&Ms")){
console.log(products[x].product)
}
}

console.log("---------------------")

function swedish(candies){
    for (const candy of candies) {
        if(candy.product.includes("Swedish Fish")){
            console.log("Yes we have it")
        }
    }
}

// let show = swedish(products);
// console.log(show)

console.log("---------------------")

function carry(item){
    for(let i = 0; i < item.length; i++){
        if(item[i].product === "Swedish Fish"){
return true
        }
    }
    return false
}

let haveItem = carry(products)
console.log(haveItem)