// a built -in function used to iterate over elements in a collection, 
// such as an Array, Map, or Set, and execute a provided callback function for each element. 

let numbers = [1, 2, 3, 4, 5]
// numbers.forEach(double)
numbers.forEach(square)
numbers.forEach(display)

// function double(element, index, array) {
//     array[index] = element * 2
// }

function display(element) {
    console.log(element)
}

function square(element, index, array) {
    array[index] = Math.pow(element, 2)
}