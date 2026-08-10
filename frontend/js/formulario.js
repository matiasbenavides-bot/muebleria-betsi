/**
 * Formulario de cotización general (landing)
 *
 * Arma el mensaje y lo envía por WhatsApp al dueño de la mueblería.
 */
(function () {
  "use strict";

  const TELEFONO = "56988996929"; // Chile, formato internacional
  const form = document.querySelector(".cotizar-form");

  if (!form) {
    return; // Página sin formulario (ej. catálogo) — no hace nada.
  }

  const boton = form.querySelector('button[type="submit"]');

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const tipo = document.getElementById("tipo").value.trim();
    const descripcion = document.getElementById("descripcion").value.trim();

    const mensaje =
      "Hola, quiero solicitar una cotización a medida:\n" +
      "👤 Nombre: " + nombre + "\n" +
      "🪑 Tipo de mueble: " + (tipo || "A definir") + "\n" +
      "📝 Descripción: " + (descripcion || "Sin descripción") + "\n" +
      "\nQuedo atento a tu respuesta. Gracias!";

    const url =
      "https://wa.me/" + TELEFONO + "?text=" + encodeURIComponent(mensaje);

    // Feedback visual breve.
    if (boton) {
      boton.textContent = "Abriendo WhatsApp…";
      boton.disabled = true;
    }

    window.open(url, "_blank");

    // Restaura el botón si el usuario vuelve a la pestaña.
    setTimeout(function () {
      if (boton) {
        boton.textContent = "Solicitar cotización";
        boton.disabled = false;
      }
    }, 2500);
  });
})();
