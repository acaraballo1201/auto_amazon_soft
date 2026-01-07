const { BuscarArticulo } = require('./BuscarArticulo');
const { SeleccionarArticulo } = require('./SeleccionarArticulo');
const { AgregarAlCarrito } = require('./AgregarAlCarrito');

class BuscarYAgregarArticulo {
  constructor(textoBusqueda, locatorArticulo) {
    this.textoBusqueda = textoBusqueda;
    this.locatorArticulo = locatorArticulo;
  }

  static con(textoBusqueda, locatorArticulo) {
    return new BuscarYAgregarArticulo(textoBusqueda, locatorArticulo);
  }

  async performAs(actor) {
    await actor.attemptsTo(
      BuscarArticulo.conTexto(this.textoBusqueda),
      SeleccionarArticulo.conLocator(this.locatorArticulo),
      AgregarAlCarrito.ahora()
    );
  }
}

module.exports = { BuscarYAgregarArticulo };
