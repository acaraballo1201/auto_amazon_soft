const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const searchPage = require('../userInterfaces/search.inPage');

const { BuscarYAgregarArticulo } = require('./BuscarYAgregarArticulo');


class SeleccionarProducto {
  constructor(producto) {
    this.producto = producto;
  }

  static conNombre(producto) {
    return new SeleccionarProducto(producto);
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

  await actor.attemptsTo(
  BuscarYAgregarArticulo.con(this.producto, searchPage.article_1),
  BuscarYAgregarArticulo.con(this.producto, searchPage.article_2),
  BuscarYAgregarArticulo.con(this.producto, searchPage.article_3)
);


    await page.waitForSelector(searchPage.carShopping, { timeout: 15000 });
    await page.click(searchPage.carShopping);
  }
}

module.exports = { SeleccionarProducto };
