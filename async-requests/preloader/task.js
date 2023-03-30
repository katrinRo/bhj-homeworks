const loading = document.getElementById("loader");
const items = document.getElementById("items");
let xhr = new XMLHttpRequest();
xhr.open('GET', "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        const response = JSON.parse(xhr.responseText);
        loader.classList.remove("loader_active");
        Array.from(Object.values(response.response.Valute)).map(el => {
            items.insertAdjacentHTML("afterbegin", `
            <div class="item">
                <div class="item__code">
                    ${el.CharCode}
                </div>
                <div class="item__value">
                    ${el.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
                </div>
            `);
        })
    }
}