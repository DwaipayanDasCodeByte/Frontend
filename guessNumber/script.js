const minNum = 1;
const maxNum = 100;
const result = Math.floor(Math.random() * (maxNum -minNum +1));
document.getElementById("myh1").textContent =`random number is ${result}`

// function getData ( a ,b ){
//     let x = Math.floor(Math.random() * (b - a +1)) + a;
//     console.log(x)
// }

// getData(50,100)

let attempts =0;
let guess;
let running = true;

while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}.`)
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert("please enter a valid number")
    }
    else if( guess < minNum || guess > maxNum){
        window.alert("please enter a valid number")
    }
    else{
        attempts++;
        if(guess < result){
            window.alert("too low try again")
        }else if( guess > result){
            window.alert("too high try again")
        }else{
            window.alert(`correct answer your total number ${attempts}`)
        }
    }
}