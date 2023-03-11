const image = document.getElementById("cookie");
let countClick = document.getElementById("clicker__counter");
let clickLast = new Date();
let speedClick = document.getElementById("clicker__speed");
function change(){
    let clickNow = new Date();
    let time = clickNow - clickLast;
    speedClick.textContent = (1 / (time/ 1000)).toFixed(2);
    clickLast = clickNow;
    countClick.textContent++;
    image.width = +countClick.textContent % 2 ?220: 200;
}
image.onclick = change;



