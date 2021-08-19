// NAV
const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".menu-list");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");

menuBtn.onclick = () => {
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

cancelBtn.onclick = () => {
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// TEXT ANIMATION
var typed = new Typed(".typing-text", {
    strings: ["Full Stack", "Web", "Front-End", "Back-End"],
    typeSpeed: 70,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-dot", {
    strings: ["."],
    typeSpeed: 100,
    backSpeed: 70,
    showCursor: false,
    loop: true
});

// ANIMATION
AOS.init();

// PRELOADER
var loader = document.getElementById("preloader");

window.addEventListener("load", function(){
    loader.style.display = "none";
});