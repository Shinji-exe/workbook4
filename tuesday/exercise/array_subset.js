let menuItems = [
    {id: 1, item: "Tacos", category: "Meal", price: 12.29},
    {id: 2, item: "Burger", category: "Meal", price: 7.29},
    {id: 3, item: "Salad", category: "Meal", price: 8.29},
    {id: 4, item: "Ice tea", category: "Drink", price: 2.19},
    {id: 5, item: "Coke", category: "Drink", price: 2.29},
    ];

    function display(arr){
        let drinks = []

        for(let i = 0; i < arr.length; i++){
            console.log(menuItems[i])
            if(arr[i].category == "Drink"){
        drinks.push(arr[i].item)
            }
        }
        return drinks
    }

    let showDrinksArray = display(menuItems);
    console.log(showDrinksArray)

//     let drinks = []

// for(let i = 0; i < menuItems.length; i++){
//     console.log(menuItems[i])
//     if(menuItems[i].category == "Drink"){
// drinks.push(menuItems[i].item)
//     }
// }

//or

//let drinks = []
//for (const menuItem of menuItems){
//if(menuItem.category == "Drink"){
//drinks.push(menuItem)
///}
//}
//console.log(drinks)

// console.log(drinks)