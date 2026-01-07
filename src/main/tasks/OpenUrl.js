const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const searchPage = require('../userInterfaces/search.inPage');

class OpenUrl {
  constructor(url) {
    this.url = url;
  }

  static at(url) {
    return new OpenUrl(url);
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    // Abrir URL
    await page.goto(this.url);

    // Si aparece "Continue shopping", hacer click; si no, esperar 5s
    const continueLocator = page.locator(searchPage.continueShopping);

    if (await continueLocator.count() > 0 && await continueLocator.first().isVisible()) {
      await continueLocator.first().click();
    } else {
      await page.waitForTimeout(5000);
    }
  }
}

module.exports = { OpenUrl };
