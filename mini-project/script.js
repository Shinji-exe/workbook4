const selectActivity = document.getElementById("selectActivity"); //First select element <select id="selectActivity"></select>
const selectMainActivity = document.getElementById("selectMainActivity"); //Second select element <select id="selectMainActivity"></select>
const showPackage = document.getElementById("showPackage"); //Empty div
const totalInput = document.getElementById("totalInput");
const showhide = document.getElementById("show/hide");
const amountOfTickets = document.getElementById("amountOfTickets");
const confirmedPurchaseDisplay = document.getElementById("confirmedPurchaseDisplay");
const toggleDisplay = document.getElementById("toggleDisplay");
const purchaseDisplay = document.getElementById("purchaseDisplay");
const toggleDisplayLabel = document.getElementById("toggleDisplayLabel");

// let categories = ["Adventures", "Arts & Crafts"]; 

let categories = [
    {value: "A101", name: "Adventures"},
    {value: "AC101", name: "Arts & Crafts"}
   ]; 

// let activities = [
//   {
//     category: "Adventures",
//     id: "A101",
//     name: "Hot Air Balloon Ride",
//     description:
//       "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
//     price: 365.0,
//   },
//   {
//     category: "Adventures",
//     id: "A102",
//     name: "Hiking",
//     description:
//       "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
//     price: 75.0,
//   },
//   {
//     category: "Adventures",
//     id: "A103",
//     name: "Biking",
//     description:
//       "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
//     price: 100.0,
//   },
//   {
//     category: "Adventures",
//     id: "A104",
//     name: "Kayaking",
//     description:
//       "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
//     price: 100.0,
//   },
//   {
//     category: "Arts & Crafts",
//     id: "AC101",
//     name: "Origami",
//     description:
//       "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
//     price: 50.0,
//   },
// ];

let activities = [
    {
      category: "Adventures",
      id: "A101",
      name: "Hot Air Balloon Ride",
      description:
        "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
      price: 365.0,
    },
    {
      category: "Adventures",
      id: "A102",
      name: "Hiking",
      description:
        "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
      price: 75.0,
    },
    {
      category: "Adventures",
      id: "A103",
      name: "Biking",
      description:
        "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
      price: 100.0,
    },
    {
      category: "Adventures",
      id: "A104",
      name: "Kayaking",
      description:
        "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
      price: 100.0,
    },
    {
      category: "Arts & Crafts",
      id: "AC101",
      name: "Origami",
      description:
        "Enjoy a lovely hot air balloon ride over the valley at sunrise. Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.",
      price: 50.0,
    },
  ];
  

// function dropDownOptions() {
//   for (let i = 0; i < categories.length; i++) {
//     // loops through the categoreies array to get every index due to .length and i++
//     let dropOptions = document.createElement("option"); //<option></option>
//     dropOptions.innerText = categories[i]; // <option>Adventures</option> <option>Arts & Crafts</option>
//     dropOptions.value = categories[i]; //<option value="Adventures">Adventures</option> <option value="Arts & Crafts">Arts & Crafts</option>
//     selectActivity.appendChild(dropOptions); // selectActivity is the select element which is having the options elements that the createElement and for loop did.
//     //
//   }
// }

function dropDownOptions() {
    for (let i = 0; i < categories.length; i++) {
      // loops through the categoreies array to get every index due to .length and i++
      let dropOptions = document.createElement("option"); //<option></option>
      dropOptions.innerText = categories[i].name; // <option>Adventures</option> <option>Arts & Crafts</option>
      dropOptions.value = categories[i].value; //<option value="Adventures">Adventures</option> <option value="Arts & Crafts">Arts & Crafts</option>
      selectActivity.appendChild(dropOptions); // selectActivity is the select element which is having the options elements that the createElement and for loop did.
      //
    }
  }

//All together we have this...
// <select name="" id="selectActivity onchange="">
//<option value="">Select....</option>
//<option value="Adventures">Adventures</option>
//<option value="Arts & Crafts">Arts & Crafts</option>
//</select>

dropDownOptions(); //Calls the function and the functionality which will be displayed in the HTML DOM

// function showActivityDetails() {
//   selectMainActivity.innerHTML = "<option>Select...</option>";
//   let values = selectActivity.value;

//   // let selectedActivityDisplay;
//   for (let i = 0; i < activities.length; i++) {
//     if (activities[i].category === values) {
//       let dropOptions = document.createElement("option");
//       dropOptions.innerText = activities[i].name;
//       dropOptions.value = activities[i].name;
//       selectMainActivity.appendChild(dropOptions);
//     }
//   }
// }

