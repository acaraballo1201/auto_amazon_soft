const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');

const { Actor } = require('../../main/utils/Actor');
const { BrowseTheWeb } = require('../../main/abilities/BrowseTheWeb');

class CustomWorld {
  constructor({ attach }) {
    // 👇 Cucumber inyecta attach aquí
    this.attach = attach;

    this.browser = null;
    this.context = null;
    this.page = null;
    this.actor = null;
  }

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();

    this.actor = new Actor('Andres')
      .whoCan(BrowseTheWeb.using(this.page));
  }

  async cleanup() {
    try {
      if (this.context) await this.context.close();
      if (this.browser) await this.browser.close();
    } catch (e) {
      // evita que falle el cierre
      console.warn('Error closing browser:', e.message);
    }
  }
}

setWorldConstructor(CustomWorld);
