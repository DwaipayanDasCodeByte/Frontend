const decrease = document.getElementById("down");
const reset = document.getElementById("reset");
const increase = document.getElementById("up");
const countlabel = document.getElementById("counter");

let count =0;

increase.onclick = function(){
    count++;
    countlabel.textContent = count;

}
reset.onclick = function(){
    count =0;
    countlabel.textContent = count;

}
decrease.onclick = function(){
    count--;
    countlabel.textContent = count;

}