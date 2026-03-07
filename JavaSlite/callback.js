// here callback is function passed as a parameter to the function add ,in the function add  we will invoke the function
// an example of call back function  
function add(callback,callback1, x, y) {
    let sum = x + y
    callback1(sum)
    callback()
}

function message(){
    console.log('function executed')
}

function display(msg){
    console.log(msg)
}

add(message,display,7,3)

//.map() - accepts a callback and applies that function to each element of an array,then return a new array 


const numbers =[1,2,3,4,5,6]


const squares = numbers.map(square)

const cubes = numbers.map(cube)
console.log(squares)
console.log(cubes)

function square(element){
    return Math.pow(element,2)

}


function cube(element){
    return Math.pow(element,3)

}


const students  =['bob','alex','john','anny','lewa']

const result = students.map(uppercase)
console.log(result)

function uppercase(element){
    return element.toUpperCase()
}

//.filter () - creates a new array by filtering out elements

let numbers1 = [1,2,3,4,5,6]

let evenNum = numbers1.filter(isEven)
console.log(evenNum)

function isEven(element){

    return element % 2 === 0
}

//.reduce() - reduce the elementts of an array to a single value 

const prices=[5,30,10,25,45,50]

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(previous , next){                 //previous -> accumulator  next -> element

    return previous + next
}


const words = ["Apple", "Banana", "Cherry"];

const sentence = words.reduce((accumulator, currentValue) => {
    return accumulator + ", " + currentValue;
});

console.log(sentence);

