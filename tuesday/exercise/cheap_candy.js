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

console.log(products)

for(let i = 0; i < products.length; i++){
    if(products[i].price < 4){
        console.log(products[i].product)
    }
}

console.log("---------------------")

for(let x = 0; x < products.length; x++){
if(products[x].product.includes("M&Ms")){
console.log(products[x].product)
}
}

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