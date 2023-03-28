// estableciendo la conexión con la API de los productos
const see_products = () => {
    return fetch('http://localhost:3000/products')
    .then(resp => resp.json())
    .catch(err => console.log(err));
}

const display_clients = () => {
    return fetch('http://localhost:3000/client')
    .then(resp => resp.json())
    .catch(err => console.log(err));
}

const add_product = (image, name, price, measure) => {
    const product = {
        id: new Date().getTime(),
        image,
        name,
        price,
        measure
    };
    return fetch('http://localhost:3000/products', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product)
    })
    .catch(err => console.log(`ERROR ${err}`));
}

export const services = {
    see_products,
    add_product,
    display_clients
};