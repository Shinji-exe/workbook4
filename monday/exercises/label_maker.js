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

function printContract(person){
    console.log(person)
}

printContract(person)

// or

function personContractTwo(){
    let person2 = {
        name: "Alex Keller",
        address: "412 Anytown ave",
         city: "New York City",
          state: "New York",
           zip: 22334
    }
console.log(person2.name)
console.log(person2.address)
console.log(person2.city + ", " + person2.state)

    return person2;

}

let showContract = personContractTwo()
console.log(showContract)
////////////////////////////////////////////////////////
let contacting = {
    name: "James Bond",
    address: "125 Rue Way",
    city: "New York",
    state: "New York",
    zipcode: 10035
}

let person2 = {
    name: "Alex Keller",
    address: "412 Anytown ave",
     city: "New York City",
      state: "New York",
       zip: 22334
}

function printLabel(contact){
// console.log(contact.name)
// console.log(contact.address)
// console.log(contact.city)

//or

let mailingLabel = `
${contact.name}
${contact.address}
${contact.city}, ${contact.state} ${contact.zipcode}
`;

console.log(mailingLabel)
}

printLabel(contacting)

function twoContacts(contact1,contact2){
console.log(contact1.name)
console.log(contact1.address)
console.log(contact1.city)

console.log(contact2.name)
console.log(contact2.address)
console.log(contact2.city)
}

twoContacts(contacting, person2)