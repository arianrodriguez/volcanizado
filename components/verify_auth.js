import { services } from "../services/productsAPI.js";

const form = document.querySelector('.auth__container form');

function auth(user, psw) {
    let index = null;
    services.display_clients()
        .then((data) => {
            if(data.some((client, i) => {
                index = i;
                return client.username === user
            })) {
                (data[index].pass === psw)? window.location.href = '../screens/admin.html' : alert('Usuario o contraseña incorrectas');
            }else {
                alert('Usuario no registrado!');
            }
            
        });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const btn = form.querySelector('button');
    const user = form.querySelector('input[name="email"]').value;
    const psw = form.querySelector('input[name="psw"]').value;

    if(btn.textContent.trim() === 'login') {
        auth(user, psw);
    }else {
        console.log('no alocate');
    }

})