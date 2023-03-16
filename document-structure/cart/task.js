const quantity = document.querySelectorAll('.product__quantity-control');
const addBtn = [...document.querySelectorAll('.product__add')];

for (const i of quantity) {
    i.addEventListener('click', (e) => {
        const parent = i.parentElement;
        const count = parent.querySelector('.product__quantity-value');
        if (i.classList.contains('product__quantity-control_dec')) {
            if (count != 0){
                count.innerText = Number(count.innerText) - 1;
            }
        } else {
            count.innerText = Number(count.innerText) + 1;
        }
    })
};

for (const i of addBtn) {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        const product = i.closest('.product');
        const productImg = product.querySelector('.product__image').src;
        const productValue = product.querySelector('.product__quantity-value').innerText;
        const idProduct = product.getAttribute('data-id');
        let carts = document.querySelector('.cart__products');
        const allCard = document.querySelectorAll('.cart__product');
        const isProduct = Array.from(allCard).find(i => i.getAttribute("data-id") === idProduct);
        if (isProduct){
            let count = isProduct.querySelector('.cart__product-count');
            count.innerText = Number(count.innerText) + Number(productValue);
        } else {
            let div = document.createElement('div');
            div.classList.add('cart__product');
            div.setAttribute('data-id', idProduct);
            div.innerHTML +=  `
        <img class ="cart__product-image" src="${productImg}">
        <div class = "cart__product-count">${productValue}
        </div>
        `;
            carts.appendChild(div);
        }
    })
}
