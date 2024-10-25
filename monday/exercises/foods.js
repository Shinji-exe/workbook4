let lunch = [
    { item: "Steak Fajitas", price: 9.95 },
    { item: "Chips and Guacamole", price: 5.25 },
    { item: "Sweet Tea", price: 2.79 },
  ];
  
  function subTotal(foods) {
    let totalsum = 0;
    for (let i = 0; i < foods.length; i++) {
      totalsum += foods[i].price;
    }
    return totalsum;
  }
  
  function calculateTotals(sub) {
    let tax = sub * 0.08;
    let tip = sub * 0.18;
    let total = sub + tax + tip;
    return { tax, tip, total };
  }
  
  let subAmount = subTotal(lunch); // Calculate the subtotal
  let { tax, tip, total } = calculateTotals(subAmount); // Calculate tax, tip, and total based on the subtotal //subAmount in the parenthesis is calling the variable line 22
  
  // Log the results
  console.log("Subtotal: $" + subAmount.toFixed(2));
  console.log("Tax: $" + tax.toFixed(2));
  console.log("Tip: $" + tip.toFixed(2));
  console.log("Total: $" + total.toFixed(2));