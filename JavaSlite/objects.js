//object = a collection of related properties and/or methods
// can represent real world objects (people, products)
// object = {
//     key:Value,
//     function()
// }


const person1 = {
    firstname: "Spongebob",
    lastname: "Squarepants",
    age: 30,
    isEmployed: true,
    sayHello : function(){
        console.log("Hi Im spongebob")
    },
}

console.log(person1.firstname)  //dot operator 
console.log(person1.lastname)
console.log(person1.age)
console.log(person1.isEmployed)
person1.sayHello()
const person2 = {
    firstname: "Patrick",
    lastname: "Star",
    age: 42,
    isEmployed: false,
}

console.log(person2.firstname)  //dot operator 
console.log(person2.lastname)
console.log(person2.age)
console.log(person2.isEmployed)


//this (keyword) -> reference to the object wheree THIS is used 
// (the object depends on the immediate context)
// person.name = this.name

const person3 = {
    name: "Spongebob",
    // lastname: "Squarepants",
    favFood:'hamburgers',
    // age: 30,
    // isEmployed: true,
    sayHello : function(){
        console.log(`Hi Im ${this.name}`)
        console.log(`I like ${this.favFood}`)   // arrow functions doesnot wworks with this key word try to avoid it 
    },
}

person3.sayHello()

