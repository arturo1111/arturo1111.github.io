function suscribir() {
  // 1. Seleccionar la caja de texto
  const emailInput = document.getElementById("email");

  // 2. Obtener el texto ingresado en la caja de texto
  const email = emailInput.value;

  // 3. Mostrar la alerta
  const mensaje = `Gracias por suscribirte ${email}`;
  alert(mensaje);
}

// 1. Seleccionar el boton
const button = document.getElementById("btn");

// 2. Agregar el event listener para el click del botón
button.addEventListener("click", function (e) {
  suscribir();
})
