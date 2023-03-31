const formSign = document.getElementById('signin__form');
const blockWelcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

formSign.addEventListener("submit", e=> {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    const fd = new FormData(formSign);
    xhr.responseType = 'json';
    xhr.send(fd);

    xhr.addEventListener('load', () => {
        if (xhr.readyState === 4) {
            if (xhr.response.success) {
                localStorage.setItem("userId", xhr.response.user_id);
                formSign.reset();
                const parent = formSign.parentElement;
                parent.classList.remove("signin_active");
                blockWelcome.classList.add("welcome_active");
                userId.textContent = xhr.response.user_id;
            } else{
                alert("Неверный логин или пароль");
            }
        }
    })
    e.preventDefault();
})

if (localStorage.getItem("userId")) {
    const parent = formSign.parentElement;
    parent.classList.remove("signin_active");
    blockWelcome.classList.add("welcome_active");
    userId.textContent = localStorage.userId;
}