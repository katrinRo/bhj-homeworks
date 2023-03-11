let clickMenu = document.querySelectorAll('.menu__link');

for (let i of clickMenu) {
    let child = i.closest('.menu__item').querySelector(".menu_sub");
    if (child) {
        i.onclick = function () {
            child.classList.toggle("menu_active");
            return false;
        }
    }
}

