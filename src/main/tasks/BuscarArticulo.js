const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const searchPage = require('../userInterfaces/search.inPage');

class BuscarArticulo {
  constructor(textoBusqueda) {
    this.textoBusqueda = textoBusqueda;
  }

  static conTexto(textoBusqueda) {
    return new BuscarArticulo(textoBusqueda);
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    await page.waitForSelector(searchPage.inputSearch, { timeout: 15000 });
    await page.fill(searchPage.inputSearch, this.textoBusqueda);
    await page.click(searchPage.btnSearch);
  }
}

module.exports = { BuscarArticulo };
