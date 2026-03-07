const textbox = document.getElementById("box")
const tofahre = document.getElementById("toFarh")
const tocel = document.getElementById("toCel")
const result = document.getElementById("result")
let temp;
function convert(){
    if(tofahre.checked){
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent =  temp.toFixed(1) + "F"
    }else if(tocel.checked){
        temp = Number(textbox.value);
        temp = (temp-32) *(5/9)
        result.textContent =  temp.toFixed(1) + "C"

    }else{
        result.textContent = "Select a unit"
    }
}

