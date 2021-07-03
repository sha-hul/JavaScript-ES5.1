
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
btn.addEventListener("click" , hexa());
function hexa(){
    var hexColor="#";
    for(a=0;a<6;a++){
        hexColor+=hex[1];
        
    }
    console.log(hexColor)
}