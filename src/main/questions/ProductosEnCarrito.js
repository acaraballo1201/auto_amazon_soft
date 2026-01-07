const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const cartPage = require('../userInterfaces/cart.inPage');

class ProductosEnCarrito {
  static checkoutDisponible() {
    return new ProductosEnCarrito();
  }

  async answeredBy(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    try {

      await page.waitForSelector(cartPage.checkout, {
        timeout: 15000,
        state: 'visible',
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}

module.exports = { ProductosEnCarrito };
