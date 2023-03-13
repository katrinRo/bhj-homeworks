let rotatorCase = document.querySelectorAll('.rotator__case');

function nextWord(){
    let indexActiveWord = Array.from(rotatorCase).findIndex((element) => element.closest('.rotator__case_active'));
    rotatorCase[indexActiveWord].classList.remove('rotator__case_active');
    indexActiveWord++
    if (indexActiveWord == (rotatorCase.length - 1)) {
        rotatorCase[0].classList.add('rotator__case_active');
    } else {
        rotatorCase[indexActiveWord].classList.add('rotator__case_active');
    }
}

setInterval(nextWord, 1000);
