// CAROUSEL
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(() => {
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3500);

// BMI CALCULATOR
function calculateBMI() {
  const w = document.getElementById("weight").value;
  const h = document.getElementById("height").value / 100;
  if (!w || !h) return;

  const bmi = (w / (h * h)).toFixed(2);
  document.getElementById("bmiResult").innerText =
    "Your BMI is " + bmi;
}

// EVENT REGISTRATION
function registerEvent(eventName) {
  localStorage.setItem(eventName, "registered");
  document.getElementById("eventMsg").innerText =
    "✅ Registered for " + eventName;
}

// EVENT REMINDER
function setReminder(eventName) {
  localStorage.setItem(eventName + "_reminder", "set");
  document.getElementById("eventMsg").innerText =
    "⏰ Reminder set for " + eventName;
}
