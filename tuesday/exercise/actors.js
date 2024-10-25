// Who is the Academy Member whose ID is 187?
// Who has have been in at least 3 films?
// Who has a name that starts with "Bob"?
// HARDER: Which Academy Members have been in a film
// that starts with "A"


let academyMembers = [
    {
    memID: 101,
    name: "Brown Bob",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    ]

    // Who is the Academy Member whose ID is 187?

    for(let i = 0; i < academyMembers.length; i++){
    if(Number(academyMembers[i].memID === 187)){
        console.log(academyMembers[i].name)
    }
    }

    console.log("---------------------")
    // Who has have been in at least 3 films?
     let experiencedActors = []
    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].films.length >= 3){
            console.log(academyMembers[i].name)
            experiencedActors.push(academyMembers[i])
        }
    }

    console.log(experiencedActors)

    console.log("--------------------")

    // for(let i = 0; i < academyMembers.length; i++){
    //     if(academyMembers[i].name.includes("Bob")){ //.includes() searches the whole string
    //         console.log(academyMembers[i].name)
    //     }
    // }

    //OR

    // console.log("--------------------")
    // Who has a name that starts with "Bob"?
let bobs = []
    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].name.indexOf("Bob")===0){ //or !=-1. //===0 is the starting point           //.startsWith('Bob')
            console.log(academyMembers[i].name)
            bobs.push(academyMembers[i])
        }
    }
console.log(bobs)

    console.log("--------------------")

    // HARDER: Which Academy Members have been in a film
// that starts with "A"


    for(let i = 0; i < academyMembers.length; i++){
        if(academyMembers[i].films.some(film => film.includes("A"))){
            console.log(academyMembers[i].name)
        }
    }

    console.log("--------------------")

    // HARDER: Which Academy Members have been in a film
// that starts with "A"


    let matchedMember = []
    for(let i = 0; i < academyMembers.length; i++){
        for(let x = 0; x < academyMembers[i].films.length; x++){
            if(academyMembers[i].films[x].indexOf("A") ===0){
            matchedMember.push(academyMembers[i].name)
            }
        }
    }

    console.log(matchedMember)