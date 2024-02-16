const textToType = "Front-End React Developer";
const typedTextElement = document.getElementById("typed-text");

let typingSpeed = 65;
let screedWidth = window.innerWidth;
let currentIndex = 0;
 
if (screedWidth <= 607) {
    typingSpeed = 45;
}

function typeText() {
    if (currentIndex < textToType.length) {
        typedTextElement.textContent += textToType.charAt(currentIndex);
        currentIndex++;
        setTimeout(typeText, typingSpeed);
    }
}
 
typeText();
