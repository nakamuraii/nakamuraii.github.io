const menuBtn = document.getElementById('menuButton');
const closeBtn = document.querySelector('.closeButton');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.closeButton.menu__link');

function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
}
  
let options = {
  threshold: [0.3] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
  
for (let elm of elements) {
  observer.observe(elm);
}

function showMenu() {
    mobileMenu.classList.remove('closed-menu')
    mobileMenu.classList.add('open-menu')
}

function closeMenu() {
    mobileMenu.classList.remove('open-menu')
    mobileMenu.classList.add('closed-menu')
}

const textToType = "Front-End React Developer";
const typedTextElement = document.getElementById("typed-text");

let typingSpeed = 40;
let screedWidth = window.innerWidth;
let currentIndex = 0;
 
if (screedWidth <= 607) {
    typingSpeed = 35;
}

function typeText() {
    if (currentIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    }
}
 
typeText();
menuBtn.addEventListener('click', showMenu)
closeBtn.addEventListener('click', closeMenu)
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));



