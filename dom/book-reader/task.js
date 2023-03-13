let fontSize = document.querySelectorAll(".font-size");

function changeSize(e){
    e.preventDefault();
    let activeSize = document.querySelector(".font-size_active");
    activeSize.classList.remove("font-size_active");
    let div = this.closest('#book');
    let size = this.dataset.size;
    this.classList.add("font-size_active");
    div.classList.remove("book_fs-big");
    div.classList.remove("book_fs-small");
    if (size) {
        size == "big" ? div.classList.add("book_fs-big") : div.classList.add("book_fs-small");
    }
}

for (let i of fontSize) {
    i.addEventListener("click", changeSize);
}