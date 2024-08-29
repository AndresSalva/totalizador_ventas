import {mostrarCantidad,mostrarPrecio,mostrarEstado} from "./totalizador";

const cantidad = document.querySelector("#cantidad");
const precio = document.querySelector("#precio");
const estado = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad_items = Number.parseInt(cantidad.value);
  const precio_items = Number.parseInt(precio.value);
  const estado_items = estado.value;
  div.innerHTML = "Cantidad de items: " + mostrarCantidad(cantidad_items) + "</br> Precio por items:" + mostrarPrecio(precio_items) + "</br> Estado: "+ mostrarEstado(estado_items)+"</p>";
});
