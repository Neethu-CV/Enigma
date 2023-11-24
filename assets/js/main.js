/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg') 
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr=ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500
})

sr.reveal('.home__images',{distance:'120px',delay:200})
sr.reveal('.home__title',{delay:600})
sr.reveal('.home__date',{delay:800})
sr.reveal('.home__at',{delay:800})
sr.reveal('.home__register__button',{delay:1000})
//sr.reveal('.home__info',{origin:'left',interval:200,delay:800})

/*=============== FAQ ===============*/
document.addEventListener('DOMContentLoaded', function () {
    var accordionItems = document.querySelectorAll('.accordion-item');
  
    accordionItems.forEach(function (item) {
      var accordionLink = item.querySelector('.accordion-link');
      var arrowDown = item.querySelector('.ri-arrow-down-s-line');
      var arrowUp = item.querySelector('.ri-arrow-up-s-line');
      var answer = item.querySelector('.answer');
  
      accordionLink.addEventListener('click', function (event) {
        event.preventDefault();
  
        item.classList.toggle('open');
  
        accordionItems.forEach(function (otherItem) {
          if (otherItem !== item && otherItem.classList.contains('open')) {
            otherItem.classList.remove('open');
            otherItem.querySelector('.answer').style.maxHeight = 0;
            otherItem.querySelector('.ri-arrow-down-s-line').style.display = 'block';
            otherItem.querySelector('.ri-arrow-up-s-line').style.display = 'none';
          }
        });
  
        if (item.classList.contains('open')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
          arrowDown.style.display = 'none';
          arrowUp.style.display = 'block';
        } else {
          answer.style.maxHeight = 0;
          arrowDown.style.display = 'block';
          arrowUp.style.display = 'none';
        }
      });
    });
  });
    
  
    
  
  
  
  
  
  
  
  
