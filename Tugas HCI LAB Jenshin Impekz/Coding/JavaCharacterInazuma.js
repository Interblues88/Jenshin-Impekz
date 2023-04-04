// Toggle class active
const navbarNav = document.querySelector ('.navbar-nav');
//ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle("active");
};

// klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener ('click', function (e){
    if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});

const hovering = document.querySelector ('.map-active');
//ketika hamburger menu di klik
document.querySelector('.mapp').onmouseenter = () => {
    hovering.classList.toggle('active');
};
document.querySelector('.mapp').onmouseleave = () => {
    hovering.classList.remove('active');
}
document.querySelector('.mapp1').onmouseenter = () => {
    hovering.classList.toggle('active');
};
document.querySelector('.mapp1').onmouseleave = () => {
    hovering.classList.remove('active');
}
document.querySelector('.mapp2').onmouseenter = () => {
    hovering.classList.toggle('active');
};
document.querySelector('.mapp2').onmouseleave = () => {
    hovering.classList.remove('active');
}