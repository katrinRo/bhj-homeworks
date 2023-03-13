let reval = document.getElementsByClassName('reveal');

document.addEventListener("scroll", isVisible)

function isVisible() {
    for (let i of reval) {
        const {top, bottom} = i.getBoundingClientRect();
        bottom > 0 && top < window.innerHeight ?  i.classList.add('reveal_active') : i.classList.remove('reveal_active');
    }
}
