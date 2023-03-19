function register_content(card) {
    card.querySelector('h2').textContent = 'registrarse';
    card.querySelector('.button').textContent = 'registro';
    btn.parentElement.querySelector('h3').textContent = '¿ya tienes una cuenta?';
    btn.textContent = '¡inicia sesión aquí!';
}

function login_content(card) {
    card.querySelector('h2').textContent = 'iniciar sesión';
    card.querySelector('.button').textContent = 'login';
    btn.parentElement.querySelector('h3').textContent = '¿no tienes una cuenta?';
    btn.textContent = '¡regístrate aquí!';
}

const btn = document.querySelector('.no-auth__content p');

btn.addEventListener('click', () => {
    const card_auth = document.querySelector('.card__content-auth');
    const card_bg = document.querySelector('.card__content-bg');

    if(screen.width > 480) {  
        if(!(card_bg.classList.contains('card__left-active') && card_auth.classList.contains('card__right-active'))) {
            card_bg.classList.replace('card-noactive', 'card__left-active');
            card_auth.classList.replace('card-noactive', 'card__right-active');
            
            setTimeout(()=> {register_content(card_auth)}, 150); // delay para no hacer el cambio tan brusco antes de la animación
        }else {
            card_bg.classList.replace('card__left-active', 'card-noactive');
            card_auth.classList.replace('card__right-active', 'card-noactive');

            setTimeout(()=> {login_content(card_auth)}, 150);
        }
    }else {
        if(card_auth.querySelector('h2').textContent === 'iniciar sesión') 
            register_content(card_auth)
        else 
            login_content(card_auth)     
    }
});