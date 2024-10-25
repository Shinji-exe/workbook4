let kids = ["Natalie", "Brittany", "Zach"]

function nameThoseKids(person){
    for(let i = 0; i < person.length; i++){
     person.sort()
     return person
    }

    
}

let based = nameThoseKids(kids)
console.log(based)

console.log("----------------------------");


let numbers = [3,1,7,19,65,91,100]

function sortNumbers(numbers){
    return numbers.sort((a,b) => {
        if(a < b ){
            return -1
        }else if(a == b){
            return 0
        }else{
            return 1
        }
          
    })
}

let sorted = sortNumbers(numbers)
console.log(sorted)

//OR

console.log("----------------------------");


function compareAscendingNumbers(a,b){
    if(a < b){
        return -1
    }else if(a == b){
return 0;
    }else{
        return 1
    }
}

let numberArrays = [4,7,1,76,65,91,100]

numberArrays.sort(compareAscendingNumbers)

console.log(numberArrays)

console.log("----------------------------");

//Descending numeric sort
//Swap if a < b to a > b

let numerics = [17, 9,21,42,1,7,3]

function compareDecendingNumbers(a,b){
    if(a>b){
        return -1
    }else if(a == b){
        return 0
    }else{
        return 1
    }
}

numerics.sort(compareDecendingNumbers)

console.log(numerics)

console.log("----------------------------");

