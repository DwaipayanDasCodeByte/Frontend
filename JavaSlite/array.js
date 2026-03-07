let arr =['orange','100',1,'mango','200k']

console.log(arr)

console.log(typeof(arr))


console.log(arr[1])
let a =0;

arr.forEach(e => {
    a++;
    console.log(e)
});

console.log(a) // total iteration

console.log(arr.pop())

console.log(arr.push("hello"))
console.log(arr)

console.log(arr.length)

// for(let i of arr){
//     console.log(arr[i])
// }

//...spread => expands a  function work with a variable number of arguments by bundling them into an array
//rest => bundles seperate elements into an array,it is taken as parameter to combine all together 
let numbers =[1,2,3,4,5]
let max = Math.max(...numbers)
let min = Math.min(...numbers)

console.log(max)
console.log(min)

let username  = "Dwaipayan Das";
let letters = [...username];

console.log(letters);

function openFridge(...foods){
    // console.log(foods)
    console.log(...foods)
}

const food1 = 'pizza'
const food2 = 'ice cream'
const food3 = 'burger'
const food4 = 'coke'
const food5 = 'biryani'

openFridge(food1,food2,food3,food4,food5)

function getAverage(...numbers){
    let result =0;
    for( let number of numbers){
        result +=number;
    }
    return result / numbers.length;
}


console.log(getAverage(10,14,25,73,90,1))


