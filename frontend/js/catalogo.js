/**
 * Catálogo de productos — botones "Cotizar por WhatsApp"
 *
 * Envía al dueño (usuario creador) un mensaje con el producto exacto:
 * nombre, código y el enlace directo a la página/ancla del mueble, para que
 * la cotización quede clara desde el primer mensaje.
 */
(function () {
  "use strict";

  const TELEFONO = "56988996929"; // Chile, formato internacional

  // Vincula (o re-vincula) los botones .cotizar-btn presentes en el DOM.
  // Se llama al cargar y de nuevo tras renderizar productos dinámicos.
  function bindCotizar() {
    const botones = document.querySelectorAll(".cotizar-btn");
    botones.forEach(function (boton) {
      // Evitar doble binding (si el nodo ya tiene el flag, saltar)
      if (boton.dataset.bound === "1") return;
      boton.dataset.bound = "1";

      boton.addEventListener("click", function (event) {
        event.preventDefault();

        const nombre = (boton.dataset.nombre || "Mueble").trim();
        const id = (boton.dataset.id || "").trim().toLowerCase();
        const textoOriginal = boton.textContent;

        // Enlace directo al mueble: la URL actual + el ancla del producto.
        const urlProducto =
          window.location.origin + window.location.pathname + "#" + id;

        const mensaje =
          "Hola, quiero cotizar este mueble:\n" +
          "🪑 Producto: " + nombre + "\n" +
          "🔢 Código: " + id.toUpperCase() + "\n" +
          "🔗 Ver producto: " + urlProducto + "\n" +
          "\nQuedo atento a tu respuesta. Gracias!";

        const url =
          "https://wa.me/" + TELEFONO + "?text=" + encodeURIComponent(mensaje);

        boton.textContent = "Abriendo WhatsApp…";
        boton.disabled = true;

        window.open(url, "_blank");

        setTimeout(function () {
          boton.textContent = textoOriginal;
          boton.disabled = false;
        }, 2500);
      });
    });
  }

  // Exponer para que productos.js pueda re-vincular tras render dinámico.
  window.bindCotizar = bindCotizar;

  // Vincular los que ya existan al cargar.
  bindCotizar();

  // Scroll suave si llega con #producto.
  if (window.location.hash) {
    let el = document.querySelector(window.location.hash);
    if (el) {
      setTimeout(function () {
        el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  }
})();
