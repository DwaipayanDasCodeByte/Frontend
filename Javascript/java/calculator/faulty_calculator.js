/**
create a faulty calvulator using js 
1.it takes two numbers as an input from the user
2.it performs wrong operations as follows
+-->-
*--> +
- --> /
/ --> **
it performs wrong operation 10% of the times
 */
let random = Math.random()
let a = prompt("Enter first number")
let b = prompt("Enter second number")
let c = prompt("Enter operator")

let obj = {
    "+":"-",
    "*": "+",
    "-":"/",
    "/":"**"
}

if(random >0.1){
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}else{
    c  = abj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)



}