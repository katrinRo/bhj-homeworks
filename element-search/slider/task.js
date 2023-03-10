let slider = document.querySelectorAll(".slider__item");
let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");
let index = 0;

function getIndexNow () {
    index = Array.from(slider).findIndex((item) => item.closest(".slider__item_active"));;
}

prev.onclick = function () {
    getIndexNow();
    slider[index].classList.remove("slider__item_active");
    if (index == 0) {
        index = 4;
        slider[index].classList.add("slider__item_active");
    } else {
        index -= 1;
        slider[index].classList.add("slider__item_active");
    }
}

next.onclick = function () {
    getIndexNow();
    slider[index].classList.remove("slider__item_active");
    if (index == 4) {
        index = 0;
        slider[index].classList.add("slider__item_active");
    } else {
        index += 1;
        slider[index].classList.add("slider__item_active");
    }

}

