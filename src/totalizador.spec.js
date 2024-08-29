import {mostrarCantidad,mostrarPrecio,mostrarEstado} from "./totalizador.js";

describe("Mostrar cantidad de items", () => {
  it("deberia mostrar la cantidad", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
  it("deberia mostrar el precio por items", () => {
    expect(mostrarPrecio(10)).toEqual(10);
  });
  it("deberia mostrar estado", () => {
    expect(mostrarEstado("TX")).toEqual("TX");
  });
});
