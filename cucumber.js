module.exports = {
  default: {
    paths: ['src/tests/features/**/*.feature'],
    require: [
      'src/tests/supports/world.js',
      'src/tests/supports/hooks.js',
      'src/tests/stepDefinitions/**/*.js',
    ],
    format: ['progress', 'json:src/reports/cucumber-report.json'],
    publishQuiet: true,

    // ✅ sube el timeout por step
    timeout: 120000
  },
};
