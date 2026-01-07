const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');

class SeleccionarArticulo {
  constructor(locatorArticulo) {
    this.locatorArticulo = locatorArticulo;
  }

  static conLocator(locatorArticulo) {
    return new SeleccionarArticulo(locatorArticulo);
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    await page.waitForSelector(this.locatorArticulo, { timeout: 15000 });
    await page.click(this.locatorArticulo);
  }
}

module.exports = { SeleccionarArticulo };
