var nav = document.querySelector('nav')
var img = document.getElementById('header-logo')
const navmenu = document.querySelector('header .navbar ul');

window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add('sticky');
        img.src = 'images/makintahu.png';

    } else{
        nav.classList.remove('sticky');
        img.src = 'images/makintahu-white.png';

    }
});

function menuFunction() {
    navmenu.classList.toggle('slide');
    nav.classList.add('sticky');
    img.src = 'images/makintahu.png';
  }

var prevScrollpos = window.pageYOffset;

window.onscroll = function() {
var currentScrollPos = window.pageYOffset;

  if (prevScrollpos != currentScrollPos) {
    navmenu.classList.remove('slide');
  } 
  prevScrollpos = currentScrollPos;
}