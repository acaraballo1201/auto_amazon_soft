const reporter = require('multiple-cucumber-html-reporter');

reporter.generate({
  jsonDir: 'src/reports',
  reportPath: 'src/reports/html',
  reportName: 'Automation Report',
  pageTitle: 'Cucumber Report',
  displayDuration: true,
  metadata: {
    browser: { name: 'chromium' },
    device: 'Local machine',
    platform: { name: process.platform },
  },
});