function showActivityDetails() {
    selectMainActivity.innerHTML = "<option>Select...</option>";
    let values = selectActivity.value;
  
    // let selectedActivityDisplay;
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === values) {
        let dropOptions = document.createElement("option");
        dropOptions.innerText = activities[i].name;
        dropOptions.value = activities[i].id;
        selectMainActivity.appendChild(dropOptions);
      }
    }
  }

// function descriptionOfActivity() {
//   let selectActivityName = selectMainActivity.value;
//   let selectedActivityDisplay;

//   for (let i = 0; i < activities.length; i++) {
//     if (activities[i].name === selectActivityName) {
//       selectedActivityDisplay = activities[i];
//       break;
//     }
//   }
//   showPackage.innerText = ` 
//     ${selectedActivityDisplay.id} 
//     ${selectedActivityDisplay.name} 
//     ${selectedActivityDisplay.description} 
//     ${selectedActivityDisplay.price} `;
//   showhide.style.display = "block";
// }

function descriptionOfActivity() {
    let selectActivityName = selectMainActivity.value;
    let selectedActivityDisplay;
  
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === selectActivityName) {
        selectedActivityDisplay = activities[i];
        break;
      }
    }
    showPackage.innerText = ` 
      ${selectedActivityDisplay.id} 
      ${selectedActivityDisplay.name} 
      ${selectedActivityDisplay.description} 
      ${selectedActivityDisplay.price} `;
    showhide.style.display = "block";
  }

// let total = 0;
// let taxAmount = 1.18;
// let baseRate = activities[i].price

// let numberOfTickets = Number(amountOfTickets.value)

// let totalSumForPrice = baseRate * numberOfTickets

// function getCost(event) {
//   event.preventDefault();
//   let selectActivityName = selectMainActivity.value;
//   let baseRate;

//   for (let i = 0; i < activities.length; i++) {
//     if (activities[i].name === selectActivityName) {
//       baseRate = activities[i].price;
//       break;
//     }
//   }

//   let numberOfTickets = Number(amountOfTickets.value);

//   let totalSumForPrice = baseRate * numberOfTickets;

//   //   let totals = totalSumForPrice;

//   totalInput.value = Number(totalSumForPrice.toFixed(2));
// }

function getCost(event) {
    event.preventDefault();
    let selectActivityName = selectMainActivity.value;
    let baseRate;
  
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === selectActivityName) {
        baseRate = activities[i].price;
        break;
      }
    }
  
    let numberOfTickets = Number(amountOfTickets.value);
  
    let totalSumForPrice = baseRate * numberOfTickets;
  
    //   let totals = totalSumForPrice;
  
    totalInput.value = Number(totalSumForPrice.toFixed(2));
  }

function showPurchaseTickets() {
  if (toggleDisplay.checked) {
    purchaseDisplay.style.display = "none";
    toggleDisplayLabel.innerText = "Show";
  } else {
    purchaseDisplay.style.display = "block";
    toggleDisplayLabel.innerText = "Hide";
  }
}
// if(toggleDisplay.checked){
//     purchaseDisplay.style.display = "none"
// }else{
//     purchaseDisplay.style.display = "block"
// }

// function finalizePurchase(event) {
//   event.preventDefault();
//   let selectActivityName = selectMainActivity.value;
//   let baseRate;
//   for (let i = 0; i < activities.length; i++) {
//     if (activities[i].name === selectActivityName) {
//       baseRate = activities[i].price;

//       let numberOfTickets = Number(amountOfTickets.value);

//       let totalSumForPrice = baseRate * numberOfTickets;

//       let purchaseShown = document.createElement("div");
//       let purchaseDescription = document.createElement("p");

//       purchaseDescription.innerText = `Your purchase ${selectActivityName} ${totalSumForPrice}`;
//       purchaseShown.appendChild(purchaseDescription);

//       confirmedPurchaseDisplay.innerText = "";
//       confirmedPurchaseDisplay.appendChild(purchaseShown);
//       confirmedPurchaseDisplay.style.display = "block";
//       break;
//     }
//   }
// }

function finalizePurchase(event) {
    event.preventDefault();
    let selectActivityName = selectMainActivity.value;
    let baseRate;
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].id === selectActivityName) {
        baseRate = activities[i].price;
  
        let numberOfTickets = Number(amountOfTickets.value);
  
        let totalSumForPrice = baseRate * numberOfTickets;
  
        let purchaseShown = document.createElement("div");
        let purchaseDescription = document.createElement("p");
  
        purchaseDescription.innerText = `Your purchase ${selectActivityName} ${totalSumForPrice}`;
        purchaseShown.appendChild(purchaseDescription);
  
        confirmedPurchaseDisplay.innerText = "";
        confirmedPurchaseDisplay.appendChild(purchaseShown);
        confirmedPurchaseDisplay.style.display = "block";
        break;
      }
    }
  }
