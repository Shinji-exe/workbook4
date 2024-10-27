const foodSelector = document.getElementById("foodSelector");
const inTheMenu = document.getElementById("inTheMenu");
const displayFood = document.getElementById("displayFood");

let menu = {
  drinks: ["Water", "Tea", "Sweet Tea", "Coke", "Dr. Pepper", "Sprite"],
  entrees: [
    "Hamburger w/ Fries",
    "Grilled Cheese w/ Tater Tots",
    "Grilled Chicken w/ Veggies",
    "Chicken Fried Steak w/ Mashed Potatoes",
    "Fried Shrimp w/ Coleslaw",
    "Veggie Plate",
  ],
  desserts: ["Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"],
};

function loopingThrough() {
  // let idValue = menu.value;
  // let category = menu.desserts;
  // let category2 = menu.drinks;
  // let category3 = menu.entrees;

  // displayFood.innerText = "Select"

  // let idValue = foodSelector.value;

  //     let menuShow = menu[selectedCategory];

  // for(let i = 0; i < menuShow.length; i++) {
  //     if(idValue === menuShow){
  //         let haveOptions = document.createElement("option");
  //         haveOptions.innerText = menu.drinks[i]
  //         foodSelector.appendChild(haveOptions)
  //           }
  //     }

  // let theValue = inTheMenu.value;

  let selectedCategory = foodSelector.value;

  if (selectedCategory) {
    const items = menu[selectedCategory];
    for (let i = 0; i < items.length; i++) {
      let haveOptions = document.createElement("option");
      haveOptions.innerText = items[i];
      haveOptions.value = items[i];
      inTheMenu.appendChild(haveOptions);
    }
  }
}


