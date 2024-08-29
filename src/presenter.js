import {mostrarCantidad,mostrarPrecio} from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items = Number.parseInt(cantidad.value);
  const precio_items = Number.parseInt(precio.value);
  div.innerHTML = "Cantidad de items: " + mostrarCantidad(cantidad_items) + " Precio por items:" + mostrarPrecio(precio_items) +"</p>";
});
