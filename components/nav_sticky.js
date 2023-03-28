const navbar_top = document.querySelector('.navbar').getBoundingClientRect().top;
window.addEventListener('scroll', () => {
    if(window.pageYOffset >= navbar_top) {
        const navbar = document.querySelector('.navbar');
        navbar.style.cssText = 'position: fixed; top: 0';
    }else {
        const navbar = document.querySelector('.navbar');
        navbar.style.cssText = 'position: inherit;';
    }
});