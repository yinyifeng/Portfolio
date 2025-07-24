let i = 0;
const typedText = document.getElementById("typed-text");
const originalText = typedText.textContent;
typedText.textContent = ''; // Clear it so we can type it
const learnMoreBtn = document.getElementById("learn-more");

const speed = 50;

function typeWriter() {
  if (i < originalText.length) {
    typedText.textContent += originalText.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    learnMoreBtn.style.display = "inline-block"; // Show the button
  }
}

document.addEventListener("DOMContentLoaded", typeWriter);
