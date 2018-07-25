window.onscroll = function () {scrollHandler()};
// var nav = document.getElementById("nav");
var nav_wrapper = document.querySelector(".nav-wrapper");
var logo = document.querySelector(".nav__logo");
var prevScroolTop = 0;

function scrollHandler() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var isMoveingUp = scrollTop > prevScroolTop;
    prevScroolTop = scrollTop;

    if(isMoveingUp && scrollTop > 1) {
        logo.classList.remove("nav-large");
        logo.classList.add("nav-small");
        nav_wrapper.classList.add("move-nav-up");
        nav_wrapper.classList.remove("move-nav-down");
    }
    if(!isMoveingUp && scrollTop < 50) {
        logo.classList.remove("nav-small");
        logo.classList.add("nav-large");
        nav_wrapper.classList.remove("move-nav-up");
        nav_wrapper.classList.add("move-nav-down");
    }
}