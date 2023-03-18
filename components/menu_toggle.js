const navbar_toggle = document.querySelector('.navbar__content-toggle');
const navbar = document.querySelector('.navbar__content-list .list__content');
const navbar_toggle_icon = document.querySelector('.navbar__content-toggle i');

navbar_toggle_icon.addEventListener('click', () => {
    if(!navbar.classList.contains('list__content-active')) {
        navbar.classList.replace('list__content', 'list__content-active');
        navbar_toggle_icon.setAttribute('class', 'fa fa-times');

    }else {
        navbar.classList.replace('list__content-active', 'list__content');
        navbar_toggle_icon.setAttribute('class', 'fa-solid fa-bars');
    }
});