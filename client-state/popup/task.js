const modalMain = document.getElementById("subscribe-modal");
let close= document.querySelector(".modal__close_times");

if (!document.cookie.includes('closeModal=closed')) {
    modalMain.classList.add("modal_active");
}
close.addEventListener('click', e =>{
    e.preventDefault();
    document.cookie = ('closeModal=closed');
    modalMain.classList.remove("modal_active");
})
