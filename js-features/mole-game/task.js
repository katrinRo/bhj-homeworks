let dead = document.getElementById("dead");
let lost = document.getElementById("lost");
let hole = document.querySelectorAll('.hole');

for (let elem of hole) {
    elem.onclick = function (){
        if (elem.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }
        if (lost.textContent == 5) {
            alert("Вы проиграли");
            resetGame();
        } else if (dead.textContent == 10) {
            alert("Вы победили");
            resetGame();
        }
    };
}
function resetGame(){
    dead.textContent = 0;
    lost.textContent = 0;
}