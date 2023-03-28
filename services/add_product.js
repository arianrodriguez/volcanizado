import { services } from "./productsAPI.js";

const form = document.querySelector('.addproduct__content form');

form.addEventListener('submit', (e)=> {
    e.preventDefault();

    const name = form.querySelector('input[name="name_product"]').value;
    const price = form.querySelector('input[name="price_product"]').value;
    const measure = form.querySelector('input[name="measure_product"]').value;


});