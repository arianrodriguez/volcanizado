import { services } from "./productsAPI.js";

const catalogo = document.querySelector('.catalogo__content-products');

const container = (product, product2) => {
    const card_content = document.createElement('div');
    card_content.classList.add('products__content', 'flex-center')

    card_content.innerHTML = `<div class="products__container">
    <div class="products__container-item">
        <img src="/assets/img/piedra.PNG" alt="piedra prueba">
        <div class="item__info">
            <h3>${product.name}</h3>
            <span class="item__info-price">${product.price}</span>
            <span class="item__info-measure">${product.measure}</span>
        </div>
    </div>
</div>

<div class="products__container">
    <div class="products__container-item">
        <img src="/assets/img/piedra.PNG" alt="piedra prueba">
        <div class="item__info">
            <h3>${product2.name}</h3>
            <span class="item__info-price">${product2.price}</span>
            <span class="item__info-measure">${product2.measure}</span>
        </div>
    </div>
</div>`

    return card_content;
}
services.see_products()
    .then((data)=>{
        for(let i=0; i<data.length-1; i+=2) {
            catalogo.appendChild(container(data[i], data[i+1]));
        }
    })
