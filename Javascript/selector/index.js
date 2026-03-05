let boxes = document.getElementsByClassName("box")
console.log(boxes)
// boxes[2].style.backgroundColor = "red"
// document.getElementById
document.querySelector(".box").style.backgroundColor = "green";//only the first box
console.log(document.querySelectorAll(".box")) //  returns a node list
document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor ='green'
})
console.log(document.getElementsByTagName("div")) //all tags in the html