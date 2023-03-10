let content = document.querySelectorAll(".tab__content");
let headTab = document.querySelectorAll(".tab");
let index = 0;

function newTab(item) {
    index = Array.from(headTab).findIndex((item) => item.closest(".tab_active"));
    headTab[index].classList.remove("tab_active");
    content[index].classList.remove("tab__content_active");
    headTab[item].classList.add("tab_active");
    content[item].classList.add("tab__content_active");
}

for (let i = 0; i < headTab.length; i++) {
    headTab[i].onclick = function (){
        newTab(i);
    }
}
