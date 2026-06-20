// === SHRINK NAVBAR + HERO ON SCROLL ===
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero');
  if (window.scrollY > 100) {
    hero.classList.add('shrink');
  } else {
    hero.classList.remove('shrink');
  }
});

// === SLIDESHOW LOGIC ===
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
function changeSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}
setInterval(changeSlide, 3000);

// === HAMBURGER MENU ===
const hamburger = document.getElementById('hamburger');
const navMenu   = document.getElementById('nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}
