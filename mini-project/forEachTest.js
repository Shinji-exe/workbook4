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

  function mappingArrayOfObjects(arrays){
    let containment = document.getElementById("displayData")
    for(let i = 0; i < arrays.length; i++){
        const actives = arrays[i]
        let activo = document.createElement("div")

        let categories = document.createElement("h3");
        categories.textContent = actives.category;

        let description = document.createElement("p");
        description.textContent = actives.description

        let price = document.createElement("p")
        price.textContent = actives.price

        activo.appendChild(categories);
        activo.appendChild(description);
        activo.appendChild(price)

        containment.appendChild(activo)

        // activo.innerHTML = `<h3>${actives.category}</h3> 
        // <p>Description: ${actives.description}</p>
        // `;
    }
// arrays.forEach(array => {

//     const actives = document.createElement("div")

// })
  }

  mappingArrayOfObjects(activities)