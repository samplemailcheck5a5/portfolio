// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact form submission
const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    formMessage.style.color = "green";
    formMessage.textContent = "Thank you, " + name + "! Your message has been sent.";
    form.reset();
  } else {
    formMessage.style.color = "red";
    formMessage.textContent = "Please fill out all fields.";
  }
});
