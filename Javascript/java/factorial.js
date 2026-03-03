const z = prompt("Enter the Number");
let num = Number(z);

function factorial(num) {
    if (num < 0) {
        return 0; 
    }
    if (num === 0 || num === 1) { 
        return 1;
    }
    
    let result = 1; 
    
    for (let i = 2; i <= num; ++i) {
        result *= i; 
    }
    
    return result; 
}


console.log(factorial(num));