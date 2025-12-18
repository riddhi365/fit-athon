let index = 0;
const slides = document.querySelectorAll(".slides");

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 3000);

// Dark / Light mode
function toggleTheme() {
  document.body.classList.toggle("light");
}

// BMI
function calculateBMI() {
  const w = document.getElementById("weight").value;
  const h = document.getElementById("height").value / 100;
  if (!w || !h) return;
  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText = "Your BMI: " + bmi;
}
