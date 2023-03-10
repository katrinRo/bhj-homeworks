let list = document.querySelectorAll(".dropdown__list");
let head = document.querySelector(".dropdown__value");
let item = document.querySelectorAll(".dropdown__link");

function changeMenu(e) {
    head.textContent = this.textContent;
    e.preventDefault();
    for (let i = 0; i < list.length; i++) {
        list[i].classList.remove("dropdown__list_active");
    }
}

for (let i of item) {
    i.addEventListener('click', changeMenu);
}

head.onclick = function () {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.add("dropdown__list_active");
    }
}