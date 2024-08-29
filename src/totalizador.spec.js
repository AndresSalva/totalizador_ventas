import mostrarCantidad from "./totalizador.js";

describe("Mostrar cantidad de items", () => {
  it("deberia mostrar la cantidad", () => {
    expect(mostrarCantidad(5)).toEqual(5);
  });
});
