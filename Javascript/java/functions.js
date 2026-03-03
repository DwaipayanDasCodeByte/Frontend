function nice(name){
    console.log("hey " + name + " hows ur day!")
}
function sum(a,b){
    console.log(a+b)
}
function sum1(a,b, c= 3){// here c is a default parameter 
    return a+b+c;
}

const func1 = (x)=>{
    console.log("I am an arrow function",x)
}
nice("das")
sum(2,4)
console.log(sum1(2,4))
func1(32)