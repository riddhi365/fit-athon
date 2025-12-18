let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3500);

function calculateBMI() {
  const w = document.getElementById("weight").value;
  const h = document.getElementById("height").value / 100;
  if (!w || !h) return;
  document.getElementById("bmiResult").innerText =
    "Your BMI is " + (w / (h * h)).toFixed(2);
}

function registerEvent(name) {
  localStorage.setItem(name, "registered");
  document.getElementById("eventMsg").innerText =
    "✅ Registered for " + name;
}

function setReminder(name) {
  localStorage.setItem(name + "_reminder", "set");
  document.getElementById("eventMsg").innerText =
    "⏰ Reminder set for " + name;
}
