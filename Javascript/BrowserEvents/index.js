let button = document.getElementById("btn")
button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="yaay you are clicked enjoy your click!"
})
document.addEventListener("keydown",(e)=>{
    console.log(e)
})
// call back functions 
console.log("The End")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
//callback usually creates a pyramid of doom avoid it using promises

