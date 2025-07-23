let i = 0;
const typedText = document.getElementById("typed-text");
const originalText = typedText.textContent;
typedText.textContent = ''; // Clear it so we can type it

const speed = 80;

function typeWriter() {
  if (i < originalText.length) {
    typedText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
