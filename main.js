// menu show
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav) {
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show'); //javascript css to display nav menu
        })
    }
}
showMenu('nav-toggle', 'nav-menu');

//Active an Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

//fixed header
function scrollHeader(){
    if (window.scrollY > 100) {
        document.querySelector('.header').classList.add('fixed');
    }
    else{
        document.querySelector('.header').classList.remove('fixed');
    }
}
window.addEventListener('scroll', scrollHeader);