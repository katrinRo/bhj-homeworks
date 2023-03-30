let title = document.getElementById('poll__title');
let pAnswer = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        title.textContent = response.data.title;
        response.data.answers.map(el => {
            pAnswer.insertAdjacentHTML("afterbegin", `
            <button class="poll__answer">
            ${el}
            </button>
            `
            );
        })
    }
    const btn = document.querySelectorAll('.poll__answer');
    for (let i of btn){
        i.onclick = function (){
            alert("Спасибо, ваш голос засчитан!");
        }
    }
}

