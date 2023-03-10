const image = document.getElementById("cookie");
let countClick = document.getElementById("clicker__counter");
let clickLast = new Date();
let speedClick = document.getElementById("clicker__speed");
function change(){
    let clickNow = new Date();
    speedClick.textContent = ((clickNow - clickLast) / 1000).toFixed(2);
    clickLast = clickNow;
    countClick.textContent++;
    if (countClick.textContent % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 220;
    }
}
image.onclick = change;



