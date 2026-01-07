const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const searchPage = require('../userInterfaces/search.inPage');

class AgregarAlCarrito {
  static ahora() {
    return new AgregarAlCarrito();
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    await page.waitForSelector(searchPage.addToCartButton, { timeout: 15000 });
    await page.click(searchPage.addToCartButton);

    const continueLocator = page.locator(searchPage.continueShopping);

    if (await continueLocator.count() > 0 && await continueLocator.first().isVisible()) {
      await continueLocator.first().click();
    } else {
      await page.waitForTimeout(5000);
    }
  }
}

module.exports = { AgregarAlCarrito };
