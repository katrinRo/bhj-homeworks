let slider = document.querySelectorAll(".slider__item");
let prev = document.querySelector(".slider__arrow_prev");
let next = document.querySelector(".slider__arrow_next");

function getIndexNow () {
    return Array.from(slider).findIndex((item) => item.closest(".slider__item_active"));;
}

prev.onclick = function () {
    let index = getIndexNow();
    slider[index].classList.remove("slider__item_active");
    if (index == 0) {
        index = slider.length - 1;
        slider[index].classList.add("slider__item_active");
    } else {
        index -= 1;
        slider[index].classList.add("slider__item_active");
    }
}

next.onclick = function () {
    let index = getIndexNow();
    slider[index].classList.remove("slider__item_active");
    if (index == (slider.length - 1)) {
        index = 0;
        slider[index].classList.add("slider__item_active");
    } else {
        index += 1;
        slider[index].classList.add("slider__item_active");
    }

}

