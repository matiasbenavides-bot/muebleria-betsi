const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".overlay");
const links = document.querySelectorAll(".nav a");

// abrir / cerrar menú
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  overlay.classList.toggle("active");

  // cambiar icono
  if (nav.classList.contains("active")) {
    menuToggle.textContent = "✕";
  } else {
    menuToggle.textContent = "☰";
  }
});

// cerrar al hacer click en overlay
overlay.addEventListener("click", () => {
  nav.classList.remove("active");
  overlay.classList.remove("active");
  menuToggle.textContent = "☰";
});

// cerrar al hacer click en link
links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.textContent = "☰";
  });
});