const modalMain = document.getElementById("modal_main");
modalMain.classList.add("modal_active");
let close= document.querySelectorAll(".modal__close_times");
let showSuccess = document.querySelector(".show-success");
let modalSuccess = document.getElementById("modal_success");

showSuccess.onclick = function () {
    modalClose();
    modalSuccess.classList.add("modal_active");
}

function modalClose() {
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.remove("modal_active");
}

for (let i of close) {
    i.addEventListener('click', modalClose)
}

