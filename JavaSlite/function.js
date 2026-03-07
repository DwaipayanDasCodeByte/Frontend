function circleArea(radius) {
    let result = Math.PI * radius * radius
    return result

}
console.log(circleArea(5))

console.log(circleArea(7))

console.log(circleArea(10))

function add(x, y) {
    return x + y
}

console.log(add(2, 3))

function isEven(number) {
    return number % 2 === 0 ? true : false;
}
console.log(isEven(12))

function isvalidEmail(email) {
    if (email.includes("@")) {

        return true;
    }
    else {
        return false;
    }
}

console.log(isvalidEmail("ddas2@gitam.in"))
console.log(isvalidEmail("ddas277....gitam.in"))

//function expresions -> a way to define functions as values or variables eg.

const hello = function () {
    console.log("Hello")
}

hello()

// setTimeout(function(){
//     console.log("hello das")
// },3000)



const numbers = [1, 2, 3, 4, 5, 6]
const squares = numbers.map(function (element) {
    return Math.pow(element, 2)
})

console.log(squares)


//arrow functions  - > a concise way to write function expressions good for simple functions that you use only once 
//(parameter) =>{ some code and statements  }


const user = (name,age) => {
    console.log(`Hello! Welcome ${name}`)
    console.log(`your age is ${age}`)
}

user('Dwaipayan',21)

setTimeout(()=>{
    console.log(`hello my name is lakkhan`)
}, 3000)

const Numbers = [1,2,3,4,5,6]

const Squares = Numbers.map((element) =>{
    return Math.pow(element,2)
})