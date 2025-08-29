// Part 1: Event Handling
document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Button was clicked!");
});

document.getElementById("toggleMode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Part 2: Interactive Elements
// Counter
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increment").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

// FAQ Toggle
document.getElementById("faq-q").addEventListener("click", () => {
  document.getElementById("faq-a").classList.toggle("hidden");
});

// Part 3: Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name === "") {
    alert("Name cannot be empty!");
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    alert("Please enter a valid email!");
    return;
  }

  if (password.length < 6) {
    alert("Password must be at least 6 characters!");
    return;
  }

  alert("Form submitted successfully ✅");
});
