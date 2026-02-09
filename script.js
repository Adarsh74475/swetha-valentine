const music = document.getElementById("bgMusic");
const noBtn = document.getElementById("noBtn");
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const page3 = document.getElementById("page3");
const page4 = document.getElementById("page4");

// Navigation
function goToValentine() {
  page1.classList.add("hidden");
  page2.classList.remove("hidden");
  music.play();
}

function sayYes() {
  page2.classList.add("hidden");
  page3.classList.remove("hidden");
  startConfetti();
  startTyping();
}

function openLetter() {
  page3.classList.add("hidden");
  page4.classList.remove("hidden");
}

// NO button escape 😈
noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Floating hearts
const hearts = document.querySelector(".hearts");
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 12 + "px";
  hearts.appendChild(heart);
  setTimeout(() => heart.remove(), 6000);
}, 300);

// Confetti
let confetti = [];
function startConfetti() {
  confetti = [];
  for (let i = 0; i < 200; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * 5 + 2
    });
  }
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = "#fff";
    ctx.fill();
    c.y += c.d;
  });
  requestAnimationFrame(animateConfetti);
}

// Typing Animation
const text =
`"You are the only one who truly believed in me, and I’m so grateful to have you in my life.
 You are my favorite person, I love your smile, the time we spend together, my safe place, and my happiness.
 I love you so much, Swethammoo. ❤️🥰"`;

let i = 0;
function startTyping() {
  const el = document.getElementById("typedText");
  el.textContent = "";
  i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 50);
}

// Slideshow
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow img");

setInterval(() => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
}, 2500);

// Hidden Love
const typedText = document.getElementById("typedText");
const secretLove = document.getElementById("secretLove");

typedText.addEventListener("click", () => {
  secretLove.style.opacity = 1;
});