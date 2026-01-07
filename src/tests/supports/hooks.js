const { Before, After, AfterStep, setDefaultTimeout } = require('@cucumber/cucumber');

setDefaultTimeout(120000);

function safeName(name = '') {
  return name.replace(/[<>:"/\\|?*\x00-\x1F]/g, '_').slice(0, 120);
}

Before(async function () {
  await this.init();
});

AfterStep(async function ({ pickleStep }) {
  if (!this.page || !this.attach) return;

  const stepName = safeName(pickleStep.text);

  const screenshot = await this.page.screenshot({
    path: `src/reports/screenshots/${Date.now()}_${stepName}.png`,
    fullPage: true
  });

  await this.attach(screenshot, 'image/png');
});

After(async function (scenario) {
  try {
    if (this.page && this.attach) {
      const scenarioName = safeName(scenario.pickle.name);

      const screenshot = await this.page.screenshot({
        path: `src/reports/screenshots/${Date.now()}_${scenarioName}_FINAL.png`,
        fullPage: true
      });

      await this.attach(screenshot, 'image/png');
    }
  } finally {
    await this.cleanup();
  }
});
