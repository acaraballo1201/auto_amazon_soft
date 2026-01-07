const { Urls } = require('../utils/enums/Urls');
const loginPage = require('../userInterfaces/login.inPage');
const { BrowseTheWeb } = require('../abilities/BrowseTheWeb');
const searchPage = require('../userInterfaces/search.inPage');

class LoginAmazon {
  constructor(usuario, clave) {
    this.usuario = usuario;
    this.clave = clave;
  }

  static withCredentials(usuario, clave) {
    return new LoginAmazon(usuario, clave);
  }

  async performAs(actor) {
    const { page } = actor.abilityTo(BrowseTheWeb);

    await page.goto(Urls.AMAZON_HOME);

    await page.waitForSelector(loginPage.btnIdentificate, { timeout: 15000 });
    await page.click(loginPage.btnIdentificate);
    await page.waitForSelector(loginPage.inputEmail, { timeout: 15000 });
    await page.fill(loginPage.inputEmail, this.usuario);
    await page.click(loginPage.btnContinue);
    await page.waitForSelector(loginPage.inputPassword, { timeout: 15000 });
    await page.fill(loginPage.inputPassword, this.clave);
    await page.waitForSelector(loginPage.btnSignIn, { timeout: 15000 });
    await page.click(loginPage.btnSignIn);
    await page.waitForSelector(searchPage.inputSearch, {
      timeout: 15000,
      state: 'visible',
    });
  }
}

module.exports = { LoginAmazon };
