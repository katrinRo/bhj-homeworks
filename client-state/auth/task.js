const formSign = document.getElementById('signin__form');
const blockWelcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');

formSign.addEventListener("submit", e=> {
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
    const fd = new FormData(formSign);
    xhr.send(fd);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            const resp = JSON.parse(xhr.responseText);
            if (resp.success) {
                const parent = formSign.parentElement;
                parent.classList.remove("signin_active");
                blockWelcome.classList.add("welcome_active");
                userId.textContent = resp.user_id;
            } else{
                alert("Неверный логин или пароль");
            }
        }
    }
    e.preventDefault();
})
