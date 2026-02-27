console.log('my 1st js');
console.log('dwaipayan das');
console.log('istprogram');
console.log('frontend');

// window.alert('hey how are u');
// window.prompt('yoy name please');
// window.confirm('r u sure u want to proceed');

document.getElementById("first").textContent = 'hello guys';
document.getElementById("para1").textContent = 'lorem32 hello gracias wilson';

// variable
// let x;  //declaration
// x=100;  //assignment
// console.log(x);

// number
// let age=25;
// console.log(`you are ${age} years old`);  //use backsticks symbol(``) we call it as template literal
// let a=3.5;
// console.log(typeof a);

// string
// let firstname = "Dwaipayan Das";    //its can contains number
// console.log(typeof firstname);
// console.log(`your name is ${firstname}`);

// booleam
// let b = true;
// console.log(`bro is online : ${b}`);
// console.log(typeof b);

let firstname = "Dwaipayan Das"
let age = 21;
let employed = false;

//document.getElementById("p1").textContent = firstname;
document.getElementById("p1").textContent = `my name is ${firstname}`;
document.getElementById("p2").textContent = age;
document.getElementById("p3").textContent = employed;

//arithmetic op
let students = 30;
// students = students + 1;
// students = students - 1;
// students = students * 2;
// students = students / 2;
// students = students ** 3
// students = students % 2;


//augmented operators
// students += 1;
// students -= 1;
// students *= 1;
// students /= 1;
// students **= 2;
// students %= 2;

// students++;
// students--
// console.log(students);

//operator precedence
// 1.parenthesis ()
// 2.exponents
// 3.multiplication or division or %
// 4. + or -

let result = 1 + 2 * 3 + 4 ** 2;
console.log(result);

//accept user input
let username;
//username = window.prompt("what your username?");
//console.log(`the name is ${username}.`);

//professional way html text box
document.getElementById("mysubmit").onclick = function () {
    username = document.getElementById("mytext").value;
    console.log(username);
    document.getElementById("myh1").textContent = `Hello ${username}`;
}

//type conversion
//let age1 = prompt("whats your age?");
//age1 +=1;    //give output string so,
// age1 = Number(age1);   //similary we have string() and boolean()
// age1 += 1;
// console.log(age1);

// const - a variable that cant be changed

const PI = 3.14159;
let radius;
let circumference;
// radius = window.prompt("Enter the radius");
// radius = Number(radius);

// circumference = 2 * PI * radius;
// console.log(circumference);


document.getElementById("mysubmit1").onclick = function () {
    radius = document.getElementById("rad").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myh").textContent = `the circumference is : ${circumference}` + " cm";

}

//random number generator
let randnum;
document.getElementById("gen").onclick = function () {
    randnum = Math.floor(Math.random() * (100 - 1)) + 1;  //means 1 to 100
    document.getElementById("myh2").textContent = randnum;

}

//if statements
// let age2 = 15;
// if(age2 >= 18){
//     console.log("you are old enough to enter this site");
// }
// else if(age2 < 0){
//     console.log("invalid age");
// }
// else{
//     console.log("you have to 18+ to visit this website");
// }

// let isstudent = false;
// if(isstudent){
//      console.log("you are a student");
// }else{
//      console.log("you are not a student");
// }


let Age;
document.getElementById("submitage").onclick = function () {
    Age = document.getElementById("myage").value;
    Age = Number(Age);
    if (Age == 18) {
        console.log("you are adult, you can vote");
        document.getElementById("ageresult").textContent = `you are adult, you can vote`;
    }
    else if (Age >= 18) {
        console.log("you can vote");
        document.getElementById("ageresult").textContent = `you can vote`;
    }
    else {
        console.log("you are not adult");
        document.getElementById("ageresult").textContent = `you are not adult`;
    }
}

//checked property
const cb = document.getElementById("mycheckbox");
const p1 = document.getElementById("visa");
const p2 = document.getElementById("paypal");
const p3 = document.getElementById("gpay");
const p4 = document.getElementById("apple");
const p5 = document.getElementById("net");
const p6 = document.getElementById("pytm");
const sub = document.getElementById("subcheck");
const para1 = document.getElementById("subResult");
const para2 = document.getElementById("payment");

sub.onclick = function () {
    if (cb.checked) {
        para1.textContent = `you are subscribed!`;
    }
    else {
        para1.textContent = `you are not subscribed!`;
    }

    if (p1.checked) {
        para2.textContent = `you are using Visa`;
    } else if(p2.checked){
        para2.textContent = `you are using paypal`;

    }else if(p3.checked) {
        para2.textContent = `you are using gpay`;

    } else if (p4.checked) {
        para2.textContent = `you are using apple pay`;

    } else if (p5.checked) {
        para2.textContent = `you are using netbanking`;

    } else if (p6.checked) {
        para2.textContent = `you are using paytm`;

}
else{
    para2.textContent = `you must select a payment type`;
}
}

//switches
let day;
const content = document.getElementById("pday");
document.getElementById("dayB").onclick = function(){
    day = document.getElementById("week").value;
    day = Number(day);
    switch(day){
        case 1:
            content.textContent=`it is Monday`;
            break;
        case 2:
            content.textContent=`it is tuesday`;
            break;
        case 3:
            content.textContent=`it is wednesday`;
            break;
        case 4:
            content.textContent=`it is thursday`;
            break;
        case 5:
            content.textContent=`it is friday`;
            break;
        case 6:
            content.textContent=`it is saturday`;
            break;
        case 7:
            content.textContent=`it is sunday`;
            break;
        default:
            content.textContent=`invalid`;
            
            
    }

}

//string methods
let userName = "Dwaipayan Das"
console.log(userName.charAt(0));
console.log(userName.charAt(1));
console.log(userName.charAt(2));

console.log(userName.indexOf("a")); // only the 1st occurences of the later
console.log(userName.indexOf("D"));
console.log(userName.lastIndexOf("a"));

console.log(userName.length);

//string slicing
//string.slice(start, end)
const fullName ='Dwaipayan Das'
// let firstName = fullName.slice(0,9);
// let lastName = fullName.slice(10,14);  // we can use negative indexes
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" "));
console.log(firstName);
console.log(lastName);

//strict equality
// === strict equality operator (compare if values and datatype are equal)
// !== strict inequality operator

//while loop
// let namee ="";
// while(namee === "" || namee === null){
//     namee = window.prompt("Enter your name");
// }
// console.log(`Hello ${namee}`);

// let loggedIn = false;
// let Username;
// let password;
// while(!loggedIn){
//     Username = window.prompt("Enter your username");
//     password = window.prompt("Enter the password");
//     if (username === null || password === null) {
//         console.log("Login cancelled.");
//         break; // Exits the loop entirely
//     }
//     if( Username === "Dwaipayan" && password ==="123"){
//         loggedIn = true;
//         console.log("you are loggen in!");
//     }else{
//         window.alert("Invalid credentials! Try again.");
//     }
// }
