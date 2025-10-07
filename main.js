const menu = document.getElementById('menu');
const nav = document.getElementById('nav');

menu.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Cierra el menú al tocar un enlace en móvil
document.querySelectorAll('#nav a').forEach(link => {
    link.addEventListener('click', () => nav.classList.remove('active'));
});
