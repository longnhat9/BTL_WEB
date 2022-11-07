var menu_icon = document.querySelector('.header-mobile-tablet__menu-icon');
var menu = document.querySelector('.header__menu');
var close = document.querySelector('.header-menu__btn-back-icon');

over_lay = document.querySelector('.header__overlay');

menu_icon.onclick = function() {
    menu.style.transform = 'translateX(0%)';
    over_lay.style.display = 'block';
}

close.onclick = function() {
    menu.style.transform = 'translateX(-100%)';
    setTimeout(function() {
        over_lay.style.display = 'none';
    }, 300);
}

var getMenu = document.querySelector('.header__container__menu');
var getOverlay = document.querySelector('.body__overlay');
getMenu.onmousemove = function() {
    getOverlay.style.display = 'block';
}

getMenu.onmouseleave = function() {
    getOverlay.style.display = 'none';
}