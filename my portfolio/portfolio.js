const heder = document.querySelector("header");
window.addEventListener("scroll",function() {
    Headers.classList.toggle ("sticky",window.scrollY > 100);
});