// Hamburger Line

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// Navrbar-Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const to_top = document.querySelector('#to_top')
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
        to_top.classList.remove('hidden');
        to_top.classList.add('flex');
    }else {
        header.classList.remove('navbar-fixed');
        to_top.classList.remove('flex');
        to_top.classList.add('hidden');
    }
}


// Klick di Luar Hamburger Menu
window.addEventListener('click', function(e) {
    if(e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
}) 


// Dark Mode
const html = document.querySelector('html');
const darkToggle = document.querySelector('#dark-toggle');

darkToggle.addEventListener('click', function(){
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    }else {
        html.classList.remove('dark');
        localStorage.theme = 'light';
    }
})

// Sesuaikan Togglenya
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }