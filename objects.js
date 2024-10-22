"use strict"

//object
let person = {
    //propertyName: propertyValue
    name: "Jacob Keller",
     address: "123 Anytown ave",
      city: "New York City",
       state: "New York",
        zip: 12345
}

console.log(person.name)//Dot Notation

//Passes a object which is the person object as a function parameter
function printContract(person){
    console.log(person)
    }
  printContract(person)

  //returns an object from a function
    function createPerson(){
        let person ={
            first: "Beyonce",
            last: "Knowles"
        };
        return person
    }

    //catch the return value in a variable
    let displayPerson = createPerson()
    console.log(displayPerson)


////////////////////

function printEmployeeAndPay(emp){
console.log("Name: " + emp.name);
console.log("Pay: " + emp.payRate)
    }

    let emp1 = {
        employeeId: "1",
    name: "Ezra",
    jobTitle: "Theater Teacher",
    payRate : "38.46"
}

let emp2 = {
        employeeId: "2",
    name: "Elisha",
    jobTitle: "Game Developer",
    payRate : "43.27"
}

printEmployeeAndPay(emp1)
printEmployeeAndPay(emp2)